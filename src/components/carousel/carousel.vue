<template>
    <div :class="classes">
        <button :class="arrowClasses" class="left" @click="add(-1)">
            <Icon type="chevron-left"></Icon>
        </button>
        <div :class="[prefixCls + '-list']">
            <div :class="[prefixCls + '-track']" :style="trackStyles" v-el:slides>
                <!-- opacity: 1; width: 4480px; transform: translate3d(-1120px, 0px, 0px); -->
                <slot></slot>
            </div>
        </div>
        <button :class="arrowClasses" class="right" @click="add(1)">
            <Icon type="chevron-right"></Icon>
        </button>
        <ul :class="dotsClasses">
            <template v-for="n in slides.length">
                <li :class="{ [`${prefixCls}-active`]: n === currentIndex }"
                    @click="dotsEvent('click', n)"
                    @mouseover="dotsEvent('hover', n)">
                    <button></button>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import { oneOf, getStyle, deepCopy, getScrollBarSize } from '../../utils/assist';

    const prefixCls = 'ivu-carousel';

    export default {
        name: 'Carousel',
        props: {
            arrow: {
                type: String,
                default: 'hover'
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            easing: {
                type: String,
                default: 'ease'
            },
            dots: {
                type: String,
                default: 'inside'
            },
            trigger: {
                type: String,
                default: 'click'
            },
            vertical: {
                type: Boolean,
                default: false
            },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                listWidth: 0,
                trackWidth: 0,
                trackLeft: 0,
                slides: [],
                slideInstances: [],
                timer: null
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            },
            trackStyles () {
                return {
                    width: `${this.trackWidth}px`,
                    transform: `translate3d(-${this.trackLeft}px, 0px, 0px)`,
                    transition: `transform 500ms ${this.easing}`
                };
            },
            arrowClasses () {
                return [
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-${this.arrow}`
                ]
            },
            dotsClasses () {
                return [
                    `${prefixCls}-dots`,
                    `${prefixCls}-arrow-${this.dots}`
                ]
            },
            activeDot (n) {
                return {
                    [`${prefixCls}-vertical`]: this.currentIndex === n
                }
            }
        },
        methods: {
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.slideInstances.length) {
                    this.slideInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            updateSlides (init, slot = false) {
                let slides = [];
                let index = 1;

                this.findChild((child) => {
                    slides.push({
                        $el: child.$el
                    });
                    child.index = index++;

                    if (init) {
                        this.slideInstances.push(child);
                    }
                });

                this.slides = slides;

                this.updatePos();
            },
            updatePos () {
                this.findChild((child) => {
                    child.width = this.listWidth;
                });

                this.trackWidth = (this.slides.length || 0) * this.listWidth;
            },
            // use when slot changed
            slotChange () {
                this.$nextTick(() => {
                    this.slides = [];
                    this.slideInstances = [];

                    this.updateSlides(true, true);
                    this.updatePos();
                });
            },
            handleResize () {
                this.$nextTick(() => {
                    this.listWidth = parseInt(getStyle(this.$el, 'width'));
                    this.updatePos();
                });
            },
            add (offset) {
                let index = this.currentIndex;
                index += offset;
                while (index < 0) index += this.slides.length;
                index = index % this.slides.length;
                this.$emit('on-change', this.currentIndex, index);
                this.currentIndex = index;
            },
            dotsEvent (event, n) {
                if (event === this.trigger) {
                    this.$emit('on-change', this.currentIndex, n);
                    this.currentIndex = n;
                }
            },
            setAutoplay () {
                window.clearInterval(this.timer);
                if (this.autoplay) {
                    this.timer = window.setInterval(() => {
                        this.add(1);
                    }, this.autoplaySpeed);
                }
            }
        },
        compiled () {
            this.updateSlides(true);
        },
        watch: {
            autoplay () {
                this.setAutoplay();
            },
            autoplaySpeed () {
                this.setAutoplay();
            },
            currentIndex () {
                this.$nextTick(() => {
                    this.trackLeft = this.currentIndex * this.listWidth;
                });
            }
        },
        ready () {
            this.handleResize();
            this.setAutoplay();
            window.addEventListener('resize', this.handleResize, false);
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.handleResize, false);
        }
    };
</script>
