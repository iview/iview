<template>
    <label :class="wrapClasses" :style="wrapStyles">
        <span :class="radioClasses">
            <span :class="innerClasses" :style="innerStyles"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                :name="groupName"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
        </span>
        <slot>{{ label }}</slot>
    </label>
</template>
<script>
    import { findComponentUpward, oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-radio';

    export default {
        name: 'Radio',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            color: {
                type: String,
                required: false,
                default: '#2d8cf0' // less var @primary-color
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                currentValue: this.value,
                group: false,
                groupName: this.name,
                parent: findComponentUpward(this, 'RadioGroup'),
                focusWrapper: false,
                focusInner: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-focus`]: this.focusWrapper
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
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner
                    }
                ];
            },
            innerStyles () {
                let styles = {}
                if (this.color) {
                    if (this.currentValue) {
                        styles['border-color'] = `${this.color}`,
                        styles['--tooltip-string'] = `${this.color}`
                    }
                }
                return styles
            },
            wrapStyles () {
                let styles = {}
                if (this.color) {
                    if (this.currentValue && this.group && this.parent.type === 'button') {
                        styles['border-color'] = `${this.color}`,
                        styles['color'] = `${this.color}`
                    }
                }
                return styles
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            if (this.parent) {
                this.group = true;
                if (this.name && this.name !== this.parent.name) {
                    /* eslint-disable no-console */
                    if (console.warn) {
                        console.warn('[iview] Name does not match Radio Group name.');
                    }
                    /* eslint-enable no-console */
                } else {
                    this.groupName = this.parent.name;
                }
            }

            if (this.group) {
                this.parent.updateValue();
            } else {
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

                const value = checked ? this.trueValue : this.falseValue;
                this.$emit('input', value);

                if (this.group) {
                    if (this.label !== undefined) {
                        this.parent.change({
                            value: this.label,
                            checked: this.value
                        });
                    }
                } else {
                    this.$emit('on-change', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            updateValue () {
                this.currentValue = this.value === this.trueValue;
            },
            onBlur () {
                this.focusWrapper = false;
                this.focusInner = false;
            },
            onFocus () {
                if (this.group && this.parent.type === 'button') {
                    this.focusWrapper = true;
                } else {
                    this.focusInner = true;
                }
            }
        },
        watch: {
            value (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    this.updateValue();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    };
</script>
