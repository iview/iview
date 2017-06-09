<template>
    <div :class="classes" ref="cell">
        <template v-if="renderType === 'index'">{{naturalIndex + 1}}</template>
        <template v-if="renderType === 'selection'">
            <Checkbox :value="checked" @on-change="toggleSelect" :disabled="disabled"></Checkbox>
        </template>
        <template v-if="renderType === 'normal'"><span v-html="row[column.key]"></span></template>
        <template v-if="renderType === 'expand' && !row._disableExpand">
            <div :class="expandCls" @click="toggleExpand">
                <Icon type="ios-arrow-right"></Icon>
            </div>
        </template>
        <Cell
            v-if="renderType === 'render'"
            :row="row"
            :column="column"
            :index="index"
            :render="column.render"></Cell>
    </div>
</template>
<script>
    import Vue from 'vue';
    import Cell from './expand';
    import Icon from '../icon/icon.vue';
    import Checkbox from '../checkbox/checkbox.vue';
    import { findComponentUpward } from '../../utils/assist';

    export default {
        name: 'TableCell',
        components: { Icon, Checkbox, Cell },
        props: {
            prefixCls: String,
            row: Object,
            column: Object,
            naturalIndex: Number,    // index of rebuildData
            index: Number,           // _index of data
            checked: Boolean,
            disabled: Boolean,
            expanded: Boolean,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        data () {
            return {
                renderType: '',
                uid: -1,
                context: this.$parent.$parent.currentContext
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
                        [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
                        [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand'
                    }
                ];
            },
            expandCls () {
                return [
                    `${this.prefixCls}-cell-expand`,
                    {
                        [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
                    }
                ];
            }
        },
        methods: {
            compile () {
                if (this.column.render && this.renderType === 'render') {
                    // todo 兼容真 Render，后期废弃旧用法
                    let isRealRender = true;
                    const Table = findComponentUpward(this, 'Table');
                    if (Table.context) isRealRender = false;

                    if (isRealRender) {
//                        this.$el.innerHTML = '';
//                        const component = new Vue({
//                            functional: true,
//                            render: (h) => {
//                                return this.column.render(h, {
//                                    row: this.row,
//                                    column: this.column,
//                                    index: this.index
//                                });
//                            }
//                        });
//                        const Cell = component.$mount();
//                        this.$refs.cell.appendChild(Cell.$el);
                    } else {
                        const $parent = this.context;
                        const template = this.column.render(this.row, this.column, this.index);
                        const cell = document.createElement('div');
                        cell.innerHTML = template;

                        this.$el.innerHTML = '';
                        let methods = {};
                        Object.keys($parent).forEach(key => {
                            const func = $parent[key];
                            if (typeof(func) === 'function' && (func.name  === 'boundFn' || func.name === 'n')) {
                                methods[key] = func;
                            }
                        });
                        const res = Vue.compile(cell.outerHTML);
                        // 获取父组件使用的局部 component
                        const components = {};
                        Object.getOwnPropertyNames($parent.$options.components).forEach(item => {
                            components[item] = $parent.$options.components[item];
                        });

                        const component = new Vue({
                            render: res.render,
                            staticRenderFns: res.staticRenderFns,
                            methods: methods,
                            data () {
                                return $parent._data;
                            },
                            components: components
                        });
                        if ($parent.$store != undefined) {
                            component.$store = $parent.$store;
                        }
                        component.row = this.row;
                        component.column = this.column;

                        const Cell = component.$mount();
                        this.$refs.cell.appendChild(Cell.$el);
                    }
                }
            },
            destroy () {

            },
            toggleSelect () {
                this.$parent.$parent.toggleSelect(this.index);
            },
            toggleExpand () {
                this.$parent.$parent.toggleExpand(this.index);
            }
        },
        created () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.type === 'expand') {
                this.renderType = 'expand';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else {
                this.renderType = 'normal';
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.compile();
            });
        },
        beforeDestroy () {
            this.destroy();
        },
        watch: {
            naturalIndex () {
                this.destroy();
                this.compile();
            }
        }
    };
</script>
