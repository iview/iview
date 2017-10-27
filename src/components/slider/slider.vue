<template>
    <div :class="classes">
        <Input-number
            v-if="!range && showInput"
            :min="min"
            :max="max"
            :step="step"
            :value="currentValue"
            :disabled="disabled"
            @on-change="handleInputChange"></Input-number>
        <div :class="[prefixCls + '-wrap']" ref="slider" @click.self="sliderClick">
            <input type="hidden" :name="name" :value="currentValue">
            <template v-if="showStops">
                <div :class="[prefixCls + '-stop']" v-for="item in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick"></div>
            </template>
            <div :class="[prefixCls + '-bar']" :style="barStyle" @click.self="sliderClick"></div>
            <template v-if="range">
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: firstPosition + '%'}"
                    @mousedown="onFirstButtonDown">
                    <Tooltip :controlled="firstDragging" placement="top" :content="tipFormat(currentValue[0])" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip">
                        <div :class="button1Classes"></div>
                    </Tooltip>
                </div>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: secondPosition + '%'}"
                    @mousedown="onSecondButtonDown">
                    <Tooltip :controlled="secondDragging" placement="top" :content="tipFormat(currentValue[1])" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip2">
                        <div :class="button2Classes"></div>
                    </Tooltip>
                </div>
            </template>
            <template v-else>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: singlePosition + '%'}"
                    @mousedown="onSingleButtonDown">
                    <Tooltip :controlled="dragging" placement="top" :content="tipFormat(currentValue)" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip">
                        <div :class="buttonClasses"></div>
                    </Tooltip>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import InputNumber from '../../components/input-number/input-number.vue';
    import Tooltip from '../../components/tooltip/tooltip.vue';
    import { getStyle, oneOf } from '../../utils/assist';
    import { on, off } from '../../utils/dom';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-slider';

    export default {
        name: 'Slider',
        mixins: [ Emitter ],
        components: { InputNumber, Tooltip },
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            range: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Number, Array],
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showInput: {
                type: Boolean,
                default: false
            },
            showStops: {
                type: Boolean,
                default: false
            },
            tipFormat: {
                type: Function,
                default (val) {
                    return val;
                }
            },
            showTip: {
                type: String,
                default: 'hover',
                validator (value) {
                    return oneOf(value, ['hover', 'always', 'never']);
                }
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                currentValue: this.value,
                dragging: false,
                firstDragging: false,
                secondDragging: false,
                startX: 0,
                currentX: 0,
                startPos: 0,
                newPos: null,
                oldSingleValue: this.value,
                oldFirstValue: this.value[0],
                oldSecondValue: this.value[1],
                singlePosition: (this.value - this.min) / (this.max - this.min) * 100,
                firstPosition: (this.value[0] - this.min) / (this.max - this.min) * 100,
                secondPosition: (this.value[1] - this.min) / (this.max - this.min) * 100
            };
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.$nextTick(() => {
                    this.$refs.tooltip.updatePopper();
                    if (this.range) {
                        this.$refs.tooltip2.updatePopper();
                    }
                });
                this.updateValue(val);
                this.$emit('input', val);
                this.$emit('on-input', val);
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-input`]: this.showInput && !this.range,
                        [`${prefixCls}-range`]: this.range,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            buttonClasses () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.dragging
                    }
                ];
            },
            button1Classes () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.firstDragging
                    }
                ];
            },
            button2Classes () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.secondDragging
                    }
                ];
            },
            barStyle () {
                let style;

                if (this.range) {
                    style = {
                        width: (this.currentValue[1] - this.currentValue[0]) / (this.max - this.min) * 100 + '%',
                        left: (this.currentValue[0] - this.min) / (this.max - this.min) * 100 + '%'
                    };
                } else {
                    style = {
                        width: (this.currentValue - this.min) / (this.max - this.min) * 100 + '%'
                    };
                }

                return style;
            },
            stops() {
                let stopCount = (this.max - this.min) / this.step;
                let result = [];
                let stepWidth = 100 * this.step / (this.max - this.min);
                for (let i = 1; i < stopCount; i++) {
                    result.push(i * stepWidth);
                }
                return result;
            },
            sliderWidth () {
                return parseInt(getStyle(this.$refs.slider, 'width'), 10);
            },
            tipDisabled () {
                return this.tipFormat(this.currentValue[0]) === null || this.showTip === 'never';
            }
        },
        methods: {
            updateValue (val, init = false) {
                if (this.range) {
                    let value = [...val];
                    if (init) {
                        if (value[0] > value[1]) {
                            value = [this.min, this.max];
                        }
                    } else {
                        if (value[0] > value[1]) {
                            value[0] = value[1];
                        }
                    }
                    if (value[0] < this.min) {
                        value[0] = this.min;
                    }
                    if (value[0] > this.max) {
                        value[0] = this.max;
                    }
                    if (value[1] < this.min) {
                        value[1] = this.min;
                    }
                    if (value[1] > this.max) {
                        value[1] = this.max;
                    }
                    if (this.value[0] === value[0] && this.value[1] === value[1]) {
                        this.setFirstPosition(this.currentValue[0]);
                        this.setSecondPosition(this.currentValue[1]);
                        return;
                    }

                    this.currentValue = value;
                    this.setFirstPosition(this.currentValue[0]);
                    this.setSecondPosition(this.currentValue[1]);
                } else {
                    if (val < this.min) {
                        this.currentValue = this.min;
                    }
                    if (val > this.max) {
                        this.currentValue = this.max;
                    }
                    this.setSinglePosition(this.currentValue);
                }
            },
            sliderClick (event) {
                if (this.disabled) return;
                const currentX = event.clientX;
                const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
                const newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;

                if (this.range) {
                    let type = '';
                    if (newPos <= this.firstPosition) {
                        type = 'First';
                    } else if (newPos >= this.secondPosition) {
                        type = 'Second';
                    } else {
                        if ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) {
                            type = 'First';
                        } else {
                            type = 'Second';
                        }
                    }
                    this[`change${type}Position`](newPos);
                } else {
                    this.changeSinglePosition(newPos);
                }
            },
            // for single use
            onSingleButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onSingleDragStart(event);
//                window.addEventListener('mousemove', this.onSingleDragging);
//                window.addEventListener('mouseup', this.onSingleDragEnd);
                on(window, 'mousemove', this.onSingleDragging);
                on(window, 'mouseup', this.onSingleDragEnd);
            },
            onSingleDragStart (event) {
                this.dragging = false;
                this.startX = event.clientX;
                this.startPos = parseInt(this.singlePosition, 10);
            },
            onSingleDragging (event) {
                this.dragging = true;
                if (this.dragging) {
                    this.$refs.tooltip.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeSinglePosition(this.newPos);
                }
            },
            onSingleDragEnd () {
                if (this.dragging) {
                    this.dragging = false;
                    this.$refs.tooltip.visible = false;
                    this.changeSinglePosition(this.newPos);
//                    window.removeEventListener('mousemove', this.onSingleDragging);
//                    window.removeEventListener('mouseup', this.onSingleDragEnd);
                }
                off(window, 'mousemove', this.onSingleDragging);
                off(window, 'mouseup', this.onSingleDragEnd);
            },
            changeSinglePosition (newPos) {
                if (newPos < 0) {
                    newPos = 0;
                } else if (newPos > 100) {
                    newPos = 100;
                }
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);

                this.currentValue = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
                this.setSinglePosition(this.currentValue);
                if (!this.dragging) {
                    if (this.currentValue !== this.oldSingleValue) {
                        this.$emit('on-change', this.currentValue);
                        this.dispatch('FormItem', 'on-form-change', this.currentValue);
                        this.oldSingleValue = this.currentValue;
                    }
                }
            },
            setSinglePosition (val) {
                this.singlePosition = (val - this.min) / (this.max - this.min) * 100;
            },
            handleInputChange (val) {
                this.currentValue = val;
                this.setSinglePosition(val);
                this.$emit('on-change', this.currentValue);
                this.dispatch('FormItem', 'on-form-change', this.currentValue);
            },
            // for range use first
            onFirstButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onFirstDragStart(event);
//                window.addEventListener('mousemove', this.onFirstDragging);
//                window.addEventListener('mouseup', this.onFirstDragEnd);
                on(window, 'mousemove', this.onFirstDragging);
                on(window, 'mouseup', this.onFirstDragEnd);
            },
            onFirstDragStart (event) {
                this.firstDragging = false;
                this.startX = event.clientX;
                this.startPos = parseInt(this.firstPosition, 10);
            },
            onFirstDragging (event) {
                this.firstDragging = true;
                if (this.firstDragging) {
                    this.$refs.tooltip.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeFirstPosition(this.newPos);
                }
            },
            onFirstDragEnd () {
                if (this.firstDragging) {
                    this.firstDragging = false;
                    this.$refs.tooltip.visible = false;
                    this.changeFirstPosition(this.newPos);
//                    window.removeEventListener('mousemove', this.onFirstDragging);
//                    window.removeEventListener('mouseup', this.onFirstDragEnd);
                }
                off(window, 'mousemove', this.onFirstDragging);
                off(window, 'mouseup', this.onFirstDragEnd);
            },
            changeFirstPosition (newPos) {
                if (newPos < 0) {
                    newPos = 0;
                } else if (newPos > this.secondPosition) {
                    newPos = this.secondPosition;
                }
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);

                this.currentValue = [Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min), this.currentValue[1]];
                this.setFirstPosition(this.currentValue[0]);
                if (!this.firstDragging) {
                    if (this.currentValue[0] !== this.oldFirstValue) {
                        this.$emit('on-change', this.currentValue);
                        this.dispatch('FormItem', 'on-form-change', this.currentValue);
                        this.oldFirstValue = this.currentValue[0];
                    }
                }
            },
            setFirstPosition (val) {
                this.firstPosition = (val - this.min) / (this.max - this.min) * 100;
            },
            // for range use second
            onSecondButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onSecondDragStart(event);
//                window.addEventListener('mousemove', this.onSecondDragging);
//                window.addEventListener('mouseup', this.onSecondDragEnd);
                on(window, 'mousemove', this.onSecondDragging);
                on(window, 'mouseup', this.onSecondDragEnd);
            },
            onSecondDragStart (event) {
                this.secondDragging = false;
                this.startX = event.clientX;
                this.startPos = parseInt(this.secondPosition, 10);
            },
            onSecondDragging (event) {
                this.secondDragging = true;
                if (this.secondDragging) {
                    this.$refs.tooltip2.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeSecondPosition(this.newPos);
                }
            },
            onSecondDragEnd () {
                if (this.secondDragging) {
                    this.secondDragging = false;
                    this.$refs.tooltip2.visible = false;
                    this.changeSecondPosition(this.newPos);
//                    window.removeEventListener('mousemove', this.onSecondDragging);
//                    window.removeEventListener('mouseup', this.onSecondDragEnd);
                }
                off(window, 'mousemove', this.onSecondDragging);
                off(window, 'mouseup', this.onSecondDragEnd);
            },
            changeSecondPosition (newPos) {
                if (newPos > 100) {
                    newPos = 100;
                } else if (newPos < this.firstPosition) {
                    newPos = this.firstPosition;
                }
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);

                this.currentValue = [this.currentValue[0], Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min)];
                this.setSecondPosition(this.currentValue[1]);
                if (!this.secondDragging) {
                    if (this.currentValue[1] !== this.oldSecondValue) {
                        this.$emit('on-change', this.currentValue);
                        this.dispatch('FormItem', 'on-form-change', this.currentValue);
                        this.oldSecondValue = this.currentValue[1];
                    }
                }
            },
            setSecondPosition (val) {
                this.secondPosition = (val - this.min) / (this.max - this.min) * 100;
            }
        },
        mounted () {
            if (this.range) {
                const isArray = Array.isArray(this.currentValue);
                if (!isArray || (isArray && this.currentValue.length != 2) || (isArray && (isNaN(this.currentValue[0]) || isNaN(this.currentValue[1])))) {
                    this.currentValue = [this.min, this.max];
                } else {
                    this.updateValue(this.currentValue, true);
                }
            } else {
                if (typeof this.currentValue !== 'number') {
                    this.currentValue = this.min;
                }
                this.updateValue(this.currentValue);
            }
        }
    };
</script>
