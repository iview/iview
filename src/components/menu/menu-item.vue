<template>
    <a
        v-if="to"
        :href="linkUrl"
        :target="target"
        :class="classes"
        @click.exact="handleClickItem($event, false)"
        @click.ctrl="handleClickItem($event, true)"
        @click.meta="handleClickItem($event, true)"
        :style="itemStyle"><slot></slot></a>
    <li v-else :class="classes" @click.stop="handleClickItem" :style="itemStyle"><slot></slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    import mixin from './mixin';
    import mixinsLink from '../../mixins/link';

    const prefixCls = 'ivu-menu';

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
            handleClickItem (event, new_window = false) {
                if (this.disabled) return;

                if (new_window || this.target === '_blank') {
                    // 如果是 new_window，直接新开窗口就行，无需发送状态
                    this.handleCheckClick(event, new_window);
                    let parentMenu = findComponentUpward(this, 'Menu');
                    if (parentMenu) parentMenu.handleEmitSelectEvent(this.name);
                } else {
                    let parent = findComponentUpward(this, 'Submenu');

                    if (parent) {
                        this.dispatch('Submenu', 'on-menu-item-select', this.name);
                    } else {
                        this.dispatch('Menu', 'on-menu-item-select', this.name);
                    }

                    this.handleCheckClick(event, new_window);
                }
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
