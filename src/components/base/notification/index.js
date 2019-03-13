import Notification from './notification.vue';
import Vue from 'vue';

Notification.newInstance = (propsData = {}) => {
    const Constructor = Vue.extend(Notification);
    const Instance = new Constructor({ propsData });

    const notification = Instance.$mount();
    document.body.appendChild(notification.$el);

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
