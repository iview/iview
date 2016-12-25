<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead" v-el:head><slot name="title"></slot></div>
        <div :class="extraClasses" v-if="showExtra" v-el:extra><slot name="extra"></slot></div>
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
        compiled () {
            this.showHead = this.$els.head.innerHTML != '';
            this.showExtra = this.$els.extra.innerHTML != '';
        }
    };
</script>
