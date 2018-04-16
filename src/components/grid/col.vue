<script>
    const prefixCls = 'ivu-col';
    export default {
        name: 'iCol',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        data () {
            return {};
        },
        computed: {
            gutter() {
              let parent = this.$parent;
              while (parent && parent.$options.name !== 'Row') {
                parent = parent.$parent;
              }
              return parent ? parent.gutter : 0;
            },
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

                ['xs', 'sm', 'md', 'lg'].forEach(size => {
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
                if (this.gutter) {
                  style.paddingLeft = this.gutter / 2 + 'px';
                  style.paddingRight = style.paddingLeft;
                }
                return style;
            }
        },
        render(h) {
            return h(this.tag, {
                class: this.classes,
                style: this.styles
            }, this.$slots.default);
        }
    };
</script>
