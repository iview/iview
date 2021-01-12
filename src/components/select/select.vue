<template>
    <div
        :class="classes"
        v-click-outside:[capture]="onClickOutside"
        v-click-outside:[capture].mousedown="onClickOutside"
        v-click-outside:[capture].touchstart="onClickOutside"
    >
        <div
            ref="reference"

            :class="selectionCls"
            :tabindex="selectTabindex"

            @blur="toggleHeaderFocus"
            @focus="toggleHeaderFocus"

            @click="toggleMenu"
            @keydown.esc="handleKeydown"
            @keydown.enter="handleKeydown"
            @keydown.up.prevent="handleKeydown"
            @keydown.down.prevent="handleKeydown"
            @keydown.tab="handleKeydown"
            @keydown.delete="handleKeydown"

            @mouseenter="hasMouseHoverHead = true"
            @mouseleave="hasMouseHoverHead = false"
        >
            <slot name="input">
                <input type="hidden" :name="name" :value="publicValue">
                <select-head
                    :filterable="filterable"
                    :multiple="multiple"
                    :values="values"
                    :clearable="canBeCleared"
                    :prefix="prefix"
                    :disabled="itemDisabled"
                    :remote="remote"
                    :input-element-id="elementId"
                    :initial-label="initialLabel"
                    :placeholder="placeholder"
                    :query-prop="query"
                    :max-tag-count="maxTagCount"
                    :max-tag-placeholder="maxTagPlaceholder"
                    :allow-create="allowCreate"
                    :show-create-item="showCreateItem"

                    @on-query-change="onQueryChange"
                    @on-input-focus="isFocused = true"
                    @on-input-blur="isFocused = false"
                    @on-clear="clearSingleSelect"
                    @on-enter="handleCreateItem"
                >
                    <slot name="prefix" slot="prefix"></slot>
                </select-head>
            </slot>
        </div>
        <transition name="transition-drop">
            <Drop
                :class="dropdownCls"
                v-show="dropVisible"
                :placement="placement"
                ref="dropdown"
                :data-transfer="transfer"
                :transfer="transfer"
                v-transfer-dom
            >
                <ul v-show="showNotFoundLabel && !allowCreate" :class="[prefixCls + '-not-found']"><li>{{ localeNotFoundText }}</li></ul>

                <functional-options
                    v-if="(!remote) || (remote && !loading)"
                    :options="selectOptions"
                    :slot-update-hook="updateSlotOptions"
                    :slot-options="slotOptions"
                    :class="prefixCls + '-dropdown-list'"
                >
                    <li :class="prefixCls + '-item'" v-if="showCreateItem" @click="handleCreateItem">
                        {{ query }}
                        <Icon type="md-return-left" :class="prefixCls + '-item-enter'" />
                    </li>
                </functional-options>
                <ul :class="prefixCls + '-dropdown-list'" v-else>
                    <li :class="prefixCls + '-item'" v-if="showCreateItem" @click="handleCreateItem">
                        {{ query }}
                        <Icon type="md-return-left" :class="prefixCls + '-item-enter'" />
                    </li>
                </ul>

                <ul v-show="loading" :class="[prefixCls + '-loading']">{{ localeLoadingText }}</ul>
            </Drop>
        </transition>
    </div>
