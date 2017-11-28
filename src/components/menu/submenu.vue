<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-submenu-title']" ref="reference" @click="handleClick">
            <slot name="title"></slot>
            <Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
        </div>
        <collapse-transition v-if="mode === 'vertical'">
            <ul :class="[prefixCls]" v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
        <collapse-transition v-if="mode === 'horizontal' && (directparent && directparent.$options.name === 'Submenu')">
            <ul :class="[prefixCls]" v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
        <transition name="slide-up" v-if="mode ==='horizontal' && !(directparent && directparent.$options.name === 'Submenu')">
            <Drop v-show="opened" placement="bottom" ref="drop" :style="dropStyle">
                <ul :class="[prefixCls + '-drop-list']">
                    <slot></slot>
                </ul>
            </Drop>
        </transition>
    </li>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import CollapseTransition from '../base/collapse-transition';
    import {
        getStyle,
        findComponentUpward
    } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'ivu-menu';
    export default {
        name: 'Submenu',
        mixins: [Emitter],
        components: {
            Icon,
            Drop,
            CollapseTransition
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                prefixCls: prefixCls,
                active: false,
                opened: false,
                thirdsub: false,
                dropWidth: parseFloat(getStyle(this.$el, 'width')),
                parent: findComponentUpward(this, 'Menu'),
                directparent: findComponentUpward(this, 'Submenu')
            };
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-opened`]: this.opened,
                        [`${prefixCls}-submenu-disabled`]: this.disabled
                    }
                ];
            },
         
            mode() {
               
                return this.parent.mode;
            },
            accordion() {
                return this.parent.accordion;
            },
            dropStyle() {
                let style = {};
                if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
                return style;
            }
          
        },
        methods: {
            handleMouseenter() {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = true;
                }, 250);
            },
            handleMouseleave() {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = false;
                }, 150);
            },
            handleClick() {

              
                if (this.disabled) return;            
                if (this.mode === 'horizontal') return;
                const opened = this.opened;
                if (this.accordion) {  
                    this.parent.$children.forEach(item => {
                        if(!this.directparent){
                        if (item.$options.name === 'Submenu') item.opened = false;
                        }
                    });
                }
                this.opened = !opened;
                this.parent.updateOpenKeys(this.name);
            }
        },
        watch: {
            mode(val) {
                if (val === 'horizontal' && !(this.directparent && this.directparent.$options.name === 'Submenu')) {
                    this.$refs.drop.update();
                }
            },
            opened(val) {
                if (this.mode === 'vertical') return;
                if(this.mode === 'horizontal' && (this.directparent && this.directparent.$options.name === 'Submenu'))return;
                if (val) {
                    // set drop a width to fixed when menu has fixed position
                    this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        mounted() {
          
            this.$on('on-menu-item-select', (name) => {
                if (this.mode === 'horizontal') this.opened = false;
                this.dispatch('Menu', 'on-menu-item-select', name);
                return true;
            });
            this.$on('on-update-active-name', (status) => {
                if (this.directparent && this.directparent.$options.name === 'Submenu') {
                    this.active = false;
                } else {
                    this.active = status;
                }
            });
        }
    };
</script>
