'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeline = require('./timeline.vue');

var _timeline2 = _interopRequireDefault(_timeline);

var _timelineItem = require('./timeline-item.vue');

var _timelineItem2 = _interopRequireDefault(_timelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_timeline2.default.Item = _timelineItem2.default;
exports.default = _timeline2.default;