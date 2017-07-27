<template>
    <div :class="classes"></div>
</template>

<script>
    const prefixCls = 'go-hr'

    export default {
        name: 'split',
        props: {
            small: {
                type: Boolean,
                default: false
            },
            large: {
                type: Boolean,
                default: false
            },
            dashed: {
                type: Boolean,
                default: false
            },
            transparent: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}--small`]: this.small,
                        [`${prefixCls}--large`]: this.large,
                        [`${prefixCls}--dashed`]: this.dashed,
                        [`${prefixCls}--transparent`]: this.transparent
                    }
                ]
            }
        }
    }

</script>
