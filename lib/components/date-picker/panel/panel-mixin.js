'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var datePrefixCls = 'ivu-date-picker';

exports.default = {
    props: {
        confirm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        iconBtnCls: function iconBtnCls(direction) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            return [prefixCls + '-icon-btn', datePrefixCls + '-' + String(direction) + '-btn', datePrefixCls + '-' + String(direction) + '-btn-arrow' + String(type)];
        },
        handleShortcutClick: function handleShortcutClick(shortcut) {
            if (shortcut.value) this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick) shortcut.onClick(this);
        },
        handlePickClear: function handlePickClear() {
            this.resetView();
            this.$emit('on-pick-clear');
        },
        handlePickSuccess: function handlePickSuccess() {
            this.resetView();
            this.$emit('on-pick-success');
        },
        handlePickClick: function handlePickClick() {
            this.$emit('on-pick-click');
        },
        resetView: function resetView() {
            var _this = this;

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.currentView = this.selectionMode;
            }.bind(this), 500);
        },
        handleClear: function handleClear() {
            var _this2 = this;

            this.dates = this.dates.map(function () {
                (0, _newArrowCheck3.default)(this, _this2);
                return null;
            }.bind(this));
            this.rangeState = {};
            this.$emit('on-pick', this.dates);
            this.handleConfirm();
        },
        handleConfirm: function handleConfirm(visible, type) {
            this.$emit('on-pick', this.dates, visible, type || this.type);
        },
        onToggleVisibility: function onToggleVisibility(open) {
            var _$refs = this.$refs,
                timeSpinner = _$refs.timeSpinner,
                timeSpinnerEnd = _$refs.timeSpinnerEnd;

            if (open && timeSpinner) timeSpinner.updateScroll();
            if (open && timeSpinnerEnd) timeSpinnerEnd.updateScroll();
        }
    }
};