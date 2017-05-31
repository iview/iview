<template>
    <span>
        <a v-if="showLink" :class="linkClasses" @click="handleClick">
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
            },
            routerName: {
                type: String
            },
            routerParam: {
                type: String
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
            },
            showLink () {
                return this.href || this.routerName;
            }
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        },
        methods: {
            handleClick () {
                const isRoute = this.$router;
                if (isRoute) {
                    this.changeRoute();
                } else {
                    window.location.href = this.href;
                }
            },
            changeRoute () {
                if (this.replace) {
                    this.routerName ? this.$router.replace({ name: this.routerName, params: this.routerParam}) : this.$router.replace(this.href);
                } else {
                    this.routerName ? this.$router.push({ name: this.routerName, params: this.routerParam}) : this.$router.push(this.href);
                }
            }
        }
    };
</script>
