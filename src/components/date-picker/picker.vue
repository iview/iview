<template>
    <div
        :class="[prefixCls]"
        v-clickoutside="handleClose"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave">
        <i-input
            v-el:reference
            :class="[prefixCls + '-editor']"
            :readonly="!editable || readonly"
            :disabled="disabled"
            :size="size"
            :placeholder="placeholder"
            :value.sync="visualValue"
            @on-focus="handleFocus"
            @on-blur="handleBlur"
            @on-click="handleIconClick"
            :icon="iconType"></i-input>
        <Drop v-show="visible" :placement="placement" transition="slide-up" v-ref:drop>
            <div v-el:picker></div>
        </Drop>
    </div>
</template>
<script>
    import Vue from 'vue';
    import iInput from '../../components/input/input.vue';
    import Drop from '../../components/select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-date-picker';

    const DEFAULT_FORMATS = {
        date: 'yyyy-MM-dd',
        month: 'yyyy-MM',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        time: 'HH:mm:ss',
        timerange: 'HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        datetimerange: 'yyyy-MM-dd HH:mm:ss'
    };

    const PLACEMENT_MAP = {
        left: 'bottom-start',
        center: 'bottom-center',
        right: 'bottom-end'
    };

    export default {
        components: { iInput, Drop },
        directives: { clickoutside },
        props: {
            format: {
                type: String
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            editable: {
                type: Boolean,
                default: true
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            align: {
                validator (value) {
                    return oneOf(value, ['left', 'center', 'right']);
                },
                default: 'left'
            },
            options: {
                type: Object
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                showClose: false,
                visualValue: '',
                visible: false,
                picker: null
            }
        },
        computed: {
            iconType () {
                return this.showClose ? 'ios-close' : 'ios-calendar-outline';
            },
            placement () {
                return PLACEMENT_MAP[this.align];
            }
        },
        methods: {
            handleClose () {
                this.visible = false;
            },
            handleFocus () {
                this.visible = true;
            },
            handleBlur () {

            },
            handleMouseenter () {
                if (this.readonly || this.disabled) return;
                if (this.visualValue) {
                    this.showClose = true;
                }
            },
            handleMouseleave () {
                this.showClose = false;
            },
            handleIconClick () {

            },
            showPicker () {
                if (!this.picker) {
                    this.picker = new Vue(this.panel).$mount(this.$els.picker);
                }
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.showPicker();
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        beforeDestroy () {
            if (this.picker) {
                this.picker.$destroy();
            }
        }
    }
</script>