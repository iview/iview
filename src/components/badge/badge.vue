<template>
    <span v-if="dot" :class="classes" v-el:badge>
        <slot></slot>
        <sup :class="dotClasses" v-show="badge"></sup>
    </span>
    <span v-else :class="classes" v-el:badge>
        <slot></slot>
        <sup v-if="count" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
    </span>
</template>
<script>
    const prefixCls = 'ivu-badge';

    export default {
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
            class: String
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
                        [`${this.class}`]: !!this.class,
                        [`${prefixCls}-count-alone`]: this.alone
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
                    if (this.count) {
                        if (parseInt(this.count) === 0) {
                            status = false;
                        }
                    }
                }

                return status;
            }
        },
        data () {
            return {
                alone: false
            };
        },
        compiled () {
            const child_length = this.$els.badge.children.length;
            if (child_length === 1) {
                this.alone = true;
            }
        }
    };
</script>
