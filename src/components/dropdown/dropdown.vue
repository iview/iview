<template>
    <div
        :class="[prefixCls]"
        v-click-outside="onClickoutside"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave">
        <div :class="relClasses" ref="reference" @click="handleClick" @contextmenu.prevent="handleRightClick"><slot></slot></div>
        <transition name="transition-drop">
            <Drop
                :class="dropdownCls"
                v-show="currentVisible"
                :placement="placement"
                ref="drop"
                @mouseenter.native="handleMouseenter"
                @mouseleave.native="handleMouseleave"
                :data-transfer="transfer"
                :transfer="transfer"
                v-transfer-dom><slot name="list"></slot></Drop>
        </transition>
    </div>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import {directive as clickOutside} from 'v-click-outside-x';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf, findComponentUpward } from '../../utils/assist';

    const prefixCls = 'ivu-dropdown';

    export default {
        name: 'Dropdown',
        directives: { clickOutside, TransferDom },
        components: { Drop },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover', 'custom', 'contextMenu']);
                },
                default: 'hover'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            visible: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default () {
                    return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
                }
            }
        },
        computed: {
            transition () {
                return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            },
            dropdownCls () {
                return {
                    [prefixCls + '-transfer']: this.transfer
                };
            },
            relClasses () {
                return [
                    `${prefixCls}-rel`,
                    {
                        [`${prefixCls}-rel-user-select-none`]: this.trigger === 'contextMenu'
                    }
                ];
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                currentVisible: this.visible
            };
        },
        watch: {
            visible (val) {
                this.currentVisible = val;
            },
            currentVisible (val) {
                if (val) {
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
                this.$emit('on-visible-change', val);
            }
        },
        methods: {
            handleClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.currentVisible = !this.currentVisible;
            },
            handleRightClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'contextMenu') {
                    return false;
                }
                this.currentVisible = !this.currentVisible;
            },
            handleMouseenter () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.currentVisible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        this.currentVisible = false;
                    }, 150);
                }
            },
            onClickoutside (e) {
                this.handleClose();
                this.handleRightClose();
                if (this.currentVisible) this.$emit('on-clickoutside', e);
            },
            handleClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.currentVisible = false;
            },
            handleRightClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'contextMenu') {
                    return false;
                }
                this.currentVisible = false;
            },
            hasParent () {
//                const $parent = this.$parent.$parent.$parent;
                const $parent = findComponentUpward(this, 'Dropdown');
                if ($parent) {
                    return $parent;
                } else {
                    return false;
                }
            }
        },
        mounted () {
            this.$on('on-click', (key) => {
                const $parent = this.hasParent();
                if ($parent) $parent.$emit('on-click', key);
            });
            this.$on('on-hover-click', () => {
                const $parent = this.hasParent();
                if ($parent) {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.currentVisible = false;
                    });
                    $parent.$emit('on-hover-click');
                } else {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.currentVisible = false;
                    });
                }
            });
            this.$on('on-haschild-click', () => {
                this.$nextTick(() => {
                    if (this.trigger === 'custom') return false;
                    this.currentVisible = true;
                });
                const $parent = this.hasParent();
                if ($parent) $parent.$emit('on-haschild-click');
            });
        }
    };
</script>
