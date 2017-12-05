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
                type: Function
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
            },
            render: {
                type: Function
            }
        },
        render (h) {
            return h(
                'transition',
                {
                    props: {
                        name: this.transitionName
                    },
                    on: {
                        enter: this.handleEnter,
                        leave: this.handleLeave
                    }
                },[
                    h(
                        'div',
                        {
                            style: this.styles,
                            class: this.classes
                        },
                        [this.type === 'notice' ? h(
                            'div',
                            {},
                            [
                                h(
                                    'div',
                                    {
                                        class: `${this.baseClass}-content`,
                                        ref: 'content'
                                    },
                                    [
                                        this.content(h),
                                        this.render(h)
                                    ]
                                ),
                                [this.closable ? h(
                                    'a',
                                    {
                                        class: `${this.baseClass}-close`,
                                        on: {
                                            click: this.close
                                        }
                                    },
                                    h(
                                        'i',
                                        {
                                            class: 'ivu-icon ivu-icon-ios-close-empty'
                                        }
                                    )
                                ) : h()]
                            ]
                        ) : h(
                            'div',
                            {},
                            [h(
                                'div',
                                {
                                    class: `${this.baseClass}-content`,
                                    ref: 'content'
                                },
                                [
                                    h(
                                        'div',
                                        {
                                            class: `${this.baseClass}-content-text`,
                                            ref: 'content'
                                        },
                                        [
                                            this.content(h),
                                            this.render(h)
                                        ]
                                    ),
                                    [this.closable ? h(
                                        'a',
                                        {
                                            class: `${this.baseClass}-close`,
                                            on: {
                                                click: this.close
                                            }
                                        },
                                        h(
                                            'i',
                                            {
                                                class: 'ivu-icon ivu-icon-ios-close-empty'
                                            }
                                        )
                                    ) : h()]
                                ]
                            )]
                        )]
                    )
                ]
            );
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
                this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== '';
            }
            
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
