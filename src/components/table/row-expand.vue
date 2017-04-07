<template>
    <div class="ivu-table-row-expand-content" ref="expand">
        <template v-if="!isTmp()">
            {{message}}
        </template>
        <template v-if="isTmp()">
            <Temp :expand-template="getTmp()" :data="data" :index="index"></Temp>
        </template>
    </div>
</template>
<script>

    import Vue from 'vue';

    export default {
        props: {
            expandTemplate: [Object,String,Function],
            data: Object,
            index: Number,
        },
        components: {
            Temp: {
                functional: true,
                props: {
                    expandTemplate: Object,
                    data: Object,
                    index: Number,
                },
                render: (h, context) => h(context.props.expandTemplate, {
                    props: {
                        row: context.props.data,
                        index: context.props.index
                    }
                })
            }
        },
        data () {
            return {
                message: this.t('i.table.noDataText'),
                tmp: null,
                context: this.$parent.$parent.currentContext
            };
        },
        methods: {
            isTmp () {
                return this.tmp || typeof this.expandTemplate === 'object';
            },
            isFunc () {
                return typeof this.expandTemplate === 'function';
            },
            isStr () {
                return typeof this.expandTemplate === 'string';
            },
            getTmp () {
                return this.tmp ? this.tmp : this.expandTemplate;
            },
            compile () {
                const $parent = this.context;
                const template = this.expandTemplate(this.data, this.index);
                // 如果返回也是组件
                if (typeof template === 'object') return this.tmp = template;

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
                // todo 临时解决方案
                const component = new Vue({
                    render: res.render,
                    staticRenderFns: res.staticRenderFns,
                    methods: methods,
                    data () {
                        return $parent._data;
                    }
                });
                component.row = this.data;

                const Cell = component.$mount();
                this.$refs.expand.appendChild(Cell.$el);
            }
        },
        mounted () {
            if (this.isFunc()) {
                this.compile();
            } else if (this.isStr()) {
                this.message = this.expandTemplate;
            }
        }
    };
</script>