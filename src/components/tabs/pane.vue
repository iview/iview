<template>
    <div :class="paneClasses" v-show="show"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-tabs-tabpane';

    export default {
        name: 'TabPane',
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
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                show: true,
                currentName: this.name
            };
        },
        methods: {
            updateNav () {
                this.$parent.updateNav();
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
        },
        computed: {
            paneClasses() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-active`]: this.$parent.activeKey == this.currentName,
                        [`${prefixCls}-inactive`]: this.$parent.activeKey != this.currentName
                    }
                ]
            }
        }
    };
</script>
