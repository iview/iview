<template>
    <div :class="classes" transition="fade">
        <div :class="mainClasses">
            <span :class="dotClasses"></span>
            <div :class="textClasses" v-el:text><slot></slot></div>
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-spin';

    export default {
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
        compiled () {
            const text = this.$els.text.innerHTML;

            if (text != '') {
                this.showText = true;
            }
        }
    };
</script>
