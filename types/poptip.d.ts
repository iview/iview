// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Poptip;

export interface Poptip extends Vue {
  /**
   * 触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,
   * 在 confirm 模式下，只有 click 有效
   * @default click
   */
  trigger: string;
  /**
   * 显示的标题
   */
  title: string | number;
  /**
   * 显示的正文内容，只在非 confirm 模式下有效\
   * @default 空
   */
  content: string | number;
  /**
   * 提示框出现的位置，可选值为
   * top，top-start，top-end，bottom，bottom-start，bottom-end，
   * left，left-start，left-end，right，right-start，right-end	
   * @default top
   */
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px
   */
  width: string | number;
  /**
   * 是否开启对话框模式
   * @default false
   */
  confirm: boolean;
  /**
   * 确定按钮的文字，只在 confirm 模式下有效
   * @default 确定
   */
  'ok-text': string;
  /**
   * 取消按钮的文字，只在 confirm 模式下有效
   * @default 取消
   */
  'cancel-text': string;
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer: boolean;
  /**
   * 在提示框显示时触发
   */
  $emit(eventName: 'on-popper-show'): this;
  /**
   * 在提示框消失时触发
   */
  $emit(eventName: 'on-popper-hide'): this;
  /**
   * 点击确定的回调，只在 confirm 模式下有效
   */
  $emit(eventName: 'on-ok'): this;
  /**
   * 点击取消的回调，只在 confirm 模式下有效
   */
  $emit(eventName: 'on-cancel'): this;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 主体内容
     */
    '': Vue,
    /**
     * 提示框标题，定义此 slot 时，会覆盖 props title
     */
    title: Vue,
    /**
     * 提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效
     */
    content: Vue
  }
}