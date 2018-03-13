<template>
    <div
        v-click-outside.capture="onClickOutside"
        :class="wrapperClasses"
        @keydown.esc="onEscape"
        @keydown.down="onDown"
        @keydown.up="onUp"
        @keydown.enter="onEnter"
    >
        <div
            ref="reference"
            :class="selectionClasses"
            :tabindex="selectionTabindex"
            @click="toggleMenu"
            @keydown.up="selectionOnUpDown"
            @keydown.down="selectionOnUpDown"
            @keydown.tab="selectionOnTab"
            @keydown.delete="selectionOnDelete"
            @blur="selectionSetFocus"
            @focus="selectionSetFocus"
        >
            <slot name="input">
                <input
                    :name="name"
                    :value="model"
                    type="hidden"
                >
                <div
                    v-for="(item, index) in selectedMultiple"
                    :key="JSON.stringify(item)"
                    class="ivu-tag ivu-tag-checked"
                >
                    <span class="ivu-tag-text">{{item.label}}</span>
                    <Icon
                        type="ios-close-empty"
                        @click.native.stop="removeTag(index)"
                    ></Icon>
                </div>
                <span
                    v-show="isPlaceholderVisible"
                    :class="placeholderClasses"
                >{{localePlaceholder}}</span>
                <span
                    v-show="isSelectedValueVisible"
                    :class="selectedValueClasses"
                >{{selectedSingle}}</span>
                <input
                    v-if="filterable"
                    ref="input"
                    v-model="query"
                    autocomplete="off"
                    spellcheck="false"
                    :id="elementId"
                    :disabled="disabled"
                    :class="inputClasses"
                    :placeholder="placeholderText"
                    :style="inputStyle"
                    @blur="inputOnBlur"
                    @click="getPosition"
                    @focus="inputOnFocus"
                    @keyup="resetInputState"
                    @keydown.delete.stop="inputOnDelete"
                    @keydown.down="selectionOnUpDown"
                    @keydown.up="selectionOnUpDown"
                >
                <Icon
                    v-show="isCloseIconVisible"
                    type="ios-close"
                    :class="arrowIconClasses"
                    @click.native.stop="clearSingleSelect"
                ></Icon>
                <Icon
                    v-if="!remote"
                    type="arrow-down-b"
                    ref="arrow"
                    :class="arrowIconClasses"
                ></Icon>
            </slot>
        </div>
        <transition :name="transitionName">
            <Drop
                v-show="visible"
                v-transfer-dom
                ref="dropdown"
                :class="dropdownClasses"
                :placement="placement"
                :data-transfer="transfer"
            >
                <ul
                    v-show="isNotFoundVisible"
                    :class="notFoundClasses"
                >
                    <li>{{localeNotFoundText}}</li>
                </ul>
                <ul
                    v-show="isDropdownListVisible"
                    :class="dropdownListClasses"
                >
                    <slot></slot>
                </ul>
                <ul
                    v-show="isLoadingVisible"
                    :class="loadingClasses"
                >
                    {{localeLoadingText}}
                </ul>
            </Drop>
        </transition>
    </div>
</template>

