<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']">
            <div :class="[prefixCls + '-head-inner']">
                <span v-if="!icon && status != 'finish' && status != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']">{{ title }}</div>
            <div v-if="content" :class="[prefixCls + '-content']">{{ content }}</div>
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
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
                total: 1
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.status}`,
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
                    if (this.status == 'finish') {
                        icon = 'ios-checkmark-empty';
                    } else if (this.status == 'error') {
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
            }
        },
        watch: {
            status () {
                if (this.status == 'error') {
                    this.$parent.setNextError();
                }
            }
        }
    };
</script>
