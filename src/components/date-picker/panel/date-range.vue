<template>
    <div :class="classes">

    </div>
</template>
<script>
    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        props: {},
        data () {
            return {}
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ]
            }
        },
        methods: {}
    }
</script>