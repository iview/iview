// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare class Cell extends Vue {
  /**
   * 用来标识这一项
   */
  name?: string | number;
  /**
   * 左侧标题
   */
  title?: string;
  /**
   * 标题下方的描述信息
   */
  label?: string;
  /**
   * 右侧额外内容
   */
  extra?: string;
  /**
   * 禁用该项
     * @default false
   */
  disabled?: boolean;
  /**
   * 标记该项为选中状态
     * @default false
   */
  selected?: boolean;
  /**
   * 跳转的链接，支持 vue-router 对象
   */
  to?: string | object;
  /**
   * 路由跳转时，开启 replace 将不会向 history 添加新记录
     * @default false
   */
  replace?: boolean;
  /**
   * 相当于 a 链接的 target 属性
     * @default _self
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * 同 vue-router append
   * @default false
   */
  append?: boolean;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 相当于 title
     */
    '': VNode[];
    /**
     * 标题前的 Icon
     */
    icon: VNode[];
    /**
     * 相当于 label
     */
    label: VNode[];
    /**
     * 相当于 extra
     */
    extra: VNode[];
    /**
     * 有链接时，可自定义右侧箭头
     */
    arrow: VNode[];
  }
}

export declare class CellGroup extends Vue {
  /**
   * 点击单元格时触发
   * 
   */
  $emit(eventName: 'on-click', name: string): this;
}