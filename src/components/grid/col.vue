<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    const prefixCls = 'ivu-col';

    function parseFlex(flex) {
        if (typeof flex === 'number') {
            return `${flex} ${flex} auto`;
        }

        if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
            return `0 0 ${flex}`;
        }

        return flex;
    }

    export default {
        name: 'iCol',
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            xl: [Number, Object],
            xxl: [Number, Object],
            // 4.5.0
            flex: {
                type: [Number, String],
                default: ''
            }
        },
        data () {
            return {
                gutter: 0
            };
        },
        computed: {
            classes () {
                let classList = [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-span-${this.span}`]: this.span,
                        [`${prefixCls}-order-${this.order}`]: this.order,
                        [`${prefixCls}-offset-${this.offset}`]: this.offset,
                        [`${prefixCls}-push-${this.push}`]: this.push,
                        [`${prefixCls}-pull-${this.pull}`]: this.pull,
                        [`${this.className}`]: !!this.className
                    }
                ];

                ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
                    if (typeof this[size] === 'number') {
                        classList.push(`${prefixCls}-span-${size}-${this[size]}`);
                    } else if (typeof this[size] === 'object') {
                        let props = this[size];
                        Object.keys(props).forEach(prop => {
                            classList.push(
                                prop !== 'span'
                                    ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                                    : `${prefixCls}-span-${size}-${props[prop]}`
                            );
                        });
                    }
                });

                return classList;
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    };
                }

                // 4.5.0
                if (this.flex) {
                    style.flex = parseFlex(this.flex);
                }

                return style;
            }
        },
        methods: {
            updateGutter () {
                const Row = findComponentUpward(this, 'Row');
                if (Row) {
                    Row.updateGutter(Row.gutter);
                }
            }
        },
        mounted () {
            this.updateGutter();
        },
        beforeDestroy () {
            this.updateGutter();
        }
    };
</script>
