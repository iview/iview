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
                                <i class="ivu-icon ivu-icon-arrow-up-b" :class="{on: column._sortType === 'asc'}" @click="handleSort($index, 'asc')"></i>
                                <i class="ivu-icon ivu-icon-arrow-down-b" :class="{on: column._sortType === 'desc'}" @click="handleSort($index, 'desc')"></i>
                            </span>
                            <Poptip v-if="column.filters" :visible.sync="column._filterVisible" placement="bottom">
                                <span :class="[prefixCls + '-filter']">
                                    <i class="ivu-icon ivu-icon-funnel" :class="{on: column._isFiltered}"></i>
                                </span>
                                <div slot="content" :class="[prefixCls + '-filter-list']">
                                    <div :class="[prefixCls + '-filter-list-item']">
                                        <checkbox-group :model.sync="column._filterChecked">
                                            <checkbox v-for="item in column.filters" :value="item.value">{{ item.label }}</checkbox>
                                        </checkbox-group>
                                    </div>
                                    <ul>
                                        <!--<li v-for="(filterIndex, item) in column.filters"><Checkbox :checked="column._filterChecked.indexOf(item.value) > -1" @on-change="handleFilterChecked(index, filterIndex)">{{ item.label }}</Checkbox></li>-->

                                    </ul>
                                    <div :class="[prefixCls + '-filter-footer']">
                                        <i-button type="text" size="small" @click="handleFilter($index)">筛选</i-button>
                                        <i-button type="text" size="small" @click="handleReset($index)">重置</i-button>
                                    </div>
                                </div>
                            </Poptip>
                        </template>
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</template>
<script>
    import CheckboxGroup from '../checkbox/checkbox-group.vue';
    import Checkbox from '../checkbox/checkbox.vue';
    import Poptip from '../poptip/poptip.vue';
    import iButton from '../button/button.vue';
    import Mixin from './mixin';
    import { deepCopy } from '../../utils/assist';

    export default {
        mixins: [ Mixin ],
        components: { CheckboxGroup, Checkbox, Poptip, iButton },
        props: {
            prefixCls: String,
            style: Object,
            columns: Array,
            objData: Object,
            fixed: Boolean
        },
        computed: {
            isSelectAll () {
                let isSelectAll = true;
                for (let i in this.objData) {
                    if (!this.objData[i]._isChecked) isSelectAll = false;
                }

                return isSelectAll;
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
            handleSort (index, type) {
                if (this.columns[index]._sortType === type) {
                    type = 'normal';
                }
                this.$parent.handleSort(index, type);
            },
            handleFilter (index) {

            },
            handleReset (index) {

            },
            handleFilterChecked (index, filterIndex) {

            }
        }
    }
</script>
