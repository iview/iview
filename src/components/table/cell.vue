<template>
    <div :class="classes" ref="cell" @click="handleCellClick">
        <template v-if="renderType === 'index'"><span>{{ column.indexMethod ? column.indexMethod(row) : (naturalIndex + 1) }}</span></template>
        <template v-if="renderType === 'selection'">
            <Checkbox :value="checked" @click.native.stop="handleClick" @on-change="toggleSelect" :disabled="disabled"></Checkbox>
        </template>
        <div class="ivu-table-cell-tree-level" v-if="showLevel" :style="treeLevelStyle"></div>
        <div class="ivu-table-cell-tree" :class="{ 'ivu-table-cell-tree-loading': childrenLoading }" v-if="showChildren" @click.prevent.stop="handleToggleTree">
            <Icon type="ios-loading" v-if="childrenLoading" class="ivu-load-loop" />
            <Icon type="ios-add" v-else-if="!childrenExpand" />
            <Icon type="ios-remove" v-else />
        </div>
        <div class="ivu-table-cell-tree ivu-table-cell-tree-empty" v-else-if="showTreeNode"></div>
        <template v-if="renderType === 'html'"><span v-html="row[column.key]"></span></template>
        <template v-if="renderType === 'normal'">
            <template v-if="column.tooltip">
                <Tooltip transfer :content="row[column.key]" :theme="tableRoot.tooltipTheme" :disabled="!showTooltip && !tooltipShow" :max-width="300" class="ivu-table-cell-tooltip" @on-popper-show="handleTooltipShow" @on-popper-hide="handleTooltipHide">
                    <span ref="content" @mouseenter="handleTooltipIn" @mouseleave="handleTooltipOut" class="ivu-table-cell-tooltip-content">{{ row[column.key] }}</span>
                </Tooltip>
            </template>
            <span v-else>{{row[column.key]}}</span>
        </template>
        <template v-if="renderType === 'expand' && !row._disableExpand">
            <div :class="expandCls" @click="toggleExpand">
                <Icon type="ios-arrow-forward"></Icon>
            </div>
        </template>
        <table-expand
            v-if="renderType === 'render'"
            :row="row"
            :column="column"
            :index="index"
            :render="column.render"></table-expand>
        <table-slot
            v-if="renderType === 'slot'"
            :row="row"
            :column="column"
            :display="column.display || 'block'"
            :index="index"></table-slot>
    </div>
</template>
<script>
    import TableExpand from './expand';
    import TableSlot from './slot';
    import Icon from '../icon/icon.vue';
    import Checkbox from '../checkbox/checkbox.vue';
    import Tooltip from '../tooltip/tooltip.vue';

    export default {
        name: 'TableCell',
        components: { Icon, Checkbox, TableExpand, TableSlot, Tooltip },
        inject: ['tableRoot'],
        props: {
            prefixCls: String,
            row: Object,
            column: Object,
            naturalIndex: Number,    // index of rebuildData
            index: Number,           // _index of data
            checked: Boolean,
            disabled: Boolean,
            expanded: Boolean,
            fixed: {
                type: [Boolean, String],
                default: false
            },
            // 是否为 tree 子节点
            treeNode: Boolean,
            treeLevel: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                renderType: '',
                uid: -1,
                context: this.$parent.$parent.$parent.currentContext,
                showTooltip: false,  // 鼠标滑过overflow文本时，再检查是否需要显示
                tooltipShow: false
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right'),
                        [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
                        [`${this.prefixCls}-cell-with-expand`]: this.renderType === 'expand',
                        [`${this.prefixCls}-cell-with-selection`]: this.renderType === 'selection'
                    }
                ];
            },
            expandCls () {
                return [
                    `${this.prefixCls}-cell-expand`,
                    {
                        [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
                    }
                ];
            },
            showChildren () {
                let status = false;
                if (this.renderType === 'html' || this.renderType === 'normal' || this.renderType === 'render' || this.renderType === 'slot') {
                    const data = this.row;
                    if ((data.children && data.children.length) || ('_loading' in data)) {
                        if (this.column.tree) status = true;
                    }
                }
                return status;
            },
            showTreeNode () {
                let status = false;
                if (this.renderType === 'html' || this.renderType === 'normal' || this.renderType === 'render' || this.renderType === 'slot') {
                    if (this.column.tree && this.treeNode) status = true;
                }
                return status;
            },
            showLevel () {
                let status = false;
                if (this.renderType === 'html' || this.renderType === 'normal' || this.renderType === 'render' || this.renderType === 'slot') {
                    if (this.column.tree && this.treeNode) status = true;
                }
                return status;
            },
            treeLevelStyle () {
                return {
                    'padding-left': this.treeLevel * this.tableRoot.indentSize + 'px'
                };
            },
            childrenExpand () {
                const data = this.tableRoot.getDataByRowKey(this.row._rowKey);
                return data._isShowChildren;
            },
            childrenLoading () {
                const data = this.tableRoot.getDataByRowKey(this.row._rowKey);
                return '_loading' in data && data._loading;
            }
        },
        methods: {
            toggleSelect () {
                if (this.treeNode) {
                    this.$parent.$parent.$parent.toggleSelect(this.index, this.row._rowKey);
                } else {
                    this.$parent.$parent.$parent.toggleSelect(this.index);
                }
            },
            toggleExpand () {
                this.$parent.$parent.$parent.toggleExpand(this.index);
            },
            handleClick () {
                // 放置 Checkbox 冒泡
            },
            handleTooltipIn () {
                const $content = this.$refs.content;
                this.showTooltip = $content.scrollWidth > $content.offsetWidth;
            },
            handleTooltipOut () {
                this.showTooltip = false;
            },
            handleTooltipShow () {
                this.tooltipShow = true;
            },
            handleTooltipHide () {
                this.tooltipShow = false;
            },
            handleToggleTree () {
                this.$parent.$parent.$parent.toggleTree(this.row._rowKey);
            },
            handleCellClick (event) {
                this.$parent.$parent.$parent.$emit('on-cell-click', this.row, this.column, this.row[this.column.key], event);
            }
        },
        created () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.type === 'html') {
                this.renderType = 'html';
            } else if (this.column.type === 'expand') {
                this.renderType = 'expand';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else if (this.column.slot) {
                this.renderType = 'slot';
            } else {
                this.renderType = 'normal';
            }
        }
    };
</script>
