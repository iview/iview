<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-submenu-title']" v-el:reference @click="handleClick">
            <slot name="title"></slot>
            <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
        </div>
        <ul :class="[prefixCls]" v-if="mode === 'vertical'" v-show="opened"><slot></slot></ul>
        <Drop
            v-else
            v-show="opened"
            placement="bottom"
            transition="slide-up"
            v-ref:drop
            :style="dropStyle"><slot></slot></Drop>
    </li>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import { getStyle } from '../../utils/assist';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'Submenu',
        components: { Icon, Drop },
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
                prefixCls: prefixCls,
                active: false,
                opened: false,
                dropWidth: parseFloat(getStyle(this.$el, 'width'))
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-opened`]: this.opened,
                        [`${prefixCls}-submenu-disabled`]: this.disabled
                    }
                ];
            },
            mode () {
                return this.$parent.mode;
            },
            accordion () {
                return this.$parent.accordion;
            },
            dropStyle () {
                let style = {};

                if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
                return style;
            }
        },
        methods: {
            handleMouseenter () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.$parent.updateOpenKeys(this.key);
                    this.opened = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.$parent.updateOpenKeys(this.key);
                    this.opened = false;
                }, 150);
            },
            handleClick () {
                if (this.disabled) return;
                if (this.mode === 'horizontal') return;
                const opened = this.opened;
                if (this.accordion) {
                    this.$parent.$children.forEach(item => {
                        if (item.$options.name === 'Submenu') item.opened = false;
                    });
                }
                this.opened = !opened;
                this.$parent.updateOpenKeys(this.key);
            }
        },
        watch: {
            mode (val) {
                if (val === 'horizontal') {
                    this.$refs.drop.update();
                }
            },
            opened (val) {
                if (this.mode === 'vertical') return;
                if (val) {
                    // set drop a width to fixed when menu has fixed position
                    this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        events: {
            'on-menu-item-select' () {
                if (this.mode === 'horizontal') this.opened = false;
                return true;
            }
        }
    };
</script>
