<template>
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
</template>
<script>
    // todo :key="row"
    import Cell from './cell.vue';
    import Mixin from './mixin';

    export default {
        name: 'TableRow',
        mixins: [ Mixin ],
        components: { Cell },
        props: {
            prefixCls: String,
            columns: Array,
            index: Number,
            row: Object,
            highlightData: Object,
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
                        [`${this.prefixCls}-row-highlight`]: this.highlightData && this.highlightData._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.highlightData && this.highlightData._isHover
                    }
                ];
            },
            rowChecked (_index) {
                return this.$parent.rowChecked(_index);
            },
            rowDisabled(_index){
                return this.$parent.rowDisabled(_index);
            },
            rowExpanded(_index){
                return this.$parent.rowExpanded(_index);
            },
            rowClsName (_index) {
                return this.$parent.rowClsName(_index);
            },
            handleMouseIn (_index) {
                return this.$parent.handleMouseIn(_index);
            },
            handleMouseOut (_index) {
                return this.$parent.handleMouseOut(_index);
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
