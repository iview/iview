<template>
    <div :class="classes">
        <span
            :class="getCellCls(cell)"
            v-for="cell in cells"
            @click="handleClick(cell)"
            @mouseenter="handleMouseMove(cell)"

        >
            <em>{{ cell.text }}</em>
        </span>
    </div>
</template>
<script>
    import { clearHours } from '../util';
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';
    import mixin from './mixin';
    import prefixCls from './prefixCls';

    export default {
        mixins: [ Locale, mixin ],
        props: {/* in mixin */},
        computed: {
            classes() {
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

                const tableYear = this.tableDate.getFullYear();
                const selectedDays = this.dates.filter(Boolean).map(date => clearHours(new Date(date.getFullYear(), date.getMonth(), 1)));

                for (let i = 0; i < 12; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.date = new Date(tableYear, i, 1);
                    cell.text = this.tCell(i + 1);
                    const time = clearHours(cell.date);
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'month';
                    cell.selected = selectedDays.includes(time);
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
                        [`${prefixCls}-cell-disabled`]: cell.disabled,
                        [`${prefixCls}-cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ];
            },
            tCell (nr) {
                return this.t(`i.datepicker.months.m${nr}`);
            }
        }
    };
</script>
