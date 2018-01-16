<template>
    <div :class="classes">
        <div :class="[prefixCls + '-header']">
            <span v-for="day in headerDays" :key="day">
                {{day}}
            </span>
        </div>
        <span
                :class="getCellCls(cell)"
                v-for="cell in readCells"
                @click="handleClick(cell)"
                @mouseenter="handleMouseMove(cell)"
        >
            <em>{{ cell.text }}</em>
        </span>
    </div>
</template>
<script>
    import { getFirstDayOfMonth, getDayCountOfMonth, clearHours, isInRange } from '../util';
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';

    import mixin from './mixin';
    import prefixCls from './prefixCls';


    export default {
        mixins: [ Locale, mixin ],

        props: {
            /* more props in mixin */
        },
        data () {
            return {
                prefixCls: prefixCls,
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            headerDays () {
                const weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
                const translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(item => {
                    return this.t('i.datepicker.weeks.' + item);
                });
                const weekDays = translatedDays.splice(weekStartDay, 7 - weekStartDay).concat(translatedDays.splice(0, weekStartDay));
                return weekDays;
            },
            readCells () {
                const tableYear = this.tableDate.getFullYear();
                const tableMonth = this.tableDate.getMonth();
                const date = new Date(tableYear, tableMonth, 1);
                const weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
                const day = (getFirstDayOfMonth(date) || 7) - weekStartDay; // day of first day
                const today = clearHours(new Date());    // timestamp of today
                const selectedDays = this.dates.filter(Boolean).map(clearHours);    // timestamp of selected days
                const [minDay, maxDay] = this.dates.map(clearHours);
                const rangeStart = this.rangeState.from && clearHours(this.rangeState.from);
                const rangeEnd = this.rangeState.to && clearHours(this.rangeState.to);

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    date: null,
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
                        cell.date = new Date(tableYear, tableMonth - 1, cell.text);
                        const time = clearHours(cell.date);
                        cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                        cells.push(cell);
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.text = i;
                    cell.date = new Date(tableYear, tableMonth, cell.text);
                    const time = clearHours(cell.date);
                    cell.type = time === today ? 'today' : 'normal';
                    cell.selected = selectedDays.includes(time);
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    if (this.selectionMode === 'range'){
                        cell.range = isInRange(time, rangeStart, rangeEnd);
                        cell.start = time === minDay;
                        cell.end = time === maxDay;
                    }
                    cells.push(cell);
                }

                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;
                    cell.date = new Date(tableYear, tableMonth + 1, cell.text);
                    const time = clearHours(cell.date);
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }

                return cells;
            }
        },
        methods: {
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
                ];
            },

        }
    };
</script>
