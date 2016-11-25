<template>
    <div :class="classes">
        <template v-if="renderType === 'index'">{{index + 1}}</template>
        <template v-if="renderType === 'selection'">
            <Checkbox :checked="checked" @on-change="toggleSelect(index)"></Checkbox>
        </template>
        <template v-if="renderType === 'normal'">{{{ row[column.key] }}}</template>
    </div>
</template>
<script>
    import Checkbox from '../checkbox/checkbox.vue';

    export default {
        components: { Checkbox },
        props: {
            prefixCls: String,
            row: Object,
            column: Object,
            index: Number,
            checked: Boolean
        },
        data () {
            return {
                renderType: '',
                uid: -1
            }
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-cell`,
                    {
                        [`${this.prefixCls}-hidden`]: this.column.fixed && (this.column.fixed === 'left' || this.column.fixed === 'right')
                    }
                ]
            }
        },
        methods: {
            compile () {
                if (this.column.render) {
                    const template = this.column.render(this.row, this.column, this.index);
                    const cell = document.createElement('div');
                    cell.innerHTML = template;
                    const _oldParentChildLen = this.$parent.$parent.$children.length;
                    this.$parent.$parent.$compile(cell);
                    const _newParentChildLen = this.$parent.$parent.$children.length;

                    if (_oldParentChildLen !== _newParentChildLen) {    // if render normal html node, do not tag
                        this.uid = this.$parent.$parent.$children[this.$parent.$parent.$children.length - 1]._uid;    // tag it, and delete when data or columns update
                    }
                    this.$el.innerHTML = '';
                    this.$el.appendChild(cell);
                }
            },
            destroy () {
                for (let i = 0; i < this.$parent.$parent.$children.length; i++) {
                    if (this.$parent.$parent.$children[i]._uid === this.uid) {
                        this.$parent.$parent.$children[i].$destroy();
                    }
                }
            },
            toggleSelect (index) {
                this.$parent.toggleSelect(index);
            }
        },
        compiled () {
            if (this.column.type === 'index') {
                this.renderType = 'index';
            } else if (this.column.type === 'selection') {
                this.renderType = 'selection';
            } else if (this.column.render) {
                this.renderType = 'render';
            } else {
                this.renderType = 'normal';
            }
        },
        ready () {
            this.compile();
        },
        beforeDestroy () {
            this.destroy();
        },
        watch: {
            index () {
                this.destroy();
                this.compile();
            }
        }
    }
</script>