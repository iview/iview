'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notification = require('../base/notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-message';
var iconPrefixCls = 'ivu-icon';
var prefixKey = 'ivu_message_key_';

var defaults = {
    top: 24,
    duration: 1.5
};

var messageInstance = void 0;
var name = 1;

var iconTypes = {
    'info': 'ios-information-circle',
    'success': 'ios-checkmark-circle',
    'warning': 'ios-alert',
    'error': 'ios-close-circle',
    'loading': 'ios-loading'
};

function getMessageInstance() {
    messageInstance = messageInstance || _notification2.default.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: String(defaults.top) + 'px'
        }
    });

    return messageInstance;
}

function notice() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.duration;
    var type = arguments[2];
    var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var closable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var render = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

    var iconType = iconTypes[type];

    var loadCls = type === 'loading' ? ' ivu-load-loop' : '';

    var instance = getMessageInstance();

    instance.notice({
        name: '' + prefixKey + name,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        content: '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-' + String(type) + '">\n                <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + String(iconType) + ' ' + loadCls + '"></i>\n                <span>' + String(content) + '</span>\n            </div>\n        ',
        render: render,
        onClose: onClose,
        closable: closable,
        type: 'message'
    });

    return function () {
        var target = name++;

        return function () {
            instance.remove('' + prefixKey + target);
        };
    }();
}

exports.default = {
    name: 'Message',

    info: function info(options) {
        return this.message('info', options);
    },
    success: function success(options) {
        return this.message('success', options);
    },
    warning: function warning(options) {
        return this.message('warning', options);
    },
    error: function error(options) {
        return this.message('error', options);
    },
    loading: function loading(options) {
        return this.message('loading', options);
    },
    message: function message(type, options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, type, options.onClose, options.closable, options.render);
    },
    config: function config(options) {
        if (options.top || options.top === 0) {
            defaults.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaults.duration = options.duration;
        }
    },
    destroy: function destroy() {
        var instance = getMessageInstance();
        messageInstance = null;
        instance.destroy('ivu-message');
    }
};