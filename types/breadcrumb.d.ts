// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Breadcrumb;

export interface Breadcrumb extends Vue {
  /**
   * 自定义分隔符
   * @default /
   */
  separator: string;
}

export interface BreadcrumbItem extends Vue {
  /**
   * 链接，不传则没有链接
   */
  href: string;
  /**
   * 路由跳转时，开启 replace 将不会向 history 添加新记录
   * @default false
   */
  replace: boolean;
}