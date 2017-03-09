<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span><slot>{{ label }}</slot>
    </label>
</template>
<script>
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-radio';

    export default {
        name: 'Radio',
        mixins: [ Emitter ],
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                currentValue: this.value,
                group: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ];
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            // todo 使用 while向上查找
            if (this.$parent && this.$parent.$options.name === 'RadioGroup') this.group = true;
            if (!this.group) {
                this.updateValue();
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }

                const checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);

                if (this.group && this.label) {
                    this.$parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }
                if (!this.group) {
                    this.$emit('on-change', checked);
                    this.dispatch('FormItem', 'on-form-change', checked);
                }
            },
            updateValue () {
                this.currentValue = this.value;
            }
        },
        watch: {
            value () {
                this.updateValue();
            }
        }
    };
</script>
