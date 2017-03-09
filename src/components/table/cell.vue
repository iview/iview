<template>
    <div :class="classes">
        <template v-if="renderType === 'index'">{{naturalIndex + 1}}</template>
        <template v-if="renderType === 'selection'">
            <Checkbox :value="checked" @on-change="toggleSelect" :disabled="disabled"></Checkbox>
        </template>
        <template v-if="renderType === 'normal'" >{{row[column.key]}}</template>
    </div>
</template>
<script>
    import Checkbox from '../checkbox/checkbox.vue';
    import Vue from 'vue';

    export default {
        components: { Checkbox },
        props: {
            prefixCls: String,
            row: Object,
            column: Object,
            naturalIndex: Number,    // index of rebuildData
            index: Number,           // _index of data
            checked: Boolean,
            disabled: Boolean,
            fixed: {
                type: [Boolean, String],
                default: false
            }
        },
        data () {
            return {
                renderType: '',
                uid: -1,
                content: this.$parent.$parent.content
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
                        [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false
                    }
                ];
            }
        },
        methods: {
            compile () {
                if (this.column.render) {
                    const $parent = this.content;
                    const template = this.column.render(this.row, this.column, this.index);
                    const cell = document.createElement('div');
                    cell.innerHTML = template;
                    const _oldParentChildLen = $parent.$children.length;                    
                    // $parent.$compile(cell);    // todo 这里无法触发 ready 钩子
                    const _newParentChildLen = $parent.$children.length;
                    if (_oldParentChildLen !== _newParentChildLen) {    // if render normal html node, do not tag
                        this.uid = $parent.$children[$parent.$children.length - 1]._uid;    // tag it, and delete when data or columns update
                    }       
                    // this.$el.innerHTML = '';
                    // this.$el.appendChild(cell);     
                    this.$el.innerHTML = '';
                    let methods = {};
                    let $_parent = this.$parent;
                    while($_parent != null && $_parent._name!='<Table>'){
                        $_parent = $_parent.$parent;
                    }
                    if ($_parent) {
                        Object.keys($_parent).forEach(key => {
                            const func = this.$parent.$parent.$parent[`${key}`];
                            if(typeof(func) === 'function' &&func.name  === 'boundFn'){
                                methods[`${key}`] = func;
                            }   
                        });
                    }
                    const res = Vue.compile(cell.outerHTML);
                    const compt = new Vue({                    
                        render: res.render,
                        staticRenderFns: res.staticRenderFns,
                        methods: methods
                    });
                    compt.$mount(this.$el);
                }
            },
            destroy () {
                const $parent = this.content;
                for (let i = 0; i < $parent.$children.length; i++) {
                    if ($parent.$children[i]._uid === this.uid) {
                        $parent.$children[i].$destroy();
                    }
                }
            },
            toggleSelect () {
                this.$parent.$parent.toggleSelect(this.index);
            }
        },
        mounted () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else {
                this.renderType = 'normal';
            }
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
