<template>
    <transition name="fade">
        <div :class="classes" @click.stop="check">
            <span :class="dotClasses" v-if="showDot"></span><span :class="textClasses"><slot></slot></span>
            <Icon v-if="closable" type="ios-close-empty" @click.native.stop="close"></Icon>
        </div>
    </transition>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-tag';

    export default {
        name: 'Tag',
        components: { Icon },
        props: {
            closable: {
                type: Boolean,
                default: false
            },
            checkable: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: true
            },
            color: {
                validator (value) {
                    return oneOf(value, ['blue', 'green', 'red', 'yellow', 'default']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['border', 'dot']);
                }
            },
            name: {
                type: [String, Number]
            }
        },
        data () {
            return {
                isChecked: this.checked
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.color}`]: !!this.color && (this.checkable && this.isChecked),
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-closable`]: this.closable,
                        [`${prefixCls}-checkable`]: this.checkable
                    }
                ];
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            dotClasses () {
                return `${prefixCls}-dot-inner`;
            },
            showDot () {
                return !!this.type && this.type === 'dot';
            }
        },
        methods: {
            close (event) {
                this._emitAction(event, 'on-close');
            },
            check (event) {
                this.isChecked = !this.isChecked;
                this._emitAction(event, 'on-check');
            },
            _emitAction (event, action) {
                if (this.name === undefined) {
                    this.$emit(action, event);
                } else {
                    this.$emit(action, event, this.name);
                }
            }
        }
    };
</script>
