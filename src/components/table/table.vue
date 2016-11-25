<template>
    <div :class="classes" :style="styles">
        <div :class="[prefixCls + '-title']" v-if="showSlotHeader" v-el:title><slot name="header"></slot></div>
        <div :class="[prefixCls + '-header']" v-if="showHeader" v-el:header>
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
        <div :class="[prefixCls + '-body']" :style="bodyStyle">
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
                            <div :class="[prefixCls + '-cell']">
                                <template v-if="column.type === 'selection'">
                                    <Checkbox :checked="cloneData[index] && cloneData[index]._isChecked" @on-change="toggleSelect(index)"></Checkbox>
                                </template>
                                <template v-else>{{{ renderRow(row, column, index) }}}</template>
                            </div>
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
    import Mixin from './mixin';
    import { oneOf, getStyle, deepCopy } from '../../utils/assist';
    const prefixCls = 'ivu-table';

    export default {
        mixins: [ Mixin ],
        components: { TableHead, Checkbox },
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
            renderRow (row, column, index) {
                return column.type === 'index' ? index + 1 : column.render ? '' : row[column.key];
            },
            compileRender (update = false) {
                this.$nextTick(() => {
                    if (update) {
                        for (let i = 0; i < this.$parent.$children.length; i++) {
                            const index = this.compiledUids.indexOf(this.$parent.$children[i]._uid);
                            if (index > -1) {
                                this.$parent.$children[i].$destroy();
                                this.compiledUids.splice(index, 1);
                                i--;
                            }
                        }
                    }

                    const $el = this.$els.render;
                    for (let i = 0; i < this.cloneColumns.length; i++) {
                        const column = this.cloneColumns[i];
                        if (column.render) {
                            for (let j = 0; j < this.data.length; j++) {
                                // todo 做一个缓存，只在需要改render时再重新编译，data改变时不用再编译
                                const row = this.data[j];
                                const template = column.render(row, column, j);
                                const cell = document.createElement('div');
                                cell.innerHTML = template;
                                const _oldParentChildLen = this.$parent.$children.length;
                                this.$parent.$compile(cell);
                                const _newParentChildLen = this.$parent.$children.length;

                                if (_oldParentChildLen !== _newParentChildLen) {    // if render normal html node, do not tag
                                    this.compiledUids.push(this.$parent.$children[this.$parent.$children.length - 1]._uid);    // tag it, and delete when data or columns update
                                }
                                $el.children[j].children[i].children[0].innerHTML = '';
                                $el.children[j].children[i].children[0].appendChild(cell);
                            }
                        }
                    }
                    this.handleResize();
                });
            },
            handleResize () {
                this.tableWidth = parseInt(getStyle(this.$el, 'width'));
                this.$nextTick(() => {
                    this.columnsWidth = [];
                    this.$els.tbody.querySelectorAll('tbody tr')[0].querySelectorAll('td').forEach((cell) => {
                        this.columnsWidth.push(parseInt(getStyle(cell, 'width')));
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
                this.cloneColumns = left.concat(center).concat(right);
            }
        },
        compiled () {
            this.parseColumns();
            this.showSlotHeader = this.$els.title.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
            this.showSlotFooter = this.$els.footer.innerHTML.replace(/\n/g, '').replace(/<!--[\w\W\r\n]*?-->/gmi, '') !== '';
        },
        ready () {
            this.compileRender();
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
                    this.compileRender(true);
                },
                deep: true
            },
            columns: {
                handler () {
                    this.parseColumns();
                    this.compileRender(true);
                },
                deep: true
            },
            height () {
                this.fixedHeader();
            }
        }
    }
</script>