<template>
    <span :class="classes" :style="styles">
        <img :src="src" v-if="src" @error="handleError">
        <Icon :type="icon" :custom="customIcon" v-else-if="icon || customIcon"></Icon>
        <span ref="children" :class="[prefixCls + '-string']" :style="childrenStyle" v-else><slot></slot></span>
    </span>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-avatar';

    const sizeList = ['small', 'large', 'default'];

    export default {
        name: 'Avatar',
        components: { Icon },
        props: {
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            size: {
                type: [String, Number],
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            src: {
                type: String
            },
            icon: {
                type: String
            },
            customIcon: {
                type: String,
                default: ''
            },
        },
        data () {
            return {
                prefixCls: prefixCls,
                scale: 1,
                childrenWidth: 0,
                isSlotShow: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.shape}`,
                    {
                        [`${prefixCls}-image`]: !!this.src,
                        [`${prefixCls}-icon`]: !!this.icon || !!this.customIcon,
                        [`${prefixCls}-${this.size}`]: oneOf(this.size, sizeList)
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.size && !oneOf(this.size, sizeList)) {
                    style.width = `${this.size}px`;
                    style.height = `${this.size}px`;
                    style.lineHeight = `${this.size}px`;
                    style.fontSize = `${this.size/2}px`;
                }
                return style;
            },
            childrenStyle () {
                let style = {};
                if (this.isSlotShow) {
                    style = {
                        msTransform: `scale(${this.scale})`,
                        WebkitTransform: `scale(${this.scale})`,
                        transform: `scale(${this.scale})`,
                        position: 'absolute',
                        display: 'inline-block',
                        left: `calc(50% - ${Math.round(this.childrenWidth / 2)}px)`
                    };
                }
                return style;
            }
        },
        methods: {
            setScale () {
                this.isSlotShow = !this.src && !this.icon;
                if (this.$refs.children) {
                    // set children width again to make slot centered
                    this.childrenWidth = this.$refs.children.offsetWidth;
                    const avatarWidth = this.$el.getBoundingClientRect().width;
                    // add 4px gap for each side to get better performance
                    if (avatarWidth - 8 < this.childrenWidth) {
                        this.scale = (avatarWidth - 8) / this.childrenWidth;
                    } else {
                        this.scale = 1;
                    }
                }
            },
            handleError (e) {
                this.$emit('on-error', e);
            }
        },
        mounted () {
            this.setScale();
        },
        updated () {
            this.setScale();
        }
    };
</script>
