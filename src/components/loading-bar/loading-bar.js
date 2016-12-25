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
    div.innerHTML = `<loading-bar${props}></loading-bar>`;
    document.body.appendChild(div);

    const loading_bar = new Vue({
        el: div,
        data: _props,
        components: { LoadingBar }
    }).$children[0];

    return {
        update (options) {
            if ('percent' in options) {
                loading_bar.percent = options.percent;
            }
            if (options.status) {
                loading_bar.status = options.status;
            }
            if ('show' in options) {
                loading_bar.show = options.show;
            }
        },
        component: loading_bar,
        destroy () {
            document.body.removeChild(div);
        }
    };
};

export default LoadingBar;
