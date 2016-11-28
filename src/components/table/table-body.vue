<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="style">
        <colgroup>
            <col v-for="column in columns" :width="setCellWidth(column, $index)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <tr
                v-for="(index, row) in data"
                :class="rowClasses(index, row._index)"
                @mouseenter.stop="handleMouseIn(index)"
                @mouseleave.stop="handleMouseOut(index)"
                @click.stop="highlightCurrentRow(index)">
                <td v-for="column in columns" :class="alignCls(column)">
                    <Cell
                        :fixed="fixed"
                        :prefix-cls="prefixCls"
                        :row="row"
                        :column="column"
                        :natural-index="index"
                        :index="row._index"
                        :checked="rowChecked(index, row._index)"></Cell>
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
            cloneData: Array,
            objData: Object,
            fixed: Boolean
        },
        methods: {
            rowClasses (index, _index) {
                return [
                    `${this.prefixCls}-row`,
                    this.rowClsName(_index),
                    {
                        [`${this.prefixCls}-row-highlight`]: this.cloneData[index] && this.cloneData[index]._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.cloneData[index] && this.cloneData[index]._isHover
                    }
                ]
            },
            rowChecked (index, _index) {
//                const data = this.cloneData.filter(row => row._index === _index);
//                return data && data._isChecked;
                return this.objData[_index]._isChecked;
            },
            setCellWidth (column, index) {
                return this.$parent.setCellWidth(column, index);
            },
            rowClsName (index) {
                return this.$parent.rowClassName(this.cloneData[index], index);
            },
            handleMouseIn (index) {
                this.$parent.handleMouseIn(index);
            },
            handleMouseOut (index) {
                this.$parent.handleMouseOut(index);
            },
            highlightCurrentRow (index) {
                this.$parent.highlightCurrentRow(index);
            }
        }
    }
</script>
