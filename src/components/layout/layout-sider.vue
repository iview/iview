<template>
    <div 
        :class="wrapClasses" 
        :style="{width: siderWidth + 'px', minWidth: siderWidth + 'px', maxWidth: siderWidth + 'px', flex: '0 0 ' + siderWidth + 'px'}">
        <span v-show="showZeroTrigger" @click="toggleCollapse" :class="zeroWidthTriggerClasses">
            <i class="ivu-icon ivu-icon-navicon-round"></i>
        </span>
        <div :class="`${prefixCls}-children`">
            <slot></slot>
        </div>
        <div v-show="!mediaMatched && !hideTrigger" :class="triggerClasses" @click="toggleCollapse" :style="{width: siderWidth + 'px'}">
            <i :class="triggerIconClasses"></i>
        </div>
    </div>
</template>
<script>
    import { on, off } from '../../utils/dom';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-layout-sider';

    const dimensionMap = {
        xs: '480px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1600px',
    };

    if (typeof window !== 'undefined') {
        const matchMediaPolyfill = mediaQuery => {
            return {
                media: mediaQuery,
                matches: false,
                on() {
                },
                off() {
                },
            };
        };
        window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }

    export default {
        name: 'Sider',
        props: {
            value: {  // if it's collpased now
                type: Boolean,
                default: false
            },
            className: {
                type: String,
                default: ''
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
                default: '',
                validator (val) {
                    return oneOf(val, ['xs', 'sm', 'md', 'lg', 'xl']);
                }
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
                    this.className,
                    this.siderWidth ? '' : `${prefixCls}-zero-width`,
                    this.value ? `${prefixCls}-collapsed` : ''
                ];
            },
            triggerClasses () {
                return [
                    `${prefixCls}-trigger`,
                    this.value ? `${prefixCls}-trigger-collapsed` : '',
                ];
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
                    `ivu-icon-chevron-${this.reverseArrow ? 'right' : 'left'}`,
                    `${prefixCls}-trigger-icon`,
                ];
            },
            siderWidth () {
                return this.value ? (this.mediaMatched ? 0 : parseInt(this.collapsedWidth)) : parseInt(this.width);
            },
            showZeroTrigger () {
                return this.mediaMatched && !this.hideTrigger || (parseInt(this.collapsedWidth) === 0) && this.value && !this.hideTrigger;
            }
        },
        methods: {
            toggleCollapse () {
                this.$emit('input', !this.value);
                this.$emit('on-collapse', !this.value);
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
                    this.$emit('on-collapse', this.mediaMatched);
                }
            },
            onWindowResize () {
                this.matchMedia();
            }
        },
        mounted () {
            on(window, 'resize', this.onWindowResize);
            this.matchMedia();
            this.$emit('input', this.defaultCollapsed);
        },
        destroyed () {
            off(window, 'resize', this.onWindowResize);
        }
    };
</script>
