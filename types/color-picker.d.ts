// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default ColorPicker;

export interface ColorPicker extends Vue {
  /**
   * 绑定的值，可使用 v-model 双向绑定
   */
  value: string;
  /**
   * 是否支持透明度选择
   */
  alpha: boolean;
  /**
   * 是否支持透明度选择
   */
  recommend: false;
  /**
   * 自定义颜色预设
   */
  colors: string[];
  /**
   * 颜色的格式，可选值为 hsl、hsv、hex、rgb
   * @default 开启 alpha 时为 rgb，其它为 hex
   */
  format: 'hsl' | 'hsv' | 'hex' | 'rgb';
  /**
   * 尺寸，可选值为large、small、default或者不设置
   */
  size: '' | 'large' | 'small' | 'default';
  /**
   * 当绑定值变化时触发
   * @default 当前值
   */
  $emit(eventName: 'on-change', value: string): this;
  /**
   * 面板中当前显示的颜色发生改变时触发
   * @default 当前显示的颜色值
   */
  $emit(eventName: 'on-active-change', value: string): this;
}