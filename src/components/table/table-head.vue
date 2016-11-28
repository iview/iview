<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="style">
        <colgroup>
            <col v-for="column in columns" :width="setCellWidth(column, $index)">
        </colgroup>
        <thead>
            <tr>
                <th v-for="column in columns" :class="alignCls(column)">
                    <div :class="cellClasses(column)">
                        <template v-if="column.type === 'selection'"><Checkbox :checked="isSelectAll" @on-change="selectAll"></Checkbox></template>
                        <template v-else>
                            {{{ renderHeader(column, $index) }}}
                            <span :class="[prefixCls + '-sort']" v-if="column.sortable">
                                <i class="ivu-icon ivu-icon-arrow-up-b" :class="{on: sortType === 'asc'}" @click="handleSortAsc($index)"></i>
                                <i class="ivu-icon ivu-icon-arrow-down-b" :class="{on: sortType === 'desc'}" @click="handleSortDesc($index)"></i>
                            </span>
                        </template>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</template>
<script>
    import Checkbox from '../checkbox/checkbox.vue';
    import Mixin from './mixin';
    import { deepCopy } from '../../utils/assist';

    export default {
        mixins: [ Mixin ],
        components: { Checkbox },
        props: {
            prefixCls: String,
            style: Object,
            columns: Array,
            cloneData: Array,
            fixed: Boolean
        },
        data () {
            return {
                sortType: 'normal'
            }
        },
        computed: {
            isSelectAll () {
                return !this.cloneData.some(data => !data._isChecked);
            }
        },
        methods: {
            cellClasses (column) {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')
                    }
                ]
            },
            setCellWidth (column, index) {
                return this.$parent.setCellWidth(column, index);
            },
            renderHeader (column, $index) {
                if ('renderHeader' in this.columns[$index]) {
                    return this.columns[$index].renderHeader(column, $index);
                } else {
                    return column.title || '#';
                }
            },
            selectAll () {
                const status = !this.isSelectAll;
                this.$parent.selectAll(status);
            },
            handleSortAsc (index) {
                if (this.sortType === 'asc') {
                    this.sortType = 'normal';
                    this.$parent.handleSort(index, 'normal');
                } else {
                    this.sortType = 'asc';
                    this.$parent.handleSort(index, 'asc');
                }
            },
            handleSortDesc (index) {
                if (this.sortType === 'desc') {
                    this.sortType = 'normal';
                    this.$parent.handleSort(index, 'normal');
                } else {
                    this.sortType = 'desc';
                    this.$parent.handleSort(index, 'desc');
                }
            }
        }
    }
</script>
