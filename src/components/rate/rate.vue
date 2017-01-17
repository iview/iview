<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <div v-for="item in count" :class="starCls(item)">
            <span
                :class="[prefixCls + '-star-content']"
                @mousemove="handleMousemove(item, $event)"
                @click="handleClick(item)"></span>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-rate';

    export default {
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
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                hoverIndex: -1
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
        methods: {
            starCls (value) {
                const hoverIndex = this.hoverIndex;
                let full = false;

                if (hoverIndex >= value) {
                    full = true;
                }

                return [
                    `${prefixCls}-star`,
                    {
                        [`${prefixCls}-star-full`]: full,
                        [`${prefixCls}-star-zero`]: !full
                    }
                ];
            },
            handleMousemove(value) {
                if (this.disabled) return;

                if (this.allowHalf) {
//                    let target = event.target;
//                    if (hasClass(target, 'el-rate__item')) {
//                        target = target.querySelector('.el-rate__icon');
//                    }
//                    if (hasClass(target, 'el-rate__decimal')) {
//                        target = target.parentNode;
//                    }
//                    this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth;
//                    this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
                } else {
                    this.currentValue = value;
                }
                this.hoverIndex = value;
            },
            handleMouseleave () {
                if (this.disabled) {
                    return;
                }
                if (this.allowHalf) {
//                    this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
                }
//                this.currentValue = this.value;
                this.hoverIndex = -1;
            },
            handleClick () {

            }
        }
    };
</script>