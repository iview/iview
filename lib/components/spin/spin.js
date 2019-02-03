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

var _spin = require('./spin.vue');

var _spin2 = _interopRequireDefault(_spin);

var _transferQueue = require('../../utils/transfer-queue');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleGetIndex() {
    (0, _transferQueue.transferIncrease)();
    return _transferQueue.transferIndex;
}

var tIndex = handleGetIndex();

_spin2.default.newInstance = function (properties) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var _props = properties || {};

    var Instance = new _vue2.default({
        data: (0, _assign2.default)({}, _props, {}),
        render: function render(h) {
            var vnode = '';
            if (this.render) {
                vnode = h(_spin2.default, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            } else {
                vnode = h(_spin2.default, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper',
                'style': {
                    'z-index': 2010 + tIndex
                }
            }, [vnode]);
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var spin = Instance.$children[0];

    return {
        show: function show() {
            spin.visible = true;
            tIndex = handleGetIndex();
        },
        remove: function remove(cb) {
            spin.visible = false;
            setTimeout(function () {
                spin.$parent.$destroy();
                if (document.getElementsByClassName('ivu-spin-fullscreen')[0] !== undefined) {
                    document.body.removeChild(document.getElementsByClassName('ivu-spin-fullscreen')[0]);
                }
                cb();
            }, 500);
        },

        component: spin
    };
}.bind(undefined);

exports.default = _spin2.default;