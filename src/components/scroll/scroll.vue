<template>
    <div :class="wrapClasses" style="touch-action: none;">
        <div
            :class="scrollContainerClasses"
            :style="{height: height + 'px'}"
            @scroll="handleScroll"
            @wheel="onWheel"
            @touchstart="onPointerDown"
            ref="scrollContainer"
        >
            <div :class="loaderClasses" :style="{paddingTop: wrapperPadding.paddingTop}" ref="toploader">
                <loader :text="localeLoadingText" :active="showTopLoader"></loader>
            </div>
            <div :class="slotContainerClasses" ref="scrollContent">
                <slot></slot>
            </div>
            <div :class="loaderClasses" :style="{paddingBottom: wrapperPadding.paddingBottom}" ref="bottomLoader">
                <loader :text="localeLoadingText" :active="showBottomLoader"></loader>
            </div>
        </div>
    </div>
</template>
<script>
    import throttle from 'lodash.throttle';
    import loader from './loading-component.vue';
    import { on, off } from '../../utils/dom';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-scroll';
    const dragConfig = {
        sensitivity: 10,
        minimumStartDragOffset: 5, // minimum start drag offset
    };

    const noop = () => Promise.resolve();

    export default {
        name: 'Scroll',
        mixins: [ Locale ],
        components: {loader},
        props: {
            height: {
                type: [Number, String],
                default: 300
            },
            onReachTop: {
                type: Function
            },
            onReachBottom: {
                type: Function
            },
            onReachEdge: {
                type: Function
            },
            loadingText: {
                type: String
            },
            distanceToEdge: [Number, Array],
            stopSlide: {
                type: Boolean,
                default: false
            }
        },
        data() {
            const distanceToEdge = this.calculateProximityThreshold();
            return {
                showTopLoader: false,
                showBottomLoader: false,
                showBodyLoader: false,
                lastScroll: 0,
                reachedTopScrollLimit: true,
                reachedBottomScrollLimit: false,
                topRubberPadding: 0,
                bottomRubberPadding: 0,
                rubberRollBackTimeout: false,
                isLoading: false,
                pointerTouchDown: null,
                touchScroll: false,
                handleScroll: () => {},
                pointerUpHandler: () => {},
                pointerMoveHandler: () => {},

                // near to edge detectors
                topProximityThreshold: distanceToEdge[0],
                bottomProximityThreshold: distanceToEdge[1]
            };
        },
        computed: {
            wrapClasses() {
                return `${prefixCls}-wrapper`;
            },
            scrollContainerClasses() {
                return [
                    `${prefixCls}-container`,
                    {
                        [`${prefixCls}-container-loading`]: this.showBodyLoader && this.stopSlide
                    }
                ];
            },
            slotContainerClasses() {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-loading`]: this.showBodyLoader
                    }
                ];
            },
            loaderClasses() {
                return `${prefixCls}-loader`;
            },
            wrapperPadding() {
                return {
                    paddingTop: this.topRubberPadding + 'px',
                    paddingBottom: this.bottomRubberPadding + 'px'
                };
            },
            localeLoadingText () {
                if (this.loadingText === undefined) {
                    return this.t('i.select.loading');
                } else {
                    return this.loadingText;
                }
            },
        },
        methods: {
            // just to improve feeling of loading and avoid scroll trailing events fired by the browser
            waitOneSecond() {
                return new Promise(resolve => {
                    setTimeout(resolve, 1000);
                });
            },

            calculateProximityThreshold(){
                const dte = this.distanceToEdge;
                if (typeof dte == 'undefined') return [20, 20];
                return Array.isArray(dte) ? dte : [dte, dte];
            },

            onCallback(dir) {
                this.isLoading = true;
                this.showBodyLoader = true;
                if (dir > 0) {
                    this.showTopLoader = true;
                    this.topRubberPadding = 20;
                } else {
                    this.showBottomLoader = true;
                    this.bottomRubberPadding = 20;

                    // to force the scroll to the bottom while height is animating
                    let bottomLoaderHeight = 0;
                    const container = this.$refs.scrollContainer;
                    const initialScrollTop = container.scrollTop;
                    for (let i = 0; i < 20; i++) {
                        setTimeout(() => {
                            bottomLoaderHeight = Math.max(
                                bottomLoaderHeight,
                                this.$refs.bottomLoader.getBoundingClientRect().height
                            );
                            container.scrollTop = initialScrollTop + bottomLoaderHeight;
                        }, i * 50);
                    }
                }

                const callbacks = [this.waitOneSecond(), this.onReachEdge ? this.onReachEdge(dir) : noop()];
                callbacks.push(dir > 0 ? this.onReachTop ? this.onReachTop() : noop() : this.onReachBottom ? this.onReachBottom() : noop());

                let tooSlow = setTimeout(() => {
                    this.reset();
                }, 5000);

                Promise.all(callbacks).then(() => {
                    clearTimeout(tooSlow);
                    this.reset();
                });
            },

            reset() {
                [
                    'showTopLoader',
                    'showBottomLoader',
                    'showBodyLoader',
                    'isLoading',
                    'reachedTopScrollLimit',
                    'reachedBottomScrollLimit'
                ].forEach(prop => (this[prop] = false));

                this.lastScroll = 0;
                this.topRubberPadding = 0;
                this.bottomRubberPadding = 0;
                clearInterval(this.rubberRollBackTimeout);

                // if we remove the handler too soon the screen will bump
                if (this.touchScroll) {
                    setTimeout(() => {
                        off(window, 'touchend', this.pointerUpHandler);
                        this.$refs.scrollContainer.removeEventListener('touchmove', this.pointerMoveHandler);
                        this.touchScroll = false;
                    }, 500);
                }
            },

            onWheel(event) {
                if (this.isLoading) return;

                // get the wheel direction
                const wheelDelta = event.wheelDelta ? event.wheelDelta : -(event.detail || event.deltaY);
                this.stretchEdge(wheelDelta);
            },

            stretchEdge(direction) {
                clearTimeout(this.rubberRollBackTimeout);

                // check if set these props
                if (!this.onReachEdge) {
                    if (direction > 0) {
                        if (!this.onReachTop) return;
                    } else {
                        if (!this.onReachBottom) return;
                    }
                }

                // if the scroll is not strong enough, lets reset it
                this.rubberRollBackTimeout = setTimeout(() => {
                    if (!this.isLoading) this.reset();
                }, 250);

                // to give the feeling its ruberish and can be puled more to start loading
                if (direction > 0 && this.reachedTopScrollLimit) {
                    this.topRubberPadding += 5 - this.topRubberPadding / 5;
                    if (this.topRubberPadding > this.topProximityThreshold) this.onCallback(1);
                } else if (direction < 0 && this.reachedBottomScrollLimit) {
                    this.bottomRubberPadding += 6 - this.bottomRubberPadding / 4;
                    if (this.bottomRubberPadding > this.bottomProximityThreshold) this.onCallback(-1);
                } else {
                    this.onScroll();
                }
            },

            onScroll() {
                const el = this.$refs.scrollContainer;
                if (this.isLoading || !el) return;
                const scrollDirection = Math.sign(this.lastScroll - el.scrollTop); // IE has no Math.sign, check that webpack polyfills this
                const displacement = el.scrollHeight - el.clientHeight - el.scrollTop;

                const topNegativeProximity = this.topProximityThreshold < 0 ? this.topProximityThreshold : 0;
                const bottomNegativeProximity = this.bottomProximityThreshold < 0 ? this.bottomProximityThreshold : 0;
                if (scrollDirection == -1 && displacement + bottomNegativeProximity <= dragConfig.sensitivity) {
                    this.reachedBottomScrollLimit = true;
                } else if (scrollDirection >= 0 && el.scrollTop + topNegativeProximity <= 0) {
                    this.reachedTopScrollLimit = true;
                } else {
                    this.reachedTopScrollLimit = false;
                    this.reachedBottomScrollLimit = false;
                    this.lastScroll = el.scrollTop;
                }
            },

            getTouchCoordinates(e) {
                return {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
            },

            onPointerDown(e) {
                // we just use scroll and wheel in desktop, no mousedown
                if (this.isLoading) return;
                if (e.type == 'touchstart') {
                    // if we start do touchmove on the scroll edger the browser will scroll the body
                    // by adding 5px margin on pointer down we avoid this behaviour and the scroll/touchmove
                    // in the component will not be exported outside of the component
                    const container = this.$refs.scrollContainer;
                    if (this.reachedTopScrollLimit) container.scrollTop = 5;
                    else if (this.reachedBottomScrollLimit) container.scrollTop -= 5;
                }
                if (e.type == 'touchstart' && this.$refs.scrollContainer.scrollTop == 0)
                    this.$refs.scrollContainer.scrollTop = 5;

                this.pointerTouchDown = this.getTouchCoordinates(e);
                on(window, 'touchend', this.pointerUpHandler);
                this.$refs.scrollContainer.parentElement.addEventListener('touchmove', e => {
                    e.stopPropagation();
                    this.pointerMoveHandler(e);
                }, {passive: false, useCapture: true});
            },

            onPointerMove(e) {
                if (!this.pointerTouchDown) return;
                if (this.isLoading) return;

                const pointerPosition = this.getTouchCoordinates(e);
                const yDiff = pointerPosition.y - this.pointerTouchDown.y;

                this.stretchEdge(yDiff);

                if (!this.touchScroll) {
                    const wasDragged = Math.abs(yDiff) > dragConfig.minimumStartDragOffset;
                    if (wasDragged) this.touchScroll = true;
                }
            },

            onPointerUp() {
                this.pointerTouchDown = null;
            }
        },
        created() {
            this.handleScroll = throttle(this.onScroll, 150, {leading: false});
            this.pointerUpHandler = this.onPointerUp.bind(this); // because we need the same function to add and remove event handlers
            this.pointerMoveHandler = throttle(this.onPointerMove, 50, {leading: false});
        }
    };

</script>
