import Vue from "vue";
import IView from "./";

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 全局提示
     */
    $Message: IView.IMessage;
    /**
     * 对话框
     */
    $Modal: IView.IModal;
    /**
     * 加载进度条
     */
    $Loading: IView.ILoading;
    /**
     * 通知提醒
     */
    $Notice: IView.INotice;
  }
}