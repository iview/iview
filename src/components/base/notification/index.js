import Notification from './notification.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../../utils/assist';

Notification.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<notification${props}></notification>`;
    document.body.appendChild(div);

    const notification = new Vue({
        el: div,
        data: _props,
        components: { Notification }
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
