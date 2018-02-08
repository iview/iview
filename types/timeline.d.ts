// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Timeline;

export interface Timeline extends Vue {
  /**
   * 指定是否最后一个节点为幽灵节点
   * @default false
   */
  pending: boolean;
}

export interface TimelineItem extends Vue {
  /**
   * 圆圈颜色，可选值为blue、red、green，或自定义色值
   * @default blue
   */
  color: string;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 基本内容
     */
    '': Vue,
    /**
     * 自定义时间轴点内容
     */
    dot: Vue
  };
}