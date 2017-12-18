<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-layout';
    export default {
        name: 'Content',
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            wrapClasses () {
                return `${prefixCls}-content`;
            }
        }
    };
</script>