import Vue from 'vue';
import Modal from './modal.vue';
import Button from '../button/button.vue';
import Locale from '../../mixins/locale';

const prefixCls = 'ivu-modal-confirm';

Modal.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        mixins: [ Locale ],
        data: Object.assign({}, _props, {
            visible: false,
            width: 416,
            title: '',
            body: '',
            iconType: '',
            iconName: '',
            okText: undefined,
            cancelText: undefined,
            showCancel: false,
            loading: false,
            buttonLoading: false,
            scrollable: false,
            closable: false
        }),
        mounted () {
            let m = this.$children[0];
            m.$on('on-closeX', this.closeX);
            m.$on('on-cancel', this.cancel);
        },
        render (h) {
            let footerVNodes = [];
            if (this.showCancel) {
                footerVNodes.push(h(Button, {
                    props: {
                        type: 'text',
                        size: 'large'
                    },
                    on: {
                        click: this.cancel
                    }
                }, this.localeCancelText));
            }
            footerVNodes.push(h(Button, {
                props: {
                    type: 'primary',
                    size: 'large',
                    loading: this.buttonLoading
                },
                on: {
                    click: this.ok
                }
            }, this.localeOkText));

            // render content
            let body_render;
            if (this.render) {
                body_render = h('div', {
                    attrs: {
                        class: `${prefixCls}-body ${prefixCls}-body-render`
                    }
                }, [this.render(h)]);
            } else {
                body_render = h('div', {
                    attrs: {
                        class: `${prefixCls}-body`
                    }
                }, [
                    h('div', {
                        class: this.iconTypeCls
                    }, [
                        h('i', {
                            class: this.iconNameCls
                        })
                    ]),
                    h('div', {
                        domProps: {
                            innerHTML: this.body
                        }
                    })
                ]);
            }

            return h(Modal, {
                props: Object.assign({}, _props, {
                    width: this.width,
                    scrollable: this.scrollable,
                    closable: this.closable,
                    esc2x: this.esc2x
                }),
                domProps: {
                    value: this.visible
                },
                on: {
                    input: (status) => {
                        this.visible = status;
                    }
                }
            }, [
                h('div', {
                    attrs: {
                        class: prefixCls
                    }
                }, [
                    h('div', {
                        attrs: {
                            class: `${prefixCls}-head`
                        }
                    }, [
                        h('div', {
                            attrs: {
                                class: `${prefixCls}-head-title`
                            },
                            domProps: {
                                innerHTML: this.title
                            }
                        })
                    ]),
                    body_render,
                    h('div', {
                        attrs: {
                            class: `${prefixCls}-footer`
                        }
                    }, footerVNodes)
                ])
            ]);
        },
        computed: {
            iconTypeCls () {
                return [
                    `${prefixCls}-body-icon`,
                    `${prefixCls}-body-icon-${this.iconType}`
                ];
            },
            iconNameCls () {
                return [
                    'ivu-icon',
                    `ivu-icon-${this.iconName}`
                ];
            },
            localeOkText () {
                if (this.okText) {
                    return this.okText;
                } else {
                    return this.t('i.modal.okText');
                }
            },
            localeCancelText () {
                if (this.cancelText) {
                    return this.cancelText;
                } else {
                    return this.t('i.modal.cancelText');
                }
            }
        },
        methods: {
            cancel () {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok () {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.$children[0].visible = false;
                    this.remove();
                }
                this.onOk();
            },
            closeX () {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCloseX();
                this.remove();
            },
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk () {},
            onCancel () {},
            onCloseX () {},
            onRemove () {}
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const modal = Instance.$children[0];

    return {
        show (props) {
            let m = modal.$parent;
            m.showCancel = props.showCancel;
            m.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    m.iconName = 'information-circled';
                    break;
                case 'success':
                    m.iconName = 'checkmark-circled';
                    break;
                case 'warning':
                    m.iconName = 'android-alert';
                    break;
                case 'error':
                    m.iconName = 'close-circled';
                    break;
                case 'confirm':
                    m.iconName = 'help-circled';
                    break;
            }

            if ('width' in props) {
                m.width = props.width;
            }

            if ('closable' in props) {
                m.closable = props.closable;
            }

            if ('title' in props) {
                m.title = props.title;
            }

            if ('content' in props) {
                m.body = props.content;
            }

            if ('okText' in props) {
                m.okText = props.okText;
            }

            if ('cancelText' in props) {
                m.cancelText = props.cancelText;
            }

            if ('esc2x' in props) {
                m.esc2x = props.esc2x;
            }

            if ('onCancel' in props) {
                m.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                m.onOk = props.onOk;
            }

            if ('onCloseX' in props) {
                m.onCloseX = props.onCloseX;
            } else {
                m.onCloseX = props.onCancel;
            }

            // async for ok
            if ('loading' in props) {
                m.loading = props.loading;
            }

            if ('scrollable' in props) {
                m.scrollable = props.scrollable;
            }

            // notice when component destroy
            m.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove () {
            let m = modal.$parent;
            modal.visible = false;
            m.buttonLoading = false;
            m.remove();
        },
        component: modal
    };
};

export default Modal;