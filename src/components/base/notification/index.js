import Notification from './notification.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../../utils/assist';

Notification.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Notification, {
                props: _props
            })
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notification = Instance.$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy () {
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName('ivu-message')[0].parentElement);
            }, 500);
        }
    };
};

export default Notification;
