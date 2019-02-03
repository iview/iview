'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('./menu.vue');

var _menu2 = _interopRequireDefault(_menu);

var _menuGroup = require('./menu-group.vue');

var _menuGroup2 = _interopRequireDefault(_menuGroup);

var _menuItem = require('./menu-item.vue');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _submenu = require('./submenu.vue');

var _submenu2 = _interopRequireDefault(_submenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.Group = _menuGroup2.default;
_menu2.default.Item = _menuItem2.default;
_menu2.default.Sub = _submenu2.default;

exports.default = _menu2.default;