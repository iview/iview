import Vue from 'vue';
import Spin from './spin.vue';

Spin.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: Object.assign({}, _props, {

        }),
        render (h) {
            let vnode = '';
            if (this.render) {
                vnode = h(Spin, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            } else {
                vnode = h(Spin, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper'
            }, [vnode]);
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const spin = Instance.$children[0];

    return {
        show () {
            spin.visible = true;
        },
        remove (cb) {
            spin.visible = false;
            setTimeout(function() {
                spin.$parent.$destroy();
                document.body.removeChild(document.getElementsByClassName('ivu-spin-fullscreen')[0]);
                cb();
            }, 500);
        },
        component: spin
    };
};

export default Spin;