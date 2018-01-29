<template>
    <div :class="classes">
        <button :class="arrowClasses" class="left" @click="arrowEvent(-1)">
            <Icon type="chevron-left"></Icon>
        </button>
        <div :class="[prefixCls + '-list']">
            <div :class="[prefixCls + '-track', showCopyTrack ? '' : 'higher']" :style="trackStyles" ref="originTrack">
                <slot></slot>
            </div>
            <div :class="[prefixCls + '-track', showCopyTrack ? 'higher' : '']" :style="copyTrackStyles" ref="copyTrack" v-if="loop">
            </div>
        </div>
        <button :class="arrowClasses" class="right" @click="arrowEvent(1)">
            <Icon type="chevron-right"></Icon>
        </button>
        <ul :class="dotsClasses">
            <template v-for="n in slides.length">
                <li :class="[n - 1 === currentIndex ? prefixCls + '-active' : '']"
                    @click="dotsEvent('click', n - 1)"
                    @mouseover="dotsEvent('hover', n - 1)">
                    <button :class="[radiusDot ? 'radius' : '']"></button>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import { getStyle, oneOf } from '../../utils/assist';
    import { on, off } from '../../utils/dom';

    const prefixCls = 'ivu-carousel';

    export default {
        name: 'Carousel',
        components: { Icon },
        props: {
            arrow: {
                type: String,
                default: 'hover',
                validator (value) {
                    return oneOf(value, ['hover', 'always', 'never']);
                }
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            autoplaySpeed: {
                type: Number,
                default: 2000
            },
            loop: {
                type: Boolean,
                default: false
            },
            easing: {
                type: String,
                default: 'ease'
            },
            dots: {
                type: String,
                default: 'inside',
                validator (value) {
                    return oneOf(value, ['inside', 'outside', 'none']);
                }
            },
            radiusDot: {
                type: Boolean,
                default: false
            },
            trigger: {
                type: String,
                default: 'click',
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                }
            },
            value: {
                type: Number,
                default: 0
            },
            height: {
                type: [String, Number],
                default: 'auto',
                validator (value) {
                    return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                listWidth: 0,
                trackWidth: 0,
                trackOffset: 0,
                trackCopyOffset: 0,
                showCopyTrack: false,
                slides: [],
                slideInstances: [],
                timer: null,
                ready: false,
                currentIndex: this.value,
                trackIndex: this.value,
                copyTrackIndex: this.value,
                hideTrackPos: -1, // 默认左滑
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            trackStyles () {
                return {
                    width: `${this.trackWidth}px`,
                    transform: `translate3d(${-this.trackOffset}px, 0px, 0px)`,
                    transition: `transform 500ms ${this.easing}`
                };
            },
            copyTrackStyles () {
                return {
                    width: `${this.trackWidth}px`,
                    transform: `translate3d(${-this.trackCopyOffset}px, 0px, 0px)`,
                    transition: `transform 500ms ${this.easing}`,
                    position: 'absolute',
                    top: 0
                };
            },
            arrowClasses () {
                return [
                    `${prefixCls}-arrow`,
                    `${prefixCls}-arrow-${this.arrow}`
                ];
            },
            dotsClasses () {
                return [
                    `${prefixCls}-dots`,
                    `${prefixCls}-dots-${this.dots}`
                ];
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

                if (this.slideInstances.length || !this.$children) {
                    this.slideInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            // copy trackDom
            initCopyTrackDom () {
                this.$nextTick(() => {
                    this.$refs.copyTrack.innerHTML = this.$refs.originTrack.innerHTML;
                });
            },
            updateSlides (init) {
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
                    child.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
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
                    this.updateOffset();
                });
            },
            handleResize () {
                this.listWidth = parseInt(getStyle(this.$el, 'width'));
                this.updatePos();
                this.updateOffset();
            },
            updateTrackPos (index) {
                if (this.showCopyTrack) {
                    this.trackIndex = index;
                } else {
                    this.copyTrackIndex = index;
                }
            },
            updateTrackIndex (index) {
                if (this.showCopyTrack) {
                    this.copyTrackIndex = index;
                } else {
                    this.trackIndex = index;
                }
            },
            add (offset) {
                // 获取单个轨道的图片数
                let slidesLen = this.slides.length;
                // 如果是无缝滚动，需要初始化双轨道位置
                if (this.loop) {
                    if (offset > 0) {
                        // 初始化左滑轨道位置
                        this.hideTrackPos = -1;
                    } else {
                        // 初始化右滑轨道位置
                        this.hideTrackPos = slidesLen;
                    }
                    this.updateTrackPos(this.hideTrackPos);
                }
                // 获取当前展示图片的索引值
                let index =  this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
                index += offset;
                while (index < 0) index += slidesLen;
                if (((offset > 0 && index === slidesLen) || (offset < 0 && index === slidesLen - 1)) && this.loop) {
                    // 极限值（左滑：当前索引为总图片张数， 右滑：当前索引为总图片张数 - 1）切换轨道
                    this.showCopyTrack = !this.showCopyTrack;
                    this.trackIndex += offset;
                    this.copyTrackIndex += offset;
                } else {
                    if (!this.loop) index = index % this.slides.length;
                    this.updateTrackIndex(index);
                }
                this.$emit('input', index === this.slides.length ? 0 : index);
            },
            arrowEvent (offset) {
                this.setAutoplay();
                this.add(offset);
            },
            dotsEvent (event, n) {
                let curIndex = this.showCopyTrack ? this.copyTrackIndex : this.trackIndex;
                if (event === this.trigger && curIndex !== n) {
                    this.updateTrackIndex(n);
                    this.$emit('input', n);
                    // Reset autoplay timer when trigger be activated
                    this.setAutoplay();
                }
            },
            setAutoplay () {
                window.clearInterval(this.timer);
                if (this.autoplay) {
                    this.timer = window.setInterval(() => {
                        this.add(1);
                    }, this.autoplaySpeed);
                }
            },
            updateOffset () {
                this.$nextTick(() => {
                    /* hack: revise copyTrack offset (1px) */
                    let ofs = this.copyTrackIndex > 0 ? -1 : 1;
                    this.trackOffset = this.trackIndex * this.listWidth;
                    this.trackCopyOffset = this.copyTrackIndex * this.listWidth + ofs;
                });
            }
        },
        watch: {
            autoplay () {
                this.setAutoplay();
            },
            autoplaySpeed () {
                this.setAutoplay();
            },
            currentIndex (val, oldVal) {
                this.$emit('on-change', oldVal, val);
            },
            trackIndex () {
                this.updateOffset();
            },
            copyTrackIndex () {
                this.updateOffset();
            },
            height () {
                this.updatePos();
            },
            value (val) {
                this.currentIndex = val;
                this.trackIndex = val;
            }
        },
        mounted () {
            this.updateSlides(true);
            this.handleResize();
            this.setAutoplay();
//            window.addEventListener('resize', this.handleResize, false);
            on(window, 'resize', this.handleResize);
        },
        beforeDestroy () {
//            window.removeEventListener('resize', this.handleResize, false);
            off(window, 'resize', this.handleResize);
        }
    };
</script>
