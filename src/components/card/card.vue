<template>
    <component :is="tagName" :class="classes" v-bind="tagProps" @click="handleClickLink">
        <div :class="headClasses" v-if="showHead"><slot name="title">
            <p v-if="title">
                <Icon v-if="icon" :type="icon"></Icon>
                <span>{{title}}</span>
            </p>
        </slot></div>
        <div :class="extraClasses" v-if="showExtra"><slot name="extra"></slot></div>
        <div :class="bodyClasses" :style="bodyStyles"><slot></slot></div>
    </component>
</template>
<script>
    const prefixCls = 'ivu-card';
    const defaultPadding = 16;
    import Icon from '../icon/icon.vue';
    import mixinsLink from '../../mixins/link';

    export default {
        name: 'Card',
        mixins: [ mixinsLink ],
        components: { Icon },
        props: {
            bordered: {
                type: Boolean,
                default: true
            },
            disHover: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: false
            },
            padding: {
                type: Number,
                default: defaultPadding
            },
            title: {
                type: String,
            },
            icon: {
                type: String,
            }
        },
        data () {
            return {
                showHead: true,
                showExtra: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
                        [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
                        [`${prefixCls}-shadow`]: this.shadow
                    }
                ];
            },
            headClasses () {
                return `${prefixCls}-head`;
            },
            extraClasses () {
                return `${prefixCls}-extra`;
            },
            bodyClasses () {
                return `${prefixCls}-body`;
            },
            bodyStyles () {
                if (this.padding !== defaultPadding) {
                    return {
                        padding: `${this.padding}px`
                    };
                } else {
                    return '';
                }
            },
            // Point out if it should render as <a> tag
            isHrefPattern () {
                const { to } = this;
                return !!to;
            },
            tagName () {
                const { isHrefPattern } = this;
                return isHrefPattern ? 'a' : 'div';
            },
            tagProps () {
                const { isHrefPattern } = this;
                if (isHrefPattern) {
                    const { linkUrl,target } = this;
                    return { href: linkUrl, target };
                } else {
                    return {};
                }
            }
        },
        methods: {
            handleClickLink (event) {
                if (!this.isHrefPattern) return;
                const openInNewWindow = event.ctrlKey || event.metaKey;
                this.handleCheckClick(event, openInNewWindow);
            }
        },
        mounted () {
            this.showHead = this.title || this.$slots.title !== undefined;
            this.showExtra = this.$slots.extra !== undefined;
        }
    };
</script>
