<template>
    <div :class="classes">
        <Input-number
            v-if="!range && showInput"
            :min="min"
            :size="inputSize"
            :max="max"
            :step="step"
            :value="exportValue[0]"
            :disabled="disabled"
            @on-change="handleInputChange"></Input-number>
        <div
            :class="[prefixCls + '-wrap']"
            ref="slider" @click.self="sliderClick"
        >
            <input type="hidden" :name="name" :value="exportValue">
            <template v-if="showStops">
                <div
                    :class="[prefixCls + '-stop']"
                    v-for="item in stops"
                    :style="{ 'left': item + '%' }"
                    @click.self="sliderClick"
                ></div>
            </template>
            <div
                :class="[prefixCls + '-bar']"
                :style="barStyle"
                @click.self="sliderClick"></div>
            <div
                :class="[prefixCls + '-button-wrap']"
                :style="{left: minPosition + '%'}"
                @touchstart="onPointerDown($event, 'min')"
                @mousedown="onPointerDown($event, 'min')">
                <Tooltip
                    :controlled="pointerDown === 'min'"
                    placement="top"
                    :content="tipFormat(exportValue[0])"
                    :disabled="tipDisabled"
                    :always="showTip === 'always'"
                    ref="minTooltip"
                >
                    <div
                        :class="minButtonClasses"
                        tabindex="0"
                        @focus="handleFocus('min')"
                        @blur="handleBlur('min')"
                        @keydown.left="onKeyLeft($event, 'min')"
                        @keydown.down="onKeyLeft($event, 'min')"
                        @keydown.right="onKeyRight($event, 'min')"
                        @keydown.up="onKeyRight($event, 'min')"
                    ></div>
                </Tooltip>
            </div>
            <div v-if="range"
                 :class="[prefixCls + '-button-wrap']"
                 :style="{left: maxPosition + '%'}"
                 @touchstart="onPointerDown($event, 'max')"
                 @mousedown="onPointerDown($event, 'max')">
                <Tooltip
                    :controlled="pointerDown === 'max'"
                    placement="top"
                    :content="tipFormat(exportValue[1])"
                    :disabled="tipDisabled"
                    :always="showTip === 'always'"
                    ref="maxTooltip"
                >
                    <div
                        :class="maxButtonClasses"
                        tabindex="0"
                        @focus="handleFocus('max')"
                        @blur="handleBlur('max')"
                        @keydown.left="onKeyLeft($event, 'max')"
                        @keydown.down="onKeyLeft($event, 'max')"
                        @keydown.right="onKeyRight($event, 'max')"
                        @keydown.up="onKeyRight($event, 'max')"
                    ></div>
                </Tooltip>
            </div>
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
            inputSize: {
                type: String,
                default: 'default',
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
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
            const val = this.checkLimits(Array.isArray(this.value) ? this.value : [this.value]);
            return {
                prefixCls: prefixCls,
                currentValue: val,
                dragging: false,
                pointerDown: '',
                startX: 0,
                currentX: 0,
                startPos: 0,
                oldValue: [...val],
                valueIndex: {
                    min: 0,
                    max: 1,
                },
            };
        },
        watch: {
            value (val) {
                val = this.checkLimits(Array.isArray(val) ? val : [val]);
                if (val[0] !== this.currentValue[0] || val[1] !== this.currentValue[1]) {
                    this.currentValue = val;
                }
            },
            exportValue (values) {
                this.$nextTick(() => {
                    this.$refs.minTooltip.updatePopper();
                    if (this.range) {
                        this.$refs.maxTooltip.updatePopper();
                    }
                });
                const value = this.range ? values : values[0];
                this.$emit('input', value);
                this.$emit('on-input', value);
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
            minButtonClasses () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.pointerDown === 'min'
                    }
                ];
            },
            maxButtonClasses () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.pointerDown === 'max'
                    }
                ];
            },
            exportValue(){
                const decimalCases = (String(this.step).split('.')[1] || '').length;
                return this.currentValue.map(nr => Number(nr.toFixed(decimalCases)));
            },
            minPosition () {
                const val = this.currentValue;
                return (val[0] - this.min) / this.valueRange * 100;
            },
            maxPosition: function () {
                const val = this.currentValue;

                return (val[1] - this.min) / this.valueRange * 100;
            },
            barStyle () {
                const style = {
                    width: (this.currentValue[0] - this.min) / this.valueRange * 100 + '%'
                };

                if (this.range) {
                    style.left = (this.currentValue[0] - this.min) / this.valueRange * 100 + '%';
                    style.width = (this.currentValue[1] - this.currentValue[0]) / this.valueRange * 100 + '%';
                }

                return style;
            },
            stops () {
                let stopCount = this.valueRange / this.step;
                let result = [];
                let stepWidth = 100 * this.step / this.valueRange;
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
            },
            valueRange(){
                return this.max - this.min;
            }
        },
        methods: {
            getPointerX (e) {
                return e.type.indexOf('touch') !== -1 ? e.touches[0].clientX : e.clientX;
            },
            checkLimits ([min, max]) {
                min = Math.max(this.min, min);
                min = Math.min(this.max, min);

                max = Math.max(this.min, min, max);
                max = Math.min(this.max, max);
                return [min, max];
            },
            getCurrentValue (event, type) {
                if (this.disabled) {
                    return;
                }

                const index = this.valueIndex[type];
                if (typeof index === 'undefined') {
                    return;
                }

                return this.currentValue[index];
            },
            onKeyLeft (event, type) {
                const value = this.getCurrentValue(event, type);
                if (Number.isFinite(value)) {
                    this.changeButtonPosition(value - this.step, type);
                }
            },
            onKeyRight (event, type) {
                const value = this.getCurrentValue(event, type);
                if (Number.isFinite(value)) {
                    this.changeButtonPosition(value + this.step, type);
                }
            },
            onPointerDown (event, type) {
                if (this.disabled) return;
                event.preventDefault();
                this.pointerDown = type;

                this.onPointerDragStart(event);
                on(window, 'mousemove', this.onPointerDrag);
                on(window, 'touchmove', this.onPointerDrag);
                on(window, 'mouseup', this.onPointerDragEnd);
                on(window, 'touchend', this.onPointerDragEnd);
            },
            onPointerDragStart (event) {
                this.dragging = false;
                this.startX = this.getPointerX(event);
                this.startPos = (this[`${this.pointerDown}Position`] * this.valueRange / 100) + this.min;
            },
            onPointerDrag (event) {
                this.dragging = true;
                this.$refs[`${this.pointerDown}Tooltip`].visible = true;
                this.currentX = this.getPointerX(event);
                const diff = (this.currentX - this.startX) / this.sliderWidth * this.valueRange;

                this.changeButtonPosition(this.startPos + diff);
            },
            onPointerDragEnd () {
                if (this.dragging) {
                    this.dragging = false;
                    this.$refs[`${this.pointerDown}Tooltip`].visible = false;
                    this.emitChange();
                }

                this.pointerDown = '';
                off(window, 'mousemove', this.onPointerDrag);
                off(window, 'touchmove', this.onPointerDrag);
                off(window, 'mouseup', this.onPointerDragEnd);
                off(window, 'touchend', this.onPointerDragEnd);
            },
            changeButtonPosition (newPos, forceType) {
                const type = forceType || this.pointerDown;
                const index = type === 'min' ? 0 : 1;
                if (type === 'min') newPos = this.checkLimits([newPos, this.maxPosition])[0];
                else newPos = this.checkLimits([this.minPosition, newPos])[1];

                const modulus = this.handleDecimal(newPos,this.step);
                const value = this.currentValue;
                value[index] = newPos - modulus;
                this.currentValue = [...value];

                if (!this.dragging) {
                    if (this.currentValue[index] !== this.oldValue[index]) {
                        this.emitChange();
                        this.oldValue[index] = this.currentValue[index];
                    }
                }
            },
            handleDecimal(pos,step){
                if(step<1){
                    let sl = step.toString(),
                        multiple = 1,
                        m;
                    try {
                        m = sl.split('.')[1].length;
                    } catch (e){
                        m = 0;
                    }
                    multiple = Math.pow(10,m);
                    return (pos * multiple) % (step * multiple) / multiple;
                }else return  pos % step;
            },
            emitChange(){
                const value = this.range ? this.exportValue : this.exportValue[0];
                this.$emit('on-change', value);
                this.dispatch('FormItem', 'on-form-change', value);
            },

            sliderClick (event) {
                if (this.disabled) return;
                const currentX = this.getPointerX(event);
                const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
                let newPos = ((currentX - sliderOffsetLeft) / this.sliderWidth * this.valueRange) + this.min;

                if (!this.range || newPos <= this.minPosition) this.changeButtonPosition(newPos, 'min');
                else if (newPos >= this.maxPosition) this.changeButtonPosition(newPos, 'max');
                else this.changeButtonPosition(newPos, ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) ? 'min' : 'max');
            },

            handleInputChange (val) {
                this.currentValue = [val, this.currentValue[1]];
                this.emitChange();
            },

            handleFocus (type) {
                this.$refs[`${type}Tooltip`].handleShowPopper();
            },

            handleBlur (type) {
                this.$refs[`${type}Tooltip`].handleClosePopper();
            }
        },
        mounted () {
            // #2852
            this.$on('on-visible-change', (val) => {
                if (val && this.showTip === 'always') {
                    this.$refs.minTooltip.doDestroy();
                    if (this.range) {
                        this.$refs.maxTooltip.doDestroy();
                    }
                    this.$nextTick(() => {
                        this.$refs.minTooltip.updatePopper();
                        if (this.range) {
                            this.$refs.maxTooltip.updatePopper();
                        }
                    });
                }
            });
        }
    };
</script>
