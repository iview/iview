<template>
    <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
        <Casitem
            v-for="item in data"
            :prefix-cls="prefixCls"
            :data.sync="item"
            :tmp-item="tmpItem"
            @click.stop="handleClickItem(item)"
            @mouseenter.stop="handleHoverItem(item)"></Casitem>
    </ul><Caspanel v-if="sublist && sublist.length" :prefix-cls="prefixCls" :data.sync="sublist" :disabled="disabled" :trigger="trigger" @on-update-result="updateResult"></Caspanel>
</template>
<script>
    import Casitem from './casitem.vue';
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'Caspanel',
        components: { Casitem },
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            sublist: {
                type: Array,
                default () {
                    return []
                }
            },
            disabled: Boolean,
            changeOnSelect: Boolean,
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                }
            },
            prefixCls: String
        },
        data () {
            return {
                tmpItem: {},
                result: []
            }
        },
        methods: {
            handleClickItem (item) {
                if (this.trigger !== 'click') return;
                this.handleTriggerItem(item);
            },
            handleHoverItem (item) {
                if (this.trigger !== 'hover') return;
                this.handleTriggerItem(item);
            },
            handleTriggerItem (item) {
                if (item.disabled) return;

                if (item.children && item.children.length){
                    this.sublist = item.children;
                    // todo 实时选择
                } else {
                    this.sublist = [];
                    // todo 选择
                }

                // return value back
                const backItem = this.getBaseItem(item);

                this.tmpItem = backItem;
                this.$emit('on-update-result', [backItem]);
            },
            updateResult (item) {
                this.result = [this.tmpItem].concat(item);
                this.$emit('on-update-result', this.result);
            },
            getBaseItem (item) {
                let backItem = Object.assign({}, item);
                if (backItem.children) {
                    delete backItem.children;
                }

                return backItem;
            }
        },
        watch: {
            data () {
                this.sublist = [];
            }
        },
        ready () {
            // todo 初始化时，判断预设的值
        }
    }
</script>