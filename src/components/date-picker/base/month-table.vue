<template>
    <div :class="classes" @click="handleClick">
        <span :class="getCellCls(cell)" v-for="cell in cells"><em :index="$index">{{ cell.text }}月</em></span>
    </div>
</template>
<script>
    import { deepCopy } from '../../../utils/assist';
    const prefixCls = 'ivu-date-picker-cells';

    export default {
        props: {
            date: {},
            month: {
                type: Number
            },
            disabledDate: {}
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-month`
                ]
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
                    cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date);

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
                ]
            },
            handleClick (event) {
                const target = event.target;
                if (target.tagName === 'EM') {
                    const index = parseInt(event.target.getAttribute('index'));
                    const cell = this.cells[index];
                    if (cell.disabled) return;

                    this.$emit('on-pick', index);
                }
            }
        }
    }
</script>