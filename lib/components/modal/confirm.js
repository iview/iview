'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _modal = require('./modal.vue');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('../button/button.vue');

var _button2 = _interopRequireDefault(_button);

var _locale = require('../../mixins/locale');

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-modal-confirm';

_modal2.default.newInstance = function (properties) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var _props = properties || {};

    var Instance = new _vue2.default({
        mixins: [_locale2.default],
        data: (0, _assign2.default)({}, _props, {
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
        render: function render(h) {
            var _this = this;

            var footerVNodes = [];
            if (this.showCancel) {
                footerVNodes.push(h(_button2.default, {
                    props: {
                        type: 'text',
                        size: 'large'
                    },
                    on: {
                        click: this.cancel
                    }
                }, this.localeCancelText));
            }
            footerVNodes.push(h(_button2.default, {
                props: {
                    type: 'primary',
                    size: 'large',
                    loading: this.buttonLoading
                },
                on: {
                    click: this.ok
                }
            }, this.localeOkText));

            var body_render = void 0;
            if (this.render) {
                body_render = h('div', {
                    attrs: {
                        class: prefixCls + '-body ' + prefixCls + '-body-render'
                    }
                }, [this.render(h)]);
            } else {
                body_render = h('div', {
                    attrs: {
                        class: prefixCls + '-body'
                    }
                }, [h('div', {
                    domProps: {
                        innerHTML: this.body
                    }
                })]);
            }

            var head_render = void 0;
            if (this.title) {
                head_render = h('div', {
                    attrs: {
                        class: prefixCls + '-head'
                    }
                }, [h('div', {
                    class: this.iconTypeCls
                }, [h('i', {
                    class: this.iconNameCls
                })]), h('div', {
                    attrs: {
                        class: prefixCls + '-head-title'
                    },
                    domProps: {
                        innerHTML: this.title
                    }
                })]);
            }

            return h(_modal2.default, {
                props: (0, _assign2.default)({}, _props, {
                    width: this.width,
                    scrollable: this.scrollable,
                    closable: this.closable
                }),
                domProps: {
                    value: this.visible
                },
                on: {
                    input: function input(status) {
                        (0, _newArrowCheck3.default)(this, _this);

                        this.visible = status;
                    }.bind(this)
                }
            }, [h('div', {
                attrs: {
                    class: prefixCls
                }
            }, [head_render, body_render, h('div', {
                attrs: {
                    class: prefixCls + '-footer'
                }
            }, footerVNodes)])]);
        },

        computed: {
            iconTypeCls: function iconTypeCls() {
                return [prefixCls + '-head-icon', prefixCls + '-head-icon-' + String(this.iconType)];
            },
            iconNameCls: function iconNameCls() {
                return ['ivu-icon', 'ivu-icon-' + String(this.iconName)];
            },
            localeOkText: function localeOkText() {
                if (this.okText) {
                    return this.okText;
                } else {
                    return this.t('i.modal.okText');
                }
            },
            localeCancelText: function localeCancelText() {
                if (this.cancelText) {
                    return this.cancelText;
                } else {
                    return this.t('i.modal.cancelText');
                }
            }
        },
        methods: {
            cancel: function cancel() {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok: function ok() {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.$children[0].visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove: function remove() {
                var _this2 = this;

                setTimeout(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    this.destroy();
                }.bind(this), 300);
            },
            destroy: function destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk: function onOk() {},
            onCancel: function onCancel() {},
            onRemove: function onRemove() {}
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var modal = Instance.$children[0];

    return {
        show: function show(props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    modal.$parent.iconName = 'ios-information-circle';
                    break;
                case 'success':
                    modal.$parent.iconName = 'ios-checkmark-circle';
                    break;
                case 'warning':
                    modal.$parent.iconName = 'ios-alert';
                    break;
                case 'error':
                    modal.$parent.iconName = 'ios-close-circle';
                    break;
                case 'confirm':
                    modal.$parent.iconName = 'ios-help-circle';
                    break;
            }

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            if ('scrollable' in props) {
                modal.$parent.scrollable = props.scrollable;
            }

            modal.$parent.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove: function remove() {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },

        component: modal
    };
}.bind(undefined);

exports.default = _modal2.default;