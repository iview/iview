<template>
    <div :class="classes" @mousedown.prevent>
        <div :class="[prefixCls + '-sidebar']" v-if="shortcuts.length">
            <div
                :class="[prefixCls + '-shortcut']"
                v-for="shortcut in shortcuts"
                @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</div>
        </div>
        <div :class="[prefixCls + '-body']">
            <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                <span
                    :class="iconBtnCls('prev', '-double')"
                    @click="changeYear(-1)"><Icon type="ios-arrow-left"></Icon></span>
                <span
                    :class="iconBtnCls('prev')"
                    @click="changeMonth(-1)"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-left"></Icon></span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showYearPicker">{{ yearLabel }}</span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showMonthPicker"
                    v-show="currentView === 'date'">{{ monthLabel }}</span>
                <span
                    :class="iconBtnCls('next', '-double')"
                    @click="changeYear(+1)"><Icon type="ios-arrow-right"></Icon></span>
                <span
                    :class="iconBtnCls('next')"
                    @click="changeMonth(+1)"
                    v-show="currentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
            </div>
            <div :class="[prefixCls + '-content']">
                <date-table
                    v-show="currentView === 'date'"
                    :year="year"
                    :month="month"
                    :date="date"
                    :value="value"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleDatePick"
                    @on-pick-click="handlePickClick"></date-table>
                <year-table
                    ref="yearTable"
                    v-show="currentView === 'year'"
                    :year="year"
                    :date="date"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleYearPick"
                    @on-pick-click="handlePickClick"></year-table>
                <month-table
                    ref="monthTable"
                    v-show="currentView === 'month'"
                    :month="month"
                    :date="date"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleMonthPick"
                    @on-pick-click="handlePickClick"></month-table>
                <time-picker
                    ref="timePicker"
                    show-date
                    v-show="currentView === 'time'"
                    @on-pick="handleTimePick"
                    @on-pick-click="handlePickClick"></time-picker>
            </div>
            <Confirm
                v-if="confirm"
                :show-time="showTime"
                :is-time="isTime"
                @on-pick-toggle-time="handleToggleTime"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon/icon.vue';
    import DateTable from '../base/date-table.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-table.vue';
    import TimePicker from './time.vue';
    import Confirm from '../base/confirm.vue';

    import Mixin from './mixin';
    import Locale from '../../../mixins/locale';

    import { initTimeDate, siblingMonth } from '../util';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        name: 'DatePicker',
        mixins: [ Mixin, Locale ],
        components: { Icon, DateTable, YearTable, MonthTable, TimePicker, Confirm },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                currentView: 'date',
                date: initTimeDate(),
                value: '',
                showTime: false,
                selectionMode: 'day',
                disabledDate: '',
                year: null,
                month: null,
                confirm: false,
                isTime: false,
                format: 'yyyy-MM-dd'
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    {
                        [`${prefixCls}-with-sidebar`]: this.shortcuts.length
                    }
                ];
            },
            yearLabel () {
                const tYear = this.t('i.datepicker.year');
                const year = this.year;
                if (!year) return '';
                if (this.currentView === 'year') {
                    const startYear = Math.floor(year / 10) * 10;
                    return `${startYear}${tYear} - ${startYear + 9}${tYear}`;
                }
                return `${year}${tYear}`;
            },
            monthLabel () {
                const month = this.month + 1;
                return this.t(`i.datepicker.month${month}`);
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    this.date = newVal;
                    this.setMonthYear(newVal);
                }
                if (this.showTime) this.$refs.timePicker.value = newVal;
            },
            date (val) {
                if (this.showTime) this.$refs.timePicker.date = val;
            },
            format (val) {
                if (this.showTime) this.$refs.timePicker.format = val;
            },
            currentView (val) {
                if (val === 'time') this.$refs.timePicker.updateScroll();
            }
        },
        methods: {
            resetDate () {
                this.date = new Date(this.date);
            },
            setMonthYear(date){
                this.month = date.getMonth();
                this.year = date.getFullYear();
            },
            handleClear () {
                this.date = new Date();
                this.$emit('on-pick', '');
                if (this.showTime) this.$refs.timePicker.handleClear();
            },
            resetView (reset = false) {
                if (this.currentView !== 'time' || reset) {
                    if (this.selectionMode === 'month') {
                        this.currentView = 'month';
                    } else if (this.selectionMode === 'year') {
                        this.currentView = 'year';
                    } else {
                        this.currentView = 'date';
                    }
                }
                this.setMonthYear(this.date);
                if (reset) this.isTime = false;
            },
            changeYear(dir){
                if (this.currentView === 'year') {
                    this.$refs.yearTable[dir == 1 ? 'nextTenYear' : 'prevTenYear']();
                } else {
                    this.year+= dir;
                    this.date = siblingMonth(this.date, dir * 12);
                }
            },
            changeMonth(dir){
                this.date = siblingMonth(this.date, dir);
                this.setMonthYear(this.date);
            },
            showYearPicker () {
                this.currentView = 'year';
            },
            showMonthPicker () {
                this.currentView = 'month';
            },
            handleToggleTime () {
                if (this.currentView === 'date') {
                    this.currentView = 'time';
                    this.isTime = true;
                } else if (this.currentView === 'time') {
                    this.currentView = 'date';
                    this.isTime = false;
                }
            },
            handleYearPick(year, close = true) {
                this.year = year;
                if (!close) return;

                this.date.setFullYear(year);
                if (this.selectionMode === 'year') {
                    this.$emit('on-pick', new Date(year, 0, 1));
                } else {
                    this.currentView = 'month';
                }

                this.resetDate();
            },
            handleMonthPick (month) {
                this.month = month;
                this.date.setMonth(month);
                if (this.selectionMode !== 'month') {
                    this.currentView = 'date';
                    this.resetDate();
                } else {
                    this.year && this.date.setFullYear(this.year);
                    this.resetDate();
                    const value = new Date(this.date.getFullYear(), month, 1);
                    this.$emit('on-pick', value);
                }
            },
            handleDatePick (value) {
                if (this.selectionMode === 'day') {
                    this.$emit('on-pick', new Date(value.getTime()));
                    this.date = new Date(value);
                }
            },
            handleTimePick (date) {
                this.handleDatePick(date);
            }
        },
        mounted () {
            if (this.selectionMode === 'month') {
                this.currentView = 'month';
            }

            if (this.date && !this.year) {
                this.setMonthYear(this.date);
            }
            if (this.showTime) {
                // todo 这里可能有问题，并不能进入到这里，但不影响正常使用
                this.$refs.timePicker.date = this.date;
                this.$refs.timePicker.value = this.value;
                this.$refs.timePicker.format = this.format;
                this.$refs.timePicker.showDate = true;
            }
        }
    };
</script>
