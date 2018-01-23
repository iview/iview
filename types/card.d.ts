// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Card;

export interface Card extends Vue {
  /**
   * 是否显示边框，建议在灰色背景下使用，默认值true
   */
  'bordered': boolean;
  /**
   * 禁用鼠标悬停显示阴影，默认值false
   */
  'dis-hover': boolean;
  /**
   * 卡片阴影，建议在灰色背景下使用，默认值false
   */
  'shadow': boolean;
  /**
   * 卡片内部间距，单位 px，默认值16
   */
  'padding': number;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 自定义卡片标题，如果是简单文字，可以使用<p>标签包裹
     */
    title: typeof Vue
    /**
     * 额外显示的内容，默认位置在右上角
     */
    extra: typeof Vue;
    /**
     * 卡片主体内容
     */
    '': typeof Vue;
  };
}