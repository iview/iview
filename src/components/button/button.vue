<template>
    <button :type="htmlType" :class="classes" :disabled="disabled">
        <i :class="loadingIconClasses" v-if="loading"></i>
        <i :class="typeIconClasses" v-if="icon && !loading"></i>
        <slot></slot>
    </button>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-btn';
    const iconPrefixCls = 'ivu-icon';

    export default {
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'ghost']);
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
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
            icon: String
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading != null && this.loading
                    }
                ]
            },
            loadingIconClasses () {
                return `${iconPrefixCls} ivu-load-loop ${iconPrefixCls}-load-c`;
            },
            typeIconClasses () {
                return [
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${this.icon}`]: !!this.icon
                    }
                ]
            }
        }
    }
</script>