const prefixCls = 'ivu-picker-panel';
const datePrefixCls = 'ivu-date-picker';

export default {
    methods: {
        iconBtnCls (direction, type = '') {
            return [
                `${prefixCls}-icon-btn`,
                `${datePrefixCls}-${direction}-btn`,
                `${datePrefixCls}-${direction}-btn-arrow${type}`,
            ]
        },
        handleShortcutClick (shortcut) {
            if (shortcut.value) this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick) shortcut.onClick(this);
        },
        resetView() {
            if (this.selectionMode === 'month') {
                this.currentView = 'month';
            } else if (this.selectionMode === 'year') {
                this.currentView = 'year';
            } else {
                this.currentView = 'date';
            }

            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
        }
    }
}