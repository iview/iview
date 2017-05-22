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
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName('ivu-message')[0].parentElement);
            }, 500);
        }
    };
};

export default Notification;
