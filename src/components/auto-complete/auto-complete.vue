<template lang="html">
  <div :class="[prefixCls]" ref="autoComplete">
    <Dropdown @on-click="handleItemClick" :style="styles" trigger="custom" :visible="this.visible" v-clickoutside="handleClose" :placement="placement" :transfer="transfer">
      <i-input ref="input" v-model="currentValue" @on-change="handleInputChange" @on-focus="handleInputFocus" @on-keydown="handleInputKeydown"
        :placeholder="placeholder" :disabled="disabled" :autofocus="autofocus" :name="name" :icon="icon" :size="size">
        <span :class="[prefixCls + '-clear']" v-if="clearable" slot="append" @click="clearInput"><Icon type="ios-close-outline"></Icon></span>
      </i-input>
      <DropdownMenu v-show="matchDataSource.length > 0 || loading" slot="list">
        <DropdownItem v-if="loading" key="loading" disabled>loading</DropdownItem>
        <DropdownItem v-else ref="selectItem" v-for="(value, index) in matchDataSource" :key="value" :name="value" :selected="index === selectIndex">{{value}}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import Icon from '@/components/icon';
import clickoutside from '@/directives/clickoutside';
import { oneOf } from '../../utils/assist';

const prefixCls = 'ivu-autocomplete';

export default {
    name: 'AutoComplete',
    directives: {
        clickoutside
    },
    components: { Icon },
    props: {
        dataSource: {
            type: Array,
            default: () => []
        },
        async: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        trigger: {
            validator(value) {
                return oneOf(value, ['focus', 'change']);
            },
            default: 'focus'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large']);
            }
        },
        icon: String,
        clearable: {
            type: Boolean,
            default: true
        },
        name: {
            type: String
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        placement: {
            validator (value) {
                return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },
            default: 'bottom'
        },
        transfer: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        matchDataSource() {
            // if support async, the server control the suggest options
            if (this.async) {
                return this.dataSource;
            } else {
                return this.dataSource.filter(name => {
                    return name.indexOf(this.currentValue) > -1;
                });
            }

        }
    },
    data () {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            selectIndex: 0,
            visible: false,
            styles: {
                width: '0px'
            }
        };
    },
    mounted () {
        this.setAutoCompleteStyle();
    },
    watch: {
        value (val) {
            this.currentValue = val;
        },
        dataSource () {
            this.setVisible();
        }
    },
    methods: {
        // 重置 AutoComplete
        reset () {
            this.setVisible(false);
            this.selectIndex = 0;
        },
        // 设置 value
        setValue (val, isFromSelect = false) {
            this.currentValue = val;
            this.$emit('input', val);
            this.$emit('on-change', val, isFromSelect);
        },
        // 设置自动输入框的样式
        setAutoCompleteStyle() {
            this.$nextTick(() => {
                this.styles = {
                    width: this.$el.offsetWidth + 'px'
                };
            });
        },
        // 设置自动完成框是否可见（在没有初始值或者没有匹配到值时就不显示）
        setVisible(value) {
            this.$nextTick(() => {
                if (typeof value !== 'undefined') {
                    this.visible = value;
                } else {
                    const condiction1 = this.currentValue && this.matchDataSource.length > 0; // 有值且选项不为空
                    const condiction2 = !this.currentValue && this.trigger === 'focus' && this.matchDataSource.length > 0; // 没有值时/允许 focus /选项不为空就展示
                    const condiction3 = this.async && this.loading; // 支持异步获取
                    if (condiction1 || condiction2 || condiction3) {
                        this.visible = true;
                    } else {
                        this.visible = false;
                    }
                }
            });
        },
        // 清空输入值
        clearInput() {
            this.$emit('input', '');
            this.$refs.input.focus();
        },
        // clickoutside 处理
        handleClose() {
            this.setVisible(false);
        },
        // focus 处理
        handleInputFocus(e) {
            if (this.trigger === 'focus') {
                this.$emit('on-focus', e);
                this.setVisible();
            }
        },
        handleInputChange(e) {
            const value = e.target.value;
            this.setValue(value);
            this.setVisible();
            this.selectIndex = 0;
        },
        handleItemClick(value) {
            this.setValue(value, true);
            this.setVisible(false);
            this.$refs.input.focus();
            this.reset();
        },
        handleInputKeydown(e) {
            if (this.visible) {
                switch (e.keyCode) {
                    // 按了上，press up
                    case 38:
                        {
                            e.preventDefault();
                            this.selectIndex = this.selectIndex === 0 ? 0 : this.selectIndex - 1;
                            this.scrollSelectMenu();
                            break;
                        }
                        // 按了下，press down
                    case 40:
                        {
                            e.preventDefault();
                            this.selectIndex = this.selectIndex === this.matchDataSource.length - 1 ?
                            this.matchDataSource.length - 1 : this.selectIndex + 1;
                            this.scrollSelectMenu();
                            break;
                        }
                        // 回车 press Enter
                    case 13:
                        {
                            this.handleItemClick(this.matchDataSource[this.selectIndex]);
                            break;
                        }
                        // press ESC
                    case 27:
                        {
                            this.reset();
                            break;
                        }
                }
            }
        },
        // 计算下拉菜单是否滚动
        scrollSelectMenu() {
            this.$nextTick(() => {
                const $currentSelectItem = this.$refs.selectItem[this.selectIndex].$el;
                const $parent = $currentSelectItem.parentNode;

                const itemHeight = $currentSelectItem.offsetHeight;

                // 选项在列表下方
                if (($currentSelectItem.offsetTop + itemHeight - $parent.scrollTop) > $parent.offsetHeight) {
                    $parent.scrollTop += itemHeight;
                }

                // 选项在列表上方
                if ($parent.scrollTop >= $currentSelectItem.offsetTop) {
                    $parent.scrollTop -= itemHeight;
                }
            });
        }
    }
};
</script>

<style lang="css">

</style>
