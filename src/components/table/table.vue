<template>
    <div :class="classes" :style="styles">
        <div :class="[prefixCls + '-title']" v-if="showSlotHeader" v-el:title><slot name="header"></slot></div>
        <div :class="[prefixCls + '-header']" v-if="showHeader" v-el:header @mousewheel="handleMouseWheel">
            <table-head
                :prefix-cls="prefixCls"
                :style="tableStyle"
                :columns="cloneColumns"
                :obj-data="objData"></table-head>
        </div>
        <div :class="[prefixCls + '-body']" :style="bodyStyle" v-el:body @scroll="handleBodyScroll">
            <table-body
                v-ref:tbody
                :prefix-cls="prefixCls"
                :style="tableStyle"
                :columns="cloneColumns"
                :data="rebuildData"
                :obj-data="objData"></table-body>
        </div>
        <div :class="[prefixCls + '-fixed']">
            <div :class="[prefixCls + '-fixed-header']" v-if="showHeader">
                <table-head
                    fixed
                    :prefix-cls="prefixCls"
                    :style="fixedTableStyle"
                    :columns="leftFixedColumns"
                    :obj-data="objData"></table-head>
            </div>
            <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" v-el:fixed-body>
                <table-body
                    fixed
                    :prefix-cls="prefixCls"
                    :style="fixedTableStyle"
                    :columns="leftFixedColumns"
                    :data="rebuildData"
                    :obj-data="objData"></table-body>
            </div>
        </div>
        <div :class="[prefixCls + '-fixed-right']">
            <div :class="[prefixCls + '-fixed-header']" v-if="showHeader">
                <table-head
                    fixed
                    :prefix-cls="prefixCls"
                    :style="fixedRightTableStyle"
                    :columns="rightFixedColumns"
                    :obj-data="objData"></table-head>
            </div>
            <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" v-el:fixed-right-body>
                <table-body
                    fixed
                    :prefix-cls="prefixCls"
                    :style="fixedRightTableStyle"
                    :columns="rightFixedColumns"
                    :data="rebuildData"
                    :obj-data="objData"></table-body>
            </div>
        </div>
        <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" v-el:footer><slot name="footer"></slot></div>
    </div>
