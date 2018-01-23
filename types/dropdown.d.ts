// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Dropdown;

export interface Dropdown extends Vue {
  /**
   * 触发方式，可选值为 hover（悬停）click（点击）custom（自定义），使用 custom 时，需配合 visible 一起使用
   * @default hover
   */
  trigger: string;
  /**
   * 手动控制下拉框的显示，在 trigger = 'custom' 时使用
   * @default false
   */
  visible: boolean;
  /**
   * 下拉菜单出现的位置，可选值为
   * top，top-start，top-end，bottom，bottom-start，bottom-end，
   * left，left-start，left-end，right，right-start，right-end
   * @default bottom
   */
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer: boolean;
  /**
   * 点击菜单项时触发
   * 
   */
  $emit(eventName: 'on-click', value: string): this;
  /**
   * 菜单显示状态改变时调用
   */
  $emit(eventName: 'on-visible-change', value: boolean): this;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 自定义显示打开时的内容
     */
    open: Vue,
    /**
     * 自定义显示关闭时的内容
     */
    close: Vue
  };
}

export interface DropdownItem extends Vue {
  /**
   * 用来标识这一项
   */
  name: string;
  /**
   * 禁用该项
   * @default false
   */
  disabled: boolean;
  /**
   * 显示分割线
   * @default false
   */
  divided: boolean;
  /**
   * 标记该项为选中状态
   * @default false
   */
  selected: boolean;
}