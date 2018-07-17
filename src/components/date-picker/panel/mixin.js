const prefixCls = 'ivu-picker-panel';
const datePrefixCls = 'ivu-date-picker';

export default {
    methods: {
        iconBtnCls (direction, type = '') {
            return [
                `${prefixCls}-icon-btn`,
                `${datePrefixCls}-${direction}-btn`,
                `${datePrefixCls}-${direction}-btn-arrow${type}`,
            ];
        },
        handleShortcutClick (shortcut) {
            if (shortcut.value) this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick) shortcut.onClick(this);
        },
        handlePickClear () {
            this.$emit('on-pick-clear');
        },
        handlePickSuccess () {
            this.$emit('on-pick-success');
        },
        handlePickClick () {
            this.$emit('on-pick-click');
        }
    }
};
