<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-breadcrumb';

    export default {
        props: {
            separator: {
                type: String,
                default: '/'
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        compiled () {
            this.updateChildren();
        },
        methods: {
            updateChildren () {
                this.$children.forEach((child) => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator () {
                this.updateChildren();
            }
        }
    };
</script>
