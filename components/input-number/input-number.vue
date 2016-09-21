<template>
    <div :class="wrapClasses">
        <div :class="handlerClasses">
            <a
                @click="up"
                @mouse.down="preventDefault"
                :class="upClasses">
                <span :class="innerUpClasses" @click="preventDefault"></span>
            </a>
            <a
                @click="down"
                @mouse.down="preventDefault"
                :class="downClasses">
                <span :class="innerDownClasses" @click="preventDefault"></span>
            </a>
        </div>
        <div :class="inputWrapClasses">
            <input
                :class="inputClasses"
                :disabled="disabled"
                autoComplete="off"
                @focus="focus"
                @blur="blur"
                @keydown.stop="keyDown"
                @change="change"
                :value="value">
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-input-number';
    const iconPrefixCls = 'ivu-icon';

    function isValueNumber (value) {
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)/).test(value + '');
    }
    function addNum (num1, num2) {
        var sq1, sq2, m;
        try {
            sq1 = num1.toString().split(".")[1].length;
        }
        catch (e) {
            sq1 = 0;
        }
        try {
            sq2 = num2.toString().split(".")[1].length;
        }
        catch (e) {
            sq2 = 0;
        }
//        if (sq1 === 0 || sq2 === 0) {
//            return num1 + num2;
//        } else {
//            m = Math.pow(10, Math.max(sq1, sq2));
//            return (num1 * m + num2 * m) / m;
//        }
        m = Math.pow(10, Math.max(sq1, sq2));
        return (num1 * m + num2 * m) / m;
    }

    export default {
        props: {
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number,
                default: -Infinity
            },
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: Number,
                default: 1
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                focused: false,
                upDisabled: false,
                downDisabled: false
            }        
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-focused`]: this.focused
                    }
                ]
            },
            handlerClasses () {
                return `${prefixCls}-handler-wrap`;
            },
            upClasses () {
                return [
                    `${prefixCls}-handler`,
                    `${prefixCls}-handler-up`,
                    {
                        [`${prefixCls}-handler-up-disabled`]: this.upDisabled
                    }
                ]
            },
            innerUpClasses () {
                return `${prefixCls}-handler-up-inner ${iconPrefixCls} ${iconPrefixCls}-ios-arrow-up`;
            },
            downClasses () {
                return [
                    `${prefixCls}-handler`,
                    `${prefixCls}-handler-down`,
                    {
                        [`${prefixCls}-handler-down-disabled`]: this.downDisabled
                    }
                ]
            },
            innerDownClasses () {
                return `${prefixCls}-handler-down-inner ${iconPrefixCls} ${iconPrefixCls}-ios-arrow-down`;
            },
            inputWrapClasses () {
                return `${prefixCls}-input-wrap`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        methods: {
            preventDefault (e) {
                e.preventDefault();
            },
            up () {
                if (this.upDisabled) {
                    return false;
                }
                this.changeStep('up');
            },
            down () {
                if (this.downDisabled) {
                    return false;
                }
                this.changeStep('down');
            },
            changeStep (type) {
                if (this.disabled) {
                    return false;
                }

                let val = Number(this.value);
                const step = Number(this.step);
                if (isNaN(val)) {
                    return false;
                }

                if (type == 'up') {
                    val = addNum(val, step);
                } else if (type == 'down') {
                    val = addNum(val, -step);
                }
                this.setValue(val);
            },
            setValue (val) {
                this.value = val;
                this.$emit('on-change', val);
            },
            focus () {
                this.focused = true;
            },
            blur () {
                this.focused = false;
            },
            keyDown (e) {
                if (e.keyCode === 38) {
                    e.preventDefault();
                    this.up()
                } else if (e.keyCode === 40) {
                    e.preventDefault();
                    this.down()
                }
            },
            change (event) {
                let val = event.target.value.trim();

                const max = this.max;
                const min = this.min;

                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val > max) {
                        this.setValue(max);
                    } else if (val < min) {
                        this.setValue(min);
                    } else {
                        this.setValue(val);
                    }
                } else {
                    event.target.value = this.value;
                }
            }
        },
        watch: {
            value (val) {
                if (isValueNumber(val) || val === 0) {
                    val = Number(val);
                    const step = this.step;
                    if (val + step > this.max) {
                        this.upDisabled = true;
                    } else if (val - step < this.min) {
                        this.downDisabled = true;
                    } else {
                        this.upDisabled = false;
                        this.downDisabled = false;
                    }
                } else {
                    this.upDisabled = true;
                    this.downDisabled = true;
                }
            }
        }
    }
</script>