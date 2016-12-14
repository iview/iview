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
                    @click="prevYear"></span>
                <span
                    :class="iconBtnCls('prev')"
                    @click="prevMonth"
                    v-show="currentView === 'date'"></span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showYearPicker">{{  }}</span>
                <span
                    :class="[datePrefixCls + '-header-label']"
                    @click="showMonthPicker"
                    v-show="currentView === 'date'">{{  }}</span>
                <span
                    :class="iconBtnCls('next')"
                    @click="nextMonth"
                    v-show="currentView === 'date'"></span>
                <span
                    :class="iconBtnCls('next', '-double')"
                    @click="nextYear"></span>
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
                    :disabled-date="disabledDate"></date-table>
                <year-table
                    v-show="currentView === 'year'"></year-table>
                <month-table
                    v-show="currentView === 'month'"></month-table>
            </div>
        </div>
    </div>
</template>
<script>
    import DateTable from '../base/date-table.vue';
    import YearTable from '../base/year-table.vue';
    import MonthTable from '../base/month-table.vue';

    const prefixCls = 'ivu-picker-panel';
    const datePrefixCls = 'ivu-date-picker';

    export default {
        components: { DateTable, YearTable, MonthTable },
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

        },
        watch: {
            value (newVal) {
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
            handleShortcutClick (shortcut) {

            },
            iconBtnCls (direction, type = '') {
                return [
                    `${prefixCls}-icon-btn`,
                    `${datePrefixCls}-${direction}-btn`,
                    `${datePrefixCls}-${direction}-btn-arrow${type}`,
                ]
            },
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
        },
        beforeDestroy () {

        }
    }
</script>