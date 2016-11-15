<template>
    <div :class="[prefixCls]">
        <i-input
            readonly
            :disabled="disabled"
            :value.sync="displayRender"
            :size="size"
            :placeholder="placeholder"></i-input>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';
    import Dropdown from '../select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf, MutationObserver } from '../../utils/assist';

    const prefixCls = 'ivu-cascader';

    export default {
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            value: {
                type: Array
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'click'
            },
            changeOnSelect: {
                type: Boolean,
                default: false
            },
            renderFormat: {
                type: Function,
                default: (label, selectedData) => {
                    label.join('/');
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                selected: []
            }
        },
        computed: {
            displayRender () {
                let label = [];
                for (let i = 0; i < this.selected.length; i++) {
                    label.push(this.selected[i].label);
                }

                return this.renderFormat(label);
            }
        },
        methods: {
        
        }
    }
</script>