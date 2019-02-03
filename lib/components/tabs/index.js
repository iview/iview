'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = require('./tabs.vue');

var _tabs2 = _interopRequireDefault(_tabs);

var _pane = require('./pane.vue');

var _pane2 = _interopRequireDefault(_pane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tabs2.default.Pane = _pane2.default;
exports.default = _tabs2.default;