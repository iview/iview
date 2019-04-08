// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare interface Drawer extends Vue {
    /**
     * 抽屉是否显示，可使用 v-model 双向绑定数据
     * @default false
     */
    value?: boolean;
    /**
     * 抽屉标题，如果使用 slot 自定义了页头，则 title 无效
     * @default center
     */
    title?: string;
    /**
     * 抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素
     * @default 256
     */
    width?: number | string;
    /**
     * 是否显示右上角的关闭按钮
     * @default true
     */
    closable?: boolean;
    /**
     * 是否允许点击遮罩层关闭
     * @default true
     */
    'mask-closable'?: boolean;
    /**
     * 是否显示遮罩层
     * @default true
     */
    mask?: boolean;
    /**
     * 遮罩层样式
     */
    'mask-style'?: object;
    /**
     * 抽屉中间层的样式
     */
    styles?: object;
    /**
     * 页面是否可以滚动
     * @default false
     */
    scrollable?: boolean;
    /**
     * 抽屉的方向，可选值为 left 或 right
     * @default right
     */
    placement?: 'left' | 'right';
    /**
     * 抽屉中间层的样式
     * @default true
     */
    transfer?: boolean;
    /**
     * 抽屉中间层的样式
     */
    'class-name'?: string;
    /**
     * 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性
     * @default false
     */
    'inner'?: boolean;
    /**
     * 是否开启拖拽调整宽度
     * @default false
     */
    'draggable'?: boolean;
    /**
     * 返回 Promise 可以阻止关闭
     */
    'before-close'?: () => void | PromiseConstructor;
    /**
     * 关闭抽屉时触发
     */
    $emit(eventName: 'on-close'): this;
    /**
     * 显示状态发生变化时触发
     */
    $emit(eventName: 'on-visible-change', value: boolean): this;
    /**
     * 调整宽度时触发，返回宽度
     */
    $emit(eventName: 'on-resize-width'): number;
    /**
     * slot插槽对象
     */
    $slots: {
        /**
         * 抽屉主体内容
         */
        '': VNode[];
        /**
         * 抽屉主体内容
         */
        header: VNode[];
        /**
         * 抽屉主体内容
         */
        close: VNode[];
        /**
         * 自定义调整宽度节点
         */
        trigger: VNode[];
    };
}
