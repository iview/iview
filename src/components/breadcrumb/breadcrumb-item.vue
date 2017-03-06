<template>
    <span>
        <a v-if="href" :href="href" :class="linkClasses">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
        <span :class="separatorClasses" v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>
<script>
    const prefixCls = 'ivu-breadcrumb-item';

    export default {
        name: 'BreadcrumbItem',
        props: {
            href: {
                type: String
            }
        },
        data () {
            return {
                separator: '',
                showSeparator: false
            };
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        },
        computed: {
            linkClasses () {
                return `${prefixCls}-link`;
            },
            separatorClasses () {
                return `${prefixCls}-separator`;
            }
        }
    };
</script>
