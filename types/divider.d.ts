// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from 'vue';

export declare interface Divider extends Vue {
  /**
   * 水平还是垂直类型，可选值为 horizontal 或 vertical
   * @default horizontal
   */
  type?: 'horizontal' | 'vertical';
  /**
   * 分割线标题的位置，可选值为 left、right 或 center
   * @default center
   */
  orientation?: 'left' | 'right' | 'center';
  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 尺寸，可选值为 small 或 default
   * @default default
   */
  size?: string;
}