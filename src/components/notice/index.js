import Notification from '../base/notification';
import htmlTem from '../base/notification/htmlTem.vue';

const prefixCls = 'ivu-notice';
const iconPrefixCls = 'ivu-icon';
const prefixKey = 'ivu_notice_key_';

let top = 24;
let defaultDuration = 4.5;
let noticeInstance;
let name = 1;

const iconTypes = {
    'info': 'information-circled',
    'success': 'checkmark-circled',
    'warning': 'android-alert',
    'error': 'close-circled'
};

function getNoticeInstance () {
    noticeInstance = noticeInstance || Notification.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: `${top}px`,
            right: 0
        }
    });

    return noticeInstance;
}

function notice (type, options) {
    const title = options.title || '';
    const desc = options.desc || '';
    const noticeKey = options.name || `${prefixKey}${name}`;
    const onClose = options.onClose || function () {};
    // todo const btn = options.btn || null;
    const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration;

    name++;

    let instance = getNoticeInstance();

    let content;

    let render = options.render;

    const with_desc = desc === '' ? (render ? ` ${prefixCls}-with-desc` : '') : ` ${prefixCls}-with-desc`;

    if (type == 'normal') {
        content = h => {
            return h(
                'div',
                {
                    class: [
                        `${prefixCls}-custom-content`,
                        `${prefixCls}-with-normal${with_desc}`
                    ]
                },
                [
                    h('div',{
                        class: `${prefixCls}-title`
                    }, title),
                    h('div', {
                        class: `${prefixCls}-desc`
                    }, [
                        render ? render(h) : h(htmlTem, {
                            props: {
                                desc: desc,
                                type: 'notice'
                            }
                        })
                    ])
                ]
            );
        };
    } else {
        const iconType = iconTypes[type];
        content = h => {
            return h(
                'div',
                {
                    class: [
                        `${prefixCls}-custom-content`,
                        `${prefixCls}-with-icon`,
                        `${prefixCls}-with-${type}${with_desc}`
                    ]
                },
                [
                    h('span',{
                        class: [
                            `${prefixCls}-icon`,
                            `${prefixCls}-icon-${type}`
                        ]
                    },[
                        h('i',{
                            class: [
                                `${iconPrefixCls}`,
                                `${iconPrefixCls}-${iconType}`
                            ]
                        })
                    ]),
                    h('div',{
                        class: `${prefixCls}-title`
                    }, title),
                    h('div', {
                        class: `${prefixCls}-desc`
                    }, [
                        render ? render(h) : h(htmlTem, {
                            props: {
                                desc: desc,
                                type: 'notice'
                            }
                        })
                    ])
                ]
            );
        };
    }

    instance.notice({
        name: noticeKey.toString(),
        duration: duration,
        styles: {},
        transitionName: 'move-notice',
        content: content,
        onClose: onClose,
        closable: true,
        type: 'notice'
    });
}

export default {
    open (options) {
        return notice('normal', options);
    },
    info (options) {
        return notice('info', options);
    },
    success (options) {
        return notice('success', options);
    },
    warning (options) {
        return notice('warning', options);
    },
    error (options) {
        return notice('error', options);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaultDuration = options.duration;
        }
    },
    close (name) {
        if (name) {
            name = name.toString();
            if (noticeInstance) {
                noticeInstance.remove(name);
            }
        } else {
            return false;
        }
    },
    destroy () {
        let instance = getNoticeInstance();
        noticeInstance = null;
        instance.destroy('ivu-notice');
    }
};