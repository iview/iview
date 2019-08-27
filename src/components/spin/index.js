import Spin from './spin.js';

let spinInstance;

function getSpinInstance (render = undefined) {
    spinInstance = spinInstance || Spin.newInstance({
        render: render
    });

    return spinInstance;
}

function loading (options) {
    const render = ('render' in options) ? options.render : undefined;
    let instance  = getSpinInstance(render);

    instance.show(options);
}

Spin.show = function (props = {}) {
    return loading(props);
};
Spin.hide = function () {
    if (!spinInstance) return false;

    const instance = getSpinInstance();

    instance.remove(() => {
        spinInstance = null;
    });
};

export default Spin;