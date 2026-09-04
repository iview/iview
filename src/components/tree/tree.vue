<template>
    <div :class="prefixCls">
        <Tree-node
            v-for="(item, i) in stateTree"
            :key="i"
            :data="item"
            visible
            :multiple="multiple"
            :show-checkbox="showCheckbox"
            :draggable="draggable"
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
            draggable: {
                type: Boolean,
                default: false
            },
            allowDrag: {
                type: Function
            },
            allowDrop: {
                type: Function
            },

        },
        data () {
            return {
                prefixCls: prefixCls,
                stateTree: this.data,
                flatState: [],
                dragState: {
                    draggingNode: null,
                    dropNode: null,
                    dropType: null
                }
            };
        },
        watch: {
            data: {
                deep: true,
                handler () {
                    this.stateTree = this.data;
                    this.flatState = this.compileFlatState();
                    this.rebuildTree();
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
                    // #6121
                    this.$set(parent, 'checked', parent[this.childrenKey].every(node => node.checked || node.disabled !== undefined ));
                    this.$set(parent, 'indeterminate', !parent.checked);
                } else {
                    this.$set(parent, 'checked', false);
                    this.$set(parent, 'indeterminate', parent[this.childrenKey].some(node => node.checked || node.indeterminate));
                }
                this.updateTreeUp(parentKey);
            },
            rebuildTree () { // only called when `data` prop changes
                const checkedNodes = this.getCheckedNodes();
                checkedNodes.forEach(node => {
                    this.updateTreeDown(node, {checked: true});
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
                return this.flatState.filter(obj => obj.node.checked).map(obj => obj.node);
            },
            getCheckedAndIndeterminateNodes () {
                /* public API */
                return this.flatState.filter(obj => (obj.node.checked || obj.node.indeterminate)).map(obj => obj.node);
            },
            updateTreeDown(node, changes = {}) {
                if (this.checkStrictly) return;
                for (let key in changes) {
                    // after #6121
                    if( key === 'checked' && node.disabled ){
                        this.$set(node, key, node.checked);
                    }else{
                        this.$set(node, key, changes[key]);
                    }
                    // before -- this.$set(node, key, changes[key]);
                }

                if (node[this.childrenKey]) {
                    node[this.childrenKey].forEach(child => {
                        this.updateTreeDown(child, changes);
                    });
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
                this.$set(node, 'checked', checked);
                this.$set(node, 'indeterminate', false);

                this.updateTreeUp(nodeKey); // propagate up
                this.updateTreeDown(node, {checked, indeterminate: false}); // reset `indeterminate` when going down

                this.$emit('on-check-change', this.getCheckedNodes(), node);
            },
            isDragAllowed (node) {
                return !this.allowDrag || this.allowDrag(node) !== false;
            },
            isDescendant (parent, node) {
                const children = parent && parent[this.childrenKey];
                if (!children) return false;
                return children.some(child => child === node || this.isDescendant(child, node));
            },
            findNodeLocation (node, nodes = this.stateTree, parent = null) {
                for (let index = 0; index < nodes.length; index++) {
                    if (nodes[index] === node) return { nodes, index, parent };
                    const children = nodes[index][this.childrenKey];
                    if (children) {
                        const location = this.findNodeLocation(node, children, nodes[index]);
                        if (location) return location;
                    }
                }
                return null;
            },
            getDropType (event) {
                const target = event.currentTarget;
                if (!target || !target.getBoundingClientRect) return 'inner';
                const rect = target.getBoundingClientRect();
                if (!rect.height) return 'inner';
                const offset = event.clientY - rect.top;
                if (offset < rect.height / 3) return 'before';
                if (offset > rect.height * 2 / 3) return 'after';
                return 'inner';
            },
            canDrop (draggingNode, dropNode, dropType) {
                if (!draggingNode || !dropNode || draggingNode === dropNode) return false;
                if (this.isDescendant(draggingNode, dropNode)) return false;
                return !this.allowDrop || this.allowDrop(draggingNode, dropNode, dropType) !== false;
            },
            handleDragStart (event, node) {
                if (!this.draggable || !this.isDragAllowed(node)) {
                    event.preventDefault();
                    return;
                }
                this.dragState.draggingNode = node;
                if (event.dataTransfer) {
                    event.dataTransfer.effectAllowed = 'move';
                    event.dataTransfer.setData('text/plain', String(node.nodeKey));
                }
                this.$emit('on-drag-start', node, event);
            },
            handleDragEnter (event, node) {
                const dragNode = this.dragState.draggingNode;
                const dropType = this.getDropType(event);
                if (!this.canDrop(dragNode, node, dropType)) return;
                event.preventDefault();
                this.$emit('on-drag-enter', dragNode, node, event);
            },
            handleDragOver (event, node) {
                const dragNode = this.dragState.draggingNode;
                const dropType = this.getDropType(event);
                if (!this.canDrop(dragNode, node, dropType)) {
                    this.dragState.dropNode = null;
                    this.dragState.dropType = null;
                    return;
                }
                event.preventDefault();
                if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
                this.dragState.dropNode = node;
                this.dragState.dropType = dropType;
                this.$emit('on-drag-over', dragNode, node, event);
            },
            handleDragLeave (event, node) {
                if (event.currentTarget && event.relatedTarget && event.currentTarget.contains(event.relatedTarget)) return;
                if (this.dragState.dropNode === node) {
                    this.dragState.dropNode = null;
                    this.dragState.dropType = null;
                }
                this.$emit('on-drag-leave', this.dragState.draggingNode, node, event);
            },
            moveNode (draggingNode, dropNode, dropType) {
                const source = this.findNodeLocation(draggingNode);
                const target = this.findNodeLocation(dropNode);
                if (!source || !target) return false;

                source.nodes.splice(source.index, 1);
                if (dropType === 'inner') {
                    if (!dropNode[this.childrenKey]) this.$set(dropNode, this.childrenKey, []);
                    dropNode[this.childrenKey].push(draggingNode);
                    this.$set(dropNode, 'expand', true);
                } else {
                    const updatedTarget = this.findNodeLocation(dropNode);
                    const insertAt = updatedTarget.index + (dropType === 'after' ? 1 : 0);
                    updatedTarget.nodes.splice(insertAt, 0, draggingNode);
                }
                this.flatState = this.compileFlatState();
                return true;
            },
            handleDrop (event, node) {
                const draggingNode = this.dragState.draggingNode;
                const dropType = this.dragState.dropNode === node
                    ? this.dragState.dropType
                    : this.getDropType(event);
                if (!this.canDrop(draggingNode, node, dropType)) return;
                event.preventDefault();
                if (this.moveNode(draggingNode, node, dropType)) {
                    this.$emit('on-drop', draggingNode, node, dropType, event);
                }
                this.dragState.dropNode = null;
                this.dragState.dropType = null;
            },
            handleDragEnd (event, node) {
                this.$emit('on-drag-end', node, this.dragState.dropNode, event);
                this.dragState.draggingNode = null;
                this.dragState.dropNode = null;
                this.dragState.dropType = null;
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
