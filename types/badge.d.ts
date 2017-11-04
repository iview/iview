// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Badge;

export interface Badge extends Vue {
  /**
   * 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏
   */
  count: number | string;
  /**
   * 展示封顶的数字值
   * @default 99
   */
  'overflow-count': number | string;
  /**
   * 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0
   * @default false
   */
  dot: boolean
  /**
   * 自定义的class名称，dot 模式下无效
   */
  'class-name': string;
}