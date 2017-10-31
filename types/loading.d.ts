// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default Loading;

export interface Loading {
  /**
   * 开始从 0 显示进度条，并自动加载进度
   */
  start(): Function;
  /**
   * 结束进度条，自动补全剩余进度
   */
  finish(): Function;
  /**
   * 以错误的类型结束进度条，自动补全剩余进度
   */
  error(): Function;
  /**
   * 精确加载到指定的进度
   * @param percent 指定的进度百分比
   */
  update(percent: number): Function;
  /**
   * 全局配置
   * @param options 配置对象
   */
  config(options: LoadingConfig): Function;
  /**
   * 全局销毁
   */
  destroy(): Function;
}

export interface LoadingConfig {
  /**
   * 进度条的颜色，默认为 iView 主色 primary
   */
  color?: string;
  /**
   * 失败时的进度条颜色，默认为 iView 主色 error
   */
  failedColor?: string;
  /**
   * 进度条高度，单位 px ,默认为 2
   */
  height?: number;
}