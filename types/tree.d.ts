// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode, CreateElement } from "vue";

export declare class Tree extends Vue {
    /**
     * 可嵌套的节点属性的数组，生成 tree 的数据
     */
    data?: TreeChild[];
    /**
     * 是否支持多选
     * @default false
     */
    multiple?: boolean;
    /**
     * 是否显示多选框
     * @default false
     */
    "show-checkbox"?: boolean;
    /**
     * 没有数据时的提示
     * @default 暂无数据
     */
    "empty-text"?: string;
    /**
     * 异步加载数据的方法
     */
    "load-data"?: () => void;
    /**
     * 自定义渲染内容
     * @param h Render函数
     */
    render?: (h?: CreateElement) => void;
    /**
     * 定义子节点键
     * @default children
     */
    "children-key"?: string;
    /**
     * 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法
     * @default false
     */
    "check-strictly"?: boolean;
    /**
     * 开启后，在 show-checkbox 模式下，select 的交互也将转为 check
     * @default false
     */
    "check-directly"?: boolean;
    /**
     * 点击树节点时触发
     * @default 当前已勾选节点的数组、当前项
     */
    $emit(eventName: "on-select-change", value: TreeChild[]): this;
    /**
     * 点击复选框时触发
     * @default  当前已勾选节点的数组、当前项
     */
    $emit(eventName: "on-check-change", value: TreeChild[]): this;
    /**
     * 展开和收起子列表时触发
     * @default  当前节点的数据
     */
    $emit(eventName: "on-toggle-expand", value: TreeChild): this;
    /**
     * 获取被勾选的节点
     */
    getCheckedNodes(): any[];
    /**
     * 获取被选中的节点
     */
    getSelectedNodes(): any[];
    /**
     * 获取选中及半选节点
     */
    getCheckedAndIndeterminateNodes(): any[];
}

export declare class TreeChild extends Vue {
    /**
     * 标题
     */
    title?: string;
    /**
     * 是否展开直子节点
     * @default false
     */
    expand?: boolean;
    /**
     * 禁掉响应
     * @default false
     */
    disabled?: boolean;
    /**
     * 禁掉checkbox
     * @default false
     */
    disableCheckbox?: boolean;
    /**
     * 是否选中子节点
     * @default false
     */
    selected?: boolean;
    /**
     * 是否勾选(如果勾选，子节点也会全部勾选)
     * @default false
     */
    checked?: boolean;
    /**
     * 子节点属性数组
     */
    children?: TreeChild[];
    /**
     * 自定义当前节点渲染内容，见示例
     */
    render(): void;
}
