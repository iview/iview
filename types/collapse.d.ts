// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Collapse;

export interface Collapse extends Vue {
  /**
   * 当前激活的面板的 name，可以使用 v-model 双向绑定
   */
  value: string[] | string;
  /**
   * 是否开启手风琴模式，开启后每次至多展开一个面板
   * @default false
   */
  accordion: boolean;
  /**
   * 切换面板时触发，返回当前已展开的面板的 key，格式为数组
   */
  $emit(eventName: 'on-change', []): this;
}

export interface CollapsePanel extends Vue {
  /**
   * 当前面板的 name，与 Collapse的value对应，不填为索引值
   * @default index的值
   */
  name: string;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 面板头内容
     */
    '': Vue,
    /**
     * 描素内容
     */
    content: Vue
  };
}