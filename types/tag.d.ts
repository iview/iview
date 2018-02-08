// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Tag;

export interface Tag extends Vue {
  /**
   * 标签是否可以关闭
   * @default false
   */
  closable: boolean
  /**
   * 标签是否可以选择
   * @default false
   */
  checkable: boolean;
  /**
   * 标签的选中状态
   * @default true
   */
  checked: boolean;
  /**
   * 标签的样式类型，可选值为border、dot或不填
   */
  type: '' | 'border' | 'dot';
  /**
   * 标签颜色，可选值为blue、green、red、yellow、default
   */
  color: 'blue' | 'green' | 'red' | 'yellow' | 'default';
  /**
   * 当前标签的名称，使用 v-for，并支持关闭时，会比较有用
   */
  name: string | number;
  /**
   * 关闭时触发
   */
  $emit(eventName: 'on-close', event, name): this;
}