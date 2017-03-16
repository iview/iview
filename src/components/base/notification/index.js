import Notification from './notification.vue';
import Vue from 'vue';

Notification.newInstance = properties => {
    const _props = properties || {};
    const div = document.createElement('div');
    document.body.appendChild(div);

    const notification = new Vue({
        el: div,
        components: { Notification },
        render (h) {
            return h('Notification', { props: Object.assign({}, _props) })
        }
    }).$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy () {
            document.body.removeChild(div);
        }
    };
};

export default Notification;
