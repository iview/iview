<template>
    <collapse-transition>
        <ul :class="classes" v-show="visible">
            <li>
                <span :class="arrowClasses" @click="handleExpand">
                    <Icon type="arrow-right-b"></Icon>
                </span>
                <Checkbox
                        v-if="showCheckbox"
                        :value="data.checked"
                        :indeterminate="indeterminate"
                        :disabled="data.disabled || data.disableCheckbox"
                        @click.native.prevent="handleCheck"></Checkbox>
                <span :class="titleClasses" v-html="data.title" @click="handleSelect"></span>
                <Tree-node
                        v-for="item in data.children"
                        :key="item"
                        :data="item"
                        :visible="data.expand"
                        :multiple="multiple"
                        :show-checkbox="showCheckbox">
                </Tree-node>
            </li>
        </ul>
    </collapse-transition>
</template>
<script>
    import Checkbox from '../checkbox/checkbox.vue';
    import Icon from '../icon/icon.vue';
    import CollapseTransition from '../base/collapse-transition';
    import Emitter from '../../mixins/emitter';
    import { findComponentsDownward } from '../../utils/assist';

    const prefixCls = 'ivu-tree';

    export default {
        name: 'TreeNode',
        mixins: [ Emitter ],
        components: { Checkbox, Icon, CollapseTransition },
        props: {
            data: {
                type: Object,
                default () {
                    return {};
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
            visible: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                indeterminate: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-children`
                ];
            },
            selectedCls () {
                return [
                    {
                        [`${prefixCls}-node-selected`]: this.data.selected
                    }
                ];
            },
            arrowClasses () {
                return [
                    `${prefixCls}-arrow`,
                    {
                        [`${prefixCls}-arrow-disabled`]: this.data.disabled,
                        [`${prefixCls}-arrow-open`]: this.data.expand,
                        [`${prefixCls}-arrow-hidden`]: !(this.data.children && this.data.children.length)
                    }
                ];
            },
            titleClasses () {
                return [
                    `${prefixCls}-title`,
                    {
                        [`${prefixCls}-title-selected`]: this.data.selected
                    }
                ];
            }
        },
        methods: {
            handleExpand () {
                if (this.data.disabled) return;
                this.$set(this.data, 'expand', !this.data.expand);
                this.dispatch('Tree', 'toggle-expand', this.data);
            },
            handleSelect () {
                if (this.data.disabled) return;
                if (this.data.selected) {
                    this.data.selected = false;
                } else if (this.multiple) {
                    this.$set(this.data, 'selected', !this.data.selected);
                } else {
                    this.dispatch('Tree', 'selected', this.data);
                }
                this.dispatch('Tree', 'on-selected');
            },
            handleCheck () {
                if (this.disabled) return;
                const checked = !this.data.checked;
                if (!checked || this.indeterminate) {
                    findComponentsDownward(this, 'TreeNode').forEach(node => node.data.checked = false);
                } else {
                    findComponentsDownward(this, 'TreeNode').forEach(node => node.data.checked = true);
                }
                this.data.checked = checked;
                this.dispatch('Tree', 'checked');
                this.dispatch('Tree', 'on-checked');
            },
            setIndeterminate () {
                this.indeterminate = this.data.checked ? false : findComponentsDownward(this, 'TreeNode').some(node => node.data.checked);
            }
        },
        created () {
            // created node.vue first, mounted tree.vue second
            if (!this.data.checked) this.$set(this.data, 'checked', false);
        },
        mounted () {
            this.$on('indeterminate', () => {
                this.broadcast('TreeNode', 'indeterminate');
                this.setIndeterminate();
            });
        }
    };
</script>