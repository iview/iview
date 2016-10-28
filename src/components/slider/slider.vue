<template>
    <div :class="classes">
        <Input-number v-if="!range && showInput" :min="min" :max="max" :step="step" :value.sync="value" :disabled="disabled"></Input-number>
        <div :class="[prefixCls + '-wrap']" @click="sliderClick">
            <template v-if="showStops">
                <div :class="[prefixCls + '-stop']" v-for="item in stops" :style="{ 'left': item + '%' }"></div>
            </template>
            <div :class="[prefixCls + '-bar']" :style="barStyle"></div>
            <div :class="[prefixCls + '-button-wrap']" v-if="!range">
                <Tooltip placement="top" :content="tipFormat(value)">
                    <div :class="[prefixCls + '-button']"></div>
                </Tooltip>
            </div>

        </div>
    </div>
</template>
<script>
    import InputNumber from '../../components/input-number/input-number.vue';
    import Tooltip from '../../components/tooltip/tooltip.vue';

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
                prefixCls: prefixCls
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-input`]: this.showInput,
                        [`${prefixCls}-range`]: this.range,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            },
            barStyle () {
                let style;

                if (this.range) {
                    style = {
                        width: (this.value[1] - this.value[0]) / (this.max - this.min) * 100 + '%',
                        left: (this.value[0] - this.min) / (this.max - this.min) * 100 + '%'
                    }
                } else {
                    style = {
                        width: (this.value - this.min) / (this.max - this.min) * 100 + '%'
                    }
                }

                return style;
            },
            stops() {
                return this.max / this.step;
            }
        },
        methods: {
            sliderClick () {

            }
        },
        ready () {
            if (this.range) {
                const isArray = Array.isArray(this.value);
                if (!isArray || (isArray && this.value.length != 2) || (isArray && (!isNaN(this.value[0]) || !isNaN(this.value[1])))) {
                    this.value = [0, 0];
                }
            }
        }
    }
</script>