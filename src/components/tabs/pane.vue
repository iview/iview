<template>
    <div :class="prefixCls" v-show="show"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-tabs-tabpane';

    export default {
        name: 'TabPane',
        props: {
            key: {
                type: String
            },
            label: {
                type: String,
                default: ''
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                show: true
            }
        },
        computed: {

        },
        methods: {
            updateNav () {
                this.$parent.updateNav();
            }
        },
        watch: {
            label () {
                this.updateNav();
            },
            icon () {
                this.updateNav();
            },
            disabled () {
                this.updateNav();
            }
        }
    }
</script>