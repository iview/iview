(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("iview", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["iview"] = factory(require("vue"));
	else
		root["iview"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(134);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sharpMatcherRegx = exports.dimensionMap = exports.findComponentUpward = exports.deepCopy = exports.firstUpperCase = exports.MutationObserver = undefined;

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

exports.oneOf = oneOf;
exports.camelcaseToHyphen = camelcaseToHyphen;
exports.getScrollBarSize = getScrollBarSize;
exports.getStyle = getStyle;
exports.warnProp = warnProp;
exports.scrollTop = scrollTop;
exports.findComponentDownward = findComponentDownward;
exports.findComponentsDownward = findComponentsDownward;
exports.findComponentsUpward = findComponentsUpward;
exports.findBrothersComponents = findBrothersComponents;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setMatchMedia = setMatchMedia;

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
function oneOf(value, validList) {
    for (var i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

var cached = void 0;
function getScrollBarSize(fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        var outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

var MutationObserver = exports.MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
exports.firstUpperCase = firstUpperCase;
function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error('[iView warn]: Invalid prop: type check failed for prop ' + String(prop) + '. Expected ' + String(correctType) + ', got ' + String(wrongType) + '. (found in component: ' + String(component) + ')');
}

function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

function deepCopy(data) {
    var t = typeOf(data);
    var o = void 0;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (var i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (var _i in data) {
            o[_i] = deepCopy(data[_i]);
        }
    }
    return o;
}

exports.deepCopy = deepCopy;
function scrollTop(el) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var to = arguments[2];
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
    var endCallback = arguments[4];

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        var _this = this;

        if (start === end) {
            endCallback && endCallback();
            return;
        }

        var d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(function () {
            (0, _newArrowCheck3.default)(this, _this);
            return scroll(d, end, step);
        }.bind(this));
    }
    scroll(from, to, step);
}

function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
exports.findComponentUpward = findComponentUpward;
function findComponentDownward(context, componentName) {
    var childrens = context.$children;
    var children = null;

    if (childrens.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(childrens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                var name = child.$options.name;
                if (name === componentName) {
                    children = child;
                    break;
                } else {
                    children = findComponentDownward(child, componentName);
                    if (children) break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return children;
}

function findComponentsDownward(context, componentName) {
    var _this2 = this;

    return context.$children.reduce(function (components, child) {
        (0, _newArrowCheck3.default)(this, _this2);

        if (child.$options.name === componentName) components.push(child);
        var foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }.bind(this), []);
}

function findComponentsUpward(context, componentName) {
    var parents = [];
    var parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

function findBrothersComponents(context, componentName) {
    var _this3 = this;

    var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var res = context.$parent.$children.filter(function (item) {
        (0, _newArrowCheck3.default)(this, _this3);

        return item.$options.name === componentName;
    }.bind(this));
    var index = res.findIndex(function (item) {
        (0, _newArrowCheck3.default)(this, _this3);
        return item._uid === context._uid;
    }.bind(this));
    if (exceptMe) res.splice(index, 1);
    return res;
}

var trim = function trim(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

var dimensionMap = exports.dimensionMap = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px'
};

function setMatchMedia() {
    var _this4 = this;

    if (typeof window !== 'undefined') {
        var matchMediaPolyfill = function (mediaQuery) {
            (0, _newArrowCheck3.default)(this, _this4);

            return {
                media: mediaQuery,
                matches: false,
                on: function on() {},
                off: function off() {}
            };
        }.bind(this);
        window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
}

var sharpMatcherRegx = exports.sharpMatcherRegx = /#([^#]+)$/;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(44)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _broadcast(componentName, eventName, params) {
    var _this = this;

    this.$children.forEach(function (child) {
        (0, _newArrowCheck3.default)(this, _this);

        var name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    }.bind(this));
}
exports.default = {
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _locale = __webpack_require__(92);

exports.default = {
    methods: {
        t: function t() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _locale.t.apply(this, args);
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(4);
var ctx = __webpack_require__(65);
var hide = __webpack_require__(18);
var has = __webpack_require__(13);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TYPE_VALUE_RESOLVER_MAP = exports.RANGE_SEPARATOR = exports.DEFAULT_FORMATS = exports.formatDateLabels = exports.initTimeDate = exports.nextMonth = exports.prevMonth = exports.siblingMonth = exports.getFirstDayOfMonth = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isInRange = exports.clearHours = exports.toDate = undefined;

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _date2 = __webpack_require__(210);

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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(66);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(201);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(40);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(62);
var defined = __webpack_require__(40);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(12) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(47);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFinite = __webpack_require__(86);

var _isFinite2 = _interopRequireDefault(_isFinite);

exports.changeColor = changeColor;
exports.clamp = clamp;
exports.getIncrement = getIncrement;
exports.getTouches = getTouches;
exports.toRGBAString = toRGBAString;
exports.isValidHex = isValidHex;
exports.simpleCheckForValidColor = simpleCheckForValidColor;

var _tinycolor = __webpack_require__(80);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _assist = __webpack_require__(3);

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(61);
var enumBugKeys = __webpack_require__(45);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            prefixCls: 'ivu-color-picker',
            inputPrefixCls: 'ivu-input',
            iconPrefixCls: 'ivu-icon',
            transferPrefixCls: 'ivu-transfer'
        };
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(95);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(145)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(71)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(148);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(150);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2018-present",
  "date": "2019-01-21T12:39:36.944Z",
  "describe": "",
  "description": "Vue directive to react on clicks outside an element.",
  "file": "v-click-outside-x.min.js",
  "hash": "ef8b7b3c24168423686e",
  "license": "MIT",
  "version": "3.7.1"
}
*/
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vClickOutside=t():e.vClickOutside=t()}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.install=function(e){e.directive("click-outside",s)},t.directive=void 0;var i=Object.create(null),c=Object.create(null),f=[i,c],l=function(e,t,n){var r=n.target,o=function(t){var o=t.el;if(o!==r&&!o.contains(r)){var u=t.binding;u.modifiers.stop&&n.stopPropagation(),u.modifiers.prevent&&n.preventDefault(),u.value.call(e,n)}};Object.keys(t).forEach(function(e){return t[e].forEach(o)})},a=function(e){l(this,i,e)},d=function(e){l(this,c,e)},p=function(e){return e?a:d},s=Object.defineProperties({},{$_captureInstances:{value:i},$_nonCaptureInstances:{value:c},$_onCaptureEvent:{value:a},$_onNonCaptureEvent:{value:d},bind:{value:function(e,t){if("function"!=typeof t.value)throw new TypeError("Binding value must be a function.");var n=t.arg||"click",u=o({},t,{arg:n,modifiers:o({},{capture:!1,prevent:!1,stop:!1},t.modifiers)}),f=u.modifiers.capture,l=f?i:c;Array.isArray(l[n])||(l[n]=[]),1===l[n].push({el:e,binding:u})&&"object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.addEventListener(n,p(f),f)}},unbind:{value:function(e){var t=function(t){return t.el!==e};f.forEach(function(e){var n=Object.keys(e);if(n.length){var o=e===i;n.forEach(function(n){var u=e[n].filter(t);u.length?e[n]=u:("object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.removeEventListener(n,p(o),o),delete e[n])})}})}},version:{enumerable:!0,value:"3.7.1"}});t.directive=s}])});
//# sourceMappingURL=v-click-outside-x.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(47);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTarget(node) {
    if (node === void 0) {
        node = document.body;
    }
    if (node === true) {
        return document.body;
    }
    return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
    inserted: function inserted(el, _ref, vnode) {
        var value = _ref.value;

        if (el.dataset && el.dataset.transfer !== 'true') return false;
        el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
        var parentNode = el.parentNode;
        if (!parentNode) return;
        var home = document.createComment('');
        var hasMovedOut = false;

        if (value !== false) {
            parentNode.replaceChild(home, el);
            getTarget(value).appendChild(el);
            hasMovedOut = true;
        }
        if (!el.__transferDomData) {
            el.__transferDomData = {
                parentNode: parentNode,
                home: home,
                target: getTarget(value),
                hasMovedOut: hasMovedOut
            };
        }
    },
    componentUpdated: function componentUpdated(el, _ref2) {
        var value = _ref2.value;

        if (el.dataset && el.dataset.transfer !== 'true') return false;

        var ref$1 = el.__transferDomData;
        if (!ref$1) return;

        var parentNode = ref$1.parentNode;
        var home = ref$1.home;
        var hasMovedOut = ref$1.hasMovedOut;

        if (!hasMovedOut && value) {
            parentNode.replaceChild(home, el);

            getTarget(value).appendChild(el);
            el.__transferDomData = (0, _assign2.default)({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
        } else if (hasMovedOut && value === false) {
            parentNode.replaceChild(el, home);
            el.__transferDomData = (0, _assign2.default)({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
        } else if (value) {
            getTarget(value).appendChild(el);
        }
    },
    unbind: function unbind(el) {
        if (el.dataset && el.dataset.transfer !== 'true') return false;
        el.className = el.className.replace('v-transfer-dom', '');
        var ref$1 = el.__transferDomData;
        if (!ref$1) return;
        if (el.__transferDomData.hasMovedOut === true) {
            el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
        }
        el.__transferDomData = null;
    }
};

exports.default = directive;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_067117a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_067117a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_067117a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_067117a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_067117a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f2e04ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f2e04ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f2e04ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f2e04ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f2e04ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var datePrefixCls = 'ivu-date-picker';

exports.default = {
    props: {
        confirm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        iconBtnCls: function iconBtnCls(direction) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            return [prefixCls + '-icon-btn', datePrefixCls + '-' + String(direction) + '-btn', datePrefixCls + '-' + String(direction) + '-btn-arrow' + String(type)];
        },
        handleShortcutClick: function handleShortcutClick(shortcut) {
            if (shortcut.value) this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick) shortcut.onClick(this);
        },
        handlePickClear: function handlePickClear() {
            this.resetView();
            this.$emit('on-pick-clear');
        },
        handlePickSuccess: function handlePickSuccess() {
            this.resetView();
            this.$emit('on-pick-success');
        },
        handlePickClick: function handlePickClick() {
            this.$emit('on-pick-click');
        },
        resetView: function resetView() {
            var _this = this;

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.currentView = this.selectionMode;
            }.bind(this), 500);
        },
        handleClear: function handleClear() {
            var _this2 = this;

            this.dates = this.dates.map(function () {
                (0, _newArrowCheck3.default)(this, _this2);
                return null;
            }.bind(this));
            this.rangeState = {};
            this.$emit('on-pick', this.dates);
            this.handleConfirm();
        },
        handleConfirm: function handleConfirm(visible, type) {
            this.$emit('on-pick', this.dates, visible, type || this.type);
        },
        onToggleVisibility: function onToggleVisibility(open) {
            var _$refs = this.$refs,
                timeSpinner = _$refs.timeSpinner,
                timeSpinnerEnd = _$refs.timeSpinnerEnd;

            if (open && timeSpinner) timeSpinner.updateScroll();
            if (open && timeSpinnerEnd) timeSpinnerEnd.updateScroll();
        }
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(44)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var global = __webpack_require__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(25);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_669b21d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_669b21d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_669b21d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_669b21d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_669b21d9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ab195dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ab195dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ab195dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ab195dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ab195dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var global = __webpack_require__(10);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(5)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var core = __webpack_require__(4);
var LIBRARY = __webpack_require__(30);
var wksExt = __webpack_require__(54);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _handleEscapeMixin = __webpack_require__(85);

var _handleEscapeMixin2 = _interopRequireDefault(_handleEscapeMixin);

var _utils = __webpack_require__(23);

var _dom = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_emitter2.default, _handleEscapeMixin2.default],

    props: {
        focused: {
            type: Boolean,
            default: false
        },
        value: {
            type: Object,
            default: undefined
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.unbindEventListeners();
    },
    created: function created() {
        var _this = this;

        if (this.focused) {
            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.$el.focus();
            }.bind(this), 1);
        }
    },


    methods: {
        handleLeft: function handleLeft(e) {
            this.handleSlide(e, this.left, 'left');
        },
        handleRight: function handleRight(e) {
            this.handleSlide(e, this.right, 'right');
        },
        handleUp: function handleUp(e) {
            this.handleSlide(e, this.up, 'up');
        },
        handleDown: function handleDown(e) {
            this.handleSlide(e, this.down, 'down');
        },
        handleMouseDown: function handleMouseDown(e) {
            this.dispatch('ColorPicker', 'on-dragging', true);
            this.handleChange(e, true);

            (0, _dom.on)(window, 'mousemove', this.handleChange);
            (0, _dom.on)(window, 'mouseup', this.handleMouseUp);
        },
        handleMouseUp: function handleMouseUp() {
            this.unbindEventListeners();
        },
        unbindEventListeners: function unbindEventListeners() {
            var _this2 = this;

            (0, _dom.off)(window, 'mousemove', this.handleChange);
            (0, _dom.off)(window, 'mouseup', this.handleMouseUp);

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this2);
                return this.dispatch('ColorPicker', 'on-dragging', false);
            }.bind(this), 1);
        },
        getLeft: function getLeft(e) {
            var container = this.$refs.container;

            var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
            var pageX = e.pageX || (0, _utils.getTouches)(e, 'PageX');

            return pageX - xOffset;
        },
        getTop: function getTop(e) {
            var container = this.$refs.container;

            var yOffset = container.getBoundingClientRect().top + window.pageYOffset;
            var pageY = e.pageY || (0, _utils.getTouches)(e, 'PageY');

            return pageY - yOffset;
        }
    }
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1237ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1237ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1237ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1237ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a1237ee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'PanelTable',
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {
                    from: null,
                    to: null,
                    selecting: false
                };
            }.bind(undefined)
        },
        focusedDate: {
            type: Date,
            required: true
        }
    },
    computed: {
        dates: function dates() {
            var selectionMode = this.selectionMode,
                value = this.value,
                rangeState = this.rangeState;

            var rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : value;
        }
    },
    methods: {
        handleClick: function handleClick(cell) {
            if (cell.disabled || cell.type === 'weekLabel') return;
            var newDate = new Date((0, _util.clearHours)(cell.date));

            this.$emit('on-pick', newDate);
            this.$emit('on-pick-click');
        },
        handleMouseMove: function handleMouseMove(cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            var newDate = cell.date;
            this.$emit('on-change-range', newDate);
        }
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'ivu-date-picker-cells';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        disabledHours: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        disabledMinutes: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        disabledSeconds: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        hideDisabledOptions: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(127)(false);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(42);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(4);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(129);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(12) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
var document = __webpack_require__(10).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _icon = __webpack_require__(69);

var _icon2 = _interopRequireDefault(_icon);

var _assist = __webpack_require__(3);

var _link = __webpack_require__(147);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-btn';

exports.default = {
    name: 'Button',
    mixins: [_link2.default],
    components: { Icon: _icon2.default },
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
            },

            default: 'default'
        },
        shape: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['circle', 'circle-outline']);
            }
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['button', 'submit', 'reset']);
            }
        },
        icon: {
            type: String,
            default: ''
        },
        customIcon: {
            type: String,
            default: ''
        },
        long: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showSlot: true
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, prefixCls + '-' + String(this.type), (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-long', this.long), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.shape), !!this.shape), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), this.size !== 'default'), (0, _defineProperty3.default)(_ref, prefixCls + '-loading', this.loading != null && this.loading), (0, _defineProperty3.default)(_ref, prefixCls + '-icon-only', !this.showSlot && (!!this.icon || !!this.customIcon || this.loading)), (0, _defineProperty3.default)(_ref, prefixCls + '-ghost', this.ghost), _ref)];
        }
    },
    methods: {
        handleClickLink: function handleClickLink(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.$emit('click', event);

            this.handleCheckClick(event, new_window);
        }
    },
    mounted: function mounted() {
        this.showSlot = this.$slots.default !== undefined;
    }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(50);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-icon';

exports.default = {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: [Number, String],
        color: String,
        custom: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.type), this.type !== ''), (0, _defineProperty3.default)(_ref, '' + String(this.custom), this.custom !== ''), _ref)];
        },
        styles: function styles() {
            var style = {};

            if (this.size) {
                style['font-size'] = String(this.size) + 'px';
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(72);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(142);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(74);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(143);
var enumBugKeys = __webpack_require__(45);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(144).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(43)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(76);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(41);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(61);
var hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-btn-group';

exports.default = {
    name: 'ButtonGroup',
    props: {
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        shape: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['circle', 'circle-outline']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.shape), !!this.shape), (0, _defineProperty3.default)(_ref, prefixCls + '-vertical', this.vertical), _ref)];
        }
    }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _tinycolor = __webpack_require__(80);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _vClickOutsideX = __webpack_require__(35);

var _transferDom = __webpack_require__(36);

var _transferDom2 = _interopRequireDefault(_transferDom);

var _dropdown = __webpack_require__(37);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _recommendColors = __webpack_require__(168);

var _recommendColors2 = _interopRequireDefault(_recommendColors);

var _saturation = __webpack_require__(172);

var _saturation2 = _interopRequireDefault(_saturation);

var _hue = __webpack_require__(174);

var _hue2 = _interopRequireDefault(_hue);

var _alpha = __webpack_require__(176);

var _alpha2 = _interopRequireDefault(_alpha);

var _input = __webpack_require__(57);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _assist = __webpack_require__(3);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _prefixMixin = __webpack_require__(27);

var _prefixMixin2 = _interopRequireDefault(_prefixMixin);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ColorPicker',

    components: { Drop: _dropdown2.default, RecommendColors: _recommendColors2.default, Saturation: _saturation2.default, Hue: _hue2.default, Alpha: _alpha2.default, iInput: _input2.default, iButton: _button2.default },

    directives: { clickOutside: _vClickOutsideX.directive, TransferDom: _transferDom2.default },

    mixins: [_emitter2.default, _locale2.default, _prefixMixin2.default],

    props: {
        value: {
            type: String,
            default: undefined
        },
        hue: {
            type: Boolean,
            default: true
        },
        alpha: {
            type: Boolean,
            default: false
        },
        recommend: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['hsl', 'hsv', 'hex', 'rgb']);
            },

            default: undefined
        },
        colors: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        hideDropDown: {
            type: Boolean,
            default: false
        },
        placement: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },

            default: 'bottom'
        },
        transfer: {
            type: Boolean,
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
            }
        },
        name: {
            type: String,
            default: undefined
        },
        editable: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            val: (0, _utils.changeColor)(this.value),
            currentValue: this.value,
            dragging: false,
            visible: false,
            recommendedColor: ['#2d8cf0', '#19be6b', '#ff9900', '#ed4014', '#00b5ff', '#19c919', '#f9e31c', '#ea1a1a', '#9b1dea', '#00c2b1', '#ac7a33', '#1d35ea', '#8bc34a', '#f16b62', '#ea4ca3', '#0d94aa', '#febd79', '#5d4037', '#00bcd4', '#f06292', '#cddc39', '#607d8b', '#000000', '#ffffff']
        };
    },


    computed: {
        arrowClasses: function arrowClasses() {
            return [this.iconPrefixCls, String(this.iconPrefixCls) + '-ios-arrow-down', String(this.inputPrefixCls) + '-icon', String(this.inputPrefixCls) + '-icon-normal'];
        },
        transition: function transition() {
            return (0, _assist.oneOf)(this.placement, ['bottom-start', 'bottom', 'bottom-end']) ? 'slide-up' : 'fade';
        },

        saturationColors: {
            get: function get() {
                return this.val;
            },
            set: function set(newVal) {
                this.val = newVal;
                this.$emit('on-active-change', this.formatColor);
            }
        },
        classes: function classes() {
            return ['' + String(this.prefixCls), (0, _defineProperty3.default)({}, String(this.prefixCls) + '-transfer', this.transfer)];
        },
        wrapClasses: function wrapClasses() {
            return [String(this.prefixCls) + '-rel', String(this.prefixCls) + '-' + String(this.size), String(this.inputPrefixCls) + '-wrapper', String(this.inputPrefixCls) + '-wrapper-' + String(this.size), (0, _defineProperty3.default)({}, String(this.prefixCls) + '-disabled', this.disabled)];
        },
        inputClasses: function inputClasses() {
            var _ref3;

            return [String(this.prefixCls) + '-input', '' + String(this.inputPrefixCls), String(this.inputPrefixCls) + '-' + String(this.size), (_ref3 = {}, (0, _defineProperty3.default)(_ref3, String(this.prefixCls) + '-focused', this.visible), (0, _defineProperty3.default)(_ref3, String(this.prefixCls) + '-disabled', this.disabled), _ref3)];
        },
        dropClasses: function dropClasses() {
            var _ref4;

            return [String(this.transferPrefixCls) + '-no-max-height', (_ref4 = {}, (0, _defineProperty3.default)(_ref4, String(this.prefixCls) + '-transfer', this.transfer), (0, _defineProperty3.default)(_ref4, String(this.prefixCls) + '-hide-drop', this.hideDropDown), _ref4)];
        },
        displayedColorStyle: function displayedColorStyle() {
            return { backgroundColor: (0, _utils.toRGBAString)(this.visible ? this.saturationColors.rgba : (0, _tinycolor2.default)(this.value).toRgb()) };
        },
        formatColor: function formatColor() {
            var format = this.format,
                saturationColors = this.saturationColors;


            if (format) {
                if (format === 'hsl') {
                    return (0, _tinycolor2.default)(saturationColors.hsl).toHslString();
                }

                if (format === 'hsv') {
                    return (0, _tinycolor2.default)(saturationColors.hsv).toHsvString();
                }

                if (format === 'hex') {
                    return saturationColors.hex;
                }

                if (format === 'rgb') {
                    return (0, _utils.toRGBAString)(saturationColors.rgba);
                }
            } else if (this.alpha) {
                return (0, _utils.toRGBAString)(saturationColors.rgba);
            }

            return saturationColors.hex;
        },
        confirmColorClasses: function confirmColorClasses() {
            return [String(this.prefixCls) + '-confirm-color', (0, _defineProperty3.default)({}, String(this.prefixCls) + '-confirm-color-editable', this.editable)];
        }
    },

    watch: {
        value: function value(newVal) {
            this.val = (0, _utils.changeColor)(newVal);
        },
        visible: function visible(val) {
            this.val = (0, _utils.changeColor)(this.value);
            this.$refs.drop[val ? 'update' : 'destroy']();
            this.$emit('on-open-change', Boolean(val));
        }
    },

    mounted: function mounted() {
        this.$on('on-escape-keydown', this.closer);
        this.$on('on-dragging', this.setDragging);
    },


    methods: {
        setDragging: function setDragging(value) {
            this.dragging = value;
        },
        handleClose: function handleClose(event) {
            if (this.visible) {
                if (this.dragging || event.type === 'mousedown') {
                    event.preventDefault();
                    return;
                }

                if (this.transfer) {
                    var $el = this.$refs.drop.$el;

                    if ($el === event.target || $el.contains(event.target)) {
                        return;
                    }
                }

                this.closer(event);
                return;
            }

            this.visible = false;
        },
        toggleVisible: function toggleVisible() {
            if (this.disabled) {
                return;
            }

            this.visible = !this.visible;
            this.$refs.input.focus();
        },
        childChange: function childChange(data) {
            this.colorChange(data);
        },
        colorChange: function colorChange(data, oldHue) {
            this.oldHue = this.saturationColors.hsl.h;
            this.saturationColors = (0, _utils.changeColor)(data, oldHue || this.oldHue);
        },
        closer: function closer(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            this.visible = false;
            this.$refs.input.focus();
        },
        handleButtons: function handleButtons(event, value) {
            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('on-change', value);
            this.dispatch('FormItem', 'on-form-change', value);
            this.closer(event);
        },
        handleSuccess: function handleSuccess(event) {
            this.handleButtons(event, this.formatColor);
            this.$emit('on-pick-success');
        },
        handleClear: function handleClear(event) {
            this.handleButtons(event, '');
            this.$emit('on-pick-clear');
        },
        handleSelectColor: function handleSelectColor(color) {
            this.val = (0, _utils.changeColor)(color);
            this.$emit('on-active-change', this.formatColor);
        },
        handleEditColor: function handleEditColor(event) {
            var value = event.target.value;
            this.handleSelectColor(value);
        },
        handleFirstTab: function handleFirstTab(event) {
            if (event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                this.$refs.ok.$el.focus();
            }
        },
        handleLastTab: function handleLastTab(event) {
            if (!event.shiftKey) {
                event.preventDefault();
                event.stopPropagation();
                this.$refs.saturation.$el.focus();
            }
        },
        onTab: function onTab(event) {
            if (this.visible) {
                event.preventDefault();
            }
        },
        onEscape: function onEscape(event) {
            if (this.visible) {
                this.closer(event);
            }
        },
        onArrow: function onArrow(event) {
            if (!this.visible) {
                event.preventDefault();
                event.stopPropagation();
                this.visible = true;
            }
        }
    }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);


