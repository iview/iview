<template>
    <collapse-transition>
        <ul :class="classes">
            <li>
                <span :class="arrowClasses" @click="handleExpand">
                    <Icon type="arrow-right-b"></Icon>
                </span>
                <Checkbox
                        v-if="showCheckbox"
                        :value="data.checked"
                        :indeterminate="data.indeterminate"
                        :disabled="data.disabled || data.disableCheckbox"
                        @click.native.prevent="handleCheck"></Checkbox>
                <span :class="titleClasses" v-html="data.title" @click="handleSelect"></span>
                <Tree-node
                        v-if="data.expand"
                        v-for="item in data.children"
                        :key="item.nodeKey"
                        :data="item"
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
            }
        },
        data () {
            return {
                prefixCls: prefixCls
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
                this.dispatch('Tree', 'on-selected', this.data.nodeKey);
            },
            handleCheck () {
                if (this.data.disabled) return;
                const changes = {
                    checked: !this.data.checked && !this.data.indeterminate,
                    nodeKey: this.data.nodeKey
                };
                this.dispatch('Tree', 'on-check', changes);
            }
        }
    };
</script>
