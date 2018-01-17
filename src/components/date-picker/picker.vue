<template>
    <div :class="[prefixCls]" v-clickoutside="handleClose">
        <div ref="reference" :class="[prefixCls + '-rel']">
            <slot>
                <i-input
                    :element-id="elementId"
                    :class="[prefixCls + '-editor']"
                    :readonly="!editable || readonly"
                    :disabled="disabled"
                    :size="size"
                    :placeholder="placeholder"
                    :value="visualValue"
                    :name="name"
                    @on-input-change="handleInputChange"
                    @on-focus="handleFocus"
                    @on-blur="handleBlur"
                    @on-click="handleIconClick"
                    @mouseenter.native="handleInputMouseenter"
                    @mouseleave.native="handleInputMouseleave"

                    :icon="iconType"
                ></i-input>
            </slot>
        </div>
        <transition :name="transition">
            <Drop
                @click.native="handleTransferClick"
                v-show="opened"
                :class="{ [prefixCls + '-transfer']: transfer }"
                :placement="placement"
                ref="drop"
                :data-transfer="transfer"
                v-transfer-dom>
                <div>
                    <component
                        :is="panel"
                        :visible="visible"
                        :showTime="type === 'datetime' || type === 'datetimerange'"
                        :confirm="isConfirm"
                        :selectionMode="selectionMode"
                        :steps="steps"
                        :format="format"
                        :value="internalValue"
                        :start-date="startDate"
                        :split-panels="splitPanels"
                        :show-week-numbers="showWeekNumbers"

                        v-bind="ownPickerProps"

                        @on-pick="onPick"
                        @on-pick-clear="handleClear"
                        @on-pick-success="onPickSuccess"
                        @on-pick-click="disableClickOutSide = true"
                        @on-selection-mode-change="onSelectionModeChange"
                    ></component>
                </div>
            </Drop>
        </transition>
    </div>
