<template>
    <a
        v-if="to"
        :class="classes"
        :disabled="disabled"
        :href="linkUrl"
        :target="target"
        @click.exact="handleClickLink($event, false)"
        @click.ctrl="handleClickLink($event, true)"
        @click.meta="handleClickLink($event, true)">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </a>
    <button
        v-else
        :type="htmlType"
        :class="classes"
        :disabled="disabled"
        @click="handleClickLink">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';
    import mixinsLink from '../../mixins/link';

    const prefixCls = 'ivu-btn';

    export default {
        name: 'Button',
        mixins: [ mixinsLink ],
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
                },
                default: 'default'
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            },
            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ];
            }
        },
        methods: {
            // Ctrl or CMD and click, open in new window when use `to`
            handleClickLink (event, new_window = false) {
                this.$emit('click', event);

                this.handleCheckClick(event, new_window);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
