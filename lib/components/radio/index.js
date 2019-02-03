'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = require('./radio.vue');

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = require('./radio-group.vue');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_radio2.default.Group = _radioGroup2.default;
exports.default = _radio2.default;