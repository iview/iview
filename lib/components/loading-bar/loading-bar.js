'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _loadingBar = require('./loading-bar.vue');

var _loadingBar2 = _interopRequireDefault(_loadingBar);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_loadingBar2.default.newInstance = function (properties) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var _props = properties || {};

    var Instance = new _vue2.default({
        data: _props,
        render: function render(h) {
            return h(_loadingBar2.default, {
                props: _props
            });
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var loading_bar = Instance.$children[0];

    return {
        update: function update(options) {
            if ('percent' in options) {
                loading_bar.percent = options.percent;
            }
            if (options.status) {
                loading_bar.status = options.status;
            }
            if ('show' in options) {
                loading_bar.show = options.show;
            }
        },

        component: loading_bar,
        destroy: function destroy() {
            document.body.removeChild(document.getElementsByClassName('ivu-loading-bar')[0]);
        }
    };
}.bind(undefined);

exports.default = _loadingBar2.default;