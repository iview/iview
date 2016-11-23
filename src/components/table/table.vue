<template>
    <div :class="classes">
        <div :class="[prefixCls + '-header']">
            <table cellspacing="0" cellpadding="0" border="0" :style="{width: tableWidth + 'px'}">
                <colgroup>
                    <col v-for="column in columns" :width="setCellWidth(column, $index)">
                </colgroup>
                <thead
                    is="table-head"
                    :prefix-cls="prefixCls + '-thead'"
                    :columns="columns"></thead>
            </table>
        </div>
        <div :class="[prefixCls + '-body']">
            <table cellspacing="0" cellpadding="0" border="0" :style="{width: tableWidth + 'px'}" v-el:tbody>
                <colgroup>
                    <col v-for="column in columns" :width="setCellWidth(column, $index)">
                </colgroup>
                <tbody :class="[prefixCls + '-tbody']" v-el:render>
                    <tr :class="[prefixCls + '-row']" v-for="(index, row) in data">
                        <td v-for="column in columns">{{{ renderRow(row, column) }}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import TableHead from './table-head.vue';
    import { oneOf, getStyle } from '../../utils/assist';
    const prefixCls = 'ivu-table';

    export default {
        components: { TableHead },
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
            fit: {
                type: Boolean,
                default: true
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            selection: {
                validator (value) {
                    return oneOf(value, ['single', 'multiple', false]);
                },
                default: false
            },
            showIndex: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                tableWidth: 0,
                columnsWidth: [],
                prefixCls: prefixCls,
                compiledUids: []
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ]
            }
        },
        methods: {
            renderRow (row, column) {
                return 'render' in column ? '' : row[column.key];
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
                                // todo 做一个缓存，只在需要改render时再重新编译，否则data改变时不用再编译
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
                                $el.children[j].children[i].innerHTML = '';
                                $el.children[j].children[i].appendChild(cell);
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