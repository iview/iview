<template>
    <i-select
        ref="select"
        class="ivu-auto-complete"
        :label="label"
        :disabled="disabled"
        :clearable="clearable"
        :placeholder="placeholder"
        :size="size"
        :placement="placement"
        filterable
        remote
        auto-complete
        :remote-method="remoteMethod"
        @on-change="handleChange"
        :transfer="transfer">
        <slot name="input">
            <i-input
                :element-id="elementId"
                ref="input"
                slot="input"
                v-model="currentValue"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
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

    export default {
        name: 'AutoComplete',
        mixins: [ Emitter ],
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
                    return oneOf(value, ['top', 'bottom']);
                },
                default: 'bottom'
            },
            transfer: {
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
                currentValue: this.value,
                disableEmitChange: false    // for Form reset
            };
        },
        computed: {
            inputIcon () {
                let icon = '';
                if (this.clearable && this.currentValue) {
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
                this.disableEmitChange = true;
                this.currentValue = val;
            },
            currentValue (val) {
                this.$refs.select.query = val;
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
            handleChange (val) {
                this.currentValue = val;
                this.$refs.select.model = val;
                this.$refs.input.blur();
                this.$emit('on-select', val);
            },
            handleFocus () {
                this.$refs.select.visible = true;
            },
            handleBlur () {
                this.$refs.select.visible = false;
            },
            handleClear () {
                if (!this.clearable) return;
                this.currentValue = '';
                this.$refs.select.model = '';
            }
        }
    };
</script>