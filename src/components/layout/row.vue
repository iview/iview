<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-row';

    export default {
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['flex']);
                }
            },
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator (value) {
                    return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
                }
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ]
            }
        }
    }
</script>