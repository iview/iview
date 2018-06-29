<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" :href="href" :data-href="href" @click.prevent="goAnchor" :title="title">{{ title }}</a>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AnchorLink',
    inject: ['anchorCom'],
    props: {
        href: String,
        title: String
    },
    data () {
        return {
            prefix: 'ivu-anchor-link'
        };
    },
    computed: {
        anchorLinkClasses () {
            return [
                this.prefix,
                this.anchorCom.currentLink === this.href ? `${this.prefix}-active` : ''
            ];
        },
        linkTitleClasses () {
            return [
                `${this.prefix}-title`
            ];
        }
    },
    methods: {
        goAnchor () {
            this.currentLink = this.href;
            this.anchorCom.$emit('on-select', this.href);
            const isRoute = this.$router;
            if (isRoute) {
                this.$router.push(this.href);
            } else {
                window.location.href = this.href;
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.anchorCom.init();
        });
    }
};
</script>