/***/ }),
/* 81 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _assist = __webpack_require__(3);

var _transferQueue = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

var Popper = isServer ? function () {} : __webpack_require__(166);exports.default = {
    name: 'Drop',
    props: {
        placement: {
            type: String,
            default: 'bottom-start'
        },
        className: {
            type: String
        },
        transfer: {
            type: Boolean
        }
    },
    data: function data() {
        return {
            popper: null,
            width: '',
            popperStatus: false,
            tIndex: this.handleGetIndex()
        };
    },

    computed: {
        styles: function styles() {
            var style = {};
            if (this.width) style.minWidth = String(this.width) + 'px';

            if (this.transfer) style['z-index'] = 1060 + this.tIndex;

            return style;
        }
    },
    methods: {
        update: function update() {
            var _this = this;

            if (isServer) return;
            if (this.popper) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    this.popper.update();
                    this.popperStatus = true;
                }.bind(this));
            } else {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                        placement: this.placement,
                        modifiers: {
                            computeStyle: {
                                gpuAcceleration: false
                            },
                            preventOverflow: {
                                boundariesElement: 'window'
                            }
                        },
                        onCreate: function onCreate() {
                            (0, _newArrowCheck3.default)(this, _this);

                            this.resetTransformOrigin();
                            this.$nextTick(this.popper.update());
                        }.bind(this),
                        onUpdate: function onUpdate() {
                            (0, _newArrowCheck3.default)(this, _this);

                            this.resetTransformOrigin();
                        }.bind(this)
                    });
                }.bind(this));
            }

            if (this.$parent.$options.name === 'iSelect') {
                this.width = parseInt((0, _assist.getStyle)(this.$parent.$el, 'width'));
            }
            this.tIndex = this.handleGetIndex();
        },
        destroy: function destroy() {
            var _this2 = this;

            if (this.popper) {
                setTimeout(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    if (this.popper && !this.popperStatus) {
                        this.popper.destroy();
                        this.popper = null;
                    }
                    this.popperStatus = false;
                }.bind(this), 300);
            }
        },
        resetTransformOrigin: function resetTransformOrigin() {
            if (!this.popper) return;

            var x_placement = this.popper.popper.getAttribute('x-placement');
            var placementStart = x_placement.split('-')[0];
            var placementEnd = x_placement.split('-')[1];
            var leftOrRight = x_placement === 'left' || x_placement === 'right';
            if (!leftOrRight) {
                this.popper.popper.style.transformOrigin = placementStart === 'bottom' || placementStart !== 'top' && placementEnd === 'start' ? 'center top' : 'center bottom';
            }
        },
        handleGetIndex: function handleGetIndex() {
            (0, _transferQueue.transferIncrease)();
            return _transferQueue.transferIndex;
        }
    },
    created: function created() {
        this.$on('on-update-popper', this.update);
        this.$on('on-destroy-popper', this.destroy);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.popper) {
            this.popper.destroy();
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var transferIndex = 0;

function transferIncrease() {
    exports.transferIndex = transferIndex += 1;
}

exports.transferIndex = transferIndex;
exports.transferIncrease = transferIncrease;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _handleEscapeMixin = __webpack_require__(85);

var _handleEscapeMixin2 = _interopRequireDefault(_handleEscapeMixin);

var _prefixMixin = __webpack_require__(27);

var _prefixMixin2 = _interopRequireDefault(_prefixMixin);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'RecommendedColors',

    mixins: [_emitter2.default, _handleEscapeMixin2.default, _prefixMixin2.default],

    props: {
        list: {
            type: Array,
            default: undefined
        }
    },

    data: function data() {
        var columns = 12;
        var rows = Math.ceil(this.list.length / columns);
        var normalStep = 1;

        return {
            left: -normalStep,
            right: normalStep,
            up: -normalStep,
            down: normalStep,
            powerKey: 'shiftKey',
            grid: { x: 1, y: 1 },
            rows: rows,
            columns: columns
        };
    },


    computed: {
        hideClass: function hideClass() {
            return String(this.prefixCls) + '-hide';
        },
        linearIndex: function linearIndex() {
            return this.getLinearIndex(this.grid);
        },
        currentCircle: function currentCircle() {
            return this.$refs['color-circle-' + String(this.linearIndex)][0];
        }
    },

    methods: {
        getLinearIndex: function getLinearIndex(grid) {
            return this.columns * (grid.y - 1) + grid.x - 1;
        },
        getMaxLimit: function getMaxLimit(axis) {
            return axis === 'x' ? this.columns : this.rows;
        },
        handleArrow: function handleArrow(e, axis, direction) {
            e.preventDefault();
            e.stopPropagation();

            this.blurColor();

            var grid = (0, _extends3.default)({}, this.grid);

            if (e[this.powerKey]) {
                if (direction < 0) {
                    grid[axis] = 1;
                } else {
                    grid[axis] = this.getMaxLimit(axis);
                }
            } else {
                grid[axis] += direction;
            }

            var index = this.getLinearIndex(grid);

            if (index >= 0 && index < this.list.length) {
                this.grid[axis] = (0, _utils.clamp)(grid[axis], 1, this.getMaxLimit(axis));
            }

            this.focusColor();
        },
        blurColor: function blurColor() {
            this.currentCircle.classList.add(this.hideClass);
        },
        focusColor: function focusColor() {
            this.currentCircle.classList.remove(this.hideClass);
        },
        handleEnter: function handleEnter(e) {
            this.handleClick(e, this.currentCircle);
        },
        handleClick: function handleClick(e, circle) {
            e.preventDefault();
            e.stopPropagation();

            this.$refs.reference.focus();

            var target = circle || e.target;
            var colorId = target.dataset.colorId || target.parentElement.dataset.colorId;

            if (colorId) {
                this.blurColor();
                var id = Number(colorId) + 1;
                this.grid.x = id % this.columns || this.columns;
                this.grid.y = Math.ceil(id / this.columns);
                this.focusColor();
                this.$emit('picker-color', this.list[colorId]);
                this.$emit('change', { hex: this.list[colorId], source: 'hex' });
            }
        },
        lineBreak: function lineBreak(list, index) {
            if (!index) {
                return false;
            }

            var nextIndex = index + 1;

            return nextIndex < list.length && nextIndex % this.columns === 0;
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        handleEscape: function handleEscape(e) {
            this.dispatch('ColorPicker', 'on-escape-keydown', e);
        }
    }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hsaMixin = __webpack_require__(56);

var _hsaMixin2 = _interopRequireDefault(_hsaMixin);

var _prefixMixin = __webpack_require__(27);

var _prefixMixin2 = _interopRequireDefault(_prefixMixin);

var _utils = __webpack_require__(23);

var _dom = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Saturation',

    mixins: [_hsaMixin2.default, _prefixMixin2.default],

    data: function data() {
        var normalStep = 0.01;

        return {
            left: -normalStep,
            right: normalStep,
            up: normalStep,
            down: -normalStep,
            multiplier: 10,
            powerKey: 'shiftKey'
        };
    },


    computed: {
        bgColorStyle: function bgColorStyle() {
            return { background: 'hsl(' + String(this.value.hsv.h) + ', 100%, 50%)' };
        },
        pointerStyle: function pointerStyle() {
            return { top: -(this.value.hsv.v * 100) + 1 + 100 + '%', left: this.value.hsv.s * 100 + '%' };
        }
    },

    methods: {
        change: function change(h, s, v, a) {
            this.$emit('change', { h: h, s: s, v: v, a: a, source: 'hsva' });
        },
        handleSlide: function handleSlide(e, direction, key) {
            e.preventDefault();
            e.stopPropagation();

            var isPowerKey = e[this.powerKey];
            var increment = isPowerKey ? direction * this.multiplier : direction;
            var _value$hsv = this.value.hsv,
                h = _value$hsv.h,
                s = _value$hsv.s,
                v = _value$hsv.v,
                a = _value$hsv.a;

            var saturation = (0, _utils.clamp)(s + (0, _utils.getIncrement)(key, ['left', 'right'], increment), 0, 1);
            var bright = (0, _utils.clamp)(v + (0, _utils.getIncrement)(key, ['up', 'down'], increment), 0, 1);

            this.change(h, saturation, bright, a);
        },
        handleChange: function handleChange(e) {
            e.preventDefault();
            e.stopPropagation();

            var _$refs$container = this.$refs.container,
                clientWidth = _$refs$container.clientWidth,
                clientHeight = _$refs$container.clientHeight;

            var left = (0, _utils.clamp)(this.getLeft(e), 0, clientWidth);
            var top = (0, _utils.clamp)(this.getTop(e), 0, clientHeight);
            var saturation = left / clientWidth;
            var bright = (0, _utils.clamp)(1 - top / clientHeight, 0, 1);

            this.change(this.value.hsv.h, saturation, bright, this.value.hsv.a);
        },
        handleMouseDown: function handleMouseDown(e) {
            _hsaMixin2.default.methods.handleMouseDown.call(this, e);

            (0, _dom.on)(window, 'mouseup', this.handleChange);
        },
        unbindEventListeners: function unbindEventListeners(e) {
            _hsaMixin2.default.methods.unbindEventListeners.call(this, e);

            (0, _dom.off)(window, 'mouseup', this.handleChange);
        }
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.off = exports.on = undefined;

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

var on = exports.on = function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
}();

var off = exports.off = function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
}();

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hsaMixin = __webpack_require__(56);

var _hsaMixin2 = _interopRequireDefault(_hsaMixin);

var _prefixMixin = __webpack_require__(27);

var _prefixMixin2 = _interopRequireDefault(_prefixMixin);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Hue',

    mixins: [_hsaMixin2.default, _prefixMixin2.default],

    data: function data() {
        var normalStep = 1 / 360 * 25;
        var jumpStep = 20 * normalStep;

        return {
            left: -normalStep,
            right: normalStep,
            up: jumpStep,
            down: -jumpStep,
            powerKey: 'shiftKey',
            percent: (0, _utils.clamp)(this.value.hsl.h * 100 / 360, 0, 100)
        };
    },


    watch: {
        value: function value() {
            this.percent = (0, _utils.clamp)(this.value.hsl.h * 100 / 360, 0, 100);
        }
    },

    methods: {
        change: function change(percent) {
            this.percent = (0, _utils.clamp)(percent, 0, 100);

            var _value$hsl = this.value.hsl,
                h = _value$hsl.h,
                s = _value$hsl.s,
                l = _value$hsl.l,
                a = _value$hsl.a;

            var newHue = (0, _utils.clamp)(percent / 100 * 360, 0, 360);

            if (h !== newHue) {
                this.$emit('change', { h: newHue, s: s, l: l, a: a, source: 'hsl' });
            }
        },
        handleSlide: function handleSlide(e, direction) {
            e.preventDefault();
            e.stopPropagation();

            if (e[this.powerKey]) {
                this.change(direction < 0 ? 0 : 100);
                return;
            }

            this.change(this.percent + direction);
        },
        handleChange: function handleChange(e) {
            e.preventDefault();
            e.stopPropagation();

            var left = this.getLeft(e);

            if (left < 0) {
                this.change(0);
                return;
            }

            var clientWidth = this.$refs.container.clientWidth;


            if (left > clientWidth) {
                this.change(100);
                return;
            }

            this.change(left * 100 / clientWidth);
        }
    }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hsaMixin = __webpack_require__(56);

var _hsaMixin2 = _interopRequireDefault(_hsaMixin);

var _prefixMixin = __webpack_require__(27);

var _prefixMixin2 = _interopRequireDefault(_prefixMixin);

var _utils = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Alpha',

    mixins: [_hsaMixin2.default, _prefixMixin2.default],

    data: function data() {
        var normalStep = 1;
        var jumpStep = 10;

        return {
            left: -normalStep,
            right: normalStep,
            up: jumpStep,
            down: -jumpStep,
            powerKey: 'shiftKey'
        };
    },


    computed: {
        gradientStyle: function gradientStyle() {
            var _value$rgba = this.value.rgba,
                r = _value$rgba.r,
                g = _value$rgba.g,
                b = _value$rgba.b;

            var start = (0, _utils.toRGBAString)({ r: r, g: g, b: b, a: 0 });
            var finish = (0, _utils.toRGBAString)({ r: r, g: g, b: b, a: 1 });

            return { background: 'linear-gradient(to right, ' + String(start) + ' 0%, ' + String(finish) + ' 100%)' };
        }
    },

    methods: {
        change: function change(newAlpha) {
            var _value$hsl = this.value.hsl,
                h = _value$hsl.h,
                s = _value$hsl.s,
                l = _value$hsl.l;
            var a = this.value.a;


            if (a !== newAlpha) {
                this.$emit('change', { h: h, s: s, l: l, a: newAlpha, source: 'rgba' });
            }
        },
        handleSlide: function handleSlide(e, direction) {
            e.preventDefault();
            e.stopPropagation();

            this.change((0, _utils.clamp)(e[this.powerKey] ? direction : Math.round(this.value.hsl.a * 100 + direction) / 100, 0, 1));
        },
        handleChange: function handleChange(e) {
            e.preventDefault();
            e.stopPropagation();

            var left = this.getLeft(e);

            if (left < 0) {
                this.change(0);
                return;
            }

            var clientWidth = this.$refs.container.clientWidth;


            if (left > clientWidth) {
                this.change(1);
                return;
            }

            this.change(Math.round(left * 100 / clientWidth) / 100);
        }
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _isNan = __webpack_require__(178);

var _isNan2 = _interopRequireDefault(_isNan);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(3);

var _calcTextareaHeight = __webpack_require__(181);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-input';

exports.default = {
    name: 'Input',
    mixins: [_emitter2.default],
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['text', 'textarea', 'password', 'url', 'email', 'date']);
            },

            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: String,
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        number: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        spellcheck: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['on', 'off']);
            },

            default: 'off'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        elementId: {
            type: String
        },
        wrap: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['hard', 'soft']);
            },

            default: 'soft'
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        search: {
            type: Boolean,
            default: false
        },
        enterButton: {
            type: [Boolean, String],
            default: false
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            prefixCls: prefixCls,
            prepend: true,
            append: true,
            slotReady: false,
            textareaStyles: {},
            showPrefix: false,
            showSuffix: false
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-type', this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-group', this.prepend || this.append || this.search && this.enterButton), (0, _defineProperty3.default)(_ref, prefixCls + '-group-' + String(this.size), (this.prepend || this.append || this.search && this.enterButton) && !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-group-with-prepend', this.prepend), (0, _defineProperty3.default)(_ref, prefixCls + '-group-with-append', this.append || this.search && this.enterButton), (0, _defineProperty3.default)(_ref, prefixCls + '-hide-icon', this.append), (0, _defineProperty3.default)(_ref, prefixCls + '-with-search', this.search && this.enterButton), _ref)];
        },
        inputClasses: function inputClasses() {
            var _ref2;

            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref2, prefixCls + '-with-prefix', this.showPrefix), (0, _defineProperty3.default)(_ref2, prefixCls + '-with-suffix', this.showSuffix || this.search && this.enterButton === false), _ref2)];
        },
        textareaClasses: function textareaClasses() {
            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.disabled)];
        }
    },
    methods: {
        handleEnter: function handleEnter(event) {
            this.$emit('on-enter', event);
            if (this.search) this.$emit('on-search', this.currentValue);
        },
        handleKeydown: function handleKeydown(event) {
            this.$emit('on-keydown', event);
        },
        handleKeypress: function handleKeypress(event) {
            this.$emit('on-keypress', event);
        },
        handleKeyup: function handleKeyup(event) {
            this.$emit('on-keyup', event);
        },
        handleIconClick: function handleIconClick(event) {
            this.$emit('on-click', event);
        },
        handleFocus: function handleFocus(event) {
            this.$emit('on-focus', event);
        },
        handleBlur: function handleBlur(event) {
            this.$emit('on-blur', event);
            if (!(0, _assist.findComponentUpward)(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                this.dispatch('FormItem', 'on-form-blur', this.currentValue);
            }
        },
        handleInput: function handleInput(event) {
            var value = event.target.value;
            if (this.number && value !== '') value = (0, _isNan2.default)(Number(value)) ? value : Number(value);
            this.$emit('input', value);
            this.setCurrentValue(value);
            this.$emit('on-change', event);
        },
        handleChange: function handleChange(event) {
            this.$emit('on-input-change', event);
        },
        setCurrentValue: function setCurrentValue(value) {
            var _this = this;

            if (value === this.currentValue) return;
            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this);

                this.resizeTextarea();
            }.bind(this));
            this.currentValue = value;
            if (!(0, _assist.findComponentUpward)(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                this.dispatch('FormItem', 'on-form-change', value);
            }
        },
        resizeTextarea: function resizeTextarea() {
            var autosize = this.autosize;
            if (!autosize || this.type !== 'textarea') {
                return false;
            }

            var minRows = autosize.minRows;
            var maxRows = autosize.maxRows;

            this.textareaStyles = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
        },
        focus: function focus() {
            if (this.type === 'textarea') {
                this.$refs.textarea.focus();
            } else {
                this.$refs.input.focus();
            }
        },
        blur: function blur() {
            if (this.type === 'textarea') {
                this.$refs.textarea.blur();
            } else {
                this.$refs.input.blur();
            }
        },
        handleClear: function handleClear() {
            var e = { target: { value: '' } };
            this.$emit('input', '');
            this.setCurrentValue('');
            this.$emit('on-change', e);
        },
        handleSearch: function handleSearch() {
            if (this.disabled) return false;
            this.$refs.input.focus();
            this.$emit('on-search', this.currentValue);
        }
    },
    watch: {
        value: function value(val) {
            this.setCurrentValue(val);
        }
    },
    mounted: function mounted() {
        if (this.type !== 'textarea') {
            this.prepend = this.$slots.prepend !== undefined;
            this.append = this.$slots.append !== undefined;
            this.showPrefix = this.prefix !== '' || this.$slots.prefix !== undefined;
            this.showSuffix = this.suffix !== '' || this.$slots.suffix !== undefined;
        } else {
            this.prepend = false;
            this.append = false;
        }
        this.slotReady = true;
        this.resizeTextarea();
    }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.i18n = exports.use = exports.t = undefined;

var _getPrototypeOf = __webpack_require__(189);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _zhCN = __webpack_require__(192);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _deepmerge = __webpack_require__(194);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _format = __webpack_require__(195);

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = (0, _format2.default)(_vue2.default);
var lang = _zhCN2.default;
var merged = false;
var i18nHandler = function i18nHandler() {
    var vuei18n = (0, _getPrototypeOf2.default)(this || _vue2.default).$t;
    if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
        if (!merged) {
            merged = true;
            _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
        }
        return vuei18n.apply(this, arguments);
    }
};

var t = exports.t = function t(path, options) {
    var value = i18nHandler.apply(this, arguments);
    if (value !== null && value !== undefined) return value;

    var array = path.split('.');
    var current = lang;

    for (var i = 0, j = array.length; i < j; i++) {
        var property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    return '';
};

var use = exports.use = function use(l) {
    lang = l || lang;
};

var i18n = exports.i18n = function i18n(fn) {
    i18nHandler = fn || i18nHandler;
};

exports.default = { use: use, t: t, i18n: i18n };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(34);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(94);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _input = __webpack_require__(57);

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__(37);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _vClickOutsideX = __webpack_require__(35);

var _transferDom = __webpack_require__(36);

var _transferDom2 = _interopRequireDefault(_transferDom);

var _assist = __webpack_require__(3);

var _util = __webpack_require__(9);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-date-picker';
var pickerPrefixCls = 'ivu-picker';

var isEmptyArray = function (val) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return val.reduce(function (isEmpty, str) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return isEmpty && !str || typeof str === 'string' && str.trim() === '';
    }.bind(undefined), true);
}.bind(undefined);
var keyValueMapper = {
    40: 'up',
    39: 'right',
    38: 'down',
    37: 'left'
};

var mapPossibleValues = function (key, horizontal, vertical) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (key === 'left') return horizontal * -1;
    if (key === 'right') return horizontal * 1;
    if (key === 'up') return vertical * 1;
    if (key === 'down') return vertical * -1;
}.bind(undefined);

var pulseElement = function (el) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var pulseClass = 'ivu-date-picker-btn-pulse';
    el.classList.add(pulseClass);
    setTimeout(function () {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return el.classList.remove(pulseClass);
    }.bind(undefined), 200);
}.bind(undefined);

var extractTime = function (date) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (!date) return [0, 0, 0];
    return [date.getHours(), date.getMinutes(), date.getSeconds()];
}.bind(undefined);

exports.default = {
    mixins: [_emitter2.default],
    components: { iInput: _input2.default, Drop: _dropdown2.default },
    directives: { clickOutside: _vClickOutsideX.directive, TransferDom: _transferDom2.default },
    props: {
        format: {
            type: String
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        editable: {
            type: Boolean,
            default: true
        },
        clearable: {
            type: Boolean,
            default: true
        },
        confirm: {
            type: Boolean,
            default: false
        },
        open: {
            type: Boolean,
            default: null
        },
        multiple: {
            type: Boolean,
            default: false
        },
        timePickerOptions: {
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined),
            type: Object
        },
        splitPanels: {
            type: Boolean,
            default: false
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        placement: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },

            default: 'bottom-start'
        },
        transfer: {
            type: Boolean,
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
            }
        },
        name: {
            type: String
        },
        elementId: {
            type: String
        },
        steps: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        value: {
            type: [Date, String, Array]
        },
        options: {
            type: Object,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined)
        }
    },
    data: function data() {
        var isRange = this.type.includes('range');
        var emptyArray = isRange ? [null, null] : [null];
        var initialValue = isEmptyArray((isRange ? this.value : [this.value]) || []) ? emptyArray : this.parseDate(this.value);
        var focusedTime = initialValue.map(extractTime);

        return {
            prefixCls: prefixCls,
            showClose: false,
            visible: false,
            internalValue: initialValue,
            disableClickOutSide: false,
            disableCloseUnderTransfer: false,
            selectionMode: this.onSelectionModeChange(this.type),
            forceInputRerender: 1,
            isFocused: false,
            focusedDate: initialValue[0] || this.startDate || new Date(),
            focusedTime: {
                column: 0,
                picker: 0,
                time: focusedTime,
                active: false
            },
            internalFocus: false
        };
    },

    computed: {
        wrapperClasses: function wrapperClasses() {
            return [prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-focused', this.isFocused)];
        },
        publicVModelValue: function publicVModelValue() {
            var _this = this;

            if (this.multiple) {
                return this.internalValue.slice();
            } else {
                var isRange = this.type.includes('range');
                var val = this.internalValue.map(function (date) {
                    (0, _newArrowCheck3.default)(this, _this);
                    return date instanceof Date ? new Date(date) : date || '';
                }.bind(this));

                if (this.type.match(/^time/)) val = val.map(this.formatDate);
                return isRange || this.multiple ? val : val[0];
            }
        },
        publicStringValue: function publicStringValue() {
            var formatDate = this.formatDate,
                publicVModelValue = this.publicVModelValue,
                type = this.type;

            if (type.match(/^time/)) return publicVModelValue;
            if (this.multiple) return formatDate(publicVModelValue);
            return Array.isArray(publicVModelValue) ? publicVModelValue.map(formatDate) : formatDate(publicVModelValue);
        },
        opened: function opened() {
            return this.open === null ? this.visible : this.open;
        },
        iconType: function iconType() {
            var icon = 'ios-calendar-outline';
            if (this.type === 'time' || this.type === 'timerange') icon = 'ios-time-outline';
            if (this.showClose) icon = 'ios-close-circle';
            return icon;
        },
        transition: function transition() {
            var bottomPlaced = this.placement.match(/^bottom/);
            return bottomPlaced ? 'slide-up' : 'slide-down';
        },
        visualValue: function visualValue() {
            return this.formatDate(this.internalValue);
        },
        isConfirm: function isConfirm() {
            return this.confirm || this.type === 'datetime' || this.type === 'datetimerange' || this.multiple;
        }
    },
    methods: {
        onSelectionModeChange: function onSelectionModeChange(type) {
            if (type.match(/^date/)) type = 'date';
            this.selectionMode = (0, _assist.oneOf)(type, ['year', 'month', 'date', 'time']) && type;
            return this.selectionMode;
        },
        handleTransferClick: function handleTransferClick() {
            if (this.transfer) this.disableCloseUnderTransfer = true;
        },
        handleClose: function handleClose(e) {
            if (this.disableCloseUnderTransfer) {
                this.disableCloseUnderTransfer = false;
                return false;
            }

            if (e && e.type === 'mousedown' && this.visible) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            if (this.visible) {
                var pickerPanel = this.$refs.pickerPanel && this.$refs.pickerPanel.$el;
                if (e && pickerPanel && pickerPanel.contains(e.target)) return;

                this.visible = false;
                e && e.preventDefault();
                e && e.stopPropagation();
                return;
            }

            this.isFocused = false;
            this.disableClickOutSide = false;
        },
        handleFocus: function handleFocus(e) {
            if (this.readonly) return;
            this.isFocused = true;
            if (e && e.type === 'focus') return;
            if (!this.disabled) {
                this.visible = true;
            }
        },
        handleBlur: function handleBlur(e) {
            if (this.internalFocus) {
                this.internalFocus = false;
                return;
            }
            if (this.visible) {
                e.preventDefault();
                return;
            }

            this.isFocused = false;
            this.onSelectionModeChange(this.type);
            this.internalValue = this.internalValue.slice();
            this.reset();
            this.$refs.pickerPanel.onToggleVisibility(false);
        },
        handleKeydown: function handleKeydown(e) {
            var _this2 = this;

            var keyCode = e.keyCode;

            if (keyCode === 9) {
                if (this.visible) {
                    e.stopPropagation();
                    e.preventDefault();

                    if (this.isConfirm) {
                        var selector = '.' + pickerPrefixCls + '-confirm > *';
                        var tabbable = this.$refs.drop.$el.querySelectorAll(selector);
                        this.internalFocus = true;
                        var element = [].concat((0, _toConsumableArray3.default)(tabbable))[e.shiftKey ? 'pop' : 'shift']();
                        element.focus();
                    } else {
                        this.handleClose();
                    }
                } else {
                    this.focused = false;
                }
            }

            var arrows = [37, 38, 39, 40];
            if (!this.visible && arrows.includes(keyCode)) {
                this.visible = true;
                return;
            }

            if (keyCode === 27) {
                if (this.visible) {
                    e.stopPropagation();
                    this.handleClose();
                }
            }

            if (keyCode === 13) {
                var timePickers = (0, _assist.findComponentsDownward)(this, 'TimeSpinner');
                if (timePickers.length > 0) {
                    var columnsPerPicker = timePickers[0].showSeconds ? 3 : 2;
                    var pickerIndex = Math.floor(this.focusedTime.column / columnsPerPicker);
                    var value = this.focusedTime.time[pickerIndex];

                    timePickers[pickerIndex].chooseValue(value);
                    return;
                }

                if (this.type.match(/range/)) {
                    this.$refs.pickerPanel.handleRangePick(this.focusedDate, 'date');
                } else {
                    var panels = (0, _assist.findComponentsDownward)(this, 'PanelTable');
                    var compareDate = function (d) {
                        (0, _newArrowCheck3.default)(this, _this2);

                        var sliceIndex = ['year', 'month', 'date'].indexOf(this.type) + 1;
                        return [d.getFullYear(), d.getMonth(), d.getDate()].slice(0, sliceIndex).join('-');
                    }.bind(this);
                    var dateIsValid = panels.find(function (_ref2) {
                        var cells = _ref2.cells;
                        (0, _newArrowCheck3.default)(this, _this2);

                        return cells.find(function (_ref3) {
                            var date = _ref3.date,
                                disabled = _ref3.disabled;
                            (0, _newArrowCheck3.default)(this, _this2);
                            return compareDate(date) === compareDate(this.focusedDate) && !disabled;
                        }.bind(this));
                    }.bind(this));
                    if (dateIsValid) this.onPick(this.focusedDate, false, 'date');
                }
            }

            if (!arrows.includes(keyCode)) return;
            if (this.focusedTime.active) e.preventDefault();
            this.navigateDatePanel(keyValueMapper[keyCode], e.shiftKey);
        },
        reset: function reset() {
            this.$refs.pickerPanel.reset && this.$refs.pickerPanel.reset();
        },
        navigateTimePanel: function navigateTimePanel(direction) {
            var _this3 = this;

            this.focusedTime.active = true;
            var horizontal = direction.match(/left|right/);
            var vertical = direction.match(/up|down/);
            var timePickers = (0, _assist.findComponentsDownward)(this, 'TimeSpinner');

            var maxNrOfColumns = (timePickers[0].showSeconds ? 3 : 2) * timePickers.length;
            var column = function (currentColumn) {
                (0, _newArrowCheck3.default)(this, _this3);

                var incremented = currentColumn + (horizontal ? direction === 'left' ? -1 : 1 : 0);
                return (incremented + maxNrOfColumns) % maxNrOfColumns;
            }.bind(this)(this.focusedTime.column);

            var columnsPerPicker = maxNrOfColumns / timePickers.length;
            var pickerIndex = Math.floor(column / columnsPerPicker);
            var col = column % columnsPerPicker;

            if (horizontal) {
                var time = this.internalValue.map(extractTime);

                this.focusedTime = (0, _extends3.default)({}, this.focusedTime, {
                    column: column,
                    time: time
                });
                timePickers.forEach(function (instance, i) {
                    (0, _newArrowCheck3.default)(this, _this3);

                    if (i === pickerIndex) instance.updateFocusedTime(col, time[pickerIndex]);else instance.updateFocusedTime(-1, instance.focusedTime);
                }.bind(this));
            }

            if (vertical) {
                var increment = direction === 'up' ? 1 : -1;
                var timeParts = ['hours', 'minutes', 'seconds'];

                var pickerPossibleValues = timePickers[pickerIndex][String(timeParts[col]) + 'List'];
                var nextIndex = pickerPossibleValues.findIndex(function (_ref4) {
                    var text = _ref4.text;
                    (0, _newArrowCheck3.default)(this, _this3);
                    return this.focusedTime.time[pickerIndex][col] === text;
                }.bind(this)) + increment;
                var nextValue = pickerPossibleValues[nextIndex % pickerPossibleValues.length].text;
                var times = this.focusedTime.time.map(function (time, i) {
                    (0, _newArrowCheck3.default)(this, _this3);

                    if (i !== pickerIndex) return time;
                    time[col] = nextValue;
                    return time;
                }.bind(this));
                this.focusedTime = (0, _extends3.default)({}, this.focusedTime, {
                    time: times
                });

                timePickers.forEach(function (instance, i) {
                    (0, _newArrowCheck3.default)(this, _this3);

                    if (i === pickerIndex) instance.updateFocusedTime(col, times[i]);else instance.updateFocusedTime(-1, instance.focusedTime);
                }.bind(this));
            }
        },
        navigateDatePanel: function navigateDatePanel(direction, shift) {

            var timePickers = (0, _assist.findComponentsDownward)(this, 'TimeSpinner');
            if (timePickers.length > 0) {
                this.navigateTimePanel(direction, shift, timePickers);
                return;
            }

            if (shift) {
                if (this.type === 'year') {
                    this.focusedDate = new Date(this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 10), this.focusedDate.getMonth(), this.focusedDate.getDate());
                } else {
                    this.focusedDate = new Date(this.focusedDate.getFullYear() + mapPossibleValues(direction, 0, 1), this.focusedDate.getMonth() + mapPossibleValues(direction, 1, 0), this.focusedDate.getDate());
                }

                var position = direction.match(/left|down/) ? 'prev' : 'next';
                var double = direction.match(/up|down/) ? '-double' : '';

                var button = this.$refs.drop.$el.querySelector('.ivu-date-picker-' + position + '-btn-arrow' + double);
                if (button) pulseElement(button);
                return;
            }

            var initialDate = this.focusedDate || this.internalValue && this.internalValue[0] || new Date();
            var focusedDate = new Date(initialDate);

            if (this.type.match(/^date/)) {
                var lastOfMonth = (0, _util.getDayCountOfMonth)(initialDate.getFullYear(), initialDate.getMonth());
                var startDay = initialDate.getDate();
                var nextDay = focusedDate.getDate() + mapPossibleValues(direction, 1, 7);

                if (nextDay < 1) {
                    if (direction.match(/left|right/)) {
                        focusedDate.setMonth(focusedDate.getMonth() + 1);
                        focusedDate.setDate(nextDay);
                    } else {
                        focusedDate.setDate(startDay + Math.floor((lastOfMonth - startDay) / 7) * 7);
                    }
                } else if (nextDay > lastOfMonth) {
                    if (direction.match(/left|right/)) {
                        focusedDate.setMonth(focusedDate.getMonth() - 1);
                        focusedDate.setDate(nextDay);
                    } else {
                        focusedDate.setDate(startDay % 7);
                    }
                } else {
                    focusedDate.setDate(nextDay);
                }
            }

            if (this.type.match(/^month/)) {
                focusedDate.setMonth(focusedDate.getMonth() + mapPossibleValues(direction, 1, 3));
            }

            if (this.type.match(/^year/)) {
                focusedDate.setFullYear(focusedDate.getFullYear() + mapPossibleValues(direction, 1, 3));
            }

            this.focusedDate = focusedDate;
        },
        handleInputChange: function handleInputChange(event) {
            var _this4 = this;

            var isArrayValue = this.type.includes('range') || this.multiple;
            var oldValue = this.visualValue;
            var newValue = event.target.value;
            var newDate = this.parseDate(newValue);
            var disabledDateFn = this.options && typeof this.options.disabledDate === 'function' && this.options.disabledDate;
            var valueToTest = isArrayValue ? newDate : newDate[0];
            var isDisabled = disabledDateFn && disabledDateFn(valueToTest);
            var isValidDate = newDate.reduce(function (valid, date) {
                (0, _newArrowCheck3.default)(this, _this4);
                return valid && date instanceof Date;
            }.bind(this), true);

            if (newValue !== oldValue && !isDisabled && isValidDate) {
                this.emitChange(this.type);
                this.internalValue = newDate;
            } else {
                this.forceInputRerender++;
            }
        },
        handleInputMouseenter: function handleInputMouseenter() {
            if (this.readonly || this.disabled) return;
            if (this.visualValue && this.clearable) {
                this.showClose = true;
            }
        },
        handleInputMouseleave: function handleInputMouseleave() {
            this.showClose = false;
        },
        handleIconClick: function handleIconClick(e) {
            if (this.showClose) {
                if (e) e.stopPropagation();
                this.handleClear();
            } else if (!this.disabled) {
                this.handleFocus();
            }
        },
        handleClear: function handleClear() {
            var _this5 = this;

            this.visible = false;
            this.internalValue = this.internalValue.map(function () {
                (0, _newArrowCheck3.default)(this, _this5);
                return null;
            }.bind(this));
            this.$emit('on-clear');
            this.dispatch('FormItem', 'on-form-change', '');
            this.emitChange(this.type);
            this.reset();

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this5);
                return this.onSelectionModeChange(this.type);
            }.bind(this), 500);
        },
        emitChange: function emitChange(type) {
            var _this6 = this;

            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this6);

                this.$emit('on-change', this.publicStringValue, type);
                this.dispatch('FormItem', 'on-form-change', this.publicStringValue);
            }.bind(this));
        },
        parseDate: function parseDate(val) {
            var _this7 = this;

            var isRange = this.type.includes('range');
            var type = this.type;
            var parser = (_util.TYPE_VALUE_RESOLVER_MAP[type] || _util.TYPE_VALUE_RESOLVER_MAP['default']).parser;
            var format = this.format || _util.DEFAULT_FORMATS[type];
            var multipleParser = _util.TYPE_VALUE_RESOLVER_MAP['multiple'].parser;

            if (val && type === 'time' && !(val instanceof Date)) {
                val = parser(val, format);
            } else if (this.multiple && val) {
                val = multipleParser(val, format);
            } else if (isRange) {
                if (!val) {
                    val = [null, null];
                } else {
                    if (typeof val === 'string') {
                        val = parser(val, format);
                    } else if (type === 'timerange') {
                        val = parser(val, format).map(function (v) {
                            (0, _newArrowCheck3.default)(this, _this7);
                            return v || '';
                        }.bind(this));
                    } else {
                        var _val = val,
                            _val2 = (0, _slicedToArray3.default)(_val, 2),
                            start = _val2[0],
                            end = _val2[1];

                        if (start instanceof Date && end instanceof Date) {
                            val = val.map(function (date) {
                                (0, _newArrowCheck3.default)(this, _this7);
                                return new Date(date);
                            }.bind(this));
                        } else if (typeof start === 'string' && typeof end === 'string') {
                            val = parser(val.join(_util.RANGE_SEPARATOR), format);
                        } else if (!start || !end) {
                            val = [null, null];
                        }
                    }
                }
            } else if (typeof val === 'string' && type.indexOf('time') !== 0) {
                val = parser(val, format) || null;
            }

            return isRange || this.multiple ? val || [] : [val];
        },
        formatDate: function formatDate(value) {
            var format = _util.DEFAULT_FORMATS[this.type];

            if (this.multiple) {
                var formatter = _util.TYPE_VALUE_RESOLVER_MAP.multiple.formatter;
                return formatter(value, this.format || format);
            } else {
                var _ref5 = _util.TYPE_VALUE_RESOLVER_MAP[this.type] || _util.TYPE_VALUE_RESOLVER_MAP['default'],
                    _formatter = _ref5.formatter;

                return _formatter(value, this.format || format);
            }
        },
        onPick: function onPick(dates) {
            var _this8 = this;

            var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var type = arguments[2];

            if (this.multiple) {
                var pickedTimeStamp = dates.getTime();
                var indexOfPickedDate = this.internalValue.findIndex(function (date) {
                    (0, _newArrowCheck3.default)(this, _this8);
                    return date && date.getTime() === pickedTimeStamp;
                }.bind(this));
                var allDates = [].concat((0, _toConsumableArray3.default)(this.internalValue), [dates]).filter(Boolean);
                var timeStamps = allDates.map(function (date) {
                    (0, _newArrowCheck3.default)(this, _this8);
                    return date.getTime();
                }.bind(this)).filter(function (ts, i, arr) {
                    (0, _newArrowCheck3.default)(this, _this8);
                    return arr.indexOf(ts) === i && i !== indexOfPickedDate;
                }.bind(this));
                this.internalValue = timeStamps.map(function (ts) {
                    (0, _newArrowCheck3.default)(this, _this8);
                    return new Date(ts);
                }.bind(this));
            } else {
                dates = this.parseDate(dates);
                this.internalValue = Array.isArray(dates) ? dates : [dates];
            }

            if (this.internalValue[0]) this.focusedDate = this.internalValue[0];
            this.focusedTime = (0, _extends3.default)({}, this.focusedTime, {
                time: this.internalValue.map(extractTime)
            });

            if (!this.isConfirm) this.onSelectionModeChange(this.type);
            if (!this.isConfirm) this.visible = visible;
            this.emitChange(type);
        },
        onPickSuccess: function onPickSuccess() {
            this.visible = false;
            this.$emit('on-ok');
            this.focus();
            this.reset();
        },
        focus: function focus() {
            this.$refs.input && this.$refs.input.focus();
        }
    },
    watch: {
        visible: function visible(state) {
            if (state === false) {
                this.$refs.drop.destroy();
            }
            this.$refs.drop.update();
            this.$emit('on-open-change', state);
        },
        value: function value(val) {
            this.internalValue = this.parseDate(val);
        },
        open: function open(val) {
            this.visible = val === true;
        },
        type: function type(_type) {
            this.onSelectionModeChange(_type);
        },
        publicVModelValue: function publicVModelValue(now, before) {
            var newValue = (0, _stringify2.default)(now);
            var oldValue = (0, _stringify2.default)(before);
            var shouldEmitInput = newValue !== oldValue || (typeof now === 'undefined' ? 'undefined' : (0, _typeof3.default)(now)) !== (typeof before === 'undefined' ? 'undefined' : (0, _typeof3.default)(before));
            if (shouldEmitInput) this.$emit('input', now);
        }
    },
    mounted: function mounted() {
        var _this9 = this;

        var initialValue = this.value;
        var parsedValue = this.publicVModelValue;
        if ((typeof initialValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(initialValue)) !== (typeof parsedValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(parsedValue)) || (0, _stringify2.default)(initialValue) !== (0, _stringify2.default)(parsedValue)) {
            this.$emit('input', this.publicVModelValue);
        }
        if (this.open !== null) this.visible = this.open;

        this.$on('focus-input', function () {
            (0, _newArrowCheck3.default)(this, _this9);
            return this.focus();
        }.bind(this));
    }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(200), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(204), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _icon = __webpack_require__(50);

var _icon2 = _interopRequireDefault(_icon);

var _dateTable = __webpack_require__(97);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _yearTable = __webpack_require__(99);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(101);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _time = __webpack_require__(220);

var _time2 = _interopRequireDefault(_time);

var _confirm = __webpack_require__(38);

var _confirm2 = _interopRequireDefault(_confirm);

var _datePanelLabel = __webpack_require__(107);

var _datePanelLabel2 = _interopRequireDefault(_datePanelLabel);

var _panelMixin = __webpack_require__(39);

var _panelMixin2 = _interopRequireDefault(_panelMixin);

var _datePanelMixin = __webpack_require__(109);

var _datePanelMixin2 = _interopRequireDefault(_datePanelMixin);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var datePrefixCls = 'ivu-date-picker';

exports.default = {
    name: 'DatePickerPanel',
    mixins: [_panelMixin2.default, _locale2.default, _datePanelMixin2.default],
    components: { Icon: _icon2.default, DateTable: _dateTable2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, TimePicker: _time2.default, Confirm: _confirm2.default, datePanelLabel: _datePanelLabel2.default },
    props: {
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        var selectionMode = this.selectionMode,
            value = this.value;


        var dates = value.slice().sort();
        return {
            prefixCls: prefixCls,
            datePrefixCls: datePrefixCls,
            currentView: selectionMode || 'date',
            pickerTable: this.getTableType(selectionMode),
            dates: dates,
            panelDate: this.startDate || dates[0] || new Date()
        };
    },

    computed: {
        classes: function classes() {
            return [prefixCls + '-body-wrapper', (0, _defineProperty3.default)({}, prefixCls + '-with-sidebar', this.shortcuts.length)];
        },
        panelPickerHandlers: function panelPickerHandlers() {
            return this.pickerTable === String(this.currentView) + '-table' ? this.handlePick : this.handlePreSelection;
        },
        datePanelLabel: function datePanelLabel() {
            var _this = this;

            var locale = this.t('i.locale');
            var datePanelLabel = this.t('i.datepicker.datePanelLabel');
            var date = this.panelDate;

            var _formatDateLabels = (0, _util.formatDateLabels)(locale, datePanelLabel, date),
                labels = _formatDateLabels.labels,
                separator = _formatDateLabels.separator;

            var handler = function (type) {
                (0, _newArrowCheck3.default)(this, _this);

                return function () {
                    (0, _newArrowCheck3.default)(this, _this);
                    return this.pickerTable = this.getTableType(type);
                }.bind(this);
            }.bind(this);

            return {
                separator: separator,
                labels: labels.map(function (obj) {
                    (0, _newArrowCheck3.default)(this, _this);
                    return obj.handler = handler(obj.type), obj;
                }.bind(this))
            };
        },
        timeDisabled: function timeDisabled() {
            return !this.dates[0];
        }
    },
    watch: {
        value: function value(newVal) {
            this.dates = newVal;
            var panelDate = this.multiple ? this.dates[this.dates.length - 1] : this.startDate || this.dates[0];
            this.panelDate = panelDate || new Date();
        },
        currentView: function currentView(_currentView) {
            var _this2 = this;

            this.$emit('on-selection-mode-change', _currentView);

            if (this.currentView === 'time') {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    var spinner = this.$refs.timePicker.$refs.timeSpinner;
                    spinner.updateScroll();
                }.bind(this));
            }
        },
        selectionMode: function selectionMode(type) {
            this.currentView = type;
            this.pickerTable = this.getTableType(type);
        },
        focusedDate: function focusedDate(date) {
            var isDifferentYear = date.getFullYear() !== this.panelDate.getFullYear();
            var isDifferentMonth = isDifferentYear || date.getMonth() !== this.panelDate.getMonth();
            if (isDifferentYear || isDifferentMonth) {
                if (!this.multiple) this.panelDate = date;
            }
        }
    },
    methods: {
        reset: function reset() {
            this.currentView = this.selectionMode;
            this.pickerTable = this.getTableType(this.currentView);
        },
        changeYear: function changeYear(dir) {
            if (this.selectionMode === 'year' || this.pickerTable === 'year-table') {
                this.panelDate = new Date(this.panelDate.getFullYear() + dir * 10, 0, 1);
            } else {
                this.panelDate = (0, _util.siblingMonth)(this.panelDate, dir * 12);
            }
        },
        getTableType: function getTableType(currentView) {
            return currentView.match(/^time/) ? 'time-picker' : String(currentView) + '-table';
        },
        changeMonth: function changeMonth(dir) {
            this.panelDate = (0, _util.siblingMonth)(this.panelDate, dir);
        },
        handlePreSelection: function handlePreSelection(value) {
            this.panelDate = value;
            if (this.pickerTable === 'year-table') this.pickerTable = 'month-table';else this.pickerTable = this.getTableType(this.currentView);
        },
        handlePick: function handlePick(value, type) {
            var selectionMode = this.selectionMode,
                panelDate = this.panelDate;

            if (selectionMode === 'year') value = new Date(value.getFullYear(), 0, 1);else if (selectionMode === 'month') value = new Date(panelDate.getFullYear(), value.getMonth(), 1);else value = new Date(value);

            this.dates = [value];
            this.$emit('on-pick', value, false, type || selectionMode);
        }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061dade_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061dade_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061dade_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061dade_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061dade_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _util = __webpack_require__(9);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _jsCalendar = __webpack_require__(213);

var _jsCalendar2 = _interopRequireDefault(_jsCalendar);

var _mixin = __webpack_require__(58);

var _mixin2 = _interopRequireDefault(_mixin);

var _prefixCls = __webpack_require__(59);

var _prefixCls2 = _interopRequireDefault(_prefixCls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_locale2.default, _mixin2.default],

    props: {
        showWeekNumbers: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            prefixCls: _prefixCls2.default
        };
    },

    computed: {
        classes: function classes() {
            return ['' + String(_prefixCls2.default), (0, _defineProperty3.default)({}, String(_prefixCls2.default) + '-show-week-numbers', this.showWeekNumbers)];
        },
        calendar: function calendar() {
            var weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
            return new _jsCalendar2.default.Generator({ onlyDays: !this.showWeekNumbers, weekStart: weekStartDay });
        },
        headerDays: function headerDays() {
            var _this = this;

            var weekStartDay = Number(this.t('i.datepicker.weekStartDay'));
            var translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(function (item) {
                (0, _newArrowCheck3.default)(this, _this);

                return this.t('i.datepicker.weeks.' + item);
            }.bind(this));
            var weekDays = translatedDays.splice(weekStartDay, 7 - weekStartDay).concat(translatedDays.splice(0, weekStartDay));
            return this.showWeekNumbers ? [''].concat(weekDays) : weekDays;
        },
        cells: function cells() {
            var _this2 = this;

            var tableYear = this.tableDate.getFullYear();
            var tableMonth = this.tableDate.getMonth();
            var today = (0, _util.clearHours)(new Date());
            var selectedDays = this.dates.filter(Boolean).map(_util.clearHours);
            var _dates$map = this.dates.map(_util.clearHours),
                _dates$map2 = (0, _slicedToArray3.default)(_dates$map, 2),
                minDay = _dates$map2[0],
                maxDay = _dates$map2[1];

            var rangeStart = this.rangeState.from && (0, _util.clearHours)(this.rangeState.from);
            var rangeEnd = this.rangeState.to && (0, _util.clearHours)(this.rangeState.to);

            var isRange = this.selectionMode === 'range';
            var disabledTestFn = typeof this.disabledDate === 'function' && this.disabledDate;

            return this.calendar(tableYear, tableMonth, function (cell) {
                (0, _newArrowCheck3.default)(this, _this2);

                if (cell.date instanceof Date) cell.date.setTime(cell.date.getTime() + cell.date.getTimezoneOffset() * 60000);

                var time = cell.date && (0, _util.clearHours)(cell.date);
                var dateIsInCurrentMonth = cell.date && tableMonth === cell.date.getMonth();
                return (0, _extends3.default)({}, cell, {
                    type: time === today ? 'today' : cell.type,
                    selected: dateIsInCurrentMonth && selectedDays.includes(time),
                    disabled: cell.date && disabledTestFn && disabledTestFn(new Date(time)),
                    range: dateIsInCurrentMonth && isRange && (0, _util.isInRange)(time, rangeStart, rangeEnd),
                    start: dateIsInCurrentMonth && isRange && time === minDay,
                    end: dateIsInCurrentMonth && isRange && time === maxDay
                });
            }.bind(this)).cells.slice(this.showWeekNumbers ? 8 : 0);
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref2;

            return [String(_prefixCls2.default) + '-cell', (_ref2 = {}, (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-selected', cell.selected || cell.start || cell.end), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-today', cell.type === 'today'), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-prev-month', cell.type === 'prevMonth'), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-next-month', cell.type === 'nextMonth'), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-week-label', cell.type === 'weekLabel'), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-cell-range', cell.range && !cell.start && !cell.end), (0, _defineProperty3.default)(_ref2, String(_prefixCls2.default) + '-focused', (0, _util.clearHours)(cell.date) === (0, _util.clearHours)(this.focusedDate)), _ref2)];
        }
    }
};

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_24032862_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_24032862_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_24032862_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_24032862_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_24032862_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _util = __webpack_require__(9);

var _assist = __webpack_require__(3);

var _mixin = __webpack_require__(58);

var _mixin2 = _interopRequireDefault(_mixin);

var _prefixCls = __webpack_require__(59);

var _prefixCls2 = _interopRequireDefault(_prefixCls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixin2.default],

    props: {},
    computed: {
        classes: function classes() {
            return ['' + String(_prefixCls2.default), String(_prefixCls2.default) + '-year'];
        },
        startYear: function startYear() {
            return Math.floor(this.tableDate.getFullYear() / 10) * 10;
        },
        cells: function cells() {
            var _this = this;

            var cells = [];
            var cell_tmpl = {
                text: '',
                selected: false,
                disabled: false
            };

            var selectedDays = this.dates.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(this, _this);
                return (0, _util.clearHours)(new Date(date.getFullYear(), 0, 1));
            }.bind(this));
            var focusedDate = (0, _util.clearHours)(new Date(this.focusedDate.getFullYear(), 0, 1));

            for (var i = 0; i < 10; i++) {
                var cell = (0, _assist.deepCopy)(cell_tmpl);
                cell.date = new Date(this.startYear + i, 0, 1);
                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'year';
                var day = (0, _util.clearHours)(cell.date);
                cell.selected = selectedDays.includes(day);
                cell.focused = day === focusedDate;
                cells.push(cell);
            }

            return cells;
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref;

            return [String(_prefixCls2.default) + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-focused', cell.focused), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-range', cell.range && !cell.start && !cell.end), _ref)];
        }
    }
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4716c51e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4716c51e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4716c51e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4716c51e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4716c51e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _util = __webpack_require__(9);

var _assist = __webpack_require__(3);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _mixin = __webpack_require__(58);

var _mixin2 = _interopRequireDefault(_mixin);

var _prefixCls = __webpack_require__(59);

var _prefixCls2 = _interopRequireDefault(_prefixCls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_locale2.default, _mixin2.default],
    props: {},
    computed: {
        classes: function classes() {
            return ['' + String(_prefixCls2.default), String(_prefixCls2.default) + '-month'];
        },
        cells: function cells() {
            var _this = this;

            var cells = [];
            var cell_tmpl = {
                text: '',
                selected: false,
                disabled: false
            };

            var tableYear = this.tableDate.getFullYear();
            var selectedDays = this.dates.filter(Boolean).map(function (date) {
                (0, _newArrowCheck3.default)(this, _this);
                return (0, _util.clearHours)(new Date(date.getFullYear(), date.getMonth(), 1));
            }.bind(this));
            var focusedDate = (0, _util.clearHours)(new Date(this.focusedDate.getFullYear(), this.focusedDate.getMonth(), 1));

            for (var i = 0; i < 12; i++) {
                var cell = (0, _assist.deepCopy)(cell_tmpl);
                cell.date = new Date(tableYear, i, 1);
                cell.text = this.tCell(i + 1);
                var day = (0, _util.clearHours)(cell.date);
                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(cell.date) && this.selectionMode === 'month';
                cell.selected = selectedDays.includes(day);
                cell.focused = day === focusedDate;
                cells.push(cell);
            }

            return cells;
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref;

            return [String(_prefixCls2.default) + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-focused', cell.focused), (0, _defineProperty3.default)(_ref, String(_prefixCls2.default) + '-cell-range', cell.range && !cell.start && !cell.end), _ref)];
        },
        tCell: function tCell(nr) {
            return this.t('i.datepicker.months.m' + String(nr));
        }
    }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(29);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _timeSpinner = __webpack_require__(104);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

var _confirm = __webpack_require__(38);

var _confirm2 = _interopRequireDefault(_confirm);

var _timeMixins = __webpack_require__(60);

var _timeMixins2 = _interopRequireDefault(_timeMixins);

var _panelMixin = __webpack_require__(39);

var _panelMixin2 = _interopRequireDefault(_panelMixin);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var timePrefixCls = 'ivu-time-picker';

var capitalize = function (str) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return str[0].toUpperCase() + str.slice(1);
}.bind(undefined);
var mergeDateHMS = function (date, hours, minutes, seconds) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var newDate = new Date(date.getTime());
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(seconds);
    return newDate;
}.bind(undefined);
var unique = function (el, i, arr) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return arr.indexOf(el) === i;
}.bind(undefined);
var returnFalse = function () {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return false;
}.bind(undefined);

exports.default = {
    name: 'TimePickerPanel',
    mixins: [_panelMixin2.default, _locale2.default, _timeMixins2.default],
    components: { TimeSpinner: _timeSpinner2.default, Confirm: _confirm2.default },
    props: {
        disabledDate: {
            type: Function,
            default: returnFalse
        },
        steps: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        format: {
            type: String,
            default: 'HH:mm:ss'
        },
        value: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            timePrefixCls: timePrefixCls,
            date: this.value[0] || (0, _util.initTimeDate)(),
            showDate: false
        };
    },

    computed: {
        showSeconds: function showSeconds() {
            return !(this.format || '').match(/mm$/);
        },
        visibleDate: function visibleDate() {
            var date = this.date;
            var month = date.getMonth() + 1;
            var tYear = this.t('i.datepicker.year');
            var tMonth = this.t('i.datepicker.month' + String(month));
            return '' + String(date.getFullYear()) + String(tYear) + ' ' + String(tMonth);
        },
        timeSlots: function timeSlots() {
            var _this = this;

            if (!this.value[0]) return [];
            return ['getHours', 'getMinutes', 'getSeconds'].map(function (slot) {
                (0, _newArrowCheck3.default)(this, _this);
                return this.date[slot]();
            }.bind(this));
        },
        disabledHMS: function disabledHMS() {
            var _this2 = this;

            var disabledTypes = ['disabledHours', 'disabledMinutes', 'disabledSeconds'];
            if (this.disabledDate === returnFalse || !this.value[0]) {
                var disabled = disabledTypes.reduce(function (obj, type) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return obj[type] = this[type], obj;
                }.bind(this), {});
                return disabled;
            } else {
                var slots = [24, 60, 60];
                var _disabled = ['Hours', 'Minutes', 'Seconds'].map(function (type) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return this['disabled' + String(type)];
                }.bind(this));
                var disabledHMS = _disabled.map(function (preDisabled, j) {
                    (0, _newArrowCheck3.default)(this, _this2);

                    var slot = slots[j];
                    var toDisable = preDisabled;

                    var _loop = function _loop(i) {
                        var hms = _this2.timeSlots.map(function (slot, x) {
                            (0, _newArrowCheck3.default)(this, _this2);
                            return x === j ? i : slot;
                        }.bind(_this2));
                        var testDateTime = mergeDateHMS.apply(undefined, [_this2.date].concat((0, _toConsumableArray3.default)(hms)));
                        if (_this2.disabledDate(testDateTime, true)) toDisable.push(i);
                    };

                    for (var i = 0; i < slot; i += this.steps[j] || 1) {
                        _loop(i);
                    }
                    return toDisable.filter(unique);
                }.bind(this));
                return disabledTypes.reduce(function (obj, type, i) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return obj[type] = disabledHMS[i], obj;
                }.bind(this), {});
            }
        }
    },
    watch: {
        value: function value(dates) {
            var newVal = dates[0] || (0, _util.initTimeDate)();
            newVal = new Date(newVal);
            this.date = newVal;
        }
    },
    methods: {
        handleChange: function handleChange(date) {
            var _this3 = this;

            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


            var newDate = new Date(this.date);
            (0, _keys2.default)(date).forEach(function (type) {
                (0, _newArrowCheck3.default)(this, _this3);
                return newDate['set' + String(capitalize(type))](date[type]);
            }.bind(this));

            if (emit) this.$emit('on-pick', newDate, 'time');
        }
    },
    mounted: function mounted() {
        if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
    }
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_496899f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_496899f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_496899f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_496899f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_496899f4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(29);

var _keys2 = _interopRequireDefault(_keys);

var _extends3 = __webpack_require__(21);

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _timeMixins = __webpack_require__(60);

var _timeMixins2 = _interopRequireDefault(_timeMixins);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-time-picker-cells';
var timeParts = ['hours', 'minutes', 'seconds'];

exports.default = {
    name: 'TimeSpinner',
    mixins: [_timeMixins2.default],
    props: {
        hours: {
            type: [Number, String],
            default: NaN
        },
        minutes: {
            type: [Number, String],
            default: NaN
        },
        seconds: {
            type: [Number, String],
            default: NaN
        },
        showSeconds: {
            type: Boolean,
            default: true
        },
        steps: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        }
    },
    data: function data() {
        var _this = this;

        return {
            spinerSteps: [1, 1, 1].map(function (one, i) {
                (0, _newArrowCheck3.default)(this, _this);
                return Math.abs(this.steps[i]) || one;
            }.bind(this)),
            prefixCls: prefixCls,
            compiled: false,
            focusedColumn: -1,
            focusedTime: [0, 0, 0] };
    },

    computed: {
        classes: function classes() {
            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-with-seconds', this.showSeconds)];
        },
        hoursList: function hoursList() {
            var hours = [];
            var step = this.spinerSteps[0];
            var focusedHour = this.focusedColumn === 0 && this.focusedTime[0];
            var hour_tmpl = {
                text: 0,
                selected: false,
                disabled: false,
                hide: false
            };

            for (var i = 0; i < 24; i += step) {
                var hour = (0, _assist.deepCopy)(hour_tmpl);
                hour.text = i;
                hour.focused = i === focusedHour;

                if (this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
                    hour.disabled = true;
                    if (this.hideDisabledOptions) hour.hide = true;
                }
                if (this.hours === i) hour.selected = true;
                hours.push(hour);
            }

            return hours;
        },
        minutesList: function minutesList() {
            var minutes = [];
            var step = this.spinerSteps[1];
            var focusedMinute = this.focusedColumn === 1 && this.focusedTime[1];
            var minute_tmpl = {
                text: 0,
                selected: false,
                disabled: false,
                hide: false
            };

            for (var i = 0; i < 60; i += step) {
                var minute = (0, _assist.deepCopy)(minute_tmpl);
                minute.text = i;
                minute.focused = i === focusedMinute;

                if (this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
                    minute.disabled = true;
                    if (this.hideDisabledOptions) minute.hide = true;
                }
                if (this.minutes === i) minute.selected = true;
                minutes.push(minute);
            }
            return minutes;
        },
        secondsList: function secondsList() {
            var seconds = [];
            var step = this.spinerSteps[2];
            var focusedMinute = this.focusedColumn === 2 && this.focusedTime[2];
            var second_tmpl = {
                text: 0,
                selected: false,
                disabled: false,
                hide: false
            };

            for (var i = 0; i < 60; i += step) {
                var second = (0, _assist.deepCopy)(second_tmpl);
                second.text = i;
                second.focused = i === focusedMinute;

                if (this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
                    second.disabled = true;
                    if (this.hideDisabledOptions) second.hide = true;
                }
                if (this.seconds === i) second.selected = true;
                seconds.push(second);
            }

            return seconds;
        }
    },
    methods: {
        getCellCls: function getCellCls(cell) {
            var _ref2;

            return [prefixCls + '-cell', (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref2, prefixCls + '-cell-focused', cell.focused), (0, _defineProperty3.default)(_ref2, prefixCls + '-cell-disabled', cell.disabled), _ref2)];
        },
        chooseValue: function chooseValue(values) {
            var _this2 = this;

            var changes = timeParts.reduce(function (obj, part, i) {
                (0, _newArrowCheck3.default)(this, _this2);

                var value = values[i];
                if (this[part] === value) return obj;
                return (0, _extends4.default)({}, obj, (0, _defineProperty3.default)({}, part, value));
            }.bind(this), {});
            if ((0, _keys2.default)(changes).length > 0) {
                this.emitChange(changes);
            }
        },
        handleClick: function handleClick(type, cell) {
            if (cell.disabled) return;
            var data = (0, _defineProperty3.default)({}, type, cell.text);
            this.emitChange(data);
        },
        emitChange: function emitChange(changes) {
            this.$emit('on-change', changes);
            this.$emit('on-pick-click');
        },
        scroll: function scroll(type, index) {
            var from = this.$refs[type].scrollTop;
            var to = 24 * this.getScrollIndex(type, index);
            (0, _assist.scrollTop)(this.$refs[type], from, to, 500);
        },
        getScrollIndex: function getScrollIndex(type, index) {
            var _this3 = this;

            var Type = (0, _assist.firstUpperCase)(type);
            var disabled = this['disabled' + String(Type)];
            if (disabled.length && this.hideDisabledOptions) {
                var _count = 0;
                disabled.forEach(function (item) {
                    (0, _newArrowCheck3.default)(this, _this3);
                    return item <= index ? _count++ : '';
                }.bind(this));
                index -= _count;
            }
            return index;
        },
        updateScroll: function updateScroll() {
            var _this4 = this;

            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this4);

                timeParts.forEach(function (type) {
                    (0, _newArrowCheck3.default)(this, _this4);

                    this.$refs[type].scrollTop = 24 * this[String(type) + 'List'].findIndex(function (obj) {
                        (0, _newArrowCheck3.default)(this, _this4);
                        return obj.text == this[type];
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        },
        formatTime: function formatTime(text) {
            return text < 10 ? '0' + text : text;
        },
        updateFocusedTime: function updateFocusedTime(col, time) {
            this.focusedColumn = col;
            this.focusedTime = time.slice();
        }
    },
    watch: {
        hours: function hours(val) {
            var _this5 = this;

            if (!this.compiled) return;
            this.scroll('hours', this.hoursList.findIndex(function (obj) {
                (0, _newArrowCheck3.default)(this, _this5);
                return obj.text == val;
            }.bind(this)));
        },
        minutes: function minutes(val) {
            var _this6 = this;

            if (!this.compiled) return;
            this.scroll('minutes', this.minutesList.findIndex(function (obj) {
                (0, _newArrowCheck3.default)(this, _this6);
                return obj.text == val;
            }.bind(this)));
        },
        seconds: function seconds(val) {
            var _this7 = this;

            if (!this.compiled) return;
            this.scroll('seconds', this.secondsList.findIndex(function (obj) {
                (0, _newArrowCheck3.default)(this, _this7);
                return obj.text == val;
            }.bind(this)));
        },
        focusedTime: function focusedTime(updated, old) {
            var _this8 = this;

            timeParts.forEach(function (part, i) {
                (0, _newArrowCheck3.default)(this, _this8);

                if (updated[i] === old[i] || typeof updated[i] === 'undefined') return;
                var valueIndex = this[String(part) + 'List'].findIndex(function (obj) {
                    (0, _newArrowCheck3.default)(this, _this8);
                    return obj.text === updated[i];
                }.bind(this));
                this.scroll(part, valueIndex);
            }.bind(this));
        }
    },
    mounted: function mounted() {
        var _this9 = this;

        this.$nextTick(function () {
            (0, _newArrowCheck3.default)(this, _this9);
            return this.compiled = true;
        }.bind(this));
    }
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker';

exports.default = {
    mixins: [_locale2.default, _emitter2.default],
    components: { iButton: _button2.default },
    props: {
        showTime: false,
        isTime: false,
        timeDisabled: false
    },
    data: function data() {
        return {
            prefixCls: prefixCls
        };
    },

    computed: {
        timeClasses: function timeClasses() {
            return prefixCls + '-confirm-time';
        },
        labels: function labels() {
            var _this = this;

            var labels = ['time', 'clear', 'ok'];
            var values = [this.isTime ? 'selectDate' : 'selectTime', 'clear', 'ok'];
            return labels.reduce(function (obj, key, i) {
                (0, _newArrowCheck3.default)(this, _this);

                obj[key] = this.t('i.datepicker.' + values[i]);
                return obj;
            }.bind(this), {});
        }
    },
    methods: {
        handleClear: function handleClear() {
            this.$emit('on-pick-clear');
        },
        handleSuccess: function handleSuccess() {
            this.$emit('on-pick-success');
        },
        handleToggleTime: function handleToggleTime() {
            if (this.timeDisabled) return;
            this.$emit('on-pick-toggle-time');
            this.dispatch('CalendarPicker', 'focus-input');
        },
        handleTab: function handleTab(e) {
            var tabbables = [].concat((0, _toConsumableArray3.default)(this.$el.children));
            var expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']();

            if (document.activeElement === expectedFocus) {
                e.preventDefault();
                e.stopPropagation();
                this.dispatch('CalendarPicker', 'focus-input');
            }
        }
    }
};

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a6bf5e7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a6bf5e7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a6bf5e7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_panel_label_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a6bf5e7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a6bf5e7_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_panel_label_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        datePanelLabel: Object,
        currentView: String,
        datePrefixCls: String
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _assist = __webpack_require__(3);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        showTime: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd'
        },
        selectionMode: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'time']);
            },

            default: 'date'
        },
        shortcuts: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        disabledDate: {
            type: Function,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return false;
            }.bind(undefined)
        },
        value: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [(0, _util.initTimeDate)(), (0, _util.initTimeDate)()];
            }.bind(undefined)
        },
        timePickerOptions: {
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined),
            type: Object
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        },
        pickerType: {
            type: String,
            require: true
        },
        focusedDate: {
            type: Date,
            required: true
        }
    },
    computed: {
        isTime: function isTime() {
            return this.currentView === 'time';
        }
    },
    methods: {
        handleToggleTime: function handleToggleTime() {
            this.currentView = this.currentView === 'time' ? 'date' : 'time';
        }
    }
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _icon = __webpack_require__(50);

var _icon2 = _interopRequireDefault(_icon);

var _dateTable = __webpack_require__(97);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _yearTable = __webpack_require__(99);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(101);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _timeRange = __webpack_require__(227);

var _timeRange2 = _interopRequireDefault(_timeRange);

var _confirm = __webpack_require__(38);

var _confirm2 = _interopRequireDefault(_confirm);

var _util = __webpack_require__(9);

var _datePanelLabel = __webpack_require__(107);

var _datePanelLabel2 = _interopRequireDefault(_datePanelLabel);

var _panelMixin = __webpack_require__(39);

var _panelMixin2 = _interopRequireDefault(_panelMixin);

var _datePanelMixin = __webpack_require__(109);

var _datePanelMixin2 = _interopRequireDefault(_datePanelMixin);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var datePrefixCls = 'ivu-date-picker';

var dateSorter = function (a, b) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (!a || !b) return 0;
    return a.getTime() - b.getTime();
}.bind(undefined);

exports.default = {
    name: 'RangeDatePickerPanel',
    mixins: [_panelMixin2.default, _locale2.default, _datePanelMixin2.default],
    components: { Icon: _icon2.default, DateTable: _dateTable2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, TimePicker: _timeRange2.default, Confirm: _confirm2.default, datePanelLabel: _datePanelLabel2.default },
    props: {
        splitPanels: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        var _this = this;

        var _value$map = this.value.map(function (date) {
            (0, _newArrowCheck3.default)(this, _this);
            return date || (0, _util.initTimeDate)();
        }.bind(this)),
            _value$map2 = (0, _slicedToArray3.default)(_value$map, 2),
            minDate = _value$map2[0],
            maxDate = _value$map2[1];

        var leftPanelDate = this.startDate ? this.startDate : minDate;

        return {
            prefixCls: prefixCls,
            datePrefixCls: datePrefixCls,
            dates: this.value,
            rangeState: { from: this.value[0], to: this.value[1], selecting: minDate && !maxDate },
            currentView: this.selectionMode || 'range',
            leftPickerTable: String(this.selectionMode) + '-table',
            rightPickerTable: String(this.selectionMode) + '-table',
            leftPanelDate: leftPanelDate,
            rightPanelDate: new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1)
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return [prefixCls + '-body-wrapper', datePrefixCls + '-with-range', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-with-sidebar', this.shortcuts.length), (0, _defineProperty3.default)(_ref, datePrefixCls + '-with-week-numbers', this.showWeekNumbers), _ref)];
        },
        panelBodyClasses: function panelBodyClasses() {
            var _ref2;

            return [prefixCls + '-body', (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-body-time', this.showTime), (0, _defineProperty3.default)(_ref2, prefixCls + '-body-date', !this.showTime), _ref2)];
        },
        leftDatePanelLabel: function leftDatePanelLabel() {
            return this.panelLabelConfig('left');
        },
        rightDatePanelLabel: function rightDatePanelLabel() {
            return this.panelLabelConfig('right');
        },
        leftDatePanelView: function leftDatePanelView() {
            return this.leftPickerTable.split('-').shift();
        },
        rightDatePanelView: function rightDatePanelView() {
            return this.rightPickerTable.split('-').shift();
        },
        timeDisabled: function timeDisabled() {
            return !(this.dates[0] && this.dates[1]);
        },
        preSelecting: function preSelecting() {
            var tableType = String(this.currentView) + '-table';

            return {
                left: this.leftPickerTable !== tableType,
                right: this.rightPickerTable !== tableType
            };
        },
        panelPickerHandlers: function panelPickerHandlers() {
            return {
                left: this.preSelecting.left ? this.handlePreSelection.bind(this, 'left') : this.handleRangePick,
                right: this.preSelecting.right ? this.handlePreSelection.bind(this, 'right') : this.handleRangePick
            };
        }
    },
    watch: {
        value: function value(newVal) {
            var minDate = newVal[0] ? (0, _util.toDate)(newVal[0]) : null;
            var maxDate = newVal[1] ? (0, _util.toDate)(newVal[1]) : null;
            this.dates = [minDate, maxDate].sort(dateSorter);

            this.rangeState = {
                from: this.dates[0],
                to: this.dates[1],
                selecting: false
            };

            this.setPanelDates(this.startDate || this.dates[0] || new Date());
        },
        currentView: function currentView(_currentView) {
            var leftMonth = this.leftPanelDate.getMonth();
            var rightMonth = this.rightPanelDate.getMonth();
            var isSameYear = this.leftPanelDate.getFullYear() === this.rightPanelDate.getFullYear();

            if (_currentView === 'date' && isSameYear && leftMonth === rightMonth) {
                this.changePanelDate('right', 'Month', 1);
            }
            if (_currentView === 'month' && isSameYear) {
                this.changePanelDate('right', 'FullYear', 1);
            }
            if (_currentView === 'year' && isSameYear) {
                this.changePanelDate('right', 'FullYear', 10);
            }
        },
        selectionMode: function selectionMode(type) {
            this.currentView = type || 'range';
        },
        focusedDate: function focusedDate(date) {
            this.setPanelDates(date || new Date());
        }
    },
    methods: {
        reset: function reset() {
            this.currentView = this.selectionMode;
            this.leftPickerTable = String(this.currentView) + '-table';
            this.rightPickerTable = String(this.currentView) + '-table';
        },
        setPanelDates: function setPanelDates(leftPanelDate) {
            this.leftPanelDate = leftPanelDate;
            var rightPanelDate = new Date(leftPanelDate.getFullYear(), leftPanelDate.getMonth() + 1, 1);
            var splitRightPanelDate = this.dates[1] ? this.dates[1].getTime() : this.dates[1];
            this.rightPanelDate = this.splitPanels ? new Date(Math.max(splitRightPanelDate, rightPanelDate.getTime())) : rightPanelDate;
        },
        panelLabelConfig: function panelLabelConfig(direction) {
            var _this2 = this;

            var locale = this.t('i.locale');
            var datePanelLabel = this.t('i.datepicker.datePanelLabel');
            var handler = function (type) {
                (0, _newArrowCheck3.default)(this, _this2);

                var fn = type == 'month' ? this.showMonthPicker : this.showYearPicker;
                return function () {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return fn(direction);
                }.bind(this);
            }.bind(this);

            var date = this[String(direction) + 'PanelDate'];

            var _formatDateLabels = (0, _util.formatDateLabels)(locale, datePanelLabel, date),
                labels = _formatDateLabels.labels,
                separator = _formatDateLabels.separator;

            return {
                separator: separator,
                labels: labels.map(function (obj) {
                    (0, _newArrowCheck3.default)(this, _this2);
                    return obj.handler = handler(obj.type), obj;
                }.bind(this))
            };
        },
        prevYear: function prevYear(panel) {
            var increment = this.currentView === 'year' ? -10 : -1;
            this.changePanelDate(panel, 'FullYear', increment);
        },
        nextYear: function nextYear(panel) {
            var increment = this.currentView === 'year' ? 10 : 1;
            this.changePanelDate(panel, 'FullYear', increment);
        },
        prevMonth: function prevMonth(panel) {
            this.changePanelDate(panel, 'Month', -1);
        },
        nextMonth: function nextMonth(panel) {
            this.changePanelDate(panel, 'Month', 1);
        },
        changePanelDate: function changePanelDate(panel, type, increment) {
            var updateOtherPanel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            var current = new Date(this[String(panel) + 'PanelDate']);
            current['set' + String(type)](current['get' + String(type)]() + increment);
            this[String(panel) + 'PanelDate'] = current;

            if (!updateOtherPanel) return;

            if (this.splitPanels) {
                var otherPanel = panel === 'left' ? 'right' : 'left';
                if (panel === 'left' && this.leftPanelDate >= this.rightPanelDate) {
                    this.changePanelDate(otherPanel, type, 1);
                }
                if (panel === 'right' && this.rightPanelDate <= this.leftPanelDate) {
                    this.changePanelDate(otherPanel, type, -1);
                }
            } else {
                var _otherPanel = panel === 'left' ? 'right' : 'left';
                var currentDate = this[_otherPanel + 'PanelDate'];
                var temp = new Date(currentDate);

                if (type === 'Month') {
                    var nextMonthLastDate = new Date(temp.getFullYear(), temp.getMonth() + increment + 1, 0).getDate();
                    temp.setDate(Math.min(nextMonthLastDate, temp.getDate()));
                }

                temp['set' + String(type)](temp['get' + String(type)]() + increment);
                this[_otherPanel + 'PanelDate'] = temp;
            }
        },
        showYearPicker: function showYearPicker(panel) {
            this[String(panel) + 'PickerTable'] = 'year-table';
        },
        showMonthPicker: function showMonthPicker(panel) {
            this[String(panel) + 'PickerTable'] = 'month-table';
        },
        handlePreSelection: function handlePreSelection(panel, value) {
            this[String(panel) + 'PanelDate'] = value;
            var currentViewType = this[String(panel) + 'PickerTable'];
            if (currentViewType === 'year-table') this[String(panel) + 'PickerTable'] = 'month-table';else this[String(panel) + 'PickerTable'] = String(this.currentView) + '-table';

            if (!this.splitPanels) {
                var otherPanel = panel === 'left' ? 'right' : 'left';
                this[otherPanel + 'PanelDate'] = value;

                var increment = otherPanel === 'left' ? -1 : 1;

                this.changePanelDate(otherPanel, 'Month', increment, false);
            }
        },
        handleRangePick: function handleRangePick(val, type) {
            if (this.rangeState.selecting || this.currentView === 'time') {
                if (this.currentView === 'time') {
                    this.dates = val;
                } else {
                    var _sort = [this.rangeState.from, val].sort(dateSorter),
                        _sort2 = (0, _slicedToArray3.default)(_sort, 2),
                        minDate = _sort2[0],
                        maxDate = _sort2[1];

                    this.dates = [minDate, maxDate];
                    this.rangeState = {
                        from: minDate,
                        to: maxDate,
                        selecting: false
                    };
                }
                this.handleConfirm(false, type || 'date');
            } else {
                this.rangeState = {
                    from: val,
                    to: null,
                    selecting: true
                };
            }
        },
        handleChangeRange: function handleChangeRange(val) {
            this.rangeState.to = val;
        }
    }
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(29);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _timeSpinner = __webpack_require__(104);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

var _confirm = __webpack_require__(38);

var _confirm2 = _interopRequireDefault(_confirm);

var _timeMixins = __webpack_require__(60);

var _timeMixins2 = _interopRequireDefault(_timeMixins);

var _panelMixin = __webpack_require__(39);

var _panelMixin2 = _interopRequireDefault(_panelMixin);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-picker-panel';
var timePrefixCls = 'ivu-time-picker';

var capitalize = function (str) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return str[0].toUpperCase() + str.slice(1);
}.bind(undefined);

exports.default = {
    name: 'RangeTimePickerPanel',
    mixins: [_panelMixin2.default, _locale2.default, _timeMixins2.default],
    components: { TimeSpinner: _timeSpinner2.default, Confirm: _confirm2.default },
    props: {
        steps: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        format: {
            type: String,
            default: 'HH:mm:ss'
        },
        value: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        var _value$slice = this.value.slice(),
            _value$slice2 = (0, _slicedToArray3.default)(_value$slice, 2),
            dateStart = _value$slice2[0],
            dateEnd = _value$slice2[1];

        return {
            prefixCls: prefixCls,
            timePrefixCls: timePrefixCls,
            showDate: false,
            dateStart: dateStart || (0, _util.initTimeDate)(),
            dateEnd: dateEnd || (0, _util.initTimeDate)()
        };
    },

    computed: {
        classes: function classes() {
            return [prefixCls + '-body-wrapper', timePrefixCls + '-with-range', (0, _defineProperty3.default)({}, timePrefixCls + '-with-seconds', this.showSeconds)];
        },
        showSeconds: function showSeconds() {
            return !(this.format || '').match(/mm$/);
        },
        leftDatePanelLabel: function leftDatePanelLabel() {
            return this.panelLabelConfig(this.date);
        },
        rightDatePanelLabel: function rightDatePanelLabel() {
            return this.panelLabelConfig(this.dateEnd);
        }
    },
    watch: {
        value: function value(dates) {
            var _dates$slice = dates.slice(),
                _dates$slice2 = (0, _slicedToArray3.default)(_dates$slice, 2),
                dateStart = _dates$slice2[0],
                dateEnd = _dates$slice2[1];

            this.dateStart = dateStart || (0, _util.initTimeDate)();
            this.dateEnd = dateEnd || (0, _util.initTimeDate)();
        }
    },
    methods: {
        panelLabelConfig: function panelLabelConfig(date) {
            var locale = this.t('i.locale');
            var datePanelLabel = this.t('i.datepicker.datePanelLabel');

            var _formatDateLabels = (0, _util.formatDateLabels)(locale, datePanelLabel, date || (0, _util.initTimeDate)()),
                labels = _formatDateLabels.labels,
                separator = _formatDateLabels.separator;

            return [labels[0].label, separator, labels[1].label].join('');
        },
        handleChange: function handleChange(start, end) {
            var _this = this;

            var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            var dateStart = new Date(this.dateStart);
            var dateEnd = new Date(this.dateEnd);

            (0, _keys2.default)(start).forEach(function (type) {
                (0, _newArrowCheck3.default)(this, _this);

                dateStart['set' + String(capitalize(type))](start[type]);
            }.bind(this));

            (0, _keys2.default)(end).forEach(function (type) {
                (0, _newArrowCheck3.default)(this, _this);

                dateEnd['set' + String(capitalize(type))](end[type]);
            }.bind(this));

            if (dateEnd < dateStart) dateEnd = dateStart;

            if (emit) this.$emit('on-pick', [dateStart, dateEnd], 'time');
        },
        handleStartChange: function handleStartChange(date) {
            this.handleChange(date, {});
        },
        handleEndChange: function handleEndChange(date) {
            this.handleChange({}, date);
        },
        updateScroll: function updateScroll() {
            this.$refs.timeSpinner.updateScroll();
            this.$refs.timeSpinnerEnd.updateScroll();
        }
    },
    mounted: function mounted() {
        if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
    }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _dropdown = __webpack_require__(37);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _vClickOutsideX = __webpack_require__(35);

var _transferDom = __webpack_require__(36);

var _transferDom2 = _interopRequireDefault(_transferDom);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-dropdown';

exports.default = {
    name: 'Dropdown',
    directives: { clickOutside: _vClickOutsideX.directive, TransferDom: _transferDom2.default },
    components: { Drop: _dropdown2.default },
    props: {
        trigger: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['click', 'hover', 'custom', 'contextMenu']);
            },

            default: 'hover'
        },
        placement: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },

            default: 'bottom'
        },
        visible: {
            type: Boolean,
            default: false
        },
        transfer: {
            type: Boolean,
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
            }
        }
    },
    computed: {
        transition: function transition() {
            return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
        },
        dropdownCls: function dropdownCls() {
            return (0, _defineProperty3.default)({}, prefixCls + '-transfer', this.transfer);
        },
        relClasses: function relClasses() {
            return [prefixCls + '-rel', (0, _defineProperty3.default)({}, prefixCls + '-rel-user-select-none', this.trigger === 'contextMenu')];
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            currentVisible: this.visible
        };
    },

    watch: {
        visible: function visible(val) {
            this.currentVisible = val;
        },
        currentVisible: function currentVisible(val) {
            if (val) {
                this.$refs.drop.update();
            } else {
                this.$refs.drop.destroy();
            }
            this.$emit('on-visible-change', val);
        }
    },
    methods: {
        handleClick: function handleClick() {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'click') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },
        handleRightClick: function handleRightClick() {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'contextMenu') {
                return false;
            }
            this.currentVisible = !this.currentVisible;
        },
        handleMouseenter: function handleMouseenter() {
            var _this = this;

            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'hover') {
                return false;
            }
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);

                this.currentVisible = true;
            }.bind(this), 250);
        },
        handleMouseleave: function handleMouseleave() {
            var _this2 = this;

            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'hover') {
                return false;
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    this.currentVisible = false;
                }.bind(this), 150);
            }
        },
        onClickoutside: function onClickoutside(e) {
            this.handleClose();
            this.handleRightClose();
            if (this.currentVisible) this.$emit('on-clickoutside', e);
        },
        handleClose: function handleClose() {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'click') {
                return false;
            }
            this.currentVisible = false;
        },
        handleRightClose: function handleRightClose() {
            if (this.trigger === 'custom') return false;
            if (this.trigger !== 'contextMenu') {
                return false;
            }
            this.currentVisible = false;
        },
        hasParent: function hasParent() {
            var $parent = (0, _assist.findComponentUpward)(this, 'Dropdown');
            if ($parent) {
                return $parent;
            } else {
                return false;
            }
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.$on('on-click', function (key) {
            (0, _newArrowCheck3.default)(this, _this3);

            var $parent = this.hasParent();
            if ($parent) $parent.$emit('on-click', key);
        }.bind(this));
        this.$on('on-hover-click', function () {
            (0, _newArrowCheck3.default)(this, _this3);

            var $parent = this.hasParent();
            if ($parent) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this3);

                    if (this.trigger === 'custom') return false;
                    this.currentVisible = false;
                }.bind(this));
                $parent.$emit('on-hover-click');
            } else {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this3);

                    if (this.trigger === 'custom') return false;
                    this.currentVisible = false;
                }.bind(this));
            }
        }.bind(this));
        this.$on('on-haschild-click', function () {
            (0, _newArrowCheck3.default)(this, _this3);

            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this3);

                if (this.trigger === 'custom') return false;
                this.currentVisible = true;
            }.bind(this));
            var $parent = this.hasParent();
            if ($parent) $parent.$emit('on-haschild-click');
        }.bind(this));
    }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'DropdownMenu'
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-dropdown-item';
exports.default = {
    name: 'DropdownItem',
    props: {
        name: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        divided: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-selected', this.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-divided', this.divided), _ref)];
        }
    },
    methods: {
        handleClick: function handleClick() {
            var _this = this;

            var $parent = (0, _assist.findComponentUpward)(this, 'Dropdown');
            var hasChildren = this.$parent && this.$parent.$options.name === 'Dropdown';

            if (this.disabled) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    $parent.currentVisible = true;
                }.bind(this));
            } else if (hasChildren) {
                this.$parent.$emit('on-haschild-click');
            } else {
                if ($parent && $parent.$options.name === 'Dropdown') {
                    $parent.$emit('on-hover-click');
                }
            }
            $parent.$emit('on-click', this.name);
        }
    }
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(3);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-radio';

exports.default = {
    name: 'Radio',
    mixins: [_emitter2.default],
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        name: {
            type: String
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            group: false,
            groupName: this.name,
            parent: (0, _assist.findComponentUpward)(this, 'RadioGroup'),
            focusWrapper: false,
            focusInner: false
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-group-item', this.group), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-checked', this.currentValue), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-focus', this.focusWrapper), _ref)];
        },
        radioClasses: function radioClasses() {
            var _ref2;

            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-checked', this.currentValue), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), _ref2)];
        },
        innerClasses: function innerClasses() {
            return [prefixCls + '-inner', (0, _defineProperty3.default)({}, prefixCls + '-focus', this.focusInner)];
        },
        inputClasses: function inputClasses() {
            return prefixCls + '-input';
        }
    },
    mounted: function mounted() {
        if (this.parent) {
            this.group = true;
            if (this.name && this.name !== this.parent.name) {
                if (console.warn) {
                    console.warn('[iview] Name does not match Radio Group name.');
                }
            } else {
                this.groupName = this.parent.name;
            }
        }

        if (this.group) {
            this.parent.updateValue();
        } else {
            this.updateValue();
        }
    },

    methods: {
        change: function change(event) {
            if (this.disabled) {
                return false;
            }

            var checked = event.target.checked;
            this.currentValue = checked;

            var value = checked ? this.trueValue : this.falseValue;
            this.$emit('input', value);

            if (this.group) {
                if (this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }
            } else {
                this.$emit('on-change', value);
                this.dispatch('FormItem', 'on-form-change', value);
            }
        },
        updateValue: function updateValue() {
            this.currentValue = this.value === this.trueValue;
        },
        onBlur: function onBlur() {
            this.focusWrapper = false;
            this.focusInner = false;
        },
        onFocus: function onFocus() {
            if (this.group && this.parent.type === 'button') {
                this.focusWrapper = true;
            } else {
                this.focusInner = true;
            }
        }
    },
    watch: {
        value: function value(val) {
            if (val === this.trueValue || val === this.falseValue) {
                this.updateValue();
            } else {
                throw 'Value should be trueValue or falseValue.';
            }
        }
    }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _assist = __webpack_require__(3);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-radio-group';

var seed = 0;
var now = Date.now();
var getUuid = function () {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return 'ivuRadioGroup_' + String(now) + '_' + seed++;
}.bind(undefined);

exports.default = {
    name: 'RadioGroup',
    mixins: [_emitter2.default],
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['button']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: getUuid
        }
    },
    data: function data() {
        return {
            currentValue: this.value,
            childrens: []
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, 'ivu-radio-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.type), !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-vertical', this.vertical), _ref)];
        }
    },
    mounted: function mounted() {
        this.updateValue();
    },

    methods: {
        updateValue: function updateValue() {
            var _this = this;

            this.childrens = (0, _assist.findComponentsDownward)(this, 'Radio');
            if (this.childrens) {
                this.childrens.forEach(function (child) {
                    (0, _newArrowCheck3.default)(this, _this);

                    child.currentValue = this.currentValue === child.label;
                    child.group = true;
                }.bind(this));
            }
        },
        change: function change(data) {
            this.currentValue = data.value;
            this.updateValue();
            this.$emit('input', data.value);
            this.$emit('on-change', data.value);
            this.dispatch('FormItem', 'on-form-change', data.value);
        }
    },
    watch: {
        value: function value() {
            var _this2 = this;

            if (this.currentValue !== this.value) {
                this.currentValue = this.value;
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this2);

                    this.updateValue();
                }.bind(this));
            }
        }
    }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assist = __webpack_require__(3);

var _mixinsScrollbar = __webpack_require__(246);

var _mixinsScrollbar2 = _interopRequireDefault(_mixinsScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-spin';

exports.default = {
    name: 'Spin',
    mixins: [_mixinsScrollbar2.default],
    props: {
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        fix: {
            type: Boolean,
            default: false
        },
        fullscreen: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showText: false,

            visible: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-fix', this.fix), (0, _defineProperty3.default)(_ref, prefixCls + '-show-text', this.showText), (0, _defineProperty3.default)(_ref, prefixCls + '-fullscreen', this.fullscreen), _ref)];
        },
        mainClasses: function mainClasses() {
            return prefixCls + '-main';
        },
        dotClasses: function dotClasses() {
            return prefixCls + '-dot';
        },
        textClasses: function textClasses() {
            return prefixCls + '-text';
        },
        fullscreenVisible: function fullscreenVisible() {
            if (this.fullscreen) {
                return this.visible;
            } else {
                return true;
            }
        }
    },
    watch: {
        visible: function visible(val) {
            if (val) {
                this.addScrollEffect();
            } else {
                this.removeScrollEffect();
            }
        }
    },
    mounted: function mounted() {
        this.showText = this.$slots.default !== undefined;
    }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _typeof2 = __webpack_require__(34);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _assist = __webpack_require__(3);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _time = __webpack_require__(250);

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;


var prefixCls = 'ivu-time';

exports.default = {
    name: 'Time',
    mixins: [_locale2.default],
    props: {
        time: {
            type: [Number, Date, String],
            required: true
        },
        type: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['relative', 'date', 'datetime']);
            },

            default: 'relative'
        },
        hash: {
            type: String,
            default: ''
        },
        interval: {
            type: Number,
            default: 60
        }
    },
    data: function data() {
        return {
            date: ''
        };
    },

    computed: {
        classes: function classes() {
            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-with-hash', this.hash)];
        }
    },
    methods: {
        handleClick: function handleClick() {
            if (this.hash !== '') window.location.hash = this.hash;
        },
        setTime: function setTime() {
            var type = (0, _typeof3.default)(this.time);
            var time = void 0;

            if (type === 'number') {
                var timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000;
                time = new Date(timestamp).getTime();
            } else if (type === 'object') {
                time = this.time.getTime();
            } else if (type === 'string') {
                time = new Date(this.time).getTime();
            }

            if (this.type === 'relative') {
                this.date = (0, _time2.default)(time, this.t);
            } else {
                var date = new Date(this.time);
                var year = date.getFullYear();
                var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

                if (this.type === 'datetime') {
                    this.date = String(year) + '-' + String(month) + '-' + String(day) + ' ' + String(hour) + ':' + String(minute) + ':' + String(second);
                } else if (this.type === 'date') {
                    this.date = String(year) + '-' + String(month) + '-' + String(day);
                }
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.setTime();
        if (isServer) return;
        this.timer = setInterval(function () {
            (0, _newArrowCheck3.default)(this, _this);

            this.setTime();
        }.bind(this), 1000 * this.interval);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.timer) clearInterval(this.timer);
    }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFinite = __webpack_require__(86);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _stringify = __webpack_require__(94);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(21);

var _extends4 = _interopRequireDefault(_extends3);

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _dropdown = __webpack_require__(37);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _vClickOutsideX = __webpack_require__(35);

var _transferDom = __webpack_require__(36);

var _transferDom2 = _interopRequireDefault(_transferDom);

var _assist = __webpack_require__(3);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

var _selectHead = __webpack_require__(254);

var _selectHead2 = _interopRequireDefault(_selectHead);

var _functionalOptions = __webpack_require__(256);

var _functionalOptions2 = _interopRequireDefault(_functionalOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-select';
var optionRegexp = /^i-option$|^Option$/i;
var optionGroupRegexp = /option-?group/i;

var findChild = function (instance, checkFn) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var match = checkFn(instance);
    if (match) return instance;
    for (var i = 0, l = instance.$children.length; i < l; i++) {
        var child = instance.$children[i];
        match = findChild(child, checkFn);
        if (match) return match;
    }
}.bind(undefined);

var findOptionsInVNode = function (node) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var opts = node.componentOptions;
    if (opts && opts.tag.match(optionRegexp)) return [node];
    if (!node.children && (!opts || !opts.children)) return [];
    var children = [].concat((0, _toConsumableArray3.default)(node.children || []), (0, _toConsumableArray3.default)(opts && opts.children || []));
    var options = children.reduce(function (arr, el) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return [].concat((0, _toConsumableArray3.default)(arr), (0, _toConsumableArray3.default)(findOptionsInVNode(el)));
    }.bind(undefined), []).filter(Boolean);
    return options.length > 0 ? options : [];
}.bind(undefined);

var extractOptions = function (options) {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return options.reduce(function (options, slotEntry) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        return options.concat(findOptionsInVNode(slotEntry));
    }.bind(undefined), []);
}.bind(undefined);

var applyProp = function (node, propName, value) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    return (0, _extends4.default)({}, node, {
        componentOptions: (0, _extends4.default)({}, node.componentOptions, {
            propsData: (0, _extends4.default)({}, node.componentOptions.propsData, (0, _defineProperty3.default)({}, propName, value))
        })
    });
}.bind(undefined);

var getNestedProperty = function (obj, path) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var keys = path.split('.');
    return keys.reduce(function (o, key) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return o && o[key] || null;
    }.bind(undefined), obj);
}.bind(undefined);

var getOptionLabel = function (option) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    if (option.componentOptions.propsData.label) return option.componentOptions.propsData.label;
    var textContent = (option.componentOptions.children || []).reduce(function (str, child) {
        (0, _newArrowCheck3.default)(undefined, undefined);
        return str + (child.text || '');
    }.bind(undefined), '');
    var innerHTML = getNestedProperty(option, 'data.domProps.innerHTML');
    return textContent || (typeof innerHTML === 'string' ? innerHTML : '');
}.bind(undefined);

var checkValuesNotEqual = function (value, publicValue, values) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var strValue = (0, _stringify2.default)(value);
    var strPublic = (0, _stringify2.default)(publicValue);
    var strValues = (0, _stringify2.default)(values.map(function (item) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        return item.value;
    }.bind(undefined)));
    return strValue !== strPublic || strValue !== strValues || strValues !== strPublic;
}.bind(undefined);

var ANIMATION_TIMEOUT = 300;

exports.default = {
    name: 'iSelect',
    mixins: [_emitter2.default, _locale2.default],
    components: { FunctionalOptions: _functionalOptions2.default, Drop: _dropdown2.default, SelectHead: _selectHead2.default },
    directives: { clickOutside: _vClickOutsideX.directive, TransferDom: _transferDom2.default },
    props: {
        value: {
            type: [String, Number, Array],
            default: ''
        },

        label: {
            type: [String, Number, Array],
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String
        },
        filterable: {
            type: Boolean,
            default: false
        },
        filterMethod: {
            type: Function
        },
        remoteMethod: {
            type: Function
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingText: {
            type: String
        },
        size: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
            }
        },
        labelInValue: {
            type: Boolean,
            default: false
        },
        notFoundText: {
            type: String
        },
        placement: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
            },

            default: 'bottom-start'
        },
        transfer: {
            type: Boolean,
            default: function _default() {
                return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
            }
        },

        autoComplete: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        elementId: {
            type: String
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on('on-select-selected', this.onOptionClick);

        if (!this.remote && this.selectOptions.length > 0) {
            this.values = this.getInitialValue().map(function (value) {
                (0, _newArrowCheck3.default)(this, _this);

                if (typeof value !== 'number' && !value) return null;
                return this.getOptionData(value);
            }.bind(this)).filter(Boolean);
        }

        this.checkUpdateStatus();
    },
    data: function data() {

        return {
            prefixCls: prefixCls,
            values: [],
            dropDownWidth: 0,
            visible: false,
            focusIndex: -1,
            isFocused: false,
            query: '',
            initialLabel: this.label,
            hasMouseHoverHead: false,
            slotOptions: this.$slots.default,
            caretPosition: -1,
            lastRemoteQuery: '',
            unchangedQuery: true,
            hasExpectedValue: false,
            preventRemoteCall: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-visible', this.visible), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-multiple', this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-single', !this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-show-clear', this.showCloseIcon), (0, _defineProperty3.default)(_ref, prefixCls + '-' + String(this.size), !!this.size), _ref)];
        },
        dropdownCls: function dropdownCls() {
            var _ref2;

            return _ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-dropdown-transfer', this.transfer), (0, _defineProperty3.default)(_ref2, prefixCls + '-multiple', this.multiple && this.transfer), (0, _defineProperty3.default)(_ref2, 'ivu-auto-complete', this.autoComplete), _ref2;
        },
        selectionCls: function selectionCls() {
            var _ref3;

            return _ref3 = {}, (0, _defineProperty3.default)(_ref3, prefixCls + '-selection', !this.autoComplete), (0, _defineProperty3.default)(_ref3, prefixCls + '-selection-focused', this.isFocused), _ref3;
        },
        queryStringMatchesSelectedOption: function queryStringMatchesSelectedOption() {
            var _this2 = this;

            var selectedOptions = this.values[0];
            if (!selectedOptions) return false;

            var _map = [this.query, selectedOptions.label].map(function (str) {
                (0, _newArrowCheck3.default)(this, _this2);
                return (str || '').trim();
            }.bind(this)),
                _map2 = (0, _slicedToArray3.default)(_map, 2),
                query = _map2[0],
                label = _map2[1];

            return !this.multiple && this.unchangedQuery && query === label;
        },
        localeNotFoundText: function localeNotFoundText() {
            if (typeof this.notFoundText === 'undefined') {
                return this.t('i.select.noMatch');
            } else {
                return this.notFoundText;
            }
        },
        localeLoadingText: function localeLoadingText() {
            if (typeof this.loadingText === 'undefined') {
                return this.t('i.select.loading');
            } else {
                return this.loadingText;
            }
        },
        transitionName: function transitionName() {
            return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
        },
        dropVisible: function dropVisible() {
            var status = true;
            var noOptions = !this.selectOptions || this.selectOptions.length === 0;
            if (!this.loading && this.remote && this.query === '' && noOptions) status = false;

            if (this.autoComplete && noOptions) status = false;

            return this.visible && status;
        },
        showNotFoundLabel: function showNotFoundLabel() {
            var loading = this.loading,
                remote = this.remote,
                selectOptions = this.selectOptions;

            return selectOptions && selectOptions.length === 0 && (!remote || remote && !loading);
        },
        publicValue: function publicValue() {
            var _this3 = this;

            if (this.labelInValue) {
                return this.multiple ? this.values : this.values[0];
            } else {
                return this.multiple ? this.values.map(function (option) {
                    (0, _newArrowCheck3.default)(this, _this3);
                    return option.value;
                }.bind(this)) : (this.values[0] || {}).value;
            }
        },
        canBeCleared: function canBeCleared() {
            var uiStateMatch = this.hasMouseHoverHead || this.active;
            var qualifiesForClear = !this.multiple && !this.disabled && this.clearable;
            return uiStateMatch && qualifiesForClear && this.reset;
        },
        selectOptions: function selectOptions() {
            var _this4 = this;

            var selectOptions = [];
            var slotOptions = this.slotOptions || [];
            var optionCounter = -1;
            var currentIndex = this.focusIndex;
            var selectedValues = this.values.filter(Boolean).map(function (_ref4) {
                var value = _ref4.value;
                (0, _newArrowCheck3.default)(this, _this4);
                return value;
            }.bind(this));
            if (this.autoComplete) {
                var copyChildren = function (node, fn) {
                    (0, _newArrowCheck3.default)(this, _this4);

                    return (0, _extends4.default)({}, node, {
                        children: (node.children || []).map(fn).map(function (child) {
                            (0, _newArrowCheck3.default)(this, _this4);
                            return copyChildren(child, fn);
                        }.bind(this))
                    });
                }.bind(this);
                var autoCompleteOptions = extractOptions(slotOptions);
                var selectedSlotOption = autoCompleteOptions[currentIndex];

                return slotOptions.map(function (node) {
                    (0, _newArrowCheck3.default)(this, _this4);

                    if (node === selectedSlotOption || getNestedProperty(node, 'componentOptions.propsData.value') === this.value) return applyProp(node, 'isFocused', true);
                    return copyChildren(node, function (child) {
                        (0, _newArrowCheck3.default)(this, _this4);

                        if (child !== selectedSlotOption) return child;
                        return applyProp(child, 'isFocused', true);
                    }.bind(this));
                }.bind(this));
            }

            var hasDefaultSelected = slotOptions.some(function (option) {
                (0, _newArrowCheck3.default)(this, _this4);
                return this.query === option.key;
            }.bind(this));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(slotOptions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;


                    var cOptions = option.componentOptions;
                    if (!cOptions) continue;
                    if (cOptions.tag.match(optionGroupRegexp)) {
                        var children = cOptions.children;

                        if (this.filterable) {
                            children = children.filter(function (_ref5) {
                                var componentOptions = _ref5.componentOptions;
                                (0, _newArrowCheck3.default)(this, _this4);
                                return this.validateOption(componentOptions);
                            }.bind(this));
                        }

                        cOptions.children = children.map(function (opt) {
                            (0, _newArrowCheck3.default)(this, _this4);

                            optionCounter = optionCounter + 1;
                            return this.processOption(opt, selectedValues, optionCounter === currentIndex);
                        }.bind(this));

                        if (cOptions.children.length > 0) selectOptions.push((0, _extends4.default)({}, option));
                    } else {
                        if (!hasDefaultSelected) {
                            var optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option;
                            if (!optionPassesFilter) continue;
                        }

                        optionCounter = optionCounter + 1;
                        selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return selectOptions;
        },
        flatOptions: function flatOptions() {
            return extractOptions(this.selectOptions);
        },
        selectTabindex: function selectTabindex() {
            return this.disabled || this.filterable ? -1 : 0;
        },
        remote: function remote() {
            return typeof this.remoteMethod === 'function';
        }
    },
    methods: {
        setQuery: function setQuery(query) {
            if (query) {
                this.onQueryChange(query);
                return;
            }
            if (query === null) {
                this.onQueryChange('');
                this.values = [];
            }
        },
        clearSingleSelect: function clearSingleSelect() {
            this.$emit('on-clear');
            this.hideMenu();
            if (this.clearable) this.reset();
        },
        getOptionData: function getOptionData(value) {
            var _this5 = this;

            var option = this.flatOptions.find(function (_ref6) {
                var componentOptions = _ref6.componentOptions;
                (0, _newArrowCheck3.default)(this, _this5);
                return componentOptions.propsData.value === value;
            }.bind(this));
            if (!option) return null;
            var label = getOptionLabel(option);
            return {
                value: value,
                label: label
            };
        },
        getInitialValue: function getInitialValue() {
            var _this6 = this;

            var multiple = this.multiple,
                remote = this.remote,
                value = this.value;

            var initialValue = Array.isArray(value) ? value : [value];
            if (!multiple && (typeof initialValue[0] === 'undefined' || String(initialValue[0]).trim() === '' && !(0, _isFinite2.default)(initialValue[0]))) initialValue = [];
            if (remote && !multiple && value) {
                var data = this.getOptionData(value);
                this.query = data ? data.label : String(value);
            }
            return initialValue.filter(function (item) {
                (0, _newArrowCheck3.default)(this, _this6);

                return Boolean(item) || item === 0;
            }.bind(this));
        },
        processOption: function processOption(option, values, isFocused) {
            if (!option.componentOptions) return option;
            var optionValue = option.componentOptions.propsData.value;
            var disabled = option.componentOptions.propsData.disabled;
            var isSelected = values.includes(optionValue);

            var propsData = (0, _extends4.default)({}, option.componentOptions.propsData, {
                selected: isSelected,
                isFocused: isFocused,
                disabled: typeof disabled === 'undefined' ? false : disabled !== false
            });

            return (0, _extends4.default)({}, option, {
                componentOptions: (0, _extends4.default)({}, option.componentOptions, {
                    propsData: propsData
                })
            });
        },
        validateOption: function validateOption(_ref7) {
            var _this7 = this;

            var children = _ref7.children,
                elm = _ref7.elm,
                propsData = _ref7.propsData;

            if (this.queryStringMatchesSelectedOption) return true;

            var value = propsData.value;
            var label = propsData.label || '';
            var textContent = elm && elm.textContent || (children || []).reduce(function (str, node) {
                (0, _newArrowCheck3.default)(this, _this7);

                var nodeText = node.elm ? node.elm.textContent : node.text;
                return String(str) + ' ' + String(nodeText);
            }.bind(this), '') || '';
            var stringValues = (0, _stringify2.default)([value, label, textContent]);
            var query = this.query.toLowerCase().trim();
            return stringValues.toLowerCase().includes(query);
        },
        toggleMenu: function toggleMenu(e, force) {
            if (this.disabled) {
                return false;
            }

            this.visible = typeof force !== 'undefined' ? force : !this.visible;
            if (this.visible) {
                this.dropDownWidth = this.$el.getBoundingClientRect().width;
                this.broadcast('Drop', 'on-update-popper');
            }
        },
        hideMenu: function hideMenu() {
            var _this8 = this;

            this.toggleMenu(null, false);
            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this8);
                return this.unchangedQuery = true;
            }.bind(this), ANIMATION_TIMEOUT);
        },
        onClickOutside: function onClickOutside(event) {
            var _this9 = this;

            if (this.visible) {
                if (event.type === 'mousedown') {
                    event.preventDefault();
                    return;
                }

                if (this.transfer) {
                    var $el = this.$refs.dropdown.$el;

                    if ($el === event.target || $el.contains(event.target)) {
                        return;
                    }
                }

                if (this.filterable) {
                    var input = this.$el.querySelector('input[type="text"]');
                    this.caretPosition = input.selectionStart;
                    this.$nextTick(function () {
                        (0, _newArrowCheck3.default)(this, _this9);

                        var caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition;
                        input.setSelectionRange(caretPosition, caretPosition);
                    }.bind(this));
                }

                if (!this.autoComplete) event.stopPropagation();
                event.preventDefault();
                this.hideMenu();
                this.isFocused = true;
            } else {
                this.caretPosition = -1;
                this.isFocused = false;
            }
        },
        reset: function reset() {
            this.query = '';
            this.focusIndex = -1;
            this.unchangedQuery = true;
            this.values = [];
        },
        handleKeydown: function handleKeydown(e) {
            if (e.key === 'Backspace') {
                return;
            }

            if (this.visible) {
                e.preventDefault();
                if (e.key === 'Tab') {
                    e.stopPropagation();
                }

                if (e.key === 'Escape') {
                    e.stopPropagation();
                    this.hideMenu();
                }

                if (e.key === 'ArrowUp') {
                    this.navigateOptions(-1);
                }

                if (e.key === 'ArrowDown') {
                    this.navigateOptions(1);
                }

                if (e.key === 'Enter') {
                    if (this.focusIndex === -1) return this.hideMenu();
                    var optionComponent = this.flatOptions[this.focusIndex];
                    var option = this.getOptionData(optionComponent.componentOptions.propsData.value);
                    this.onOptionClick(option);
                }
            } else {
                var keysThatCanOpenSelect = ['ArrowUp', 'ArrowDown'];
                if (keysThatCanOpenSelect.includes(e.key)) this.toggleMenu(null, true);
            }
        },
        navigateOptions: function navigateOptions(direction) {
            var optionsLength = this.flatOptions.length - 1;

            var index = this.focusIndex + direction;
            if (index < 0) index = optionsLength;
            if (index > optionsLength) index = 0;

            if (direction > 0) {
                var nearestActiveOption = -1;
                for (var i = 0; i < this.flatOptions.length; i++) {
                    var optionIsActive = !this.flatOptions[i].componentOptions.propsData.disabled;
                    if (optionIsActive) nearestActiveOption = i;
                    if (nearestActiveOption >= index) break;
                }
                index = nearestActiveOption;
            } else {
                var _nearestActiveOption = this.flatOptions.length;
                for (var _i = optionsLength; _i >= 0; _i--) {
                    var _optionIsActive = !this.flatOptions[_i].componentOptions.propsData.disabled;
                    if (_optionIsActive) _nearestActiveOption = _i;
                    if (_nearestActiveOption <= index) break;
                }
                index = _nearestActiveOption;
            }

            this.focusIndex = index;
        },
        onOptionClick: function onOptionClick(option) {
            var _this10 = this;

            if (this.multiple) {
                if (this.remote) this.lastRemoteQuery = this.lastRemoteQuery || this.query;else this.lastRemoteQuery = '';

                var valueIsSelected = this.values.find(function (_ref8) {
                    var value = _ref8.value;
                    (0, _newArrowCheck3.default)(this, _this10);
                    return value === option.value;
                }.bind(this));
                if (valueIsSelected) {
                    this.values = this.values.filter(function (_ref9) {
                        var value = _ref9.value;
                        (0, _newArrowCheck3.default)(this, _this10);
                        return value !== option.value;
                    }.bind(this));
                } else {
                    this.values = this.values.concat(option);
                }

                this.isFocused = true;
            } else {
                this.query = String(option.label).trim();
                this.values = [option];
                this.lastRemoteQuery = '';
                this.hideMenu();
            }

            this.focusIndex = this.flatOptions.findIndex(function (opt) {
                (0, _newArrowCheck3.default)(this, _this10);

                if (!opt || !opt.componentOptions) return false;
                return opt.componentOptions.propsData.value === option.value;
            }.bind(this));

            if (this.filterable) {
                var inputField = this.$el.querySelector('input[type="text"]');
                if (!this.autoComplete) this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this10);
                    return inputField.focus();
                }.bind(this));
            }
            this.broadcast('Drop', 'on-update-popper');
        },
        onQueryChange: function onQueryChange(query) {
            if (query.length > 0 && query !== this.query) this.visible = true;
            this.query = query;
            this.unchangedQuery = this.visible;
        },
        toggleHeaderFocus: function toggleHeaderFocus(_ref10) {
            var type = _ref10.type;

            if (this.disabled) {
                return;
            }
            this.isFocused = type === 'focus';
        },
        updateSlotOptions: function updateSlotOptions() {
            this.slotOptions = this.$slots.default;
        },
        checkUpdateStatus: function checkUpdateStatus() {
            if (this.getInitialValue().length > 0 && this.selectOptions.length === 0) {
                this.hasExpectedValue = true;
            }
        }
    },
    watch: {
        value: function value(_value) {
            var _this11 = this;

            var getInitialValue = this.getInitialValue,
                getOptionData = this.getOptionData,
                publicValue = this.publicValue,
                values = this.values;


            this.checkUpdateStatus();

            if (_value === '') this.values = [];else if (checkValuesNotEqual(_value, publicValue, values)) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this11);
                    return this.values = getInitialValue().map(getOptionData).filter(Boolean);
                }.bind(this));
            }
        },
        values: function values(now, before) {
            var _this12 = this;

            var newValue = (0, _stringify2.default)(now);
            var oldValue = (0, _stringify2.default)(before);

            var vModelValue = this.publicValue && this.labelInValue ? this.multiple ? this.publicValue.map(function (_ref11) {
                var value = _ref11.value;
                (0, _newArrowCheck3.default)(this, _this12);
                return value;
            }.bind(this)) : this.publicValue.value : this.publicValue;
            var shouldEmitInput = newValue !== oldValue && vModelValue !== this.value;
            if (shouldEmitInput) {
                this.$emit('input', vModelValue);
                this.$emit('on-change', this.publicValue);
                this.dispatch('FormItem', 'on-form-change', this.publicValue);
            }
        },
        query: function query(_query) {
            var _this13 = this;

            this.$emit('on-query-change', _query);
            var remoteMethod = this.remoteMethod,
                lastRemoteQuery = this.lastRemoteQuery;

            var hasValidQuery = _query !== '' && (_query !== lastRemoteQuery || !lastRemoteQuery);
            var shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall;
            this.preventRemoteCall = false;

            if (shouldCallRemoteMethod) {
                this.focusIndex = -1;
                var promise = this.remoteMethod(_query);
                this.initialLabel = '';
                if (promise && promise.then) {
                    promise.then(function (options) {
                        (0, _newArrowCheck3.default)(this, _this13);

                        if (options) this.options = options;
                    }.bind(this));
                }
            }
            if (_query !== '' && this.remote) this.lastRemoteQuery = _query;
        },
        loading: function loading(state) {
            if (state === false) {
                this.updateSlotOptions();
            }
        },
        isFocused: function isFocused(focused) {
            var el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el;
            el[this.isFocused ? 'focus' : 'blur']();

            var _values = (0, _slicedToArray3.default)(this.values, 1),
                selectedOption = _values[0];

            if (selectedOption && this.filterable && !this.multiple && !focused) {
                var selectedLabel = String(selectedOption.label || selectedOption.value).trim();
                if (selectedLabel && this.query !== selectedLabel) {
                    this.preventRemoteCall = true;
                    this.query = selectedLabel;
                }
            }
        },
        focusIndex: function focusIndex(index) {
            var _this14 = this;

            if (index < 0 || this.autoComplete) return;

            var optionValue = this.flatOptions[index].componentOptions.propsData.value;
            var optionInstance = findChild(this, function (_ref12) {
                var $options = _ref12.$options;
                (0, _newArrowCheck3.default)(this, _this14);

                return $options.componentName === 'select-item' && $options.propsData.value === optionValue;
            }.bind(this));

            var bottomOverflowDistance = optionInstance.$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
            var topOverflowDistance = optionInstance.$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;
            if (bottomOverflowDistance > 0) {
                this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
            }
            if (topOverflowDistance < 0) {
                this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
            }
        },
        dropVisible: function dropVisible(open) {
            this.broadcast('Drop', open ? 'on-update-popper' : 'on-destroy-popper');
        },
        selectOptions: function selectOptions() {
            if (this.hasExpectedValue && this.selectOptions.length > 0) {
                if (this.values.length === 0) {
                    this.values = this.getInitialValue();
                }
                this.values = this.values.map(this.getOptionData).filter(Boolean);
                this.hasExpectedValue = false;
            }

            if (this.slotOptions && this.slotOptions.length === 0) {
                this.query = '';
            }
        },
        visible: function visible(state) {
            this.$emit('on-open-change', state);
        }
    }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _icon = __webpack_require__(69);

var _icon2 = _interopRequireDefault(_icon);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(7);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-select';

exports.default = {
    name: 'iSelectHead',
    mixins: [_emitter2.default, _locale2.default],
    components: { Icon: _icon2.default },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        filterable: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        remote: {
            type: Boolean,
            default: false
        },
        initialLabel: {
            type: [String, Number, Array]
        },
        values: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        clearable: {
            type: [Function, Boolean],
            default: false
        },
        inputElementId: {
            type: String
        },
        placeholder: {
            type: String
        },
        queryProp: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            query: '',
            inputLength: 20,
            remoteInitialLabel: this.initialLabel,
            preventRemoteCall: false
        };
    },

    computed: {
        singleDisplayClasses: function singleDisplayClasses() {
            var _ref;

            var filterable = this.filterable,
                multiple = this.multiple,
                showPlaceholder = this.showPlaceholder;

            return [(_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-placeholder', showPlaceholder && !filterable), (0, _defineProperty3.default)(_ref, prefixCls + '-selected-value', !showPlaceholder && !multiple && !filterable), _ref)];
        },
        singleDisplayValue: function singleDisplayValue() {
            if (this.multiple && this.values.length > 0 || this.filterable) return '';
            return '' + String(this.selectedSingle) || this.localePlaceholder;
        },
        showPlaceholder: function showPlaceholder() {
            var status = false;
            if (!this.multiple) {
                var value = this.values[0];
                if (typeof value === 'undefined' || String(value).trim() === '') {
                    status = !this.remoteInitialLabel;
                }
            } else {
                if (!this.values.length > 0) {
                    status = true;
                }
            }
            return status;
        },
        resetSelect: function resetSelect() {
            return !this.showPlaceholder && this.clearable;
        },
        inputStyle: function inputStyle() {
            var style = {};

            if (this.multiple) {
                if (this.showPlaceholder) {
                    style.width = '100%';
                } else {
                    style.width = String(this.inputLength) + 'px';
                }
            }

            return style;
        },
        localePlaceholder: function localePlaceholder() {
            if (this.placeholder === undefined) {
                return this.t('i.select.placeholder');
            } else {
                return this.placeholder;
            }
        },
        selectedSingle: function selectedSingle() {
            var selected = this.values[0];
            return selected ? selected.label : this.remoteInitialLabel || '';
        },
        selectedMultiple: function selectedMultiple() {
            return this.multiple ? this.values : [];
        }
    },
    methods: {
        onInputFocus: function onInputFocus(e) {
            this.$emit(e.type === 'focus' ? 'on-input-focus' : 'on-input-blur');
        },
        removeTag: function removeTag(value) {
            if (this.disabled) return false;
            this.dispatch('iSelect', 'on-select-selected', value);
        },
        resetInputState: function resetInputState() {
            this.inputLength = this.$refs.input.value.length * 12 + 20;
        },
        handleInputDelete: function handleInputDelete() {
            if (this.multiple && this.selectedMultiple.length && this.query === '') {
                this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1]);
            }
        },
        onHeaderClick: function onHeaderClick(e) {
            if (this.filterable && e.target === this.$el) {
                this.$refs.input.focus();
            }
        },
        onClear: function onClear() {
            this.$emit('on-clear');
        }
    },
    watch: {
        values: function values(_ref2) {
            var _this = this;

            var _ref3 = (0, _slicedToArray3.default)(_ref2, 1),
                value = _ref3[0];

            if (!this.filterable) return;
            this.preventRemoteCall = true;
            if (this.multiple) {
                this.query = '';
                this.preventRemoteCall = false;
                return;
            }

            if (typeof value === 'undefined' || value === '' || value === null) this.query = '';else this.query = value.label;
            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.preventRemoteCall = false;
            }.bind(this));
        },
        query: function query(val) {
            if (this.preventRemoteCall) {
                this.preventRemoteCall = false;
                return;
            }

            this.$emit('on-query-change', val);
        },
        queryProp: function queryProp(query) {
            if (query !== this.query) this.query = query;
        }
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var returnArrayFn = function () {
    (0, _newArrowCheck3.default)(undefined, undefined);
    return [];
}.bind(undefined);

exports.default = {
    props: {
        options: {
            type: Array,
            default: returnArrayFn
        },
        slotOptions: {
            type: Array,
            default: returnArrayFn
        },
        slotUpdateHook: {
            type: Function,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
            }.bind(undefined)
        }
    },
    functional: true,
    render: function render(h, _ref) {
        var props = _ref.props,
            parent = _ref.parent;

        if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook();
        return props.options;
    }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(2);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _emitter = __webpack_require__(6);

var _emitter2 = _interopRequireDefault(_emitter);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-select-item';

exports.default = {
    name: 'iOption',
    componentName: 'select-item',
    mixins: [_emitter2.default],
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        isFocused: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            searchLabel: '',
            autoComplete: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-selected', this.selected && !this.autoComplete), (0, _defineProperty3.default)(_ref, prefixCls + '-focus', this.isFocused), _ref)];
        },
        showLabel: function showLabel() {
            return this.label ? this.label : this.value;
        },
        optionLabel: function optionLabel() {
            return this.label || this.$el && this.$el.textContent;
        }
    },
    methods: {
        select: function select() {
            if (this.disabled) return false;

            this.dispatch('iSelect', 'on-select-selected', {
                value: this.value,
                label: this.optionLabel
            });
            this.$emit('on-select-selected', {
                value: this.value,
                label: this.optionLabel
            });
        }
    },
    mounted: function mounted() {
        var Select = (0, _assist.findComponentUpward)(this, 'iSelect');
        if (Select) this.autoComplete = Select.autoComplete;
    }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ivu-select-group';

exports.default = {
    name: 'OptionGroup',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            hidden: false };
    },

    methods: {
        queryChange: function queryChange() {
            var _this = this;

            this.$nextTick(function () {
                (0, _newArrowCheck3.default)(this, _this);

                var options = this.$refs.options.querySelectorAll('.ivu-select-item');
                var hasVisibleOption = false;
                for (var i = 0; i < options.length; i++) {
                    if (options[i].style.display !== 'none') {
                        hasVisibleOption = true;
                        break;
                    }
                }
                this.hidden = !hasVisibleOption;
            }.bind(this));
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$on('on-query-change', function () {
            (0, _newArrowCheck3.default)(this, _this2);

            this.queryChange();
            return true;
        }.bind(this));
    }
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _keys = __webpack_require__(29);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _button = __webpack_require__(133);

var _button2 = _interopRequireDefault(_button);

var _colorPicker = __webpack_require__(164);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _datePicker = __webpack_require__(197);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _dropdown = __webpack_require__(230);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _input = __webpack_require__(237);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(238);

var _radio2 = _interopRequireDefault(_radio);

var _spin = __webpack_require__(243);

var _spin2 = _interopRequireDefault(_spin);

var _time = __webpack_require__(248);

var _time2 = _interopRequireDefault(_time);

var _select = __webpack_require__(252);

var _index = __webpack_require__(92);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
    Button: _button2.default,
    ButtonGroup: _button2.default.Group,
    ColorPicker: _colorPicker2.default,
    DatePicker: _datePicker2.default,
    Dropdown: _dropdown2.default,
    DropdownItem: _dropdown2.default.Item,
    DropdownMenu: _dropdown2.default.Menu,
    Input: _input2.default,
    Option: _select.Option,
    Radio: _radio2.default,
    RadioGroup: _radio2.default.Group,
    Select: _select.Select,
    Spin: _spin2.default,
    Time: _time2.default
};

var iview = (0, _extends3.default)({}, components, {
    iButton: _button2.default,
    iInput: _input2.default,
    iOption: _select.Option,
    iSelect: _select.Select,
    iTime: _time2.default
});

var install = function install(Vue) {
    var _this = this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) return;
    _index2.default.use(opts.locale);
    _index2.default.i18n(opts.i18n);

    (0, _keys2.default)(iview).forEach(function (key) {
        (0, _newArrowCheck3.default)(this, _this);

        Vue.component(key, iview[key]);
    }.bind(this));

    Vue.prototype.$IVIEW = {
        size: opts.size || '',
        transfer: 'transfer' in opts ? opts.transfer : ''
    };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var API = (0, _extends3.default)({
    version: '3.1.2',
    locale: _index2.default.use,
    i18n: _index2.default.i18n,
    install: install
}, components);

API.lang = function (code) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) _index2.default.use(langObject);else console.log('The ' + String(code) + ' language pack is not loaded.');
}.bind(undefined);

module.exports.default = module.exports = API;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
module.exports = __webpack_require__(4).Object.keys;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16);
var $keys = __webpack_require__(24);

__webpack_require__(64)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(128);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(132) });


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(12);
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(48);
var pIE = __webpack_require__(32);
var toObject = __webpack_require__(16);
var IObject = __webpack_require__(62);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(162);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_button2.default.Group = _buttonGroup2.default;
exports.default = _button2.default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(12), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { class: _vm.classes, style: _vm.styles, on: { "click": _vm.handleClick } });
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(33);
module.exports = __webpack_require__(146);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(140);
var step = __webpack_require__(141);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(71)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(73);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(24);

module.exports = __webpack_require__(12) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(10).document;
module.exports = document && document.documentElement;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var defined = __webpack_require__(40);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var get = __webpack_require__(75);
module.exports = __webpack_require__(4).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(34);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        },
        target: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['_blank', '_self', '_parent', '_top']);
            },

            default: '_self'
        }
    },
    computed: {
        linkUrl: function linkUrl() {
            var type = (0, _typeof3.default)(this.to);
            return type === 'string' ? this.to : null;
        }
    },
    methods: {
        handleClick: function handleClick() {
            var new_window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (new_window) {
                window.open(this.to);
            } else {
                var isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        },
        handleCheckClick: function handleCheckClick(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.to) {
                if (this.target === '_blank') {
                    return false;
                } else {
                    event.preventDefault();
                    this.handleClick(new_window);
                }
            }
        }
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(52);
module.exports = __webpack_require__(54).f('iterator');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(10);
var has = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(12);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(72);
var META = __webpack_require__(153).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(44);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(31);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(54);
var wksDefine = __webpack_require__(55);
var enumKeys = __webpack_require__(154);
var isArray = __webpack_require__(155);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(25);
var toObject = __webpack_require__(16);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(46);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(73);
var gOPNExt = __webpack_require__(156);
var $GOPD = __webpack_require__(157);
var $GOPS = __webpack_require__(48);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(24);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(32).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(30)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(31)('meta');
var isObject = __webpack_require__(25);
var has = __webpack_require__(13);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(24);
var gOPS = __webpack_require__(48);
var pIE = __webpack_require__(32);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(41);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(77).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(32);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(46);
var has = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(66);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(12) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 158 */
/***/ (function(module, exports) {



/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('asyncIterator');


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('observable');


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.to ? _c('a', { class: _vm.classes, attrs: { "disabled": _vm.disabled, "href": _vm.linkUrl, "target": _vm.target }, on: { "click": [function ($event) {
        if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) {
          return null;
        }return _vm.handleClickLink($event, false);
      }, function ($event) {
        if (!$event.ctrlKey) {
          return null;
        }return _vm.handleClickLink($event, true);
      }, function ($event) {
        if (!$event.metaKey) {
          return null;
        }return _vm.handleClickLink($event, true);
      }] } }, [_vm.loading ? _c('Icon', { staticClass: "ivu-load-loop", attrs: { "type": "ios-loading" } }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.customIcon) && !_vm.loading ? _c('Icon', { attrs: { "type": _vm.icon, "custom": _vm.customIcon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1) : _c('button', { class: _vm.classes, attrs: { "type": _vm.htmlType, "disabled": _vm.disabled }, on: { "click": _vm.handleClickLink } }, [_vm.loading ? _c('Icon', { staticClass: "ivu-load-loop", attrs: { "type": "ios-loading" } }) : _vm._e(), _vm._v(" "), (_vm.icon || _vm.customIcon) && !_vm.loading ? _c('Icon', { attrs: { "type": _vm.icon, "custom": _vm.customIcon } }) : _vm._e(), _vm._v(" "), _vm.showSlot ? _c('span', { ref: "slot" }, [_vm._t("default")], 2) : _vm._e()], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_592f1b56_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_592f1b56_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_592f1b56_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_592f1b56_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_592f1b56_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPicker = __webpack_require__(165);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _colorPicker2.default;

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_26180edf_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_picker_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_26180edf_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_26180edf_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_26180edf_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_picker_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_26180edf_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_picker_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "ivu-select-dropdown", class: _vm.className, style: _vm.styles }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac3e803_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommend_colors_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac3e803_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommend_colors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac3e803_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommend_colors_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_recommend_colors_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac3e803_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommend_colors_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac3e803_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_recommend_colors_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
module.exports = __webpack_require__(4).Number.isFinite;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(8);
var _isFinite = __webpack_require__(10).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "reference", attrs: { "tabindex": "0" }, on: { "click": _vm.handleClick, "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.handleEscape($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
          return null;
        }if ('button' in $event && $event.button !== 0) {
          return null;
        }return _vm.handleArrow($event, 'x', _vm.left);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
          return null;
        }if ('button' in $event && $event.button !== 2) {
          return null;
        }return _vm.handleArrow($event, 'x', _vm.right);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }return _vm.handleArrow($event, 'y', _vm.up);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }return _vm.handleArrow($event, 'y', _vm.down);
      }], "blur": _vm.blurColor, "focus": _vm.focusColor } }, [_vm._l(_vm.list, function (item, index) {
    return [_c('div', { key: item + ':' + index, class: [_vm.prefixCls + '-picker-colors-wrapper'] }, [_c('div', { attrs: { "data-color-id": index } }, [_c('div', { class: [_vm.prefixCls + '-picker-colors-wrapper-color'], style: { background: item } }), _vm._v(" "), _c('div', { ref: 'color-circle-' + index, refInFor: true, class: [_vm.prefixCls + '-picker-colors-wrapper-circle', _vm.hideClass] })])]), _vm._v(" "), _vm.lineBreak(_vm.list, index) ? _c('br') : _vm._e()];
  })], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0757ab84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_saturation_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0757ab84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_saturation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0757ab84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_saturation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_saturation_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0757ab84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_saturation_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0757ab84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_saturation_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-saturation-wrapper'], attrs: { "tabindex": "0" }, on: { "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.handleEscape($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
          return null;
        }if ('button' in $event && $event.button !== 0) {
          return null;
        }return _vm.handleLeft($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
          return null;
        }if ('button' in $event && $event.button !== 2) {
          return null;
        }return _vm.handleRight($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }return _vm.handleUp($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }return _vm.handleDown($event);
      }], "click": function click($event) {
        return _vm.$el.focus();
      } } }, [_c('div', { ref: "container", class: [_vm.prefixCls + '-saturation'], style: _vm.bgColorStyle, on: { "mousedown": _vm.handleMouseDown } }, [_c('div', { class: [_vm.prefixCls + '-saturation--white'] }), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-saturation--black'] }), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-saturation-pointer'], style: _vm.pointerStyle }, [_c('div', { class: [_vm.prefixCls + '-saturation-circle'] })])])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a42dff6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a42dff6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a42dff6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a42dff6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a42dff6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-hue'], attrs: { "tabindex": "0" }, on: { "click": function click($event) {
        return _vm.$el.focus();
      }, "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.handleEscape($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
          return null;
        }if ('button' in $event && $event.button !== 0) {
          return null;
        }return _vm.handleLeft($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
          return null;
        }if ('button' in $event && $event.button !== 2) {
          return null;
        }return _vm.handleRight($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }return _vm.handleUp($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }return _vm.handleDown($event);
      }] } }, [_c('div', { ref: "container", class: [_vm.prefixCls + '-hue-container'], on: { "mousedown": _vm.handleMouseDown, "touchmove": _vm.handleChange, "touchstart": _vm.handleChange } }, [_c('div', { class: [_vm.prefixCls + '-hue-pointer'], style: { top: 0, left: _vm.percent + "%" } }, [_c('div', { class: [_vm.prefixCls + '-hue-picker'] })])])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_be7eaa8a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_be7eaa8a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_be7eaa8a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_be7eaa8a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_be7eaa8a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-alpha'], attrs: { "tabindex": "0" }, on: { "click": function click($event) {
        return _vm.$el.focus();
      }, "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.handleEscape($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
          return null;
        }if ('button' in $event && $event.button !== 0) {
          return null;
        }return _vm.handleLeft($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
          return null;
        }if ('button' in $event && $event.button !== 2) {
          return null;
        }return _vm.handleRight($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }return _vm.handleUp($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }return _vm.handleDown($event);
      }] } }, [_c('div', { class: [_vm.prefixCls + '-alpha-checkboard-wrap'] }, [_c('div', { class: [_vm.prefixCls + '-alpha-checkerboard'] })]), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-alpha-gradient'], style: _vm.gradientStyle }), _vm._v(" "), _c('div', { ref: "container", class: [_vm.prefixCls + '-alpha-container'], on: { "mousedown": _vm.handleMouseDown, "touchmove": _vm.handleChange, "touchstart": _vm.handleChange } }, [_c('div', { class: [_vm.prefixCls + '-alpha-pointer'], style: { top: 0, left: _vm.value.a * 100 + "%" } }, [_c('div', { class: [_vm.prefixCls + '-alpha-picker'] })])])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
module.exports = __webpack_require__(4).Number.isNaN;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(8);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _maxSafeInteger = __webpack_require__(182);

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

var _minSafeInteger = __webpack_require__(185);

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

exports.default = calcTextareaHeight;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

var computedStyleCache = {};
var hiddenTextarea = void 0;

function calculateNodeStyling(node) {
    var _this = this;

    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }

    var style = window.getComputedStyle(node);

    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');

    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

    var sizingStyle = SIZING_STYLE.map(function (name) {
        (0, _newArrowCheck3.default)(this, _this);
        return String(name) + ':' + String(style.getPropertyValue(name));
    }.bind(this)).join(';');

    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };

    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }

    return nodeInfo;
}

