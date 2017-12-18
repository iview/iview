<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-layout';
    export default {
        name: 'Header',
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            wrapClasses () {
                return `${prefixCls}-header`;
            }
        }
    };
</script>