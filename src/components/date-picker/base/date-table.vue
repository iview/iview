<template>
    <div
        :class="classes"
        @click="handleClick"
        @mousemove="handleMouseMove">
        <div :class="[prefixCls + '-header']">
            <span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>
        </div>
        <span :class="getCellCls(cell)" v-for="cell in cells"><em :index="$index">{{ cell.text }}</em></span>
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
                        selecting: false
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
                const minDay = clearHours(new Date(this.minDate));
                const maxDay = clearHours(new Date(this.maxDate));

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
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
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.minDate && time === minDay;
                    cell.end = this.maxDate && time === maxDay;

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
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    if (cell.disabled) return;

                    let year = this.year;
                    let month = this.month;
                    let day = cell.text;

                    if (cell.type === 'prev-month') {
                        if (month === 0) {
                            month = 11;
                            year--;
                        } else {
                            month--;
                        }
                    } else if (cell.type === 'next-month') {
                        if (month === 11) {
                            month = 0;
                            year++;
                        } else {
                            month++;
                        }
                    }

                    const newDate = new Date(year, month, day);

                    if (this.selectionMode === 'range') {
                        // todo
                        if (this.minDate && this.maxDate) {
                            const minDate = new Date(newDate.getTime());
                            const maxDate = null;
                            this.$emit('on-pick', {minDate, maxDate}, false);
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);
                        } else if (this.minDate && !this.maxDate) {
                            if (newDate >= this.minDate) {
                                const maxDate = new Date(newDate.getTime());
                                this.rangeState.selecting = false;

                                this.$emit('on-pick', {minDate: this.minDate, maxDate});
                            } else {
                                const minDate = new Date(newDate.getTime());

                                this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                            }
                        } else if (!this.minDate) {
                            const minDate = new Date(newDate.getTime());

                            this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);
                        }
                    } else {
                        this.$emit('on-pick', newDate);
                    }
                }
            },
            handleMouseMove () {

            },
            markRange (maxDate) {
                const startDate = this.startDate;
                if (!maxDate) {
                    maxDate = this.maxDate;
                }

                const rows = this.rows;
                const minDate = this.minDate;
                for (var i = 0, k = rows.length; i < k; i++) {
                    const row = rows[i];
                    for (var j = 0, l = row.length; j < l; j++) {
                        if (this.showWeekNumber && j === 0) continue;

                        const cell = row[j];
                        const index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
                        const time = startDate.getTime() + DAY_DURATION * index;

                        cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
                        cell.start = minDate && time === clearHours(minDate.getTime());
                        cell.end = maxDate && time === clearHours(maxDate.getTime());
                    }
                }
            },
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected || cell.start || cell.end,
                        [`${prefixCls}-cell-disabled`]: cell.disabled,
                        [`${prefixCls}-cell-today`]: cell.type === 'today',
                        [`${prefixCls}-cell-prev-month`]: cell.type === 'prev-month',
                        [`${prefixCls}-cell-next-month`]: cell.type === 'next-month',
                        [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ]
            },

        }
    }
</script>