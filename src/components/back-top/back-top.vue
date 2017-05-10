<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="ivu-icon ivu-icon-chevron-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
    import { scrollTop } from '../../utils/assist';
    const prefixCls = 'ivu-back-top';

    export default {
        props: {
            height: {
                type: Number,
                default: 400
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            duration: {
                type: Number,
                default: 1000
            },
            // 监听的容器id或者class
            listen: {
                type: String
            }
        },
        data() {
            return {
                backTop: false,
                // back按钮的样式，初始值由prop决定
                styles: {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                }
            };
        },
        mounted() {
            var listener = this.listener;
            // 非window的容器时需要设定back按钮的初始位置
            if (listener != window) {
                this.setPosition()
                    // 监听window滚动，滚动时重新计算back按钮的位置，因为fixed是针对window的
                window.addEventListener('scroll', this.setPosition, false);
            }
            listener.addEventListener('scroll', this.handleScroll, false);
            listener.addEventListener('resize', this.handleScroll, false);
        },
        beforeDestroy() {
            var listener = this.listener;
            if (listener != window) {
                window.removeEventListener('scroll', this.setPosition, false);
            }
            listener.removeEventListener('scroll', this.handleScroll, false);
            listener.removeEventListener('resize', this.handleScroll, false);
        },
        computed: {
            listener() {
                // 获取监听滚动的容器dom，如果没设置listen，则默认window
                return this.listen ? document.getElementById(this.listen) : window;
            },
            classes() {
                return [
                    `${prefixCls}`, {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ];
            },
            innerClasses() {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            // 设置back按钮的位置
            setPosition() {
                var listener = this.listener,
                    winScrollTop = window.pageYOffset,
                    // 按钮距离窗口顶部的距离 = window可视高度 -（容器高度 + 容器距顶部的距离）+ back按钮设定的底部距离 + window滚动了的距离
                    distanceTop = window.innerHeight - (listener.offsetHeight + listener.offsetTop) + this.bottom + winScrollTop,
                    // 按钮距离窗口右边的距离 = window可视宽度 -（容器宽度 + 容器距左边的距离）+ back按钮设定的右边距离
                    distanceRight = window.innerWidth - (listener.offsetWidth + listener.offsetLeft) + this.right;
                this.styles = {
                    bottom: `${distanceTop}px`,
                    right: `${distanceRight}px`
                };
            },
            // 显示/隐藏返回按钮
            handleScroll() {
                var top,
                    listener = this.listener;
                if (listener == window) {
                    top = window.pageYOffset
                } else {
                    top = listener.scrollTop
                }
                this.backTop = top >= this.height;
            },
            // 返回顶部事件
            back() {
                var listener = this.listener,
                    from,
                    durantion = this.durantion;
                if (listener == window) {
                    from = window.pageYOffset;
                } else {
                    from = listener.scrollTop;
                }
                scrollTop(listener, from, 0, durantion);
                this.$emit('on-click');
            }
        }
    };
</script>