</template>
<script>
    import Drop from './dropdown.vue';
    import Icon from '../icon';
    import {directive as clickOutside} from '../../directives/v-click-outside-x';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf, findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';
    import Locale from '../../mixins/locale';
    import SelectHead from './select-head.vue';
    import FunctionalOptions from './functional-options.vue';

    const prefixCls = 'ivu-select';
    const optionRegexp = /^i-option$|^Option$/i;
    const optionGroupRegexp = /option-?group/i;

    const findChild = (instance, checkFn) => {
        let match = checkFn(instance);
        if (match) return instance;
        for (let i = 0, l = instance.$children.length; i < l; i++){
            const child = instance.$children[i];
            match = findChild(child, checkFn);
            if (match) return match;
        }
    };

    const findOptionsInVNode = (node) => {
        const opts = node.componentOptions;
        if (opts && opts.tag.match(optionRegexp)) return [node];
        if (!node.children && (!opts || !opts.children)) return [];
        const children = [...(node.children || []), ...(opts && opts.children || [])];
        const options = children.reduce(
            (arr, el) => [...arr, ...findOptionsInVNode(el)], []
        ).filter(Boolean);
        return options.length > 0 ? options : [];
    };

    const extractOptions = (options) => options.reduce((options, slotEntry) => {
        return options.concat(findOptionsInVNode(slotEntry));
    }, []);

    const applyProp = (node, propName, value) => {
        return {
            ...node,
            componentOptions: {
                ...node.componentOptions,
                propsData: {
                    ...node.componentOptions.propsData,
                    [propName]: value,
                }
            }
        };
    };

    const getNestedProperty = (obj, path) => {
        const keys = path.split('.');
        return keys.reduce((o, key) => o && o[key] || null, obj);
    };

    const getOptionLabel = option => {
        if (option.componentOptions.propsData.label) return option.componentOptions.propsData.label;
        const textContent = (option.componentOptions.children || []).reduce((str, child) => str + (child.text || ''), '');
        const innerHTML = getNestedProperty(option, 'data.domProps.innerHTML');
        return textContent || (typeof innerHTML === 'string' ? innerHTML : '');
    };

    const checkValuesNotEqual = (value,publicValue,values) => {
        const strValue = JSON.stringify(value);
        const strPublic = JSON.stringify(publicValue);
        const strValues = JSON.stringify(values.map( item => {
            return item.value;
        }));
        return strValue !== strPublic || strValue !== strValues || strValues !== strPublic;
    };


    const ANIMATION_TIMEOUT = 300;

    export default {
        name: 'iSelect',
        mixins: [ Emitter, Locale, mixinsForm ],
        components: { FunctionalOptions, Drop, SelectHead, Icon },
        directives: { clickOutside, TransferDom },
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
            // 4.4.0
            defaultLabel: {
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
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
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
                    return oneOf(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
                },
                default: 'bottom-start'
            },
            transfer: {
                type: Boolean,
                default () {
                    return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
                }
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
            },
            transferClassName: {
                type: String
            },
            // 3.4.0
            prefix: {
                type: String
            },
            // 3.4.0
            maxTagCount: {
                type: Number
            },
            // 3.4.0
            maxTagPlaceholder: {
                type: Function
            },
            // 4.0.0
            allowCreate: {
                type: Boolean,
                default: false
            },
            // 4.0.0
            capture: {
                type: Boolean,
                default () {
                    return !this.$IVIEW ? true : this.$IVIEW.capture;
                }
            },
            // 4.2.0
            // 搜索时，只按 label 进行搜索
            filterByLabel: {
                type: Boolean,
                default: false
            }
        },
        mounted(){
            this.$on('on-select-selected', this.onOptionClick);

            // set the initial values if there are any
            if (!this.remote && this.selectOptions.length > 0){
                this.values = this.getInitialValue().map(value => {
                    if (typeof value !== 'number' && !value) return null;
                    return this.getOptionData(value);
                }).filter(Boolean);
            }

            this.checkUpdateStatus();

            // remote search, set default-label
            if (this.remote && this.value && this.defaultLabel) {
                if (!this.multiple) {
                    this.query = this.defaultLabel;
                } else if (this.multiple && (this.defaultLabel instanceof Array) && this.value.length === this.defaultLabel.length) {
                    const values = this.value.map((item, index) => {
                        return {
                            value: item,
                            label: this.defaultLabel[index]
                        };
                    });
                    this.$emit('on-set-default-options', JSON.parse(JSON.stringify(values)));
                    setTimeout(() => {
                        this.values = values;
                    });
                }
            }
        },
        beforeDestroy () {
            this.$off('on-select-selected');
        },
        data () {
            return {
                prefixCls: prefixCls,
                values: [],
                dropDownWidth: 0,
                visible: false,
                focusIndex: -1,
                isFocused: false,
                query: '',
                initialLabel: this.label,
                hasMouseHoverHead: false,
                slotOptions: this.$slots.default,
                caretPosition: -1,
                lastRemoteQuery: '',
                unchangedQuery: true,
                hasExpectedValue: false,
                isTyping: false,  // #728
                preventRemoteCall: false,
                filterQueryChange: false,  // #4273
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
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
                    [this.transferClassName]: this.transferClassName
                };
            },
            selectionCls () {
                return {
                    [`${prefixCls}-selection`]: !this.autoComplete,
                    [`${prefixCls}-selection-focused`]: this.isFocused
                };
            },
            localeNotFoundText () {
                if (typeof this.notFoundText === 'undefined') {
                    return this.t('i.select.noMatch');
                } else {
                    return this.notFoundText;
                }
            },
            localeLoadingText () {
                if (typeof this.loadingText === 'undefined') {
                    return this.t('i.select.loading');
                } else {
                    return this.loadingText;
                }
            },
            showCreateItem () {
                let state = false;
                if (this.allowCreate && this.query !== '') {
                    state = true;
                    const $options = findComponentsDownward(this, 'iOption');
                    if ($options && $options.length) {
                        if ($options.find(item => item.optionLabel === this.query)) state = false;
                    }
                }
                return  state;
            },
            transitionName () {
                return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
            },
            dropVisible () {
                let status = true;
                const noOptions = !this.selectOptions || this.selectOptions.length === 0;
                if (!this.loading && this.remote && this.query === '' && noOptions) status = false;

                if (this.autoComplete && noOptions) status = false;

                return this.visible && status;
            },
            showNotFoundLabel () {
                const {loading, remote, selectOptions} = this;
                return selectOptions && selectOptions.length === 0 && (!remote || (remote && !loading));
            },
            publicValue(){
                if (this.labelInValue){
                    return this.multiple ? this.values : this.values[0];
                } else {
                    return this.multiple ? this.values.map(option => option.value) : (this.values[0] || {}).value;
                }
            },
            canBeCleared(){
                const uiStateMatch = this.hasMouseHoverHead || this.active;
                const qualifiesForClear = !this.multiple && !this.itemDisabled && this.clearable;
                return uiStateMatch && qualifiesForClear && this.reset; // we return a function
            },
            selectOptions() {
                const selectOptions = [];
                const slotOptions = (this.slotOptions || []);
                let optionCounter = -1;
                const currentIndex = this.focusIndex;
                const selectedValues = this.values.filter(Boolean).map(({value}) => value);
                if (this.autoComplete) {
                    const copyChildren = (node, fn) => {
                        return {
                            ...node,
                            children: (node.children || []).map(fn).map(child => copyChildren(child, fn))
                        };
                    };
                    const autoCompleteOptions = extractOptions(slotOptions);
                    const selectedSlotOption = autoCompleteOptions[currentIndex];

                    return slotOptions.map(node => {
                        if (node === selectedSlotOption || getNestedProperty(node, 'componentOptions.propsData.value') === this.value) return applyProp(node, 'isFocused', true);
                        return copyChildren(node, (child) => {
                            if (child !== selectedSlotOption) return child;
                            return applyProp(child, 'isFocused', true);
                        });
                    });
                }
                for (let option of slotOptions) {

                    const cOptions = option.componentOptions;
                    if (!cOptions) continue;
                    if (cOptions.tag.match(optionGroupRegexp)){
                        let children = cOptions.children;

                        // remove filtered children
                        if (this.filterable && this.isTyping){  // #728 let option show full when reclick it
                            children = children.filter(
                                ({componentOptions}) => this.validateOption(componentOptions)
                            );
                        }

                        // fix #4371
                        children = children.map(opt => {
                            optionCounter = optionCounter + 1;
                            return this.processOption(opt, selectedValues, optionCounter === currentIndex);
                        });

                        // keep the group if it still has children  // fix #4371
                        if (children.length > 0) selectOptions.push({...option,componentOptions:{...cOptions,children:children}});
                    } else {
                        // ignore option if not passing filter
                        if (this.filterQueryChange) {
                            const optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option;
                            if (!optionPassesFilter) continue;
                        }

                        optionCounter = optionCounter + 1;
                        selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex));
                    }
                }

                return selectOptions;
            },
            flatOptions(){
                return extractOptions(this.selectOptions);
            },
            selectTabindex(){
                return this.itemDisabled || this.filterable ? -1 : 0;
            },
            remote(){
                return typeof this.remoteMethod === 'function';
            }
        },
        methods: {
            setQuery(query){ // PUBLIC API
                if (query) {
                    this.onQueryChange(query);
                    return;
                }
                if (query === null) {
                    this.onQueryChange('');
                    this.values = [];
                    // #5620,修复清空搜索关键词后，重新搜索相同的关键词没有触发远程搜索
                    this.lastRemoteQuery = '';
                }
            },
            clearSingleSelect(){ // PUBLIC API
                // fix #446
                if (!this.multiple) this.$emit('input', '');
                this.$emit('on-clear');
                this.hideMenu();
                if (this.clearable) this.reset();
            },
            getOptionData(value){
                const option = this.flatOptions.find(({componentOptions}) => componentOptions.propsData.value === value);
                if (!option) return null;
                const label = getOptionLabel(option);
                // 修复多选时，选项有disabled属性，选中项仍然能删除的 bug
                const disabled = option.componentOptions.propsData.disabled;
                return {
                    value: value,
                    label: label,
                    disabled: disabled
                };
            },
            getInitialValue(){
                const {multiple, remote, value} = this;
                let initialValue = Array.isArray(value) ? value : [value];
                if (!multiple && (typeof initialValue[0] === 'undefined' || (String(initialValue[0]).trim() === '' && !Number.isFinite(initialValue[0])))) initialValue = [];
                if (remote && !multiple && value) {
                    const data = this.getOptionData(value);
                    this.query = data ? data.label : String(value);
                }
                return initialValue.filter((item) => {
                    return Boolean(item) || item === 0;
                });
            },
            processOption(option, values, isFocused){
                if (!option.componentOptions) return option;
                const optionValue = option.componentOptions.propsData.value;
                const disabled = option.componentOptions.propsData.disabled;
                const isSelected = values.includes(optionValue);

                const propsData = {
                    ...option.componentOptions.propsData,
                    selected: isSelected,
                    isFocused: isFocused,
                    disabled: typeof disabled === 'undefined' ? false : disabled !== false,
                };

                return {
                    ...option,
                    componentOptions: {
                        ...option.componentOptions,
                        propsData: propsData
                    }
                };
            },

            validateOption({children, elm, propsData}){
                const value = propsData.value;
                const label = propsData.label || '';
                const textContent = (elm && elm.textContent) || (children || []).reduce((str, node) => {
                    const nodeText = node.elm ? node.elm.textContent : node.text;
                    return `${str} ${nodeText}`;
                }, '') || '';
                const stringValues = this.filterByLabel ? [label].toString() : [value, label, textContent].toString();
                const query = this.query.toLowerCase().trim();
                return stringValues.toLowerCase().includes(query);
            },

            toggleMenu (e, force) {
                if (this.itemDisabled) {
                    return false;
                }

                this.visible = typeof force !== 'undefined' ? force : !this.visible;
                if (this.visible){
                    this.dropDownWidth = this.$el.getBoundingClientRect().width;
                    this.broadcast('Drop', 'on-update-popper');
                }
            },
            hideMenu () {
                this.toggleMenu(null, false);
                // fix #728
                this.isTyping = false;
                setTimeout(() => this.unchangedQuery = true, ANIMATION_TIMEOUT);
            },
            onClickOutside(event){
                if (this.visible) {
                    if (event.type === 'mousedown') {
                        event.preventDefault();
                        return;
                    }

                    if (this.transfer) {
                        const {$el} = this.$refs.dropdown;
                        if ($el === event.target || $el.contains(event.target)) {
                            return;
                        }
                    }


                    if (this.filterable) {
                        const input = this.$el.querySelector('input[type="text"]');
                        this.caretPosition = input.selectionStart;
                        this.$nextTick(() => {
                            const caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition;
                            input.setSelectionRange(caretPosition, caretPosition);
                        });
                    }

                    if (!this.autoComplete) event.stopPropagation();
                    event.preventDefault();
                    this.hideMenu();
                    this.isFocused = true;
                    this.$emit('on-clickoutside', event);
                } else {
                    this.caretPosition = -1;
                    this.isFocused = false;
                }
            },
            reset(){
                this.query = '';
                this.focusIndex = -1;
                this.unchangedQuery = true;
                this.values = [];
                this.filterQueryChange = false;
            },
            handleKeydown (e) {
                const key = e.key || e.code;
                const keyCode = e.keyCode || e.which;
                if (key === 'Backspace' || keyCode===8){
                    return; // so we don't call preventDefault
                }

                if (this.visible) {
                    e.preventDefault();
                    if (key === 'Tab'){
                        e.stopPropagation();
                    }

                    // Esc slide-up
                    if (key === 'Escape') {
                        e.stopPropagation();
                        this.hideMenu();
                    }
                    // next
                    if (key === 'ArrowUp') {
                        this.navigateOptions(-1);
                    }
                    // prev
                    if (key === 'ArrowDown') {
                        this.navigateOptions(1);
                    }
                    // enter
                    if (key === 'Enter') {
                        if (this.focusIndex === -1) return this.hideMenu();
                        const optionComponent = this.flatOptions[this.focusIndex];

                        // fix a script error when searching
                        if (optionComponent) {
                            const option = this.getOptionData(optionComponent.componentOptions.propsData.value);
                            this.onOptionClick(option);
                        } else {
                            this.hideMenu();
                        }
                    }
                } else {
                    const keysThatCanOpenSelect = ['ArrowUp', 'ArrowDown'];
                    if (keysThatCanOpenSelect.includes(e.key)) this.toggleMenu(null, true);
                }


            },
            navigateOptions(direction){
                const optionsLength = this.flatOptions.length - 1;

                let index = this.focusIndex + direction;
                if (index < 0) index = optionsLength;
                if (index > optionsLength) index = 0;

                // find nearest option in case of disabled options in between
                if (direction > 0){
                    let nearestActiveOption = -1;
                    for (let i = 0; i < this.flatOptions.length; i++){
                        const optionIsActive = !this.flatOptions[i].componentOptions.propsData.disabled;
                        if (optionIsActive) nearestActiveOption = i;
                        if (nearestActiveOption >= index) break;
                    }
                    index = nearestActiveOption;
                } else {
                    let nearestActiveOption = this.flatOptions.length;
                    for (let i = optionsLength; i >= 0; i--){
                        const optionIsActive = !this.flatOptions[i].componentOptions.propsData.disabled;
                        if (optionIsActive) nearestActiveOption = i;
                        if (nearestActiveOption <= index) break;
                    }
                    index = nearestActiveOption;
                }

                this.focusIndex = index;
            },
            onOptionClick(option) {
                if (this.multiple){

                    // keep the query for remote select
                    if (this.remote) this.lastRemoteQuery = this.lastRemoteQuery || this.query;
                    else this.lastRemoteQuery = '';

                    const valueIsSelected = this.values.find(({value}) => value === option.value);
                    if (valueIsSelected){
                        this.values = this.values.filter(({value}) => value !== option.value);
                    } else {
                        this.values = this.values.concat(option);
                    }

                    this.isFocused = true; // so we put back focus after clicking with mouse on option elements
                } else {
                    this.query = String(option.label).trim();
                    this.values = [option];
                    this.lastRemoteQuery = '';
                    this.hideMenu();
                }

                this.focusIndex = this.flatOptions.findIndex((opt) => {
                    if (!opt || !opt.componentOptions) return false;
                    return opt.componentOptions.propsData.value === option.value;
                });

                if (this.filterable){
                    const inputField = this.$el.querySelector('input[type="text"]');
                    if (!this.autoComplete) this.$nextTick(() => inputField.focus());
                }
                this.$emit('on-select', option); // # 4441
                this.broadcast('Drop', 'on-update-popper');
                setTimeout(() => {
                    this.filterQueryChange = false;
                }, ANIMATION_TIMEOUT);
            },
            onQueryChange(query) {
                this.isTyping = true;
                if (query.length > 0 && query !== this.query) {
                  // in 'AutoComplete', when set an initial value asynchronously,
                  // the 'dropdown list' should be stay hidden.
                  // [issue #5150]
                    if (this.autoComplete) {
                        let isInputFocused =
                            document.hasFocus &&
                            document.hasFocus() &&
                            document.activeElement === this.$el.querySelector('input');
                        this.visible = isInputFocused;
                    } else {
                        this.visible = true;
                    }
                }

                this.query = query;
                this.unchangedQuery = this.visible;
                this.filterQueryChange = true;
            },
            toggleHeaderFocus({type}){
                if (this.itemDisabled) {
                    return;
                }
                this.isFocused = type === 'focus';
            },
            updateSlotOptions(){
                this.slotOptions = this.$slots.default;
            },
            checkUpdateStatus() {
                if (this.getInitialValue().length > 0 && this.selectOptions.length === 0) {
                    this.hasExpectedValue = true;
                }
            },
            // 4.0.0 create new item
            handleCreateItem () {
                if (this.allowCreate && this.query !== '' && this.showCreateItem) {
                    const query = this.query;
                    this.$emit('on-create', query);
                    this.query = '';

                    const option = {
                        value: query,
                        label: query,
                        tag: undefined
                    };
                    if (this.multiple) {
                        this.onOptionClick(option);
                    } else {
                        // 单选时如果不在 nextTick 里执行，无法赋值
                        this.$nextTick(() => this.onOptionClick(option));
                    }
                }
            }
        },
        watch: {
            value(value){
                const {getInitialValue, getOptionData, publicValue, values} = this;

                this.checkUpdateStatus();

                if (value === '') this.values = [];
                else if (checkValuesNotEqual(value,publicValue,values)) {
                    this.$nextTick(() => this.values = getInitialValue().map(getOptionData).filter(Boolean));
                    if (!this.multiple) this.dispatch('FormItem', 'on-form-change', this.publicValue);
                }
            },
            values(now, before){
                const newValue = JSON.stringify(now);
                const oldValue = JSON.stringify(before);
                // v-model is always just the value, event with labelInValue === true
                const vModelValue = (this.publicValue && this.labelInValue) ?
                    (this.multiple ? this.publicValue.map(({value}) => value) : this.publicValue.value) :
                    this.publicValue;
                const shouldEmitInput = newValue !== oldValue && vModelValue !== this.value;
                if (shouldEmitInput) {
                    this.$emit('input', vModelValue); // to update v-model
                    this.$emit('on-change', this.publicValue);
                    this.dispatch('FormItem', 'on-form-change', this.publicValue);
                }
            },
            query (query) {
                this.$emit('on-query-change', query);
                const {remoteMethod, lastRemoteQuery} = this;
                const hasValidQuery = query !== '' && (query !== lastRemoteQuery || !lastRemoteQuery);
                const shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall;
                this.preventRemoteCall = false; // remove the flag

                if (shouldCallRemoteMethod){
                    this.focusIndex = -1;
                    const promise = this.remoteMethod(query);
                    this.initialLabel = '';
                    if (promise && promise.then){
                        promise.then(options => {
                            if (options) this.options = options;
                        });
                    }
                }
                if (query !== '' && this.remote) this.lastRemoteQuery = query;
            },
            loading(state){
                if (state === false){
                    this.updateSlotOptions();
                }
            },
            isFocused(focused){
                const el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el;
                el[this.isFocused ? 'focus' : 'blur']();

                // restore query value in filterable single selects
                const [selectedOption] = this.values;
                if (selectedOption && this.filterable && !this.multiple && !focused){
                    const selectedLabel = String(selectedOption.label || selectedOption.value).trim();
                    if (selectedLabel && this.query !== selectedLabel) {
                        this.preventRemoteCall = true;
                        this.query = selectedLabel;
                    }
                }
            },
            focusIndex(index){
                if (index < 0 || this.autoComplete) return;
                // update scroll
                const optionValue = this.flatOptions[index].componentOptions.propsData.value;
                const optionInstance = findChild(this, ({$options}) => {
                    return $options.componentName === 'select-item' && $options.propsData.value === optionValue;
                });

                let bottomOverflowDistance = optionInstance.$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = optionInstance.$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;
                if (bottomOverflowDistance > 0) {
                    this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
                }
            },
            dropVisible(open){
                this.broadcast('Drop', open ? 'on-update-popper' : 'on-destroy-popper');
            },
            selectOptions(){
                if (this.hasExpectedValue && this.selectOptions.length > 0){
                    if (this.values.length === 0) {
                        this.values = this.getInitialValue();
                    }
                    this.values = this.values.map(this.getOptionData).filter(Boolean);
                    this.hasExpectedValue = false;
                }

                if (this.slotOptions && this.slotOptions.length === 0){
                    this.query = '';
                }

                 // 当 dropdown 一开始在控件下部显示，而滚动页面后变成在上部显示，如果选项列表的长度由内部动态变更了(搜索情况)
                 // dropdown 的位置不会重新计算，需要重新计算
                this.broadcast('Drop', 'on-update-popper');
            },
            visible(state){
                this.$emit('on-open-change', state);
            },
            slotOptions(options, old){
                // #4626，当 Options 的 label 更新时，v-model 的值未更新
                // remote 下，调用 getInitialValue 有 bug
                if (!this.remote) {
                    const values = this.getInitialValue();
                    if (this.flatOptions && this.flatOptions.length && values.length && !this.multiple) {
                        this.values = values.map(this.getOptionData).filter(Boolean);
                    }
                }

                // 当 dropdown 在控件上部显示时，如果选项列表的长度由外部动态变更了，
                // dropdown 的位置会有点问题，需要重新计算
                if (options && old && options.length !== old.length) {
                    this.broadcast('Drop', 'on-update-popper');
                }
            },
        }
    };
</script>
