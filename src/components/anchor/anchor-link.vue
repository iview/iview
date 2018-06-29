<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" :href="href" :data-href="href" @click.prevent="goAnchor" :title="title">{{ title }}</a>
        <slot></slot>
    </div>
</template>
<script>
import { findComponentUpward } from '../../utils/assist';
export default {
    name: 'AnchorLink',
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
                this.currentLink === this.href ? `${this.prefix}-active` : ''
            ];
        },
        linkTitleClasses () {
            return [
                `${this.prefix}-title`
            ];
        },
        parentAnchor () {
            return findComponentUpward(this, 'Anchor');
        },
        currentLink () {
            return this.parentAnchor.currentLink;
        }
    },
    methods: {
        goAnchor () {
            this.parentAnchor.turnTo(this.href);
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.parentAnchor.init();
        });
    }
};
</script>
