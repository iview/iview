<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead"><slot name="title"></slot></div>
        <div :class="extraClasses" v-if="showExtra"><slot name="extra"></slot></div>
        <div :class="bodyClasses" :style="bodyStyles"><slot></slot></div>
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
            },
            padding: Number
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
            },
            bodyStyles () {
                let padding = this.padding;
                if (this.padding !== undefined) {
                    padding += 'px';
                    return {
                        padding,
                    };
                }
                return '';
            }
        },
        mounted () {
            this.showHead = this.$slots.title !== undefined;
            this.showExtra = this.$slots.extra !== undefined;
        }
    };
</script>
