// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Button;

export interface Button extends Vue {
  /**
   * 按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
   */
  'type': string;
  /**
   * 按钮大小，可选值为large、small、default或者不设置
   */
  size: string;
  /**
   * 按钮形状，可选值为circle或者不设置
   */
  shape: string;
  /**
   * 开启后，按钮的长度为 100%
   * @default false
   */
  long: boolean;
  /**
   * 设置button原生的type，可选值为button、submit、reset
   * @default button
   */
  'html-type': string;
  /**
   * 设置按钮为禁用状态,false
   */
  disabled:boolean;
  /**
   * 设置按钮为加载中状态
   * @default false
   */
  loading: boolean;
  /**
   * 设置按钮的图标类型
   */
  icon: string;
}

export interface ButtonGroup extends Vue {
  /**
   * 按钮组合大小，可选值为large、small、default或者不设置
   */
  size: string;
  /**
   * 按钮组合形状，可选值为circle或者不设置
   */
  shape: string;
  /**
   * 是否纵向排列按钮组
   * @default false
   */
  vertical: boolean;
}