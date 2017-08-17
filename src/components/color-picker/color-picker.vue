<template>
    <Dropdown trigger="click" :transfer="transfer" :placement="placement">
        <div :class="wrapClasses">
            <i class="ivu-icon ivu-icon-arrow-down-b ivu-input-icon ivu-input-icon-normal"></i>
            <div :class="inputClasses">
                <div :class="[prefixCls + '-color']" style="background-color: rgb(32, 160, 255);"></div>
            </div>
        </div>
        <Dropdown-menu slot="list">
            <div :class="[prefixCls + '-picker']">
                <div :class="[prefixCls + '-picker-panel']"></div>
                <div :class="[prefixCls + '-picker-hue-slider']">
                    <Slider v-model="hueNumber" :min="0" :max="255"></Slider>
                </div>
                <div v-if="alpha" :class="[prefixCls + '-picker-alpha-slider']">
                    <Slider v-model="alphaNumber" :min="0" :max="100"></Slider>
                </div>
                <recommend-colors v-if="colors.length" :list="colors" :class="[prefixCls + '-picker-colors']"></recommend-colors>
                <recommend-colors v-if="!colors.length && recommend" :list="recommendedColor" :class="[prefixCls + '-picker-colors', prefixCls + '-picker-colors-recommended']"></recommend-colors>
                <Confirm></Confirm>
            </div>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    import Dropdown from '../dropdown/dropdown.vue';
    import DropdownMenu from '../dropdown/dropdown-menu.vue';
    import Slider from '../slider/slider.vue';
    import RecommendColors from './recommend-colors.vue';
    import Confirm from '../date-picker/base/confirm.vue';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-color-picker';
    const inputPrefixCls = 'ivu-input';

    export default {
        name: 'ColorPicker',
        components: { Dropdown, DropdownMenu, Slider, Confirm, RecommendColors },
        props: {
            value: {
                type: String
            },
            alpha: {
                type: Boolean,
                default: false
            },
            recommend: {
                type: Boolean,
                default: false
            },
            format: {
                validator (value) {
                    return oneOf(value, ['hsl', 'hsv', 'hex', 'rgb']);
                }
            },
            colors: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            transfer: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                currentValue: this.value,
                hueNumber: 0,
                alphaNumber: 0,
                recommendedColor: [
                    '#2d8cf0',
                    '#19be6b',
                    '#ff9900',
                    '#ed3f14',
                    '#00b5ff',
                    '#19c919',
                    '#f9e31c',
                    '#ea1a1a',
                    '#9b1dea',
                    '#00c2b1',
                    '#ac7a33',
                    '#1d35ea',
                    '#42bd82',
                    '#f16b62',
                    '#ea4ca3',
                    '#0d94aa',
                    '#febd79',
                    '#3b90fc',
                    '#000000',
                    '#ffffff'
                ]
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-rel`,
                    `${prefixCls}-${this.size}`,
                    `${inputPrefixCls}-wrapper`,
                    `${inputPrefixCls}-wrapper-${this.size}`
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}-input`,
                    `${inputPrefixCls}`,
                    `${inputPrefixCls}-${this.size}`,
                    {
                        [`${inputPrefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {

        }
    };
</script>