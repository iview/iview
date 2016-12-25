<template>
    <span>
        <a v-if="href" :href="href" :class="linkClasses">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses">
            <slot name="separator">{{{ separator }}}</slot>
        </span>
    </span>
</template>
<script>
    const prefixCls = 'ivu-breadcrumb-item';

    export default {
        props: {
            href: {
                type: String
            },
            separator: {
                type: String,
                default: '/'
            }
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