function calcTextareaHeight(uiTextNode) {
    var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var useCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }

    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        sizingStyle = _calculateNodeStyling.sizingStyle;

    hiddenTextarea.setAttribute('style', String(sizingStyle) + ';' + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';

    var minHeight = _minSafeInteger2.default;
    var maxHeight = _maxSafeInteger2.default;
    var height = hiddenTextarea.scrollHeight;
    var overflowY = void 0;

    if (boxSizing === 'border-box') {
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        height = height - paddingSize;
    }

    if (minRows !== null || maxRows !== null) {
        hiddenTextarea.value = ' ';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }

    if (!maxRows) {
        overflowY = 'hidden';
    }

    return {
        height: String(height) + 'px',
        minHeight: String(minHeight) + 'px',
        maxHeight: String(maxHeight) + 'px',
        overflowY: overflowY
    };
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(183), __esModule: true };

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);
module.exports = 0x1fffffffffffff;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(8);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187);
module.exports = -0x1fffffffffffff;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(8);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_vm.type !== 'textarea' ? [_vm.prepend ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], class: [_vm.prefixCls + '-group-prepend'] }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _vm.clearable && _vm.currentValue ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-ios-close-circle', _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-clear', _vm.prefixCls + '-icon-normal'], on: { "click": _vm.handleClear } }) : _vm.icon ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.icon, _vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal'], on: { "click": _vm.handleIconClick } }) : _vm.search && _vm.enterButton === false ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-search", class: [_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-normal', _vm.prefixCls + '-search-icon'], on: { "click": _vm.handleSearch } }) : _vm.showSuffix ? _c('span', { staticClass: "ivu-input-suffix" }, [_vm._t("suffix", [_vm.suffix ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.suffix] }) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('transition', { attrs: { "name": "fade" } }, [!_vm.icon ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-loading ivu-load-loop", class: [_vm.prefixCls + '-icon', _vm.prefixCls + '-icon-validate'] }) : _vm._e()]), _vm._v(" "), _c('input', { ref: "input", class: _vm.inputClasses, attrs: { "id": _vm.elementId, "autocomplete": _vm.autocomplete, "spellcheck": _vm.spellcheck, "type": _vm.type, "placeholder": _vm.placeholder, "disabled": _vm.disabled, "maxlength": _vm.maxlength, "readonly": _vm.readonly, "name": _vm.name, "number": _vm.number, "autofocus": _vm.autofocus }, domProps: { "value": _vm.currentValue }, on: { "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, _vm.handleKeyup], "keypress": _vm.handleKeypress, "keydown": _vm.handleKeydown, "focus": _vm.handleFocus, "blur": _vm.handleBlur, "input": _vm.handleInput, "change": _vm.handleChange } }), _vm._v(" "), _vm.append ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.slotReady, expression: "slotReady" }], class: [_vm.prefixCls + '-group-append'] }, [_vm._t("append")], 2) : _vm.search && _vm.enterButton ? _c('div', { class: [_vm.prefixCls + '-group-append', _vm.prefixCls + '-search'], on: { "click": _vm.handleSearch } }, [_vm.enterButton === true ? _c('i', { staticClass: "ivu-icon ivu-icon-ios-search" }) : [_vm._v(_vm._s(_vm.enterButton))]], 2) : _vm.showPrefix ? _c('span', { staticClass: "ivu-input-prefix" }, [_vm._t("prefix", [_vm.prefix ? _c('i', { staticClass: "ivu-icon", class: ['ivu-icon-' + _vm.prefix] }) : _vm._e()])], 2) : _vm._e()] : _c('textarea', { ref: "textarea", class: _vm.textareaClasses, style: _vm.textareaStyles, attrs: { "id": _vm.elementId, "wrap": _vm.wrap, "autocomplete": _vm.autocomplete, "spellcheck": _vm.spellcheck, "placeholder": _vm.placeholder, "disabled": _vm.disabled, "rows": _vm.rows, "maxlength": _vm.maxlength, "readonly": _vm.readonly, "name": _vm.name, "autofocus": _vm.autofocus }, domProps: { "value": _vm.currentValue }, on: { "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleEnter($event);
      }, _vm.handleKeyup], "keypress": _vm.handleKeypress, "keydown": _vm.handleKeydown, "focus": _vm.handleFocus, "blur": _vm.handleBlur, "input": _vm.handleInput } })], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);
