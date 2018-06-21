<template>
    <a v-if="to" :href="linkUrl" :target="target" :class="classes" @click="handleClickItem" :style="itemStyle"><slot></slot></a>
    <li v-else :class="classes" @click.stop="handleClickItem" :style="itemStyle"><slot></slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    const prefixCls = 'ivu-menu';
    import mixin from './mixin';
    import mixinsLink from '../../mixins/link';

    export default {
        name: 'MenuItem',
        mixins: [ Emitter, mixin, mixinsLink ],
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
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
            },
            itemStyle () {
                return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
                } : {};
            }
        },
        methods: {
            handleClickItem (event) {
                if (this.disabled) return;

                let parent = findComponentUpward(this, 'Submenu');

                if (parent) {
                    this.dispatch('Submenu', 'on-menu-item-select', this.name);
                } else {
                    this.dispatch('Menu', 'on-menu-item-select', this.name);
                }

                this.handleCheckClick(event);
            }
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name === name) {
                    this.active = true;
                    this.dispatch('Submenu', 'on-update-active-name', name);
                } else {
                    this.active = false;
                }
            });
        }
    };
</script>
