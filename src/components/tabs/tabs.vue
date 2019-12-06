<template>
    <div :class="classes">
        <div :class="[prefixCls + '-bar']">
            <div :class="[prefixCls + '-nav-right']" v-if="showSlot"><slot name="extra"></slot></div>
            <div
                :class="[prefixCls + '-nav-container']"
                tabindex="0"
                ref="navContainer"
                @keydown="handleTabKeyNavigation"
                @keydown.space.prevent="handleTabKeyboardSelect(false)"
            >
                <div ref="navWrap" :class="[prefixCls + '-nav-wrap', scrollable ? prefixCls + '-nav-scrollable' : '']">
                    <span :class="[prefixCls + '-nav-prev', scrollable ? '' : prefixCls + '-nav-scroll-disabled']" @click="scrollPrev"><Icon type="ios-arrow-back"></Icon></span>
                    <span :class="[prefixCls + '-nav-next', scrollable ? '' : prefixCls + '-nav-scroll-disabled']" @click="scrollNext"><Icon type="ios-arrow-forward"></Icon></span>
                    <div ref="navScroll" :class="[prefixCls + '-nav-scroll']">
                        <div ref="nav" :class="[prefixCls + '-nav']" :style="navStyle">
                            <div :class="barClasses" :style="barStyle"></div>
                            <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">
                                <Icon v-if="item.icon !== ''" :type="item.icon"></Icon>
                                <Render v-if="item.labelType === 'function'" :render="item.label"></Render>
                                <template v-else>{{ item.label }}</template>
                                <Icon :class="[prefixCls + '-close']" v-if="showClose(item)" :type="arrowType" :custom="customArrowType" :size="arrowSize" @click.native.stop="handleRemove(index)"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="contentClasses" :style="contentStyle" ref="panes"><slot></slot></div>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import Render from '../base/render';
    import { oneOf, MutationObserver, findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import elementResizeDetectorMaker from 'element-resize-detector';

    const prefixCls = 'ivu-tabs';
    const transitionTime = 300; // from CSS

    const getNextTab = (list, activeKey, direction, countDisabledAlso) => {
        const currentIndex = list.findIndex(tab => tab.name === activeKey);
        const nextIndex = (currentIndex + direction + list.length) % list.length;
        const nextTab = list[nextIndex];
        if (nextTab.disabled) return getNextTab(list, nextTab.name, direction, countDisabledAlso);
        else return nextTab;
    };

    const focusFirst = (element, root) => {
        try {element.focus();}
        catch(err) {} // eslint-disable-line no-empty

        if (document.activeElement == element && element !== root) return true;

        const candidates = element.children;
        for (let candidate of candidates) {
            if (focusFirst(candidate, root)) return true;
        }
        return false;
    };

    export default {
        name: 'Tabs',
        mixins: [ Emitter ],
        components: { Icon, Render },
        provide () {
            return { TabsInstance: this };
        },
        props: {
            value: {
                type: [String, Number]
            },
            type: {
                validator (value) {
                    return oneOf(value, ['line', 'card']);
                },
                default: 'line'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'default']);
                },
                default: 'default'
            },
            animated: {
                type: Boolean,
                default: true
            },
            captureFocus: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: false
            },
            beforeRemove: Function,
            // Tabs 嵌套时，用 name 区分层级
            name: {
                type: String
            },
            custContentClass: {
                type: String,
                default: ''
            },
            custContentStyle: {
                type: Object,
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                navList: [],
                barWidth: 0,
                barOffset: 0,
                activeKey: this.value,
                focusedKey: this.value,
                showSlot: false,
                navStyle: {
                    transform: ''
                },
                scrollable: false,
                transitioning: false,
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-card`]: this.type === 'card',
                        [`${prefixCls}-mini`]: this.size === 'small' && this.type === 'line',
                        [`${prefixCls}-no-animation`]: !this.animated
                    }
                ];
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-animated`]: this.animated
                    },
                    this.custContentClass
                ];
            },
            barClasses () {
                return [
                    `${prefixCls}-ink-bar`,
                    {
                        [`${prefixCls}-ink-bar-animated`]: this.animated
                    }
                ];
            },
            contentStyle () {
                const x = this.getTabIndex(this.activeKey);
                const p = x === 0 ? '0%' : `-${x}00%`;

                let style = {};
                if (x > -1) {
                    style = {
                        transform: `translateX(${p}) translateZ(0px)`
                    };
                }
                const { custContentStyle } = this;
                if (custContentStyle) {
                    for (const key in custContentStyle){
                        style[key] = custContentStyle[key];
                    }
                }
                return style;
            },
            barStyle () {
                let style = {
                    visibility: 'hidden',
                    width: `${this.barWidth}px`
                };
                if (this.type === 'line') style.visibility = 'visible';
                if (this.animated) {
                    style.transform = `translate3d(${this.barOffset}px, 0px, 0px)`;
                } else {
                    style.left = `${this.barOffset}px`;
                }

                return style;
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                let type = 'ios-close';

                if (this.$IVIEW) {
                    if (this.$IVIEW.tabs.customCloseIcon) {
                        type = '';
                    } else if (this.$IVIEW.tabs.closeIcon) {
                        type = this.$IVIEW.tabs.closeIcon;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                let type = '';

                if (this.$IVIEW) {
                    if (this.$IVIEW.tabs.customCloseIcon) {
                        type = this.$IVIEW.tabs.customCloseIcon;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                let size = '';

                if (this.$IVIEW) {
                    if (this.$IVIEW.tabs.closeIconSize) {
                        size = this.$IVIEW.tabs.closeIconSize;
                    }
                }
                return size;
            }
        },
        methods: {
            getTabs () {
                // return this.$children.filter(item => item.$options.name === 'TabPane');
                const AllTabPanes = findComponentsDownward(this, 'TabPane');
                const TabPanes = [];

                AllTabPanes.forEach(item => {
                    if (item.tab && this.name) {
                        if (item.tab === this.name) {
                            TabPanes.push(item);
                        }
                    }else if (this.$children.includes(item)) { // #6279 #6299
                        TabPanes.push(item);
                    }
                });

                // 在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序
                TabPanes.sort((a, b) => {
                    if (a.index && b.index) {
                        return a.index > b.index ? 1 : -1;
                    }
                });
                return TabPanes;
            },
            updateNav () {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    this.navList.push({
                        labelType: typeof pane.label,
                        label: pane.label,
                        icon: pane.icon || '',
                        name: pane.currentName || index,
                        disabled: pane.disabled,
                        closable: pane.closable
                    });
                    if (!pane.currentName) pane.currentName = index;
                    if (index === 0) {
                        if (!this.activeKey) this.activeKey = pane.currentName || index;
                    }
                });
                this.updateStatus();
                this.updateBar();
            },
            updateBar () {
                this.$nextTick(() => {
                    const index = this.getTabIndex(this.activeKey);
                    if (!this.$refs.nav) return;  // 页面销毁时，这里会报错，为了解决 #2100
                    const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                    const tab = prevTabs[index];
                    this.barWidth = tab ? parseFloat(tab.offsetWidth) : 0;

                    if (index > 0) {
                        let offset = 0;
                        const gutter = this.size === 'small' ? 0 : 16;
                        for (let i = 0; i < index; i++) {
                            offset += parseFloat(prevTabs[i].offsetWidth) + gutter;
                        }

                        this.barOffset = offset;
                    } else {
                        this.barOffset = 0;
                    }
                    this.updateNavScroll();
                });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey) || this.animated);
            },
            tabCls (item) {
                return [
                    `${prefixCls}-tab`,
                    {
                        [`${prefixCls}-tab-disabled`]: item.disabled,
                        [`${prefixCls}-tab-active`]: item.name === this.activeKey,
                        [`${prefixCls}-tab-focused`]: item.name === this.focusedKey,
                    }
                ];
            },
            handleChange (index) {
                if (this.transitioning) return;

                this.transitioning = true;
                setTimeout(() => this.transitioning = false, transitionTime);

                const nav = this.navList[index];
                if (nav.disabled) return;
                this.activeKey = nav.name;
                this.$emit('input', nav.name);
                this.$emit('on-click', nav.name);
            },
            handleTabKeyNavigation(e){
                if (e.keyCode !== 37 && e.keyCode !== 39) return;
                const direction = e.keyCode === 39 ? 1 : -1;
                const nextTab = getNextTab(this.navList, this.focusedKey, direction);
                this.focusedKey = nextTab.name;
            },
            handleTabKeyboardSelect(init = false){
                if (init) return;
                const focused = this.focusedKey || 0;
                const index = this.getTabIndex(focused);
                this.handleChange(index);
            },
            handleRemove (index) {
                if (!this.beforeRemove) {
                    return this.handleRemoveTab(index);
                }

                const before = this.beforeRemove(index);

                if (before && before.then) {
                    before.then(() => {
                        this.handleRemoveTab(index);
                    });
                } else {
                    this.handleRemoveTab(index);
                }
            },
            handleRemoveTab (index) {
                const tabs = this.getTabs();
                const tab = tabs[index];
                tab.$destroy();

                if (tab.currentName === this.activeKey) {
                    const newTabs = this.getTabs();
                    let activeKey = -1;

                    if (newTabs.length) {
                        const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index);
                        const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index);

                        if (rightNoDisabledTabs.length) {
                            activeKey = rightNoDisabledTabs[0].currentName;
                        } else if (leftNoDisabledTabs.length) {
                            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].currentName;
                        } else {
                            activeKey = newTabs[0].currentName;
                        }
                    }
                    this.activeKey = activeKey;
                    this.$emit('input', activeKey);
                }
                this.$emit('on-tab-remove', tab.currentName);
                this.updateNav();
            },
            showClose (item) {
                if (this.type === 'card') {
                    if (item.closable !== null) {
                        return item.closable;
                    } else {
                        return this.closable;
                    }
                } else {
                    return false;
                }
            },
            scrollPrev() {
                const containerWidth = this.$refs.navScroll.offsetWidth;
                const currentOffset = this.getCurrentScrollOffset();

                if (!currentOffset) return;

                let newOffset = currentOffset > containerWidth
                    ? currentOffset - containerWidth
                    : 0;

                this.setOffset(newOffset);
            },
            scrollNext() {
                const navWidth = this.$refs.nav.offsetWidth;
                const containerWidth = this.$refs.navScroll.offsetWidth;
                const currentOffset = this.getCurrentScrollOffset();
                if (navWidth - currentOffset <= containerWidth) return;

                let newOffset = navWidth - currentOffset > containerWidth * 2
                    ? currentOffset + containerWidth
                    : (navWidth - containerWidth);

                this.setOffset(newOffset);
            },
            getCurrentScrollOffset() {
                const { navStyle } = this;
                return navStyle.transform
                    ? Number(navStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
                    : 0;
            },
            getTabIndex(name){
                return this.navList.findIndex(nav => nav.name === name);
            },
            setOffset(value) {
                this.navStyle.transform = `translateX(-${value}px)`;
            },
            scrollToActiveTab() {
                if (!this.scrollable) return;
                const nav = this.$refs.nav;
                const activeTab = this.$el.querySelector(`.${prefixCls}-tab-active`);
                if(!activeTab) return;

                const navScroll = this.$refs.navScroll;
                const activeTabBounding = activeTab.getBoundingClientRect();
                const navScrollBounding = navScroll.getBoundingClientRect();
                const navBounding = nav.getBoundingClientRect();
                const currentOffset = this.getCurrentScrollOffset();
                let newOffset = currentOffset;

                if (navBounding.right < navScrollBounding.right) {
                    newOffset = nav.offsetWidth - navScrollBounding.width;
                }

                if (activeTabBounding.left < navScrollBounding.left) {
                    newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
                }else if (activeTabBounding.right > navScrollBounding.right) {
                    newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
                }

                if(currentOffset !== newOffset){
                    this.setOffset(Math.max(newOffset, 0));
                }
            },
            updateNavScroll(){
                const navWidth = this.$refs.nav.offsetWidth;
                const containerWidth = this.$refs.navScroll.offsetWidth;
                const currentOffset = this.getCurrentScrollOffset();
                if (containerWidth < navWidth) {
                    this.scrollable = true;
                    if (navWidth - currentOffset < containerWidth) {
                        this.setOffset(navWidth - containerWidth);
                    }
                } else {
                    this.scrollable = false;
                    if (currentOffset > 0) {
                        this.setOffset(0);
                    }
                }
            },
            handleResize(){
                this.updateNavScroll();
            },
            isInsideHiddenElement () {
                let parentNode = this.$el.parentNode;
                while(parentNode && parentNode !== document.body) {
                    if (parentNode.style && parentNode.style.display === 'none') {
                        return parentNode;
                    }
                    parentNode = parentNode.parentNode;
                }
                return false;
            },
            updateVisibility(index){
                [...this.$refs.panes.querySelectorAll(`.${prefixCls}-tabpane`)].forEach((el, i) => {
                    if (index === i) {
                        [...el.children].filter(child=> child.classList.contains(`${prefixCls}-tabpane`)).forEach(child => child.style.visibility = 'visible');
                        if (this.captureFocus) setTimeout(() => focusFirst(el, el), transitionTime);
                    } else {
                        setTimeout(() => {
                            [...el.children].filter(child=> child.classList.contains(`${prefixCls}-tabpane`)).forEach(child => child.style.visibility = 'hidden');
                        }, transitionTime);
                    }
                });
            }
        },
        watch: {
            value (val) {
                this.activeKey = val;
                this.focusedKey = val;
            },
            activeKey (val) {
                this.focusedKey = val;
                this.updateBar();
                this.updateStatus();
                this.broadcast('Table', 'on-visible-change', true);
                this.$nextTick(() => {
                    this.scrollToActiveTab();
                });

                // update visibility
                const nextIndex = Math.max(this.getTabIndex(this.focusedKey), 0);
                this.updateVisibility(nextIndex);
            }
        },
        mounted () {
            this.showSlot = this.$slots.extra !== undefined;
            this.observer = elementResizeDetectorMaker();
            this.observer.listenTo(this.$refs.navWrap, this.handleResize);

            const hiddenParentNode = this.isInsideHiddenElement();
            if (hiddenParentNode) {
                this.mutationObserver = new MutationObserver(() => {
                    if (hiddenParentNode.style.display !== 'none') {
                        this.updateBar();
                        this.mutationObserver.disconnect();
                    }
                });

                this.mutationObserver.observe(hiddenParentNode, { attributes: true, childList: true, characterData: true, attributeFilter: ['style'] });
            }

            this.handleTabKeyboardSelect(true);
            this.updateVisibility(this.getTabIndex(this.activeKey));
        },
        beforeDestroy() {
            this.observer.removeListener(this.$refs.navWrap, this.handleResize);
            if (this.mutationObserver) this.mutationObserver.disconnect();
        }
    };
</script>
