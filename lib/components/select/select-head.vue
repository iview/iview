<template>
    <div @click="onHeaderClick">
        <div class="ivu-tag ivu-tag-checked" v-for="item in selectedMultiple">
            <span class="ivu-tag-text">{{ item.label }}</span>
            <Icon type="ios-close" @click.native.stop="removeTag(item)"></Icon>
        </div>
        <span
            :class="singleDisplayClasses"
            v-show="singleDisplayValue"
        >{{ singleDisplayValue }}</span>
        <input
            :id="inputElementId"
            type="text"
            v-if="filterable"
            v-model="query"
            :disabled="disabled"
            :class="[prefixCls + '-input']"
            :placeholder="showPlaceholder ? localePlaceholder : ''"
            :style="inputStyle"
            autocomplete="off"
            spellcheck="false"
            @keydown="resetInputState"
            @keydown.delete="handleInputDelete"
            @focus="onInputFocus"
            @blur="onInputBlur"

            ref="input">
        <Icon type="ios-close-circle" :class="[prefixCls + '-arrow']" v-if="resetSelect" @click.native.stop="onClear"></Icon>
        <Icon type="ios-arrow-down" :class="[prefixCls + '-arrow']" v-if="!resetSelect && !remote && !disabled"></Icon>
    </div>
</template>
<script>
    import Icon from '../icon';
    import Emitter from '../../mixins/emitter';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-select';

    export default {
        name: 'iSelectHead',
        mixins: [ Emitter, Locale ],
        components: { Icon },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            remote: {
                type: Boolean,
                default: false
            },
            initialLabel: {
                type: [String, Number, Array],
            },
            values: {
                type: Array,
                default: () => []
            },
            clearable: {
                type: [Function, Boolean],
                default: false,
            },
            inputElementId: {
                type: String
            },
            placeholder: {
                type: String
            },
            queryProp: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                query: '',
                inputLength: 20,
                remoteInitialLabel: this.initialLabel,
                preventRemoteCall: false,
            };
        },
        computed: {
            singleDisplayClasses(){
                const {filterable, multiple, showPlaceholder} = this;
                return [{
                    [prefixCls + '-placeholder']: showPlaceholder && !filterable,
                    [prefixCls + '-selected-value']: !showPlaceholder && !multiple && !filterable,
                }];
            },
            singleDisplayValue(){
                if ((this.multiple && this.values.length > 0) || this.filterable) return '';
                return `${this.selectedSingle}` || this.localePlaceholder;
            },
            showPlaceholder () {
                let status = false;
                if (!this.multiple) {
                    const value = this.values[0];
                    if (typeof value === 'undefined' || String(value).trim() === ''){
                        status = !this.remoteInitialLabel;
                    }
                } else {
                    if (!this.values.length > 0) {
                        status = true;
                    }
                }
                return status;
            },
            resetSelect(){
                return !this.showPlaceholder && this.clearable;
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
            selectedSingle(){
                const selected = this.values[0];
                return selected ? selected.label : (this.remoteInitialLabel || '');
            },
            selectedMultiple(){
                return this.multiple ? this.values : [];
            }
        },
        methods: {
            onInputFocus(){
                this.$emit('on-input-focus');
            },
            onInputBlur () {
                if (!this.values.length) this.query = '';  // #5155
                this.$emit('on-input-blur');
            },
            removeTag (value) {
                if (this.disabled) return false;
                this.dispatch('iSelect', 'on-select-selected', value);
            },
            resetInputState () {
                this.inputLength = this.$refs.input.value.length * 12 + 20;
                this.$emit('on-keydown');
            },
            handleInputDelete () {
                if (this.multiple && this.selectedMultiple.length && this.query === '') {
                    this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1]);
                }
            },
            onHeaderClick(e){
                if (this.filterable && e.target === this.$el){
                    this.$refs.input.focus();
                }
            },
            onClear(){
                this.$emit('on-clear');
            }
        },
        watch: {
            values ([value]) {
                if (!this.filterable) return;
                this.preventRemoteCall = true;
                if (this.multiple){
                    this.query = '';
                    this.preventRemoteCall = false; // this should be after the query change setter above
                    return;
                }
                // #982
                if (typeof value === 'undefined' || value === '' || value === null) this.query = '';
                else this.query = value.label;
                this.$nextTick(() => this.preventRemoteCall = false); // this should be after the query change setter above
            },
            query (val) {
                if (this.preventRemoteCall) {
                    this.preventRemoteCall = false;
                    return;
                }

                this.$emit('on-query-change', val);
            },
            queryProp(query){
                if (query !== this.query) this.query = query;
            },
        }
    };
</script>
