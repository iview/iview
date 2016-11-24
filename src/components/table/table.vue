<template>
    <div :class="classes">
        <div :class="[prefixCls + '-header']" v-if="showHeader">
            <table cellspacing="0" cellpadding="0" border="0" :style="tableStyle">
                <colgroup>
                    <col v-for="column in columns" :width="setCellWidth(column, $index)">
                </colgroup>
                <thead
                    is="table-head"
                    :prefix-cls="prefixCls"
                    :clone-data.sync="cloneData"
                    :columns="columns"></thead>
            </table>
        </div>
        <div :class="[prefixCls + '-body']">
            <table cellspacing="0" cellpadding="0" border="0" :style="tableStyle" v-el:tbody>
                <colgroup>
                    <col v-for="column in columns" :width="setCellWidth(column, $index)">
                </colgroup>
                <tbody :class="[prefixCls + '-tbody']" v-el:render>
                    <tr
                        v-for="(index, row) in data"
                        :class="[prefixCls + '-row', {[prefixCls + '-row-highlight']: cloneData[index] && cloneData[index]._isHighlight}]"
                        @click.stop="highlightCurrentRow(index)">
                        <td v-for="column in columns" :class="alignCls(column)">
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
            }
        },
        data () {
            return {
                tableWidth: 0,
                columnsWidth: [],
                prefixCls: prefixCls,
                compiledUids: [],
                cloneData: deepCopy(this.data)
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-border`]: this.border,
                        [`${prefixCls}-stripe`]: this.stripe
                    }
                ]
            },
            tableStyle () {
                let style = {};
                if (this.tableWidth !== 0) style.width = `${this.tableWidth}px`;
                return style;
            }
        },
        methods: {
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
                    for (let i = 0; i < this.columns.length; i++) {
                        const column = this.columns[i];
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
                const row = Object.assign({}, this.cloneData[index], {
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
                const row = Object.assign({}, this.cloneData[index], {
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
            }
        },
        ready () {
            this.compileRender();
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
                    this.compileRender(true);
                },
                deep: true
            }
        }
    }
</script>