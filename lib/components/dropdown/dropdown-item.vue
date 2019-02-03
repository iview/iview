<template>
    <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
    const prefixCls = 'ivu-dropdown-item';
    import { findComponentUpward } from '../../utils/assist';
    export default {
        name: 'DropdownItem',
        props: {
            name: {
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
                ];
            }
        },
        methods: {
            handleClick () {
                const $parent = findComponentUpward(this, 'Dropdown');
                const hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';

                if (this.disabled) {
                    this.$nextTick(() => {
                        $parent.currentVisible = true;
                    });
                } else if (hasChildren) {
                    this.$parent.$emit('on-haschild-click');
                } else {
                    if ($parent && $parent.$options.name === 'Dropdown') {
                        $parent.$emit('on-hover-click');
                    }
                }
                $parent.$emit('on-click', this.name);
            }
        }
    };
</script>
