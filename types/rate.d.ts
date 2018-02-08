// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Rate;

export interface Rate extends Vue {
  /**
   * star总数，默认值5
   */
  count: number;
  /**
   * 当前 star 数，可以使用 v-model 双向绑定数据，默认值0
   */
  value: number;
  /**
   * 是否允许半选，默认值false
   */
  'allow-half': boolean;
  /**
   * 是否只读，无法进行交互，默认值false
   */
  disabled: boolean;
  /**
   * 是否显示提示文字，默认值false
   */
  'show-text': boolean;
  /**
   * 评分改变时触发
   */
  $emit(eventName: 'on-change', value: number): this;
}