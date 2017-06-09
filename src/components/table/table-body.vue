<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, false)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <template v-for="(row, index) in data">
                <tr
                    :class="rowClasses(row._index)"
                    @mouseenter.stop="handleMouseIn(row._index)"
                    @mouseleave.stop="handleMouseOut(row._index)"
                    @click.stop="clickCurrentRow(row._index)"
                    @dblclick.stop="dblclickCurrentRow(row._index)">
                    <td v-for="column in columns" :class="alignCls(column, row)">
                        <Cell
                            :fixed="fixed"
                            :prefix-cls="prefixCls"
                            :row="row"
                            :key="row"
                            :column="column"
                            :natural-index="index"
                            :index="row._index"
                            :checked="rowChecked(row._index)"
                            :disabled="rowDisabled(row._index)"
                            :expanded="rowExpanded(row._index)"
                        ></Cell>
                    </td>
                </tr>
                <tr v-if="rowExpanded(row._index)">
                    <td :colspan="columns.length" :class="prefixCls + '-expanded-cell'">
                        <Expand :key="row" :row="row" :render="expandRender" :index="row._index"></Expand>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script>
    // todo :key="row"
    import Cell from './cell.vue';
    import Expand from './expand.js';
    import Mixin from './mixin';

    export default {
        name: 'TableBody',
        mixins: [ Mixin ],
        components: { Cell, Expand },
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
            rowClasses (_index) {
                return [
                    `${this.prefixCls}-row`,
                    this.rowClsName(_index),
                    {
                        [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
                    }
                ];
            },
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
            },
            rowDisabled(_index){
                return this.objData[_index] && this.objData[_index]._isDisabled;
            },
            rowExpanded(_index){
                return this.objData[_index] && this.objData[_index]._isExpanded;
            },
            rowClsName (_index) {
                return this.$parent.rowClassName(this.objData[_index], _index);
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
            }
        }
    };
</script>
