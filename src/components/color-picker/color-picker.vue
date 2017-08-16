<template>
    <Dropdown trigger="click" :transfer="transfer" :placement="placement">
        <div :class="wrapClasses">
            <i class="ivu-icon ivu-icon-arrow-down-b ivu-input-icon ivu-input-icon-normal"></i>
            <div :class="inputClasses">
                <div :class="[prefixCls + '-color']" style="background-color: rgb(32, 160, 255);"></div>
            </div>
        </div>
        <Dropdown-menu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <Button type="primary">关闭</Button>
            </div>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    import Dropdown from '../dropdown/dropdown.vue';
    import DropdownMenu from '../dropdown/dropdown-menu.vue';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-color-picker';
    const inputPrefixCls = 'ivu-input';

    export default {
        name: 'ColorPicker',
        components: { Dropdown, DropdownMenu },
        props: {
            value: {
                type: String
            },
            alpha: {
                type: Boolean,
                default: false
            },
            format: {
                validator (value) {
                    return oneOf(value, ['hsl', 'hsv', 'hex', 'rgb']);
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
                currentValue: this.value
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