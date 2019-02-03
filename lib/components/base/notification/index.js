'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _notification = require('./notification.vue');

var _notification2 = _interopRequireDefault(_notification);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_notification2.default.newInstance = function (properties) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var _props = properties || {};

    var Instance = new _vue2.default({
        render: function render(h) {
            return h(_notification2.default, {
                props: _props
            });
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var notification = Instance.$children[0];

    return {
        notice: function notice(noticeProps) {
            notification.add(noticeProps);
        },
        remove: function remove(name) {
            notification.close(name);
        },

        component: notification,
        destroy: function destroy(element) {
            notification.closeAll();
            setTimeout(function () {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
}.bind(undefined);

exports.default = _notification2.default;