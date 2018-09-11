import Vue from 'vue';
import Spin from './spin.vue';

import {
    transferIndex,
    transferIncrease,
    transferDecrease
} from '../../utils/transfer-queue';

function handleGetIndex(val) {
    if (val) {
        transferIncrease();
    } else {
        transferDecrease();
    }
    return transferIndex;
}

let tIndex = handleGetIndex();

Spin.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({ zIndex: NaN }, _props, {}),
        render(h) {
            let vnode = '';
            if (this.render) {
                vnode = h(
                    Spin,
                    {
                        props: {
                            fix: true,
                            fullscreen: true
                        }
                    },
                    [this.render(h)]
                );
            } else {
                vnode = h(Spin, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h(
                'div',
                {
                    class: 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper',
                    style: (() => {
                        if (isNaN(properties.zIndex)) {
                            return {};
                        }
                        return {
                            'z-index': properties.zIndex + tIndex
                        };
                    })()
                },
                [vnode]
            );
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const spin = Instance.$children[0];

    return {
        show() {
            spin.visible = true;
            tIndex = handleGetIndex(true);
        },
        remove(cb) {
            spin.visible = false;
            tIndex = handleGetIndex(false);
            setTimeout(function() {
                spin.$parent.$destroy();
                if (
                    document.getElementsByClassName(
                        'ivu-spin-fullscreen'
                    )[0] !== undefined
                ) {
                    document.body.removeChild(
                        document.getElementsByClassName(
                            'ivu-spin-fullscreen'
                        )[0]
                    );
                }
                cb();
            }, 500);
        },
        component: spin
    };
};

export default Spin;
