<template>
    <div :class="itemClasses">
        <div :class="headerClasses" @click="toggle">
            <slot name="arrow-forward-icon" v-if="!hideArrow">
                <Icon type="ios-arrow-forward"></Icon>
            </slot>
            <slot></slot>
        </div>
        <collapse-transition v-if="mounted"
                             @transition-before-enter="handleTransitionBeforeEnter"
                             @transition-enter="handleTransitionEnter"
                             @transition-after-enter="handleTransitionAfterEnter"
                             @transition-before-leave="handleTransitionBeforeLeave"
                             @transition-leave="handleTransitionLeave"
                             @transition-after-leave="handleTransitionAfterLeave"
        >
            <div :class="contentClasses" v-show="isActive">
                <div :class="boxClasses"><slot name="content"></slot></div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import CollapseTransition from '../base/collapse-transition';
    const prefixCls = 'ivu-collapse';

    export default {
        name: 'Panel',
        components: { Icon, CollapseTransition },
        props: {
            name: {
                type: String
            },
            hideArrow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                index: 0, // use index for default when name is null
                isActive: false,
                mounted: false
            };
        },
        computed: {
            itemClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.isActive
                    }
                ];
            },
            headerClasses () {
                return `${prefixCls}-header`;
            },
            contentClasses () {
                return `${prefixCls}-content`;
            },
            boxClasses () {
                return `${prefixCls}-content-box`;
            }
        },
        methods: {
            toggle () {
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                });
            },
            handleTransitionBeforeEnter(...args){
                this.$emit('transition-before-enter', ...args);
            },
            handleTransitionEnter(...args){
                this.$emit('transition-enter', ...args);
            },
            handleTransitionAfterEnter(...args){
                this.$emit('transition-after-enter', ...args);
            },
            handleTransitionBeforeLeave(...args){
                this.$emit('transition-before-leave', ...args);
            },
            handleTransitionLeave(...args){
                this.$emit('transition-leave', ...args);
            },
            handleTransitionAfterLeave(...args){
                this.$emit('transition-after-leave', ...args);
            },
        },
        mounted () {
            this.mounted = true;
            this.$parent.setActive();
        }
    };
</script>
