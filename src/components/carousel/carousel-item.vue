<template>
    <div :class="prefixCls" v-bind:style="styles"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-carousel-item';

    export default {
        componentName: 'carousel-item',

        data () {
            return {
                prefixCls: prefixCls,
                width: 0,
                left: 0
            };
        },
        computed: {
            styles () {
                return {
                    width: `${this.width}px`,
                    left: `${this.left}px`
                }
            }
        },
        compiled () {
            // this.$parent.slotChange();
            // this.$parent.updateSlides(true, true);
            // this.$parent.updatePos();
        }
    };
</script>
