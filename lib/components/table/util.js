'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRandomStr = exports.convertToRows = exports.getAllColumns = exports.convertColumnOrder = undefined;

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _assist = require('../../utils/assist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertColumnOrder = function (columns, fixedType) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var list = [];
    var other = [];
    columns.forEach(function (col) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        if (col.fixed && col.fixed === fixedType) {
            list.push(col);
        } else {
            other.push(col);
        }
    }.bind(undefined));
    return list.concat(other);
}.bind(undefined);

exports.convertColumnOrder = convertColumnOrder;

var getAllColumns = function (cols) {
    var forTableHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _newArrowCheck3.default)(undefined, undefined);

    var columns = (0, _assist.deepCopy)(cols);
    var result = [];
    columns.forEach(function (column) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        if (column.children) {
            if (forTableHead) result.push(column);
            result.push.apply(result, getAllColumns(column.children, forTableHead));
        } else {
            result.push(column);
        }
    }.bind(undefined));
    return result;
}.bind(undefined);

exports.getAllColumns = getAllColumns;


var convertToRows = function (columns) {
    var fixedType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _newArrowCheck3.default)(undefined, undefined);

    var originColumns = fixedType ? fixedType === 'left' ? (0, _assist.deepCopy)(convertColumnOrder(columns, 'left')) : (0, _assist.deepCopy)(convertColumnOrder(columns, 'right')) : (0, _assist.deepCopy)(columns);
    var maxLevel = 1;
    var traverse = function (column, parent) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        if (parent) {
            column.level = parent.level + 1;
            if (maxLevel < column.level) {
                maxLevel = column.level;
            }
        }
        if (column.children) {
            var colSpan = 0;
            column.children.forEach(function (subColumn) {
                (0, _newArrowCheck3.default)(undefined, undefined);

                traverse(subColumn, column);
                colSpan += subColumn.colSpan;
            }.bind(undefined));
            column.colSpan = colSpan;
        } else {
            column.colSpan = 1;
        }
    }.bind(undefined);

    originColumns.forEach(function (column) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        column.level = 1;
        traverse(column);
    }.bind(undefined));

    var rows = [];
    for (var i = 0; i < maxLevel; i++) {
        rows.push([]);
    }

    var allColumns = getAllColumns(originColumns, true);

    allColumns.forEach(function (column) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        if (!column.children) {
            column.rowSpan = maxLevel - column.level + 1;
        } else {
            column.rowSpan = 1;
        }
        rows[column.level - 1].push(column);
    }.bind(undefined));

    return rows;
}.bind(undefined);

exports.convertToRows = convertToRows;


var getRandomStr = function getRandomStr() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;

    var $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var maxPos = $chars.length;
    var str = '';
    for (var i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

exports.getRandomStr = getRandomStr;