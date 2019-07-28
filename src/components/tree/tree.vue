<template>
    <div :class="prefixCls">
        <Tree-node
            v-for="(item, i) in stateTree"
            :key="i"
            :data="item"
            visible
            :multiple="multiple"
            :show-checkbox="showCheckbox"
            :children-key="childrenKey">
        </Tree-node>
        <div :class="[prefixCls + '-empty']" v-if="!stateTree.length">{{ localeEmptyText }}</div>
    </div>
</template>
<script>
    import TreeNode from './node.vue';
    import Emitter from '../../mixins/emitter';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-tree';

    export default {
        name: 'Tree',
        mixins: [ Emitter, Locale ],
        components: { TreeNode },
        provide () {
            return { TreeInstance: this };
        },
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
            checkStrictly: {
                type: Boolean,
                default: false
            },
            // 当开启 showCheckbox 时，如果开启 checkDirectly，select 将强制转为 check 事件
            checkDirectly: {
                type: Boolean,
                default: false
            },
            emptyText: {
                type: String
            },
            childrenKey: {
                type: String,
                default: 'children'
            },
            loadData: {
                type: Function
            },
            render: {
                type: Function
            },

        },
        data () {
            return {
                prefixCls: prefixCls,
                stateTree: this.data,
                flatState: [],
            };
        },
        watch: {
            data: {
                deep: true,
                handler (val, old) {
                    if (val !== old) {
                        this.stateTree = this.data;
                        this.flatState = this.compileFlatState();
                        this.rebuildTree();
                    }
                }
            }
        },
        computed: {
            localeEmptyText () {
                if (typeof this.emptyText === 'undefined') {
                    return this.t('i.tree.emptyText');
                } else {
                    return this.emptyText;
                }
            },
        },
        methods: {
            compileFlatState () { // so we have always a relation parent/children of each node
                let keyCounter = 0;
                let childrenKey = this.childrenKey;
                const flatTree = [];
                function flattenChildren(node, parent) {
                    node.nodeKey = keyCounter++;
                    flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
                    if (typeof parent != 'undefined') {
                        flatTree[node.nodeKey].parent = parent.nodeKey;
                        flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
                    }

                    if (node[childrenKey]) {
                        flatTree[node.nodeKey][childrenKey] = [];
                        node[childrenKey].forEach(child => flattenChildren(child, node));
                    }
                }
                this.stateTree.forEach(rootNode => {
                    flattenChildren(rootNode);
                });
                return flatTree;
            },
            updateTreeUp(nodeKey){
                const parentKey = this.flatState[nodeKey].parent;
                if (typeof parentKey == 'undefined' || this.checkStrictly) return;

                const node = this.flatState[nodeKey].node;
                const parent = this.flatState[parentKey].node;
                if (node.checked == parent.checked && node.indeterminate == parent.indeterminate) return; // no need to update upwards
                if (node.checked == true) {
                     // fix #6121
                    let checked = parent[this.childrenKey].every(node => node.checked && !node.indeterminate)
                    this.$set(parent, 'checked', true);
                    this.$set(parent, 'indeterminate', !checked);
                } else {
                    this.$set(parent, 'checked', false);
                    this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate));
                }
                this.updateTreeUp(parentKey);
            },
            rebuildTree () { // only called when `data` prop changes
                const checkedNodes = this.getCheckedNodes();
                checkedNodes.forEach(node => {
                    this.updateTreeDown(node, true); // fix #6121
                    // propagate upwards
                    const parentKey = this.flatState[node.nodeKey].parent;
                    if (!parentKey && parentKey !== 0) return;
                    const parent = this.flatState[parentKey].node;
                    const childHasCheckSetter = typeof node.checked != 'undefined' && node.checked;
                    if (childHasCheckSetter && parent.checked != node.checked) {
                        this.updateTreeUp(node.nodeKey); // update tree upwards
                    }
                });
            },

            getSelectedNodes () {
                /* public API */
                return this.flatState.filter(obj => obj.node.selected).map(obj => obj.node);
            },
            getCheckedNodes () {
                /* public API */
                return this.flatState.filter(obj => obj.node.checked && !obj.node.indeterminate).map(obj => obj.node); // fix #6121
            },
            getCheckedAndIndeterminateNodes () {
                /* public API */
                return this.flatState.filter(obj => (obj.node.checked || obj.node.indeterminate)).map(obj => obj.node);
            },
            updateTreeDown(node, checked) {
                // fix #6121
                if (!node || this.checkStrictly) return;
                if (node[this.childrenKey]) {
                    node[this.childrenKey].forEach(child => {
                        this.updateTreeDown(child, checked);
                    });
                }
                if (!node.disabled && !node[this.childrenKey]) {
                    this.$set(node, 'checked', checked);
                    this.$set(node, 'indeterminate', false);
                }
                if (node[this.childrenKey]) {
                    let disabledNodes = node[this.childrenKey].filter(node => node.disabled);
                    if (disabledNodes.length === node[this.childrenKey].length) this.$set(node, 'indeterminate', false);
                    else {
                        if (checked) {
                            this.$set(node, 'indeterminate', !node[this.childrenKey].every(node => node.checked && !node.indeterminate));
                        } else {
                            this.$set(node, 'indeterminate', disabledNodes.length > 0 && disabledNodes.every(node => node.checked && !node.indeterminate));
                        }
                        this.$set(node, 'checked', checked);
                    }
                }  
            },
            handleSelect (nodeKey) {
                const node = this.flatState[nodeKey].node;
                if (!this.multiple){ // reset previously selected node
                    const currentSelectedKey = this.flatState.findIndex(obj => obj.node.selected);
                    if (currentSelectedKey >= 0 && currentSelectedKey !== nodeKey) this.$set(this.flatState[currentSelectedKey].node, 'selected', false);
                }
                this.$set(node, 'selected', !node.selected);

                this.$emit('on-select-change', this.getSelectedNodes(), node);
            },
            handleCheck({ checked, nodeKey }) {
                const node = this.flatState[nodeKey].node;
                // fix #6121
                this.updateTreeDown(node, checked); // reset `indeterminate` when going down
                this.updateTreeUp(nodeKey); // propagate up
                this.$emit('on-check-change', this.getCheckedNodes(), node);
            }
        },
        created(){
            this.flatState = this.compileFlatState();
            this.rebuildTree();
        },
        mounted () {
            this.$on('on-check', this.handleCheck);
            this.$on('on-selected', this.handleSelect);
            this.$on('toggle-expand', node => this.$emit('on-toggle-expand', node));
        }
    };
</script>
