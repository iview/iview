<template>
    <div
        :class="[prefixCls]"
        @click="handleClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-clickoutside="handleClose">
        <div :class="[prefixCls-rel]" v-el:reference><slot></slot></div>
        <Drop v-show="visible" :placement="placement" transition="slide-up" v-ref:drop><slot name="list"></slot></Drop>
    </div>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-dropdown';

    export default {
        name: 'Dropdown',
        directives: { clickoutside },
        components: { Drop },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'hover'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false
            }
        },
        methods: {
            handleClick () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = !this.visible;
            },
            handleMouseenter () {
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },
            handleClose () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = false;
            },
            hasParent () {
                const $parent = this.$parent.$parent;
                if ($parent && $parent.$options.name === 'Dropdown') {
                    return $parent;
                } else {
                    return false;
                }
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        events: {
            'on-click' (key) {
                const $parent = this.hasParent();
                if ($parent ) $parent.$emit('on-click', key)
            },
            'on-hover-click' () {
                this.$nextTick(() => {
                    this.visible = false;
                });
                const $parent = this.hasParent();
                if ($parent) $parent.$emit('on-hover-click');
            },
            'on-haschild-click' () {
                this.$nextTick(() => {
                    this.visible = true;
                });
                const $parent = this.hasParent();
                if ($parent) $parent.$emit('on-haschild-click');
            }
        }
    }
</script>