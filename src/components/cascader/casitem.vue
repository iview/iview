<template>
    <li :class="classes" :style="{paddingLeft: reverse ? '24px' : '16px',paddingRight: reverse ? '16px' : '24px'}">
        <i v-if="reverse && showArrow" class="ivu-icon ivu-icon-ios-arrow-left" :style="{left: reverse ? '15px' : 'auto',right: reverse ? 'auto' : '15px'}"></i>
        <i v-if="reverse && showLoading" class="ivu-icon ivu-icon-load-c ivu-load-loop"></i>
        {{ data.label }}
        <i v-if="!reverse && showArrow" class="ivu-icon ivu-icon-ios-arrow-right"></i>
        <i v-if="!reverse && showLoading" class="ivu-icon ivu-icon-load-c ivu-load-loop"></i>
    </li>
</template>
<script>
    export default {
        name: 'Casitem',
        props: {
            data: Object,
            prefixCls: String,
            tmpItem: Object,
            reverse:{type:Boolean,default: false}
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-menu-item`,
                    {
                        [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
                        [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
                    }
                ];
            },
            showArrow () {
                return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading);
            },
            showLoading () {
                return 'loading' in this.data && this.data.loading;
            }
        }
    };
</script>
