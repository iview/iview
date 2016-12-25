<template>
    <li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>
<script>
    const prefixCls = 'ivu-menu';

    export default {
        name: 'MenuItem',
        props: {
            key: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;
                this.$dispatch('on-menu-item-select', this.key);
            }
        }
    };
</script>
