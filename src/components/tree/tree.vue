<template>
    <div :class="prefixCls">
        <Tree-node
            v-for="item in data"
            :key="item"
            :data="item"
            visible
            :multiple="multiple"
            :show-checkbox="showCheckbox">
        </Tree-node>
        <div :class="[prefixCls + '-empty']" v-if="!data.length">{{ localeEmptyText }}</div>
    </div>
</template>
<script>
    import TreeNode from './node.vue';
    import { findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-tree';

    export default {
        name: 'Tree',
        mixins: [ Emitter, Locale ],
        components: { TreeNode },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            multiple: {
                type: Boolean,
                default: false
            },
            showCheckbox: {
                type: Boolean,
                default: false
            },
            emptyText: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            localeEmptyText () {
                if (this.emptyText === undefined) {
                    return this.t('i.tree.emptyText');
                } else {
                    return this.emptyText;
                }
            }
        },
        methods: {
            getSelectedNodes () {
                const nodes = findComponentsDownward(this, 'TreeNode');
                return nodes.filter(node => node.data.selected).map(node => node.data);
            },
            getCheckedNodes () {
                const nodes = findComponentsDownward(this, 'TreeNode');
                return nodes.filter(node => node.data.checked).map(node => node.data);
            },
            updateData (isInit = true) {
                // init checked status
                function reverseChecked(data) {
                    if (data.children) {
                        let checkedLength = 0;
                        data.children.forEach(node => {
                            if (node.children) node = reverseChecked(node);
                            if (node.checked) checkedLength++;
                        });
                        if (isInit) {
                            if (checkedLength >= data.children.length) data.checked = true;
                        } else {
                            data.checked = checkedLength >= data.children.length;
                        }
                        return data;
                    } else {
                        return data;
                    }
                }
                
                function forwardChecked(data) {
                    if (data.children) {
                        data.children.forEach(node => {
                            if (data.checked) node.checked = true;
                            if (node.children) node = forwardChecked(node);
                        });
                        return data;
                    } else {
                        return data;
                    }
                }
                this.data.map(node => reverseChecked(node)).map(node => forwardChecked(node));
                this.broadcast('TreeNode', 'indeterminate');
            }
        },
        mounted () {
            this.updateData();
            this.$on('selected', ori => {
                const nodes = findComponentsDownward(this, 'TreeNode');
                nodes.forEach(node => {
                    this.$set(node.data, 'selected', false);
                });
                this.$set(ori, 'selected', true);
            });
            this.$on('on-selected', () => {
                this.$emit('on-select-change', this.getSelectedNodes());
            });
            this.$on('checked', () => {
                this.updateData(false);
            });
            this.$on('on-checked', () => {
                this.$emit('on-check-change', this.getCheckedNodes());
            });
            this.$on('toggle-expand', (payload) => {
                this.$emit('on-toggle-expand', payload);
            });
        },
        watch: {
            data () {
                this.$nextTick(() => {
                    this.updateData();
                    this.broadcast('TreeNode', 'indeterminate');
                });
            }
        }
    };
</script>