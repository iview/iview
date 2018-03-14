<script>
    import List from './list.vue';
    import Operation from './operation.vue';
    import Locale from '../../mixins/locale';
    import Emitter from '../../mixins/emitter';
    import { removeElem, addAfterElem, addBeforeElem } from '../../utils/dom';

    const prefixCls = 'ivu-transfer';

    export default {
        name: 'Transfer',
        mixins: [ Emitter, Locale ],
        render (h) {

            function cloneVNode (vnode) {
                const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode));
                const cloned = h(vnode.tag, vnode.data, clonedChildren);
                cloned.text = vnode.text;
                cloned.isComment = vnode.isComment;
                cloned.componentOptions = vnode.componentOptions;
                cloned.elm = vnode.elm;
                cloned.context = vnode.context;
                cloned.ns = vnode.ns;
                cloned.isStatic = vnode.isStatic;
                cloned.key = vnode.key;

                return cloned;
            }

            const vNodes = this.$slots.default === undefined ? [] : this.$slots.default;
            const clonedVNodes = this.$slots.default === undefined ? [] : vNodes.map(vnode => cloneVNode(vnode));

            return h('div', {
                'class': this.classes
            }, [
                h(List, {
                    ref: 'left',
                    props: {
                        position: 'left',
                        parentId: this._uid,
                        draggable: this.draggable,
                        prefixCls: this.prefixCls + '-list',
                        data: this.leftData,
                        renderFormat: this.renderFormat,
                        checkedKeys: this.leftCheckedKeys,
                        validKeysCount: this.leftValidKeysCount,
                        listStyle: this.listStyle,
                        title: this.localeTitles[0],
                        filterable: this.filterable,
                        filterPlaceholder: this.localeFilterPlaceholder,
                        filterMethod: this.filterMethod,
                        notFoundText: this.localeNotFoundText
                    },
                    on: {
                        'on-checked-keys-change': this.handleLeftCheckedKeysChange
                    }
                }, vNodes),

                h(Operation, {
                    props: {
                        type: 'horizontal',
                        prefixCls: this.prefixCls,
                        operations: this.operations,
                        leftActive: this.leftValidKeysCount > 0,
                        rightActive: this.rightValidKeysCount > 0
                    }
                }),

                h(List, {
                    ref: 'right',
                    props: {
                        position: 'right',
                        parentId: this._uid,
                        draggable: this.draggable,
                        prefixCls: this.prefixCls + '-list',
                        data: this.rightData,
                        renderFormat: this.renderFormat,
                        checkedKeys: this.rightCheckedKeys,
                        validKeysCount: this.rightValidKeysCount,
                        listStyle: this.listStyle,
                        title: this.localeTitles[1],
                        filterable: this.filterable,
                        filterPlaceholder: this.localeFilterPlaceholder,
                        filterMethod: this.filterMethod,
                        notFoundText: this.localeNotFoundText
                    },
                    on: {
                        'on-checked-keys-change': this.handleRightCheckedKeysChange
                    }
                }, clonedVNodes),

                this.upDown && h(Operation, {
                    props: {
                        type: 'vertical',
                        prefixCls: this.prefixCls,
                        operations: this.operations,
                        upActive: this.rightValidKeysCount > 0,
                        downActive: this.rightValidKeysCount > 0
                    }
                })
            ]);
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            renderFormat: {
                type: Function,
                default (item) {
                    return item.label || item.key;
                }
            },
            targetKeys: {
                type: Array,
                default () {
                    return [];
                }
            },
            selectedKeys: {
                type: Array,
                default () {
                    return [];
                }
            },
            listStyle: {
                type: Object,
                default () {
                    return {};
                }
            },
            titles: {
                type: Array
            },
            operations: {
                type: Array,
                default () {
                    return [];
                }
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterPlaceholder: {
                type: String
            },
            filterMethod: {
                type: Function,
                default (data, query) {
                    const type = ('label' in data) ? 'label' : 'key';
                    return data[type].indexOf(query) > -1;
                }
            },
            notFoundText: {
                type: String
            },
            upDown: {
                type: Boolean,
                default: false
            },
            draggable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                leftData: [],
                rightData: [],
                leftCheckedKeys: [],
                rightCheckedKeys: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            leftValidKeysCount () {
                return this.getValidKeys('left').length;
            },
            rightValidKeysCount () {
                return this.getValidKeys('right').length;
            },
            localeFilterPlaceholder () {
                if (this.filterPlaceholder === undefined) {
                    return this.t('i.transfer.filterPlaceholder');
                } else {
                    return this.filterPlaceholder;
                }
            },
            localeNotFoundText () {
                if (this.notFoundText === undefined) {
                    return this.t('i.transfer.notFoundText');
                } else {
                    return this.notFoundText;
                }
            },
            localeTitles () {
                if (this.titles === undefined) {
                    return [this.t('i.transfer.titles.source'), this.t('i.transfer.titles.target')];
                } else {
                    return this.titles;
                }
            }
        },
        methods: {
            getValidKeys (direction) {
                return this[`${direction}Data`].filter(data => !data.disabled && this[`${direction}CheckedKeys`].indexOf(data.key) > -1).map(data => data.key);
            },
            splitData (init = false) {
                this.leftData = [...this.data];
                this.rightData = [];
                if (this.targetKeys.length > 0) {
                    this.targetKeys.forEach((targetKey) => {
                        const filteredData = this.leftData.filter((data, index) => {
                            if (data.key === targetKey) {
                                this.leftData.splice(index, 1);
                                return true;
                            }
                            return false;
                        });
                        if (filteredData && filteredData.length > 0) this.rightData.push(filteredData[0]);
                    });
                }
                if (init) {
                    this.splitSelectedKey();
                }
            },
            splitSelectedKey () {
                const selectedKeys = this.selectedKeys;
                if (selectedKeys.length > 0) {
                    this.leftCheckedKeys = this.leftData
                            .filter(data => selectedKeys.indexOf(data.key) > -1)
                            .map(data => data.key);
                    this.rightCheckedKeys = this.rightData
                            .filter(data => selectedKeys.indexOf(data.key) > -1)
                            .map(data => data.key);
                }
            },
            moveTo (direction, data) {
                let newTargetKeys = this.targetKeys.concat();
                let moveKeys = [];

                if (direction === 'left' || direction === 'right') {
                    const targetKeys = this.targetKeys;
                    const opposite = direction === 'left' ? 'right' : 'left';
                    moveKeys = this.getValidKeys(opposite);
                    // 修改右移操作为追加到结尾而不是开头
                    newTargetKeys = direction === 'right' ?
                            targetKeys.concat(moveKeys) :
                            targetKeys.filter(targetKey => !moveKeys.some(checkedKey => targetKey === checkedKey));

                    this.$refs[opposite].toggleSelectAll(false);
                }
                // 新增右侧列表支持循环上下移动功能
                // https://github.com/iview/iview/issues/2206
                else if (direction === 'up' || direction === 'down') {
                    moveKeys = this.targetSelectedKeys;

                    if (direction === 'up') {
                        moveKeys.forEach(key => {
                            let pos = newTargetKeys.indexOf(key);
                            if (pos === 0) {
                                newTargetKeys.push(newTargetKeys.shift());
                            } else {
                                newTargetKeys.splice(pos, 1, newTargetKeys[pos - 1]);
                                newTargetKeys.splice(pos - 1, 1, key);
                            }
                        });
                    } else {
                        for (let i = moveKeys.length - 1; i >= 0; --i) {
                            let key = moveKeys[i];
                            let pos = newTargetKeys.indexOf(key);
                            if (pos === newTargetKeys.length - 1) {
                                newTargetKeys.unshift(newTargetKeys.pop());
                            } else {
                                newTargetKeys.splice(pos, 1, newTargetKeys[pos + 1]);
                                newTargetKeys.splice(pos + 1, 1, key);
                            }
                        }
                    }
                }
                // 新增拖拽操作
                else if (direction === 'drag' && data.position === 'right') {
                    if (data.operation === 'move') return;
                    let oldIndex = data.oldIndex;
                    let newIndex = data.newIndex;

                    if (data.operation === 'update') {
                        let childrens = data.elem.parentNode.children;
                        // 需要把拖拽后的修改恢复回来由targetKeys去触发
                        if (newIndex > oldIndex) {
                            addBeforeElem(childrens[newIndex], childrens[oldIndex]);
                        } else {
                            addAfterElem(childrens[newIndex], childrens[oldIndex]);
                        }
                        moveKeys = newTargetKeys[oldIndex];
                        // 禁用的项也可以上下移动
                        // if (this.isDisabledItem(moveKeys)) return;
                        newTargetKeys.splice(oldIndex, 1);
                        newTargetKeys.splice(newIndex, 0, moveKeys);
                    }
                    else if (data.operation === 'add' || data.operation === 'remove') {
                        let childrens = data.fromParentElem.children;
                        // 需要把拖拽后的修改恢复回来由targetKeys去触发
                        removeElem(data.elem);
                        if (childrens[oldIndex]) {
                            addBeforeElem(data.elem, childrens[oldIndex]);
                        } else {
                            addAfterElem(data.elem, childrens[oldIndex - 1]);
                        }
                        if (data.operation === 'add') {
                            moveKeys = this.leftData[oldIndex].key;
                            if (this.isDisabledItem(moveKeys)) return;
                            newTargetKeys.splice(newIndex, 0, moveKeys);
                        } else {
                            moveKeys = newTargetKeys[oldIndex];
                            if (this.isDisabledItem(moveKeys)) return;
                            newTargetKeys.splice(oldIndex, 1);
                        }
                    }
                }
                else { return; }

                this.$emit('on-change', newTargetKeys, direction, moveKeys);
                this.dispatch('FormItem', 'on-form-change', {
                    tarketKeys: newTargetKeys,
                    direction: direction,
                    moveKeys: moveKeys
                });
            },
            isDisabledItem (key) {
                let item;
                for (let i = 0; i < this.data.length; ++i) {
                    if (this.data[i].key === key) {
                        item = this.data[i];
                        break;
                    }
                }
                return !!item.disabled;
            },
            handleLeftCheckedKeysChange (keys) {
                this.leftCheckedKeys = keys;
                // fixed: issues/2478
                this.handleCheckedKeys();
            },
            handleRightCheckedKeysChange (keys) {
                this.rightCheckedKeys = keys;
                // fixed: issues/2478
                this.handleCheckedKeys();
            },
            handleCheckedKeys () {
                this.sourceSelectedKeys = this.getValidKeys('left');
                this.targetSelectedKeys = this.getValidKeys('right');
                this.$emit('on-selected-change', this.sourceSelectedKeys, this.targetSelectedKeys);
            }
        },
        watch: {
            targetKeys () {
                this.splitData(false);
            },
            data () {
                this.splitData(false);
            }
        },
        mounted () {
            this.splitData(true);
        }
    };
</script>
