<template>
    <div ref="outerWrapper" :class="wrapperClasses">
        <div v-if="isHorizontal" :class="`${prefix}-horizontal`">
            <div :style="{right: `${anotherOffset}%`}" class="left-pane" :class="paneClasses">
                <slot name="left"/>
            </div>
            <div :class="`${prefix}-trigger-con`" :style="{left: `${offset}%`}" @mousedown="handleMousedown">
                <slot name="trigger">
                    <trigger mode="vertical"/>
                </slot>
            </div>
            <div :style="{left: `${offset}%`}" class="right-pane" :class="paneClasses">
                <slot name="right"/>
            </div>
        </div>
        <div v-else :class="`${prefix}-vertical`">
            <div :style="{bottom: `${anotherOffset}%`}" class="top-pane" :class="paneClasses">
                <slot name="top"/>
            </div>
            <div :class="`${prefix}-trigger-con`" :style="{top: `${offset}%`}" @mousedown="handleMousedown">
                <slot name="trigger">
                    <trigger mode="horizontal"/>
                </slot>
            </div>
            <div :style="{top: `${offset}%`}" class="bottom-pane" :class="paneClasses">
                <slot name="bottom"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {oneOf} from '../../utils/assist';
    import {on, off} from '../../utils/dom';
    import Trigger from './trigger.vue';
    export default {
        name: 'Split',
        components: {
            Trigger
        },
        props: {
            value: {
                type: [Number, String],
                default: 0.5
            },
            mode: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            min: {
                type: [Number, String],
                default: '40px'
            },
            max: {
                type: [Number, String],
                default: '40px'
            }
        },
        /**
         * Events
         * @on-move-start
         * @on-moving 返回值：事件对象，但是在事件对象中加入了两个参数：atMin(当前是否在最小值处), atMax(当前是否在最大值处)
         * @on-move-end
         */
        data () {
            return {
                prefix: 'ivu-split',
                offset: 0,
                oldOffset: 0,
                isMoving: false,
                computedMin: 0,
                computedMax: 0,
                currentValue: 0.5
            };
        },
        computed: {
            wrapperClasses () {
                return [
                    `${this.prefix}-wrapper`,
                    this.isMoving ? 'no-select' : ''
                ];
            },
            paneClasses () {
                return [
                    `${this.prefix}-pane`,
                    {
                        [`${this.prefix}-pane-moving`]: this.isMoving
                    }
                ];
            },
            isHorizontal () {
                return this.mode === 'horizontal';
            },
            anotherOffset () {
                return 100 - this.offset;
            },
            valueIsPx () {
                return typeof this.value === 'string';
            },
            offsetSize () {
                return this.isHorizontal ? 'offsetWidth' : 'offsetHeight';
            }
        },
        methods: {
            px2percent (numerator, denominator) {
                return parseFloat(numerator) / parseFloat(denominator);
            },
            getComputedThresholdValue (type) {
                let size = this.$refs.outerWrapper[this.offsetSize];
                if (this.valueIsPx) return typeof this[type] === 'string' ? this[type] : size * this[type];
                else return typeof this[type] === 'string' ? this.px2percent(this[type], size) : this[type];
            },
            getMin (value1, value2) {
                if (this.valueIsPx) return `${Math.min(parseFloat(value1), parseFloat(value2))}px`;
                else return Math.min(value1, value2);
            },
            getMax (value1, value2) {
                if (this.valueIsPx) return `${Math.max(parseFloat(value1), parseFloat(value2))}px`;
                else return Math.max(value1, value2);
            },
            getAnotherOffset (value) {
                let res = 0;
                if (this.valueIsPx) res = `${this.$refs.outerWrapper[this.offsetSize] - parseFloat(value)}px`;
                else res = 1 - value;
                return res;
            },
            handleMove (e) {
                let pageOffset = this.isHorizontal ? e.pageX : e.pageY;
                let offset = pageOffset - this.initOffset;
                let outerWidth = this.$refs.outerWrapper[this.offsetSize];
                let value = this.valueIsPx ? `${parseFloat(this.oldOffset) + offset}px` : (this.px2percent(outerWidth * this.oldOffset + offset, outerWidth));
                let anotherValue = this.getAnotherOffset(value);
                if (parseFloat(value) <= parseFloat(this.computedMin)) value = this.getMax(value, this.computedMin);
                if (parseFloat(anotherValue) <= parseFloat(this.computedMax)) value = this.getAnotherOffset(this.getMax(anotherValue, this.computedMax));
                e.atMin = this.value === this.computedMin;
                e.atMax = this.valueIsPx ? this.getAnotherOffset(this.value) === this.computedMax : this.getAnotherOffset(this.value).toFixed(5) === this.computedMax.toFixed(5);
                this.$emit('input', value);
                this.$emit('on-moving', e);
            },
            handleUp () {
                this.isMoving = false;
                off(document, 'mousemove', this.handleMove);
                off(document, 'mouseup', this.handleUp);
                this.$emit('on-move-end');
            },
            handleMousedown (e) {
                this.initOffset = this.isHorizontal ? e.pageX : e.pageY;
                this.oldOffset = this.value;
                this.isMoving = true;
                on(document, 'mousemove', this.handleMove);
                on(document, 'mouseup', this.handleUp);
                this.$emit('on-move-start');
            },
            computeOffset(){
                this.$nextTick(() => {
                    this.computedMin = this.getComputedThresholdValue('min');
                    this.computedMax = this.getComputedThresholdValue('max');
                    let value = this.valueIsPx ? this.px2percent(this.value, this.$refs.outerWrapper[this.offsetSize]) : this.value;
                    let anotherValue = this.getAnotherOffset(value);
                    if (parseFloat(value) <= parseFloat(this.computedMin)) value = this.getMax(value, this.computedMin);
                    if (parseFloat(anotherValue) <= parseFloat(this.computedMax)) value = this.getAnotherOffset(this.getMax(anotherValue, this.computedMax));
                    this.offset = value * 10000 / 100;
                    this.currentValue = value;
                    this.$emit('input', value);
                });
            }
        },
        watch: {
            value (val) {
                if (val !== this.currentValue) {
                    this.currentValue = val;
                    this.computeOffset();
                }
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.computeOffset();
            });
            on(window, 'resize', this.computeOffset);
        },
        beforeDestroy () {
            off(window, 'resize', this.computeOffset);
        }
    };
</script>
