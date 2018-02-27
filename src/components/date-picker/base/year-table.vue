<template>
    <div :class="classes">
        <span
            :class="getCellCls(cell)"
            v-for="cell in cells"
            @click="handleClick(cell)"
            @mouseenter="handleMouseMove(cell)"
        >
            <em>{{ cell.date.getFullYear() }}</em>
        </span>
    </div>
</template>
<script>
    import { clearHours } from '../util';
    import { deepCopy } from '../../../utils/assist';
    import mixin from './mixin';
    import prefixCls from './prefixCls';

    export default {
        mixins: [ mixin ],

        props: {/* in mixin */},
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-year`
                ];
            },
            startYear() {
                return Math.floor(this.tableDate.getFullYear() / 10) * 10;
            },
            cells () {
                let cells = [];
                const cell_tmpl = {
                    text: '',
                    selected: false,
                    disabled: false
                };

                const selectedDays = this.dates.filter(Boolean).map(date => clearHours(new Date(date.getFullYear(), 0, 1)));

                for (let i = 0; i < 10; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.date = new Date(this.startYear + i, 0, 1);
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'year';
                    const time = clearHours(cell.date);
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
        }
    };
</script>
