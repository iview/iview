<template>
    <span v-if="dot" :class="classes" ref="badge">
        <slot></slot>
        <sup :class="dotClasses" v-show="badge"></sup>
    </span>
    <span v-else :class="classes" ref="badge">
        <slot></slot>
        <sup v-if="hasCount" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
    </span>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    const prefixCls = 'ivu-badge';

    export default {
        name: 'Badge',
        props: {
            count: Number,
            dot: {
                type: Boolean,
                default: false
            },
            overflowCount: {
                type: [Number, String],
                default: 99
            },
            className: String,
            showZero: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            },
            status: {
                validator (value) {
                    return oneOf(value, ['success', 'processing', 'default', 'error', 'warning']);
                }
            },
            offset: {
                type: Array
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            },
            dotClasses () {
                return `${prefixCls}-dot`;
            },
            countClasses () {
                return [
                    `${prefixCls}-count`,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${prefixCls}-count-alone`]: this.alone
                    }
                ];
            },
            finalCount () {
                if (this.text !== '') return this.text;
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

                if (this.text !== '') status = true;

                return status || this.showZero;
            },
            hasCount() {
                if(this.count || this.text !== '') return true;
                if(this.showZero && parseInt(this.count) === 0) return true;
                else return false;
            },
            alone () {
                return this.$slots.default === undefined;
            }
        }
    };
</script>
