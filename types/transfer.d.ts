// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Transfer;

export interface Transfer extends Vue {
  /**
   * 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。
   */
  data: object[];
  /**
   * 显示在右侧框数据的key集合
   */
  targetKeys: string[];
  /**
   * 每行数据渲染函数，该函数的入参为 data 中的项	
   * value: 默认显示label，没有时显示key
   */
  'render-format': (value: string) => void;
  /**
   * 设置哪些项应该被选中
   */
  'selected-keys': string[];
  /**
   * 两个穿梭框的自定义样式，默认值{}
   */
  'list-style': object;
  /**
   * 标题集合，顺序从左至右	Array	
   * value: ['源列表', '目的列表']
   */
  titles: (value: string[][]) => void;
  /**
   * 操作文案集合，顺序从上至下
   */
  operations: object[];
  /**
   * 是否显示搜索框，默认值false
   */
  filterable: object[];
  /**
   * 搜索框的占位，默认值请输入搜索内容
   */
  'filter-placeholder': string;
  /**
   * 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词
   * 默认搜索label
   */
  'filter-method': (value: string) => void;
  /**
   * 当列表为空时显示的内容
   * @default 列表为空
   */
  'not-found-text': string;
  /**
   * 选项在两栏之间转移时的回调函数
   */
  $emit(eventName: 'on-change', targetKeys: string[], direction: string, moveKeys: string[]): this;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 自定义底部内容
     */
    '': Vue,
  };
}