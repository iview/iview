<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-col';

    export default {
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String
        },
        data () {
            return {
                gutter: 0
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-span-${this.span}`]: this.span,
                        [`${prefixCls}-order-${this.order}`]: this.order,
                        [`${prefixCls}-offset-${this.offset}`]: this.offset,
                        [`${prefixCls}-push-${this.push}`]: this.push,
                        [`${prefixCls}-pull-${this.pull}`]: this.pull,
                        [`${this.className}`]: !!this.className
                    }
                ]
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    }
                }

                return style;
            }
        }
    }
</script>