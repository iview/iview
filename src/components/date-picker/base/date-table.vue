<template>
    <table
        cellspacing="0"
        cellpadding="0"
        :class="classes"
        @click="handleClick"
        @mousemove="handleMouseMove">
        <tbody>
            <tr>
                <th v-if="showWeekNumber"></th>
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
            </tr>
            <tr :class="rowCls(row[1])" v-for="row in rows">
                <td :class="getCellClasses(cell)" v-for="cell in row">{{ cell.text }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    const prefixCls = 'ivu-date-picker-table';

    export default {
        props: {
            date: {},
            year: {},
            month: {},
            week: {},
            selectionMode: {
                default: 'day'
            },
            showWeekNumber: {
                type: Boolean,
                default: false
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
            value: {}
        },
        data () {
            return {
                prefixCls: prefixCls
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-week-mode`]: this.selectionMode === 'week'
                    }
                ]
            }
        },
        methods: {
            handleClick () {

            },
            handleMouseMove () {

            },
            rowCls (cell) {
                return [
                    `${prefixCls}-row`,
                    {
                        [`${prefixCls}-row-current`]: this.value && this.isWeekActive(cell)
                    }
                ]
            },
            isWeekActive (cell) {

            },
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-today`]: cell.type === 'today'
                    }
                ]
            }
        }
    }
</script>