<template>
    <span>
        <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
            <Casitem
                v-for="item in data"
                :key="item"
                :prefix-cls="prefixCls"
                :data="item"
                :tmp-item="tmpItem"
                @click.native.stop="handleClickItem(item)"
                @mouseenter.native.stop="handleHoverItem(item)"></Casitem>
        </ul><Caspanel v-if="sublist && sublist.length" :prefix-cls="prefixCls" :data="sublist" :disabled="disabled" :trigger="trigger" :change-on-select="changeOnSelect"></Caspanel>
    </span>
</template>
<script>
    import Casitem from './casitem.vue';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'Caspanel',
        mixins: [ Emitter ],
        components: { Casitem },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: Boolean,
            changeOnSelect: Boolean,
            trigger: String,
            prefixCls: String
        },
        data () {
            return {
                tmpItem: {},
                result: [],
                sublist: []
            };
        },
        watch: {
            data () {
                this.sublist = [];
            }
        },
        methods: {
            handleClickItem (item) {
                if (this.trigger !== 'click' && item.children) return;
                this.handleTriggerItem(item);
            },
            handleHoverItem (item) {
                if (this.trigger !== 'hover' || !item.children) return;
                this.handleTriggerItem(item);
            },
            handleTriggerItem (item, fromInit = false) {
                if (item.disabled) return;

                // return value back recursion  // 向上递归，设置临时选中值（并非真实选中）
                const backItem = this.getBaseItem(item);
                this.tmpItem = backItem;
                this.emitUpdate([backItem]);

                if (item.children && item.children.length){
                    this.sublist = item.children;
//                    this.$dispatch('on-result-change', false, this.changeOnSelect, fromInit);
                    this.dispatch('Cascader', 'on-result-change', {
                        lastValue: false,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });
                } else {
                    this.sublist = [];
//                    this.$dispatch('on-result-change', true, this.changeOnSelect, fromInit);
                    this.dispatch('Cascader', 'on-result-change', {
                        lastValue: true,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });
                }
            },
            updateResult (item) {
                this.result = [this.tmpItem].concat(item);
                this.emitUpdate(this.result);
            },
            getBaseItem (item) {
                let backItem = Object.assign({}, item);
                if (backItem.children) {
                    delete backItem.children;
                }

                return backItem;
            },
            emitUpdate (result) {
                if (this.$parent.$options.name === 'Caspanel') {
                    this.$parent.updateResult(result);
                } else {
                    this.$parent.$parent.updateResult(result);
                }
            }
        },
        mounted () {
            this.$on('on-find-selected', (params) => {
                const val = params.value;
                let value = [...val];
                for (let i = 0; i < value.length; i++) {
                    for (let j = 0; j < this.data.length; j++) {
                        if (value[i] === this.data[j].value) {
                            this.handleTriggerItem(this.data[j], true);
                            value.splice(0, 1);
                            this.$nextTick(() => {
                                this.broadcast('Caspanel', 'on-find-selected', {
                                    value: value
                                });
                            });
                            return false;
                        }
                    }
                }
            });
            this.$on('on-clear', () => {
                this.sublist = [];
                this.tmpItem = {};
            });
        }
    };
</script>
