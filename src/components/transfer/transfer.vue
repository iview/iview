<!-- <template>
    <div :class="classes">
        <List
            ref="left"
            :prefix-cls="prefixCls + '-list'"
            :data="leftData"
            :render-format="renderFormat"
            :checked-keys="leftCheckedKeys"
            @on-checked-keys-change="handleLeftCheckedKeysChange"
            :valid-keys-count="leftValidKeysCount"
            :style="listStyle"
            :title="titles[0]"
            :filterable="filterable"
            :filter-placeholder="filterPlaceholder"
            :filter-method="filterMethod"
            :not-found-text="notFoundText">
            <slot></slot>
        </List>
        <Operation
            :prefix-cls="prefixCls"
            :operations="operations"
            :left-active="leftValidKeysCount > 0"
            :right-active="rightValidKeysCount > 0">
        </Operation>
        <List
            ref="right"
            :prefix-cls="prefixCls + '-list'"
            :data="rightData"
            :render-format="renderFormat"
            :checked-keys="rightCheckedKeys"
            @on-checked-keys-change="handleRightCheckedKeysChange"
            :valid-keys-count="rightValidKeysCount"
            :style="listStyle"
            :title="titles[1]"
            :filterable="filterable"
            :filter-placeholder="filterPlaceholder"
            :filter-method="filterMethod"
            :not-found-text="notFoundText">
            <slot></slot>
        </List>
    </div>
</template> -->
<script>
    import List from './list.vue';
    import Operation from './operation.vue';
    import { t } from '../../locale';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-transfer';

    export default {
        mixins: [ Emitter ],
        render (createElement) {

            function cloneVNode (vnode) {
                const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode));
                const cloned = createElement(vnode.tag, vnode.data, clonedChildren);
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

            return createElement('div', {
                'class': this.classes
            }, [
                createElement('List', {
                    ref: 'left',
                    props: {
                        prefixCls: this.prefixCls + '-list',
                        data: this.leftData,
                        renderFormat: this.renderFormat,
                        checkedKeys: this.leftCheckedKeys,
                        validKeysCount: this.leftValidKeysCount,
                        style: this.listStyle,
                        title: this.titles[0],
                        filterable: this.filterable,
                        filterPlaceholder: this.filterPlaceholder,
                        filterMethod: this.filterMethod,
                        notFoundText: this.notFoundText
                    },
                    on: {
                        'on-checked-keys-change': this.handleLeftCheckedKeysChange
                    }
                }, vNodes),

                createElement('Operation', {
                    props: {
                        prefixCls: this.prefixCls,
                        operations: this.operations,
                        leftActive: this.leftValidKeysCount > 0,
                        rightActive: this.rightValidKeysCount > 0
                    }
                }),

                createElement('List', {
                    ref: 'right',
                    props: {
                        prefixCls: this.prefixCls + '-list',
                        data: this.rightData,
                        renderFormat: this.renderFormat,
                        checkedKeys: this.rightCheckedKeys,
                        validKeysCount: this.rightValidKeysCount,
                        style: this.listStyle,
                        title: this.titles[1],
                        filterable: this.filterable,
                        filterPlaceholder: this.filterPlaceholder,
                        filterMethod: this.filterMethod,
                        notFoundText: this.notFoundText
                    },
                    on: {
                        'on-checked-keys-change': this.handleRightCheckedKeysChange
                    }
                }, clonedVNodes)
            ]);
        },

        components: { List, Operation },
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
                type: Array,
                default () {
                    return [t('i.transfer.titles.source'), t('i.transfer.titles.target')];
                }
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
                type: String,
                default () {
                    return t('i.transfer.filterPlaceholder');
                }
            },
            filterMethod: {
                type: Function,
                default (data, query) {
                    const type = ('label' in data) ? 'label' : 'key';
                    return data[type].indexOf(query) > -1;
                }
            },
            notFoundText: {
                type: String,
                default () {
                    return t('i.transfer.notFoundText');
                }
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
                        this.rightData.push(
                                this.leftData.filter((data, index) => {
                                    if (data.key === targetKey) {
                                        this.leftData.splice(index, 1);
                                        return true;
                                    }
                                    return false;
                                })[0]);
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
            moveTo (direction) {
                const targetKeys = this.targetKeys;
                const opposite = direction === 'left' ? 'right' : 'left';
                const moveKeys = this.getValidKeys(opposite);
                const newTargetKeys = direction === 'right' ?
                        moveKeys.concat(targetKeys) :
                        targetKeys.filter(targetKey => !moveKeys.some(checkedKey => targetKey === checkedKey));

                this.$refs[opposite].toggleSelectAll(false);
                this.$emit('on-change', newTargetKeys, direction, moveKeys);
                this.dispatch('FormItem', 'on-form-change', {
                    tarketKeys: newTargetKeys,
                    direction: direction,
                    moveKeys: moveKeys
                });
            },
            handleLeftCheckedKeysChange (keys) {
                this.leftCheckedKeys = keys;
            },
            handleRightCheckedKeysChange (keys) {
                this.rightCheckedKeys = keys;
            }
        },
        watch: {
            targetKeys () {
                this.splitData(false);
            }
        },
        created () {
            this.splitData(true);
        }
    };
</script>
