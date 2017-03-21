<template>
    <ul :class="classes">
        <li v-for="(item, index) in data" :class="itemCls(item)">
            <span :class="arrowCls(item)" @click="setExpand(item.disabled, index)">
                <Icon type="arrow-right-b"></Icon>
            </span>
            <Checkbox
                v-if="showCheckbox"
                :value="item.checked && item.childrenCheckedStatus == 2"
                :disabled="item.disabled || item.disableCheckbox"
                :indeterminate="item.checked && item.childrenCheckedStatus == 1"
                @click.native.prevent="setCheck(item.disabled||item.disableCheckbox, index)"></Checkbox>
            <a :class="titleCls(item)" @click="setSelect(item.disabled, index)">
                <span :class="[prefixCls + '-title']" v-html="item.title"></span>
            </a>
            <transition name="slide-up">
                <Tree
                    v-if="!item.isLeaf"
                    v-show="item.expand"
                    :class="expandCls(item)"
                    :data="item.children"
                    :name="name+'.'+index"
                    :multiple="multiple"
                    :show-checkbox="showCheckbox"></Tree>
            </transition>
        </li>
    </ul>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import Checkbox from '../checkbox/checkbox.vue';
    import { t } from '../../locale';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-tree';

    export default {
        name: 'Tree',
        components: { Icon, Checkbox },
        mixins: [ Emitter ],
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            name: {
                type: String,
                default: '0'
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
                type: String,
                default () {
                    return t('i.tree.emptyText');
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            classes () {
                if (this.name === '0') {
                    return this.prefixCls;
                } else {
                    return `${this.prefixCls}-child-tree`;
                }
            }
        },
        watch: {
            data () {
                if (this.name === '0') {
                    this.setKey();
                    this.preHandle();
                }
            }
        },
        methods: {
            itemCls (item) {
                return [
                    {
                        [`${prefixCls}-item-disabled`]: item.disabled
                    }
                ];
            },
            arrowCls (item) {
                return [
                    `${this.prefixCls}-switcher`,
                    {
                        [`${this.prefixCls}-switcher-disabled`]: item.disabled,
                        [`${this.prefixCls}-noline_close`]: !item.expand && !item.isLeaf,
                        [`${this.prefixCls}-noline_open`]: item.expand && !item.isLeaf,
                        [`${this.prefixCls}-switcher-noop`]: item.isLeaf
                    }
                ];
            },
            titleCls (item) {
                return [
                    {
                        [`${this.prefixCls}-node-selected`]: item.selected
                    }
                ];
            },
            expandCls (item) {
                return [
                    {
                        [`${this.prefixCls}-child-tree-open`]: item.expand
                    }
                ];
            },
            setKey () {
                for (let i = 0; i < this.data.length; i++) {
                    this.data[i].name = `${this.name}.${i}`;
                }
            },
            preHandle () {
                for (let [i, item] of this.data.entries()) {
                    if (!item.children || !item.children.length) {
//                        this.$set(`data[${i}].isLeaf`, true);
//                        this.$set(`data[${i}].childrenCheckedStatus`, 2);
                        this.$set(this.data[i], 'isLeaf', true);
                        this.$set(this.data[i], 'childrenCheckedStatus', 2);
                        continue;
                    }
                    if (item.checked && !item.childrenCheckedStatus) {
//                        this.$set(`data[${i}].childrenCheckedStatus`, 2);
                        this.$set(this.data[i], 'childrenCheckedStatus', 2);
//                        this.$broadcast('parentChecked', true, `${this.name}.${i}`);
                        this.broadcast('Tree', 'parentChecked', {
                            status: true,
                            name: `${this.name}.${i}`
                        });
                    } else {
                        let status = this.getChildrenCheckedStatus(item.children);
//                        this.$set(`data[${i}].childrenCheckedStatus`, status);
                        this.$set(this.data[i], 'childrenCheckedStatus', status);
//                        if (status !== 0) this.$set(`data[${i}].checked`, true);
                        if (status !== 0) this.$set(this.data[i], 'checked', true);
                    }
                }
            },
            setExpand (disabled, index) {
                if (!disabled) {
//                    this.$set(`data[${index}].expand`, !this.data[index].expand);
                    this.$set(this.data[index], 'expand', !this.data[index].expand);
                }
            },
            setSelect (disabled, index) {
                if (!disabled) {
                    const selected = !this.data[index].selected;
                    if (this.multiple || !selected) {
//                        this.$set(`data[${index}].selected`, selected);
                        this.$set(this.data[index], 'selected', selected);
                    } else {
                        for (let i = 0; i < this.data.length; i++) {
                            if (i == index) {
//                                this.$set(`data[${i}].selected`, true);
                                this.$set(this.data[i], 'selected', true);
                            } else {
//                                this.$set(`data[${i}].selected`, false);
                                this.$set(this.data[i], 'selected', false);
                            }
                        }
                    }
//                    this.$dispatch('nodeSelected', this, selected);
                    this.dispatch('Tree', 'nodeSelected', {
                        ori: this,
                        selected: selected
                    });
                }
            },
            setCheck (disabled, index) {
                if (disabled) return;
                const checked = !this.data[index].checked;
//                this.$set(`data[${index}].checked`, checked);
                this.$set(this.data[index], 'checked', checked);
//                this.$set(`data[${index}].childrenCheckedStatus`, checked ? 2 : 0);
                this.$set(this.data[index], 'childrenCheckedStatus', checked ? 2 : 0);
//                this.$dispatch('childChecked', this, this.name);
                this.dispatch('Tree', 'childChecked', {
                    ori: this,
                    name: this.name
                });
//                this.$broadcast('parentChecked', checked, `${this.name}.${index}`);
                this.broadcast('Tree', 'parentChecked', {
                    status: checked,
                    name: `${this.name}.${index}`
                });
            },
            getNodes (data, opt) {
                data = data || this.data;
                let res = [];
                for (let node of data) {
                    let tmp = true;
                    for (let [key, value] of Object.entries(opt)) {
                        if (node[key] != value) {
                            tmp = false;
                            break;
                        }
                    }
                    if (tmp) {
                        res.push(node);
                    }
                    if (node.children && node.children.length) {
                        res = res.concat(this.getNodes(node.children, opt));
                    }
                }
                return res;
            },
            getSelectedNodes () {
                return this.getNodes(this.data, {selected: true});
            },
            getCheckedNodes () {
                return this.getNodes(this.data, {checked: true, childrenCheckedStatus: 2});
            },
            getChildrenCheckedStatus (children) {
                let checkNum = 0, child_childrenAllChecked = true;
                for (let child of children) {
                    if (child.checked) {
                        checkNum++;
                    }
                    if (child.childrenCheckedStatus !== 2) {
                        child_childrenAllChecked = false;
                    }
                }
                // select all
                if (checkNum == children.length) {
                    return child_childrenAllChecked ? 2 : 1;
                    // select some
                } else if (checkNum > 0) {
                    return 1;
                } else {
                    return 0;
                }
            }
        },
        mounted () {
            this.setKey();
            this.preHandle();

//            this.$on('nodeSelected', (ori, selected) => {
            this.$on('nodeSelected', (params) => {
                const ori = params.ori;
                const selected = params.selected;

                if (this.name !== '0') return true;
                if (!this.multiple && selected) {
                    if (this !== ori) {
                        for (let i = 0; i < this.data.length; i++) {
//                            this.$set(`data[${i}].selected`, false);
                            this.$set(this.data[i], 'selected', false);
                        }
                    }
//                    this.$broadcast('cancelSelected', ori);
                    this.broadcast('Tree', 'cancelSelected', ori);
                }
                this.$nextTick(() => {
                    this.$emit('on-select-change', this.getSelectedNodes());
                });
            });
            this.$on('cancelSelected', ori => {
//                this.$broadcast('cancelSelected', ori);
                this.broadcast('Tree', 'cancelSelected', ori);
                if (this !== ori) {
                    for (let i = 0; i < this.data.length; i++) {
//                        this.$set(`data[${i}].selected`, false);
                        this.$set(this.data[i], 'selected', false);
                    }
                }
            });
//            this.$on('parentChecked', (status, name) => {
            this.$on('parentChecked', (params) => {
                const status = params.status;
                const name = params.name;

                if (this.name == name || this.name.startsWith(name + '.')) {
                    for (let i = 0; i < this.data.length; i++) {
//                        this.$set(`data[${i}].checked`, status);
                        this.$set(this.data[i], 'checked', status);
//                        this.$set(`data[${i}].childrenCheckedStatus`, status ? 2 : 0);
                        this.$set(this.data[i], 'childrenCheckedStatus', status ? 2 : 0);
                    }
//                    this.$broadcast('parentChecked', status, name);
                    this.broadcast('Tree', 'parentChecked', {
                        status: status,
                        name: name
                    });
                }
            });
//            this.$on('childChecked', (ori, name) => {
            this.$on('childChecked', (params) => {
                const ori = params.ori;
                const name = params.name;

                if (this.name === '0') {
                    this.$nextTick(() => {
                        this.$emit('on-check-change', this.getCheckedNodes());
                    });
                }
                if (this === ori) return;
                for (let [i,item] of this.data.entries()) {
                    if (this.name + '.' + i == name) {
                        let temp = this.getChildrenCheckedStatus(item.children);
                        if (temp != item.childrenCheckedStatus) {
//                            this.$set(`data[${i}].checked`, !!temp);
                            this.$set(this.data[i], 'checked', !!temp);
//                            this.$set(`data[${i}].childrenCheckedStatus`, temp);
                            this.$set(this.data[i], 'childrenCheckedStatus', temp);
//                            if (this.name !== '0') this.$dispatch('childChecked', this, this.name);
                            if (this.name !== '0') this.dispatch('Tree', 'childChecked', {
                                ori: this,
                                name: this.name
                            });
                        }
                    }
                }
            });
        }
    };
</script>