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
                        :class="[datePrefixCls + '-header-label']"
                        @click="showYearPicker('left')">{{ leftYearLabel }}</span>
                    <span
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('left')"
                        v-show="leftCurrentView === 'year' || leftCurrentView === 'month'"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <year-table
                    ref="leftYearTable"
                    v-show="leftCurrentView === 'year'"
                    :year="leftTableYear"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleLeftYearPick"
                    @on-pick-click="handlePickClick"></year-table>
                <month-table
                    ref="leftMonthTable"
                    v-show="leftCurrentView === 'month'"
                    :month="leftMonth"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleLeftMonthPick"
                    @on-pick-click="handlePickClick"></month-table>
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
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear('right')"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <year-table
                    ref="rightYearTable"
                    v-show="rightCurrentView === 'year'"
                    :year="rightTableYear"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleRightYearPick"
                    @on-pick-click="handlePickClick"></year-table>
                <month-table
                    ref="rightMonthTable"
                    v-show="rightCurrentView === 'month'"
                    :month="rightMonth"
                    selection-mode="range"
                    :disabled-date="disabledDate"
                    @on-pick="handleRightMonthPick"
                    @on-pick-click="handlePickClick"></month-table>
            </div>
            <Confirm
                v-if="confirm"
                :show-time="showTime"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon/icon.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-table.vue';
    import Confirm from '../base/confirm.vue';
    import { toDate, initTimeDate } from '../util';

    import Mixin from './mixin';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        name: 'DatePicker',
        mixins: [ Mixin, Locale ],
        components: { Icon, YearTable, MonthTable, Confirm },
        data () {
            return {
                prefixCls: prefixCls,
                datePrefixCls: datePrefixCls,
                shortcuts: [],
                lDate: initTimeDate(),
                rDate: initTimeDate(),
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
                format: 'yyyy-MM-dd'
            };
        },
        computed: {
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
                return this.lDate.getFullYear();
            },
            leftTableDate () {
                if (this.leftCurrentView === 'year' || this.leftCurrentView === 'month') {
                    return new Date(this.leftTableYear);
                } else {
                    return this.lDate;
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
                return this.lDate.getMonth();
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
                    return this.rDate;
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
                const newDate = new Date(this.rDate);
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
                    if (this.minDate) this.lDate = new Date(this.minDate);
                    if (this.maxDate) this.rDate = new Date(this.maxDate);
                    this.rDate.setMonth(this.rDate.getMonth() - 1);
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
            }
        },
        methods: {
            resetDate () {
                this.lDate = new Date(this.lDate);
                this.rDate = new Date(this.rDate);
                this.leftTableYear = this.lDate.getFullYear();
                this.rightTableYear = this.rightDate.getFullYear();
            },
            handleClear() {
                this.minDate = null;
                this.maxDate = null;
                this.lDate = new Date();
                this.rDate = new Date();
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
                }
            },
            nextYear (direction) {
                if (this[`${direction}CurrentView`] === 'year') {
                    this.$refs[`${direction}YearTable`].nextTenYear();
                } else if (this[`${direction}CurrentView`] === 'month') {
                    this[`${direction}TableYear`]++;
                }
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
                if ( direction === 'right') {
                    if (this.rDate.getFullYear() > year) {
                        this.handleRightMonthPick(11);
                    } else {
                        this.handleRightMonthPick(0);
                    }
                }
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
                        this.lDate.setYear(year);
                    } else {
                        month--;
                    }
                    this.rDate.setYear(year);
                    this.rDate.setMonth(month);
                    if (this.rDate < this.lDate) {
                        this.lDate = this.rDate;
                    }
                } else {
                    this.lDate.setYear(year);
                    this.lDate.setMonth(month);

                    if (this.lDate > this.rDate) {
                        this.rDate = this.lDate;
                    }
                }
                this.resetDate();

                let maxDate = new Date(this.rDate);
                let currentMonth = maxDate.getMonth() + 1;
                maxDate.setMonth(currentMonth);

                this.$emit('on-pick', [this.lDate, maxDate], false);
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
            }
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
