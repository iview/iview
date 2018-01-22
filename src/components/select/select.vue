<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div
            :class="selectionCls"
            ref="reference"
            @click="toggleMenu">
            <slot name="input">
                <input type="hidden" :name="name" :value="model">
                <div class="ivu-tag ivu-tag-checked" v-for="(item, index) in selectedMultiple">
                    <span class="ivu-tag-text">{{ item.label }}</span>
                    <Icon type="ios-close-empty" @click.native.stop="removeTag(index)"></Icon>
                </div>
                <span :class="[prefixCls + '-placeholder']" v-show="showPlaceholder && !filterable">{{ localePlaceholder }}</span>
                <span :class="[prefixCls + '-selected-value']" v-show="!showPlaceholder && !multiple && !filterable">{{ selectedSingle }}</span>
                <input
                    :id="elementId"
                    type="text"
                    v-if="filterable"
                    v-model="query"
                    :disabled="disabled"
                    :class="[prefixCls + '-input']"
                    :placeholder="showPlaceholder ? localePlaceholder : ''"
                    :style="inputStyle"
                    autocomplete="off"
                    spellcheck="false"
                    @blur="handleBlur"
                    @keydown="resetInputState"
                    @keydown.delete="handleInputDelete"
                    ref="input">
                <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearSingleSelect"></Icon>
                <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']" v-if="!remote"></Icon>
            </slot>
        </div>
        <transition :name="transitionName">
            <Drop
                :class="dropdownCls"
                v-show="dropVisible"
                :placement="placement"
                ref="dropdown"
                :data-transfer="transfer"
                v-transfer-dom>
                <ul v-show="notFoundShow" :class="[prefixCls + '-not-found']"><li>{{ localeNotFoundText }}</li></ul>
                <ul v-show="(!notFound && !remote) || (remote && !loading && !notFound)" :class="[prefixCls + '-dropdown-list']"><slot></slot></ul>
                <ul v-show="loading" :class="[prefixCls + '-loading']">{{ localeLoadingText }}</ul>
            </Drop>
        </transition>
    </div>
