<template>
    <div :class="classes" @click="handleClick">
        <span :class="getCellCls(cell)" v-for="(cell, index) in cells"><em :index="index">{{ tCell(cell.text) }}</em></span>
    </div>
</template>
<script>
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';
    const prefixCls = 'ivu-date-picker-cells';

    export default {
        mixins: [ Locale ],
        props: {
            date: {},
            month: {
                type: Number
            },
            disabledDate: {},
            selectionMode: {
                default: 'month'
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-month`
                ];
            },
            cells () {
                let cells = [];
                const cell_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false
                };

                for (let i = 0; i < 12; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.text = i + 1;

                    const date = new Date(this.date);
                    date.setMonth(i);
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date)  && this.selectionMode === 'month';

                    cell.selected = Number(this.month) === i;
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
                        [`${prefixCls}-cell-selected`]: cell.selected,
                        [`${prefixCls}-cell-disabled`]: cell.disabled
                    }
                ];
            },
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'EM') {
                    const index = parseInt(event.target.getAttribute('index'));
                    const cell = this.cells[index];
                    if (cell.disabled) return;

                    this.$emit('on-pick', index);
                }
                this.$emit('on-pick-click');
            },
            tCell (cell) {
                return this.t(`i.datepicker.months.m${cell}`);
            }
        }
    };
</script>
