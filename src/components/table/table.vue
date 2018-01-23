<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="classes">
            <div :class="[prefixCls + '-title']" v-if="showSlotHeader" ref="title"><slot name="header"></slot></div>
            <div :class="[prefixCls + '-header']" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
                <table-head
                    :prefix-cls="prefixCls"
                    :styleObject="tableStyle"
                    :columns="cloneColumns"
                    :obj-data="objData"
                    :columns-width="columnsWidth"
                    :data="rebuildData"></table-head>
            </div>
            <div :class="[prefixCls + '-body']" :style="bodyStyle" ref="body" @scroll="handleBodyScroll"
                v-show="!((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table-body
                    ref="tbody"
                    :prefix-cls="prefixCls"
                    :styleObject="tableStyle"
                    :columns="cloneColumns"
                    :data="rebuildData"
                    :columns-width="columnsWidth"
                    :obj-data="objData"></table-body>
            </div>
            <div
                :class="[prefixCls + '-tip']"
                v-show="((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td :style="{ 'height': bodyStyle.height }">
                                <span v-html="localeNoDataText" v-if="!data || data.length === 0"></span>
                                <span v-html="localeNoFilteredDataText" v-else></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div :class="[prefixCls + '-fixed']" :style="fixedTableStyle" v-if="isLeftFixed">
                <div :class="fixedHeaderClasses" v-if="showHeader">
                    <table-head
                        fixed="left"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :obj-data="objData"
                        :columns-width="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedBody">
                    <table-body
                        fixed="left"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div :class="[prefixCls + '-fixed-right']" :style="fixedRightTableStyle" v-if="isRightFixed">
                <div :class="fixedHeaderClasses" v-if="showHeader">
                    <table-head
                        fixed="right"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :obj-data="objData"
                        :columns-width="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedRightBody">
                    <table-body
                        fixed="right"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" ref="footer"><slot name="footer"></slot></div>
        </div>
        <Spin fix size="large" v-if="loading">
            <slot name="loading"></slot>
        </Spin>
    </div>
