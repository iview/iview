'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        alignCls: function alignCls(column) {
            var _ref;

            var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var cellClassName = '';
            if (row.cellClassName && column.key && row.cellClassName[column.key]) {
                cellClassName = row.cellClassName[column.key];
            }
            return [(_ref = {}, (0, _defineProperty3.default)(_ref, '' + String(cellClassName), cellClassName), (0, _defineProperty3.default)(_ref, '' + String(column.className), column.className), (0, _defineProperty3.default)(_ref, String(this.prefixCls) + '-column-' + String(column.align), column.align), (0, _defineProperty3.default)(_ref, String(this.prefixCls) + '-hidden', this.fixed === 'left' && column.fixed !== 'left' || this.fixed === 'right' && column.fixed !== 'right' || !this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right')), _ref)];
        },
        isPopperShow: function isPopperShow(column) {
            return column.filters && (!this.fixed && !column.fixed || this.fixed === 'left' && column.fixed === 'left' || this.fixed === 'right' && column.fixed === 'right');
        },
        setCellWidth: function setCellWidth(column) {
            var width = '';
            if (column.width) {
                width = column.width;
            } else if (this.columnsWidth[column._index]) {
                width = this.columnsWidth[column._index].width;
            }
            if (width === '0') width = '';
            return width;
        }
    }
};