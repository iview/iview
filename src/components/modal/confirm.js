import Vue from 'vue';
import Modal from './modal.vue';
import Icon from '../icon/icon.vue';
import iButton from '../button/button.vue';
import { camelcaseToHyphen } from '../../utils/assist';
import { t } from '../../locale';

const prefixCls = 'ivu-modal-confirm';

Modal.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <Modal${props} :visible.sync="visible" :width="width">
            <div class="${prefixCls}">
                <div class="${prefixCls}-head">
                    <div class="${prefixCls}-head-title">{{{ title }}}</div>
                </div>
                <div class="${prefixCls}-body">
                    <div :class="iconTypeCls"><i :class="iconNameCls"></i></div>
                    {{{ body }}}
                </div>
                <div class="${prefixCls}-footer">
                    <i-button type="text" size="large" v-if="showCancel" @click="cancel">{{ cancelText }}</i-button>
                    <i-button type="primary" size="large" :loading="buttonLoading" @click="ok">{{ okText }}</i-button>
                </div>
            </div>
        </Modal>
    `;
    document.body.appendChild(div);

    const modal = new Vue({
        el: div,
        components: { Modal, iButton, Icon },
        data: Object.assign(_props, {
            visible: false,
            width: 416,
            title: '',
            body: '',
            iconType: '',
            iconName: '',
            okText: t('i.modal.okText'),
            cancelText: t('i.modal.cancelText'),
            showCancel: false,
            loading: false,
            buttonLoading: false
        }),
        computed: {
            iconTypeCls () {
                return [
                    `${prefixCls}-body-icon`,
                    `${prefixCls}-body-icon-${this.iconType}`
                ];
            },
            iconNameCls () {
                return [
                    'ivu-icon',
                    `ivu-icon-${this.iconName}`
                ];
            }
        },
        methods: {
            cancel () {
                this.visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok () {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(div);
                this.onRemove();
            },
            onOk () {},
            onCancel () {},
            onRemove () {}
        }
    }).$children[0];

    return {
        show (props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    modal.$parent.iconName = 'information-circled';
                    break;
                case 'success':
                    modal.$parent.iconName = 'checkmark-circled';
                    break;
                case 'warning':
                    modal.$parent.iconName = 'android-alert';
                    break;
                case 'error':
                    modal.$parent.iconName = 'close-circled';
                    break;
                case 'confirm':
                    modal.$parent.iconName = 'help-circled';
                    break;
            }

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            // async for ok
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            // notice when component destroy
            modal.$parent.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove () {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },
        component: modal
    };
};

export default Modal;