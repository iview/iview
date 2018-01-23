// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Progress;

export interface Progress extends Vue {
  /**
   * 百分比
   * @default 0
   */
  percent: number;
  /**
   * 状态，可选值为normal、active、wrong、success
   * @default normal
   */
  status: string;
  /**
   * 进度条的线宽，单位 px，默认值10
   */
  'stroke-width': number;
  /**
   * 隐藏数值或状态图标，默认值false
   */
  'hide-info': boolean;
  /**
   * 是否在垂直方向显示，默认值false
   */
  vertical: boolean;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 自定义显示状态内容
     */
    '': Vue
  };
}
