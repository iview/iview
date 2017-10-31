// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default Menu;

export interface Menu extends Vue {
  /**
   * 更新当前展开的子目录
   */
  updateOpenKeys: (name: number | string) => void;
  /**
   * 手动更新展开的子目录，注意要在 $nextTick 里调用
   */
  updateOpened: () => void;
  /**
   * 手动更新当前选择项，注意要在 $nextTick 里调用
   */
  updateActiveName: () => void;
}