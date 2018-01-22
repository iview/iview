<template>
    <table cellspacing="0" cellpadding="0" border="0" :style="styles">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, true)">
        </colgroup>
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :class="alignCls(column)">
                    <div :class="cellClasses(column)">
                        <template v-if="column.type === 'expand'">
                            <span v-if="!column.renderHeader">{{ column.title || '' }}</span>
                            <render-header v-else :render="column.renderHeader" :column="column" :index="index"></render-header>
                        </template>
                        <template v-else-if="column.type === 'selection'"><Checkbox :value="isSelectAll" :disabled="!data.length" @on-change="selectAll"></Checkbox></template>
                        <template v-else>
                            <span v-if="!column.renderHeader" @click="handleSortByHead(index)">{{ column.title || '#' }}</span>
                            <render-header v-else :render="column.renderHeader" :column="column" :index="index"></render-header>
                            <span :class="[prefixCls + '-sort']" v-if="column.sortable">
                                <i class="ivu-icon ivu-icon-arrow-up-b" :class="{on: column._sortType === 'asc'}" @click="handleSort(index, 'asc')"></i>
                                <i class="ivu-icon ivu-icon-arrow-down-b" :class="{on: column._sortType === 'desc'}" @click="handleSort(index, 'desc')"></i>
                            </span>
                            <Poptip
                                v-if="isPopperShow(column)"
                                v-model="column._filterVisible"
                                placement="bottom"
                                @on-popper-hide="handleFilterHide(column._index)">
                                <span :class="[prefixCls + '-filter']">
                                    <i class="ivu-icon ivu-icon-funnel" :class="{on: column._isFiltered}"></i>
                                </span>
                                <div slot="content" :class="[prefixCls + '-filter-list']" v-if="column._filterMultiple">
                                    <div :class="[prefixCls + '-filter-list-item']">
                                        <checkbox-group v-model="column._filterChecked">
                                            <checkbox v-for="(item, index) in column.filters" :key="index" :label="item.value">{{ item.label }}</checkbox>
                                        </checkbox-group>
                                    </div>
                                    <div :class="[prefixCls + '-filter-footer']">
                                        <i-button type="text" size="small" :disabled="!column._filterChecked.length" @click.native="handleFilter(column._index)">{{ t('i.table.confirmFilter') }}</i-button>
                                        <i-button type="text" size="small" @click.native="handleReset(column._index)">{{ t('i.table.resetFilter') }}</i-button>
                                    </div>
                                </div>
                                <div slot="content" :class="[prefixCls + '-filter-list']" v-else>
                                    <ul :class="[prefixCls + '-filter-list-single']">
                                        <li
                                            :class="itemAllClasses(column)"
                                            @click="handleReset(column._index)">{{ t('i.table.clearFilter') }}</li>
                                        <li
                                            :class="itemClasses(column, item)"
                                            v-for="item in column.filters"
                                            @click="handleSelect(column._index, item.value)">{{ item.label }}</li>
                                    </ul>
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
    import renderHeader from './header';
    import Mixin from './mixin';
    import Locale from '../../mixins/locale';

    export default {
        name: 'TableHead',
        mixins: [ Mixin, Locale ],
        components: { CheckboxGroup, Checkbox, Poptip, iButton, renderHeader },
        props: {
            prefixCls: String,
            styleObject: Object,
            columns: Array,
            objData: Object,
            data: Array,    // rebuildData
            columnsWidth: Object,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        computed: {
            styles () {
                const style = Object.assign({}, this.styleObject);
                const width = this.$parent.bodyHeight === 0 ? parseInt(this.styleObject.width) : parseInt(this.styleObject.width) + this.$parent.scrollBarWidth;
                style.width = `${width}px`;
                return style;
            },
            isSelectAll () {
                let isSelectAll = true;
                if (!this.data.length) isSelectAll = false;
                if (!this.data.find(item => !item._disabled)) isSelectAll = false;    // #1751
                for (let i = 0; i < this.data.length; i++) {
                    if (!this.objData[this.data[i]._index]._isChecked && !this.objData[this.data[i]._index]._isDisabled) {
                        isSelectAll = false;
                        break;
                    }
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
                ];
            },
            itemClasses (column, item) {
                return [
                    `${this.prefixCls}-filter-select-item`,
                    {
                        [`${this.prefixCls}-filter-select-item-selected`]: column._filterChecked[0] === item.value
                    }
                ];
            },
            itemAllClasses (column) {
                return [
                    `${this.prefixCls}-filter-select-item`,
                    {
                        [`${this.prefixCls}-filter-select-item-selected`]: !column._filterChecked.length
                    }
                ];
            },
            selectAll () {
                const status = !this.isSelectAll;
                this.$parent.selectAll(status);
            },
            handleSort (index, type) {
                const column = this.columns[index];
                const _index = column._index;

                if (column._sortType === type) {
                    type = 'normal';
                }
                this.$parent.handleSort(_index, type);
            },
            handleSortByHead (index) {
                const column = this.columns[index];
                if (column.sortable) {
                    const type = column._sortType;
                    if (type === 'normal') {
                        this.handleSort(index, 'asc');
                    } else if (type === 'asc') {
                        this.handleSort(index, 'desc');
                    } else {
                        this.handleSort(index, 'normal');
                    }
                }
            },
            handleFilter (index) {
                this.$parent.handleFilter(index);
            },
            handleSelect (index, value) {
                this.$parent.handleFilterSelect(index, value);
            },
            handleReset (index) {
                this.$parent.handleFilterReset(index);
            },
            handleFilterHide (index) {
                this.$parent.handleFilterHide(index);
            }
        }
    };
</script>
