'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('./breadcrumb.vue');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _breadcrumbItem = require('./breadcrumb-item.vue');

var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_breadcrumb2.default.Item = _breadcrumbItem2.default;
exports.default = _breadcrumb2.default;