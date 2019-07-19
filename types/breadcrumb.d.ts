// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare class Breadcrumb extends Vue {
  /**
   * 自定义分隔符
   * @default /
   */
  separator?: string;
}

export declare class BreadcrumbItem extends Vue {
  /**
   * 链接，不传则没有链接
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
}