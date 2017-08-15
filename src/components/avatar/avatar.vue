<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-avatar';

    export default {
        name: 'Avatar',
        props: {
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default: 'default'
            },
            src: {
                type: String
            },
            icon: {
                type: String
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.shape}`,
                    `${prefixCls}-${this.size}`,
                    {
                        [`${prefixCls}-image`]: !!this.src,
                        [`${prefixCls}-icon`]: !!this.icon
                    }
                ];
            }
        },
        render (h) {
            let innerNode = '';

            if (this.src) {
                innerNode = h('img', {
                    attrs: {
                        src: this.src
                    }
                });
            } else if (this.icon) {
                innerNode = h(Icon, {
                    props: {
                        type: this.icon
                    }
                });
            } else if (this.$slots.default) {
                innerNode = h('span', {
                    'class': `${prefixCls}-string`
                }, this.$slots.default);
            }

            return h('span', {
                'class': this.classes
            }, [innerNode]);
        }
    };
</script>