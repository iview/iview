'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cell = require('./cell.vue');

var _cell2 = _interopRequireDefault(_cell);

var _cellGroup = require('./cell-group.vue');

var _cellGroup2 = _interopRequireDefault(_cellGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cell2.default.Group = _cellGroup2.default;
exports.default = _cell2.default;