<template>
    <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave" appear>
        <div :class="classes" :style="styles">
            <template v-if="type === 'notice'">
                <div :class="contentClasses" ref="content" v-html="content"></div>
                <div :class="contentWithIcon">
                    <render-cell
                        :render="renderFunc"
                    ></render-cell>
                </div>
                <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                    <i class="ivu-icon ivu-icon-ios-close"></i>
                </a>
            </template>
            <template v-if="type === 'message'">
                <div :class="messageContentClasses" ref="content">
                    <div :class="[baseClass + '-content-text']" v-html="content"></div>
                    <div :class="[baseClass + '-content-text']">
                        <render-cell
                            :render="renderFunc"
                        ></render-cell>
                    </div>
                    <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                        <i class="ivu-icon ivu-icon-ios-close"></i>
                    </a>
                </div>
            </template>
        </div>
    </transition>
</template>
<script>
    import RenderCell from '../render';
    export default {
        components: {
            RenderCell
        },
        props: {
            prefixCls: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 1.5
            },
            type: {
                type: String
            },
            content: {
                type: String,
                default: ''
            },
            withIcon: Boolean,
            render: {
                type: Function
            },
            hasTitle: Boolean,
            styles: {
                type: Object,
                default: function() {
                    return {
                        right: '50%'
                    };
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            onClose: {
                type: Function
            },
            transitionName: {
                type: String
            },
            background: {
                type: Boolean,
                default: false
            },
            msgType: {
                type: String
            }
        },
        data () {
            return {
                withDesc: false
            };
        },
        computed: {
            baseClass () {
                return `${this.prefixCls}-notice`;
            },
            renderFunc () {
                return this.render || function () {};
            },
            classes () {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-closable`]: this.closable,
                        [`${this.baseClass}-with-desc`]: this.withDesc,
                        [`${this.baseClass}-with-background`]: this.background
                    }
                ];
            },
            contentClasses () {
                return [
                    `${this.baseClass}-content`,
                    this.render !== undefined ? `${this.baseClass}-content-with-render` : ''
                ];
            },
            messageContentClasses () {
                return [
                    `${this.baseClass}-content`,
                    {
                        [`${this.baseClass}-content-${this.msgType}`]: this.msgType,
                        [`${this.baseClass}-content-background`]: this.background
                    }
                ];
            },
            contentWithIcon () {
                return [
                    this.withIcon ? `${this.prefixCls}-content-with-icon` : '',
                    !this.hasTitle && this.withIcon ? `${this.prefixCls}-content-with-render-notitle` : ''
                ];
            },
            messageClasses () {
                return [
                    `${this.baseClass}-content`,
                    this.render !== undefined ? `${this.baseClass}-content-with-render` : ''
                ];
            }
        },
        methods: {
            clearCloseTimer () {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close () {
                this.clearCloseTimer();
                this.onClose();
                this.$parent.close(this.name);
            },
            handleEnter (el) {
                if (this.type === 'message') {
                    el.style.height = el.scrollHeight + 'px';
                }
            },
            handleLeave (el) {
                if (this.type === 'message') {
                    // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
                    if (document.getElementsByClassName('ivu-message-notice').length !== 1) {
                        el.style.height = 0;
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                    }
                }
            }
        },
        mounted () {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1000);
            }

            // check if with desc in Notice component
            if (this.prefixCls === 'ivu-notice') {
                let desc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0];
                this.withDesc = this.render ? true : (desc ? desc.innerHTML !== '' : false);
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
