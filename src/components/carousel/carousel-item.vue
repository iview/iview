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
        compiled () {
            this.$parent.slotChange();
        },
        beforeDestroy () {
            this.$parent.slotChange();
        }
    };
</script>
