<template>
    <div :class="classes" :style="style" transition="move-up">
        <div :class="[`${baseClass}-content`]" v-el:content>{{{ content }}}</div>
        <span v-if="closable">
            <a :class="[`${baseClass}-close`]" @click="close">
                <span :class="[`${baseClass}-close-x`]"></span>
            </a>
        </span>
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