module.exports = __webpack_require__(4).Object.getPrototypeOf;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(16);
var $getPrototypeOf = __webpack_require__(74);

__webpack_require__(64)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lang = __webpack_require__(193);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = {
    i: {
        locale: 'zh-CN',
        select: {
            placeholder: '请选择',
            noMatch: '无匹配数据',
            loading: '加载中'
        },
        table: {
            noDataText: '暂无数据',
            noFilteredDataText: '暂无筛选结果',
            confirmFilter: '筛选',
            resetFilter: '重置',
            clearFilter: '全部'
        },
        datepicker: {
            selectDate: '选择日期',
            selectTime: '选择时间',
            startTime: '开始时间',
            endTime: '结束时间',
            clear: '清空',
            ok: '确定',
            datePanelLabel: '[yyyy年] [m月]',
            month: '月',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',
            year: '年',
            weekStartDay: '0',
            weeks: {
                sun: '日',
                mon: '一',
                tue: '二',
                wed: '三',
                thu: '四',
                fri: '五',
                sat: '六'
            },
            months: {
                m1: '1月',
                m2: '2月',
                m3: '3月',
                m4: '4月',
                m5: '5月',
                m6: '6月',
                m7: '7月',
                m8: '8月',
                m9: '9月',
                m10: '10月',
                m11: '11月',
                m12: '12月'
            }
        },
        transfer: {
            titles: {
                source: '源列表',
                target: '目的列表'
            },
            filterPlaceholder: '请输入搜索内容',
            notFoundText: '列表为空'
        },
        modal: {
            okText: '确定',
            cancelText: '取消'
        },
        poptip: {
            okText: '确定',
            cancelText: '取消'
        },
        page: {
            prev: '上一页',
            next: '下一页',
            total: '共',
            item: '条',
            items: '条',
            prev5: '向前 5 页',
            next5: '向后 5 页',
            page: '条/页',
            goto: '跳至',
            p: '页'
        },
        rate: {
            star: '星',
            stars: '星'
        },
        time: {
            before: '前',
            after: '后',
            just: '刚刚',
            seconds: '秒',
            minutes: '分钟',
            hours: '小时',
            days: '天'
        },
        tree: {
            emptyText: '暂无数据'
        }
    }
};

