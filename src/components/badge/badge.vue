<template>
    <span v-if="dot" :class="classes" ref="badge">
        <slot></slot>
        <sup :class="dotClasses" v-show="badge"></sup>
    </span>
    <span v-else :class="classes" ref="badge">
        <slot></slot>
        <sup v-if="count" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
    </span>
</template>
<script>
   import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-badge';
  
    export default {
        name: 'Badge',
        props: {
            count: [Number, String],
            dot: {
                type: Boolean,
                default: false
            },
            overflowCount: {
                type: [Number, String],
                default: 99
            },
            className: String,
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'info', 'success', 'warning', 'error']);
                }
            },
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            },
            dotClasses () {
                return [`${prefixCls}-dot`,{
                    [`${prefixCls}-dot-${this.type}`]: !!this.type,
                }];
            },
            countClasses () {
                return [
                    `${prefixCls}-count`,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${prefixCls}-count-alone`]: this.alone,
                        [`${prefixCls}-count-${this.type}`]: !!this.type,
                    }
                ];
            },
            finalCount () {
                return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count;
            },
            badge () {
                let status = false;

                if (this.count) {
                    status = !(parseInt(this.count) === 0);
                }

                if (this.dot) {
                    status = true;
                    if (this.count !== null) {
                        if (parseInt(this.count) === 0) {
                            status = false;
                        }
                    }
                }

                return status;
            },
            alone () {
                return this.$slots.default === undefined;
            }
        }
    };
</script>
