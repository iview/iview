<template>
    <div :class="classes" v-clickoutside="handleClose">
        <i-input
            readonly
            :disabled="disabled"
            :value.sync="displayRender"
            :size="size"
            :placeholder="placeholder"
            @on-focus="onFocus"></i-input>
        <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.stop="clearSelect"></Icon>
        <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
        <Dropdown v-show="visible" transition="slide-up">
            <div>
                <Caspanel
                    :prefix-cls="prefixCls"
                    :data.sync="data"
                    :disabled="disabled"
                    :trigger="trigger"
                    @on-update-result="updateResult"></Caspanel>
            </div>
        </Dropdown>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';
    import Dropdown from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import Caspanel from './caspanel.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-cascader';

    export default {
        components: { iInput, Dropdown, Icon, Caspanel },
        directives: { clickoutside },
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
                default: true
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
                default (label, selectedData) {
                    return label.join('/');
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                selected: [],
                tmpSelected: []
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show-clear`]: this.showCloseIcon
                    }
                ]
            },
            showCloseIcon () {
                return this.value && this.value.length && this.clearable;
            },
            displayRender () {
                let label = [];
                for (let i = 0; i < this.selected.length; i++) {
                    label.push(this.selected[i].label);
                }

                return this.renderFormat(label);
            }
        },
        methods: {
            clearSelect () {

            },
            handleClose () {
                this.visible = false;
            },
            onFocus () {
                this.visible = true;
            },
            updateResult (result) {
                console.log(JSON.stringify(result))
                this.selected = result;
            }
        },
        ready () {

        }
    }
</script>