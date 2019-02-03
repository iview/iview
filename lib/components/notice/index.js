'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notification = require('../base/notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-notice';
var iconPrefixCls = 'ivu-icon';
var prefixKey = 'ivu_notice_key_';

var top = 24;
var defaultDuration = 4.5;
var noticeInstance = void 0;
var name = 1;

var iconTypes = {
    'info': 'ios-information-circle',
    'success': 'ios-checkmark-circle',
    'warning': 'ios-alert',
    'error': 'ios-close-circle'
};

function getNoticeInstance() {
    noticeInstance = noticeInstance || _notification2.default.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: top + 'px',
            right: 0
        }
    });

    return noticeInstance;
}

function notice(type, options) {
    var title = options.title || '';
    var desc = options.desc || '';
    var noticeKey = options.name || '' + prefixKey + name;
    var onClose = options.onClose || function () {};
    var render = options.render;

    var duration = options.duration === 0 ? 0 : options.duration || defaultDuration;

    name++;

    var instance = getNoticeInstance();

    var content = void 0;

    var withIcon = void 0;

    var with_desc = options.render && !title ? '' : desc || options.render ? ' ' + prefixCls + '-with-desc' : '';

    if (type == 'normal') {
        withIcon = false;
        content = '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-normal ' + with_desc + '">\n                <div class="' + prefixCls + '-title">' + String(title) + '</div>\n                <div class="' + prefixCls + '-desc">' + String(desc) + '</div>\n            </div>\n        ';
    } else {
        var iconType = iconTypes[type];
        var outlineIcon = with_desc === '' ? '' : '-outline';
        withIcon = true;
        content = '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-icon ' + prefixCls + '-with-' + String(type) + ' ' + with_desc + '">\n                <span class="' + prefixCls + '-icon ' + prefixCls + '-icon-' + String(type) + '">\n                    <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + String(iconType) + outlineIcon + '"></i>\n                </span>\n                <div class="' + prefixCls + '-title">' + String(title) + '</div>\n                <div class="' + prefixCls + '-desc">' + String(desc) + '</div>\n            </div>\n        ';
    }
    instance.notice({
        name: noticeKey.toString(),
        duration: duration,
        styles: {},
        transitionName: 'move-notice',
        content: content,
        withIcon: withIcon,
        render: render,
        hasTitle: !!title,
        onClose: onClose,
        closable: true,
        type: 'notice'
    });
}

exports.default = {
    open: function open(options) {
        return notice('normal', options);
    },
    info: function info(options) {
        return notice('info', options);
    },
    success: function success(options) {
        return notice('success', options);
    },
    warning: function warning(options) {
        return notice('warning', options);
    },
    error: function error(options) {
        return notice('error', options);
    },
    config: function config(options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaultDuration = options.duration;
        }
    },
    close: function close(name) {
        if (name) {
            name = name.toString();
            if (noticeInstance) {
                noticeInstance.remove(name);
            }
        } else {
            return false;
        }
    },
    destroy: function destroy() {
        var instance = getNoticeInstance();
        noticeInstance = null;
        instance.destroy('ivu-notice');
    }
};