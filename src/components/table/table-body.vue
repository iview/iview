<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <template v-for="(row, index) in data">
                <table-tr
                    :draggable="draggable"
                    :row="row"
                    :key="rowKey ? row._rowKey : index"
                    :prefix-cls="prefixCls"
                    @mouseenter.native.stop="handleMouseIn(row._index)"
                    @mouseleave.native.stop="handleMouseOut(row._index)"
                    @click.native="clickCurrentRow(row._index)"
                    @dblclick.native.stop="dblclickCurrentRow(row._index)">
                    <td v-for="(column, colIndex) in columns" :class="alignCls(column, row)" v-bind="getSpan(row, column, index, colIndex)" v-if="showWithSpan(row, column, index, colIndex)">
                        <table-cell
                            :fixed="fixed"
                            :prefix-cls="prefixCls"
                            :row="row"
                            :key="column._columnKey"
                            :column="column"
                            :natural-index="index"
                            :index="row._index"
                            :checked="rowChecked(row._index)"
                            :disabled="rowDisabled(row._index)"
                            :expanded="rowExpanded(row._index)"
                        ></table-cell>
                    </td>
                </table-tr>
                <tr v-if="rowExpanded(row._index)" :class="{[prefixCls + '-expanded-hidden']: fixed}">
                    <td :colspan="columns.length" :class="prefixCls + '-expanded-cell'">
                        <Expand :key="rowKey ? row._rowKey : index" :row="row" :render="expandRender" :index="row._index"></Expand>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script>
    // todo :key="row"
    import TableTr from './table-tr.vue';
    import TableCell from './cell.vue';
    import Expand from './expand.js';
    import Mixin from './mixin';

    export default {
        name: 'TableBody',
        mixins: [ Mixin ],
        components: { TableCell, Expand, TableTr },
        props: {
            prefixCls: String,
            styleObject: Object,
            columns: Array,
            data: Array,    // rebuildData
            objData: Object,
            columnsWidth: Object,
            fixed: {
                type: [Boolean, String],
                default: false
            },
            draggable: {
                type: Boolean,
                default: false
            },
            rowKey: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            expandRender () {
                let render = function () {
                    return '';
                };
                for (let i = 0; i < this.columns.length; i++) {
                    const column = this.columns[i];
                    if (column.type && column.type === 'expand') {
                        if (column.render) render = column.render;
                    }
                }
                return render;
            }
        },
        methods: {
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
            },
            rowDisabled(_index){
                return this.objData[_index] && this.objData[_index]._isDisabled;
            },
            rowExpanded(_index){
                return this.objData[_index] && this.objData[_index]._isExpanded;
            },
            handleMouseIn (_index) {
                this.$parent.handleMouseIn(_index);
            },
            handleMouseOut (_index) {
                this.$parent.handleMouseOut(_index);
            },
            clickCurrentRow (_index) {
                this.$parent.clickCurrentRow(_index);
            },
            dblclickCurrentRow (_index) {
                this.$parent.dblclickCurrentRow(_index);
            },
            getSpan (row, column, rowIndex, columnIndex) {
                const fn = this.$parent.spanMethod;
                if (typeof fn === 'function') {
                    const result = fn({
                        row,
                        column,
                        rowIndex,
                        columnIndex
                    });
                    let rowspan = 1;
                    let colspan = 1;
                    if (Array.isArray(result)) {
                        rowspan = result[0];
                        colspan = result[1];
                    } else if (typeof result === 'object') {
                        rowspan = result.rowspan;
                        colspan = result.colspan;
                    }
                    return {
                        rowspan,
                        colspan
                    };
                } else {
                    return {};
                }
            },
            showWithSpan (row, column, rowIndex, columnIndex) {
                const result = this.getSpan(row, column, rowIndex, columnIndex);
                return !(('rowspan' in result && result.rowspan === 0) || ('colspan' in result && result.colspan === 0));
            }
        }
    };
</script>
