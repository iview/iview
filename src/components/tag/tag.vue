<template>
    <transition name="fade" v-if="fade">
        <div :class="classes" @click.stop="check" :style="wraperStyles">
            <span :class="dotClasses" v-if="showDot" :style="bgColorStyle"></span>
            <span :class="textClasses" :style="textColorStyle"><slot></slot></span>
            <Icon v-if="closable" :class="iconClass" :color="lineColor" type="ios-close" @click.native.stop="close"></Icon>
        </div>
    </transition>
    <div v-else :class="classes" @click.stop="check" :style="wraperStyles">
        <span :class="dotClasses" v-if="showDot" :style="bgColorStyle"></span>
        <span :class="textClasses" :style="textColorStyle"><slot></slot></span>
        <Icon v-if="closable" :class="iconClass" :color="lineColor" type="ios-close" @click.native.stop="close"></Icon>
    </div>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';
    const prefixCls = 'ivu-tag';
    const initColorList = ['default', 'primary', 'success', 'warning', 'error', 'blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple'];
    const colorList = ['pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple'];

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
            },
            fade: {
                type: Boolean,
                default: true
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
                        [`${prefixCls}-${this.color}`]: !!this.color && oneOf(this.color, initColorList),
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-closable`]: this.closable,
                        [`${prefixCls}-checked`]: this.isChecked
                    }
                ];
            },
            wraperStyles () {
                return oneOf(this.color, initColorList) ? {} : {background: this.isChecked ? this.defaultTypeColor : 'transparent', borderWidth: '1px', borderStyle: 'solid', borderColor: ((this.type !== 'dot' && this.type !== 'border' && this.isChecked) ? this.borderColor : this.lineColor), color: this.lineColor};
            },
            textClasses () {
                return [
                    `${prefixCls}-text`,
                    this.type === 'border' ? (oneOf(this.color, initColorList) ? `${prefixCls}-color-${this.color}` : '') : '',
                    (this.type !== 'dot' && this.type !== 'border' && this.color !== 'default') ? (this.isChecked && colorList.indexOf(this.color) < 0 ? `${prefixCls}-color-white` : '') : ''
                ];
            },
            dotClasses () {
                return `${prefixCls}-dot-inner`;
            },
            iconClass () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return oneOf(this.color, initColorList) ? `${prefixCls}-color-${this.color}` : '';
                } else {
                    return this.color !== undefined ? (this.color === 'default' ? '' : 'rgb(255, 255, 255)') : '';
                }
            },
            showDot () {
                return !!this.type && this.type === 'dot';
            },
            lineColor () {
                if (this.type === 'dot') {
                    return '';
                } else if (this.type === 'border') {
                    return this.color !== undefined ? (oneOf(this.color, initColorList) ? '' : this.color) : '';
                } else {
                    return this.color !== undefined ? (this.color === 'default' ? '' : 'rgb(255, 255, 255)') : '';
                }
            },
            borderColor () {
                return this.color !== undefined ? (this.color === 'default' ? '' : this.color) : '';
            },
            dotColor () {
                return this.color !== undefined ? (oneOf(this.color, initColorList) ? '' : this.color) : '';
            },
            textColorStyle () {
                return oneOf(this.color, initColorList) ? {} : ((this.type !== 'dot' && this.type !== 'border') ? (this.isChecked ? {color: this.lineColor} : {}) : {color: this.lineColor});
            },
            bgColorStyle () {
                return oneOf(this.color, initColorList) ? {} : {background: this.dotColor};
            },
            defaultTypeColor () {
                return (this.type !== 'dot' && this.type !== 'border') ? (this.color !== undefined ? (oneOf(this.color, initColorList) ? '' : this.color) : '') : '';
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
            }
        },
        watch: {
            checked (val) {
                this.isChecked = val;
            }
        }
    };
</script>