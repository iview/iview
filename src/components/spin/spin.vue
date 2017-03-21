<template>
    <transition name="fade">
        <div :class="classes">
            <div :class="mainClasses">
                <span :class="dotClasses"></span>
                <div :class="textClasses"><slot></slot></div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-spin';

    export default {
        name: 'Spin',
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            fix: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showText: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-fix`]: this.fix,
                        [`${prefixCls}-show-text`]: this.showText,
                    }
                ];
            },
            mainClasses () {
                return `${prefixCls}-main`;
            },
            dotClasses () {
                return `${prefixCls}-dot`;
            },
            textClasses () {
                return `${prefixCls}-text`;
            }
        },
        mounted () {
            this.showText = this.$slots.default !== undefined;
        }
    };
</script>
