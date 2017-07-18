import Notification from './notification.vue';
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

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
    !isServer && document.body && document.body.appendChild(component.$el);
    const notification = Instance.$children[0];

    return {
        notice (noticeProps) {
            if (isServer) return;
            notification.add(noticeProps);
        },
        remove (name) {
            if (isServer) return;
            notification.close(name);
        },
        component: notification,
        destroy (element) {
            if (isServer) return;
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default Notification;