</template>
<script>
    import Icon from '../icon';
    import Drop from './dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf, findComponentDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import Locale from '../../mixins/locale';
    import { debounce } from './utils';

    const prefixCls = 'ivu-select';

    export default {
        name: 'iSelect',
        mixins: [ Emitter, Locale ],
        components: { Icon, Drop },
        directives: { clickoutside, TransferDom },
        props: {
            value: {
                type: [String, Number, Array],
                default: ''
            },
            // 使用时，也得设置 value 才行
            label: {
                type: [String, Number, Array],
                default: ''
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterMethod: {
                type: Function
            },
            remote: {
                type: Boolean,
                default: false
            },
            remoteMethod: {
                type: Function
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            labelInValue: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'bottom']);
                },
                default: 'bottom'
            },
            transfer: {
                type: Boolean,
                default: false
            },
            // Use for AutoComplete
            autoComplete: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                options: [],
                optionInstances: [],
                selectedSingle: '',    // label
                selectedMultiple: [],
                focusIndex: 0,
                query: '',
                lastQuery: '',
                selectToChangeQuery: false,    // when select an option, set this first and set query, because query is watching, it will emit event
                inputLength: 20,
                notFound: false,
                slotChangeDuration: false,    // if slot change duration and in multiple, set true and after slot change, set false
                model: this.value,
                currentLabel: this.label
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-multiple`]: this.multiple,
                        [`${prefixCls}-single`]: !this.multiple,
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            dropdownCls () {
                return {
                    [prefixCls + '-dropdown-transfer']: this.transfer,
                    [prefixCls + '-multiple']: this.multiple && this.transfer,
                    ['ivu-auto-complete']: this.autoComplete,
                };
            },
            selectionCls () {
                return {
                    [`${prefixCls}-selection`]: !this.autoComplete
                };
            },
            showPlaceholder () {
                let status = false;

                if ((typeof this.model) === 'string') {
                    if (this.model === '') {
                        status = true;
                    }
                } else if (Array.isArray(this.model)) {
                    if (!this.model.length) {
                        status = true;
                    }
                } else if( this.model === null){
                    status = true;
                }

                return status;
            },
            showCloseIcon () {
                return !this.multiple && this.clearable && !this.showPlaceholder;
            },
            inputStyle () {
                let style = {};

                if (this.multiple) {
                    if (this.showPlaceholder) {
                        style.width = '100%';
                    } else {
                        style.width = `${this.inputLength}px`;
                    }
                }

                return style;
            },
            localePlaceholder () {
                if (this.placeholder === undefined) {
                    return this.t('i.select.placeholder');
                } else {
                    return this.placeholder;
                }
            },
            localeNotFoundText () {
                if (this.notFoundText === undefined) {
                    return this.t('i.select.noMatch');
                } else {
                    return this.notFoundText;
                }
            },
            localeLoadingText () {
                if (this.loadingText === undefined) {
                    return this.t('i.select.loading');
                } else {
                    return this.loadingText;
                }
            },
            transitionName () {
                return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
            },
            dropVisible () {
                let status = true;
                const options = this.$slots.default || [];
                if (!this.loading && this.remote && this.query === '' && !options.length) status = false;

                if (this.autoComplete && !options.length) status = false;

                return this.visible && status;
            },
            notFoundShow () {
                const options = this.$slots.default || [];
                return (this.notFound && !this.remote) || (this.remote && !this.loading && !options.length);
            }
        },
        methods: {
            toggleMenu () {
                if (this.disabled || this.autoComplete) {
                    return false;
                }
                this.visible = !this.visible;
            },
            hideMenu () {
                this.visible = false;
                this.focusIndex = 0;
                this.broadcast('iOption', 'on-select-close');
            },
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.optionInstances.length) {
                    this.optionInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            updateOptions (slot = false) {
                let options = [];
                let index = 1;

                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: (child.label === undefined) ? child.$el.textContent : child.label
                    });
                    child.index = index++;

                    this.optionInstances.push(child);
                });

                this.options = options;

                if (!this.remote) {
                    this.updateSingleSelected(true, slot);
                    this.updateMultipleSelected(true, slot);
                }
            },
            updateSingleSelected (init = false, slot = false) {
                const type = typeof this.model;

                if (type === 'string' || type === 'number') {
                    let findModel = false;

                    for (let i = 0; i < this.options.length; i++) {
                        if (this.model === this.options[i].value) {
                            this.selectedSingle = this.options[i].label;
                            findModel = true;
                            break;
                        }
                    }

                    if (slot && !findModel) {
                        this.model = '';
                        this.query = '';
                    }
                }

                this.toggleSingleSelected(this.model, init);
            },
            clearSingleSelect () {
                if (this.showCloseIcon) {
                    this.findChild((child) => {
                        child.selected = false;
                    });
                    this.model = '';

                    if (this.filterable) {
                        this.query = '';
                    }
                }
            },
            updateMultipleSelected (init = false, slot = false) {
                if (this.multiple && Array.isArray(this.model)) {
                    let selected = this.remote ? this.selectedMultiple : [];

                    for (let i = 0; i < this.model.length; i++) {
                        const model = this.model[i];

                        for (let j = 0; j < this.options.length; j++) {
                            const option = this.options[j];

                            if (model === option.value) {
                                selected.push({
                                    value: option.value,
                                    label: option.label
                                });
                            }
                        }
                    }

                    const selectedArray = [];
                    const selectedObject = {};

                    selected.forEach(item => {
                        if (!selectedObject[item.value]) {
                            selectedArray.push(item);
                            selectedObject[item.value] = 1;
                        }
                    });

                    // #2066
                    this.selectedMultiple = this.remote ? this.model.length ? selectedArray : [] : selected;

                    if (slot) {
                        let selectedModel = [];

                        for (let i = 0; i < selected.length; i++) {
                            selectedModel.push(selected[i].value);
                        }

                        // if slot change and remove a selected option, emit user
                        if (this.model.length === selectedModel.length) {
                            this.slotChangeDuration = true;
                        }

                        this.model = selectedModel;
                    }
                }
                this.toggleMultipleSelected(this.model, init);
            },
            removeTag (index) {
                if (this.disabled) {
                    return false;
                }

                if (this.remote) {
                    const tag = this.model[index];
                    this.selectedMultiple = this.selectedMultiple.filter(item => item.value !== tag);
                }

                this.model.splice(index, 1);

                if (this.filterable && this.visible) {
                    this.$refs.input.focus();
                }

                this.broadcast('Drop', 'on-update-popper');
            },
            // to select option for single
            toggleSingleSelected (value, init = false) {
                if (!this.multiple) {
                    let label = '';

                    this.findChild((child) => {
                        if (child.value === value) {
                            child.selected = true;
                            label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    this.hideMenu();

                    if (!init) {
                        if (this.labelInValue) {
                            this.$emit('on-change', {
                                value: value,
                                label: label
                            });
                            this.dispatch('FormItem', 'on-form-change', {
                                value: value,
                                label: label
                            });
                        } else {
                            this.$emit('on-change', value);
                            this.dispatch('FormItem', 'on-form-change', value);
                        }
                    }
                }
            },
            // to select option for multiple
            toggleMultipleSelected (value, init = false) {
                if (this.multiple) {
                    let hybridValue = [];
                    for (let i = 0; i < value.length; i++) {
                        hybridValue.push({
                            value: value[i]
                        });
                    }

                    this.findChild((child) => {
                        const index = value.indexOf(child.value);

                        if (index >= 0) {
                            child.selected = true;
                            hybridValue[index].label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    if (!init) {
                        if (this.labelInValue) {
                            this.$emit('on-change', hybridValue);
                            this.dispatch('FormItem', 'on-form-change', hybridValue);
                        } else {
                            this.$emit('on-change', value);
                            this.dispatch('FormItem', 'on-form-change', value);
                        }
                    }
                }
            },
            handleClose () {
                this.hideMenu();
            },
            handleKeydown (e) {
                if (this.visible) {
                    const keyCode = e.keyCode;
                    // Esc slide-up
                    if (keyCode === 27) {
                        e.preventDefault();
                        this.hideMenu();
                    }
                    // next
                    if (keyCode === 40) {
                        e.preventDefault();
                        this.navigateOptions('next');
                    }
                    // prev
                    if (keyCode === 38) {
                        e.preventDefault();
                        this.navigateOptions('prev');
                    }
                    // enter
                    if (keyCode === 13) {
                        e.preventDefault();

                        this.findChild((child) => {
                            if (child.isFocus) {
                                child.select();
                            }
                        });
                    }
                }
            },
            navigateOptions (direction) {
                if (direction === 'next') {
                    const next = this.focusIndex + 1;
                    this.focusIndex = (this.focusIndex === this.options.length) ? 1 : next;
                } else if (direction === 'prev') {
                    const prev = this.focusIndex - 1;
                    this.focusIndex = (this.focusIndex <= 1) ? this.options.length : prev;
                }

                let child_status = {
                    disabled: false,
                    hidden: false
                };

                let find_deep = false;    // can next find allowed

                this.findChild((child) => {
                    if (child.index === this.focusIndex) {
                        child_status.disabled = child.disabled;
                        child_status.hidden = child.hidden;

                        if (!child.disabled && !child.hidden) {
                            child.isFocus = true;
                        }
                    } else {
                        child.isFocus = false;
                    }

                    if (!child.hidden && !child.disabled) {
                        find_deep = true;
                    }
                });

                this.resetScrollTop();

                if ((child_status.disabled || child_status.hidden) && find_deep) {
                    this.navigateOptions(direction);
                }
            },
            resetScrollTop () {
                const index = this.focusIndex - 1;
                let bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;

                if (bottomOverflowDistance > 0) {
                    this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
                }
            },
            handleBlur () {
                setTimeout(() => {
                    if (this.autoComplete) return;
                    const model = this.model;

                    if (this.multiple) {
                        this.query = '';
                    } else {
                        if (model !== '') {
                            this.findChild((child) => {
                                if (child.value === model) {
                                    this.query = child.label === undefined ? child.searchLabel : child.label;
                                }
                            });
                            // 如果删除了搜索词，下拉列表也清空了，所以强制调用一次remoteMethod
                            if (this.remote && this.query !== this.lastQuery) {
                                this.$nextTick(() => {
                                    this.query = this.lastQuery;
                                });
                            }
                        } else {
                            this.query = '';
                        }
                    }
                }, 300);
            },
            resetInputState () {
                this.inputLength = this.$refs.input.value.length * 12 + 20;
            },
            handleInputDelete () {
                if (this.multiple && this.model.length && this.query === '') {
                    this.removeTag(this.model.length - 1);
                }
            },
            // use when slot changed
            slotChange () {
                this.options = [];
                this.optionInstances = [];
            },
            setQuery (query) {
                if (!this.filterable) return;
                this.query = query;
            },
            modelToQuery() {
                if (!this.multiple && this.filterable && this.model !== undefined) {
                    this.findChild((child) => {
                        if (this.model === child.value) {
                            if (child.label) {
                                this.query = child.label;
                            } else if (child.searchLabel) {
                                this.query = child.searchLabel;
                            } else {
                                this.query = child.value;
                            }
                        }
                    });
                }
            },
            broadcastQuery (val) {
                if (findComponentDownward(this, 'OptionGroup')) {
                    this.broadcast('OptionGroup', 'on-query-change', val);
                    this.broadcast('iOption', 'on-query-change', val);
                } else {
                    this.broadcast('iOption', 'on-query-change', val);
                }
            },
            debouncedAppendRemove(){
                return debounce(function(){
                    if (!this.remote) {
                        this.modelToQuery();
                        this.$nextTick(() => this.broadcastQuery(''));
                    } else {
                        this.findChild((child) => {
                            child.updateSearchLabel();   // #1865
                            child.selected = this.multiple ? this.model.indexOf(child.value) > -1 : this.model === child.value;
                        });
                    }
                    this.slotChange();
                    this.updateOptions(true);
                });
            },
            // 处理 remote 初始值
            updateLabel () {
                if (this.remote) {
                    if (!this.multiple && this.model !== '') {
                        this.selectToChangeQuery = true;
                        if (this.currentLabel === '') this.currentLabel = this.model;
                        this.lastQuery = this.currentLabel;
                        this.query = this.currentLabel;
                    } else if (this.multiple && this.model.length) {
                        if (this.currentLabel.length !== this.model.length) this.currentLabel = this.model;
                        this.selectedMultiple = this.model.map((item, index) => {
                            return {
                                value: item,
                                label: this.currentLabel[index]
                            };
                        });
                    } else if (this.multiple && !this.model.length) {
                        this.selectedMultiple = [];
                    }
                }
            }
        },
        mounted () {
            this.modelToQuery();
            // 处理 remote 初始值
            this.updateLabel();
            this.$nextTick(() => {
                this.broadcastQuery('');
            });

            this.updateOptions();
            document.addEventListener('keydown', this.handleKeydown);

            this.$on('append', this.debouncedAppendRemove());
            this.$on('remove', this.debouncedAppendRemove());

            this.$on('on-select-selected', (value) => {
                if (this.model === value) {
                    if (this.autoComplete) this.$emit('on-change', value);
                    this.hideMenu();
                } else {
                    if (this.multiple) {
                        const index = this.model.indexOf(value);
                        if (index >= 0) {
                            this.removeTag(index);
                        } else {
                            this.model.push(value);
                            this.broadcast('Drop', 'on-update-popper');
                        }

                        if (this.filterable) {
                            // remote&filterable&multiple时，一次点多项，不应该设置true，因为无法置为false，下次的搜索会失效
                            if (this.query !== '') this.selectToChangeQuery = true;
                            this.query = '';
                            this.$refs.input.focus();
                        }
                    } else {
                        this.model = value;

                        if (this.filterable) {
                            this.findChild((child) => {
                                if (child.value === value) {
                                    if (this.query !== '') this.selectToChangeQuery = true;
                                    this.lastQuery = this.query = child.label === undefined ? child.searchLabel : child.label;
                                }
                            });
                        }
                    }
                }
            });
        },
        beforeDestroy () {
            document.removeEventListener('keydown', this.handleKeydown);
        },
        watch: {
            value (val) {
                this.model = val;
                if (val === '') this.query = '';
            },
            label (val) {
                this.currentLabel = val;
                this.updateLabel();
            },
            model () {
                this.$emit('input', this.model);
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
                    this.$nextTick(() => {
                        this.broadcastQuery('');
                    });
                }
            },
            visible (val) {
                if (val) {
                    if (this.filterable) {
                        if (this.multiple) {
                            this.$refs.input.focus();
                        } else {
                            if (!this.autoComplete) this.$refs.input.select();
                        }
                        if (this.remote) {
                            this.findChild(child => {
                                child.selected = this.multiple ? this.model.indexOf(child.value) > -1 : this.model === child.value;
                            });
                            // remote下，设置了默认值，第一次打开时，搜索一次
                            const options = this.$slots.default || [];
                            if (this.query !== '' && !options.length) {
                                this.remoteMethod(this.query);
                            }
                        }
                    }
                    this.broadcast('Drop', 'on-update-popper');
                } else {
                    if (this.filterable) {
                        if (!this.autoComplete) this.$refs.input.blur();
                        // #566 reset options visible
                        setTimeout(() => {
                            this.broadcastQuery('');
                        }, 300);
                    }
                    this.broadcast('Drop', 'on-destroy-popper');
                }
            },
            query (val) {
                if (this.remote && this.remoteMethod) {
                    if (!this.selectToChangeQuery) {
                        this.$emit('on-query-change', val);
                        this.remoteMethod(val);
                    }
                    this.focusIndex = 0;
                    this.findChild(child => {
                        child.isFocus = false;
                    });
                } else {
                    if (!this.selectToChangeQuery) {
                        this.$emit('on-query-change', val);
                    }
                    this.broadcastQuery(val);

                    let is_hidden = true;

                    this.$nextTick(() => {
                        this.findChild((child) => {
                            if (!child.hidden) {
                                is_hidden = false;
                            }
                        });
                        this.notFound = is_hidden;
                    });
                }
                this.selectToChangeQuery = false;
                this.broadcast('Drop', 'on-update-popper');
            }
        }
    };
</script>
