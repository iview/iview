<template>
    <transition name="fade">
        <div :class="classes" @click.stop="check" :style="{background: defaultTypeColor, borderColor: mainColor, color: outerTextColor}">
            <span :class="dotClasses" v-if="showDot" :style="{background: mainColor}"></span><span :class="textClasses" :style="{color: textColor}"><slot></slot></span><Icon v-if="closable" type="ios-close-empty" :color="closeColor" @click.native.stop="close"></Icon>
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
                type: String,
                default: 'default'
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
                        [`${prefixCls}-${this.color}`]: !!this.color,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-closable`]: this.closable,
                        [`${prefixCls}-checked`]: this.isChecked
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
            },
            borderColor () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return this.color !== undefined ? this.transferColor(this.color) : '';
                } else {
                    return '';
                }
            },
            outerTextColor () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return this.color !== undefined ? this.transferColor(this.color) : '';
                } else {
                    return this.color !== undefined ? (this.color === 'default' ? '' : 'rgb(255, 255, 255)') : '';
                }
            },
            textColor () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return this.color !== undefined ? this.transferColor(this.color) : '';
                } else {
                    return this.color !== undefined ? (this.color === 'default' ? '' : 'rgb(255, 255, 255)') : '';
                }
            },
            mainColor () {
                return this.color !== undefined ? this.transferColor(this.color) : '';
            },
            closeColor () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return this.color !== undefined ? this.transferColor(this.color) : '';
                } else {
                    return this.color !== undefined ? (this.color !== 'default' ? 'rgb(255, 255, 255)' : '') : '';
                }
            },
            defaultTypeColor () {
                return (this.type !== 'dot' && this.type !== 'border') ? (this.color !== undefined ? this.transferColor(this.color) : '') : '';
            }
        },
        methods: {
            close (event) {
                if (this.name === undefined) {
                    this.$emit('on-close', event);
                } else {
                    this.$emit('on-close', event, this.name);
                }
            },
            check () {
                if (!this.checkable) return;
                const checked = !this.isChecked;
                this.isChecked = checked;
                if (this.name === undefined) {
                    this.$emit('on-change', checked);
                } else {
                    this.$emit('on-change', checked, this.name);
                }
            },
            transferColor (name) {
                if (oneOf(name, ['blue', 'green', 'red', 'yellow', 'default'])) {
                    switch (name) {
                        case 'red': return '#ed3f14';
                        case 'green': return '#19be6b';
                        case 'yellow': return '#ff9900';
                        case 'blue': return '#2d8cf0';
                        case 'default': return '';
                    }
                } else {
                    return name;
                }
            }
        }
    };
</script>
