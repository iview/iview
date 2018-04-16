<template>
    <button v-if="!isLink" :type="htmlType" :class="classes" :disabled="disabled" @click="handleClick">
        <Icon class="ivu-load-loop" type="load-c" v-if="loading"></Icon>
        <Icon :type="icon" :iconCls="iconCls" v-if="(icon || iconCls) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
    <a v-else :href="href" :target="target" :class="classes" :disabled="disabled" @click="handleClick">
        <Icon class="ivu-load-loop" type="load-c" v-if="loading"></Icon>
        <Icon :type="icon" :iconCls="iconCls"  v-if="(icon || iconCls) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </a>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-btn';

    export default {
        name: 'Button',
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default']);
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
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
            icon: String,
            iconCls: String,
            href: {
                type: String,
                default: ''
            },
            target: {
                type: String,
                default: ''
            },
            long: {
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
            isLink () {
                return this.href !== ''
            },
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.iconCls || this.loading)
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
