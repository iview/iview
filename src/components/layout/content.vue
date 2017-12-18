<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-layout';
    export default {
        name: 'Content',
        props: {
            className: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-content`,
                    this.className
                ];
            }
        }
    };
</script>