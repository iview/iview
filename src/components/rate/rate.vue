<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div
            v-for="item in count"
            :class="starCls(item)"
            :style="starStyle(item)"
            @mousemove="handleMousemove(item, $event)"
            @click="handleClick(item)">
            <span :class="[prefixCls + '-star-content']" type="half"></span>
        </div>
        <div :class="[prefixCls + '-text']" v-if="showText" v-show="currentValue > 0">
            <slot><span>{{ currentValue }}</span> <span v-if="currentValue <= 1">{{ t('i.rate.star') }}</span><span v-else>{{ t('i.rate.stars') }}</span></slot>
        </div>
    </div>
</template>
<script>
    import Locale from '../../mixins/locale';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-rate';

    export default {
        name: 'Rate',
        mixins: [ Locale, Emitter ],
        props: {
            count: {
                type: Number,
                default: 5
            },
            value: {
                type: Number,
                default: 0
            },
            allowHalf: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showText: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                required: false,
                default: '#2d8cf0' // less var @rate-star-color
            },
            name: {
                type: String
            },
            clearable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                hoverIndex: -1,
                isHover: false,
                isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
                currentValue: this.value
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.setHalf(val);
            }
        },
        methods: {
            starCls (value) {
                const hoverIndex = this.hoverIndex;
                const currentIndex = this.isHover ? hoverIndex : this.currentValue;

                let full = false;
                let isLast = false;

                if (currentIndex >= value) full = true;

                if (this.isHover) {
                    isLast = currentIndex === value;
                } else {
                    isLast = Math.ceil(this.currentValue) === value;
                }

                return [
                    `${prefixCls}-star`,
                    {
                        [`${prefixCls}-star-full`]: (!isLast && full) || (isLast && !this.isHalf),
                        [`${prefixCls}-star-half`]: isLast && this.isHalf,
                        [`${prefixCls}-star-zero`]: !full
                    }
                ];
            },
            starStyle (value) {
                let styles = {}

                const hoverIndex = this.hoverIndex;
                const currentIndex = this.isHover ? hoverIndex : this.currentValue;

                let full = false;
                let isLast = false;

                if (currentIndex >= value) full = true;

                if (this.isHover) {
                    isLast = currentIndex === value;
                } else {
                    isLast = Math.ceil(this.currentValue) === value;
                }

                if (full || (isLast && this.isHalf)) {
                    styles['--tooltip-string'] = this.color
                }

                return styles
            },
            handleMousemove(value, event) {
                if (this.disabled) return;

                this.isHover = true;
                if (this.allowHalf) {
                    const type = event.target.getAttribute('type') || false;
                    this.isHalf = type === 'half';
                } else {
                    this.isHalf = false;
                }
                this.hoverIndex = value;
            },
            handleMouseleave () {
                if (this.disabled) return;

                this.isHover = false;
                this.setHalf(this.currentValue);
                this.hoverIndex = -1;
            },
            setHalf (val) {
                this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
            },
            handleClick (value) {
                if (this.disabled) return;
                //value++;
                if (this.isHalf) value -= 0.5;

                if(this.clearable && Math.abs(value - this.currentValue) < 0.01) {
                    value = 0;
                }

                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('on-change', value);
                this.dispatch('FormItem', 'on-form-change', value);
            }
        }
    };
</script>
