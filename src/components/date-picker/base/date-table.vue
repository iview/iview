<template>
    <div
        :class="classes"
        @click="handleClick"
        @mousemove="handleMouseMove">
        <div :class="[prefixCls + '-header']">
            <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
        </div>
        <span :class="getCellCls(cell)" v-for="cell in cells"><em>{{ cell.text }}</em></span>
    </div>
</template>
<script>
    import { getFirstDayOfMonth, getDayCountOfMonth, getStartDateOfMonth } from '../util';
    import { deepCopy } from '../../../utils/assist';

    const prefixCls = 'ivu-date-picker-cells';

    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        props: {
            date: {},
            year: {},
            month: {},
            selectionMode: {
                default: 'day'
            },
            disabledDate: {},
            minDate: {},
            maxDate: {},
            rangeState: {
                default () {
                    return {
                        endDate: null,
                        selecting: false,
                        row: null,
                        column: null
                    };
                }
            },
            value: ''
        },
        data () {
            return {
                prefixCls: prefixCls
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ]
            },
            startDate() {
                return getStartDateOfMonth(this.year, this.month);
            },
            cells () {
                const date = new Date(this.year, this.month, 1);
                let day = getFirstDayOfMonth(date);    // day of first day
                day = (day === 0 ? 7 : day);
                const today = clearHours(new Date());    // timestamp of today
                const selectDay = clearHours(new Date(this.value));    // timestamp of selected day

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    selected: false,
                    disabled: false
                };
                if (day !== 7) {
                    for (let i = 0; i < day; i++) {
                        const cell = deepCopy(cell_tmpl);
                        cell.type = 'prev-month';
                        cell.text = dateCountOfLastMonth - (day - 1) + i;

                        let prevMonth = this.month - 1;
                        let prevYear = this.year;
                        if (this.month === 0) {
                            prevMonth = 11;
                            prevYear -= 1;
                        }
                        const time = clearHours(new Date(prevYear, prevMonth, cell.text));
                        cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                        cells.push(cell);
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    const time = clearHours(new Date(this.year, this.month, i));
                    cell.type = time === today ? 'today' : 'normal';
                    cell.text = i;
                    cell.selected = time === selectDay;
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }

                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;

                    let nextMonth = this.month + 1;
                    let nextYear = this.year;
                    if (this.month === 11) {
                        nextMonth = 0;
                        nextYear += 1;
                    }
                    const time = clearHours(new Date(nextYear, nextMonth, cell.text));
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }

                return cells;
            }
        },
        methods: {
            handleClick () {

            },
            handleMouseMove () {

            },
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected,
                        [`${prefixCls}-cell-disabled`]: cell.disabled,
                        [`${prefixCls}-cell-today`]: cell.type === 'today',
                        [`${prefixCls}-cell-prev-month`]: cell.type === 'prev-month',
                        [`${prefixCls}-cell-next-month`]: cell.type === 'next-month'
                    }
                ]
            },

        }
    }
</script>