(0, _lang2.default)(lang);

exports.default = lang;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (lang) {
    if (!isServer) {
        if (typeof window.iview !== 'undefined') {
            if (!('langs' in iview)) {
                iview.langs = {};
            }
            iview.langs[lang.i.locale] = lang;
        }
    }
};

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

;

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _typeof2 = __webpack_require__(34);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function () {
    function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function template(string) {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (args.length === 1 && (0, _typeof3.default)(args[0]) === 'object') {
            args = args[0];
        }

        if (!args || !args.hasOwnProperty) {
            args = {};
        }

        return string.replace(RE_NARGS, function (match, prefix, i, index) {
            (0, _newArrowCheck3.default)(this, _this);

            var result = void 0;

            if (string[index - 1] === '{' && string[index + match.length] === '}') {
                return i;
            } else {
                result = hasOwn(args, i) ? args[i] : null;
                if (result === null || result === undefined) {
                    return '';
                }

                return result;
            }
        }.bind(this));
    }

    return template;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside.capture", value: _vm.handleClose, expression: "handleClose", modifiers: { "capture": true } }, { name: "click-outside", rawName: "v-click-outside:mousedown.capture", value: _vm.handleClose, expression: "handleClose", arg: "mousedown", modifiers: { "capture": true } }], class: _vm.classes }, [_c('div', { ref: "reference", class: _vm.wrapClasses, on: { "click": _vm.toggleVisible } }, [_c('input', { attrs: { "name": _vm.name, "type": "hidden" }, domProps: { "value": _vm.currentValue } }), _vm._v(" "), _c('i', { class: _vm.arrowClasses }), _vm._v(" "), _c('div', { ref: "input", class: _vm.inputClasses, attrs: { "tabindex": _vm.disabled ? undefined : 0 }, on: { "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.onTab($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.onEscape($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }return _vm.onArrow($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }return _vm.onArrow($event);
      }] } }, [_c('div', { class: [_vm.prefixCls + '-color'] }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value === '' && !_vm.visible, expression: "value === '' && !visible" }], class: [_vm.prefixCls + '-color-empty'] }, [_c('i', { class: [_vm.iconPrefixCls, _vm.iconPrefixCls + '-ios-close'] })]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value || _vm.visible, expression: "value || visible" }], style: _vm.displayedColorStyle })])])]), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "transfer-dom", rawName: "v-transfer-dom" }, { name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], ref: "drop", class: _vm.dropClasses, attrs: { "placement": _vm.placement, "data-transfer": _vm.transfer, "transfer": _vm.transfer } }, [_c('transition', { attrs: { "name": "fade" } }, [_vm.visible ? _c('div', { class: [_vm.prefixCls + '-picker'] }, [_c('div', { class: [_vm.prefixCls + '-picker-wrapper'] }, [_c('div', { class: [_vm.prefixCls + '-picker-panel'] }, [_c('Saturation', { ref: "saturation", attrs: { "focused": _vm.visible }, on: { "change": _vm.childChange }, nativeOn: { "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleFirstTab($event);
      } }, model: { value: _vm.saturationColors, callback: function callback($$v) {
        _vm.saturationColors = $$v;
      }, expression: "saturationColors" } })], 1), _vm._v(" "), _vm.hue ? _c('div', { class: [_vm.prefixCls + '-picker-hue-slider'] }, [_c('Hue', { on: { "change": _vm.childChange }, model: { value: _vm.saturationColors, callback: function callback($$v) {
        _vm.saturationColors = $$v;
      }, expression: "saturationColors" } })], 1) : _vm._e(), _vm._v(" "), _vm.alpha ? _c('div', { class: [_vm.prefixCls + '-picker-alpha-slider'] }, [_c('Alpha', { on: { "change": _vm.childChange }, model: { value: _vm.saturationColors, callback: function callback($$v) {
        _vm.saturationColors = $$v;
      }, expression: "saturationColors" } })], 1) : _vm._e(), _vm._v(" "), _vm.colors.length ? _c('recommend-colors', { class: [_vm.prefixCls + '-picker-colors'], attrs: { "list": _vm.colors }, on: { "picker-color": _vm.handleSelectColor } }) : _vm._e(), _vm._v(" "), !_vm.colors.length && _vm.recommend ? _c('recommend-colors', { class: [_vm.prefixCls + '-picker-colors'], attrs: { "list": _vm.recommendedColor }, on: { "picker-color": _vm.handleSelectColor } }) : _vm._e()], 1), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-confirm'] }, [_c('span', { class: _vm.confirmColorClasses }, [_vm.editable ? [_c('i-input', { attrs: { "value": _vm.formatColor, "size": "small" }, on: { "on-enter": _vm.handleEditColor, "on-blur": _vm.handleEditColor } })] : [_vm._v(_vm._s(_vm.formatColor))]], 2), _vm._v(" "), _c('i-button', { ref: "clear", attrs: { "tabindex": 0, "size": "small" }, on: { "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleClear($event);
      } }, nativeOn: { "click": function click($event) {
        return _vm.handleClear($event);
      }, "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.closer($event);
      } } }, [_vm._v(_vm._s(_vm.t('i.datepicker.clear')))]), _vm._v(" "), _c('i-button', { ref: "ok", attrs: { "tabindex": 0, "size": "small", "type": "primary" }, on: { "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleSuccess($event);
      } }, nativeOn: { "click": function click($event) {
        return _vm.handleSuccess($event);
      }, "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleLastTab($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.closer($event);
      }] } }, [_vm._v(_vm._s(_vm.t('i.datepicker.ok')))])], 1)]) : _vm._e()])], 1)], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = __webpack_require__(198);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _datePicker2.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _picker = __webpack_require__(199);

