'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

exports.changeColor = changeColor;
exports.clamp = clamp;
exports.getIncrement = getIncrement;
exports.getTouches = getTouches;
exports.toRGBAString = toRGBAString;
exports.isValidHex = isValidHex;
exports.simpleCheckForValidColor = simpleCheckForValidColor;

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _assist = require('../../utils/assist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAlpha(data, alpha) {
    var color = (0, _tinycolor2.default)(data);
    var _a = color._a;


    if (_a === undefined || _a === null) {
        color.setAlpha(alpha || 1);
    }

    return color;
}

function getColor(data, colorData) {
    var alpha = colorData && colorData.a;

    if (colorData) {
        if (colorData.hsl) {
            return setAlpha(colorData.hsl, alpha);
        }

        if (colorData.hex && colorData.hex.length > 0) {
            return setAlpha(colorData.hex, alpha);
        }
    }

    return setAlpha(colorData, alpha);
}

function changeColor(data, oldHue) {
    var colorData = data === '' ? '#2d8cf0' : data;
    var color = getColor(data, colorData);
    var hsl = color.toHsl();
    var hsv = color.toHsv();

    if (hsl.s === 0) {
        hsl.h = colorData.h || colorData.hsl && colorData.hsl.h || oldHue || 0;
        hsv.h = hsl.h;
    }

    if (hsv.v < 0.0164) {
        hsv.h = colorData.h || colorData.hsv && colorData.hsv.h || 0;
        hsv.s = colorData.s || colorData.hsv && colorData.hsv.s || 0;
    }

    if (hsl.l < 0.01) {
        hsl.h = colorData.h || colorData.hsl && colorData.hsl.h || 0;
        hsl.s = colorData.s || colorData.hsl && colorData.hsl.s || 0;
    }

    return {
        hsl: hsl,
        hex: color.toHexString().toUpperCase(),
        rgba: color.toRgb(),
        hsv: hsv,
        oldHue: colorData.h || oldHue || hsl.h,
        source: colorData.source,
        a: colorData.a || color.getAlpha()
    };
}

function clamp(value, min, max) {
    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
}

function getIncrement(key, keys, increment) {
    return (0, _assist.oneOf)(key, keys) ? increment : 0;
}

function getTouches(e, prop) {
    return e.touches ? e.touches[0][prop] : 0;
}

function toRGBAString(rgba) {
    var r = rgba.r,
        g = rgba.g,
        b = rgba.b,
        a = rgba.a;


    return 'rgba(' + String([r, g, b, a].join(',')) + ')';
}

function isValidHex(hex) {
    return (0, _tinycolor2.default)(hex).isValid();
}

function checkIteratee(data, counts, letter) {
    var checked = counts.checked,
        passed = counts.passed;

    var value = data[letter];

    if (value) {
        checked += 1;

        if ((0, _isFinite2.default)(value)) {
            passed += 1;
        }
    }

    return { checked: checked, passed: passed };
}

var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];

function simpleCheckForValidColor(data) {
    var results = keysToCheck.reduce(checkIteratee.bind(null, data), { checked: 0, passed: 0 });

    return results.checked === results.passed ? data : undefined;
}