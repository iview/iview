<template>
    <div :class="prefixCls" v-show="show" :style="contentStyle"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-tabs-tabpane';

    export default {
        name: 'TabPane',
        inject: ['TabsInstance'],
        props: {
            name: {
                type: String
            },
            label: {
                type: [String, Function],
                default: ''
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: null
            },
            // Tabs 嵌套时，用 tab 区分层级，指向对应的 Tabs 的 name
            tab: {
                type: String
            },
        },
        data () {
            return {
                prefixCls: prefixCls,
                show: true,
                currentName: this.name
            };
        },
        computed: {
            contentStyle () {
                return {
                    visibility: this.TabsInstance.activeKey !== this.currentName ? 'hidden' : 'visible'
                };
            }
        },
        methods: {
            updateNav () {
                this.TabsInstance.updateNav();
            }
        },
        watch: {
            name (val) {
                this.currentName = val;
                this.updateNav();
            },
            label () {
                this.updateNav();
            },
            icon () {
                this.updateNav();
            },
            disabled () {
                this.updateNav();
            }
        },
        mounted () {
            this.updateNav();
        },
        destroyed () {
            this.updateNav();
        }
    };
</script>
