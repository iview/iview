<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-rel']" @click="toggleOpen">
            <slot>
                <i-input
                    readonly
                    :disabled="disabled"
                    v-model="displayRender"
                    :size="size"
                    :placeholder="placeholder"></i-input>
                <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearSelect"></Icon>
                <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
            </slot>
        </div>
        <transition name="slide-up">
            <Drop v-show="visible">
                <div>
                    <Caspanel
                        ref="caspanel"
                        :prefix-cls="prefixCls"
                        :data="data"
                        :disabled="disabled"
                        :change-on-select="changeOnSelect"
                        :trigger="trigger"></Caspanel>
                </div>
            </Drop>
        </transition>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import Caspanel from './caspanel.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-cascader';

    export default {
        name: 'Cascader',
        mixins: [ Emitter ],
        components: { iInput, Drop, Icon, Caspanel },
        directives: { clickoutside },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            value: {
                type: Array,
                default () {
                    return [];
                }
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
                default (label) {
                    return label.join(' / ');
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                selected: [],
                tmpSelected: [],
                updatingValue: false,    // to fix set value in changeOnSelect type
                currentValue: this.value
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            showCloseIcon () {
                return this.currentValue && this.currentValue.length && this.clearable && !this.disabled;
            },
            displayRender () {
                let label = [];
                for (let i = 0; i < this.selected.length; i++) {
                    label.push(this.selected[i].label);
                }

                return this.renderFormat(label, this.selected);
            }
        },
        methods: {
            clearSelect () {
                if (this.disabled) return false;
                const oldVal = JSON.stringify(this.currentValue);
                this.currentValue = this.selected = this.tmpSelected = [];
                this.handleClose();
                this.emitValue(this.currentValue, oldVal);
//                this.$broadcast('on-clear');
                this.broadcast('Caspanel', 'on-clear');
            },
            handleClose () {
                this.visible = false;
            },
            toggleOpen () {
                if (this.disabled) return false;
                if (this.visible) {
                    this.handleClose();
                } else {
                    this.onFocus();
                }
            },
            onFocus () {
                this.visible = true;
                if (!this.currentValue.length) {
                    this.broadcast('Caspanel', 'on-clear');
                }
            },
            updateResult (result) {
                this.tmpSelected = result;
            },
            updateSelected (init = false) {
                if (!this.changeOnSelect || init) {
                    this.broadcast('Caspanel', 'on-find-selected', {
                        value: this.currentValue
                    });
                }
            },
            emitValue (val, oldVal) {
                if (JSON.stringify(val) !== oldVal) {
                    this.$emit('on-change', this.currentValue, JSON.parse(JSON.stringify(this.selected)));
                    this.$nextTick(() => {
                        this.dispatch('FormItem', 'on-form-change', {
                            value: this.currentValue,
                            selected: JSON.parse(JSON.stringify(this.selected))
                        });
                    });
                }
            }
        },
        mounted () {
            this.updateSelected(true);
            this.$on('on-result-change', (params) => {
                // lastValue: is click the final val
                // fromInit: is this emit from update value
                const lastValue = params.lastValue;
                const changeOnSelect = params.changeOnSelect;
                const fromInit = params.fromInit;

                if (lastValue || changeOnSelect) {
                    const oldVal = JSON.stringify(this.currentValue);
                    this.selected = this.tmpSelected;

                    let newVal = [];
                    this.selected.forEach((item) => {
                        newVal.push(item.value);
                    });

                    if (!fromInit) {
                        this.updatingValue = true;
                        this.currentValue = newVal;
                        this.emitValue(this.currentValue, oldVal);
                    }
                }
                if (lastValue && !fromInit) {
                    this.handleClose();
                }
            });
        },
        watch: {
            visible (val) {
                if (val) {
                    if (this.currentValue.length) {
                        this.updateSelected();
                    }
                }
                this.$emit('on-visible-change', val);
            },
            value (val) {
                this.currentValue = val;
                if (!val.length) this.selected = [];
            },
            currentValue () {
                this.$emit('input', this.currentValue);
                if (this.updatingValue) {
                    this.updatingValue = false;
                    return;
                }
                this.updateSelected(true);
            },
            data () {
                this.$nextTick(() => this.updateSelected());
            }
        }
    };
</script>
