<template>
    <li :class="classes">
        {{ data.label }}
        <Icon v-if="showArrow" :type="arrowType" :custom="customArrowType" :size="arrowSize"></Icon>
        <i v-if="showLoading" class="ivu-icon ivu-icon-ios-loading ivu-load-loop"></i>
    </li>
</template>
<script>
    import Icon from '../icon/icon.vue';

    export default {
        name: 'Casitem',
        components: { Icon },
        props: {
            data: Object,
            prefixCls: String,
            tmpItem: Object
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
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                let type = 'ios-arrow-down';
                 if (this.$IVIEW) {
                    if (this.$IVIEW.cascader.customRightArrow) {
                        type = '';
                    } else if (this.$IVIEW.cascader.rightArrow) {
                        type = this.$IVIEW.cascader.rightArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                let type = '';
                 if (this.$IVIEW) {
                    if (this.$IVIEW.cascader.customRightArrow) {
                        type = this.$IVIEW.cascader.customRightArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                let size = '';
                 if (this.$IVIEW) {
                    if (this.$IVIEW.cascader.rightArrowSize) {
                        size = this.$IVIEW.cascader.rightArrowSize;
                    }
                }
                return size;
            }
        }
    };
</script>
