// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode, CreateElement } from "vue";

export declare class Spin extends Vue {
    /**
     * 展示
     */
    static show: (options: SpinShowOptions) => void;
    /**
     * 隐藏
     */
    static hide: () => void;
    /**
     * Spin尺寸，可选值为large和small或者不设置
     */
    size?: "large" | "small";
    /**
     * 是否固定，需要父级有relative或absolute
     * @default false
     */
    fix?: boolean;
    /**
     * slot插槽对象
     */
    $slots: {
        /**
         * 自定义 Spin 的内容，设置slot后，默认的样式不生效
         */
        "": VNode[];
    };
}

export declare class SpinShowOptions extends Vue {
    render?: (h?: CreateElement) => VNode;
}

import * as m from "vue";
declare module "vue/types/vue" {
    interface Vue {
        /**
         *
         */
        $Spin: typeof Spin;
    }
}
