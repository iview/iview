<template>
    <div :class="classes" :style="styles">
        <div :class="[prefixCls + '-title']" v-if="showSlotHeader" v-el:title><slot name="header"></slot></div>
        <div :class="[prefixCls + '-header']" v-if="showHeader" v-el:header @mousewheel="handleMouseWheel">
            <table cellspacing="0" cellpadding="0" border="0" :style="tableStyle">
                <colgroup>
                    <col v-for="column in cloneColumns" :width="setCellWidth(column, $index)">
                </colgroup>
                <thead
                    is="table-head"
                    :prefix-cls="prefixCls"
                    :clone-data.sync="cloneData"
                    :columns="cloneColumns"></thead>
            </table>
        </div>
        <div :class="[prefixCls + '-body']" :style="bodyStyle" @scroll="handleBodyScroll">
            <table cellspacing="0" cellpadding="0" border="0" :style="tableStyle" v-el:tbody>
                <colgroup>
                    <col v-for="column in cloneColumns" :width="setCellWidth(column, $index)">
                </colgroup>
                <tbody :class="[prefixCls + '-tbody']" v-el:render>
                    <tr
                        v-for="(index, row) in data"
                        :class="[prefixCls + '-row', rowClsName(index), {[prefixCls + '-row-highlight']: cloneData[index] && cloneData[index]._isHighlight, [prefixCls + '-row-hover']: cloneData[index] && cloneData[index]._isHover}]"
                        @mouseenter.stop="handleMouseIn(index)"
                        @mouseleave.stop="handleMouseOut(index)"
                        @click.stop="highlightCurrentRow(index)">
                        <td v-for="column in cloneColumns" :class="alignCls(column)">
                            <div :class="[prefixCls + '-cell']" v-if="column.type === 'selection'">
                                <Checkbox :checked="cloneData[index] && cloneData[index]._isChecked" @on-change="toggleSelect(index)"></Checkbox>
                            </div>
                            <Cell v-else :prefix-cls="prefixCls" :row="row" :column="column" :index="index"></Cell>
                            <!--<div :class="[prefixCls + '-cell']" v-else>-->
                                <!--{{{ renderRow(row, column, index) }}}-->
                            <!--</div>-->
                            <!--<div :class="[prefixCls + '-cell']">-->
                                <!--<template v-if="column.type === 'selection'">-->
                                    <!--<Checkbox :checked="cloneData[index] && cloneData[index]._isChecked" @on-change="toggleSelect(index)"></Checkbox>-->
                                <!--</template>-->
                                <!--<template v-else>{{{ renderRow(row, column, index) }}}</template>-->
                            <!--</div>-->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div :class="[prefixCls + '-fixed']">

        </div>
        <div :class="[prefixCls + '-fixed-right']">

        </div>
        <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" v-el:footer><slot name="footer"></slot></div>
    </div>
</template>
<script>
    import TableHead from './table-head.vue';
    import Checkbox from '../checkbox/checkbox.vue';
    import Cell from './cell.vue';
    import Mixin from './mixin';
    import { oneOf, getStyle, deepCopy } from '../../utils/assist';
    const prefixCls = 'ivu-table';

    export default {
        mixins: [ Mixin ],
        components: { TableHead, Checkbox, Cell },
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
                tableWidth: 0,
                columnsWidth: [],
                prefixCls: prefixCls,
                compiledUids: [],
                cloneData: deepCopy(this.data),
                cloneColumns: deepCopy(this.columns),
                leftFixedColumns: [],
                rightFixedColumns: [],
                centerColumns: [],
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
                return style;
            },
            tableStyle () {
                let style = {};
                if (this.tableWidth !== 0) style.width = `${this.tableWidth}px`;
                return style;
            },
            bodyStyle () {
                let style = {};
                if (this.bodyHeight !== 0) style.height = `${this.bodyHeight}px`;
                return style;
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

                        const $td = this.$els.tbody.querySelectorAll('tbody tr')[0].querySelectorAll('td');
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
            assignRow (index, obj) {
                return Object.assign({}, this.cloneData[index], obj);
            },
            handleMouseIn (index) {
                if (this.cloneData[index]._isHover) return;
                const row = this.assignRow(index, {
                    _isHover: true
                });
                this.cloneData.$set(index, row);
            },
            handleMouseOut (index) {
                const row = this.assignRow(index, {
                    _isHover: false
                });
                this.cloneData.$set(index, row);
            },
            highlightCurrentRow (index) {
                if (!this.highlightRow || this.cloneData[index]._isHighlight) return;

                let oldIndex = -1;
                this.cloneData.forEach((item, index) => {
                    if (item._isHighlight) {
                        oldIndex = index;
                        item._isHighlight = false;
                        return true;
                    }
                });
                const row = this.assignRow(index, {
                    _isHighlight: true
                });
                this.cloneData.$set(index, row);

                const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.data[oldIndex]));
                this.$emit('on-current-change', JSON.parse(JSON.stringify(this.data[index])), oldData);
            },
            getSelection () {
                let selectionIndexes = [];
                this.cloneData.forEach((data, index) => {
                    if (data._isChecked) selectionIndexes.push(index);
                });

                return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)));
            },
            toggleSelect (index) {
                const status = !this.cloneData[index]._isChecked;
                const row = this.assignRow(index, {
                    _isChecked: status
                });
                this.cloneData.$set(index, row);

                const selection = this.getSelection();
                if (status) {
                    this.$emit('on-select', selection, JSON.parse(JSON.stringify(this.data[index])));
                }
                this.$emit('on-selection-change', selection);
            },
            selectAll () {
                this.$emit('on-select-all', this.getSelection());
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
            parseColumns () {
                let left = [];
                let right = [];
                let center = [];
                this.cloneColumns.forEach((col) => {
                    if (col.fixed && col.fixed === 'left') {
                        left.push(col);
                    } else if (col.fixed && col.fixed === 'right') {
                        right.push(col);
                    } else {
                        center.push(col);
                    }
                });
                this.leftFixedColumns = left;
                this.rightFixedColumns = right;
                this.centerColumns = center;
                this.cloneColumns = left.concat(center).concat(right);
            },
            handleBodyScroll (event) {
                this.$els.header.scrollLeft = event.target.scrollLeft;

                // todo 固定时上下滚动，固定的表头也滚动 scrollTop
            },
            handleMouseWheel () {
                console.log(111)
            }
        },
        compiled () {
            this.parseColumns();
            this.showSlotHeader = this.$els.title.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
            this.showSlotFooter = this.$els.footer.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
        },
        ready () {
            this.handleResize();
            this.fixedHeader();
            window.addEventListener('resize', this.handleResize, false);
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.handleResize, false);
        },
        watch: {
            data: {
                handler () {
                    this.cloneData = deepCopy(this.data);
                    this.handleResize();
                },
                deep: true
            },
            columns: {
                handler () {
                    this.parseColumns();
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