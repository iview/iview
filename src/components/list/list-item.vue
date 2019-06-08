<template>
    <li class="ivu-list-item" :class="classes">
        <slot></slot>
        <ul class="ivu-list-item-action" v-if="$slots.action">
            <slot name="action"></slot>
        </ul>
    </li>
</template>
<script>
    export default {
        name: 'ListItem',
        inject: ['ListInstance'],
        props: {

        },
        computed: {
            isFlexMode () {
                const extra = this.$slots.extra;
                const itemLayout = this.ListInstance.itemLayout;

                if (itemLayout === 'vertical') {
                    return !!extra;
                }

                return !this.$slots.default;
            },
            classes () {
                return [
                    {
                        'ivu-list-item-no-flex': !this.isFlexMode
                    }
                ];
            }
        }
    };
</script>
