import Notification from './notification.vue';
import Vue from 'vue';

Notification.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(Notification, {
                props: _props
            });
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
        destroy (element) {
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default Notification;
