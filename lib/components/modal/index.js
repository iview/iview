'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalInstance = void 0;

function getModalInstance() {
    var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    modalInstance = modalInstance || _confirm2.default.newInstance({
        closable: false,
        maskClosable: false,
        footerHide: true,
        render: render
    });

    return modalInstance;
}

function confirm(options) {
    var render = 'render' in options ? options.render : undefined;
    var instance = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };

    instance.show(options);
}

_confirm2.default.info = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'info';
    props.showCancel = false;
    return confirm(props);
};

_confirm2.default.success = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'success';
    props.showCancel = false;
    return confirm(props);
};

_confirm2.default.warning = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'warning';
    props.showCancel = false;
    return confirm(props);
};

_confirm2.default.error = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'error';
    props.showCancel = false;
    return confirm(props);
};

_confirm2.default.confirm = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'confirm';
    props.showCancel = true;
    return confirm(props);
};

_confirm2.default.remove = function () {
    if (!modalInstance) {
        return false;
    }

    var instance = getModalInstance();

    instance.remove();
};

exports.default = _confirm2.default;