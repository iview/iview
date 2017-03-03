<template>
    <span>
        <a v-if="href" :href="href" :class="linkClasses">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses" v-html="separator">
            <!-- <slot name="separator" v-html="separator"></slot> -->
        </span>
    </span>
</template>
<script>
    const prefixCls = 'ivu-breadcrumb-item';

    export default {
        props: {
            href: {
                type: String
            }
        },
        data () {
            return {
                separator: '/'
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
