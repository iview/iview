import LoadingBar from './loading-bar.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../utils/assist';

LoadingBar.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<loading-bar${props} :percent="percent" :status="status" :show="show"></loading-bar>`;
    document.body.appendChild(div);
    const loading_bar = new Vue({
        el: div,
        data: Object.assign(_props, {
            percent: 0,
            status: 'success',
            show: false
        }),
        components: { LoadingBar }
    }).$children[0];
    return {
        update (options) {
            if ('percent' in options) {
                loading_bar.$parent.percent = options.percent;
            }
            if (options.status) {
                loading_bar.$parent.status = options.status;
            }
            if ('show' in options) {
                loading_bar.$parent.show = options.show;
            }
        },
        component: loading_bar,
        destroy () {
            loading_bar.$destroy();
            document.body.removeChild(loading_bar.$parent.$el);
        }
    };
};

export default LoadingBar;
