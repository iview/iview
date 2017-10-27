<template>
    <div :class="prefixCls" :style="styles"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-carousel-item';

    export default {
        componentName: 'carousel-item',
        name: 'CarouselItem',
        data () {
            return {
                prefixCls: prefixCls,
                width: 0,
                height: 'auto',
                left: 0
            };
        },
        computed: {
            styles () {
                return {
                    width: `${this.width}px`,
                    height: `${this.height}`,
                    left: `${this.left}px`
                };
            }
        },
        mounted () {
            this.$parent.slotChange();
        },
        watch: {
            width (val) {
                if (val && this.$parent.loop) {
                    this.$nextTick(() => {
                        this.$parent.initCopyTrackDom();
                    });
                }
            }
        },
        beforeDestroy () {
            this.$parent.slotChange();
        }
    };
</script>
