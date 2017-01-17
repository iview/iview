<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <div
            v-for="item in count"
            :class="starCls(item)"
            @mousemove="handleMousemove(item, $event)"
            @click="handleClick(item)">
            <span :class="[prefixCls + '-star-content']" type="half"></span>
        </div>
        <div :class="[prefixCls + '-text']" v-if="showText" v-show="value > 0">
            <slot>{{ value }} <template v-if="value <= 1">{{ t('i.rate.star') }}</template><template v-else>{{ t('i.rate.stars') }}</template></slot>
        </div>
    </div>
</template>
<script>
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-rate';

    export default {
        mixins: [ Locale ],
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
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                hoverIndex: -1,
                isHover: false,
                isHalf: false
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
            value: {
                immediate: true,
                handler (val) {
                    this.setHalf(val);
                }
            }
        },
        methods: {
            starCls (value) {
                const hoverIndex = this.hoverIndex;
                const currentIndex = this.isHover ? hoverIndex : this.value;

                let full = false;
                let isLast = false;

                if (currentIndex > value) full = true;

                if (this.isHover) {
                    isLast = currentIndex === value + 1;
                } else {
                    isLast = Math.ceil(this.value) === value + 1;
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
            handleMousemove(value, event) {
                if (this.disabled) return;

                this.isHover = true;
                if (this.allowHalf) {
                    const type = event.target.getAttribute('type') || false;
                    this.isHalf = type === 'half';
                } else {
                    this.isHalf = false;
                }
                this.hoverIndex = value + 1;
            },
            handleMouseleave () {
                if (this.disabled) return;

                this.isHover = false;
                this.setHalf(this.value);
                this.hoverIndex = -1;
            },
            setHalf (val) {
                this.isHalf = val.toString().indexOf('.') >= 0;
            },
            handleClick (value) {
                if (this.disabled) return;
                value++;
                if (this.isHalf) value -= 0.5;
                this.value = value;
                this.$emit('on-change', value);
                this.$dispatch('on-form-change', value);
            }
        }
    };
</script>