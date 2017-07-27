<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']" :style="bgStyles">
            <div :class="[prefixCls + '-head-inner']" >
                <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']" :style="bgStyles">{{ title }}</div>
            <slot>
                <div v-if="content" :class="[prefixCls + '-content']">{{ content }}</div>
            </slot>
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'Step',
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
        created () {
            this.currentStatus = this.status;
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.currentStatus}`,
                    {
                        [`${prefixCls}-custom`]: !!this.icon,
                        [`${prefixCls}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                } else {
                    if (this.currentStatus == 'finish') {
                        icon = 'ios-checkmark-empty';
                    } else if (this.currentStatus == 'error') {
                        icon = 'ios-close-empty';
                    }
                }

                return [
                    `${prefixCls}-icon`,
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${icon}`]: icon != ''
                    }
                ];
            },
            styles () {
                return {
                    width: `${1/this.total*100}%`
                };
            },
            steps () {
                let parent = this.$parent;
                while (parent.$options.name !== 'Steps') {
                    parent = parent.$parent;
                }
                return parent;
            },
            bgStyles () {
                return {
                    background: this.steps.background
                }
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus == 'error') {
                    this.$parent.setNextError();
                }
            }
        }
    };
</script>
