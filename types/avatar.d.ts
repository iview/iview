// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Avatar;

export interface Avatar extends Vue {
  /**
   * 指定头像的形状，可选值为 circle、square
   * @default circle
   */
  shape: string
  /**
   * 设置头像的大小，可选值为 large、small、default
   * @default default
   */
  size: string;
  /**
   * 图片类头像的资源地址
   */
  src: string;
  /**
   * 设置头像的图标类型，参考 Icon 组件
   */
  icon: string;
}