<template>
    <div
        :class="wrapperClasses"
        v-click-outside:[capture].mousedown="handleClose"
        v-click-outside:[capture].touchstart="handleClose"
        v-click-outside:[capture]="handleClose"
    >
        <div ref="reference" :class="[prefixCls + '-rel']">
            <slot>
                <i-input
                    :key="forceInputRerender"
                    :element-id="elementId"
                    :class="[prefixCls + '-editor']"
                    :readonly="!editable || readonly"
                    :disabled="itemDisabled"
                    :size="size"
                    :placeholder="placeholder"
                    :value="visualValue"
                    :name="name"
                    ref="input"

                    @on-input-change="handleInputChange"
                    @on-focus="handleFocus"
                    @on-blur="handleBlur"
                    @click.native="handleFocus"
                    @keydown.native="handleKeydown"
                    @mouseenter.native="handleInputMouseenter"
                    @mouseleave.native="handleInputMouseleave"
                >
                    <Icon @click="handleIconClick" :type="arrowType" :custom="customArrowType" :size="arrowSize" slot="suffix" />
                </i-input>
            </slot>
        </div>
        <transition name="transition-drop">
            <Drop
                @click.native="handleTransferClick"
                v-show="opened"
                :class="dropdownCls"
                :placement="placement"
                ref="drop"
                :eventsEnabled="eventsEnabled"
                :data-transfer="transfer"
                :transfer="transfer"
                v-transfer-dom>
                <div>
                    <component
                        :is="panel"
                        ref="pickerPanel"
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
                        :picker-type="type"
                        :multiple="multiple"
                        :focused-date="focusedDate"

                        :time-picker-options="timePickerOptions"

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
    import Icon from '../../components/icon/icon.vue';
    import {directive as clickOutside} from '../../directives/v-click-outside-x';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf } from '../../utils/assist';
    import { DEFAULT_FORMATS, TYPE_VALUE_RESOLVER_MAP, getDayCountOfMonth } from './util';
    import {findComponentsDownward} from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-date-picker';
    const pickerPrefixCls = 'ivu-picker';

    const isEmptyArray = val => val.reduce((isEmpty, str) => isEmpty && !str || (typeof str === 'string' && str.trim() === ''), true);
    const keyValueMapper = {
        40: 'up',
        39: 'right',
        38: 'down',
        37: 'left',
    };

    const mapPossibleValues = (key, horizontal, vertical) => {
        if (key === 'left') return horizontal * -1;
        if (key === 'right') return horizontal * 1;
        if (key === 'up') return vertical * 1;
        if (key === 'down') return vertical * -1;
    };

    const pulseElement = (el) => {
        const pulseClass = 'ivu-date-picker-btn-pulse';
        el.classList.add(pulseClass);
        setTimeout(() => el.classList.remove(pulseClass), 200);
    };

    const extractTime = date => {
        if (!date) return [0, 0, 0];
        return [
            date.getHours(), date.getMinutes(), date.getSeconds()
        ];
    };


    export default {
        mixins: [ Emitter, mixinsForm ],
        components: { iInput, Drop, Icon },
        directives: { clickOutside, TransferDom },
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
            timePickerOptions: {
                default: () => ({}),
                type: Object,
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
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
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
            transfer: {
                type: Boolean,
                default () {
                    return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
                }
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
                type: [Date, String, Array]
            },
            options: {
                type: Object,
                default: () => ({})
            },
            separator: {
                type: String,
                default: ' - '
            },
            // 4.0.0
            capture: {
                type: Boolean,
                default () {
                    return !this.$IVIEW ? true : this.$IVIEW.capture;
                }
            },
            transferClassName: {
                type: String
            },
            // 4.6.0
            eventsEnabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
            const isRange = this.type.includes('range');
            const emptyArray = isRange ? [null, null] : [null];
            const initialValue = isEmptyArray((isRange ? this.value : [this.value]) || []) ? emptyArray : this.parseDate(this.value);
            const focusedTime = initialValue.map(extractTime);

            return {
                prefixCls: prefixCls,
                showClose: false,
                visible: false,
                internalValue: initialValue,
                disableClickOutSide: false,    // fixed when click a date,trigger clickoutside to close picker
                disableCloseUnderTransfer: false,  // transfer 模式下，点击Drop也会触发关闭,
                selectionMode: this.onSelectionModeChange(this.type),
                forceInputRerender: 1,
                isFocused: false,
                focusedDate: initialValue[0] || this.startDate || new Date(),
                focusedTime: {
                    column: 0, // which column inside the picker
                    picker: 0, // which picker
                    time: focusedTime, // the values array into [hh, mm, ss],
                    active: false
                },
                internalFocus: false,
            };
        },
        computed: {
            wrapperClasses(){
                return [prefixCls, {
                    [prefixCls + '-focused']: this.isFocused
                }];
            },
            publicVModelValue(){
                if (this.multiple){
                    return this.internalValue.slice();
                } else {
                    const isRange = this.type.includes('range');
                    let val = this.internalValue.map(date => date instanceof Date ? new Date(date) : (date || ''));

                    if (this.type.match(/^time/)) val = val.map(this.formatDate);
                    return (isRange || this.multiple) ? val : val[0];
                }
            },
            publicStringValue(){
                const {formatDate, publicVModelValue, type} = this;
                if (type.match(/^time/)) return publicVModelValue;
                if (this.multiple) return formatDate(publicVModelValue);
                return Array.isArray(publicVModelValue) ? publicVModelValue.map(formatDate) : formatDate(publicVModelValue);
            },
            opened () {
                return this.open === null ? this.visible : this.open;
            },
            transition () {
                const bottomPlaced = this.placement.match(/^bottom/);
                return bottomPlaced ? 'slide-up' : 'slide-down';
            },
            visualValue() {
                return this.formatDate(this.internalValue);
            },
            isConfirm(){
                return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple;
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                let type = '';

                if (this.type === 'time' || this.type === 'timerange') {
                    type = 'ios-time-outline';

                    if (this.$IVIEW) {
                        if (this.$IVIEW.timePicker.customIcon) {
                            type = '';
                        } else if (this.$IVIEW.timePicker.icon) {
                            type = this.$IVIEW.timePicker.icon;
                        }
                    }
                } else {
                    type = 'ios-calendar-outline';

                    if (this.$IVIEW) {
                        if (this.$IVIEW.datePicker.customIcon) {
                            type = '';
                        } else if (this.$IVIEW.datePicker.icon) {
                            type = this.$IVIEW.datePicker.icon;
                        }
                    }
                }

                if (this.showClose) type = 'ios-close-circle';

                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                let type = '';

                if (!this.showClose) {
                    if (this.type === 'time' || this.type === 'timerange') {
                        if (this.$IVIEW) {
                            if (this.$IVIEW.timePicker.customIcon) {
                                type = this.$IVIEW.timePicker.customIcon;
                            }
                        }
                    } else {
                        if (this.$IVIEW) {
                            if (this.$IVIEW.datePicker.customIcon) {
                                type = this.$IVIEW.datePicker.customIcon;
                            }
                        }
                    }
                }

                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                let size = '';

                if (!this.showClose) {
                    if (this.type === 'time' || this.type === 'timerange') {
                        if (this.$IVIEW) {
                            if (this.$IVIEW.timePicker.iconSize) {
                                size = this.$IVIEW.timePicker.iconSize;
                            }
                        }
                    } else {
                        if (this.$IVIEW) {
                            if (this.$IVIEW.datePicker.iconSize) {
                                size = this.$IVIEW.datePicker.iconSize;
                            }
                        }
                    }
                }

                return size;
            },
            dropdownCls () {
                return {
                    [prefixCls + '-transfer']: this.transfer,
                    [this.transferClassName]: this.transferClassName
                };
            }
        },
        methods: {
            onSelectionModeChange(type){
                if (type.match(/^date/)) type = 'date';
                this.selectionMode = oneOf(type, ['year', 'month', 'date', 'time']) && type;
                return this.selectionMode;
            },
            // 开启 transfer 时，点击 Drop 即会关闭，这里不让其关闭
            handleTransferClick () {
                if (this.transfer) this.disableCloseUnderTransfer = true;
            },
            handleClose (e) {
                if (this.disableCloseUnderTransfer) {
                    this.disableCloseUnderTransfer = false;
                    return false;
                }

                if (e && e.type === 'mousedown' && this.visible) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }

                if (this.visible) {
                    const pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el;
                    if (e && pickerPanel && pickerPanel.contains(e.target)) return; // its a click inside own component, lets ignore it.

                    this.visible = false;
                    e && e.preventDefault();
                    e && e.stopPropagation();
                    this.$emit('on-clickoutside', e);
                    return;
                }

                this.isFocused = false;
                this.disableClickOutSide = false;
            },
            handleFocus (e) {
                if (this.readonly) return;
                this.isFocused = true;
                if (e && e.type === 'focus') return; // just focus, don't open yet
                if(!this.itemDisabled){
                    this.visible = true;
                }
            },
            handleBlur (e) {
                if (this.internalFocus){
                    this.internalFocus = false;
                    return;
                }
                if (this.visible) {
                    e.preventDefault();
                    return;
                }

                this.isFocused = false;
                this.onSelectionModeChange(this.type);
                this.internalValue = this.internalValue.slice(); // trigger panel watchers to reset views
                this.reset();
                this.$refs.pickerPanel.onToggleVisibility(false);

            },
            handleKeydown(e){
                const keyCode = e.keyCode;

                // handle "tab" key
                if (keyCode === 9){
                    if (this.visible){
                        e.stopPropagation();
                        e.preventDefault();

                        if (this.isConfirm){
                            const selector = `.${pickerPrefixCls}-confirm > *`;
                            const tabbable = this.$refs.drop.$el.querySelectorAll(selector);
                            this.internalFocus = true;
                            const element = [...tabbable][e.shiftKey ? 'pop' : 'shift']();
                            element.focus();
                        } else {
                            this.handleClose();
                        }
                    } else {
                        this.focused = false;
                    }
                }

                // open the panel
                const arrows = [37, 38, 39, 40];
                if (!this.visible && arrows.includes(keyCode)){
                    this.visible = true;
                    return;
                }

                // close on "esc" key
                if (keyCode === 27){
                    if (this.visible) {
                        e.stopPropagation();
                        this.handleClose();
                    }
                }

                // select date, "Enter" key
                if (keyCode === 13){
                    const timePickers = findComponentsDownward(this, 'TimeSpinner');
                    if (timePickers.length > 0){
                        const columnsPerPicker = timePickers[0].showSeconds ? 3 : 2;
                        const pickerIndex = Math.floor(this.focusedTime.column / columnsPerPicker);
                        const value = this.focusedTime.time[pickerIndex];

                        timePickers[pickerIndex].chooseValue(value);
                        return;
                    }

                    if (this.type.match(/range/)){
                        this.$refs.pickerPanel.handleRangePick(this.focusedDate, 'date');
                    } else {
                        const panels = findComponentsDownward(this, 'PanelTable');
                        const compareDate = (d) => {
                            const sliceIndex = ['year', 'month', 'date'].indexOf((this.type)) + 1;
                            return [d.getFullYear(), d.getMonth(), d.getDate()].slice(0, sliceIndex).join('-');
                        };
                        const dateIsValid = panels.find(({cells}) => {
                            return cells.find(({date, disabled}) => compareDate(date) === compareDate(this.focusedDate) && !disabled);
                        });
                        if (dateIsValid) this.onPick(this.focusedDate, false, 'date');
                    }
                }

                if (!arrows.includes(keyCode)) return; // ignore rest of keys

                // navigate times and dates
                if (this.focusedTime.active) e.preventDefault(); // to prevent cursor from moving
                this.navigateDatePanel(keyValueMapper[keyCode], e.shiftKey);
            },
            reset(){
                this.$refs.pickerPanel.reset && this.$refs.pickerPanel.reset();
            },
            navigateTimePanel(direction){

                this.focusedTime.active = true;
                const horizontal = direction.match(/left|right/);
                const vertical = direction.match(/up|down/);
                const timePickers = findComponentsDownward(this, 'TimeSpinner');

                const maxNrOfColumns = (timePickers[0].showSeconds ? 3 : 2) * timePickers.length;
                const column = (currentColumn => {
                    const incremented = currentColumn + (horizontal ? (direction === 'left' ? -1 : 1) : 0);
                    return (incremented + maxNrOfColumns) % maxNrOfColumns;
                })(this.focusedTime.column);

                const columnsPerPicker = maxNrOfColumns / timePickers.length;
                const pickerIndex = Math.floor(column / columnsPerPicker);
                const col = column % columnsPerPicker;


                if (horizontal){
                    const time = this.internalValue.map(extractTime);

                    this.focusedTime = {
                        ...this.focusedTime,
                        column: column,
                        time: time
                    };
                    timePickers.forEach((instance, i) => {
                        if (i === pickerIndex) instance.updateFocusedTime(col, time[pickerIndex]);
                        else instance.updateFocusedTime(-1, instance.focusedTime);
                    });
                }

                if (vertical){
                    const increment = direction === 'up' ? 1 : -1;
                    const timeParts = ['hours', 'minutes', 'seconds'];


                    const pickerPossibleValues = timePickers[pickerIndex][`${timeParts[col]}List`];
                    const currentIndex = pickerPossibleValues.findIndex(({text}) => this.focusedTime.time[pickerIndex][col] === text);
                    const nextIndex = (currentIndex + increment + pickerPossibleValues.length) % pickerPossibleValues.length;
                    const nextValue = pickerPossibleValues[nextIndex].text;
                    const times = this.focusedTime.time.map((time, i) => {
                        if (i !== pickerIndex) return time;
                        time[col] = nextValue;
                        return time;
                    });
                    this.focusedTime = {
                        ...this.focusedTime,
                        time: times
                    };

                    timePickers.forEach((instance, i) => {
                        if (i === pickerIndex) instance.updateFocusedTime(col, times[i]);
                        else instance.updateFocusedTime(-1, instance.focusedTime);
                    });
                }
            },
            navigateDatePanel(direction, shift){

                const timePickers = findComponentsDownward(this, 'TimeSpinner');
                if (timePickers.length > 0) {
                    // we are in TimePicker mode
                    this.navigateTimePanel(direction, shift, timePickers);
                    return;
                }

                if (shift){
                    if (this.type === 'year'){
                        this.focusedDate = new Date(
                            this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 10),
                            this.focusedDate.getMonth(),
                            this.focusedDate.getDate()
                        );
                    } else {
                        this.focusedDate = new Date(
                            this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 1),
                            this.focusedDate.getMonth() + mapPossibleValues(direction, 1, 0),
                            this.focusedDate.getDate()
                        );
                    }

                    const position = direction.match(/left|down/) ? 'prev' : 'next';
                    const double = direction.match(/up|down/) ? '-double' : '';

                    // pulse button
                    const button = this.$refs.drop.$el.querySelector(`.ivu-date-picker-${position}-btn-arrow${double}`);
                    if (button) pulseElement(button);
                    return;
                }

                const initialDate = this.focusedDate || (this.internalValue && this.internalValue[0]) || new Date();
                const focusedDate = new Date(initialDate);

                if (this.type.match(/^date/)){
                    const lastOfMonth = getDayCountOfMonth(initialDate.getFullYear(), initialDate.getMonth());
                    const startDay = initialDate.getDate();
                    const nextDay = focusedDate.getDate() +  mapPossibleValues(direction, 1, 7);

                    if (nextDay < 1) {
                        if (direction.match(/left|right/)) {
                            focusedDate.setMonth(focusedDate.getMonth() + 1);
                            focusedDate.setDate(nextDay);
                        } else {
                            focusedDate.setDate(startDay + Math.floor((lastOfMonth - startDay) / 7) * 7);
                        }
                    } else if (nextDay > lastOfMonth){
                        if (direction.match(/left|right/)) {
                            focusedDate.setMonth(focusedDate.getMonth() - 1);
                            focusedDate.setDate(nextDay);
                        } else {
                            focusedDate.setDate(startDay % 7);
                        }
                    } else {
                        focusedDate.setDate(nextDay);
                    }
                }

                if (this.type.match(/^month/)) {
                    focusedDate.setMonth(focusedDate.getMonth() + mapPossibleValues(direction, 1, 3));
                }

                if (this.type.match(/^year/)) {
                    focusedDate.setFullYear(focusedDate.getFullYear() + mapPossibleValues(direction, 1, 3));
                }

                this.focusedDate = focusedDate;
            },
            handleInputChange (event) {
                const isArrayValue = this.type.includes('range') || this.multiple;
                const oldValue = this.visualValue;
                const newValue = event.target.value;
                const newDate = this.parseDate(newValue);
                const disabledDateFn =
                    this.options &&
                    typeof this.options.disabledDate === 'function' &&
                    this.options.disabledDate;
                const valueToTest = isArrayValue ? newDate : newDate[0];
                const isDisabled = disabledDateFn && disabledDateFn(valueToTest);
                const isValidDate = newDate.reduce((valid, date) => valid && date instanceof Date, true);

                if (newValue !== oldValue && !isDisabled && isValidDate) {
                    this.emitChange(this.type);
                    this.internalValue = newDate;
                } else {
                    this.forceInputRerender++;
                }
            },
            handleInputMouseenter () {
                if (this.readonly || this.itemDisabled) return;
                if (this.visualValue && this.clearable) {
                    this.showClose = true;
                }
            },
            handleInputMouseleave () {
                this.showClose = false;
            },
            handleIconClick (e) {
                if (this.showClose) {
                    if (e) e.stopPropagation();
                    this.handleClear();
                } else if (!this.itemDisabled) {
                    this.handleFocus();
                }
            },
            handleClear () {
                this.visible = false;
                this.internalValue = this.internalValue.map(() => null);
                this.$emit('on-clear');
                this.dispatch('FormItem', 'on-form-change', '');
                this.emitChange(this.type);
                this.reset();

                setTimeout(
                    () => this.onSelectionModeChange(this.type),
                    500 // delay to improve dropdown close visual effect
                );
            },
            emitChange (type) {
                this.$nextTick(() => {
                    this.$emit('on-change', this.publicStringValue, type);
                    this.dispatch('FormItem', 'on-form-change', this.publicStringValue);
                });
            },
            parseDate(val) {
                const isRange = this.type.includes('range');
                const type = this.type;
                const parser = (
                    TYPE_VALUE_RESOLVER_MAP[type] ||
                    TYPE_VALUE_RESOLVER_MAP['default']
                ).parser;
                const format = this.format || DEFAULT_FORMATS[type];
                const multipleParser = TYPE_VALUE_RESOLVER_MAP['multiple'].parser;

                if (val && type === 'time' && !(val instanceof Date)) {
                    val = parser(val, format, this.separator);
                } else if (this.multiple && val) {
                    val = multipleParser(val, format, this.separator);
                } else if (isRange) {
                    if (!val){
                        val = [null, null];
                    } else {
                        if (typeof val === 'string') {
                            val = parser(val, format, this.separator);
                        } else if (type === 'timerange') {
                            val = parser(val, format, this.separator).map(v => v || '');
                        } else {
                            const [start, end] = val;
                            if (start instanceof Date && end instanceof Date){
                                val = val.map(date => new Date(date));
                            } else if (typeof start === 'string' && typeof end === 'string'){
                                val = parser(val.join(this.separator), format, this.separator);
                            } else if (!start || !end){
                                val = [null, null];
                            }
                        }
                    }
                } else if (typeof val === 'string' && type.indexOf('time') !== 0){
                    val = parser(val, format) || null;
                }

                return (isRange || this.multiple) ? (val || []) : [val];
            },
            formatDate(value){
                const format = DEFAULT_FORMATS[this.type];

                if (this.multiple) {
                    const formatter = TYPE_VALUE_RESOLVER_MAP.multiple.formatter;
                    return formatter(value, this.format || format, this.separator);
                } else {
                    const {formatter} = (
                        TYPE_VALUE_RESOLVER_MAP[this.type] ||
                        TYPE_VALUE_RESOLVER_MAP['default']
                    );
                    return formatter(value, this.format || format, this.separator);
                }
            },
            onPick(dates, visible = false, type) {
                if (this.multiple){
                    const pickedTimeStamp = dates.getTime();
                    const indexOfPickedDate = this.internalValue.findIndex(date => date && date.getTime() === pickedTimeStamp);
                    const allDates = [...this.internalValue, dates].filter(Boolean);
                    const timeStamps = allDates.map(date => date.getTime()).filter((ts, i, arr) => arr.indexOf(ts) === i && i !== indexOfPickedDate); // filter away duplicates
                    this.internalValue = timeStamps.map(ts => new Date(ts));
                } else {
                    dates = this.parseDate(dates);
                    this.internalValue = Array.isArray(dates) ? dates : [dates];
                }

                if (this.internalValue[0]) this.focusedDate = this.internalValue[0];
                this.focusedTime = {
                    ...this.focusedTime,
                    time: this.internalValue.map(extractTime)
                };

                if (!this.isConfirm) this.onSelectionModeChange(this.type); // reset the selectionMode
                if (!this.isConfirm) this.visible = visible;
                this.emitChange(type);
            },
            onPickSuccess(){
                this.visible = false;
                this.$emit('on-ok');
                this.focus();
                this.reset();
            },
            focus() {
                this.$refs.input && this.$refs.input.focus();
            },
            updatePopper () {
                this.$refs.drop.update();
            }
        },
        watch: {
            visible (state) {
                if (state === false){
                    this.$refs.drop.destroy();
                }
                if (state) this.$refs.drop.update(); // 解决：修改完 #589 #590 #592，Drop 收起时闪动
                this.$emit('on-open-change', state);
            },
            value(val) {
                this.internalValue = this.parseDate(val);
            },
            open (val) {
                this.visible = val === true;
            },
            type(type){
                this.onSelectionModeChange(type);
            },
            publicVModelValue(now, before){
                const newValue = JSON.stringify(now);
                const oldValue = JSON.stringify(before);
                const shouldEmitInput = newValue !== oldValue || typeof now !== typeof before;
                if (shouldEmitInput) this.$emit('input', now); // to update v-model
            },
        },
        mounted () {
            const initialValue = this.value;
            const parsedValue = this.publicVModelValue;
            if (typeof initialValue !== typeof parsedValue || JSON.stringify(initialValue) !== JSON.stringify(parsedValue)){
                this.$emit('input', this.publicVModelValue); // to update v-model
            }
            if (this.open !== null) this.visible = this.open;

            // to handle focus from confirm buttons
            this.$on('focus-input', () => this.focus());
            this.$on('update-popper', () => this.updatePopper());
        },
        beforeDestroy() {
            this.$off('focus-input');
            this.$off('update-popper');
        }
    };
</script>
