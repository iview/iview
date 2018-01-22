<template>
    <span>
        <a v-if="to || href" :class="linkClasses" @click="handleClick">
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
    // todo 3.0 时废弃 href
    const prefixCls = 'ivu-breadcrumb-item';

    export default {
        name: 'BreadcrumbItem',
        props: {
            href: {
                type: [Object, String]
            },
            to: {
                type: [Object, String]
            },
            replace: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                separator: '',
                showSeparator: false
            };
        },
        computed: {
            linkClasses () {
                return `${prefixCls}-link`;
            },
            separatorClasses () {
                return `${prefixCls}-separator`;
            }
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        },
        methods: {
            handleClick () {
                const isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to || this.href) : this.$router.push(this.to || this.href);
                } else {
                    window.location.href = this.to || this.href;
                }
            }
        }
    };
</script>
