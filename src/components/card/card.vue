<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead" ref="head"><slot name="title"></slot></div>
        <div :class="extraClasses" v-if="showExtra" ref="extra"><slot name="extra"></slot></div>
        <div :class="bodyClasses"><slot></slot></div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-card';

    export default {
        props: {
            bordered: {
                type: Boolean,
                default: true
            },
            disHover: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showHead: true,
                showExtra: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
                        [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
                        [`${prefixCls}-shadow`]: this.shadow
                    }
                ];
            },
            headClasses () {
                return `${prefixCls}-head`;
            },
            extraClasses () {
                return `${prefixCls}-extra`;
            },
            bodyClasses () {
                return `${prefixCls}-body`;
            }
        },
        mounted () {
            if (this.$refs.head) {
                this.showHead = this.$refs.head.innerHTML != '';
            }
            if (this.$refs.extra) {
                this.showExtra = this.$refs.extra.innerHTML != '';
            }
        }
    };
</script>
