<template>
    <div :class="classes" :style="style" :transition="transitionName">
        <div :class="[`${baseClass}-content`]" v-el:content>{{{ content }}}</div>
        <a :class="[`${baseClass}-close`]" @click="close" v-if="closable">
            <i class="ivu-icon ivu-icon-ios-close-empty"></i>
        </a>
    </div>
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
            content: {
                type: String,
                default: ''
            },
            style: {
                type: Object,
                default: function() {
                    return {
                        right: '50%'
                    }
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            key: {
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
        computed: {
            baseClass () {
                return `${this.prefixCls}-notice`;
            },
            classes () {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-closable`]: this.closable
                    }
                ]
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
                this.$parent.close(this.key);
            }
        },
        compiled () {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1000)
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    }
</script>