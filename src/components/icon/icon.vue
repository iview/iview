<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'ivu-icon';

    export default {
        props: {
            type: String,
            size: [Number, String]
        },
        computed: {
            classes () {
                return `${prefixCls} ${prefixCls}-${this.type}`
            },
            styles () {
                if (!!this.size) {
                    return {
                        'font-size': `${this.size}px`
                    }
                } else {
                    return {}
                }
            }
        }
    }
</script>