<template>
    <div :class="classes">
        <div :class="[prefixCls + '-body']">
            <table>
                <colgroup>
                    <col v-for="column in columns" :width="column.width">
                </colgroup>
                <thead
                    is="table-head"
                    :prefix-cls="prefixCls + '-thead'"
                    :columns="columns"></thead>
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
    import { oneOf } from '../../utils/assist';
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
                                // todo 做一个深度缓存，只在需要改render时再重新编译，否则data改变时不用再编译
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
                });
            }
        },
        ready () {
            this.compileRender();
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