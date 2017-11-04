// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Upload;

export interface Upload extends Vue {
  /**
   * 上传的地址，必填
   */
  action: string;
  /**
   * 设置上传的请求头部，默认值{}
   */
  headers: object;
  /**
   * 是否支持多选文件，默认值false
   */
  multiple: boolean;
  /**
   * 上传时附带的额外参数
   */
  data: object;
  /**
   * 上传的文件字段名，默认值file
   */
  name: string;
  /**
   * 支持发送 cookie 凭证信息，默认值false
   */
  'with-credentials': boolean;
  /**
   * 是否显示已上传文件列表，默认值true
   */
  'show-upload-list': boolean;
  /**
   * 上传控件的类型，可选值为 select（点击选择），drag（支持拖拽），默认值select
   */
  'type': string;
  /**
   * 接受上传的文件类型
   */
  accept: string;
  /**
   * 支持的文件类型，与 accept 不同的是，
   * format 是识别文件的后缀名，
   * accept 为 input 标签原生的 accept 属性，
   * 会在选择文件时过滤，可以两者结合使用，
   * @default []
   */
  format: string[];
  /**
   * 文件大小限制，单位 kb
   */
  'max-size': number;
  /**
   * 默认已上传的文件列表，例如：
   * [
   *     {
   *         name: 'img1.jpg',
   *         url: 'http://www.xxx.com/img1.jpg'
   *     },
   *     {
   *         name: 'img2.jpg',
   *         url: 'http://www.xxx.com/img2.jpg'
   *     }
   * ]
   */
  'default-file-list': string[];
  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
   */
  $emit(eventName: 'before-upload'): this;
  /**
   * 文件上传时的钩子，返回字段为 event, file, fileList
   */
  $emit(eventName: 'on-progress', event: HTMLElement, file: string, fileList: string[]): this;
  /**
   * 文件上传成功时的钩子,返回字段为 response, file, fileList
   */
  $emit(eventName: 'on-success', respons: object, file: string, fileList: string[]): this;
  /**
   * 文件上传失败时的钩子，返回字段为 error, file, fileList
   */
  $emit(eventName: 'on-error', error: string, file: string, fileList: string[]): this;
  /**
   * 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
   */
  $emit(eventName: 'on-preview', file: string): this;
  /**
   * 文件列表移除文件时的钩子，返回字段为 file, fileList
   */
  $emit(eventName: 'on-remove', file: string, fileList: string[]): this;
  /**
   * 文件格式验证失败时的钩子，返回字段为 file, fileList
   */
  $emit(eventName: 'on-format-error', file: string, fileList: string[]): this;
  /**
   * 文件超出指定大小限制时的钩子，返回字段为 file, fileList
   */
  $emit(eventName: 'on-exceeded-size', file: string, fileList: string[]): this;
  /**
   * 清空已上传的文件列表
   */
  'clearFiles'(): void;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 触发上传组件的控件
     */
    '': Vue,
    /**
     * 辅助提示内容
     */
    tip: Vue
  };
}