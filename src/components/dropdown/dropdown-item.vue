<template>
    <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
    const prefixCls = 'ivu-dropdown-item';

    export default {
        props: {
            key: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-divided`]: this.divided
                    }
                ]
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) {
                    this.$nextTick(() => {
                        this.$parent.$parent.visible = true;
                    });
                } else {
                    if (this.$parent.$parent.trigger === 'hover') {
                        this.$parent.$parent.visible = false;
                    }
                }
                this.$parent.$parent.$emit('on-click', this.key);
            }
        }
    }
</script>