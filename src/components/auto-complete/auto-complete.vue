<template lang="html">
  <div :class="[prefixCls]" ref="autoComplete">
    <Dropdown @on-click="handleItemClick" :style="styles" trigger="custom" :visible="this.visible" v-clickoutside="handleClose" :placement="placement" :transfer="transfer">
      <i-input ref="input" v-model="currentValue" @on-change="handleInputChange" @on-focus="handleInputFocus" @on-keydown="handleInputKeydown"
        :placeholder="placeholder" :disabled="disabled" :autofocus="autofocus" :name="name" :icon="icon" :size="size">
      </i-input>
      <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.native.stop="clearInput"></Icon>
      <DropdownMenu v-show="matchDataSource.length > 0 || loading" slot="list">
        <DropdownItem v-if="loading" key="loading" disabled>加载中...</DropdownItem>
        <DropdownItem v-else ref="selectItem" v-for="(value, index) in matchDataSource" :key="value" :name="value" :selected="index === selectedIndex">{{value}}</DropdownItem>
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
        remote: {
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
            default: 'change'
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
        matchDataSource () {
            // if support remote, the server control the suggest options
            if (this.remote) {
                return this.dataSource;
            } else {
                return this.dataSource.filter(name => {
                    return name.indexOf(this.currentValue) > -1;
                });
            }

        },
        showCloseIcon () {
            return this.value && this.clearable;
        }
    },
    data () {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            selectedIndex: -1,
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
        value(val) {
            this.currentValue = val;
        },
        dataSource() {
            this.setVisible();
        },
        currentValue() {
            this.setSelectedIndex();
        }
    },
    methods: {
        // 设置 value
        setValue(val, isFromSelect = false) {
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
            if (typeof value !== 'undefined') {
                this.visible = value;
                return value;
            }

            this.$nextTick(() => {
                const condiction1 = this.currentValue && this.matchDataSource.length > 0; // 有值且选项不为空
                const condiction2 = !this.currentValue && this.trigger === 'focus' && this.matchDataSource.length > 0; // 没有值时/允许 focus /选项不为空就展示
                const condiction3 = (this.currentValue || this.trigger === 'focus') && this.remote && this.loading; // 支持异步获取

                if (condiction1 || condiction2 || condiction3) {
                    this.visible = true;
                } else {
                    this.visible = false;
                }
            });
        },
        // 设置当前值在当前可选项中的匹配位置
        setSelectedIndex() {
            const index = this.matchDataSource.indexOf(this.currentValue);
            this.selectedIndex = index;
        },
        // 清空输入值
        clearInput() {
            this.setValue('');
            this.$refs.input.focus();
        },
        // clickoutside 处理
        handleClose() {
            this.setVisible(false);
            this.setSelectedIndex();
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
            this.selectedIndex = 0;
        },
        handleItemClick(value) {
            this.setValue(value, true);
            this.handleClose();
        },
        handleInputKeydown(e) {
            if (this.visible) {
                switch (e.keyCode) {
                    // 按了上，press up
                    case 38:
                        {
                            e.preventDefault();
                            this.selectedIndex = this.selectedIndex === 0 ? this.matchDataSource.length - 1 : this.selectedIndex - 1;
                            this.scrollSelectMenu();
                            break;
                        }
                        // 按了下，press down
                    case 40:
                        {
                            e.preventDefault();
                            this.selectedIndex = this.selectedIndex === this.matchDataSource.length - 1 ?
                            0 : this.selectedIndex + 1;
                            this.scrollSelectMenu();
                            break;
                        }
                        // 回车 press Enter
                    case 13:
                        {
                            this.handleItemClick(this.matchDataSource[this.selectedIndex]);
                            break;
                        }
                        // press ESC
                    case 27:
                        {
                            this.handleClose();
                            break;
                        }
                }
            }
        },
        // 计算下拉菜单是否滚动
        scrollSelectMenu() {
            this.$nextTick(() => {
                const $currentSelectItem = this.$refs.selectItem[this.selectedIndex].$el;
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
