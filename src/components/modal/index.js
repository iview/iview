import Modal from './confirm';

let modalInstance;

function getModalInstance (options) {
    const render = ('render' in options) ? options.render : undefined;
    const title= ('title' in options)?options.title:undefined;
    modalInstance = modalInstance || Modal.newInstance({
        closable: false,
        maskClosable: false,
        title:title,
        footerHide: true,
        render: render
    });

    return modalInstance;
}

function confirm (options) {
    let instance  = getModalInstance(options);

    options.onRemove = function () {
        modalInstance = null;
    };
    options.title=undefined;
    instance.show(options);
}

Modal.info = function (props = {}) {
    props.icon = 'info';
    props.showCancel = false;
    return confirm(props);
};

Modal.success = function (props = {}) {
    props.icon = 'success';
    props.showCancel = false;
    return confirm(props);
};

Modal.warning = function (props = {}) {
    props.icon = 'warning';
    props.showCancel = false;
    return confirm(props);
};

Modal.error = function (props = {}) {
    props.icon = 'error';
    props.showCancel = false;
    return confirm(props);
};

Modal.confirm = function (props = {}) {
    props.icon = 'confirm';
    props.showCancel = true;
    return confirm(props);
};

Modal.remove = function () {
    if (!modalInstance) {   // at loading status, remove after Cancel
        return false;
    }

    const instance = getModalInstance();

    instance.remove();
};

export default Modal;