</template>
<script>
    import tableHead from './table-head.vue';
    import tableBody from './table-body.vue';
    import Spin from '../spin/spin.vue';
    import { oneOf, getStyle, deepCopy, getScrollBarSize } from '../../utils/assist';
    import { on, off } from '../../utils/dom';
    import Csv from '../../utils/csv';
    import ExportCsv from './export-csv';
    import Locale from '../../mixins/locale';
    import elementResizeDetectorMaker from 'element-resize-detector';

    const prefixCls = 'ivu-table';

    let rowKey = 1;
    let columnKey = 1;

    export default {
        name: 'Table',
        mixins: [ Locale ],
        components: { tableHead, tableBody, Spin },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default () {
                    return [];
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            width: {
                type: [Number, String]
            },
            height: {
                type: [Number, String]
            },
            stripe: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            highlightRow: {
                type: Boolean,
                default: false
            },
            rowClassName: {
                type: Function,
                default () {
                    return '';
                }
            },
            context: {
                type: Object
            },
            noDataText: {
                type: String
            },
            noFilteredDataText: {
                type: String
            },
            disabledHover: {
                type: Boolean
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                ready: false,
                tableWidth: 0,
                columnsWidth: {},
                prefixCls: prefixCls,
                compiledUids: [],
                objData: this.makeObjData(),     // checkbox or highlight-row
                rebuildData: [],    // for sort or filter
                cloneColumns: this.makeColumns(),
                showSlotHeader: true,
                showSlotFooter: true,
                bodyHeight: 0,
                bodyRealHeight: 0,
                scrollBarWidth: getScrollBarSize(),
                currentContext: this.context,
                cloneData: deepCopy(this.data)    // when Cell has a button to delete row data, clickCurrentRow will throw an error, so clone a data
            };
        },
        computed: {
            localeNoDataText () {
                if (this.noDataText === undefined) {
                    return this.t('i.table.noDataText');
                } else {
                    return this.noDataText;
                }
            },
            localeNoFilteredDataText () {
                if (this.noFilteredDataText === undefined) {
                    return this.t('i.table.noFilteredDataText');
                } else {
                    return this.noFilteredDataText;
                }
            },
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-hide`]: !this.ready,
                        [`${prefixCls}-with-header`]: this.showSlotHeader,
                        [`${prefixCls}-with-footer`]: this.showSlotFooter
                    }
                ];
            },
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-border`]: this.border,
                        [`${prefixCls}-stripe`]: this.stripe,
                        [`${prefixCls}-with-fixed-top`]: !!this.height
                    }
                ];
            },
            fixedHeaderClasses () {
                return [
                    `${prefixCls}-fixed-header`,
                    {
                        [`${prefixCls}-fixed-header-with-empty`]: !this.rebuildData.length
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.height) {
                    const height = (this.isLeftFixed || this.isRightFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
                    style.height = `${height}px`;
                }
                if (this.width) style.width = `${this.width}px`;
                return style;
            },
            tableStyle () {
                let style = {};
                if (this.tableWidth !== 0) {
                    let width = '';
                    if (this.bodyHeight === 0) {
                        width = this.tableWidth;
                    } else {
                        if (this.bodyHeight > this.bodyRealHeight) {
                            width = this.tableWidth;
                        } else {
                            width = this.tableWidth - this.scrollBarWidth;
                        }
                    }
//                    const width = this.bodyHeight === 0 ? this.tableWidth : this.tableWidth - this.scrollBarWidth;
                    style.width = `${width}px`;
                }
                return style;
            },
            fixedTableStyle () {
                let style = {};
                let width = 0;
                this.leftFixedColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') width += col._width;
                });
                style.width = `${width}px`;
                return style;
            },
            fixedRightTableStyle () {
                let style = {};
                let width = 0;
                this.rightFixedColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'right') width += col._width;
                });
                width += this.scrollBarWidth;
                style.width = `${width}px`;
                return style;
            },
            bodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) {
                    // add a height to resolve scroll bug when browser has a scrollBar in fixed type and height prop
                    const height = (this.isLeftFixed || this.isRightFixed) ? this.bodyHeight + this.scrollBarWidth : this.bodyHeight;
                    style.height = `${height}px`;
                }
                return style;
            },
            fixedBodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) {
                    let height = this.bodyHeight + this.scrollBarWidth - 1;

                    // #2102 里，如果 Table 没有设置 width，而是集成父级的 width，固定列也应该不包含滚动条高度，所以这里直接计算表格宽度
                    const tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
                    if ((this.width && this.width < this.tableWidth) || tableWidth < this.tableWidth){
                        height = this.bodyHeight;
                    }
//                    style.height = this.scrollBarWidth > 0 ? `${this.bodyHeight}px` : `${this.bodyHeight - 1}px`;
                    style.height = this.scrollBarWidth > 0 ? `${height}px` : `${height - 1}px`;
                }
                return style;
            },
            leftFixedColumns () {
                let left = [];
                let other = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') {
                        left.push(col);
                    } else {
                        other.push(col);
                    }
                });
                return left.concat(other);
            },
            rightFixedColumns () {
                let right = [];
                let other = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'right') {
                        right.push(col);
                    } else {
                        other.push(col);
                    }
                });
                return right.concat(other);
            },
            isLeftFixed () {
                return this.columns.some(col => col.fixed && col.fixed === 'left');
            },
            isRightFixed () {
                return this.columns.some(col => col.fixed && col.fixed === 'right');
            }
        },
        methods: {
            rowClsName (index) {
                return this.rowClassName(this.data[index], index);
            },
            handleResize () {
                this.$nextTick(() => {
                    const allWidth = !this.columns.some(cell => !cell.width);    // each column set a width
                    if (allWidth) {
                        this.tableWidth = this.columns.map(cell => cell.width).reduce((a, b) => a + b, 0);
                    } else {
                        this.tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
                    }
                    this.columnsWidth = {};
                    if (!this.$refs.tbody) return;
                    this.$nextTick(() => {
                        let columnsWidth = {};
                        let autoWidthIndex = -1;
                        if (allWidth) autoWidthIndex = this.cloneColumns.findIndex(cell => !cell.width);//todo 这行可能有问题

                        if (this.data.length) {
                            const $tr = this.$refs.tbody.$el.querySelectorAll('tbody tr');
                            if ($tr.length === 0) return;
                            const $td = $tr[0].children;

                            for (let i = 0; i < $td.length; i++) {    // can not use forEach in Firefox
                                const column = this.cloneColumns[i];

                                let width = parseInt(getStyle($td[i], 'width'));
                                if (i === autoWidthIndex) {
                                    width = parseInt(getStyle($td[i], 'width')) - 1;
                                }
                                if (column.width) width = column.width;

                                this.cloneColumns[i]._width = width;

                                columnsWidth[column._index] = {
                                    width: width
                                };
                            }
                            this.columnsWidth = columnsWidth;
                        }
                    });
                    // get table real height,for fixed when set height prop,but height < table's height,show scrollBarWidth
                    this.bodyRealHeight = parseInt(getStyle(this.$refs.tbody.$el, 'height'));
                });
            },
            handleMouseIn (_index) {
                if (this.disabledHover) return;
                if (this.objData[_index]._isHover) return;
                this.objData[_index]._isHover = true;
            },
            handleMouseOut (_index) {
                if (this.disabledHover) return;
                this.objData[_index]._isHover = false;
            },
            // 通用处理 highlightCurrentRow 和 clearCurrentRow
            handleCurrentRow (type, _index) {
                let oldIndex = -1;
                for (let i in this.objData) {
                    if (this.objData[i]._isHighlight) {
                        oldIndex = parseInt(i);
                        this.objData[i]._isHighlight = false;
                    }
                }
                if (type === 'highlight') this.objData[_index]._isHighlight = true;
                const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]));
                const newData = type === 'highlight' ? JSON.parse(JSON.stringify(this.cloneData[_index])) : null;
                this.$emit('on-current-change', newData, oldData);
            },
            highlightCurrentRow (_index) {
                if (!this.highlightRow || this.objData[_index]._isHighlight) return;
                this.handleCurrentRow('highlight', _index);
            },
            clearCurrentRow () {
                if (!this.highlightRow) return;
                this.handleCurrentRow('clear');
            },
            clickCurrentRow (_index) {
                this.highlightCurrentRow (_index);
                this.$emit('on-row-click', JSON.parse(JSON.stringify(this.cloneData[_index])), _index);
            },
            dblclickCurrentRow (_index) {
                this.highlightCurrentRow (_index);
                this.$emit('on-row-dblclick', JSON.parse(JSON.stringify(this.cloneData[_index])), _index);
            },
            getSelection () {
                let selectionIndexes = [];
                for (let i in this.objData) {
                    if (this.objData[i]._isChecked) selectionIndexes.push(parseInt(i));
                }
                return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)));
            },
            toggleSelect (_index) {
                let data = {};

                for (let i in this.objData) {
                    if (parseInt(i) === _index) {
                        data = this.objData[i];
                    }
                }
                const status = !data._isChecked;

                this.objData[_index]._isChecked = status;

                const selection = this.getSelection();
                this.$emit(status ? 'on-select' : 'on-select-cancel', selection, JSON.parse(JSON.stringify(this.data[_index])));
                this.$emit('on-selection-change', selection);
            },
            toggleExpand (_index) {
                let data = {};

                for (let i in this.objData) {
                    if (parseInt(i) === _index) {
                        data = this.objData[i];
                    }
                }
                const status = !data._isExpanded;
                this.objData[_index]._isExpanded = status;
                this.$emit('on-expand', JSON.parse(JSON.stringify(this.cloneData[_index])), status);
            },
            selectAll (status) {
                // this.rebuildData.forEach((data) => {
                //     if(this.objData[data._index]._isDisabled){
                //         this.objData[data._index]._isChecked = false;
                //     }else{
                //         this.objData[data._index]._isChecked = status;
                //     }

                // });
                for(const data of this.rebuildData){
                    if(this.objData[data._index]._isDisabled){
                        continue;
                    }else{
                        this.objData[data._index]._isChecked = status;
                    }
                }
                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select-all', selection);
                }
                this.$emit('on-selection-change', selection);
            },
            fixedHeader () {
                if (this.height) {
                    this.$nextTick(() => {
                        const titleHeight = parseInt(getStyle(this.$refs.title, 'height')) || 0;
                        const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0;
                        const footerHeight = parseInt(getStyle(this.$refs.footer, 'height')) || 0;
                        this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight;
                    });
                } else {
                    this.bodyHeight = 0;
                }
            },
            hideColumnFilter () {
                this.cloneColumns.forEach((col) => col._filterVisible = false);
            },
            handleBodyScroll (event) {
                if (this.showHeader) this.$refs.header.scrollLeft = event.target.scrollLeft;
                if (this.isLeftFixed) this.$refs.fixedBody.scrollTop = event.target.scrollTop;
                if (this.isRightFixed) this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
                this.hideColumnFilter();
            },
            handleMouseWheel (event) {
                const deltaX = event.deltaX;
                const $body = this.$refs.body;

                if (deltaX > 0) {
                    $body.scrollLeft = $body.scrollLeft + 10;
                } else {
                    $body.scrollLeft = $body.scrollLeft - 10;
                }
            },
            sortData (data, type, index) {
                const key = this.cloneColumns[index].key;
                data.sort((a, b) => {
                    if (this.cloneColumns[index].sortMethod) {
                        return this.cloneColumns[index].sortMethod(a[key], b[key], type);
                    } else {
                        if (type === 'asc') {
                            return a[key] > b[key] ? 1 : -1;
                        } else if (type === 'desc') {
                            return a[key] < b[key] ? 1 : -1;
                        }
                    }
                });
                return data;
            },
            handleSort (_index, type) {
                const index = this.GetOriginalIndex(_index);
                this.cloneColumns.forEach((col) => col._sortType = 'normal');

                const key = this.cloneColumns[index].key;
                if (this.cloneColumns[index].sortable !== 'custom') {    // custom is for remote sort
                    if (type === 'normal') {
                        this.rebuildData = this.makeDataWithFilter();
                    } else {
                        this.rebuildData = this.sortData(this.rebuildData, type, index);
                    }
                }
                this.cloneColumns[index]._sortType = type;

                this.$emit('on-sort-change', {
                    column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
                    key: key,
                    order: type
                });
            },
            handleFilterHide (index) {    // clear checked that not filter now
                if (!this.cloneColumns[index]._isFiltered) this.cloneColumns[index]._filterChecked = [];
            },
            filterData (data, column) {
                return data.filter((row) => {
                    //如果定义了远程过滤方法则忽略此方法
                    if (typeof column.filterRemote === 'function') return true;

                    let status = !column._filterChecked.length;
                    for (let i = 0; i < column._filterChecked.length; i++) {
                        status = column.filterMethod(column._filterChecked[i], row);
                        if (status) break;
                    }
                    return status;
                });
            },
            filterOtherData (data, index) {
                let column = this.cloneColumns[index];
                if (typeof column.filterRemote === 'function') {
                    column.filterRemote.call(this.$parent, column._filterChecked, column.key, column);
                }

                this.cloneColumns.forEach((col, colIndex) => {
                    if (colIndex !== index) {
                        data = this.filterData(data, col);
                    }
                });
                return data;
            },
            handleFilter (index) {
                const column = this.cloneColumns[index];
                let filterData = this.makeDataWithSort();

                // filter others first, after filter this column
                filterData = this.filterOtherData(filterData, index);
                this.rebuildData = this.filterData(filterData, column);

                this.cloneColumns[index]._isFiltered = true;
                this.cloneColumns[index]._filterVisible = false;
                this.$emit('on-filter-change', column);
            },
            /**
             * #2832
             * 应该区分当前表头的 column 是左固定还是右固定
             * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
             * 左固定和右固定，要区分对待
             * 所以，此方法用来获取正确的 index
             * */
            GetOriginalIndex (_index) {
                return this.cloneColumns.findIndex(item => item._index === _index);
            },
            handleFilterSelect (_index, value) {
                const index = this.GetOriginalIndex(_index);
                this.cloneColumns[index]._filterChecked = [value];
                this.handleFilter(index);
            },
            handleFilterReset (_index) {
                const index = this.GetOriginalIndex(_index);
                this.cloneColumns[index]._isFiltered = false;
                this.cloneColumns[index]._filterVisible = false;
                this.cloneColumns[index]._filterChecked = [];

                let filterData = this.makeDataWithSort();
                filterData = this.filterOtherData(filterData, index);
                this.rebuildData = filterData;
                this.$emit('on-filter-change', this.cloneColumns[index]);
            },
            makeData () {
                let data = deepCopy(this.data);
                data.forEach((row, index) => {
                    row._index = index;
                    row._rowKey = rowKey++;
                });
                return data;
            },
            makeDataWithSort () {
                let data = this.makeData();
                let sortType = 'normal';
                let sortIndex = -1;
                let isCustom = false;

                for (let i = 0; i < this.cloneColumns.length; i++) {
                    if (this.cloneColumns[i]._sortType !== 'normal') {
                        sortType = this.cloneColumns[i]._sortType;
                        sortIndex = i;
                        isCustom = this.cloneColumns[i].sortable === 'custom';
                        break;
                    }
                }
                if (sortType !== 'normal' && !isCustom) data =  this.sortData(data, sortType, sortIndex);
                return data;
            },
            makeDataWithFilter () {
                let data = this.makeData();
                this.cloneColumns.forEach(col => data = this.filterData(data, col));
                return data;
            },
            makeDataWithSortAndFilter () {
                let data = this.makeDataWithSort();
                this.cloneColumns.forEach(col => data = this.filterData(data, col));
                return data;
            },
            makeObjData () {
                let data = {};
                this.data.forEach((row, index) => {
                    const newRow = deepCopy(row);// todo 直接替换
                    newRow._isHover = false;
                    if (newRow._disabled) {
                        newRow._isDisabled = newRow._disabled;
                    } else {
                        newRow._isDisabled = false;
                    }
                    if (newRow._checked) {
                        newRow._isChecked = newRow._checked;
                    } else {
                        newRow._isChecked = false;
                    }
                    if (newRow._expanded) {
                        newRow._isExpanded = newRow._expanded;
                    } else {
                        newRow._isExpanded = false;
                    }
                    if (newRow._highlight) {
                        newRow._isHighlight = newRow._highlight;
                    } else {
                        newRow._isHighlight = false;
                    }
                    data[index] = newRow;
                });
                return data;
            },
            makeColumns () {
                let columns = deepCopy(this.columns);
                let left = [];
                let right = [];
                let center = [];

                columns.forEach((column, index) => {
                    column._index = index;
                    column._columnKey = columnKey++;
                    column._width = column.width ? column.width : '';    // update in handleResize()
                    column._sortType = 'normal';
                    column._filterVisible = false;
                    column._isFiltered = false;
                    column._filterChecked = [];

                    if ('filterMultiple' in column) {
                        column._filterMultiple = column.filterMultiple;
                    } else {
                        column._filterMultiple = true;
                    }
                    if ('filteredValue' in column) {
                        column._filterChecked = column.filteredValue;
                        column._isFiltered = true;
                    }

                    if ('sortType' in column) {
                        column._sortType = column.sortType;
                    }

                    if (column.fixed && column.fixed === 'left') {
                        left.push(column);
                    } else if (column.fixed && column.fixed === 'right') {
                        right.push(column);
                    } else {
                        center.push(column);
                    }
                });
                return left.concat(center).concat(right);
            },
            exportCsv (params) {
                if (params.filename) {
                    if (params.filename.indexOf('.csv') === -1) {
                        params.filename += '.csv';
                    }
                } else {
                    params.filename = 'table.csv';
                }

                let columns = [];
                let datas = [];
                if (params.columns && params.data) {
                    columns = params.columns;
                    datas = params.data;
                } else {
                    columns = this.columns;
                    if (!('original' in params)) params.original = true;
                    datas = params.original ? this.data : this.rebuildData;
                }

                let noHeader = false;
                if ('noHeader' in params) noHeader = params.noHeader;

                const data = Csv(columns, datas, params, noHeader);
                if (params.callback) params.callback(data);
                else ExportCsv.download(params.filename, data);
            }
        },
        created () {
            if (!this.context) this.currentContext = this.$parent;
            this.showSlotHeader = this.$slots.header !== undefined;
            this.showSlotFooter = this.$slots.footer !== undefined;
            this.rebuildData = this.makeDataWithSortAndFilter();
        },
        mounted () {
            this.handleResize();
            this.fixedHeader();
            this.$nextTick(() => this.ready = true);

            on(window, 'resize', this.handleResize);
            this.observer = elementResizeDetectorMaker();
            this.observer.listenTo(this.$el, this.handleResize);

            this.$on('on-visible-change', (val) => {
                if (val) {
                    this.handleResize();
                    this.fixedHeader();
                }
            });
        },
        beforeDestroy () {
            off(window, 'resize', this.handleResize);
            this.observer.removeListener(this.$el, this.handleResize);
        },
        watch: {
            data: {
                handler () {
                    const oldDataLen = this.rebuildData.length;
                    this.objData = this.makeObjData();
                    this.rebuildData = this.makeDataWithSortAndFilter();
                    this.handleResize();
                    if (!oldDataLen) {
                        this.fixedHeader();
                    }
                    // here will trigger before clickCurrentRow, so use async
                    setTimeout(() => {
                        this.cloneData = deepCopy(this.data);
                    }, 0);
                },
                deep: true
            },
            columns: {
                handler () {
                    // todo 这里有性能问题，可能是左右固定计算属性影响的
                    this.cloneColumns = this.makeColumns();
                    this.rebuildData = this.makeDataWithSortAndFilter();
                    this.handleResize();
                },
                deep: true
            },
            height () {
                this.fixedHeader();
            }
        }
    };
</script>
