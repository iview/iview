<template>
    <span
        tabindex="0"
        :class="wrapClasses"
        :style="wrapStyles"
        @click="toggle"
        @keydown.space="toggle"
    >
        <input type="hidden" :name="name" :value="currentValue">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue === trueValue"></slot>
            <slot name="close" v-if="currentValue === falseValue"></slot>
        </span>
    </span>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-switch';

    export default {
        name: 'iSwitch',
        mixins: [ Emitter, mixinsForm ],
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
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'small', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            name: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            trueColor: {
                type: String
            },
            falseColor: {
                type: String
            },
            beforeChange: Function
        },
        data () {
            return {
                currentValue: this.value
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading,
                    }
                ];
            },
            wrapStyles () {
                let style = {};

                if (this.trueColor && this.currentValue === this.trueValue) {
                    style['border-color'] = this.trueColor;
                    style['background-color'] = this.trueColor;
                } else if (this.falseColor && this.currentValue === this.falseValue) {
                    style['border-color'] = this.falseColor;
                    style['background-color'] = this.falseColor;
                }

                return style;
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            handleToggle () {
                const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;

                this.currentValue = checked;
                this.$emit('input', checked);
                this.$emit('on-change', checked);
                this.dispatch('FormItem', 'on-form-change', checked);
            },
            toggle (event) {
                event.preventDefault();
                if (this.itemDisabled || this.loading) {
                    return false;
                }

                if (!this.beforeChange) {
                    return this.handleToggle();
                }

                const before = this.beforeChange();

                if (before && before.then) {
                    before.then(() => {
                        this.handleToggle();
                    });
                } else {
                    this.handleToggle();
                }
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.currentValue = val;
            }
        }
    };
</script>
