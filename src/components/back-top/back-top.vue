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
    const prefixCls = 'ivu-back-top';

    function getScroll(target, top) {
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';

        let ret = target[prop];

        if (typeof ret !== 'number') {
            ret = window.document.documentElement[method];
        }

        return ret;
    }

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
            }
        },
        data () {
            return {
                backTop: false
            }
        },
        ready () {
            window.addEventListener('scroll', this.handleScroll, false);
            window.addEventListener('resize', this.handleScroll, false);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll, false);
            window.removeEventListener('resize', this.handleScroll, false);
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ]
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                }
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            handleScroll () {
                const backTop = this.backTop;
                const scrollTop = getScroll(window, true);

                if (this.height <= scrollTop && !backTop) {
                    this.backTop = true;
                } else if (this.height > scrollTop && backTop) {
                    this.backTop = false;
                }
            },
            back () {
                window.scrollTo(0, 0);
                this.$emit('on-click');
            }
        }
    }
</script>