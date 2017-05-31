<template>
    <transition :name="transitionName">
        <div :class="classes" :style="styles">
            <template v-if="type === 'notice'">
                <div :class="[baseClass + '-content']" ref="content" v-html="content"></div>
                <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                    <i class="ivu-icon ivu-icon-ios-close-empty"></i>
                </a>
            </template>
            <template v-if="type === 'message'">
                <div :class="[baseClass + '-content']" ref="content">
                    <div :class="[baseClass + '-content-text']" v-html="content"></div>
                    <a :class="[baseClass + '-close']" @click="close" v-if="closable">
                        <i class="ivu-icon ivu-icon-ios-close-empty"></i>
                    </a>
                </div>
            </template>
        </div>
    </transition>
</template>
<script>
    export default {
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
            classes () {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-closable`]: this.closable,
                        [`${this.baseClass}-with-desc`]: this.withDesc
                    }
                ];
            },
            contentClasses () {
                return `${this.baseClass}-content`;
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
                this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== '';
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
