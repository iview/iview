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
                        @click="showYearPicker">{{ leftYear }} 年</span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showMonthPicker"
                        v-show="currentView === 'date'">{{ leftMonth + 1 }} 月</span>
                </div>
                <date-table
                    v-show="currentView === 'date'"
                    :year="leftYear"
                    :month="leftMonth"
                    :date="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :range-state="rangeState"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleDatePick"></date-table>
            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']">
                <div :class="[datePrefixCls + '-header']" v-show="currentView !== 'time'">
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showYearPicker">{{ rightYear }} 年</span>
                    <span
                        :class="[datePrefixCls + '-header-label']"
                        @click="showMonthPicker"
                        v-show="currentView === 'date'">{{ rightMonth + 1 }} 月</span>
                    <span
                        :class="iconBtnCls('next', '-double')"
                        @click="nextYear"><Icon type="ios-arrow-right"></Icon></span>
                    <span
                        :class="iconBtnCls('next')"
                        @click="nextMonth"
                        v-show="currentView === 'date'"><Icon type="ios-arrow-right"></Icon></span>
                </div>
                <date-table
                    v-show="currentView === 'date'"
                    :year="rightYear"
                    :month="rightMonth"
                    :date="rightDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                    :range-state="rangeState"
                    :selection-mode="selectionMode"
                    :disabled-date="disabledDate"
                    @on-pick="handleDatePick"></date-table>
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon/icon.vue';
    import DateTable from '../base/date-table.vue';
    import { toDate } from '../util';

    import Mixin from './mixin';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        mixins: [Mixin],
        components: { Icon, DateTable },
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
                currentView: 'date',
                selectionMode: 'range'
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
            leftYear() {
                return this.date.getFullYear();
            },
            leftMonth() {
                return this.date.getMonth();
            },
            rightYear() {
                return this.rightDate.getFullYear();
            },
            rightMonth() {
                return this.rightDate.getMonth();
            },
            rightDate() {
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
//                    this.handleConfirm(true);    // todo 稍后测试
                }
            }
        },
        methods: {
            prevYear () {

            },
            nextYear () {

            },
            prevMonth () {

            },
            nextMonth () {

            },
            showYearPicker () {

            },
            showMonthPicker () {

            },
            handleDatePick () {

            },
            handleConfirm(visible) {
                this.$emit('on-pick', [this.minDate, this.maxDate], visible);
            }
        }
    }
</script>