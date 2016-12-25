<template>
    <div :class="itemClasses">
        <div :class="headerClasses" @click="toggle">
            <Icon type="arrow-right-b"></Icon>
            <slot></slot>
        </div>
        <div :class="concentClasses" v-show="isActive">
            <div :class="boxClasses"><slot name="content"></slot></div>
        </div>
    </div>
</template>
<script>
    import Icon from '../icon';
    const prefixCls = 'ivu-collapse';

    export default {
        components: { Icon },
        props: {
            key: {
                type: String
            }
        },
        data () {
            return {
                index: 0, // use index for default when key is null
                isActive: false
            };
        },
        computed: {
            itemClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.isActive
                    }
                ];
            },
            headerClasses () {
                return `${prefixCls}-header`;
            },
            concentClasses () {
                return `${prefixCls}-content`;
            },
            boxClasses () {
                return `${prefixCls}-content-box`;
            }
        },
        methods: {
            toggle () {
                this.$parent.toggle({
                    key: this.key || this.index,
                    isActive: this.isActive
                });
            }
        }
    };
</script>
