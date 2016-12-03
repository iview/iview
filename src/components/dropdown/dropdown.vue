<template>
    <div
        :class="[prefixCls]"
        @click="handleClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-clickoutside="handleClose">
        <div :class="[prefixCls-rel]" v-el:reference><slot></slot></div>
        <Drop v-show="visible" :placement="placement" transition="slide-up"><slot name="list"></slot></Drop>
    </div>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-dropdown';

    export default {
        directives: { clickoutside },
        components: { Drop },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'hover'
            },
            align: {
                validator (value) {
                    return oneOf(value, ['left', 'center', 'right']);
                },
                default: 'center'
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false
            }
        },
        computed: {
            placement () {
                return this.align === 'left' ? 'bottom-start' : this.align === 'center' ? 'bottom' : 'bottom-end';
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
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.$broadcast('on-update-popper');
                } else {
                    this.$broadcast('on-destroy-popper');
                }
            }
        }
    }
</script>