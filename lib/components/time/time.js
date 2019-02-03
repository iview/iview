'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRelativeTime = undefined;

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

exports.default = function (timestamp, locale) {
    return getRelativeTime(timestamp, locale);
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEarly = function (timeStamp, currentTime) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    return timeStamp <= currentTime;
}.bind(undefined);

var getHandledValue = function (num) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    return num < 10 ? '0' + num : num;
}.bind(undefined);

var getDate = function (timeStamp, startType) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var d = new Date(timeStamp);
    var year = d.getFullYear();
    var month = getHandledValue(d.getMonth() + 1);
    var date = getHandledValue(d.getDate());
    var hours = getHandledValue(d.getHours());
    var minutes = getHandledValue(d.getMinutes());
    var second = getHandledValue(d.getSeconds());
    var resStr = '';
    if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second;else resStr = month + '-' + date + ' ' + hours + ':' + minutes;
    return resStr;
}.bind(undefined);

var getRelativeTime = exports.getRelativeTime = function (timeStamp, locale) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var currentTime = new Date().getTime();

    var IS_EARLY = isEarly(timeStamp, currentTime);

    var diff = currentTime - timeStamp;

    if (!IS_EARLY) diff = -diff;
    var resStr = '';
    var dirStr = IS_EARLY ? locale('i.time.before') || '前' : locale('i.time.after') || '后';

    if (diff < 1000) resStr = locale('i.time.just') || '刚刚';else if (diff < 60000) resStr = parseInt(diff / 1000) + (locale('i.time.seconds') || '秒') + dirStr;else if (diff >= 60000 && diff < 3600000) resStr = Math.floor(diff / 60000) + (locale('i.time.minutes') || '分钟') + dirStr;else if (diff >= 3600000 && diff < 86400000) resStr = Math.floor(diff / 3600000) + (locale('i.time.hours') || '小时') + dirStr;else if (diff >= 86400000 && diff < 2623860000) resStr = Math.floor(diff / 86400000) + (locale('i.time.days') || '天') + dirStr;else if (diff >= 2623860000 && diff <= 31567860000 && IS_EARLY) resStr = getDate(timeStamp);else resStr = getDate(timeStamp, 'year');
    return resStr;
}.bind(undefined);