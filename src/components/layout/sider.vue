<template>
    <div 
        :class="wrapClasses" 
        :style="wrapStyles">
        <span v-show="showZeroTrigger" @click="toggleCollapse" :class="zeroWidthTriggerClasses">
            <i class="ivu-icon ivu-icon-ios-menu"></i>
        </span>
        <div :class="childClasses">
            <slot></slot>
        </div>
        <slot name="trigger">
            <div v-show="showBottomTrigger" :class="triggerClasses" @click="toggleCollapse" :style="{width: siderWidth + 'px'}">
                <i :class="triggerIconClasses"></i>
            </div>
        </slot>
    </div>
</template>
<script>
    import { on, off } from '../../utils/dom';
    import { oneOf, dimensionMap, setMatchMedia } from '../../utils/assist';
    const prefixCls = 'ivu-layout-sider';
    setMatchMedia();
    export default {
        name: 'Sider',
        props: {
            value: {  // if it's collpased now
                type: Boolean,
                default: false
            },
            width: {
                type: [Number, String],
                default: 200
            },
            collapsedWidth: {
                type: [Number, String],
                default: 64
            },
            hideTrigger: {
                type: Boolean,
                default: false
            },
            breakpoint: {
                type: String,
                validator (val) {
                    return oneOf(val, ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);
                }
            },
            collapsible: {
                type: Boolean,
                default: false
            },
            defaultCollapsed: {
                type: Boolean,
                default: false
            },
            reverseArrow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                mediaMatched: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    this.siderWidth ? '' : `${prefixCls}-zero-width`,
                    this.value ? `${prefixCls}-collapsed` : ''
                ];
            },
            wrapStyles () {
                return {
                    width: `${this.siderWidth}px`,
                    minWidth: `${this.siderWidth}px`,
                    maxWidth: `${this.siderWidth}px`,
                    flex: `0 0 ${this.siderWidth}px`
                };
            },
            triggerClasses () {
                return [
                    `${prefixCls}-trigger`,
                    this.value ? `${prefixCls}-trigger-collapsed` : '',
                ];
            },
            childClasses () {
                return `${this.prefixCls}-children`;
            },
            zeroWidthTriggerClasses () {
                return [
                    `${prefixCls}-zero-width-trigger`,
                    this.reverseArrow ? `${prefixCls}-zero-width-trigger-left` : ''
                ];
            },
            triggerIconClasses () {
                return [
                    'ivu-icon',
                    `ivu-icon-ios-arrow-${this.reverseArrow ? 'forward' : 'back'}`,
                    `${prefixCls}-trigger-icon`,
                ];
            },
            siderWidth () {
                return this.collapsible ? (this.value ? (this.mediaMatched ? 0 : parseInt(this.collapsedWidth)) : parseInt(this.width)) : this.width;
            },
            showZeroTrigger () {
                return this.collapsible ? (this.mediaMatched && !this.hideTrigger || (parseInt(this.collapsedWidth) === 0) && this.value && !this.hideTrigger) : false;
            },
            showBottomTrigger () {
                return this.collapsible ? !this.mediaMatched && !this.hideTrigger : false;
            }
        },
        methods: {
            toggleCollapse () {
                let value = this.collapsible ? !this.value : false;
                this.$emit('input', value);
            },
            matchMedia () {
                let matchMedia;
                if (window.matchMedia) {
                    matchMedia = window.matchMedia;
                }
                let mediaMatched = this.mediaMatched;
                this.mediaMatched = matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`).matches;
                
                if (this.mediaMatched !== mediaMatched) {
                    this.$emit('input', this.mediaMatched);
                }
            },
            onWindowResize () {
                this.matchMedia();
            }
        },
        watch: {
            value (stat) {
                this.$emit('on-collapse', stat);
            }
        },
        mounted () {
            if (this.defaultCollapsed) {
                this.$emit('input', this.defaultCollapsed);
            }
            if (this.breakpoint !== undefined) {
                on(window, 'resize', this.onWindowResize);
                this.matchMedia();
            }
        },
        beforeDestroy () {
            if (this.breakpoint !== undefined) {
                off(window, 'resize', this.onWindowResize);
            }
        }
    };
</script>