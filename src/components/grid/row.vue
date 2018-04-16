<script>
    import { oneOf } from '../../utils/assist';
    const prefixCls = 'ivu-row';
    export default {
        name: 'Row',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            type: {
                validator(value) {
                    return oneOf(value, ['flex']);
                }
            },
            align: {
                validator(value) {
                    return oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator(value) {
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
            classes() {
                return [{
                    [`${prefixCls}`]: !this.type,
                    [`${prefixCls}-${this.type}`]: !!this.type,
                    [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                    [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                    [`${this.className}`]: !!this.className
                }];
            },
            styles() {
                let ret = {};
                if (this.gutter) {
                    ret.marginLeft = `-${this.gutter / 2}px`;
                    ret.marginRight = ret.marginLeft;
                }
                return ret;
            }
        },
        render(h) {
            return h(this.tag, {
                class: this.classes,
                style: this.styles
            }, this.$slots.default);
        }
    }
</script>
