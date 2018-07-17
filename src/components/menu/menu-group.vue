<template>
    <li :class="[prefixCls + '-item-group']">
        <div :class="[prefixCls + '-item-group-title']">{{ title }}</div>
        <ul><slot></slot></ul>
    </li>
</template>
<script>
    const prefixCls = 'ivu-menu';

    export default {
        name: 'MenuGroup',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        }
    };
</script>
