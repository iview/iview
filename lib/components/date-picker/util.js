'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TYPE_VALUE_RESOLVER_MAP = exports.RANGE_SEPARATOR = exports.DEFAULT_FORMATS = exports.formatDateLabels = exports.initTimeDate = exports.nextMonth = exports.prevMonth = exports.siblingMonth = exports.getFirstDayOfMonth = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isInRange = exports.clearHours = exports.toDate = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _date2 = require('../../utils/date');

var _date3 = _interopRequireDefault(_date2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDate = exports.toDate = function toDate(date) {
    var _date = new Date(date);

    if (isNaN(_date.getTime()) && typeof date === 'string') {
        _date = date.split('-').map(Number);
        _date[1] += 1;
        _date = new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(_date))))();
    }


    if (isNaN(_date.getTime())) return null;
    return _date;
};

var clearHours = exports.clearHours = function clearHours(time) {
    var cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

var isInRange = exports.isInRange = function (time, a, b) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (!a || !b) return false;

    var _sort = [a, b].sort(),
        _sort2 = (0, _slicedToArray3.default)(_sort, 2),
        start = _sort2[0],
        end = _sort2[1];

    return time >= start && time <= end;
}.bind(undefined);

var formatDate = exports.formatDate = function formatDate(date, format) {
    date = toDate(date);
    if (!date) return '';
    return _date3.default.format(date, format || 'yyyy-MM-dd');
};

var parseDate = exports.parseDate = function parseDate(string, format) {
    return _date3.default.parse(string, format || 'yyyy-MM-dd');
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

var siblingMonth = exports.siblingMonth = function siblingMonth(src, diff) {
    var temp = new Date(src);
    var newMonth = temp.getMonth() + diff;
    var newMonthDayCount = getDayCountOfMonth(temp.getFullYear(), newMonth);
    if (newMonthDayCount < temp.getDate()) {
        temp.setDate(newMonthDayCount);
    }
    temp.setMonth(newMonth);

    return temp;
};

var prevMonth = exports.prevMonth = function prevMonth(src) {
    return siblingMonth(src, -1);
};

var nextMonth = exports.nextMonth = function nextMonth(src) {
    return siblingMonth(src, 1);
};

var initTimeDate = exports.initTimeDate = function initTimeDate() {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
};

var formatDateLabels = exports.formatDateLabels = function () {
    var _this = this;

    var formats = {
        yyyy: function yyyy(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.getFullYear();
        }.bind(this),
        m: function m(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.getMonth() + 1;
        }.bind(this),
        mm: function mm(date) {
            (0, _newArrowCheck3.default)(this, _this);
            return ('0' + (date.getMonth() + 1)).slice(-2);
        }.bind(this),
        mmm: function mmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return monthName.slice(0, 3);
        }.bind(this),
        Mmm: function Mmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return (monthName[0].toUpperCase() + monthName.slice(1).toLowerCase()).slice(0, 3);
        }.bind(this),
        mmmm: function mmmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);
            return date.toLocaleDateString(locale, {
                month: 'long'
            });
        }.bind(this),
        Mmmm: function Mmmm(date, locale) {
            (0, _newArrowCheck3.default)(this, _this);

            var monthName = date.toLocaleDateString(locale, {
                month: 'long'
            });
            return monthName[0].toUpperCase() + monthName.slice(1).toLowerCase();
        }.bind(this)
    };
    var formatRegex = new RegExp(['yyyy', 'Mmmm', 'mmmm', 'Mmm', 'mmm', 'mm', 'm'].join('|'), 'g');

    return function (locale, format, date) {
        var _this2 = this;

        var componetsRegex = /(\[[^\]]+\])([^\[\]]+)(\[[^\]]+\])/;
        var components = format.match(componetsRegex).slice(1);
        var separator = components[1];
        var labels = [components[0], components[2]].map(function (component) {
            (0, _newArrowCheck3.default)(this, _this2);

            var label = component.replace(/\[[^\]]+\]/, function (str) {
                (0, _newArrowCheck3.default)(this, _this2);

                return str.slice(1, -1).replace(formatRegex, function (match) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return formats[match](date, locale);
                }.bind(this));
            }.bind(this));
            return {
                label: label,
                type: component.indexOf('yy') != -1 ? 'year' : 'month'
            };
        }.bind(this));
        return {
            separator: separator,
            labels: labels
        };
    };
}();

var DEFAULT_FORMATS = exports.DEFAULT_FORMATS = {
    date: 'yyyy-MM-dd',
    month: 'yyyy-MM',
    year: 'yyyy',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    time: 'HH:mm:ss',
    timerange: 'HH:mm:ss',
    daterange: 'yyyy-MM-dd',
    datetimerange: 'yyyy-MM-dd HH:mm:ss'
};

var RANGE_SEPARATOR = exports.RANGE_SEPARATOR = ' - ';

var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
    return formatDate(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
    return parseDate(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
    if (Array.isArray(value) && value.length === 2) {
        var start = value[0];
        var end = value[1];

        if (start && end) {
            return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
        }
    } else if (!Array.isArray(value) && value instanceof Date) {
        return formatDate(value, format);
    }
    return '';
};
var RANGE_PARSER = function RANGE_PARSER(text, format) {
    var array = Array.isArray(text) ? text : text.split(RANGE_SEPARATOR);
    if (array.length === 2) {
        var range1 = array[0];
        var range2 = array[1];

        return [range1 instanceof Date ? range1 : parseDate(range1, format), range2 instanceof Date ? range2 : parseDate(range2, format)];
    }
    return [];
};

var TYPE_VALUE_RESOLVER_MAP = exports.TYPE_VALUE_RESOLVER_MAP = {
    default: {
        formatter: function formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser: function parser(text) {
            if (text === undefined || text === '') return null;
            return text;
        }
    },
    date: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    datetime: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    daterange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    datetimerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    timerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    time: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    month: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    year: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    multiple: {
        formatter: function formatter(value, format) {
            (0, _newArrowCheck3.default)(undefined, undefined);

            return value.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return formatDate(date, format);
            }.bind(undefined)).join(',');
        }.bind(undefined),
        parser: function parser(value, format) {
            (0, _newArrowCheck3.default)(undefined, undefined);

            var values = typeof value === 'string' ? value.split(',') : value;
            return values.map(function (value) {
                (0, _newArrowCheck3.default)(undefined, undefined);

                if (value instanceof Date) return value;
                if (typeof value === 'string') value = value.trim();else if (typeof value !== 'number' && !value) value = '';
                return parseDate(value, format);
            }.bind(undefined));
        }.bind(undefined)
    },
    number: {
        formatter: function formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser: function parser(text) {
            var result = Number(text);

            if (!isNaN(text)) {
                return result;
            } else {
                return null;
            }
        }
    }
};