<template>
    <div :class="classes" @click="handleClick" @mousemove="handleMouseMove">
        <span :class="getCellCls(cell)" v-for="(cell, index) in cells"><em :index="index">{{ tCell(cell.text) }}</em></span>
    </div>
</template>
<script>
    ////////////import 和 template
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';
    const prefixCls = 'ivu-date-picker-cells';

    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        mixins: [ Locale ],
        props: {
            date: {},//抛弃使用
            year: {},
            month: {},
            selectionMode: {
                default: 'month' //改不改好像没有关系
            },
            disabledDate: {}, //只比较月份，day部分抛弃
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
                prefixCls: prefixCls,
                readCells: []
            };
        },
        watch: {
            'rangeState.endDate' (newVal) {
                this.markRange(newVal);
            },
            minDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = true;
                    this.markRange(newVal);
                } else if (!newVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                } else {
                    this.markRange();
                }
            },
            maxDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
//                    this.$emit('on-pick', {
//                        minDate: this.minDate,
//                        maxDate: this.maxDate
//                    });
                }
            },
            cells: {
                handler (cells) {
                    this.readCells = cells;
                },
                immediate: true
            }
        },
        computed: {
            /////样式
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-month`
                ];
            },
            cells () {

                //最重要的cells
                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
                    //添加 type end start range
                };

                const today = this.getMonthTime(new Date().getFullYear(),new Date().getMonth());//今天的月的末尾用作对比
//                const selectDay = date;
                const minDay = this.getMonthTime(new Date(this.minDate).getFullYear(),new Date(this.minDate).getMonth());
                const maxDay = this.getMonthTime(new Date(this.maxDate).getFullYear(),new Date(this.maxDate).getMonth());
                //原来用日的事件戳，现在统一用月的最后一天的23:59:59来当作月的时间
                //没有上一年的月出现在同一个table的情况所以跳过设置prevmonth
                for (let i = 0; i < 12; i++) {
                    const cell = deepCopy(cell_tmpl);
                    const time = this.getMonthTime(this.year,i);//获取月时间用作对比
                    cell.text = i + 1;
                    cell.type = time === today ? 'today' : 'normal';
//                    cell.selected = time === selectDay;
//                    const date = new Date(this.date);
//                    date.setMonth(i);
                    //注意等下要去看disabledDate函数的实现
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(time);
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.minDate && time === minDay;
                    cell.end = this.maxDate && time === maxDay;
//                    cell.selected = Number(this.month) === i;
                    cells.push(cell);
                }
                return cells;
            }
        },
        methods: {
            getMonthTime(year,month){
                var date = new Date(year,month+1,1);
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                return date.getTime()-1000;
            },
            getDateOfCell (cell) {
//                let year = this.year;
//                let month = this.month;
//                let day = cell.text;

//                const date = this.date;
//                const hours = date.getHours();
//                const minutes = date.getMinutes();
//                const seconds = date.getSeconds();
//
//                if (cell.type === 'prev-month') {
//                    if (month === 0) {
//                        month = 11;
//                        year--;
//                    } else {
//                        month--;
//                    }
//                } else if (cell.type === 'next-month') {
//                    if (month === 11) {
//                        month = 0;
//                        year++;
//                    } else {
//                        month++;
//                    }
//                }

//                return new Date(year, month, day, hours, minutes, seconds);
                //获取单元格的月
                return new Date(this.getMonthTime(this.year,cell.text-1));
            },
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    if (cell.disabled) return;

                    const newDate = this.getDateOfCell(cell);//注意这里的date已经是变换后的月末日

                    if (this.selectionMode === 'range') {

                        if (this.minDate && this.maxDate) {
                            const minDate = new Date(newDate.getTime());
                            const maxDate = null;
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);

                            this.$emit('on-pick', {minDate, maxDate}, false);
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
                            this.rangeState.selecting = true;
                            this.markRange(this.minDate);

                            this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                        }
                    } else {
                        this.$emit('on-pick', newDate);
                    }
                }
                this.$emit('on-pick-click');
            },
            handleMouseMove (event) {
                if (!this.rangeState.selecting) return;

                this.$emit('on-changerange', {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    rangeState: this.rangeState
                });

                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
//                    if (cell.disabled) return;    // todo 待确定
                    this.rangeState.endDate = this.getDateOfCell(cell);
                }
            },
            markRange (maxDate) {
                const minDate = this.minDate;
                if (!maxDate) maxDate = this.maxDate;

//                const minDay = clearHours(new Date(minDate));
//                const maxDay = clearHours(new Date(maxDate));
                const minDay = this.getMonthTime(new Date(minDate).getFullYear(),new Date(minDate).getMonth());
                const maxDay = this.getMonthTime(new Date(maxDate).getFullYear(),new Date(maxDate).getMonth());
                this.cells.forEach(cell => {
                    if (cell.type === 'today' || cell.type === 'normal') {
//                        const time = clearHours(new Date(this.year, this.month, cell.text));
                        const time = this.getMonthTime(this.year,cell.text-1);
                        cell.range = time >= minDay && time <= maxDay;
                        cell.start = minDate && time === minDay;
                        cell.end = maxDate && time === maxDay;
                    }
                });
            },
            getCellCls (cell) {
                //getCellCls
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
            tCell (cell) {
                //添加tCell
                return this.t(`i.datepicker.months.m${cell}`);
            }

        }
    };
</script>
