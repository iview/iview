// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Dropdown;

export interface Dropdown extends Vue {
  //是否可见
  currentVisible: boolean;
  /**
   * 收起下拉菜单
   */
  handleClose: () => void;
}