<template>
    <i-select
        ref="select"
        class="ivu-auto-complete"
        :label="label"
        :disabled="itemDisabled"
        :clearable="clearable"
        :placeholder="placeholder"
        :size="size"
        :placement="placement"
        :value="currentValue"
        :transfer-class-name="transferClassName"
        filterable
        remote
        auto-complete
        :remote-method="remoteMethod"
        @on-select="handleSelect"
        @on-clickoutside="handleClickOutside"
        :transfer="transfer">
        <slot name="input">
            <i-input
                :element-id="elementId"
                ref="input"
                slot="input"
                v-model="currentValue"
                :name="name"
                :placeholder="placeholder"
                :disabled="itemDisabled"
                :size="size"
                :icon="inputIcon"
                @on-click="handleClear"
                @on-focus="handleFocus"
                @on-blur="handleBlur"></i-input>
        </slot>
        <slot>
            <i-option v-for="item in filteredData" :value="item" :key="item">{{ item }}</i-option>
        </slot>
    </i-select>
</template>
<script>
    import iSelect from '../select/select.vue';
    import iOption from '../select/option.vue';
    import iInput from '../input/input.vue';
    import { oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    export default {
        name: 'AutoComplete',
        mixins: [ Emitter, mixinsForm ],
        components: { iSelect, iOption, iInput },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            label: {
                type: [String, Number],
                default: ''
            },
            data: {
                type: Array,
                default: () => []
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
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            icon: {
                type: String
            },
            filterMethod: {
                type: [Function, Boolean],
                default: false
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
            name: {
                type: String
            },
            elementId: {
                type: String
            },
            transferClassName: {
                type: String
            }
        },
        data () {
            return {
                currentValue: this.value,
                disableEmitChange: false    // for Form reset
            };
        },
        computed: {
            inputIcon () {
                let icon = '';
                if (this.clearable && this.currentValue && !this.disabled) {
                    icon = 'ios-close';
                } else if (this.icon) {
                    icon = this.icon;
                }
                return icon;
            },
            filteredData () {
                if (this.filterMethod) {
                    return this.data.filter(item => this.filterMethod(this.currentValue, item));
                } else {
                    return this.data;
                }
            }
        },
        watch: {
            value (val) {
                if(this.currentValue !== val){
                    this.disableEmitChange = true;
                }
                this.currentValue = val;
            },
            currentValue (val) {
                this.$refs.select.setQuery(val);
                this.$emit('input', val);
                if (this.disableEmitChange) {
                    this.disableEmitChange = false;
                    return;
                }
                this.$emit('on-change', val);
                this.dispatch('FormItem', 'on-form-change', val);
            }
        },
        methods: {
            remoteMethod (query) {
                this.$emit('on-search', query);
            },
            handleSelect (option) {
                const val = option.value;
                if (val === undefined || val === null) return;
                this.currentValue = val;
                this.$refs.input.blur();
                this.$emit('on-select', val);
            },
            handleFocus (event) {
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
            },
            handleClear () {
                if (!this.clearable) return;
                this.currentValue = '';
                this.$refs.select.reset();
                this.$emit('on-clear');
            },
            handleClickOutside () {
                this.$nextTick(() => {
                    this.$refs.input.blur();
                });
            }
        }
    };
</script>
