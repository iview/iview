<template>
    <component :is="wrapperComponent" :offset-top="offsetTop" :offset-bottom="offsetBottom" @on-change="handleAffixStateChange">
		<div :class="`${prefix}-wrapper`" :style="wrapperStyle">
            <div :class="`${prefix}`">
                <div :class="`${prefix}-ink`">
                    <span v-show="showInk" :class="`${prefix}-ink-ball`" :style="{top: `${inkTop}px`}"></span>
                </div>
                <slot></slot>
            </div>
        </div>
	</component>
</template>
<script>
import { scrollTop, findComponentsDownward, sharpMatcherRegx } from '../../utils/assist';
import { on, off } from '../../utils/dom';
export default {
    name: 'Anchor',
    provide () {
        return {
            anchorCom: this
        };
    },
    data () {
        return {
            prefix: 'ivu-anchor',
            isAffixed: false, // current affixed state
            inkTop: 0,
            animating: false, // if is scrolling now
            currentLink: '', // current show link =>  #href -> currentLink = #href
            currentId: '', // current show title id =>  #href -> currentId = href
            scrollContainer: null,
            scrollElement: null,
            titlesOffsetArr: [],
            wrapperTop: 0,
            upperFirstTitle: true
        };
    },
    props: {
        affix: {
            type: Boolean,
            default: true
        },
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: Number,
        bounds: {
            type: Number,
            default: 5
        },
//        container: [String, HTMLElement],  // HTMLElement 在 SSR 下不支持
        container: null,
        showInk: {
            type: Boolean,
            default: false
        },
        scrollOffset: {
            type: Number,
            default: 0
        }
    },
    computed: {
        wrapperComponent () {
            return this.affix ? 'Affix' : 'div';
        },
        wrapperStyle () {
            return {
                maxHeight: this.offsetTop ? `calc(100vh - ${this.offsetTop}px)` : '100vh'
            };
        },
        containerIsWindow () {
            return this.scrollContainer === window;
        }
    },
    methods: {
        handleAffixStateChange (state) {
            this.isAffixed = this.affix && state;
        },
        handleScroll (e) {
            this.upperFirstTitle = e.target.scrollTop < this.titlesOffsetArr[0].offset;
            if (this.animating) return;
            this.updateTitleOffset();
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop;
            this.getCurrentScrollAtTitleId(scrollTop);
        },
        handleHashChange () {
            const url = window.location.href;
            const sharpLinkMatch = sharpMatcherRegx.exec(url);
            if (!sharpLinkMatch) return;
            this.currentLink = sharpLinkMatch[0];
            this.currentId = sharpLinkMatch[1];
        },
        handleScrollTo () {
            const anchor = document.getElementById(this.currentId);
            const currentLinkElementA = document.querySelector(`a[data-href="${this.currentLink}"]`);
            let offset = this.scrollOffset;
            if (currentLinkElementA) {
                offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
            }

            if (!anchor) return;
            const offsetTop = anchor.offsetTop - this.wrapperTop - offset;
            this.animating = true;
            scrollTop(this.scrollContainer, this.scrollElement.scrollTop, offsetTop, 600, () => {
                this.animating = false;
            });
            this.handleSetInkTop();
        },
        handleSetInkTop () {
            const currentLinkElementA = document.querySelector(`a[data-href="${this.currentLink}"]`);
            if (!currentLinkElementA) return;
            const elementATop = currentLinkElementA.offsetTop;
            const top = (elementATop < 0 ? this.offsetTop : elementATop);
            this.inkTop = top;
        },
        updateTitleOffset () {
            const links = findComponentsDownward(this, 'AnchorLink').map(link => {
                return link.href;
            });
            const idArr = links.map(link => {
                return link.split('#')[1];
            });
            let offsetArr = [];
            idArr.forEach(id => {
                const titleEle = document.getElementById(id);
                if (titleEle) offsetArr.push({
                    link: `#${id}`,
                    offset: titleEle.offsetTop - this.scrollElement.offsetTop
                });
            });
            this.titlesOffsetArr = offsetArr;
        },
        getCurrentScrollAtTitleId (scrollTop) {
            let i = -1;
            let len = this.titlesOffsetArr.length;
            let titleItem = {
                link: '#',
                offset: 0
            };
            scrollTop += this.bounds;
            while (++i < len) {
                let currentEle = this.titlesOffsetArr[i];
                let nextEle = this.titlesOffsetArr[i + 1];
                if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
                    titleItem = this.titlesOffsetArr[i];
                    break;
                }
            }
            this.currentLink = titleItem.link;
            this.handleSetInkTop();
        },
        getContainer () {
            this.scrollContainer = this.container ? (typeof this.container === 'string' ? document.querySelector(this.container) : this.container) : window;
            this.scrollElement = this.container ? this.scrollContainer : (document.documentElement || document.body);
        },
        removeListener () {
            off(this.scrollContainer, 'scroll', this.handleScroll);
            off(window, 'hashchange', this.handleHashChange);
        },
        init () {
            // const anchorLink = findComponentDownward(this, 'AnchorLink');
            this.handleHashChange();
            this.$nextTick(() => {
                this.removeListener();
                this.getContainer();
                this.wrapperTop = this.containerIsWindow ? 0 : this.scrollElement.offsetTop;
                this.handleScrollTo();
                this.handleSetInkTop();
                this.updateTitleOffset();
                if (this.titlesOffsetArr[0]) {
                    this.upperFirstTitle = this.scrollElement.scrollTop < this.titlesOffsetArr[0].offset;
                }
                on(this.scrollContainer, 'scroll', this.handleScroll);
                on(window, 'hashchange', this.handleHashChange);
            });
        }
    },
    watch: {
        '$route' () {
            this.handleHashChange();
            this.$nextTick(() => {
                this.handleScrollTo();
            });
        },
        container () {
            this.init();
        },
        currentLink (newHref, oldHref) {
            this.$emit('on-change', newHref, oldHref);
        }
    },
    mounted () {
        this.init();
    },
    beforeDestroy () {
        this.removeListener();
    }
};
</script>
