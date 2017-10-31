// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default Message;

export interface Message {
  /**
   * info
   * @param content 提示内容
   * @param duration 自动关闭的延时，单位秒，不关闭可以写 0
   * @param onClose 关闭时的回调
   */
  info(content: string, duration?: number, onClose?: Function): Function;
  /**
   * success
   * @param content 提示内容
   * @param duration 自动关闭的延时，单位秒，不关闭可以写 0
   * @param onClose 关闭时的回调
   */
  success(content: string, duration?: number, onClose?: Function): Function;
  /**
   * warning
   * @param content 提示内容
   * @param duration 自动关闭的延时，单位秒，不关闭可以写 0
   * @param onClose 关闭时的回调
   */
  warning(content: string, duration?: number, onClose?: Function): Function;
  /**
   * error
   * @param content 提示内容
   * @param duration 自动关闭的延时，单位秒，不关闭可以写 0
   * @param onClose 关闭时的回调
   */
  error(content: string, duration?: number, onClose?: Function): Function;
  /**
   * loading
   * @param content 提示内容
   * @param duration 自动关闭的延时，单位秒，不关闭可以写 0
   * @param onClose 关闭时的回调
   */
  loading(content: string, duration?: number, onClose?: Function): Function;
  //配置
  config(options: MessageConfig): Function;
  //销毁
  destroy(): Function;
}

export interface MessageConfig {
  //提示组件距离顶端的距离，单位像素	number	默认24
  top: number;
  //默认自动关闭的延时，单位秒	number	默认1.5
  duration: number;
}