var _picker2 = _interopRequireDefault(_picker);

var _date = __webpack_require__(212);

var _date2 = _interopRequireDefault(_date);

var _dateRange = __webpack_require__(226);

var _dateRange2 = _interopRequireDefault(_dateRange);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'CalendarPicker',
    mixins: [_picker2.default],
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },

            default: 'date'
        }
    },
    components: { DatePickerPanel: _date2.default, RangeDatePickerPanel: _dateRange2.default },
    computed: {
        panel: function panel() {
            var isRange = this.type === 'daterange' || this.type === 'datetimerange';
            return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel';
        },
        ownPickerProps: function ownPickerProps() {
            return this.options;
        }
    }
};

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2aef7a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2aef7a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2aef7a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2aef7a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2aef7a8_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(202), __esModule: true };

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(33);
module.exports = __webpack_require__(203);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(76);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(4).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(205);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(65);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(16);
var call = __webpack_require__(206);
var isArrayIter = __webpack_require__(207);
var toLength = __webpack_require__(63);
var createProperty = __webpack_require__(208);
var getIterFn = __webpack_require__(75);

$export($export.S + $export.F * !__webpack_require__(209)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(22);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(26);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function (main) {
    'use strict';

    var fecha = {};
    var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    var twoDigits = /\d\d?/;
    var threeDigits = /\d{3}/;
    var fourDigits = /\d{4}/;
    var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var noop = function noop() {};

    function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
    }

    function monthUpdate(arrName) {
        return function (d, v, i18n) {
            var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
            if (~index) {
                d.month = index;
            }
        };
    }

    function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
            val = '0' + val;
        }
        return val;
    }

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNamesShort = shorten(monthNames, 3);
    var dayNamesShort = shorten(dayNames, 3);
    fecha.i18n = {
        dayNamesShort: dayNamesShort,
        dayNames: dayNames,
        monthNamesShort: monthNamesShort,
        monthNames: monthNames,
        amPm: ['am', 'pm'],
        DoFn: function DoFn(D) {
            return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
        }
    };

    var formatFlags = {
        D: function D(dateObj) {
            return dateObj.getDay();
        },
        DD: function DD(dateObj) {
            return pad(dateObj.getDay());
        },
        Do: function Do(dateObj, i18n) {
            return i18n.DoFn(dateObj.getDate());
        },
        d: function d(dateObj) {
            return dateObj.getDate();
        },
        dd: function dd(dateObj) {
            return pad(dateObj.getDate());
        },
        ddd: function ddd(dateObj, i18n) {
            return i18n.dayNamesShort[dateObj.getDay()];
        },
        dddd: function dddd(dateObj, i18n) {
            return i18n.dayNames[dateObj.getDay()];
        },
        M: function M(dateObj) {
            return dateObj.getMonth() + 1;
        },
        MM: function MM(dateObj) {
            return pad(dateObj.getMonth() + 1);
        },
        MMM: function MMM(dateObj, i18n) {
            return i18n.monthNamesShort[dateObj.getMonth()];
        },
        MMMM: function MMMM(dateObj, i18n) {
            return i18n.monthNames[dateObj.getMonth()];
        },
        yy: function yy(dateObj) {
            return String(dateObj.getFullYear()).substr(2);
        },
        yyyy: function yyyy(dateObj) {
            return dateObj.getFullYear();
        },
        h: function h(dateObj) {
            return dateObj.getHours() % 12 || 12;
        },
        hh: function hh(dateObj) {
            return pad(dateObj.getHours() % 12 || 12);
        },
        H: function H(dateObj) {
            return dateObj.getHours();
        },
        HH: function HH(dateObj) {
            return pad(dateObj.getHours());
        },
        m: function m(dateObj) {
            return dateObj.getMinutes();
        },
        mm: function mm(dateObj) {
            return pad(dateObj.getMinutes());
        },
        s: function s(dateObj) {
            return dateObj.getSeconds();
        },
        ss: function ss(dateObj) {
            return pad(dateObj.getSeconds());
        },
        S: function S(dateObj) {
            return Math.round(dateObj.getMilliseconds() / 100);
        },
        SS: function SS(dateObj) {
            return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
        },
        SSS: function SSS(dateObj) {
            return pad(dateObj.getMilliseconds(), 3);
        },
        a: function a(dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
        },
        A: function A(dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
        },
        ZZ: function ZZ(dateObj) {
            var o = dateObj.getTimezoneOffset();
            return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
        }
    };

    var parseFlags = {
        d: [twoDigits, function (d, v) {
            d.day = v;
        }],
        M: [twoDigits, function (d, v) {
            d.month = v - 1;
        }],
        yy: [twoDigits, function (d, v) {
            var da = new Date(),
                cent = +('' + da.getFullYear()).substr(0, 2);
            d.year = '' + (v > 68 ? cent - 1 : cent) + v;
        }],
        h: [twoDigits, function (d, v) {
            d.hour = v;
        }],
        m: [twoDigits, function (d, v) {
            d.minute = v;
        }],
        s: [twoDigits, function (d, v) {
            d.second = v;
        }],
        yyyy: [fourDigits, function (d, v) {
            d.year = v;
        }],
        S: [/\d/, function (d, v) {
            d.millisecond = v * 100;
        }],
        SS: [/\d{2}/, function (d, v) {
            d.millisecond = v * 10;
        }],
        SSS: [threeDigits, function (d, v) {
            d.millisecond = v;
        }],
        D: [twoDigits, noop],
        ddd: [word, noop],
        MMM: [word, monthUpdate('monthNamesShort')],
        MMMM: [word, monthUpdate('monthNames')],
        a: [word, function (d, v, i18n) {
            var val = v.toLowerCase();
            if (val === i18n.amPm[0]) {
                d.isPm = false;
            } else if (val === i18n.amPm[1]) {
                d.isPm = true;
            }
        }],
        ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
            var parts = (v + '').match(/([\+\-]|\d\d)/gi),
                minutes;

            if (parts) {
                minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
                d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
            }
        }]
    };
    parseFlags.DD = parseFlags.DD;
    parseFlags.dddd = parseFlags.ddd;
    parseFlags.Do = parseFlags.dd = parseFlags.d;
    parseFlags.mm = parseFlags.m;
    parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
    parseFlags.MM = parseFlags.M;
    parseFlags.ss = parseFlags.s;
    parseFlags.A = parseFlags.a;

    fecha.masks = {
        'default': 'ddd MMM dd yyyy HH:mm:ss',
        shortDate: 'M/D/yy',
        mediumDate: 'MMM d, yyyy',
        longDate: 'MMMM d, yyyy',
        fullDate: 'dddd, MMMM d, yyyy',
        shortTime: 'HH:mm',
        mediumTime: 'HH:mm:ss',
        longTime: 'HH:mm:ss.SSS'
    };

    fecha.format = function (dateObj, mask, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof dateObj === 'number') {
            dateObj = new Date(dateObj);
        }

        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
            throw new Error('Invalid Date in fecha.format');
        }

        mask = fecha.masks[mask] || mask || fecha.masks['default'];

        return mask.replace(token, function ($0) {
            return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
        });
    };

    fecha.parse = function (dateStr, format, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof format !== 'string') {
            throw new Error('Invalid format in fecha.parse');
        }

        format = fecha.masks[format] || format;

        if (dateStr.length > 1000) {
            return false;
        }

        var isValid = true;
        var dateInfo = {};
        format.replace(token, function ($0) {
            if (parseFlags[$0]) {
                var info = parseFlags[$0];
                var index = dateStr.search(info[0]);
                if (!~index) {
                    isValid = false;
                } else {
                    dateStr.replace(info[0], function (result) {
                        info[1](dateInfo, result, i18n);
                        dateStr = dateStr.substr(index + result.length);
                        return result;
                    });
                }
            }

            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
        });

        if (!isValid) {
            return false;
        }

        var today = new Date();
        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
        }

        var date;
        if (dateInfo.timezoneOffset != null) {
            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
        } else {
            date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
        }
        return date;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = fecha;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return fecha;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        main.fecha = fecha;
    }
})(undefined);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _obj;
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside:mousedown.capture", value: _vm.handleClose, expression: "handleClose", arg: "mousedown", modifiers: { "capture": true } }, { name: "click-outside", rawName: "v-click-outside.capture", value: _vm.handleClose, expression: "handleClose", modifiers: { "capture": true } }], class: _vm.wrapperClasses }, [_c('div', { ref: "reference", class: [_vm.prefixCls + '-rel'] }, [_vm._t("default", [_c('i-input', { key: _vm.forceInputRerender, ref: "input", class: [_vm.prefixCls + '-editor'], attrs: { "element-id": _vm.elementId, "readonly": !_vm.editable || _vm.readonly, "disabled": _vm.disabled, "size": _vm.size, "placeholder": _vm.placeholder, "value": _vm.visualValue, "name": _vm.name, "icon": _vm.iconType }, on: { "on-input-change": _vm.handleInputChange, "on-focus": _vm.handleFocus, "on-blur": _vm.handleBlur, "on-click": _vm.handleIconClick }, nativeOn: { "click": function click($event) {
        return _vm.handleFocus($event);
      }, "keydown": function keydown($event) {
        return _vm.handleKeydown($event);
      }, "mouseenter": function mouseenter($event) {
        return _vm.handleInputMouseenter($event);
      }, "mouseleave": function mouseleave($event) {
        return _vm.handleInputMouseleave($event);
      } } })])], 2), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.opened, expression: "opened" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "drop", class: (_obj = {}, _obj[_vm.prefixCls + '-transfer'] = _vm.transfer, _obj), attrs: { "placement": _vm.placement, "data-transfer": _vm.transfer, "transfer": _vm.transfer }, nativeOn: { "click": function click($event) {
        return _vm.handleTransferClick($event);
      } } }, [_c('div', [_c(_vm.panel, _vm._b({ ref: "pickerPanel", tag: "component", attrs: { "visible": _vm.visible, "showTime": _vm.type === 'datetime' || _vm.type === 'datetimerange', "confirm": _vm.isConfirm, "selectionMode": _vm.selectionMode, "steps": _vm.steps, "format": _vm.format, "value": _vm.internalValue, "start-date": _vm.startDate, "split-panels": _vm.splitPanels, "show-week-numbers": _vm.showWeekNumbers, "picker-type": _vm.type, "multiple": _vm.multiple, "focused-date": _vm.focusedDate, "time-picker-options": _vm.timePickerOptions }, on: { "on-pick": _vm.onPick, "on-pick-clear": _vm.handleClear, "on-pick-success": _vm.onPickSuccess, "on-pick-click": function onPickClick($event) {
        _vm.disableClickOutSide = true;
      }, "on-selection-mode-change": _vm.onSelectionModeChange } }, 'component', _vm.ownPickerProps, false))], 1)])], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c43856e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c43856e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c43856e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c43856e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c43856e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = {
	Generator: __webpack_require__(214),
	addLabels: __webpack_require__(215)
}


