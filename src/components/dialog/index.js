import Modal from './confirm';

let modalInstance;

function getModalInstance () {
    modalInstance = modalInstance || Modal.newInstance({
        closable: false,
        maskClosable: false,
        footerHide: true
    });

    return modalInstance;
}

function confirm (options) {
    let instance  = getModalInstance();

    options.onRemove = function () {
        modalInstance = null;
    };

    instance.show(options);
}

export default {
    info (props = {}) {
        props.icon = 'info';
        props.showCancel = false;
        return confirm(props);
    },
    success (props = {}) {
        props.icon = 'success';
        props.showCancel = false;
        return confirm(props);
    },
    warning (props = {}) {
        props.icon = 'warning';
        props.showCancel = false;
        return confirm(props);
    },
    error (props = {}) {
        props.icon = 'error';
        props.showCancel = false;
        return confirm(props);
    },
    confirm (props = {}) {
        props.icon = 'confirm';
        props.showCancel = true;
        return confirm(props);
    },
    remove () {
        if (!modalInstance) {   // at loading status, remove after Cancel
            return false;
        }

        const instance = getModalInstance();

        instance.remove();
    }
}