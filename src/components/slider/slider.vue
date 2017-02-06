<template>
    <div :class="classes">
        <Input-number
            v-if="!range && showInput"
            :min="min"
            :max="max"
            :step="step"
            :value="value"
            :disabled="disabled"
            @on-change="handleInputChange"></Input-number>
        <div :class="[prefixCls + '-wrap']" v-el:slider @click.self="sliderClick">
            <template v-if="showStops">
                <div :class="[prefixCls + '-stop']" v-for="item in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick"></div>
            </template>
            <div :class="[prefixCls + '-bar']" :style="barStyle" @click.self="sliderClick"></div>
            <template v-if="range">
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: firstPosition + '%'}"
                    @mousedown="onFirstButtonDown">
                    <Tooltip :controlled="firstDragging" placement="top" :content="tipFormat(value[0])" :disabled="tipFormat(value[0]) === null" v-ref:tooltip>
                        <div :class="button1Classes"></div>
                    </Tooltip>
                </div>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: secondPosition + '%'}"
                    @mousedown="onSecondButtonDown">
                    <Tooltip :controlled="secondDragging" placement="top" :content="tipFormat(value[1])" :disabled="tipFormat(value[1]) === null" v-ref:tooltip2>
                        <div :class="button2Classes"></div>
                    </Tooltip>
                </div>
            </template>
            <template v-else>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: singlePosition + '%'}"
                    @mousedown="onSingleButtonDown">
                    <Tooltip :controlled="dragging" placement="top" :content="tipFormat(value)" :disabled="tipFormat(value) === null" v-ref:tooltip>
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
    import { getStyle } from '../../utils/assist';

    const prefixCls = 'ivu-slider';

    export default {
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
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
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
                        width: (this.value[1] - this.value[0]) / (this.max - this.min) * 100 + '%',
                        left: (this.value[0] - this.min) / (this.max - this.min) * 100 + '%'
                    };
                } else {
                    style = {
                        width: (this.value - this.min) / (this.max - this.min) * 100 + '%'
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
                return parseInt(getStyle(this.$els.slider, 'width'), 10);
            }
        },
        watch: {
            value (val) {
                this.$nextTick(() => {
                    this.$refs.tooltip.updatePopper();
                    if (this.range) {
                        this.$refs.tooltip2.updatePopper();
                    }
                });
                this.updateValue(val);
                this.$emit('on-input', this.value);
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
                    if (this.value[0] === value[0] && this.value[1] === value[1]) return;

                    this.value = value;
                    this.setFirstPosition(this.value[0]);
                    this.setSecondPosition(this.value[1]);
                } else {
                    if (val < this.min) {
                        this.value = this.min;
                    }
                    if (val > this.max) {
                        this.value = this.max;
                    }
                    this.setSinglePosition(this.value);
                }
            },
            sliderClick (event) {
                if (this.disabled) return;
                const currentX = event.clientX;
                const sliderOffsetLeft = this.$els.slider.getBoundingClientRect().left;
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
                window.addEventListener('mousemove', this.onSingleDragging);
                window.addEventListener('mouseup', this.onSingleDragEnd);
            },
            onSingleDragStart (event) {
                this.dragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.singlePosition, 10);
            },
            onSingleDragging (event) {
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
                    window.removeEventListener('mousemove', this.onSingleDragging);
                    window.removeEventListener('mouseup', this.onSingleDragEnd);
                }
            },
            changeSinglePosition (newPos) {
                if (newPos >= 0 && (newPos <= 100)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.value = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
                    this.setSinglePosition(this.value);
                    if (!this.dragging) {
                        if (this.value !== this.oldSingleValue) {
                            this.$emit('on-change', this.value);
                            this.$dispatch('on-form-change', this.value);
                            this.oldSingleValue = this.value;
                        }
                    }
                }
            },
            setSinglePosition (val) {
                this.singlePosition = (val - this.min) / (this.max - this.min) * 100;
            },
            handleInputChange (val) {
                this.value = val;
                this.setSinglePosition(val);
                this.$emit('on-change', this.value);
                this.$dispatch('on-form-change', this.value);
            },
            // for range use first
            onFirstButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onFirstDragStart(event);
                window.addEventListener('mousemove', this.onFirstDragging);
                window.addEventListener('mouseup', this.onFirstDragEnd);
            },
            onFirstDragStart (event) {
                this.firstDragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.firstPosition, 10);
            },
            onFirstDragging (event) {
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
                    window.removeEventListener('mousemove', this.onFirstDragging);
                    window.removeEventListener('mouseup', this.onFirstDragEnd);
                }
            },
            changeFirstPosition (newPos) {
                if (newPos >= 0 && (newPos <= this.secondPosition)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.value = [Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min), this.value[1]];
                    this.setFirstPosition(this.value[0]);
                    if (!this.firstDragging) {
                        if (this.value[0] !== this.oldFirstValue) {
                            this.$emit('on-change', this.value);
                            this.$dispatch('on-form-change', this.value);
                            this.oldFirstValue = this.value[0];
                        }
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
                window.addEventListener('mousemove', this.onSecondDragging);
                window.addEventListener('mouseup', this.onSecondDragEnd);
            },
            onSecondDragStart (event) {
                this.secondDragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.secondPosition, 10);
            },
            onSecondDragging (event) {
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
                    window.removeEventListener('mousemove', this.onSecondDragging);
                    window.removeEventListener('mouseup', this.onSecondDragEnd);
                }
            },
            changeSecondPosition (newPos) {
                if (newPos >= this.firstPosition && (newPos <= 100)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.value = [this.value[0], Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min)];
                    this.setSecondPosition(this.value[1]);
                    if (!this.secondDragging) {
                        if (this.value[1] !== this.oldSecondValue) {
                            this.$emit('on-change', this.value);
                            this.$dispatch('on-form-change', this.value);
                            this.oldSecondValue = this.value[1];
                        }
                    }
                }
            },
            setSecondPosition (val) {
                this.secondPosition = (val - this.min) / (this.max - this.min) * 100;
            }
        },
        ready () {
            if (this.range) {
                const isArray = Array.isArray(this.value);
                if (!isArray || (isArray && this.value.length != 2) || (isArray && (isNaN(this.value[0]) || isNaN(this.value[1])))) {
                    this.value = [this.min, this.max];
                } else {
                    this.updateValue(this.value, true);
                }
            } else {
                if (typeof this.value !== 'number') {
                    this.value = this.min;
                }
                this.updateValue(this.value);
            }
        }
    };
</script>
