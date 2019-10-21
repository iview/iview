<template>
    <div :class="wrapClasses">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']">
            <div :class="[prefixCls + '-head-inner']">
                <span v-if="!icon && !$slots.icon && currentStatus !== 'finish' && currentStatus !== 'error'">{{ stepNumber }}</span>
                <span v-else-if="$slots.icon" class="ivu-steps-icon"><slot name="icon"></slot></span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']"><slot name="title">{{ title }}</slot></div>
            <div :class="[prefixCls + '-content']" v-if="content || $slots.content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'Step',
        mixins: [ Emitter ],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                }
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: ''
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.currentStatus}`,
                    {
                        [`${prefixCls}-custom`]: !!this.icon || !!this.$slots.icon,
                        [`${prefixCls}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                } else {
                    if (this.currentStatus === 'finish') {
                        icon = 'ios-checkmark';
                    } else if (this.currentStatus === 'error') {
                        icon = 'ios-close';
                    }
                }

                return [
                    `${prefixCls}-icon`,
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${icon}`]: icon !== ''
                    }
                ];
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus === 'error') {
                    this.$parent.setNextError();
                }
            }
        },
        created () {
            this.currentStatus = this.status;
        },
        mounted () {
            this.dispatch('Steps', 'append');
        },
        beforeDestroy () {
            this.dispatch('Steps', 'remove');
        }
    };
</script>
