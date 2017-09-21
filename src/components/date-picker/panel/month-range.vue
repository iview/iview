<template>
    <div :class="classes">
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                    :class="[prefixCls + '-shortcut']"
                    v-for="shortcut in shortcuts"
                    @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']" v-show="!isTime">
                <div :class="[datePrefixCls + '-header']" v-show="leftCurrentView !== 'time'">
                    <span
                            :class="iconBtnCls('prev', '-double')"
                            @click="prevYear('left')"><Icon type="ios-arrow-left"></Icon></span>
                    <span
                            :class="[datePrefixCls + '-header-label']"
                            @click="showYearPicker('left')">{{ leftYearLabel }}</span>

                </div>
                <month-table
                        v-show="leftCurrentView === 'month'"
                        :year="leftYear"
                        :date="leftTableDate"
                        :month="leftMonth"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :range-state="rangeState"
                        selection-mode="range"
                        :disabled-month="disabledDate"
                        @on-changerange="handleChangeRange"
                        @on-pick="handleRangePick"
                        @on-pick-click="handlePickClick"
                        >
                </month-table>
                <year-table
                        ref="leftYearTable"
                        v-show="leftCurrentView === 'year'"
                        :year="leftTableYear"
                        :date="leftTableDate"
                        selection-mode="range"
                        :disabled-date="disabledDate"
                        @on-pick="handleLeftYearPick"
                        @on-pick-click="handlePickClick"></year-table>


            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']" v-show="!isTime">
                <div :class="[datePrefixCls + '-header']" v-show="rightCurrentView !== 'time'">
                    <span
                            :class="[datePrefixCls + '-header-label']"
                            @click="showYearPicker('right')">{{ rightYearLabel }}</span>
                    <span
                            :class="iconBtnCls('next', '-double')"
                            @click="nextYear('right')"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <month-table
                        v-show="rightCurrentView === 'month'"
                        :year="rightYear"
                        :month="rightMonth"
                        :date="rightTableDate"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :range-state="rangeState"
                        selection-mode="range"
                        :disabled-date="disabledDate"
                        @on-changerange="handleChangeRange"
                        @on-pick="handleRangePick"
                        @on-pick-click="handlePickClick"></month-table>
                <year-table
                        ref="rightYearTable"
                        v-show="rightCurrentView === 'year'"
                        :year="rightTableYear"
                        :date="rightTableDate"
                        selection-mode="range"
                        :disabled-date="disabledDate"
                        @on-pick="handleRightYearPick"
                        @on-pick-click="handlePickClick"></year-table>

            </div>
            <Confirm
                    v-if="confirm"
                    :show-time="showTime"
                    :is-time="isTime"
                    :time-disabled="timeDisabled"
                    @on-pick-toggle-time="handleToggleTime"
                    @on-pick-clear="handlePickClear"
                    @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/icon.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-range-table.vue';
    import TimePicker from './time-range.vue';
    import Confirm from '../base/confirm.vue';
    import { toDate,  initTimeDate } from '../util';

    import Mixin from './mixin';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        name: 'DatePicker',
        mixins: [ Mixin, Locale ],
        components: { Icon, YearTable, MonthTable, TimePicker, Confirm },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                date: initTimeDate(),
                value: '',
                minDate: '',
                maxDate: '',
                confirm: false,
                rangeState: {
                    endDate: null,
                    selecting: false
                },
                showTime: false,
                disabledDate: '',
                leftCurrentView: 'month',
                rightCurrentView: 'month',
                selectionMode: 'range',
                leftTableYear: null,
                rightTableYear: null,
                isTime: false,
                format: 'yyyy-MM',
            };
        },
        computed:{
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    `${datePrefixCls}-with-range`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ];
            },
            leftYear () {
                return this.date.getFullYear();
            },
            leftTableDate () {
                if (this.leftCurrentView === 'year' || this.leftCurrentView === 'month') {
                    return new Date(this.leftTableYear);
                } else {
                    return this.date;
                }
            },
            leftYearLabel () {
                const tYear = this.t('i.datepicker.year');
                if (this.leftCurrentView === 'year') {
                    const year = this.leftTableYear;
                    if (!year) return '';
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}${tYear} - ${startYear + 9}${tYear}`;
                } else {
                    const year = this.leftCurrentView === 'month' ? this.leftTableYear : this.leftYear;
                    if (!year) return '';
                    return `${year}${tYear}`;
                }
            },
            leftMonth () {
                return this.date.getMonth();
            },
            leftMonthLabel () {
                const month = this.leftMonth + 1;
                return this.t(`i.datepicker.month${month}`);
            },
            rightYear () {
                return this.rightDate.getFullYear();
            },
            rightTableDate () {
                if (this.rightCurrentView === 'year' || this.rightCurrentView === 'month') {
                    return new Date(this.rightTableYear);
                } else {
                    return this.date;
                }
            },
            rightYearLabel () {
                const tYear = this.t('i.datepicker.year');
                if (this.rightCurrentView === 'year') {
                    const year = this.rightTableYear;
                    if (!year) return '';
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}${tYear} - ${startYear + 9}${tYear}`;
                } else {
                    const year = this.rightCurrentView === 'month' ? this.rightTableYear : this.rightYear;
                    if (!year) return '';
                    return `${year}${tYear}`;
                }
            },
            rightMonth () {
                return this.rightDate.getMonth();
            },
            rightMonthLabel () {
                const month = this.rightMonth + 1;
                return this.t(`i.datepicker.month${month}`);
            },
            rightDate () {
                //重设初始的年月对照
                const newDate = new Date(this.date);
                const year = newDate.getFullYear();
                const month = newDate.getMonth();
                newDate.setDate(0);
                newDate.setMonth(month);
                newDate.setFullYear(year+1);
//                if (month === 11) {
//                    newDate.setFullYear(newDate.getFullYear() + 1);
//                    newDate.setMonth(0);
//                } else {
//                    newDate.setMonth(month + 1);
//                }
                return newDate;
            },
            timeDisabled () {
                return !(this.minDate && this.maxDate);
            }
        },
        watch:{
            value(newVal) {
                if (!newVal) {
                    this.minDate = null;
                    this.maxDate = null;
                } else if (Array.isArray(newVal)) {
                    this.minDate = newVal[0] ? toDate(newVal[0]) : null;
                    this.maxDate = newVal[1] ? toDate(newVal[1]) : null;
                    if (this.minDate) this.date = new Date(this.minDate);
                }
                if (this.showTime) this.$refs.timePicker.value = newVal;
            },
            minDate (val) {
                if (this.showTime) this.$refs.timePicker.date = val;
            },
            maxDate (val) {
                if (this.showTime) this.$refs.timePicker.dateEnd = val;
            },
            format (val) {
                if (this.showTime) this.$refs.timePicker.format = val;
            },
            isTime (val) {
                if (val) this.$refs.timePicker.updateScroll();
            }
        },
        methods:{
            resetDate () {
                this.date = new Date(this.date);
                this.leftTableYear = this.date.getFullYear();
                this.rightTableYear = this.date.getFullYear()+1;
            },
            handleClear() {
                this.minDate = null;
                this.maxDate = null;
                this.date = new Date();
                this.handleConfirm();
                if (this.showTime) this.$refs.timePicker.handleClear();
            },
            resetView(reset = false) {
                this.leftCurrentView = 'month';
                this.rightCurrentView = 'month';
                this.leftTableYear = this.leftYear;
                this.rightTableYear = this.rightYear;

                if (reset) this.isTime = false;
            },
            prevYear (direction) {
                if (this[`${direction}CurrentView`] === 'year') {
                    this.$refs[`${direction}YearTable`].prevTenYear();
                } else if (this[`${direction}CurrentView`] === 'month') {
                    this[`${direction}TableYear`]--;
                    const date = this.date;
                    date.setFullYear(date.getFullYear() - 1);
                    this.date = date;
                    this.resetDate();
                }
//                else {
//                    const date = this.date;
//                    date.setFullYear(date.getFullYear() - 1);
//                    this.resetDate();
//                }
            },
            nextYear (direction) {
                if (this[`${direction}CurrentView`] === 'year') {
                    this.$refs[`${direction}YearTable`].nextTenYear();
                } else if (this[`${direction}CurrentView`] === 'month') {
                    this[`${direction}TableYear`]++;
                    const date = this.date;
                    date.setFullYear(date.getFullYear() + 1);
                    this.date = date;
                    this.resetDate();
                }
//                else {
//                    const date = this.date;
//                    date.setFullYear(date.getFullYear() + 1);
//                    this.resetDate();
//                }
            },
//            prevMonth () {
//                this.date = prevMonth(this.date);
//            },
//            nextMonth () {
//                this.date = nextMonth(this.date);
//            },
            handleLeftYearPick (year, close = true) {
                this.handleYearPick(year, close, 'left');
            },
            handleRightYearPick (year, close = true) {
                this.handleYearPick(year, close, 'right');
            },
            handleYearPick (year, close, direction) {
                switch (direction){
                    case 'left':
                        this[`${direction}TableYear`] = year;
                        this['rightTableYear'] = year+1;
                        break;
                    case 'right':
                        this[`${direction}TableYear`] = year;
                        this['leftTableYear'] = year-1;
                        break;
                }
                const date = this.date;
                date.setFullYear(this['leftTableYear']);
                this.date = date;
                this.resetDate();
//                this[`${direction}TableYear`] = year;
                if (!close) return;

                this[`${direction}CurrentView`] = 'month';
            },
            showYearPicker (direction) {
                this[`${direction}CurrentView`] = 'year';
                this[`${direction}TableYear`] = this[`${direction}Year`];
            },
            handleConfirm(visible) {
                this.$emit('on-pick', [this.minDate, this.maxDate], visible);
            },
            handleRangePick (val, close = true) {
                if (this.maxDate === val.maxDate && this.minDate === val.minDate) return;
                this.minDate = val.minDate;
                this.maxDate = val.maxDate;
                if (!close) return;
//                if (!this.showTime) {
//                    this.handleConfirm(false);
//                }
                this.handleConfirm(false);
            },
            handleChangeRange (val) {
                this.minDate = val.minDate;
                this.maxDate = val.maxDate;
                this.rangeState = val.rangeState;
            },
        },
        mounted () {
            if (this.showTime) {
                // todo 这里也到不了
                this.$refs.timePicker.date = this.minDate;
                this.$refs.timePicker.dateEnd = this.maxDate;
                this.$refs.timePicker.value = this.value;
                this.$refs.timePicker.format = this.format;
                this.$refs.timePicker.showDate = true;
            }
        }

    };

</script>