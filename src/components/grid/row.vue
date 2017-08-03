<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-row';

    export default {
        name: 'Row',
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
            gutter: {
                type: Number,
                default: 0
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: !this.type,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }

                return style;
            }
        },
        methods: {
            updateGutter (val) {
                this.$children.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val;
                    }
                });
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>
