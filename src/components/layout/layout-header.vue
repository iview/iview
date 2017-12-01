<template>
    <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-layout';

    export default {
        name: 'Header',
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
                    `${prefixCls}-header`,
                    this.className
                ];
            }
        }
    };
</script>
