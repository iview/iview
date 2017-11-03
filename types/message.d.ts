// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default MessageInstance;

export interface MessageInstance {
  /**
   * 消息
   */
  info(config: MessageConfig): void;
  /**
   * 成功
   */
  success(config: MessageConfig): void;
  /**
   * 警告
   */
  warning(config: MessageConfig): void;
  /**
   * 错误
   */
  error(config: MessageConfig): void;
  /**
   * 对话框
   */
  confirm(config: MessageConfig): void;
  /**
   * 配置
   */
  config(options: MessageConfig): void;
  /**
   * 销毁
   */
  destroy(): void;
}

export interface MessageConfig {
  /**
   * 提示内容
   */
  content?: string;
  /**
   * 关闭时的回调
   */
  onClose?: () => void;
  /**
   * 页面是否可以滚动，默认值false
   */
  closable?: boolean;
  /**
   * 提示组件距离顶端的距离，单位像素，默认值24
   */
  top?: number;
  /**
   * 默认自动关闭的延时，单位秒，默认值1.5
   */
  duration?: number;
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 全局提示
     */
    $Message: MessageInstance;
  }
}