</template>
<script>


    import iInput from '../../components/input/input.vue';
    import Drop from '../../components/select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf } from '../../utils/assist';
    import { formatDate, parseDate } from './util';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-date-picker';

    const DEFAULT_FORMATS = {
        date: 'yyyy-MM-dd',
        month: 'yyyy-MM',
        year: 'yyyy',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        time: 'HH:mm:ss',
        timerange: 'HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        datetimerange: 'yyyy-MM-dd HH:mm:ss'
    };

    const RANGE_SEPARATOR = ' - ';

    const DATE_FORMATTER = function(value, format) {
        return formatDate(value, format);
    };
    const DATE_PARSER = function(text, format) {
        return parseDate(text, format);
    };
    const RANGE_FORMATTER = function(value, format) {
        if (Array.isArray(value) && value.length === 2) {
            const start = value[0];
            const end = value[1];

            if (start && end) {
                return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
            }
        }
        return '';
    };
    const RANGE_PARSER = function(text, format) {
        const array = text.split(RANGE_SEPARATOR);
        if (array.length === 2) {
            const range1 = array[0];
            const range2 = array[1];

            return [parseDate(range1, format), parseDate(range2, format)];
        }
        return [];
    };

    const TYPE_VALUE_RESOLVER_MAP = {
        default: {
            formatter(value) {
                if (!value) return '';
                return '' + value;
            },
            parser(text) {
                if (text === undefined || text === '') return null;
                return text;
            }
        },
        date: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        datetime: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        daterange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        datetimerange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        timerange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        time: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        month: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        year: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        number: {
            formatter(value) {
                if (!value) return '';
                return '' + value;
            },
            parser(text) {
                let result = Number(text);

                if (!isNaN(text)) {
                    return result;
                } else {
                    return null;
                }
            }
        }
    };

    export default {
        name: 'CalendarPicker',
        mixins: [ Emitter ],
        components: { iInput, Drop },
        directives: { clickoutside, TransferDom },
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
            clearable: {
                type: Boolean,
                default: true
            },
            confirm: {
                type: Boolean,
                default: false
            },
            open: {
                type: Boolean,
                default: null
            },
            multiple: {
                type: Boolean,
                default: false
            },
            splitPanels: {
                type: Boolean,
                default: false
            },
            showWeekNumbers: {
                type: Boolean,
                default: false
            },
            startDate: {
                type: Date
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom-start'
            },
            options: {
                type: Object
            },
            transfer: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            },
            steps: {
                type: Array,
                default: () => []
            },
            value: {
                type: [Date, String, Array],
                validator(val){
                    if (Array.isArray(val)){
                        const [start, end] = val.map(v => new Date(v));
                        return !isNaN(start.getTime()) && !isNaN(end.getTime());
                    } else {
                        if (typeof val === 'string') val = val.trim();
                        const date = new Date(val);
                        return val === '' || val === null || !isNaN(date.getTime());
                    }
                }
            }
        },
        data(){
            const initialValue = this.formatDate(this.value);

            return {
                prefixCls: prefixCls,
                showClose: false,
                visible: false,
                internalValue: initialValue,
                disableClickOutSide: false,    // fixed when click a date,trigger clickoutside to close picker
                disableCloseUnderTransfer: false,  // transfer 模式下，点击Drop也会触发关闭,
                selectionMode: this.onSelectionModeChange(this.type)
            };
        },
        computed: {
            publicValue(){
                if (this.multiple){
                    return this.internalValue.map(date => this.formatDate(date));
                } else {
                    const isRange = this.type.includes('range');
                    return isRange ? this.formatDate(this.internalValue) : this.formatDate(this.internalValue[0]);
                }
            },

            opened () {
                return this.open === null ? this.visible : this.open;
            },
            iconType () {
                let icon = 'ios-calendar-outline';
                if (this.type === 'time' || this.type === 'timerange') icon = 'ios-clock-outline';
                if (this.showClose) icon = 'ios-close';
                return icon;
            },
            transition () {
                const bottomPlaced = this.placement.match(/^bottom/);
                return bottomPlaced ? 'slide-up' : 'slide-down';
            },
            visualValue() {
                const value = this.internalValue;
                if (!value) return;

                if (this.multiple) return value.map(date => this.formatDate(date)).join(', ');

                const formatter = (
                    TYPE_VALUE_RESOLVER_MAP[this.type] ||
                    TYPE_VALUE_RESOLVER_MAP['default']
                ).formatter;
                const format = DEFAULT_FORMATS[this.type];
                return formatter(value, this.format || format);
            },
            isConfirm(){
                return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple;
            }
        },
        methods: {
            onSelectionModeChange(type){

                if (type.match(/^date/)) type = 'date';
                this.selectionMode = type;
                return type;
            },
            // 开启 transfer 时，点击 Drop 即会关闭，这里不让其关闭
            handleTransferClick () {
                if (this.transfer) this.disableCloseUnderTransfer = true;
            },
            handleClose () {
                if (this.disableCloseUnderTransfer) {
                    this.disableCloseUnderTransfer = false;
                    return false;
                }
                if (this.open !== null) return;

                this.visible = false;
                this.disableClickOutSide = false;
            },
            handleFocus () {
                if (this.readonly) return;
                this.visible = true;
            },
            handleBlur () {
                this.visible = false;
            },
            handleInputChange (event) {
                const oldValue = this.visualValue;
                const newValue = event.target.value;

                if (newValue !== oldValue) {
                    this.emitChange();
                    this.internalValue = this.formatDate(newValue);
                }
            },
            handleInputMouseenter () {
                if (this.readonly || this.disabled) return;
                if (this.visualValue && this.clearable) {
                    this.showClose = true;
                }
            },
            handleInputMouseleave () {
                this.showClose = false;
            },
            handleIconClick () {
                if (this.showClose) {
                    this.handleClear();
                } else if (!this.disabled) {
                    this.handleFocus();
                }
            },
            handleClear () {
                this.visible = false;
                this.internalValue = this.internalValue.map(() => null);
                this.$emit('on-clear');
                this.dispatch('FormItem', 'on-form-change', '');
                this.emitChange();

                setTimeout(
                    () => this.onSelectionModeChange(this.type),
                    500 // delay to improve dropdown close visual effect
                );
            },
            emitChange () {
                this.$emit('on-change', this.publicValue);
                this.$nextTick(() => {
                    this.dispatch('FormItem', 'on-form-change', this.publicValue);
                });
            },
            formatDate (val) {
                const isRange = this.type.includes('range');

                const type = this.type;
                const parser = (
                    TYPE_VALUE_RESOLVER_MAP[type] ||
                    TYPE_VALUE_RESOLVER_MAP['default']
                ).parser;

                if (val && type === 'time' && !(val instanceof Date)) {
                    val = parser(val, this.format || DEFAULT_FORMATS[type]);
                } else if (type.match(/range$/)) {
                    if (!val){
                        val = [null, null];
                    } else {
                        val = val.map(date => new Date(date)); // try to parse
                        val = val.map(date => isNaN(date.getTime()) ? null : date); // check if parse passed
                    }
                } else if (typeof val === 'string' && type.indexOf('time') !== 0 ){
                    val = parser(val, this.format || DEFAULT_FORMATS[type]) || val;
                }
                return isRange ? val : [val];
            },
            onPick(dates, visible = false) {

                if (this.multiple){
                    const allDates = [...this.internalValue, dates].filter(Boolean);
                    const timeStamps = allDates.map(date => date.getTime()).filter((ts, i, arr) => arr.indexOf(ts) === i); // filter away duplicates
                    this.internalValue = timeStamps.map(ts => new Date(ts));
                } else {
                    this.internalValue = Array.isArray(dates) ? dates : [dates];
                }

                if (!this.isConfirm) this.onSelectionModeChange(this.type); // reset the selectionMode
                if (!this.isConfirm) this.visible = visible;
                this.emitChange();
            },
            onPickSuccess(){
                this.visible = false;
                this.$emit('on-ok');
            },
        },
        watch: {
            visible (state) {
                if (state === false){
                    this.$refs.drop.destroy();
                    const input = this.$el.querySelector('input');
                    if (input) input.blur();
                }
                this.$emit('on-open-change', state);
            },
            value(val) {
                const type = this.type;
                const parser = (
                    TYPE_VALUE_RESOLVER_MAP[type] ||
                    TYPE_VALUE_RESOLVER_MAP['default']
                ).parser;

                if (val && type === 'time' && !(val instanceof Date)) {
                    val = parser(val, this.format || DEFAULT_FORMATS[type]);
                } else if (val && type.match(/range$/) && Array.isArray(val) && val.filter(Boolean).length === 2 && !(val[0] instanceof Date) && !(val[1] instanceof Date)) {
                    val = val.join(RANGE_SEPARATOR);
                    val = parser(val, this.format || DEFAULT_FORMATS[type]);
                } else if (typeof val === 'string' && type.indexOf('time') !== 0 ){
                    val = parser(val, this.format || DEFAULT_FORMATS[type]) || val;
                }

                this.internalValue = val;
                this.$emit('input', val);
            },
            open (val) {
                this.visible = val === true;
            },
            type(type){
                this.onSelectionModeChange(type);
            }
        },
        mounted () {
            if (this.open !== null) this.visible = this.open;
        }
    };
</script>
