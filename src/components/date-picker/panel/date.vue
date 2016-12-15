<template>
    <div :class="[prefixCls + '-body-wrapper']">
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                <span
                    :class="iconBtnCls('prev', '-double')"
                    @click="prevYear"><Icon type="ios-arrow-left"></Icon></span>
                <span
                    :class="iconBtnCls('prev')"
                    @click="prevMonth"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-left"></Icon></span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showYearPicker">{{ yearLabel }}</span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showMonthPicker"
                    v-show="currentView === 'date'">{{ month + 1 + '月' }}</span>
                <span
                    :class="iconBtnCls('next', '-double')"
                    @click="nextYear"><Icon type="ios-arrow-right"></Icon></span>
                <span
                    :class="iconBtnCls('next')"
                    @click="nextMonth"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
            </div>
            <div :class="[prefixCls + '-content']">
                <date-table
                    v-show="currentView === 'date'"
                    :year="year"
                    :month="month"
                    :date="date"
                    :value="value"
                    :week="week"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleDatePick"></date-table>
                <year-table
                    v-ref:year-table
                    v-show="currentView === 'year'"
                    :year="year"
                    :date="date"
                    :disabled-date="disabledDate"
                    @on-pick="handleYearPick"></year-table>
                <month-table
                    v-ref:month-table
                    v-show="currentView === 'month'"
                    :month="month"
                    :date="date"
                    :disabled-date="disabledDate"
                    @on-pick="handleMonthPick"></month-table>
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon/icon.vue';
    import DateTable from '../base/date-table.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-table.vue';
    import { formatDate, parseDate } from '../util';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        components: { Icon, DateTable, YearTable, MonthTable },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                currentView: 'date',
                date: new Date(),
                value: '',
                showTime: false,
                selectionMode: 'day',
                visible: false,
                disabledDate: '',
                year: null,
                month: null,
                week: null,
                showWeekNumber: false,
                timePickerVisible: false
            }
        },
        computed: {
            yearLabel () {
                const year = this.year;
                if (!year) return '';
                if (this.currentView === 'year') {
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}年 - ${startYear + 9}年`;
                }
                return `${year}年`
            }
        },
        watch: {
            value (newVal) {
                console.log(12331)
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    // todo
//                    if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(newVal))) return;

                    this.date = newVal;
                    this.year = newVal.getFullYear();
                    this.month = newVal.getMonth();
//                    this.$emit('on-pick', newVal, true);
                }
            }
        },
        methods: {
            handleClear() {
                this.date = new Date();
                this.$emit('on-pick', '');
            },
            handleShortcutClick (shortcut) {

            },
            iconBtnCls (direction, type = '') {
                return [
                    `${prefixCls}-icon-btn`,
                    `${datePrefixCls}-${direction}-btn`,
                    `${datePrefixCls}-${direction}-btn-arrow${type}`,
                ]
            },
            resetDate () {
                this.date = new Date(this.date);
            },
            prevYear () {
                if (this.currentView === 'year') {
                    this.$refs.yearTable.prevTenYear();
                } else {
                    this.year--;
                    this.date.setFullYear(this.year);
                    this.resetDate();
                }
            },
            nextYear () {
                if (this.currentView === 'year') {
                    this.$refs.yearTable.nextTenYear();
                } else {
                    this.year++;
                    this.date.setFullYear(this.year);
                    this.resetDate();
                }
            },
            prevMonth () {
                this.month--;
                if (this.month < 0) {
                    this.month = 11;
                    this.year--;
                }
            },
            nextMonth () {
                this.month++;
                if (this.month > 11) {
                    this.month = 0;
                    this.year++;
                }
            },
            showYearPicker () {
                this.currentView = 'year';
            },
            showMonthPicker () {
                this.currentView = 'month';
            },
            handleYearPick(year, close = true) {
                this.year = year;
                if (!close) return;

                this.date.setFullYear(year);
                if (this.selectionMode === 'year') {
                    this.$emit('on-pick', new Date(year));
                } else {
                    this.currentView = 'month';
                }

                this.resetDate();
            },
            handleMonthPick (month) {
                this.month = month;
                const selectionMode = this.selectionMode;
                if (selectionMode !== 'month') {
                    this.date.setMonth(month);
                    this.currentView = 'date';
                    this.resetDate();
                } else {
                    this.date.setMonth(month);
                    this.year && this.date.setFullYear(this.year);
                    this.resetDate();
                    const value = new Date(this.date.getFullYear(), month, 1);
                    this.$emit('on-pick', value);
                }
            },
            handleDatePick (value) {
                if (this.selectionMode === 'day') {
                    if (!this.showTime) {
                        this.$emit('on-pick', new Date(value.getTime()));
                    }
                    this.date.setFullYear(value.getFullYear());
                    this.date.setMonth(value.getMonth());
                    this.date.setDate(value.getDate());
                }

                this.resetDate();
            },
            resetView() {
                if (this.selectionMode === 'month') {
                    this.currentView = 'month';
                } else if (this.selectionMode === 'year') {
                    this.currentView = 'year';
                } else {
                    this.currentView = 'date';
                }

                this.year = this.date.getFullYear();
                this.month = this.date.getMonth();
            }
        },
        compiled () {
            if (this.selectionMode === 'month') {
                this.currentView = 'month';
            }

            if (this.date && !this.year) {
                this.year = this.date.getFullYear();
                this.month = this.date.getMonth();
            }
        }
    }
</script>