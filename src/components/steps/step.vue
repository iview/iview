<style>

</style>
<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']">
            <div :class="[prefixCls + '-head-inner']">
                <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']">{{ title }}</div>
            <slot>
                <!--stepType === true 使用新版-->
                <div v-show="stepType==='true'">
                    <!-- 事件 eventValue 事件显示的value eventTri自定义事件名 -->
                    <div v-if="eventValue" v-on:click="eventTri" style="color: #63B8FF;cursor: pointer" :class="[prefixCls + '-content']">{{ eventValue }}</div>
                    <!-- eventTri自定义事件名 isHide是否超出三个隐藏  content 内容 -->
                    <Tooltip  v-if="content" max-width="200" placement="top" :transfer="true" style="display:block" :content='content'>
                        <div v-on:click="eventTri" v-bind:style="isHide==='true'?'overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 90px;':''" :class="[prefixCls + '-content']">{{ content }}</div>
                    </Tooltip>
                </div>
                <!--不使用新版-->
                <div v-show="stepType==='false'" v-if="content" :class="[prefixCls + '-content']">{{ content }}</div>
                <!--footer 页脚-->
                <div v-if="footer" :class="[prefixCls + '-content']">{{ footer }}</div>
            </slot>
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
            footer: {
                type: String
            },
            isHide:{
                type: String,
            },
            icon: {
                type: String
            },
            eventValue: {
                type: String
            },
            stepType: {
                type: String,
                default: 'false'
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
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus == 'error') {
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
        },
        methods: {
            eventTri () {
                this.$emit('triEvent');
            }
        }
    };
</script>
