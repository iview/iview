<template>
    <div :class="wrapClasses">
        <div :class="outerClasses">
            <div :class="innerClasses">
                <div :class="bgClasses" :style="bgStyle"></div>
            </div>
        </div>
        <span v-if="!hideInfo" :class="textClasses">
            <slot>
                <span v-if="isStatus" :class="textInnerClasses">
                    <Icon :type="statusIcon"></Icon>
                </span>
                <span v-else :class="textInnerClasses">
                    {{ percent }}%
                </span>
            </slot>
        </span>
    </div>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-progress';

    export default {
        components: { Icon },
        props: {
            percent: {
                type: Number,
                default: 0
            },
            status: {
                validator (value) {
                    return oneOf(value, ['normal', 'active', 'wrong', 'success']);
                },
                default: 'normal'
            },
            hideInfo: {
                type: Boolean,
                default: false
            },
            strokeWidth: {
                type: Number,
                default: 10
            }
        },
        data () {
            return {
                currentStatus: this.status
            };
        },
        computed: {
            isStatus () {
                return this.currentStatus == 'wrong' || this.currentStatus == 'success';
            },
            statusIcon () {
                let type = '';
                switch (this.currentStatus) {
                    case 'wrong':
                        type = 'ios-close';
                        break;
                    case 'success':
                        type = 'ios-checkmark';
                        break;
                }

                return type;
            },
            bgStyle () {
                return {
                    width: `${this.percent}%`,
                    height: `${this.strokeWidth}px`
                };
            },
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.currentStatus}`,
                    {
                        [`${prefixCls}-show-info`]: !this.hideInfo

                    }
                ];
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            textInnerClasses () {
                return `${prefixCls}-text-inner`;
            },
            outerClasses () {
                return `${prefixCls}-outer`;
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            bgClasses () {
                return `${prefixCls}-bg`;
            }
        },
        created () {
            this.handleStatus();
        },
        methods: {
            handleStatus (isDown) {
                if (isDown) {
                    this.currentStatus = 'normal';
                    this.$emit('on-status-change', 'normal');
                } else {
                    if (parseInt(this.percent, 10) == 100) {
                        this.currentStatus = 'success';
                        this.$emit('on-status-change', 'success');
                    }
                }
            }
        },
        watch: {
            percent (val, oldVal) {
                if (val < oldVal) {
                    this.handleStatus(true);
                } else {
                    this.handleStatus();
                }
            },
            status (val) {
                this.currentStatus = val;
            }
        }
    };
</script>
