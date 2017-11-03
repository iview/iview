// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Slider;

export interface Slider extends Vue {
  /**
   * 滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，
   * 在双滑块模式下，数据格式为长度是2的数组，且每项都为数字,
   * 默认值0
   */
  value: number | number[];
  /**
   * 最小值,默认值0
   */
  min: number;
  /**
   * 最大值,默认值100
   */
  max: number;
  /**
   * 步长，取值建议能被（max - min）整除,默认值1
   */
  step: number;
  /**
   * 是否禁用滑块,默认值false
   */
  disabled: boolean;
  /**
   * 是否开启双滑块模式,默认值false
   */
  range: boolean;
  /**
   * 是否显示数字输入框，仅在单滑块模式下有效,默认值false
   */
  'show-input': boolean;
  /**
   * 是否显示间断点，建议在 step 不密集时使用,默认值false
   */
  'show-stops': boolean;
  /**
   * 提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见）,默认值false
   */
  'show-tip': boolean;
  /**
   * 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip
   */
  'tip-format': (value: number | number[]) => void;
  /**
   * 在松开滑动时触发，返回当前的选值，在滑动过程中不会触发
   */
  $emit(eventName: 'on-change', value: number | number[]): this;
  /**
   * 滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发
   */
  $emit(eventName: 'on-input', value: number | number[]): this;
}