<script>
    import SELECT_NAME from './selectName';
    import DROPDOWN_NAME from './dropdownName';
    import FORMITEM_NAME from '@/components/form/formItemName';
    import OPTION_NAME from './optionName';
    import OPTIONGROUP_NAME from './optionGroupName';
    import PREFIXCLS from './prefixCls';
    import Icon from '@/components/icon';
    import Drop from './dropdown.vue';
    import debounce from 'lodash.debounce';
    import vClickOutside from 'v-click-outside-x/index';
    import TransferDom from '@/directives/transfer-dom';
    import {
        composeIViewMessage,
        findComponentDownward,
        getStyle,
    } from '@/utils/assist';
    import Emitter from '@/mixins/emitter';
    import Locale from '@/mixins/locale';
    import {
        AUTO,
        ARROW,
        BOTTOM,
        CLEAR,
        COMPLETE,
        DISABLED,
        DOWN,
        DROPDOWN,
        EMPTY_STRING,
        FOCUS,
        FOCUSED,
        FOUND,
        INDEX,
        INPUT,
        IVU,
        LAST,
        LIST,
        LOADING,
        PLACEHOLDER,
        SLIDE,
        MULTIPLE,
        NEXT,
        NOT,
        PREV,
        SELECTED,
        SELECTION,
        SHOW,
        SINGLE,
        TRANSFER,
        UP,
        VALUE,
        VISIBLE,
    } from '@/utils/constants';
    /*
    import {
        ARROWUP,
        ARROWDOWN,
    } from '@/utils/kbEventKeys';
    */
    import {
        // IGNORE_KEY_LIST,
        PLACEMENT_LIST,
        SMALL_LARGE_DEFAULT_LIST,
        STRING_NUMBER_ARRAY_LIST,
    } from '@/utils/enums';
    import {
        EVENT_APPEND,
        EVENT_ON_CHANGE,
        EVENT_ON_DESTROY_POPPER,
        EVENT_ON_DESTROYED_POPPER,
        EVENT_ON_FORM_CHANGE,
        EVENT_ON_QUERY_CHANGE,
        EVENT_ON_SELECT_CLOSE,
        EVENT_ON_SELECT_SELECTED,
        EVENT_ON_UPDATE_POPPER,
        EVENT_ON_UPDATED_POPPER,
        EVENT_REMOVE,
    } from '@/utils/eventNames';
    import defineValidatorProperties from 'caboodle-x/defineValidatorProperties';
    import isBooleanType from 'caboodle-x/isBooleanType';
    import isFunctionType from 'caboodle-x/isFunctionType';
    import isNil from 'caboodle-x/isNil';
    import isNull from 'caboodle-x/isNull';
    import isOneOf from 'caboodle-x/isOneOf';
    import isPopulatedString from 'caboodle-x/isPopulatedString';
    import isSearchIndex from 'caboodle-x/isSearchIndex';
    import isStringType from 'caboodle-x/isStringType';
    import isUniq from 'caboodle-x/isUniq';
    import isValidHtmlId from 'caboodle-x/isValidHtmlId';
    import isWholeNumber from 'caboodle-x/isWholeNumber';
    import kebabJoin from 'caboodle-x/kebabJoin';
    import noop from 'caboodle-x/noop';
    import parseDecimal from 'caboodle-x/parseDecimal';
    import {
        isUniqOptions,
        isValidValue,
    } from './utils';

    const INPUT_LENGTH = 20;
    const prefixCls = PREFIXCLS;
    const ISFOCUS = 'isFocus';

    const component = {
        name: SELECT_NAME,

        components: {Icon, Drop},

        directives: {clickOutside: vClickOutside.directive, TransferDom},

        mixins: [Emitter, Locale],

        props: {
            // Use for AutoComplete
            autoComplete: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            clearable: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            disabled: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            elementId: {
                default: undefined,
                type: String,
                validator: isValidHtmlId,
            },
            filterable: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            filterMethod: {
                default: undefined,
                type: Function,
                validator: isFunctionType,
            },
            // 使用时，也得设置 value 才行
            // Use, you have to set the value of the line
            label: {
                default: undefined,
                type: STRING_NUMBER_ARRAY_LIST,
                validator: isValidValue,
            },
            loading: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            loadingText: {
                default: undefined,
                type: String,
                validator: isStringType,
            },
            multiple: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            name: {
                default: undefined,
                type: String,
                validator: isPopulatedString,
            },
            notFoundText: {
                default: undefined,
                type: String,
                validator: isStringType,
            },
            placeholder: {
                default: undefined,
                type: String,
                validator: isStringType,
            },
            placement: {
                default: BOTTOM,
                type: String,
                validator(value){
                    return isOneOf(value, PLACEMENT_LIST);
                },
            },
            remoteMethod: {
                default: undefined,
                type: Function,
                validator: isFunctionType,
            },
            size: {
                default: undefined,
                type: String,
                validator(value){
                    return isOneOf(value, SMALL_LARGE_DEFAULT_LIST);
                },
            },
            transfer: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            value: {
                default: undefined,
                type: STRING_NUMBER_ARRAY_LIST,
                validator: isValidValue,
            },
        },

        data(){
            const remote = !!this.remoteMethod;

            return defineValidatorProperties({}, {
                currentLabel: {
                    nilable: isNil(component.props.label.default),
                    validator: isValidValue,
                    value: this.label,
                },
                focused: {
                    validator: isBooleanType,
                    value: false,
                },
                focusIndex: {
                    validator: isWholeNumber,
                    value: 0,
                },
                inputLength: {
                    validator: isWholeNumber,
                    value: INPUT_LENGTH,
                },
                model: {
                    nilable: isNil(component.props.value.default),
                    validator: isValidValue,
                    value: this.value,
                },
                notFound: {
                    validator: isBooleanType,
                    value: false,
                },
                options: {
                    validator: Array.isArray,
                    value: [],
                },
                optionInstances: {
                    validator: Array.isArray,
                    value: [],
                },
                query: {
                    validator: isStringType,
                    value: EMPTY_STRING,
                },
                remote: {
                    validator: isBooleanType,
                    value: remote,
                },
                remoteMethodDebounced: {
                    validator: isFunctionType,
                    value: remote ? debounce(this.remoteMethod, 500) : noop,
                },
                selectToChangeQuery: {
                    validator: isBooleanType,
                    value: false,
                },
                selectedSingle: {
                    validator: isStringType,
                    value: EMPTY_STRING,
                },
                selectionStart: {
                    validator: isSearchIndex,
                    value: -1,
                },
                selectedMultiple: {
                    validator: Array.isArray,
                    value: [],
                },
                slotChangeDuration: {
                    validator: isBooleanType,
                    value: false,
                },
                visible: {
                    validator: isBooleanType,
                    value: false,
                },
            });
        },

        computed: {
            arrowIconClasses(){
                return [
                    kebabJoin(prefixCls, ARROW),
                ];
            },

            dropdownClasses(){
                return {
                    [kebabJoin(IVU, AUTO, COMPLETE)]: this.autoComplete,
                    [kebabJoin(prefixCls, DROPDOWN, TRANSFER)]: this.transfer,
                    [kebabJoin(prefixCls, MULTIPLE)]: this.multiple && this.transfer,
                };
            },

            dropdownListClasses(){
                return [
                    kebabJoin(prefixCls, DROPDOWN, LIST),
                ];
            },

            inputClasses(){
                return [
                    kebabJoin(prefixCls, INPUT),
                ];
            },

            inputStyle(){
                if (this.multiple) {
                    return {
                        width: this.showPlaceholder ? '100%' : `${this.inputLength}px`,
                    };
                }

                return {};
            },

            isCloseIconVisible(){
                return !this.multiple && this.clearable && !this.showPlaceholder;
            },

            isDropdownListVisible(){
                if (this.notFound) {
                    return false;
                }

                return this.remote ? !this.loading : true;
            },

            isLoadingVisible(){
                if (this.loading) {
                    this.showMenu();
                }

                return this.loading;
            },

            isNotFoundVisible(){
                if (this.query === EMPTY_STRING) {
                    return false;
                }

                const isVisible = this.remote ? !this.loading && this.getOptions().length < 1 : this.notFound;

                if (isVisible) {
                    this.showMenu();
                }

                return isVisible;
            },

            isPlaceholderVisible(){
                return this.showPlaceholder && !this.filterable;
            },

            isSelectedValueVisible(){
                return !this.showPlaceholder && !this.multiple && !this.filterable;
            },

            loadingClasses(){
                return [
                    kebabJoin(prefixCls, LOADING),
                ];
            },

            localeLoadingText(){
                return this.getTextOrTranslate(this.loadingText, 'i.select.loading');
            },

            localeNotFoundText(){
                return this.getTextOrTranslate(this.notFoundText, 'i.select.noMatch');
            },

            localePlaceholder(){
                return this.getTextOrTranslate(this.placeholder, 'i.select.placeholder');
            },

            notFoundClasses(){
                return [
                    kebabJoin(prefixCls, NOT, FOUND),
                ];
            },

            placeholderClasses(){
                return [
                    kebabJoin(prefixCls, PLACEHOLDER),
                ];
            },

            placeholderText(){
                return this.showPlaceholder ? this.localePlaceholder : EMPTY_STRING;
            },

            selectedValueClasses(){
                return [
                    kebabJoin(prefixCls, SELECTED, VALUE),
                ];
            },

            selectionClasses(){
                return {
                    [kebabJoin(prefixCls, SELECTION)]: !this.autoComplete,
                };
            },

            showPlaceholder(){
                return this.model.length < 1;
            },

            selectionTabindex(){
                return this.disabled || this.filterable ? -1 : 0;
            },

            transitionName(){
                return kebabJoin(SLIDE, this.placement === BOTTOM ? UP : DOWN);
            },

            wrapperClasses(){
                return [
                    prefixCls,
                    {
                        [kebabJoin(prefixCls, DISABLED)]: this.disabled,
                        [kebabJoin(prefixCls, FOCUSED)]: !this.visible && this.focused,
                        [kebabJoin(prefixCls, MULTIPLE)]: this.multiple,
                        [kebabJoin(prefixCls, SINGLE)]: !this.multiple,
                        [kebabJoin(prefixCls, SHOW, CLEAR)]: this.isCloseIconVisible,
                        [kebabJoin(prefixCls, this.size)]: !!this.size,
                        [kebabJoin(prefixCls, VISIBLE)]: this.visible,
                    },
                ];
            },
        },

        watch: {
            focused(val){
                if (!val) {
                    if (this.filterable) {
                        this.selectionStart = -1;

                        if (this.multiple || this.model === EMPTY_STRING) {
                            this.query = EMPTY_STRING;
                        } else {
                            this.query = this.model;
                        }

                        // #566 reset options visible
                        this.$nextTick(() => this.broadcastQuery(EMPTY_STRING));
                    }

                    /*
                      if (this.remote) {
                          this.remoteMethodDebounced(EMPTY_STRING);
                      }
                      */
                }
            },

            label(val){
                this.currentLabel = val;
                this.updateLabel();
            },

            model(){
                this.validateModel();
                this.$emit(INPUT, this.model);
                this.modelToQuery();

                if (this.multiple) {
                    if (this.slotChangeDuration) {
                        this.slotChangeDuration = false;
                    } else {
                        this.updateMultipleSelected();
                    }
                } else {
                    this.updateSingleSelected();
                }

                // #957
                if (!this.visible && this.filterable) {
                    this.$nextTick(() => this.broadcastQuery(EMPTY_STRING));
                }
            },

            options(){
                if (!isUniqOptions(this.options)) {
                    // eslint-disable-next-line no-console
                    console.warn(composeIViewMessage('i-options are not unique, this may cause problems.'));
                }
            },

            query(val){
                if (this.remote) {
                    if (!this.selectToChangeQuery) {
                        this.$emit(EVENT_ON_QUERY_CHANGE, val);
                        this.remoteMethodDebounced(val);
                    }

                    this.focusIndex = 0;
                    this.findChild(child => this.setProperty(child, ISFOCUS, false));
                } else {
                    if (!this.selectToChangeQuery) {
                        this.$emit(EVENT_ON_QUERY_CHANGE, val);
                    }

                    this.broadcastQuery(val);

                    this.$nextTick(() => {
                        let isHidden = true;

                        this.findChild((child) => {
                            if (!child.hidden) {
                                isHidden = false;
                            }
                        });

                        this.notFound = isHidden;
                    });
                }

                this.selectToChangeQuery = false;
                this.broadcast(DROPDOWN_NAME, EVENT_ON_UPDATE_POPPER);
            },

            value(val){
                this.model = val;

                // #982 or is null?
                if (val === EMPTY_STRING || isNull(val)) {
                    this.query = EMPTY_STRING;
                }
            },

            visible(val){
                if (val) {
                    if (this.filterable) {
                        const {
                            input,
                        } = this.$refs;

                        if (this.multiple) {
                            input.focus();
                        } else if (!this.autoComplete) {
                            input.select();

                            const cursorAt = this.selectionStart === -1 ? input.value.length : this.selectionStart;

                            input.setSelectionRange(cursorAt, cursorAt);
                            this.selectionStart = -1;
                        }

                        if (this.remote) {
                            const {
                                model,
                                multiple,
                            } = this;

                            this.findChild((child) => {
                                const {
                                    value,
                                } = child;

                                const selected = multiple ? model.includes(value) : model === value;

                                this.setProperty(child, SELECTED, selected);
                            });
                        }
                    }

                    this.broadcast(DROPDOWN_NAME, EVENT_ON_UPDATE_POPPER);
                } else {
                    this.broadcast(DROPDOWN_NAME, EVENT_ON_DESTROY_POPPER);
                }
            },
        },

        created(){
            this.validateModel();
        },

        mounted(){
            this.modelToQuery();
            // 处理 remote 初始值
            this.updateLabel();
            this.$nextTick(() => {
                this.broadcastQuery(EMPTY_STRING);
            });

            this.updateOptions();

            this.$on(EVENT_APPEND, this.debouncedAppendRemove());
            this.$on(EVENT_REMOVE, this.debouncedAppendRemove());

            this.$on(EVENT_ON_SELECT_SELECTED, (value) => {
                if (this.model === value) {
                    // console.log('value');
                    if (this.autoComplete) {
                        this.$emit(EVENT_ON_CHANGE, value);
                    }

                    this.hideMenu();
                    this.query = value;
                } else if (this.multiple) {
                    // console.log('multiple');
                    const index = this.model.findIndex(model => model === value);

                    if (isWholeNumber(index)) {
                        this.removeTag(index);
                    } else {
                        this.model.push(value);
                        this.broadcast(DROPDOWN_NAME, EVENT_ON_UPDATE_POPPER);
                    }

                    if (this.filterable) {
                        // remote&filterable&multiple时，一次点多项，不应该设置true，
                        // 因为无法置为false，下次的搜索会失效
                        if (this.query !== EMPTY_STRING) {
                            this.selectToChangeQuery = true;
                        }
                    }
                } else {
                    // console.log('else');
                    this.hideMenu();
                    this.model = value;

                    if (this.filterable) {
                        this.findChild((child) => {
                            if (child.value === value) {
                                if (this.query !== EMPTY_STRING) {
                                    this.selectToChangeQuery = true;
                                }

                                this.query = this.getChildValue(child);
                            }
                        });

                        // only selected
                        if (this.remote) {
                            this.selectionStart = -1;
                            this.remoteMethodDebounced(this.query);
                        }
                    }
                }

                this.focusElement();
            });

            this.$on(EVENT_ON_DESTROYED_POPPER, () => {
                // console.log(EVENT_ON_DESTROYED_POPPER);
            });

            this.$on(EVENT_ON_UPDATED_POPPER, () => {
                // console.log(EVENT_ON_UPDATED_POPPER);
            });
        },

        methods: {
            broadcastQuery(val){
                if (findComponentDownward(this, OPTIONGROUP_NAME)) {
                    this.broadcast(OPTIONGROUP_NAME, EVENT_ON_QUERY_CHANGE, val);
                }

                this.broadcast(OPTION_NAME, EVENT_ON_QUERY_CHANGE, val);
            },

            clearSingleSelect(){
                if (this.isCloseIconVisible) {
                    this.findChild(child => this.setProperty(child, SELECTED, false));
                    this.model = EMPTY_STRING;

                    if (this.filterable) {
                        this.query = EMPTY_STRING;
                    }
                }
            },

            handleClose(){
                this.hideMenu();
            },

            debouncedAppendRemove(){
                const appendRemove = () => {
                    // console.log('debouncedAppendRemove', this);
                    if (this.remote) {
                        this.findChild((child) => {
                            child.updateSearchLabel(); // #1865
                            const {
                                value,
                            } = child;

                            const selected = this.multiple ? this.model.includes(value) : this.model === value;

                            this.setProperty(child, SELECTED, selected);
                        });
                    } else {
                        this.modelToQuery();
                        this.$nextTick(() => this.broadcastQuery(EMPTY_STRING));
                    }

                    this.slotChange();
                    this.updateOptions(true);
                };

                return debounce(appendRemove, 300);
            },

            // find option component
            findChild(cb){
                const instances = this.optionInstances.length > 0 ? this.optionInstances : this.$children;
                const find = (child) => {
                    const {
                        $children,
                        $options,
                    } = child;

                    if ($options.name === OPTION_NAME) {
                        cb(child);
                    } else if ($children.length > 0) {
                        $children.forEach(find);
                    }
                };

                return instances.forEach(find);
            },

            focusElement(){
                const {
                    input,
                    reference,
                } = this.$refs;

                const ref = this.filterable ? input : reference;

                ref.focus();
            },

            getChildValue({label, searchLabel, value}){
                return label || searchLabel || value;
            },

            getLabelOrContent({label, $el}){
                return label || $el.textContent;
            },

            getOptions(){
                return this.$slots.default || [];
            },

            getPosition(event){
                if (this.filterable && this.query !== EMPTY_STRING) {
                    this.selectionStart = event.target.selectionStart;
                }
            },

            getTextOrTranslate(text, key){
                return text || this.t(key);
            },

            hideMenu(){
                const {
                    visible,
                } = this;

                this.visible = false;
                this.focusIndex = 0;

                if (visible) {
                    this.broadcast(OPTION_NAME, EVENT_ON_SELECT_CLOSE);
                }
            },

            inputOnBlur(){
                if (this.disabled) {
                    return;
                }

                if (!this.visible) {
                    this.focused = false;
                }
            },

            inputOnDelete(){
                if (this.multiple && this.filterable && this.query === EMPTY_STRING && this.model.length > 0) {
                    this.removeTag(LAST);
                }
            },

            inputOnFocus(){
                if (this.disabled || !this.filterable) {
                    return;
                }

                this.focused = true;
            },

            modelToQuery(){
                if (!this.multiple && this.filterable) {
                    this.setQueryFromModel();
                }
            },

            navigateOptions(direction){
                if (direction === NEXT) {
                    this.focusIndex = this.focusIndex === this.options.length ? 1 : this.focusIndex + 1;
                } else if (direction === PREV) {
                    this.focusIndex = this.focusIndex <= 1 ? this.options.length : this.focusIndex - 1;
                } else {
                    throw new Error(composeIViewMessage(`direction is neither "${NEXT}" or "${PREV}"`));
                }

                const childStatus = {
                    disabled: false,
                    hidden: false,
                };

                let findDeep = false; // can next find allowed

                this.findChild((child) => {
                    if (child.index === this.focusIndex) {
                        childStatus.disabled = child.disabled;
                        childStatus.hidden = child.hidden;

                        if (!child.disabled && !child.hidden) {
                            this.setProperty(child, ISFOCUS, true);
                        }
                    } else {
                        this.setProperty(child, ISFOCUS, false);
                    }

                    if (!child.hidden && !child.disabled) {
                        findDeep = true;
                    }
                });

                this.resetScrollTop();

                if (findDeep && (childStatus.disabled || childStatus.hidden)) {
                    this.navigateOptions(direction);
                }
            },

            onClickOutside(event){
                if (this.visible) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.hideMenu();
                    this.focusElement();
                } else {
                    this.focused = false;
                }
            },

            onDown(event){
                if (this.visible) {
                    event.preventDefault();
                    this.navigateOptions(NEXT);
                }
            },

            onEnter(event){
                if (this.visible) {
                    event.preventDefault();

                    this.findChild((child) => {
                        if (child.isFocus) {
                            child.select();
                        }
                    });
                }
            },

            onEscape(event){
                if (this.visible) {
                    event.preventDefault();
                    this.hideMenu();
                }
            },

            onUp(event){
                if (this.visible) {
                    event.preventDefault();
                    this.navigateOptions(PREV);
                }
            },

            removeTag(index){
                if (this.disabled) {
                    return;
                }

                const idx = index === LAST ? this.model.length - 1 : index;

                if (this.remote) {
                    const tag = this.model[idx];

                    this.selectedMultiple = this.selectedMultiple.filter(({value}) => value !== tag);
                }

                this.model.splice(idx, 1);

                if (this.filterable && this.visible) {
                    this.$refs.input.focus();
                }

                this.broadcast(DROPDOWN_NAME, EVENT_ON_UPDATE_POPPER);
            },

            resetInputState(event){
                const {
                    target,
                } = event;

                // console.log('resetInputState');
                this.getPosition(event);

                const fontSize = getStyle(target, 'font-size');
                const fontSizeValue = parseDecimal(fontSize);

                this.inputLength = (target.value.length * fontSizeValue) + INPUT_LENGTH;
            },

            resetRemoteVisible(){
                if (!this.remote) {
                    return;
                }

                if (this.visible && this.query === EMPTY_STRING) {
                    this.hideMenu();
                }
            },

            resetScrollTop(){
                if (this.optionInstances.length < 1) {
                    return;
                }

                const {
                    bottom,
                    top,
                } = this.optionInstances[this.focusIndex - 1].$el.getBoundingClientRect();

                const {
                    $el,
                } = this.$refs.dropdown;

                const {
                    bottom: bottomEl,
                    top: topEl,
                } = $el.getBoundingClientRect();

                const bottomOverflowDistance = bottom - bottomEl;
                if (bottomOverflowDistance > 0) {
                    $el.scrollTop += bottomOverflowDistance;
                }

                const topOverflowDistance = top - topEl;
                if (topOverflowDistance < 0) {
                    $el.scrollTop += topOverflowDistance;
                }
            },

            showMenu(){
                this.visible = true;
            },

            selectionOnDelete(){
                if (this.disabled || this.visible || this.autoComplete) {
                    return;
                }

                if (this.multiple) {
                    this.removeTag(LAST);
                } else if (this.clearable) {
                    this.clearSingleSelect();
                }
            },

            selectionOnTab(event){
                if (this.visible) {
                    event.preventDefault();
                }
            },

            selectionOnUpDown(){
                if (!this.visible && this.getOptions().length > 0) {
                    this.showMenu();
                }
            },

            selectionSetFocus({type}){
                if (this.disabled) {
                    return;
                }

                if (this.filterable) {
                    this.focusElement();

                    return;
                }

                if (type === FOCUS) {
                    this.focused = true;
                } else if (!this.visible) {
                    this.focused = false;
                }
            },

            setProperty(object, property, value){
                if (!Reflect.set(object, property, value)) {
                    throw new Error(composeIViewMessage('Failed to set `${property}`'));
                }

                return object;
            },

            setQuery(query){
                if (!this.filterable) {
                    return;
                }

                this.query = query;
            },

            setQueryFromModel(){
                this.findChild((child) => {
                    if (child.value === this.model) {
                        this.query = this.getChildValue(child);
                    }
                });
            },

            // use when slot changed
            slotChange(){
                this.options = [];
                this.optionInstances = [];
            },

            toggleMenu(event){
                if (this.disabled || this.autoComplete) {
                    return;
                }

                if (this.multiple) {
                    if (this.filterable) {
                        const {
                            arrow,
                            input,
                        } = this.$refs;

                        const isInput = event.target === input;
                        const isArrow = arrow ? event.target === arrow.$el : true;

                        if (!isInput && !isArrow) {
                            const {
                                length,
                            } = input.value;

                            input.setSelectionRange(length, length);
                            this.selectionStart = -1;
                        }
                    }

                    if (this.visible) {
                        this.focusElement();
                    }
                }

                // console.log('toggleMenu3');
                if (this.getOptions().length > 0) {
                    if (this.visible) {
                        this.hideMenu();
                    } else {
                        this.showMenu();
                    }
                } else {
                    this.hideMenu();
                }
            },

            // to select option for multiple
            toggleMultipleSelected(init = false){
                if (this.multiple) {
                    const hybridValue = this.model.map(value => ({value}));

                    this.findChild((child) => {
                        const index = this.model.findIndex(value => child.value === value);

                        this.setProperty(child, SELECTED, isWholeNumber(index));

                        if (child.selected) {
                            hybridValue[index].label = this.getLabelOrContent(child);
                        }
                    });

                    if (!init) {
                        const val = this.labelInValue ? hybridValue : this.model;

                        this.$emit(EVENT_ON_CHANGE, val);
                        this.dispatch(FORMITEM_NAME, EVENT_ON_FORM_CHANGE, val);
                    }
                }
            },

            // to select option for single
            toggleSingleSelected(init = false){
                if (!this.multiple) {
                    let foundLabel = EMPTY_STRING;

                    this.findChild((child) => {
                        this.setProperty(child, SELECTED, child.value === this.model);

                        if (child.selected) {
                            foundLabel = this.getLabelOrContent(child);
                        }
                    });

                    this.hideMenu();

                    if (!init) {
                        const val = this.labelInValue ? {value: this.model, label: foundLabel} : this.model;

                        this.$emit(EVENT_ON_CHANGE, val);
                        this.dispatch(FORMITEM_NAME, EVENT_ON_FORM_CHANGE, val);
                    }
                }
            },

            // 处理 remote 初始值
            updateLabel(){
                if (this.remote) {
                    if (this.multiple) {
                        if (this.model.length > 0) {
                            if (this.currentLabel.length !== this.model.length) {
                                this.currentLabel = this.model;
                            }

                            const {
                                currentLabel,
                            } = this;

                            this.selectedMultiple = this.model.map((value, index) => ({
                                label: currentLabel[index],
                                value,
                            }));
                        } else {
                            this.selectedMultiple = [];
                        }
                    } else if (this.model !== EMPTY_STRING) {
                        this.selectToChangeQuery = true;

                        if (this.currentLabel === EMPTY_STRING) {
                            this.currentLabel = this.model;
                        }

                        this.query = this.currentLabel;
                    }
                }
            },

            updateMultipleSelected(init = false, slot = false){
                if (this.multiple) {
                    const selecteds = this.remote ? this.selectedMultiple : [];

                    this.model.forEach((modelValue) => {
                        this.options.forEach(({label, value}) => {
                            if (value === modelValue) {
                                selecteds.push({label, value});
                            }
                        });
                    });

                    const selectedArray = [];

                    selecteds.reduce((selectedObject, selected) => {
                        if (selectedObject[selected.value]) {
                            return selectedObject;
                        }

                        selectedArray.push(selected);

                        return {
                            ...selectedObject,
                            [selected.value]: true,
                        };
                    }, Object.create(null));

                    // #2066
                    if (this.remote) {
                        this.selectedMultiple = this.model.length > 0 ? selectedArray : [];
                    } else {
                        this.selectedMultiple = selecteds;
                    }

                    if (slot) {
                        const selectedModel = selecteds.map(({value}) => value);

                        // if slot change and remove a selected option, emit user
                        if (this.model.length === selectedModel.length) {
                            this.slotChangeDuration = true;
                        }

                        this.model = selectedModel;
                    }

                    this.toggleMultipleSelected(init);
                }
            },

            updateOptions(slot = false){
                const options = [];
                let index = 1;

                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: this.getLabelOrContent(child),
                    });

                    this.setProperty(child, INDEX, index);

                    index += 1;

                    this.optionInstances.push(child);
                });

                this.options = options;

                if (!this.remote) {
                    if (this.multiple) {
                        this.updateMultipleSelected(true, slot);
                    } else {
                        this.updateSingleSelected(true, slot);
                    }
                }
            },

            updateSingleSelected(init = false, slot = false){
                if (!this.multiple) {
                    const findModel = this.options.find(({value}) => (value === this.model));

                    if (findModel) {
                        this.selectedSingle = findModel.label;
                    } else if (slot) {
                        this.model = EMPTY_STRING;
                        this.query = EMPTY_STRING;
                    }

                    this.toggleSingleSelected(init);
                }
            },

            validateModel(){
                if (this.multiple) {
                    if (!Array.isArray(this.model)) {
                        // eslint-disable-next-line no-console
                        console.warn(composeIViewMessage('Multiple mode expects v-model to be an array.'));
                    } else if (!isUniq(this.model)) {
                        // eslint-disable-next-line no-console
                        console.warn(composeIViewMessage('Multiple mode v-model contains duplicates.'));
                    }
                } else if (Array.isArray(this.model)) {
                    // eslint-disable-next-line no-console
                    console.warn(composeIViewMessage('Single mode expects v-model to be a string or number.'));
                }
            },
        },
    };

    export default component;
</script>