/***/ }),
/* 214 */
/***/ (function(module, exports) {

// calendar with 8 column x 7 rows

var oneDay = 1000 * 60 * 60 * 24;

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getYear(year, month, weekNr){
	if (month === 0 && weekNr > 50) return year - 1;
	else if(month === 11 && weekNr < 10) return year + 1;
	else return year;
}

function getDateInfo(y, m, d, iso) {
	if (m > 11){
		m = 0;
		y++;
	}
    var currentDay = new Date(y, m, d);
    if (iso) currentDay.setDate(currentDay.getDate() + 4 - (currentDay.getDay() || 7));
    var year = iso ? currentDay.getFullYear() : y;
    var firstOfJanuary = new Date(year, 0, 1);
    var numberOfDays = 1 + Math.round((currentDay - firstOfJanuary) / oneDay);

    if (!iso) numberOfDays += firstOfJanuary.getDay();
	var w = Math.ceil(numberOfDays / 7);
    if (!iso) {
		var initialDay = new Date(y, m, d);
        var beginOfNextYear = new Date(y + 1, 0, 1);
        var startDayOfNextYear = beginOfNextYear.getDay();
        if (initialDay.getTime() >= beginOfNextYear.getTime() - (oneDay * startDayOfNextYear)) w = 1;
    }
	return w;
}

function getMonthCalender(year, month, iteratorFns){

	// config passed by binding
	var lang = this.lang || 'en';
	var onlyDays = this.onlyDays;
	var weekStart = typeof this.weekStart === 'undefined' ? 1 : this.weekStart;
	var iso = weekStart === 1;
	var cells = [];
	var monthStartDate = new Date(year, month, 1);	// make a date object
	var dayOfWeek = monthStartDate.getDay() || (iso ? 7 : 0);	// month week day for day 1
	var currentDay = weekStart - dayOfWeek; 		// starting position of first day in the week
	var weekNr = getDateInfo(year, month, 1, iso);	// get week number of month start
	var maxDays = daysInMonth(year, month);			// total days in current month
	var lastMonthMaxDays = daysInMonth(year, month - 1);
	var currentMonth, day, dayBefore;
	var currentYear = getYear(year, month, weekNr);

	var returnObject = {
		month: month,
		year: year,
		daysInMonth: maxDays
	};

	for (var i = 0; i < 7; i++){					// 7 rows in the calendar
		dayBefore = currentDay;
		for (var j = 0; j < 8; j++){				// 8 columns: week nr + 7 days p/ week
			if (i > 0 && j > 0) currentDay++;		// not first row, not week nr column

			if (currentDay > maxDays || currentDay < 1){ // day belongs to sibling month
				// calculate day in sibling month
				day = currentDay > maxDays ? currentDay - maxDays : lastMonthMaxDays + currentDay;
				currentMonth = currentDay > maxDays ? month + 1 : month - 1;
			} else {
				day = currentDay;
				currentMonth = month;
			}

			var type = (function(){
				if (j === 0) return 'weekLabel';
				else if (i === 0) return 'dayLabel';
				else if (currentDay < 1) return 'prevMonth';
				else if (currentDay > maxDays) return 'nextMonth';
				else return 'monthDay';
			})();
			var isDay = dayBefore !== currentDay && i > 0;

			var dayData = {
				desc: isDay ? day : weekNr,
				week: weekNr,
				type: type,
				format: iso ? 'ISO 8601' : 'US',
				date: isDay ? new Date(Date.UTC(year, currentMonth, day)) : false,
				year: currentYear,
				index: cells.length
			};

			if (iteratorFns){
				if (typeof iteratorFns === "function") dayData = iteratorFns.call(returnObject, dayData, lang);
				else iteratorFns.forEach(function(fn){
					dayData = fn.call(returnObject, dayData, lang);
				});
			}
			if (onlyDays && isDay) cells.push(dayData);	// add only days
			else if (!onlyDays) cells.push(dayData);	// add also week numbers and labels
		}
		if (i > 0) weekNr = getDateInfo(year, currentMonth, day + 1, iso);
		currentYear = getYear(year, month, weekNr);
	}

	returnObject.cells = cells;
	return returnObject;
}

module.exports = function (config){
	return getMonthCalender.bind(config);
}


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// calendar with 8 column x 7 rows

var labels = __webpack_require__(216);

function isIterable(variable){
	if (variable == null) return false;
	if (variable.constructor === Array) return true;
	if (variable.constructor === Object) return true;
	return false;
}

function merge(_new, _old){
    for (var prop in _new){
        if (!_old[prop]) _old[prop] = _new[prop];
        else if (isIterable(_new[prop])) merge(_new[prop], _old[prop]);
    }
}

function addLabels(dayObject, lang){
	var cssClass = [labels.classes[dayObject.type]];

	if (dayObject.class) dayObject.class = (typeof dayObject.class == 'string' ? [dayObject.class] : dayObject.class).concat(cssClass);
	else dayObject.class = cssClass;

	if (dayObject.type.indexOf('Label') > 0){
		if (dayObject.index == 0 && labels.weekPlaceholder) dayObject.desc = labels.weekPlaceholder;
		else if (dayObject.index < 8) dayObject.desc = labels.columnNames[lang][dayObject.index];
		else if (dayObject.index % 8 == 0) dayObject.desc = dayObject.week;
	}

	if (dayObject.date) dayObject.monthName = labels.monthNames[lang][dayObject.date.getMonth()];
	if (!this.monthName) this.monthName = labels.monthNames[lang][this.month];
	if (!this.labels) this.labels = {
		monthNames: labels.monthNames[lang],
		columnNames: labels.columnNames[lang],
		classes: labels.classes
	}

	return dayObject;
}
addLabels.setLabels = function(newOptions){
	merge(newOptions, labels);
};

module.exports = addLabels;


/***/ }),
/* 216 */
/***/ (function(module, exports) {


module.exports = {
	weekPlaceholder: '',
	columnNames: {
		en: {
			0: 'w',
			1: 'monday',
			2: 'tuesday',
			3: 'wednesday',
			4: 'thursday',
			5: 'friday',
			6: 'saturday',
			7: 'sunday'
		},
		sv: {
			0: 'v',
			1: 'måndag',
			2: 'tisdag',
			3: 'onsdag',
			4: 'torsdag',
			5: 'fredag',
			6: 'lördag',
			7: 'söndag'
		},
		pt: {
			0: 's',
			1: 'segunda',
			2: 'terça',
			3: 'quarta',
			4: 'quinta',
			5: 'sexta',
			6: 'sábado',
			7: 'domingo'
		}
	},
	monthNames: {
		en: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		sv: [
			"januari",
			"februari",
			"mars",
			"april",
			"maj",
			"juni",
			"juli",
			"augusti",
			"september",
			"oktober",
			"november",
			"december"
		],
		pt: [
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outubro",
			"Novembro",
			"Dezembro"
		]
	},
	classes: {
		dayLabel: 'day-of-week',
		weekLabel: 'week-number',
		prevMonth: 'inactive',
		nextMonth: 'inactive',
		monthDay: 'day-in-month'
	}
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_c('div', { class: [_vm.prefixCls + '-header'] }, _vm._l(_vm.headerDays, function (day) {
    return _c('span', { key: day }, [_vm._v("\n            " + _vm._s(day) + "\n        ")]);
  }), 0), _vm._v(" "), _vm._l(_vm.cells, function (cell, i) {
    return _c('span', { key: String(cell.date) + i, class: _vm.getCellCls(cell), on: { "click": function click($event) {
          return _vm.handleClick(cell, $event);
        }, "mouseenter": function mouseenter($event) {
          return _vm.handleMouseMove(cell);
        } } }, [_c('em', [_vm._v(_vm._s(cell.desc))])]);
  })], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, _vm._l(_vm.cells, function (cell) {
    return _c('span', { class: _vm.getCellCls(cell), on: { "click": function click($event) {
          return _vm.handleClick(cell);
        }, "mouseenter": function mouseenter($event) {
          return _vm.handleMouseMove(cell);
        } } }, [_c('em', [_vm._v(_vm._s(cell.date.getFullYear()))])]);
  }), 0);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, _vm._l(_vm.cells, function (cell) {
    return _c('span', { class: _vm.getCellCls(cell), on: { "click": function click($event) {
          return _vm.handleClick(cell);
        }, "mouseenter": function mouseenter($event) {
          return _vm.handleMouseMove(cell);
        } } }, [_c('em', [_vm._v(_vm._s(cell.text))])]);
  }), 0);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d8d808_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d8d808_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d8d808_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d8d808_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21d8d808_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes }, [_c('div', { ref: "hours", class: [_vm.prefixCls + '-list'] }, [_c('ul', { class: [_vm.prefixCls + '-ul'] }, _vm._l(_vm.hoursList, function (item) {
    return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !item.hide, expression: "!item.hide" }], class: _vm.getCellCls(item), on: { "click": function click($event) {
          return _vm.handleClick('hours', item);
        } } }, [_vm._v(_vm._s(_vm.formatTime(item.text)))]);
  }), 0)]), _vm._v(" "), _c('div', { ref: "minutes", class: [_vm.prefixCls + '-list'] }, [_c('ul', { class: [_vm.prefixCls + '-ul'] }, _vm._l(_vm.minutesList, function (item) {
    return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !item.hide, expression: "!item.hide" }], class: _vm.getCellCls(item), on: { "click": function click($event) {
          return _vm.handleClick('minutes', item);
        } } }, [_vm._v(_vm._s(_vm.formatTime(item.text)))]);
  }), 0)]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.showSeconds, expression: "showSeconds" }], ref: "seconds", class: [_vm.prefixCls + '-list'] }, [_c('ul', { class: [_vm.prefixCls + '-ul'] }, _vm._l(_vm.secondsList, function (item) {
    return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !item.hide, expression: "!item.hide" }], class: _vm.getCellCls(item), on: { "click": function click($event) {
          return _vm.handleClick('seconds', item);
        } } }, [_vm._v(_vm._s(_vm.formatTime(item.text)))]);
  }), 0)])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-confirm'], on: { "!keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleTab($event);
      } } }, [_vm.showTime ? _c('i-button', { class: _vm.timeClasses, attrs: { "size": "small", "type": "text", "disabled": _vm.timeDisabled }, on: { "click": _vm.handleToggleTime } }, [_vm._v("\n        " + _vm._s(_vm.labels.time) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('i-button', { attrs: { "size": "small" }, nativeOn: { "click": function click($event) {
        return _vm.handleClear($event);
      }, "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleClear($event);
      } } }, [_vm._v("\n        " + _vm._s(_vm.labels.clear) + "\n    ")]), _vm._v(" "), _c('i-button', { attrs: { "size": "small", "type": "primary" }, nativeOn: { "click": function click($event) {
        return _vm.handleSuccess($event);
      }, "keydown": function keydown($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleSuccess($event);
      } } }, [_vm._v("\n        " + _vm._s(_vm.labels.ok) + "\n    ")])], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.prefixCls + '-body-wrapper'], on: { "mousedown": function mousedown($event) {
        $event.preventDefault();
      } } }, [_c('div', { class: [_vm.prefixCls + '-body'] }, [_vm.showDate ? _c('div', { class: [_vm.timePrefixCls + '-header'] }, [_vm._v(_vm._s(_vm.visibleDate))]) : _vm._e(), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-content'] }, [_c('time-spinner', { ref: "timeSpinner", attrs: { "show-seconds": _vm.showSeconds, "steps": _vm.steps, "hours": _vm.timeSlots[0], "minutes": _vm.timeSlots[1], "seconds": _vm.timeSlots[2], "disabled-hours": _vm.disabledHMS.disabledHours, "disabled-minutes": _vm.disabledHMS.disabledMinutes, "disabled-seconds": _vm.disabledHMS.disabledSeconds, "hide-disabled-options": _vm.hideDisabledOptions }, on: { "on-change": _vm.handleChange, "on-pick-click": _vm.handlePickClick } })], 1), _vm._v(" "), _vm.confirm ? _c('Confirm', { on: { "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess } }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', [_vm.datePanelLabel ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.datePanelLabel.labels[0].type === 'year' || _vm.currentView === 'date', expression: "datePanelLabel.labels[0].type === 'year' || currentView === 'date'" }], class: [_vm.datePrefixCls + '-header-label'], on: { "click": _vm.datePanelLabel.labels[0].handler } }, [_vm._v(_vm._s(_vm.datePanelLabel.labels[0].label))]) : _vm._e(), _vm._v(" "), _vm.datePanelLabel && _vm.currentView === 'date' ? [_vm._v(_vm._s(_vm.datePanelLabel.separator))] : _vm._e(), _vm._v(" "), _vm.datePanelLabel ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.datePanelLabel.labels[1].type === 'year' || _vm.currentView === 'date', expression: "datePanelLabel.labels[1].type === 'year' || currentView === 'date'" }], class: [_vm.datePrefixCls + '-header-label'], on: { "click": _vm.datePanelLabel.labels[1].handler } }, [_vm._v(_vm._s(_vm.datePanelLabel.labels[1].label))]) : _vm._e()], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, on: { "mousedown": function mousedown($event) {
        $event.preventDefault();
      } } }, [_vm.shortcuts.length ? _c('div', { class: [_vm.prefixCls + '-sidebar'] }, _vm._l(_vm.shortcuts, function (shortcut) {
    return _c('div', { class: [_vm.prefixCls + '-shortcut'], on: { "click": function click($event) {
          return _vm.handleShortcutClick(shortcut);
        } } }, [_vm._v(_vm._s(shortcut.text))]);
  }), 0) : _vm._e(), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-body'] }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView !== 'time', expression: "currentView !== 'time'" }], class: [_vm.datePrefixCls + '-header'] }, [_c('span', { class: _vm.iconBtnCls('prev', '-double'), on: { "click": function click($event) {
        return _vm.changeYear(-1);
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1), _vm._v(" "), _vm.pickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('prev'), on: { "click": function click($event) {
        return _vm.changeMonth(-1);
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1) : _vm._e(), _vm._v(" "), _c('date-panel-label', { attrs: { "date-panel-label": _vm.datePanelLabel, "current-view": _vm.pickerTable.split('-').shift(), "date-prefix-cls": _vm.datePrefixCls } }), _vm._v(" "), _c('span', { class: _vm.iconBtnCls('next', '-double'), on: { "click": function click($event) {
        return _vm.changeYear(+1);
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1), _vm._v(" "), _vm.pickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('next'), on: { "click": function click($event) {
        return _vm.changeMonth(+1);
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-content'] }, [_vm.currentView !== 'time' ? _c(_vm.pickerTable, { ref: "pickerTable", tag: "component", attrs: { "table-date": _vm.panelDate, "show-week-numbers": _vm.showWeekNumbers, "value": _vm.dates, "selection-mode": _vm.selectionMode, "disabled-date": _vm.disabledDate, "focused-date": _vm.focusedDate }, on: { "on-pick": _vm.panelPickerHandlers, "on-pick-click": _vm.handlePickClick } }) : _vm._e()], 1), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isTime, expression: "isTime" }], class: [_vm.prefixCls + '-content'] }, [_vm.currentView === 'time' ? _c('time-picker', _vm._b({ ref: "timePicker", attrs: { "value": _vm.dates, "format": _vm.format, "time-disabled": _vm.timeDisabled, "disabled-date": _vm.disabledDate, "focused-date": _vm.focusedDate }, on: { "on-pick": _vm.handlePick, "on-pick-click": _vm.handlePickClick, "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess, "on-pick-toggle-time": _vm.handleToggleTime } }, 'time-picker', _vm.timePickerOptions, false)) : _vm._e()], 1), _vm._v(" "), _vm.confirm ? _c('Confirm', { attrs: { "show-time": _vm.showTime, "is-time": _vm.isTime }, on: { "on-pick-toggle-time": _vm.handleToggleTime, "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess } }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a215f1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a215f1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a215f1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a215f1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a215f1a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77225c82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77225c82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77225c82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77225c82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_77225c82_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, on: { "mousedown": function mousedown($event) {
        $event.preventDefault();
      } } }, [_c('div', { class: [_vm.prefixCls + '-body'] }, [_c('div', { class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-left'] }, [_c('div', { class: [_vm.timePrefixCls + '-header'] }, [_vm.showDate ? [_vm._v(_vm._s(_vm.leftDatePanelLabel))] : [_vm._v(_vm._s(_vm.t('i.datepicker.startTime')))]], 2), _vm._v(" "), _c('time-spinner', { ref: "timeSpinner", attrs: { "steps": _vm.steps, "show-seconds": _vm.showSeconds, "hours": _vm.value[0] && _vm.dateStart.getHours(), "minutes": _vm.value[0] && _vm.dateStart.getMinutes(), "seconds": _vm.value[0] && _vm.dateStart.getSeconds(), "disabled-hours": _vm.disabledHours, "disabled-minutes": _vm.disabledMinutes, "disabled-seconds": _vm.disabledSeconds, "hide-disabled-options": _vm.hideDisabledOptions }, on: { "on-change": _vm.handleStartChange, "on-pick-click": _vm.handlePickClick } })], 1), _vm._v(" "), _c('div', { class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-right'] }, [_c('div', { class: [_vm.timePrefixCls + '-header'] }, [_vm.showDate ? [_vm._v(_vm._s(_vm.rightDatePanelLabel))] : [_vm._v(_vm._s(_vm.t('i.datepicker.endTime')))]], 2), _vm._v(" "), _c('time-spinner', { ref: "timeSpinnerEnd", attrs: { "steps": _vm.steps, "show-seconds": _vm.showSeconds, "hours": _vm.value[1] && _vm.dateEnd.getHours(), "minutes": _vm.value[1] && _vm.dateEnd.getMinutes(), "seconds": _vm.value[1] && _vm.dateEnd.getSeconds(), "disabled-hours": _vm.disabledHours, "disabled-minutes": _vm.disabledMinutes, "disabled-seconds": _vm.disabledSeconds, "hide-disabled-options": _vm.hideDisabledOptions }, on: { "on-change": _vm.handleEndChange, "on-pick-click": _vm.handlePickClick } })], 1), _vm._v(" "), _vm.confirm ? _c('Confirm', { on: { "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess } }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, on: { "mousedown": function mousedown($event) {
        $event.preventDefault();
      } } }, [_vm.shortcuts.length ? _c('div', { class: [_vm.prefixCls + '-sidebar'] }, _vm._l(_vm.shortcuts, function (shortcut) {
    return _c('div', { class: [_vm.prefixCls + '-shortcut'], on: { "click": function click($event) {
          return _vm.handleShortcutClick(shortcut);
        } } }, [_vm._v(_vm._s(shortcut.text))]);
  }), 0) : _vm._e(), _vm._v(" "), _c('div', { class: _vm.panelBodyClasses }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isTime, expression: "!isTime" }], class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-left'] }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView !== 'time', expression: "currentView !== 'time'" }], class: [_vm.datePrefixCls + '-header'] }, [_c('span', { class: _vm.iconBtnCls('prev', '-double'), on: { "click": function click($event) {
        return _vm.prevYear('left');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1), _vm._v(" "), _vm.leftPickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('prev'), on: { "click": function click($event) {
        return _vm.prevMonth('left');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1) : _vm._e(), _vm._v(" "), _c('date-panel-label', { attrs: { "date-panel-label": _vm.leftDatePanelLabel, "current-view": _vm.leftDatePanelView, "date-prefix-cls": _vm.datePrefixCls } }), _vm._v(" "), _vm.splitPanels || _vm.leftPickerTable !== 'date-table' ? _c('span', { class: _vm.iconBtnCls('next', '-double'), on: { "click": function click($event) {
        return _vm.nextYear('left');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1) : _vm._e(), _vm._v(" "), _vm.splitPanels && _vm.leftPickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('next'), on: { "click": function click($event) {
        return _vm.nextMonth('left');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1) : _vm._e()], 1), _vm._v(" "), _vm.currentView !== 'time' ? _c(_vm.leftPickerTable, { ref: "leftYearTable", tag: "component", attrs: { "table-date": _vm.leftPanelDate, "selection-mode": "range", "disabled-date": _vm.disabledDate, "range-state": _vm.rangeState, "show-week-numbers": _vm.showWeekNumbers, "value": _vm.preSelecting.left ? [_vm.dates[0]] : _vm.dates, "focused-date": _vm.focusedDate }, on: { "on-change-range": _vm.handleChangeRange, "on-pick": _vm.panelPickerHandlers.left, "on-pick-click": _vm.handlePickClick } }) : _vm._e()], 1), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isTime, expression: "!isTime" }], class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-right'] }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView !== 'time', expression: "currentView !== 'time'" }], class: [_vm.datePrefixCls + '-header'] }, [_vm.splitPanels || _vm.rightPickerTable !== 'date-table' ? _c('span', { class: _vm.iconBtnCls('prev', '-double'), on: { "click": function click($event) {
        return _vm.prevYear('right');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1) : _vm._e(), _vm._v(" "), _vm.splitPanels && _vm.rightPickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('prev'), on: { "click": function click($event) {
        return _vm.prevMonth('right');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-back" } })], 1) : _vm._e(), _vm._v(" "), _c('date-panel-label', { attrs: { "date-panel-label": _vm.rightDatePanelLabel, "current-view": _vm.rightDatePanelView, "date-prefix-cls": _vm.datePrefixCls } }), _vm._v(" "), _c('span', { class: _vm.iconBtnCls('next', '-double'), on: { "click": function click($event) {
        return _vm.nextYear('right');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1), _vm._v(" "), _vm.rightPickerTable === 'date-table' ? _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentView === 'date', expression: "currentView === 'date'" }], class: _vm.iconBtnCls('next'), on: { "click": function click($event) {
        return _vm.nextMonth('right');
      } } }, [_c('Icon', { attrs: { "type": "ios-arrow-forward" } })], 1) : _vm._e()], 1), _vm._v(" "), _vm.currentView !== 'time' ? _c(_vm.rightPickerTable, { ref: "rightYearTable", tag: "component", attrs: { "table-date": _vm.rightPanelDate, "selection-mode": "range", "range-state": _vm.rangeState, "disabled-date": _vm.disabledDate, "show-week-numbers": _vm.showWeekNumbers, "value": _vm.preSelecting.right ? [_vm.dates[_vm.dates.length - 1]] : _vm.dates, "focused-date": _vm.focusedDate }, on: { "on-change-range": _vm.handleChangeRange, "on-pick": _vm.panelPickerHandlers.right, "on-pick-click": _vm.handlePickClick } }) : _vm._e()], 1), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isTime, expression: "isTime" }], class: [_vm.prefixCls + '-content'] }, [_vm.currentView === 'time' ? _c('time-picker', _vm._b({ ref: "timePicker", attrs: { "value": _vm.dates, "format": _vm.format, "time-disabled": _vm.timeDisabled }, on: { "on-pick": _vm.handleRangePick, "on-pick-click": _vm.handlePickClick, "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess, "on-pick-toggle-time": _vm.handleToggleTime } }, 'time-picker', _vm.timePickerOptions, false)) : _vm._e()], 1), _vm._v(" "), _vm.confirm ? _c('Confirm', { attrs: { "show-time": _vm.showTime, "is-time": _vm.isTime, "time-disabled": _vm.timeDisabled }, on: { "on-pick-toggle-time": _vm.handleToggleTime, "on-pick-clear": _vm.handlePickClear, "on-pick-success": _vm.handlePickSuccess } }) : _vm._e()], 1)]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__(231);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownMenu = __webpack_require__(233);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

var _dropdownItem = __webpack_require__(235);

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dropdown2.default.Menu = _dropdownMenu2.default;
_dropdown2.default.Item = _dropdownItem2.default;
exports.default = _dropdown2.default;

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_55e98b4c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_55e98b4c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_55e98b4c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_55e98b4c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_55e98b4c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside", value: _vm.onClickoutside, expression: "onClickoutside" }], class: [_vm.prefixCls], on: { "mouseenter": _vm.handleMouseenter, "mouseleave": _vm.handleMouseleave } }, [_c('div', { ref: "reference", class: _vm.relClasses, on: { "click": _vm.handleClick, "contextmenu": function contextmenu($event) {
        $event.preventDefault();return _vm.handleRightClick($event);
      } } }, [_vm._t("default")], 2), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentVisible, expression: "currentVisible" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "drop", class: _vm.dropdownCls, attrs: { "placement": _vm.placement, "data-transfer": _vm.transfer, "transfer": _vm.transfer }, nativeOn: { "mouseenter": function mouseenter($event) {
        return _vm.handleMouseenter($event);
      }, "mouseleave": function mouseleave($event) {
        return _vm.handleMouseleave($event);
      } } }, [_vm._t("list")], 2)], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48d9576_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48d9576_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48d9576_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48d9576_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b48d9576_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "ivu-dropdown-menu" }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c49cf5_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c49cf5_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c49cf5_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c49cf5_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03c49cf5_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.classes, on: { "click": _vm.handleClick } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(57);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _input2.default;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(239);

