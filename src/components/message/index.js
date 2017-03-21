import Notification from '../base/notification';

const prefixCls = 'ivu-message';
const iconPrefixCls = 'ivu-icon';
const prefixKey = 'ivu_message_key_';

let defaultDuration = 1.5;
let top;
let messageInstance;
let name = 1;

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled',
    'loading': 'load-c'
};

function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: `${top}px`
        }
    });

    return messageInstance;
}

function notice (content, duration = defaultDuration, type, onClose) {
    if (!onClose) {
        onClose = function () {

        };
    }
    const iconType = iconTypes[type];

    // if loading
    const loadCls = type === 'loading' ? ' ivu-load-loop' : '';

    let instance = getMessageInstance();

    instance.notice({
        name: `${prefixKey}${name}`,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        content: `
            <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}${loadCls}"></i>
                <span>${content}</span>
            </div>
        `,
        onClose: onClose
    });

    // 用于手动消除
    return (function () {
        let target = name++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
}

export default {
    info (content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success (content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    warning (content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    error (content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    loading (content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration) {
            defaultDuration = options.duration;
        }
    },
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy();
    }
};