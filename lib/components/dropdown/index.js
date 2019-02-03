'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('./dropdown.vue');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownMenu = require('./dropdown-menu.vue');

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

var _dropdownItem = require('./dropdown-item.vue');

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dropdown2.default.Menu = _dropdownMenu2.default;
_dropdown2.default.Item = _dropdownItem2.default;
exports.default = _dropdown2.default;