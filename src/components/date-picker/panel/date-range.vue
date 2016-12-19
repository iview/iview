<template>
    <div :class="classes">
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']">
                <div :class="[datePrefixCls + '-header']" v-show="leftCurrentView !== 'time'">
                    <span
                        :class="iconBtnCls('prev', '-double')"
                        @click="prevYear('left')"><Icon type="ios-arrow-left"></Icon></span>
                    <span
                        :class="iconBtnCls('prev')"
                        @click="prevMonth"
                        v-show="leftCurrentView === 'date'"><Icon type="ios-arrow-left"></Icon></span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showYearPicker('left')">{{ leftYearLabel }}</span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showMonthPicker('left')"
                        v-show="leftCurrentView === 'date'">{{ leftMonth + 1 }} 月</span>
                    <span
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('left')"
                        v-show="leftCurrentView === 'year' || leftCurrentView === 'month'"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <date-table
                    v-show="leftCurrentView === 'date'"
                    :year="leftYear"
                    :month="leftMonth"
                    :date="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :range-state="rangeState"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-changerange="handleChangeRange"
                    @on-pick="handleRangePick"></date-table>
                <year-table
                    v-ref:left-year-table
                    v-show="leftCurrentView === 'year'"
                    :year="leftTableYear"
                    :date="leftTableDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleLeftYearPick"></year-table>
                <month-table
                    v-ref:left-month-table
                    v-show="leftCurrentView === 'month'"
                    :month="leftMonth"
                    :date="leftTableDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleLeftMonthPick"></month-table>
            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']">
                <div :class="[datePrefixCls + '-header']" v-show="rightCurrentView !== 'time'">
                     <span
                         :class="iconBtnCls('prev', '-double')"
                         @click="prevYear('right')"
                         v-show="rightCurrentView === 'year' || rightCurrentView === 'month'"><Icon type="ios-arrow-left"></Icon></span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showYearPicker('right')">{{ rightYearLabel }}</span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showMonthPicker('right')"
                        v-show="rightCurrentView === 'date'">{{ rightMonth + 1 }} 月</span>
                    <span
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('right')"><Icon type="ios-arrow-right"></Icon></span>
                    <span
                        :class="iconBtnCls('next')"
                        @click="nextMonth"
                        v-show="rightCurrentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <date-table
                    v-show="rightCurrentView === 'date'"
                    :year="rightYear"
                    :month="rightMonth"
                    :date="rightDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :range-state="rangeState"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-changerange="handleChangeRange"
                    @on-pick="handleRangePick"></date-table>
                <year-table
                    v-ref:right-year-table
                    v-show="rightCurrentView === 'year'"
                    :year="rightTableYear"
                    :date="rightTableDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleRightYearPick"></year-table>
                <month-table
                    v-ref:right-month-table
                    v-show="rightCurrentView === 'month'"
                    :month="rightMonth"
                    :date="rightTableDate"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleRightMonthPick"></month-table>
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon/icon.vue';
    import DateTable from '../base/date-table.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-table.vue';
    import { toDate, prevMonth, nextMonth } from '../util';

    import Mixin from './mixin';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        mixins: [Mixin],
        components: { Icon, DateTable, YearTable, MonthTable },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                date: new Date(),
                value: '',
                minDate: '',
                maxDate: '',
                rangeState: {
                    endDate: null,
                    selecting: false
                },
                showTime: false,
                disabledDate: '',
                leftCurrentView: 'date',
                rightCurrentView: 'date',
                selectionMode: 'range',
                leftTableYear: null,
                rightTableYear: null
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    `${datePrefixCls}-with-range`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ]
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
                if (this.leftCurrentView === 'year') {
                    const year = this.leftTableYear;
                    if (!year) return '';
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}年 - ${startYear + 9}年`;
                } else {
                    const year = this.leftCurrentView === 'month' ? this.leftTableYear : this.leftYear;
                    if (!year) return '';
                    return `${year}年`;
                }
            },
            leftMonth () {
                return this.date.getMonth();
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
                if (this.rightCurrentView === 'year') {
                    const year = this.rightTableYear;
                    if (!year) return '';
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}年 - ${startYear + 9}年`;
                } else {
                    const year = this.rightCurrentView === 'month' ? this.rightTableYear : this.rightYear;
                    if (!year) return '';
                    return `${year}年`;
                }
            },
            rightMonth () {
                return this.rightDate.getMonth();
            },
            rightDate () {
                const newDate = new Date(this.date);
                const month = newDate.getMonth();
                newDate.setDate(1);

                if (month === 11) {
                    newDate.setFullYear(newDate.getFullYear() + 1);
                    newDate.setMonth(0);
                } else {
                    newDate.setMonth(month + 1);
                }
                return newDate;
            }
        },
        watch: {
            value(newVal) {
                if (!newVal) {
                    this.minDate = null;
                    this.maxDate = null;
                } else if (Array.isArray(newVal)) {
                    this.minDate = newVal[0] ? toDate(newVal[0]) : null;
                    this.maxDate = newVal[1] ? toDate(newVal[1]) : null;
                    if (this.minDate) this.date = new Date(this.minDate);
                }
            }
        },
        methods: {
            resetDate () {
                this.date = new Date(this.date);
                this.leftTableYear = this.date.getFullYear();
                this.rightTableYear = this.rightDate.getFullYear();
            },
            handleClear() {
                this.minDate = null;
                this.maxDate = null;
                this.date = new Date();
                this.handleConfirm();
            },
            resetView() {
                this.leftCurrentView = 'date';
                this.rightCurrentView = 'date';

                this.leftTableYear = this.leftYear;
                this.rightTableYear = this.rightYear;
            },
            prevYear (direction) {
                if (this[`${direction}CurrentView`] === 'year') {
                    this.$refs[`${direction}YearTable`].prevTenYear();
                } else if (this[`${direction}CurrentView`] === 'month') {
                    this[`${direction}TableYear`]--;
                } else {
                    const date = this.date;
                    date.setFullYear(date.getFullYear() - 1);
                    this.resetDate();
                }
            },
            nextYear (direction) {
                if (this[`${direction}CurrentView`] === 'year') {
                    this.$refs[`${direction}YearTable`].nextTenYear();
                } else if (this[`${direction}CurrentView`] === 'month') {
                    this[`${direction}TableYear`]--;
                } else {
                    const date = this.date;
                    date.setFullYear(date.getFullYear() + 1);
                    this.resetDate();
                }
            },
            prevMonth () {
                this.date = prevMonth(this.date);
            },
            nextMonth () {
                this.date = nextMonth(this.date);
            },
            handleLeftYearPick (year, close = true) {
                this.handleYearPick(year, close, 'left');
            },
            handleRightYearPick (year, close = true) {
                this.handleYearPick(year, close, 'right');
            },
            handleYearPick (year, close, direction) {
                this[`${direction}TableYear`] = year;
                if (!close) return;

                this[`${direction}CurrentView`] = 'month';
            },
            handleLeftMonthPick (month) {
                this.handleMonthPick(month, 'left');
            },
            handleRightMonthPick (month) {
                this.handleMonthPick(month, 'right');
            },
            handleMonthPick (month, direction) {
                let year = this[`${direction}TableYear`];
                if (direction === 'right') {
                    if (month === 0) {
                        month = 11;
                        year--;
                    } else {
                        month--;
                    }
                }

                this.date.setYear(year);
                this.date.setMonth(month);
                this[`${direction}CurrentView`] = 'date';
                this.resetDate();
            },
            showYearPicker (direction) {
                this[`${direction}CurrentView`] = 'year';
                this[`${direction}TableYear`] = this[`${direction}Year`];
            },
            showMonthPicker (direction) {
                this[`${direction}CurrentView`] = 'month';
            },
            handleConfirm(visible) {
                this.$emit('on-pick', [this.minDate, this.maxDate], visible);
            },
            handleRangePick (val, close = true) {
                if (this.maxDate === val.maxDate && this.minDate === val.minDate) return;

                this.minDate = val.minDate;
                this.maxDate = val.maxDate;

                if (!close) return;
                if (!this.showTime) {
                    this.handleConfirm(false);
                }
            },
            handleChangeRange (val) {
                this.minDate = val.minDate;
                this.maxDate = val.maxDate;
                this.rangeState = val.rangeState;
            }
        }
    }
</script>