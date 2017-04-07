<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styleObject">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, false)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
        <template v-for="(row, index) in data">
            <tr
                    :key="row"
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
                            :column="column"
                            :natural-index="index"
                            :index="row._index"
                            :checked="rowChecked(row._index)"
                            :disabled="rowDisabled(row._index)"
                            :expand="rowExpand(row._index)"
                    ></Cell>
                </td>
            </tr>
            <tr v-show="rowExpand(row._index)" :class="expandClsses(row._index)">
                <td :colspan="columenCount()">
                    <Expand :expand-template="expandTemplate()" :data="row"></Expand>
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</template>
<script>
    // todo :key="row"
    import Cell from './cell.vue';
    import Mixin from './mixin';

    export default {
        name: 'TableBody',
        mixins: [ Mixin ],
        components: {
            Cell,
            Expand: {
                functional: true,
                render: function (createElement, context) {
                    return createElement(context.props.expandTemplate, {
                        props: {
                            data: context.props.data
                        }
                    });
                },
                props: {
                    expandTemplate: Object,
                    data: Object
                }
            }
        },
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
            expandClsses (_index) {
                return [
                    `${this.prefixCls}-row`,
                    `${this.prefixCls}-row-expand`,
                    this.rowClsName(_index),
                ];
            },
            expandTemplate () {
                return this.$parent.getExpandTemplate();
            },
            columenCount () {
                return this.columns.length;
            },
            rowExpand (_index) {
                return this.objData[_index]._showExpand;
            },
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
            },
            rowDisabled(_index){
                return this.objData[_index] && this.objData[_index]._isDisabled;
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
