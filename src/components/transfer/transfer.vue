<template>
    <div :class="classes">
        <List
            v-ref:left
            :prefix-cls="prefixCls + '-list'"
            :data="leftData"
            :render-format="renderFormat"
            :checked-keys.sync="leftCheckedKeys"
            :valid-keys-count.sync="leftValidKeysCount"
            :style="listStyle"
            :title="titles[0]"
            :filterable="filterable"
            :filter-placeholder="filterPlaceholder"
            :filter-method="filterMethod"
            :not-found-text="notFoundText">
            <slot></slot>
        </List><Operation
            :prefix-cls="prefixCls"
            :operations="operations"
            :left-active="leftValidKeysCount > 0"
            :right-active="rightValidKeysCount > 0"></Operation><List
            v-ref:right
            :prefix-cls="prefixCls + '-list'"
            :data="rightData"
            :render-format="renderFormat"
            :checked-keys.sync="rightCheckedKeys"
            :valid-keys-count.sync="rightValidKeysCount"
            :style="listStyle"
            :title="titles[1]"
            :filterable="filterable"
            :filter-placeholder="filterPlaceholder"
            :filter-method="filterMethod"
            :not-found-text="notFoundText">
            <slot></slot>
        </List>
    </div>
</template>
<script>
    import List from './list.vue';
    import Operation from './operation.vue';

    const prefixCls = 'ivu-transfer';

    export default {
        components: { List, Operation },
        props: {
            data: {
                type: Array,
                default () {
                    return []
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
                    return []
                }
            },
            selectedKeys: {
                type: Array,
                default () {
                    return []
                }
            },
            listStyle: {
                type: Object,
                default () {
                    return {}
                }
            },
            titles: {
                type: Array,
                default () {
                    return ['源列表', '目的列表']
                }
            },
            operations: {
                type: Array,
                default () {
                    return []
                }
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterPlaceholder: {
                type: String,
                default: '请输入搜索内容'
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
                default: '列表为空'
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                leftData: [],
                rightData: [],
                leftCheckedKeys: [],
                rightCheckedKeys: []
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ]
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
    }
</script>