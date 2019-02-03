'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carousel = require('./carousel.vue');

var _carousel2 = _interopRequireDefault(_carousel);

var _carouselItem = require('./carousel-item.vue');

var _carouselItem2 = _interopRequireDefault(_carouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_carousel2.default.Item = _carouselItem2.default;
exports.default = _carousel2.default;