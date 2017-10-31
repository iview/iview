// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default Form;

export interface Form extends Vue {
  /**
   * 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败
   */
  validate: (callback?: (valid: boolean) => void) => void
  /**
   * 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息
   */
  validateField: (prop: string, callback?: (valid: boolean) => void) => void
}