</template>
<script>
    import tableHead from './table-head.vue';
    import tableBody from './table-body.vue';
    import { oneOf, getStyle, deepCopy } from '../../utils/assist';
    const prefixCls = 'ivu-table';

    export default {
        components: { tableHead, tableBody },
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            columns: {
                type: Array,
                default () {
                    return []
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
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
            }
        },
        data () {
            return {
                ready: false,
                tableWidth: 0,
                columnsWidth: [],
                prefixCls: prefixCls,
                compiledUids: [],
                objData: this.makeObjData(),     // checkbox or highlight-row
                rebuildData: this.makeData(),    // for sort or filter
                cloneColumns: this.makeColumns(),
                showSlotHeader: true,
                showSlotFooter: true,
                bodyHeight: 0
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-hide`]: !this.ready,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-border`]: this.border,
                        [`${prefixCls}-stripe`]: this.stripe,
                        [`${prefixCls}-with-header`]: this.showSlotHeader,
                        [`${prefixCls}-with-footer`]: this.showSlotFooter,
                        [`${prefixCls}-with-fixed-top`]: !!this.height
                    }
                ]
            },
            styles () {
                let style = {};
                if (!!this.height) style.height = `${this.height}px`;
                if (!!this.width) style.width = `${this.width}px`;
                return style;
            },
            tableStyle () {
                let style = {};
                if (this.tableWidth !== 0) style.width = `${this.tableWidth}px`;
                return style;
            },
            fixedTableStyle () {
                let style = {};
                if (this.leftFixedColumns.length) style.width = this.leftFixedColumns.reduce((a, b) => a + b);
                return style;
            },
            fixedRightTableStyle () {
                let style = {};
                if (this.rightFixedColumns.length) style.width = this.rightFixedColumns.reduce((a, b) => a + b);
                return style;
            },
            bodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) style.height = `${this.bodyHeight}px`;
                return style;
            },
            fixedBodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) style.height = `${this.bodyHeight - 1}px`;
                return style;
            },
            leftFixedColumns () {
                let left = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') {
                        left.push(col);
                    }
                });
                return left;
            },
            rightFixedColumns () {
                let right = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'right') {
                        right.push(col);
                    }
                });
                return right;
            }
        },
        methods: {
            rowClsName (index) {
                return this.rowClassName(this.data[index], index);
            },
            handleResize () {
                this.$nextTick(() => {
                    const allWidth = !this.columns.some(cell => !cell.width);
                    if (allWidth) {
                        this.tableWidth = this.columns.map(cell => cell.width).reduce((a, b) => a + b);
                    } else {
                        this.tableWidth = parseInt(getStyle(this.$el, 'width')) - 1;
                    }
                    this.$nextTick(() => {
                        this.columnsWidth = [];
                        let autoWidthIndex = -1;
                        if (allWidth) autoWidthIndex = this.cloneColumns.findIndex(cell => !cell.width);

                        const $td = this.$refs.tbody.$el.querySelectorAll('tbody tr')[0].querySelectorAll('td');
                        for (let i = 0; i < $td.length; i++) {    // can not use forEach in Firefox
                            if (i === autoWidthIndex) {
                                this.columnsWidth.push(parseInt(getStyle($td[i], 'width')) - 1);
                            } else {
                                this.columnsWidth.push(parseInt(getStyle($td[i], 'width')));
                            }
                        }
                    });
                });
            },
            setCellWidth (column, index) {
                return column.width ? column.width : this.columnsWidth[index];
            },
            handleMouseIn (_index) {
                if (this.objData[_index]._isHover) return;
                this.objData[_index]._isHover = true;
            },
            handleMouseOut (_index) {
                this.objData[_index]._isHover = false;
            },
            highlightCurrentRow (_index) {
                if (!this.highlightRow || this.objData[_index]._isHighlight) return;

                let oldIndex = -1;
                for (let i in this.objData) {
                    if (this.objData[i]._isHighlight) {
                        oldIndex = parseInt(i);
                        this.objData[i]._isHighlight = false;
                    }
                }
                this.objData[_index]._isHighlight = true;
                const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.data[oldIndex]));
                this.$emit('on-current-change', JSON.parse(JSON.stringify(this.data[_index])), oldData);
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
                let index = -1;

                for (let i in this.objData) {
                    if (parseInt(i) === _index) {
                        data = this.objData[i];
                        index = i;
                    }
                }
                const status = !data._isChecked;

                this.objData[_index]._isChecked = status;

                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select', selection, JSON.parse(JSON.stringify(this.data[_index])));
                }
                this.$emit('on-selection-change', selection);
            },
            selectAll (status) {
                for (let i in this.objData) {
                    this.objData[i]._isChecked = status;
                }

                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select-all', selection);
                }
                this.$emit('on-selection-change', selection);
            },
            fixedHeader () {
                if (!!this.height) {
                    this.$nextTick(() => {
                        const titleHeight = parseInt(getStyle(this.$els.title, 'height')) || 0;
                        const headerHeight = parseInt(getStyle(this.$els.header, 'height')) || 0;
                        const footerHeight = parseInt(getStyle(this.$els.footer, 'height')) || 0;
                        this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight;
                    })
                }
            },
            hideColumnFilter () {
                this.cloneColumns.forEach((col) => col._filterVisible = false);
            },
            handleBodyScroll (event) {
                if (this.showHeader) this.$els.header.scrollLeft = event.target.scrollLeft;
                if (this.leftFixedColumns.length) this.$els.fixedBody.scrollTop = event.target.scrollTop;
                if (this.rightFixedColumns.length) this.$els.fixedRightBody.scrollTop = event.target.scrollTop;
                this.hideColumnFilter();
            },
            handleMouseWheel (event) {
                const deltaX = event.deltaX;
                const $body = this.$els.body;

                if (deltaX > 0) {
                    $body.scrollLeft = $body.scrollLeft + 10;
                } else {
                    $body.scrollLeft = $body.scrollLeft - 10;
                }
            },
            handleSort (index, type) {
                this.cloneColumns.forEach((col) => col._sortType = 'normal');

                const key = this.cloneColumns[index].key;
                if (this.cloneColumns[index].sortable !== 'custom') {    // custom is for remote sort
                    if (type === 'asc') {
                        this.rebuildData.sort((a, b) => {
                            if (this.cloneColumns[index].sortMethod) {
                                return this.cloneColumns[index].sortMethod(a, b);
                            } else {
                                return a[key] > b[key];
                            }
                        });
                    } else if (type === 'desc') {
                        this.rebuildData.sort((a, b) => {
                            if (this.cloneColumns[index].sortMethod) {
                                return this.cloneColumns[index].sortMethod(a, b);
                            } else {
                                return a[key] < b[key];
                            }
                        });
                    } else if (type === 'normal') {
                        this.rebuildData = this.makeData();
                    }
                }

                this.cloneColumns[index]._sortType = type;

                this.$emit('on-sort-change', {
                    column: JSON.parse(JSON.stringify(this.columns[this.cloneColumns[index]._index])),
                    key: key,
                    order: type
                })
            },
            handleFilterHide (index) {    // clear checked that not filter now
                if (!this.cloneColumns[index]._isFiltered) this.cloneColumns[index]._filterChecked = [];
            },
            handleFilter (index) {
                const column = this.cloneColumns[index];
                const filterData = this.makeData();

                this.rebuildData = filterData.filter((row) => {
                    let status = false;
                    for (let i = 0; i < column._filterChecked.length; i++) {
                        status = column.filterMethod(column._filterChecked[i], row);
                        if (status) break;
                    }
                    return status;
                });
                this.cloneColumns[index]._isFiltered = true;
                this.cloneColumns[index]._filterVisible = false;
            },
            handleFilterReset (index) {
                this.cloneColumns[index]._isFiltered = false;
            },
            makeData () {
                let data = deepCopy(this.data);
                data.forEach((row, index) => row._index = index);
                return data;
            },
            makeObjData () {
                let data = {};
                this.data.forEach((row, index) => {
                    const newRow = deepCopy(row);// todo 直接替换
                    newRow._isHover = false;
                    newRow._isChecked = false;
                    newRow._isHighlight = false;
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
                    column._sortType = 'normal';
                    column._filterVisible = false;
                    column._isFiltered = false;
                    column._filterChecked = [];

                    if ('filterMultiple' in column) {
                        column._filterMultiple = column.filterMultiple;
                    } else {
                        column._filterMultiple = true;
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
            }
        },
        compiled () {
            this.showSlotHeader = this.$els.title.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
            this.showSlotFooter = this.$els.footer.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
        },
        ready () {
            this.handleResize();
            this.fixedHeader();
            this.$nextTick(() => this.ready = true);
            window.addEventListener('resize', this.handleResize, false);
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.handleResize, false);
        },
        watch: {
            data: {
                handler () {
                    this.objData = this.makeObjData();
                    this.rebuildData = this.makeData();
                    this.handleResize();
                },
                deep: true
            },
            columns: {
                handler () {
                    this.cloneColumns = this.makeColumns();
                    this.handleResize();
                },
                deep: true
            },
            height () {
                this.fixedHeader();
            }
        }
    }
</script>