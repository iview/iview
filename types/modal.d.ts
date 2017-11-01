// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Modal;

export interface Modal {
  info(config: ModalConfig): Function;
  success(config: ModalConfig): Function;
  warning(config: ModalConfig): Function;
  error(config: ModalConfig): Function;
  confirm(config: ModalConfig): Function;
  remove(): Function;
}

export interface ModalProps {
  //对话框是否显示。需要使用.sync双向绑定，否则改变状态时并不能改变使用者的数据,默认false
  visible: boolean;
  //对话框标题，如果使用 slot 自定义了页头，则 title 无效
  title: string;
  //是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭,默认值true
  closable: boolean;
  //是否允许点击遮罩层关闭,默认值true
  'mask-closable': boolean;
  //点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框,默认值false
  loading: boolean;
  //页面是否可以滚动,默认值false
  scrollable: boolean;
  //确定按钮文字,默认值确定
  'ok-text': string;
  //取消按钮文字,默认值取消
  'cancel-text': string;
  //对话框宽度，单位 px。对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto,默认值	520
  width: number | string;
  //设置浮层样式，调整浮层位置等，该属性设置的是.ivu - modal的样式
  style: Object;
  //设置对话框容器.ivu - modal - wrap的类名，可辅助实现垂直居中等自定义效果
  'class-name': string;
  //自定义显示动画，第一项是模态框，第二项是背景,默认值['ease', 'fade']
  'transition-names': Array<string>;
}

export interface ModalConfig {
  //标题	string | Element string	-
  title?: string;
  //内容	string | Element string	-
  content?: number | string;
  //宽度，单位 px	number | string	416
  width?: string;
  //确定按钮的文字	string	确定
  okText?: string;
  //取消按钮的文字，只在Modal.confirm()下有效	string	取消
  cancelText?: string;
  //点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框	Boolean	false
  loading?: boolean;
  //页面是否可以滚动	Boolean	false
  scrollable?: boolean;
  //点击确定的回调	Function	-
  onOk?: Function;
  //点击取消的回调，只在Modal.confirm()下有效	Function	-
  onCancel?: Function;
}