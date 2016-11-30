<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="style">
        <colgroup>
            <col v-for="item in setCellWidth" :width="setCellWidth($index)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <tr
                v-for="(index, row) in data"
                :class="rowClasses(row._index)"
                @mouseenter.stop="handleMouseIn(row._index)"
                @mouseleave.stop="handleMouseOut(row._index)"
                @click.stop="highlightCurrentRow(row._index)">
                <td v-for="column in columns" :class="alignCls(column)">
                    <Cell
                        :fixed="fixed"
                        :prefix-cls="prefixCls"
                        :row="row"
                        :column="column"
                        :natural-index="index"
                        :index="row._index"
                        :checked="rowChecked(row._index)"></Cell>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import Cell from './cell.vue';
    import Mixin from './mixin';

    export default {
        mixins: [ Mixin ],
        components: { Cell },
        props: {
            prefixCls: String,
            style: Object,
            columns: Array,
            data: Array,    // rebuildData
            objData: Object,
            columnsWidth: Array,
            fixed: {
                type: [Boolean, String],
                default: false
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
                ]
            },
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
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
            highlightCurrentRow (_index) {
                this.$parent.highlightCurrentRow(_index);
            }
        }
    }
</script>