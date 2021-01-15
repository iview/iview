<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findComponentDownward, findBrothersComponents } from '../../utils/assist';

    const prefixCls = 'ivu-row';

    export default {
        name: 'Row',
        props: {
            // todo 4.5.0 已无效，强制 flex
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
            className: String,
            // 4.5.0
            wrap: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            classes () {
                return [
                    // todo 4.5.0 已无效，强制 flex
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${prefixCls}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className,
                        [`${prefixCls}-no-wrap`]: !this.wrap
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
                // 这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
//                const Cols = findComponentsDownward(this, 'iCol');
                const Col = findComponentDownward(this, 'iCol');
                const Cols = findBrothersComponents(Col, 'iCol', false);
                if (Cols.length) {
                    Cols.forEach((child) => {
                        if (val !== 0) {
                            child.gutter = val;
                        }
                    });
                }
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>
