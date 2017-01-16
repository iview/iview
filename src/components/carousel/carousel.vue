<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';

    const prefixCls = 'ivu-carousel';

    export default {
        name: 'Carousel',
        props: {
            arrows: {
                type: Boolean,
                default: false
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            easing: {
                type: String,
                default: 'ease'
            },
            dots: {
                type: Boolean,
                default: true
            },
            fade: {
                type: Boolean,
                default: false
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        // events: before-change(from, to), after-change(current, from)
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        }
    };
</script>
