'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

exports.default = csv;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newLine = '\r\n';
var appendLine = function (content, row, _ref) {
    var separator = _ref.separator,
        quoted = _ref.quoted;
    (0, _newArrowCheck3.default)(undefined, undefined);

    var line = row.map(function (data) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        if (!quoted) return data;

        data = typeof data === 'string' ? data.replace(/"/g, '"') : data;
        return '"' + String(data) + '"';
    }.bind(undefined));
    content.push(line.join(separator));
}.bind(undefined);

var defaults = {
    separator: ',',
    quoted: false
};

function csv(columns, datas, options) {
    var _this = this;

    var noHeader = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    options = (0, _assign2.default)({}, defaults, options);
    var columnOrder = void 0;
    var content = [];
    var column = [];

    if (columns) {
        columnOrder = columns.map(function (v) {
            (0, _newArrowCheck3.default)(this, _this);

            if (typeof v === 'string') return v;
            if (!noHeader) {
                column.push(typeof v.title !== 'undefined' ? v.title : v.key);
            }
            return v.key;
        }.bind(this));
        if (column.length > 0) appendLine(content, column, options);
    } else {
        columnOrder = [];
        datas.forEach(function (v) {
            (0, _newArrowCheck3.default)(this, _this);

            if (!Array.isArray(v)) {
                columnOrder = columnOrder.concat((0, _keys2.default)(v));
            }
        }.bind(this));
        if (columnOrder.length > 0) {
            columnOrder = columnOrder.filter(function (value, index, self) {
                (0, _newArrowCheck3.default)(this, _this);
                return self.indexOf(value) === index;
            }.bind(this));
            if (!noHeader) appendLine(content, columnOrder, options);
        }
    }

    if (Array.isArray(datas)) {
        datas.forEach(function (row) {
            (0, _newArrowCheck3.default)(this, _this);

            if (!Array.isArray(row)) {
                row = columnOrder.map(function (k) {
                    (0, _newArrowCheck3.default)(this, _this);
                    return typeof row[k] !== 'undefined' ? row[k] : '';
                }.bind(this));
            }
            appendLine(content, row, options);
        }.bind(this));
    }
    return content.join(newLine);
}