var _radio2 = _interopRequireDefault(_radio);

var _radioGroup = __webpack_require__(241);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_radio2.default.Group = _radioGroup2.default;
exports.default = _radio2.default;

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e06396a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e06396a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e06396a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e06396a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e06396a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: _vm.wrapClasses }, [_c('span', { class: _vm.radioClasses }, [_c('span', { class: _vm.innerClasses }), _vm._v(" "), _c('input', { class: _vm.inputClasses, attrs: { "type": "radio", "disabled": _vm.disabled, "name": _vm.groupName }, domProps: { "checked": _vm.currentValue }, on: { "change": _vm.change, "focus": _vm.onFocus, "blur": _vm.onBlur } })]), _vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3208029a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3208029a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3208029a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3208029a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3208029a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classes, attrs: { "name": _vm.name } }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _spin = __webpack_require__(244);

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spinInstance = void 0;

function getSpinInstance() {
    var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    spinInstance = spinInstance || _spin2.default.newInstance({
        render: render
    });

    return spinInstance;
}

function loading(options) {
    var render = 'render' in options ? options.render : undefined;
    var instance = getSpinInstance(render);

    instance.show(options);
}

_spin2.default.show = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return loading(props);
};
_spin2.default.hide = function () {
    var _this = this;

    if (!spinInstance) return false;

    var instance = getSpinInstance();

    instance.remove(function () {
        (0, _newArrowCheck3.default)(this, _this);

        spinInstance = null;
    }.bind(this));
};

exports.default = _spin2.default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(47);

var _assign2 = _interopRequireDefault(_assign);

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _vue = __webpack_require__(14);

var _vue2 = _interopRequireDefault(_vue);

var _spin = __webpack_require__(245);

var _spin2 = _interopRequireDefault(_spin);

var _transferQueue = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleGetIndex() {
    (0, _transferQueue.transferIncrease)();
    return _transferQueue.transferIndex;
}

var tIndex = handleGetIndex();

_spin2.default.newInstance = function (properties) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var _props = properties || {};

    var Instance = new _vue2.default({
        data: (0, _assign2.default)({}, _props, {}),
        render: function render(h) {
            var vnode = '';
            if (this.render) {
                vnode = h(_spin2.default, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            } else {
                vnode = h(_spin2.default, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper',
                'style': {
                    'z-index': 2010 + tIndex
                }
            }, [vnode]);
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var spin = Instance.$children[0];

    return {
        show: function show() {
            spin.visible = true;
            tIndex = handleGetIndex();
        },
        remove: function remove(cb) {
            spin.visible = false;
            setTimeout(function () {
                spin.$parent.$destroy();
                if (document.getElementsByClassName('ivu-spin-fullscreen')[0] !== undefined) {
                    document.body.removeChild(document.getElementsByClassName('ivu-spin-fullscreen')[0]);
                }
                cb();
            }, 500);
        },

        component: spin
    };
}.bind(undefined);

exports.default = _spin2.default;

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac6ee9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spin_vue__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac6ee9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac6ee9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spin_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac6ee9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spin_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac6ee9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spin_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = __webpack_require__(0);

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _from = __webpack_require__(95);

var _from2 = _interopRequireDefault(_from);

var _assist = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        checkScrollBar: function checkScrollBar() {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (this.bodyIsOverflowing) {
                this.scrollBarWidth = (0, _assist.getScrollBarSize)();
            }
        },
        checkMaskInVisible: function checkMaskInVisible() {
            var _this = this;

            var masks = document.getElementsByClassName('ivu-modal-mask') || [];
            return (0, _from2.default)(masks).every(function (m) {
                (0, _newArrowCheck3.default)(this, _this);
                return m.style.display === 'none' || m.classList.contains('fade-leave-to');
            }.bind(this));
        },
        setScrollBar: function setScrollBar() {
            if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = String(this.scrollBarWidth) + 'px';
            }
        },
        resetScrollBar: function resetScrollBar() {
            document.body.style.paddingRight = '';
        },
        addScrollEffect: function addScrollEffect() {
            this.checkScrollBar();
            this.setScrollBar();
            document.body.style.overflow = 'hidden';
        },
        removeScrollEffect: function removeScrollEffect() {
            if (this.checkMaskInVisible()) {
                document.body.style.overflow = '';
                this.resetScrollBar();
            }
        }
    }
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "fade" } }, [_vm.fullscreenVisible ? _c('div', { class: _vm.classes }, [_c('div', { class: _vm.mainClasses }, [_c('span', { class: _vm.dotClasses }), _vm._v(" "), _c('div', { class: _vm.textClasses }, [_vm._t("default")], 2)])]) : _vm._e()]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _time = __webpack_require__(249);

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _time2.default;

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d577981_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d577981_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d577981_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d577981_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d577981_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRelativeTime = undefined;

var _newArrowCheck2 = __webpack_require__(0);

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

    var d = new Date(timeStamp * 1000);
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

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { class: _vm.classes, on: { "click": _vm.handleClick } }, [_vm._v(_vm._s(_vm.date))]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionGroup = exports.Option = exports.Select = undefined;

var _select = __webpack_require__(253);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(258);

var _option2 = _interopRequireDefault(_option);

var _optionGroup = __webpack_require__(260);

var _optionGroup2 = _interopRequireDefault(_optionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Select = _select2.default;
exports.Option = _option2.default;
exports.OptionGroup = _optionGroup2.default;
exports.default = _select2.default;

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1f0b64_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1f0b64_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1f0b64_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1f0b64_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1f0b64_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21f62f57_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_head_vue__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21f62f57_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21f62f57_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_head_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21f62f57_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_head_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_21f62f57_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_head_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { on: { "click": _vm.onHeaderClick } }, [_vm._l(_vm.selectedMultiple, function (item) {
    return _c('div', { staticClass: "ivu-tag ivu-tag-checked" }, [_c('span', { staticClass: "ivu-tag-text" }, [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c('Icon', { attrs: { "type": "ios-close" }, nativeOn: { "click": function click($event) {
          $event.stopPropagation();return _vm.removeTag(item);
        } } })], 1);
  }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.singleDisplayValue, expression: "singleDisplayValue" }], class: _vm.singleDisplayClasses }, [_vm._v(_vm._s(_vm.singleDisplayValue))]), _vm._v(" "), _vm.filterable ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.query, expression: "query" }], ref: "input", class: [_vm.prefixCls + '-input'], style: _vm.inputStyle, attrs: { "id": _vm.inputElementId, "type": "text", "disabled": _vm.disabled, "placeholder": _vm.showPlaceholder ? _vm.localePlaceholder : '', "autocomplete": "off", "spellcheck": "false" }, domProps: { "value": _vm.query }, on: { "keydown": [_vm.resetInputState, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
          return null;
        }return _vm.handleInputDelete($event);
      }], "focus": _vm.onInputFocus, "blur": _vm.onInputFocus, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.query = $event.target.value;
      } } }) : _vm._e(), _vm._v(" "), _vm.resetSelect ? _c('Icon', { class: [_vm.prefixCls + '-arrow'], attrs: { "type": "ios-close-circle" }, nativeOn: { "click": function click($event) {
        $event.stopPropagation();return _vm.onClear($event);
      } } }) : _vm._e(), _vm._v(" "), !_vm.resetSelect && !_vm.remote && !_vm.disabled ? _c('Icon', { class: [_vm.prefixCls + '-arrow'], attrs: { "type": "ios-arrow-down" } }) : _vm._e()], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_functional_options_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "click-outside", rawName: "v-click-outside.capture", value: _vm.onClickOutside, expression: "onClickOutside", modifiers: { "capture": true } }, { name: "click-outside", rawName: "v-click-outside:mousedown.capture", value: _vm.onClickOutside, expression: "onClickOutside", arg: "mousedown", modifiers: { "capture": true } }], class: _vm.classes }, [_c('div', { ref: "reference", class: _vm.selectionCls, attrs: { "tabindex": _vm.selectTabindex }, on: { "blur": _vm.toggleHeaderFocus, "focus": _vm.toggleHeaderFocus, "click": _vm.toggleMenu, "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
          return null;
        }$event.preventDefault();return _vm.handleKeydown($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
          return null;
        }$event.preventDefault();return _vm.handleKeydown($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }return _vm.handleKeydown($event);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
          return null;
        }return _vm.handleKeydown($event);
      }], "mouseenter": function mouseenter($event) {
        _vm.hasMouseHoverHead = true;
      }, "mouseleave": function mouseleave($event) {
        _vm.hasMouseHoverHead = false;
      } } }, [_vm._t("input", [_c('input', { attrs: { "type": "hidden", "name": _vm.name }, domProps: { "value": _vm.publicValue } }), _vm._v(" "), _c('select-head', { attrs: { "filterable": _vm.filterable, "multiple": _vm.multiple, "values": _vm.values, "clearable": _vm.canBeCleared, "disabled": _vm.disabled, "remote": _vm.remote, "input-element-id": _vm.elementId, "initial-label": _vm.initialLabel, "placeholder": _vm.placeholder, "query-prop": _vm.query }, on: { "on-query-change": _vm.onQueryChange, "on-input-focus": function onInputFocus($event) {
        _vm.isFocused = true;
      }, "on-input-blur": function onInputBlur($event) {
        _vm.isFocused = false;
      }, "on-clear": _vm.clearSingleSelect } })])], 2), _vm._v(" "), _c('transition', { attrs: { "name": "transition-drop" } }, [_c('Drop', { directives: [{ name: "show", rawName: "v-show", value: _vm.dropVisible, expression: "dropVisible" }, { name: "transfer-dom", rawName: "v-transfer-dom" }], ref: "dropdown", class: _vm.dropdownCls, attrs: { "placement": _vm.placement, "data-transfer": _vm.transfer, "transfer": _vm.transfer } }, [_c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.showNotFoundLabel, expression: "showNotFoundLabel" }], class: [_vm.prefixCls + '-not-found'] }, [_c('li', [_vm._v(_vm._s(_vm.localeNotFoundText))])]), _vm._v(" "), _c('ul', { class: _vm.prefixCls + '-dropdown-list' }, [!_vm.remote || _vm.remote && !_vm.loading ? _c('functional-options', { attrs: { "options": _vm.selectOptions, "slot-update-hook": _vm.updateSlotOptions, "slot-options": _vm.slotOptions } }) : _vm._e()], 1), _vm._v(" "), _c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.loading, expression: "loading" }], class: [_vm.prefixCls + '-loading'] }, [_vm._v(_vm._s(_vm.localeLoadingText))])])], 1)], 1);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3631196c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3631196c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3631196c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3631196c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3631196c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { class: _vm.classes, on: { "click": function click($event) {
        $event.stopPropagation();return _vm.select($event);
      }, "touchend": function touchend($event) {
        $event.stopPropagation();return _vm.select($event);
      }, "mousedown": function mousedown($event) {
        $event.preventDefault();
      }, "touchstart": function touchstart($event) {
        $event.preventDefault();
      } } }, [_vm._t("default", [_vm._v(_vm._s(_vm.showLabel))])], 2);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_438ec669_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_438ec669_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_438ec669_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_438ec669_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__["render"],
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_sourceMap_node_modules_vue_loader_lib_template_compiler_index_id_data_v_438ec669_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', { directives: [{ name: "show", rawName: "v-show", value: !_vm.hidden, expression: "!hidden" }], class: [_vm.prefixCls + '-wrap'] }, [_c('div', { class: [_vm.prefixCls + '-title'] }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('ul', [_c('li', { ref: "options", class: [_vm.prefixCls] }, [_vm._t("default")], 2)])]);
};
var staticRenderFns = [];
exports.render = render;
exports.staticRenderFns = staticRenderFns;

/***/ })
/******/ ]);
});
//# sourceMappingURL=iview.js.map