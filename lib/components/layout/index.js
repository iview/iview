'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./layout.vue');

var _layout2 = _interopRequireDefault(_layout);

var _header = require('./header.vue');

var _header2 = _interopRequireDefault(_header);

var _sider = require('./sider.vue');

var _sider2 = _interopRequireDefault(_sider);

var _content = require('./content.vue');

var _content2 = _interopRequireDefault(_content);

var _footer = require('./footer.vue');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layout2.default.Header = _header2.default;
_layout2.default.Sider = _sider2.default;
_layout2.default.Content = _content2.default;
_layout2.default.Footer = _footer2.default;

exports.default = _layout2.default;