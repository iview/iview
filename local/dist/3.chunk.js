webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _button = __webpack_require__(16);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(38);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(47);

	var _input2 = _interopRequireDefault(_input);

	var _switch = __webpack_require__(51);

	var _switch2 = _interopRequireDefault(_switch);

	var _radio = __webpack_require__(55);

	var _radio2 = _interopRequireDefault(_radio);

	var _checkbox = __webpack_require__(62);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _inputNumber = __webpack_require__(69);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _layout = __webpack_require__(73);

	var _page = __webpack_require__(80);

	var _page2 = _interopRequireDefault(_page);

	var _badge = __webpack_require__(87);

	var _badge2 = _interopRequireDefault(_badge);

	var _tag = __webpack_require__(91);

	var _tag2 = _interopRequireDefault(_tag);

	var _progress = __webpack_require__(95);

	var _progress2 = _interopRequireDefault(_progress);

	var _circle = __webpack_require__(99);

	var _circle2 = _interopRequireDefault(_circle);

	var _timeline = __webpack_require__(103);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _affix = __webpack_require__(110);

	var _affix2 = _interopRequireDefault(_affix);

	var _backTop = __webpack_require__(114);

	var _backTop2 = _interopRequireDefault(_backTop);

	var _spin = __webpack_require__(118);

	var _spin2 = _interopRequireDefault(_spin);

	var _steps = __webpack_require__(122);

	var _steps2 = _interopRequireDefault(_steps);

	var _breadcrumb = __webpack_require__(129);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var iview = {
	    Button: _button2.default,
	    Icon: _icon2.default,
	    Input: _input2.default,
	    Switch: _switch2.default,
	    Radio: _radio2.default,
	    Checkbox: _checkbox2.default,
	    InputNumber: _inputNumber2.default,
	    Row: _layout.Row,
	    Col: _layout.Col,
	    Page: _page2.default,
	    Badge: _badge2.default,
	    Tag: _tag2.default,
	    Progress: _progress2.default,
	    Circle: _circle2.default,
	    Timeline: _timeline2.default,
	    Affix: _affix2.default,
	    BackTop: _backTop2.default,
	    Spin: _spin2.default,
	    Steps: _steps2.default,
	    Breadcrumb: _breadcrumb2.default
	};

	module.exports = iview;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(17);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(44);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.Group = _buttonGroup2.default;
	exports.default = _button2.default;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66a59bc1/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(38);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <button :type="htmlType" :class="classes" :disabled="disabled">
	//         <Icon type="loading" v-if="loading"></Icon>
	//         <Icon :type="icon" v-if="icon && !loading"></Icon>
	//         <slot></slot>
	//     </button>
	// </template>
	// <script>
	var prefixCls = 'ivu-btn';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['primary', 'ghost']);
	            }
	        },
	        shape: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['circle', 'circle-outline']);
	            }
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
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
	        icon: String
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.shape, !!this.shape), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-loading', this.loading != null && this.loading), _ref)];
	        }
	    }
	};
	// </script>

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(20);

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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	var $Object = __webpack_require__(25).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(23);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(33), 'Object', {defineProperty: __webpack_require__(29).f});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(24)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 24 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(37);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(36)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(33) && !__webpack_require__(34)(function(){
	  return Object.defineProperty(__webpack_require__(35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31)
	  , document = __webpack_require__(24).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(31);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(39);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _icon2.default;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(40)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/icon/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c924861/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <i :class="classes" :style="styles"></i>
	// </template>
	// <script>
	var prefixCls = 'ivu-icon';

	exports.default = {
	    props: {
	        type: String,
	        size: [Number, String]
	    },
	    computed: {
	        classes: function classes() {
	            return prefixCls + ' ' + prefixCls + '-' + this.type;
	        },
	        styles: function styles() {
	            if (!!this.size) {
	                return {
	                    'font-size': this.size + 'px'
	                };
	            } else {
	                return {};
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"classes\" :style=\"styles\"></i>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.oneOf = oneOf;
	// 判断参数是否是其中之一
	function oneOf(value, validList) {
	    for (var i = 0; i < validList.length; i++) {
	        if (value === validList[i]) {
	            return true;
	        }
	    }
	    return false;
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<button :type=\"htmlType\" :class=\"classes\" :disabled=\"disabled\">\n    <Icon type=\"loading\" v-if=\"loading\"></Icon>\n    <Icon :type=\"icon\" v-if=\"icon && !loading\"></Icon>\n    <slot></slot>\n</button>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/button/button-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-614eda73/button-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-btn-group'; // <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-' + this.size, !!this.size)];
	        }
	    }
	};
	// </script>

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(48);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _input2.default;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(49)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/input/input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-310b7052/input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-input'; // <template>
	//     <input
	//         :class="classes"
	//         :type="type"
	//         :placeholder="placeholder"
	//         :name="name"
	//         v-model="value">
	// </template>
	// <script>
	exports.default = {
	    props: {
	        type: {
	            type: String,
	            default: 'text'
	        },
	        value: {
	            type: [String, Number],
	            default: '',
	            twoWay: true
	        },
	        placeholder: String,
	        name: String,
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-' + this.size, !!this.size)];
	        }
	    }
	};
	// </script>

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<input\n    :class=\"classes\"\n    :type=\"type\"\n    :placeholder=\"placeholder\"\n    :name=\"name\"\n    v-model=\"value\">\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _switch = __webpack_require__(52);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _switch2.default;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/switch/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-22431581/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-switch'; // <template>
	//     <span :class="wrapClasses" @click="toggle">
	//         <span :class="innerClasses">
	//             <slot name="open" v-if="checked"></slot>
	//             <slot name="close" v-if="!checked"></slot>
	//         </span>
	//     </span>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        checked: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small']);
	            }
	        }
	    },
	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-checked', this.checked), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), _ref)];
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            if (this.disabled) {
	                return false;
	            }

	            this.checked = !this.checked;
	            this.$emit('on-change', this.checked);
	        }
	    }
	};
	// </script>

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\" @click=\"toggle\">\n    <span :class=\"innerClasses\">\n        <slot name=\"open\" v-if=\"checked\"></slot>\n        <slot name=\"close\" v-if=\"!checked\"></slot>\n    </span>\n</span>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(56);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioGroup = __webpack_require__(59);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Group = _radioGroup2.default;
	exports.default = _radio2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/radio/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f529130e/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <label :class="wrapClasses">
	//         <span :class="radioClasses">
	//             <span :class="innerClasses"></span>
	//             <input
	//                 type="radio"
	//                 :class="inputClasses"
	//                 :disabled="disabled"
	//                 :checked="selected"
	//                 @change="change">
	//         </span>
	//         <slot>{{ value }}</slot>
	//     </label>
	// </template>
	// <script>
	var prefixCls = 'ivu-radio';

	exports.default = {
	    props: {
	        checked: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        value: {
	            type: [String, Number]
	        }
	    },
	    data: function data() {
	        return {
	            selected: false,
	            group: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-group-item', this.group), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-checked', this.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-disabled', this.disabled), _ref)];
	        },
	        radioClasses: function radioClasses() {
	            var _ref2;

	            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-checked', this.selected), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), _ref2)];
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        },
	        inputClasses: function inputClasses() {
	            return prefixCls + '-input';
	        }
	    },
	    ready: function ready() {
	        if (!this.group) {
	            this.updateModel();
	        }
	    },

	    methods: {
	        change: function change(event) {
	            if (this.disabled) {
	                return false;
	            }

	            this.selected = event.target.checked;
	            this.checked = this.selected;

	            if (this.group && this.checked) {
	                this.$parent.change({
	                    value: this.value,
	                    checked: this.checked
	                });
	            }
	        },
	        updateModel: function updateModel() {
	            this.selected = this.checked;
	        }
	    },
	    watch: {
	        checked: function checked() {
	            this.updateModel();
	        }
	    }
	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"radioClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            type=\"radio\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :checked=\"selected\"\n            @change=\"change\">\n    </span>\n    <slot>{{ value }}</slot>\n</label>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/radio/radio-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a77869aa/radio-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-radio-group'; // <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        model: {
	            type: [String, Number],
	            default: ''
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        },
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['button']);
	            }
	        }
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), _ref)];
	        }
	    },
	    compiled: function compiled() {
	        this.updateModel();
	    },

	    methods: {
	        updateModel: function updateModel() {
	            var model = this.model;
	            this.$children.forEach(function (child) {
	                child.selected = model == child.value;
	                child.group = true;
	            });
	        },
	        change: function change(data) {
	            this.model = data.value;
	            this.updateModel();
	            this.$emit('on-change', data.value);
	        }
	    },
	    watch: {
	        model: function model() {
	            this.updateModel();
	        }
	    }
	};
	// </script>

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(63);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(66);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_checkbox2.default.Group = _checkboxGroup2.default;
	exports.default = _checkbox2.default;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(64)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/checkbox/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4e8a46a1/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <label :class="wrapClasses">
	//         <span :class="checkboxClasses">
	//             <span :class="innerClasses"></span>
	//             <input
	//                 v-if="group"
	//                 type="checkbox"
	//                 :class="inputClasses"
	//                 :disabled="disabled"
	//                 :value="value"
	//                 v-model="model"
	//                 @change="change">
	//             <input
	//                 v-if="!group"
	//                 type="checkbox"
	//                 :class="inputClasses"
	//                 :disabled="disabled"
	//                 v-model="checked"
	//                 @change="change">
	//         </span>
	//         <slot>{{ value }}</slot>
	//     </label>
	// </template>
	// <script>
	var prefixCls = 'ivu-checkbox';

	exports.default = {
	    props: {
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        value: {
	            type: [String, Number, Boolean]
	        },
	        checked: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            model: [],
	            selected: false,
	            group: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-group-item', this.group), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-checked', this.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-disabled', this.disabled), _ref)];
	        },
	        checkboxClasses: function checkboxClasses() {
	            var _ref2;

	            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-checked', this.selected), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), _ref2)];
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        },
	        inputClasses: function inputClasses() {
	            return prefixCls + '-input';
	        }
	    },
	    ready: function ready() {
	        if (!this.group) {
	            this.updateModel();
	        }
	    },

	    methods: {
	        change: function change(event) {
	            if (this.disabled) {
	                return false;
	            }

	            this.selected = event.target.checked;

	            if (this.group) {
	                this.$parent.change(this.model);
	            } else {
	                this.$emit('on-change', this.checked);
	            }
	        },
	        updateModel: function updateModel() {
	            this.selected = this.checked;
	        }
	    },
	    watch: {
	        checked: function checked() {
	            this.updateModel();
	        }
	    }
	};
	// </script>

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"checkboxClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            v-if=\"group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :value=\"value\"\n            v-model=\"model\"\n            @change=\"change\">\n        <input\n            v-if=\"!group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            v-model=\"checked\"\n            @change=\"change\">\n    </span>\n    <slot>{{ value }}</slot>\n</label>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(67)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/checkbox/checkbox-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0a00455a/checkbox-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-checkbox-group';

	exports.default = {
	    props: {
	        model: {
	            type: Array,
	            default: []
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return '' + prefixCls;
	        }
	    },
	    compiled: function compiled() {
	        this.updateModel(true);
	    },

	    methods: {
	        updateModel: function updateModel(update) {
	            var model = this.model;

	            this.$children.forEach(function (child) {
	                child.model = model;

	                if (update) {
	                    child.selected = model.indexOf(child.value) >= 0;
	                    child.group = true;
	                }
	            });
	        },
	        change: function change(data) {
	            this.$emit('on-change', data);
	        }
	    },
	    watch: {
	        model: function model(val, oldVal) {
	            if (val == oldVal) {
	                this.updateModel();
	            } else {
	                this.updateModel(true);
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputNumber = __webpack_require__(70);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _inputNumber2.default;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(71)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/input-number/input-number.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-323ad941/input-number.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-input-number'; // <template>
	//     <div :class="wrapClasses">
	//         <div :class="handlerClasses">
	//             <a
	//                 @click="up"
	//                 @mouse.down="preventDefault"
	//                 :class="upClasses">
	//                 <span
	//                     :class="innerUpClasses"
	//                     @click="preventDefault">+</span>
	//             </a>
	//             <a
	//                 @click="down"
	//                 @mouse.down="preventDefault"
	//                 :class="downClasses">
	//                 <span
	//                     :class="innerDownClasses"
	//                     @click="preventDefault">-</span>
	//             </a>
	//         </div>
	//         <div :class="inputWrapClasses">
	//             <input
	//                 :class="inputClasses"
	//                 :disabled="disabled"
	//                 autoComplete="off"
	//                 @focus="focus"
	//                 @blur="blur"
	//                 @keydown.stop="keyDown"
	//                 @change="change"
	//                 :value="value">
	//         </div>
	//     </div>
	// </template>
	// <script>


	function isValueNumber(value) {
	    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)/.test(value + '')
	    );
	}
	function addNum(num1, num2) {
	    var sq1, sq2, m;
	    try {
	        sq1 = num1.toString().split(".")[1].length;
	    } catch (e) {
	        sq1 = 0;
	    }
	    try {
	        sq2 = num2.toString().split(".")[1].length;
	    } catch (e) {
	        sq2 = 0;
	    }
	    //        if (sq1 === 0 || sq2 === 0) {
	    //            return num1 + num2;
	    //        } else {
	    //            m = Math.pow(10, Math.max(sq1, sq2));
	    //            return (num1 * m + num2 * m) / m;
	    //        }
	    m = Math.pow(10, Math.max(sq1, sq2));
	    return (num1 * m + num2 * m) / m;
	}

	exports.default = {
	    props: {
	        max: {
	            type: Number,
	            default: Infinity
	        },
	        min: {
	            type: Number,
	            default: -Infinity
	        },
	        step: {
	            type: Number,
	            default: 1
	        },
	        value: {
	            type: Number,
	            default: 1
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            focused: false,
	            upDisabled: false,
	            downDisabled: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-focused', this.focused), _ref)];
	        },
	        handlerClasses: function handlerClasses() {
	            return prefixCls + '-handler-wrap';
	        },
	        upClasses: function upClasses() {
	            return [prefixCls + '-handler', prefixCls + '-handler-up', (0, _defineProperty3.default)({}, prefixCls + '-handler-up-disabled', this.upDisabled)];
	        },
	        innerUpClasses: function innerUpClasses() {
	            return prefixCls + '-handler-up-inner';
	        },
	        downClasses: function downClasses() {
	            return [prefixCls + '-handler', prefixCls + '-handler-down', (0, _defineProperty3.default)({}, prefixCls + '-handler-down-disabled', this.downDisabled)];
	        },
	        innerDownClasses: function innerDownClasses() {
	            return prefixCls + '-handler-down-inner';
	        },
	        inputWrapClasses: function inputWrapClasses() {
	            return prefixCls + '-input-wrap';
	        }
	    },
	    methods: {
	        preventDefault: function preventDefault(e) {
	            e.preventDefault();
	        },
	        up: function up() {
	            if (this.upDisabled) {
	                return false;
	            }
	            this.changeStep('up');
	        },
	        down: function down() {
	            if (this.downDisabled) {
	                return false;
	            }
	            this.changeStep('down');
	        },
	        changeStep: function changeStep(type) {
	            if (this.disabled) {
	                return false;
	            }

	            var val = Number(this.value);
	            var step = Number(this.step);
	            if (isNaN(val)) {
	                return false;
	            }

	            if (type == 'up') {
	                val = addNum(val, step);
	            } else if (type == 'down') {
	                val = addNum(val, -step);
	            }
	            this.setValue(val);
	        },
	        setValue: function setValue(val) {
	            this.value = val;
	            this.$emit('on-change', val);
	        },
	        focus: function focus() {
	            this.focused = true;
	        },
	        blur: function blur() {
	            this.focused = false;
	        },
	        keyDown: function keyDown(e) {
	            if (e.keyCode === 38) {
	                e.preventDefault();
	                this.up();
	            } else if (e.keyCode === 40) {
	                e.preventDefault();
	                this.down();
	            }
	        },
	        change: function change(event) {
	            var val = event.target.value.trim();

	            var max = this.max;
	            var min = this.min;

	            if (isValueNumber(val)) {
	                val = Number(val);
	                if (val > max) {
	                    this.setValue(max);
	                } else if (val < min) {
	                    this.setValue(min);
	                } else {
	                    this.setValue(val);
	                }
	            } else {
	                event.target.value = this.value;
	            }
	        }
	    },
	    watch: {
	        value: function value(val) {
	            if (isValueNumber(val) || val === 0) {
	                val = Number(val);
	                var step = this.step;
	                if (val + step > this.max) {
	                    this.upDisabled = true;
	                } else if (val - step < this.min) {
	                    this.downDisabled = true;
	                } else {
	                    this.upDisabled = false;
	                    this.downDisabled = false;
	                }
	            } else {
	                this.upDisabled = true;
	                this.downDisabled = true;
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"handlerClasses\">\n        <a\n            @click=\"up\"\n            @mouse.down=\"preventDefault\"\n            :class=\"upClasses\">\n            <span\n                :class=\"innerUpClasses\"\n                @click=\"preventDefault\">+</span>\n        </a>\n        <a\n            @click=\"down\"\n            @mouse.down=\"preventDefault\"\n            :class=\"downClasses\">\n            <span\n                :class=\"innerDownClasses\"\n                @click=\"preventDefault\">-</span>\n        </a>\n    </div>\n    <div :class=\"inputWrapClasses\">\n        <input\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            autoComplete=\"off\"\n            @focus=\"focus\"\n            @blur=\"blur\"\n            @keydown.stop=\"keyDown\"\n            @change=\"change\"\n            :value=\"value\">\n    </div>\n</div>\n";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(74);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(77);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(75)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/layout/row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7499485a/row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-row'; // <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['flex']);
	            }
	        },
	        align: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['top', 'middle', 'bottom']);
	            }
	        },
	        justify: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['start', 'end', 'center', 'space-around', 'space-between']);
	            }
	        },
	        className: String
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.align, !!this.align), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.justify, !!this.justify), (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), _ref)];
	        }
	    }
	};
	// </script>

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(78)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/layout/col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(79)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a8ca3f0e/col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-col'; // <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        span: [Number, String],
	        order: [Number, String],
	        offset: [Number, String],
	        push: [Number, String],
	        pull: [Number, String],
	        className: String
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-span-' + this.span, this.span), (0, _defineProperty3.default)(_ref, prefixCls + '-order-' + this.order, this.order), (0, _defineProperty3.default)(_ref, prefixCls + '-offset-' + this.offset, this.offset), (0, _defineProperty3.default)(_ref, prefixCls + '-push-' + this.push, this.push), (0, _defineProperty3.default)(_ref, prefixCls + '-pull-' + this.pull, this.pull), (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), _ref)];
	        }
	    }
	};
	// </script>

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _page = __webpack_require__(81);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _page2.default;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/page/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-778073be/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	var _options = __webpack_require__(83);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <ul :class="simpleWrapClasses" v-if="simple">
	//         <li
	//             title="上一页"
	//             :class="prevClasses"
	//             @click="prev">
	//             <a>←</a>
	//         </li>
	//         <div :title="current + '/' + allPages">
	//             <input
	//                 type="text"
	//                 :value="current"
	//                 @keydown="keyDown"
	//                 @keyup="keyUp"
	//                 @change="keyUp">
	//             <span>/</span>
	//             {{ allPages }}
	//         </div>
	//         <li
	//             title="下一页"
	//             :class="nextClasses"
	//             @click="next">
	//             <a>→</a>
	//         </li>
	//     </ul>
	//     <ul :class="wrapClasses" v-else>
	//         <span :class="[`${prefixCls}-total`]" v-if="showTotal">
	//             <slot>共 {{ total }} 条</slot>
	//         </span>
	//         <li
	//             title="上一页"
	//             :class="prevClasses"
	//             @click="prev">
	//             <a>←</a>
	//         </li>
	//         <li title="第一页" :class="[`${prefixCls}-item`,{[`${prefixCls}-item-active`]: current == 1}]" @click="changePage(1)"><a>1</a></li>
	//         <li title="向前 5 页" v-if="current - 3 > 1" :class="[`${prefixCls}-item-jump-prev`]" @click="fastPrev"><a>…</a></li>
	//         <li :title="current - 2" v-if="current - 2 > 1" :class="[`${prefixCls}-item`]" @click="changePage(current - 2)"><a>{{ current - 2 }}</a></li>
	//         <li :title="current - 1" v-if="current - 1 > 1" :class="[`${prefixCls}-item`]" @click="changePage(current - 1)"><a>{{ current - 1 }}</a></li>
	//         <li :title="current" v-if="current != 1 && current != allPages" :class="[`${prefixCls}-item`,`${prefixCls}-item-active`]"><a>{{ current }}</a></li>
	//         <li :title="current + 1" v-if="current + 1 < allPages" :class="[`${prefixCls}-item`]" @click="changePage(current + 1)"><a>{{ current + 1 }}</a></li>
	//         <li :title="current + 2" v-if="current + 2 < allPages" :class="[`${prefixCls}-item`]" @click="changePage(current + 2)"><a>{{ current + 2 }}</a></li>
	//         <li title="向后 5 页" v-if="current + 3 < allPages" :class="[`${prefixCls}-item-jump-next`]" @click="fastNext"><a>…</a></li>
	//         <li :title="'最后一页:' + allPages" :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current == allPages}]" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
	//         <li
	//             title="下一页"
	//             :class="nextClasses"
	//             @click="next">
	//             <a>→</a>
	//         </li>
	//         <Options
	//             :show-sizer="showSizer"
	//             :page-size="pageSize"
	//             :page-size-opts="pageSizeOpts"
	//             :show-elevator="showElevator"
	//             :_current.once="current"
	//             :current.sync="current"
	//             :all-pages="allPages"
	//             @on-size="onSize"
	//             @on-page="onPage">
	//         </Options>
	//     </ul>
	// </template>
	// <script>
	var prefixCls = 'ivu-page';

	exports.default = {
	    components: { Options: _options2.default },
	    props: {
	        current: {
	            type: Number,
	            default: 1
	        },
	        total: {
	            type: Number,
	            default: 0
	        },
	        pageSize: {
	            type: Number,
	            default: 10
	        },
	        pageSizeOpts: {
	            type: Array,
	            default: function _default() {
	                return [10, 20, 30, 40];
	            }
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small']);
	            }
	        },
	        simple: {
	            type: Boolean,
	            default: false
	        },
	        showTotal: {
	            type: Boolean,
	            default: false
	        },
	        showElevator: {
	            type: Boolean,
	            default: false
	        },
	        showSizer: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls
	        };
	    },

	    computed: {
	        allPages: function allPages() {
	            return Math.ceil(this.total / this.pageSize);
	        },
	        simpleWrapClasses: function simpleWrapClasses() {
	            return ['' + prefixCls, prefixCls + '-simple'];
	        },
	        wrapClasses: function wrapClasses() {
	            return ['' + prefixCls, {
	                'mini': !!this.size
	            }];
	        },
	        prevClasses: function prevClasses() {
	            return [prefixCls + '-prev', (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.current == 1)];
	        },
	        nextClasses: function nextClasses() {
	            return [prefixCls + '-next', (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.current == this.allPages)];
	        }
	    },
	    methods: {
	        changePage: function changePage(page) {
	            if (this.current != page) {
	                this.current = page;
	                this.$emit('on-change', page);
	            }
	        },
	        prev: function prev() {
	            var current = this.current;
	            if (current <= 1) {
	                return false;
	            }
	            this.changePage(current - 1);
	        },
	        next: function next() {
	            var current = this.current;
	            if (current >= this.allPages) {
	                return false;
	            }
	            this.changePage(current + 1);
	        },
	        fastPrev: function fastPrev() {
	            var page = this.current - 5;
	            if (page > 0) {
	                this.changePage(page);
	            } else {
	                this.changePage(1);
	            }
	        },
	        fastNext: function fastNext() {
	            var page = this.current + 5;
	            if (page > this.allPages) {
	                this.changePage(this.allPages);
	            } else {
	                this.changePage(page);
	            }
	        },
	        onSize: function onSize(pageSize) {
	            this.pageSize = pageSize;
	            this.changePage(1);
	        },
	        onPage: function onPage(page) {
	            this.changePage(page);
	        },
	        keyDown: function keyDown(e) {
	            var key = e.keyCode;
	            var condition = key >= 48 && key <= 57 || key == 8 || key == 37 || key == 39;

	            if (!condition) {
	                e.preventDefault();
	            }
	        },
	        keyUp: function keyUp(e) {
	            var key = e.keyCode;
	            var val = parseInt(e.target.value);

	            if (key === 38) {
	                this.prev();
	            } else if (key === 40) {
	                this.next();
	            } else if (key == 13) {
	                var page = 1;

	                if (val > this.allPages) {
	                    page = this.allPages;
	                } else if (val <= 0) {
	                    page = 1;
	                } else {
	                    page = val;
	                }

	                e.target.value = page;
	                this.changePage(page);
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(84)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/page/options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(85)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0718c108/options.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div v-if="showSizer || showElevator" :class="optsClasses">
	//         <div v-if="showSizer" :class="sizerClasses">
	//             <select v-model="pageSize" @change="changeSize">
	//                 <option :value="item" v-for="item in pageSizeOpts">{{ item }} 条/页</option>
	//             </select>
	//         </div>
	//         <div v-if="showElevator" :class="ElevatorClasses">
	//             跳至
	//             <input type="text" :value="_current" @keyup.enter="changePage">
	//             页
	//         </div>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-page';

	function isValueNumber(value) {
	    return (/^[1-9][0-9]*$/.test(value + '')
	    );
	}

	exports.default = {
	    props: {
	        pageSizeOpts: Array,
	        showSizer: Boolean,
	        showElevator: Boolean,
	        current: Number,
	        _current: Number,
	        pageSize: Number,
	        allPages: Number
	    },
	    computed: {
	        optsClasses: function optsClasses() {
	            return [prefixCls + '-options'];
	        },
	        sizerClasses: function sizerClasses() {
	            return [prefixCls + '-options-sizer'];
	        },
	        ElevatorClasses: function ElevatorClasses() {
	            return [prefixCls + '-options-elevator'];
	        }
	    },
	    methods: {
	        changeSize: function changeSize() {
	            this.$emit('on-size', this.pageSize);
	        },
	        changePage: function changePage(event) {
	            var val = event.target.value.trim();
	            var page = 0;

	            if (isValueNumber(val)) {
	                val = Number(val);
	                if (val != this.current) {
	                    var allPages = this.allPages;

	                    if (val > allPages) {
	                        page = allPages;
	                    } else {
	                        page = val;
	                    }
	                }
	            } else {
	                page = 1;
	            }

	            if (page) {
	                this.$emit('on-page', page);
	                event.target.value = page;
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizer || showElevator\" :class=\"optsClasses\">\n    <div v-if=\"showSizer\" :class=\"sizerClasses\">\n        <select v-model=\"pageSize\" @change=\"changeSize\">\n            <option :value=\"item\" v-for=\"item in pageSizeOpts\">{{ item }} 条/页</option>\n        </select>\n    </div>\n    <div v-if=\"showElevator\" :class=\"ElevatorClasses\">\n        跳至\n        <input type=\"text\" :value=\"_current\" @keyup.enter=\"changePage\">\n        页\n    </div>\n</div>\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"simpleWrapClasses\" v-if=\"simple\">\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a>←</a>\n    </li>\n    <div :title=\"current + '/' + allPages\">\n        <input\n            type=\"text\"\n            :value=\"current\"\n            @keydown=\"keyDown\"\n            @keyup=\"keyUp\"\n            @change=\"keyUp\">\n        <span>/</span>\n        {{ allPages }}\n    </div>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a>→</a>\n    </li>\n</ul>\n<ul :class=\"wrapClasses\" v-else>\n    <span :class=\"[`${prefixCls}-total`]\" v-if=\"showTotal\">\n        <slot>共 {{ total }} 条</slot>\n    </span>\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a>←</a>\n    </li>\n    <li title=\"第一页\" :class=\"[`${prefixCls}-item`,{[`${prefixCls}-item-active`]: current == 1}]\" @click=\"changePage(1)\"><a>1</a></li>\n    <li title=\"向前 5 页\" v-if=\"current - 3 > 1\" :class=\"[`${prefixCls}-item-jump-prev`]\" @click=\"fastPrev\"><a>…</a></li>\n    <li :title=\"current - 2\" v-if=\"current - 2 > 1\" :class=\"[`${prefixCls}-item`]\" @click=\"changePage(current - 2)\"><a>{{ current - 2 }}</a></li>\n    <li :title=\"current - 1\" v-if=\"current - 1 > 1\" :class=\"[`${prefixCls}-item`]\" @click=\"changePage(current - 1)\"><a>{{ current - 1 }}</a></li>\n    <li :title=\"current\" v-if=\"current != 1 && current != allPages\" :class=\"[`${prefixCls}-item`,`${prefixCls}-item-active`]\"><a>{{ current }}</a></li>\n    <li :title=\"current + 1\" v-if=\"current + 1 < allPages\" :class=\"[`${prefixCls}-item`]\" @click=\"changePage(current + 1)\"><a>{{ current + 1 }}</a></li>\n    <li :title=\"current + 2\" v-if=\"current + 2 < allPages\" :class=\"[`${prefixCls}-item`]\" @click=\"changePage(current + 2)\"><a>{{ current + 2 }}</a></li>\n    <li title=\"向后 5 页\" v-if=\"current + 3 < allPages\" :class=\"[`${prefixCls}-item-jump-next`]\" @click=\"fastNext\"><a>…</a></li>\n    <li :title=\"'最后一页:' + allPages\" :class=\"[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current == allPages}]\" @click=\"changePage(allPages)\"><a>{{ allPages }}</a></li>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a>→</a>\n    </li>\n    <Options\n        :show-sizer=\"showSizer\"\n        :page-size=\"pageSize\"\n        :page-size-opts=\"pageSizeOpts\"\n        :show-elevator=\"showElevator\"\n        :_current.once=\"current\"\n        :current.sync=\"current\"\n        :all-pages=\"allPages\"\n        @on-size=\"onSize\"\n        @on-page=\"onPage\">\n    </Options>\n</ul>\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _badge = __webpack_require__(88);

	var _badge2 = _interopRequireDefault(_badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _badge2.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(89)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/badge/badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-81b6006e/badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <span v-if="dot" :class="classes" v-el:badge>
	//         <slot></slot>
	//         <sup :class="dotClasses" v-show="badge"></sup>
	//     </span>
	//     <span v-else :class="classes" v-el:badge>
	//         <slot></slot>
	//         <sup v-if="count" :class="countClasses" v-show="badge">{{ finalCount }}</sup>
	//     </span>
	// </template>
	// <script>
	var prefixCls = 'ivu-badge';

	exports.default = {
	    props: {
	        count: [Number, String],
	        dot: {
	            type: Boolean,
	            default: false
	        },
	        overflowCount: {
	            type: [Number, String],
	            default: 99
	        },
	        class: String
	    },
	    computed: {
	        classes: function classes() {
	            return '' + prefixCls;
	        },
	        dotClasses: function dotClasses() {
	            return prefixCls + '-dot';
	        },
	        countClasses: function countClasses() {
	            var _ref;

	            return [prefixCls + '-count', (_ref = {}, (0, _defineProperty3.default)(_ref, '' + this.class, !!this.class), (0, _defineProperty3.default)(_ref, prefixCls + '-count-alone', this.alone), _ref)];
	        },
	        finalCount: function finalCount() {
	            return parseInt(this.count) >= parseInt(this.overflowCount) ? this.overflowCount + '+' : this.count;
	        },
	        badge: function badge() {
	            var status = false;

	            if (this.count) {
	                status = !(parseInt(this.count) === 0);
	            }

	            if (this.dot) {
	                status = true;
	                if (this.count) {
	                    if (parseInt(this.count) === 0) {
	                        status = false;
	                    }
	                }
	            }

	            return status;
	        }
	    },
	    data: function data() {
	        return {
	            alone: false
	        };
	    },
	    compiled: function compiled() {
	        var child_length = this.$els.badge.children.length;
	        if (child_length === 1) {
	            this.alone = true;
	        }
	    }
	};
	// </script>

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n<span v-if=\"dot\" :class=\"classes\" v-el:badge>\n    <slot></slot>\n    <sup :class=\"dotClasses\" v-show=\"badge\"></sup>\n</span>\n<span v-else :class=\"classes\" v-el:badge>\n    <slot></slot>\n    <sup v-if=\"count\" :class=\"countClasses\" v-show=\"badge\">{{ finalCount }}</sup>\n</span>\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(92);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tag2.default;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/tag/tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-88042192/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(38);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div v-if="!closed" :class="classes" transition="fade">
	//         <span :class="textClasses"><slot></slot></span>
	//         <Icon v-if="closable" type="ios-close-empty" @click="close"></Icon>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-tag';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        closable: {
	            type: Boolean,
	            default: false
	        },
	        color: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['blue', 'green', 'red', 'yellow']);
	            }
	        }
	    },
	    data: function data() {
	        return {
	            closed: false
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-' + this.color, !!this.color)];
	        },
	        textClasses: function textClasses() {
	            return prefixCls + '-text';
	        }
	    },
	    methods: {
	        close: function close(e) {
	            this.closed = true;
	            this.$emit('on-close', e);
	        }
	    }
	};
	// </script>

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"classes\" transition=\"fade\">\n    <span :class=\"textClasses\"><slot></slot></span>\n    <Icon v-if=\"closable\" type=\"ios-close-empty\" @click=\"close\"></Icon>\n</div>\n";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(96);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _progress2.default;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(97)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/progress/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7e503de1/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(38);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div :class="wrapClasses">
	//         <span v-if="!hideInfo" :class="textClasses">
	//             <slot>
	//                 <span v-if="isStatus" :class="textInnerClasses">
	//                     <Icon :type="statusIcon"></Icon>
	//                 </span>
	//                 <span v-else :class="textInnerClasses">
	//                     {{ percent }}%
	//                 </span>
	//             </slot>
	//         </span>
	//         <div :class="outerClasses">
	//             <div :class="innerClasses">
	//                 <div :class="bgClasses" :style="bgStyle"></div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-progress';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        percent: {
	            type: Number,
	            default: 0
	        },
	        status: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['normal', 'active', 'wrong', 'success']);
	            },

	            default: 'normal'
	        },
	        hideInfo: {
	            type: Boolean,
	            default: false
	        },
	        strokeWidth: {
	            type: Number,
	            default: 10
	        }
	    },
	    computed: {
	        isStatus: function isStatus() {
	            return this.status == 'wrong' || this.status == 'success';
	        },
	        statusIcon: function statusIcon() {
	            var type = '';
	            switch (this.status) {
	                case 'wrong':
	                    type = 'ios-close-empty';
	                    break;
	                case 'success':
	                    type = 'ios-checkmark-empty';
	                    break;
	            }

	            return type;
	        },
	        bgStyle: function bgStyle() {
	            return {
	                width: this.percent + '%',
	                height: this.strokeWidth + 'px'
	            };
	        },
	        wrapClasses: function wrapClasses() {
	            return ['' + prefixCls, prefixCls + '-' + this.status, (0, _defineProperty3.default)({}, prefixCls + '-show-info', !this.hideInfo)];
	        },
	        textClasses: function textClasses() {
	            return prefixCls + '-text';
	        },
	        textInnerClasses: function textInnerClasses() {
	            return prefixCls + '-text-inner';
	        },
	        outerClasses: function outerClasses() {
	            return prefixCls + '-outer';
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        },
	        bgClasses: function bgClasses() {
	            return prefixCls + '-bg';
	        }
	    },
	    compiled: function compiled() {
	        this.handleStatus();
	    },

	    methods: {
	        handleStatus: function handleStatus(isDown) {
	            if (isDown) {
	                this.status = 'normal';
	            } else {
	                if (parseInt(this.percent, 10) == 100) {
	                    this.status = 'success';
	                }
	            }
	        }
	    },
	    watch: {
	        percent: function percent(val, oldVal) {
	            if (val < oldVal) {
	                this.handleStatus(true);
	            } else {
	                this.handleStatus();
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <span v-if=\"!hideInfo\" :class=\"textClasses\">\n        <slot>\n            <span v-if=\"isStatus\" :class=\"textInnerClasses\">\n                <Icon :type=\"statusIcon\"></Icon>\n            </span>\n            <span v-else :class=\"textInnerClasses\">\n                {{ percent }}%\n            </span>\n        </slot>\n    </span>\n    <div :class=\"outerClasses\">\n        <div :class=\"innerClasses\">\n            <div :class=\"bgClasses\" :style=\"bgStyle\"></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _circle = __webpack_require__(100);

	var _circle2 = _interopRequireDefault(_circle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _circle2.default;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/circle/circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-08aa8e01/circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assist = __webpack_require__(42);

	var prefixCls = 'ivu-chart-circle'; // <template>
	//     <div :style="circleSize" :class="wrapClasses">
	//         <svg viewBox="0 0 100 100">
	//             <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0"/>
	//             <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"/>
	//         </svg>
	//         <div :class="innerClasses">
	//             <slot></slot>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        percent: {
	            type: Number,
	            default: 0
	        },
	        size: {
	            type: Number,
	            default: 120
	        },
	        strokeWidth: {
	            type: Number,
	            default: 6
	        },
	        strokeColor: {
	            type: String,
	            default: '#2db7f5'
	        },
	        strokeLinecap: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['square', 'round']);
	            },

	            default: 'round'
	        },
	        trailWidth: {
	            type: Number,
	            default: 5
	        },
	        trailColor: {
	            type: String,
	            default: '#eaeef2'
	        }
	    },
	    computed: {
	        circleSize: function circleSize() {
	            return {
	                width: this.size + 'px',
	                height: this.size + 'px'
	            };
	        },
	        radius: function radius() {
	            return 50 - this.strokeWidth / 2;
	        },
	        pathString: function pathString() {
	            return 'M 50,50 m 0,-' + this.radius + '\n            a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + '\n            a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius;
	        },
	        len: function len() {
	            return Math.PI * 2 * this.radius;
	        },
	        pathStyle: function pathStyle() {
	            return {
	                'stroke-dasharray': this.len + 'px ' + this.len + 'px',
	                'stroke-dashoffset': (100 - this.percent) / 100 * this.len + 'px',
	                'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	            };
	        },
	        wrapClasses: function wrapClasses() {
	            return '' + prefixCls;
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        }
	    }
	};
	// </script>

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"circleSize\" :class=\"wrapClasses\">\n    <svg viewBox=\"0 0 100 100\">\n        <path :d=\"pathString\" :stroke=\"trailColor\" :stroke-width=\"trailWidth\" :fill-opacity=\"0\"/>\n        <path :d=\"pathString\" :stroke-linecap=\"strokeLinecap\" :stroke=\"strokeColor\" :stroke-width=\"strokeWidth\" fill-opacity=\"0\" :style=\"pathStyle\"/>\n    </svg>\n    <div :class=\"innerClasses\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timeline = __webpack_require__(104);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _timelineItem = __webpack_require__(107);

	var _timelineItem2 = _interopRequireDefault(_timelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_timeline2.default.Item = _timelineItem2.default;
	exports.default = _timeline2.default;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/timeline/timeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b121461/timeline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <ul :class="classes">
	//         <slot></slot>
	//     </ul>
	// </template>
	// <script>
	var prefixCls = 'ivu-timeline';

	exports.default = {
	    props: {
	        pending: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-pending', this.pending)];
	        }
	    }
	};
	// </script>

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"classes\">\n    <slot></slot>\n</ul>\n";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(108)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/timeline/timeline-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(109)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-85c579a2/timeline-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <li :class="itemClasses">
	//         <div :class="tailClasses"></div>
	//         <div :class="headClasses" :style="customColor">
	//             <slot name="dot"></slot>
	//         </div>
	//         <div :class="contentClasses">
	//             <slot></slot>
	//         </div>
	//     </li>
	// </template>
	// <script>
	var prefixCls = 'ivu-timeline';

	exports.default = {
	    props: {
	        color: {
	            type: String,
	            default: 'blue'
	        }
	    },
	    data: function data() {
	        return {
	            dot: false
	        };
	    },
	    ready: function ready() {
	        this.dot = this.$children.length ? true : false;
	    },

	    computed: {
	        itemClasses: function itemClasses() {
	            return prefixCls + '-item';
	        },
	        tailClasses: function tailClasses() {
	            return prefixCls + '-item-tail';
	        },
	        headClasses: function headClasses() {
	            var _ref;

	            return [prefixCls + '-item-head', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-item-head-custom', this.dot), (0, _defineProperty3.default)(_ref, prefixCls + '-item-head-' + this.color, this.headColorShow), _ref)];
	        },
	        headColorShow: function headColorShow() {
	            return this.color == 'blue' || this.color == 'red' || this.color == 'green';
	        },
	        customColor: function customColor() {
	            var style = {};
	            if (this.color) {
	                if (!this.headColorShow) {
	                    style = {
	                        'color': this.color,
	                        'border-color': this.color
	                    };
	                }
	            }

	            return style;
	        },
	        contentClasses: function contentClasses() {
	            return prefixCls + '-item-content';
	        }
	    }
	};
	// </script>

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"itemClasses\">\n    <div :class=\"tailClasses\"></div>\n    <div :class=\"headClasses\" :style=\"customColor\">\n        <slot name=\"dot\"></slot>\n    </div>\n    <div :class=\"contentClasses\">\n        <slot></slot>\n    </div>\n</li>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _affix = __webpack_require__(111);

	var _affix2 = _interopRequireDefault(_affix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _affix2.default;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(112)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/affix/affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(113)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ad370d3a/affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div>
	//         <div :class="classes" :style="styles">
	//             <slot></slot>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	var prefixCls = 'ivu-affix';

	function getScroll(target, top) {
	    var prop = top ? 'pageYOffset' : 'pageXOffset';
	    var method = top ? 'scrollTop' : 'scrollLeft';

	    var ret = target[prop];

	    if (typeof ret !== 'number') {
	        ret = window.document.documentElement[method];
	    }

	    return ret;
	}

	function getOffset(element) {
	    var rect = element.getBoundingClientRect();

	    var scrollTop = getScroll(window, true);
	    var scrollLeft = getScroll(window);

	    var docEl = window.document.body;
	    var clientTop = docEl.clientTop || 0;
	    var clientLeft = docEl.clientLeft || 0;

	    return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	    };
	}

	exports.default = {
	    props: {
	        offsetTop: {
	            type: Number,
	            default: 0
	        },
	        offsetBottom: {
	            type: Number
	        }
	    },
	    data: function data() {
	        return {
	            affix: false,
	            styles: {}
	        };
	    },

	    computed: {
	        offsetType: function offsetType() {
	            var type = 'top';
	            if (this.offsetBottom >= 0) {
	                type = 'bottom';
	            }

	            return type;
	        },
	        classes: function classes() {
	            return [(0, _defineProperty3.default)({}, '' + prefixCls, this.affix)];
	        }
	    },
	    ready: function ready() {
	        window.addEventListener('scroll', this.handleScroll, false);
	        window.addEventListener('resize', this.handleScroll, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener('scroll', this.handleScroll, false);
	        window.removeEventListener('resize', this.handleScroll, false);
	    },

	    methods: {
	        handleScroll: function handleScroll() {
	            var affix = this.affix;
	            var scrollTop = getScroll(window, true);
	            var elOffset = getOffset(this.$el);
	            var windowHeight = window.innerHeight;
	            var elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;

	            // Fixed Top
	            if (elOffset.top - this.offsetTop < scrollTop && this.offsetType == 'top' && !affix) {
	                this.affix = true;
	                this.styles = {
	                    top: this.offsetTop + 'px',
	                    left: elOffset.left + 'px',
	                    width: this.$el.offsetWidth + 'px'
	                };

	                this.$emit('on-change', true);
	            } else if (elOffset.top - this.offsetTop > scrollTop && this.offsetType == 'top' && affix) {
	                this.affix = false;
	                this.styles = null;

	                this.$emit('on-change', false);
	            }

	            // Fixed Bottom
	            if (elOffset.top + this.offsetBottom + elHeight > scrollTop + windowHeight && this.offsetType == 'bottom' && !affix) {
	                this.affix = true;
	                this.styles = {
	                    bottom: this.offsetBottom + 'px',
	                    left: elOffset.left + 'px',
	                    width: this.$el.offsetWidth + 'px'
	                };

	                this.$emit('on-change', true);
	            } else if (elOffset.top + this.offsetBottom + elHeight < scrollTop + windowHeight && this.offsetType == 'bottom' && affix) {
	                this.affix = false;
	                this.styles = null;

	                this.$emit('on-change', false);
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div :class=\"classes\" :style=\"styles\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _backTop = __webpack_require__(115);

	var _backTop2 = _interopRequireDefault(_backTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _backTop2.default;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/back-top/back-top.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2e7a2fbe/back-top.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div :class="classes" :style="styles" @click="back">
	//         <slot>
	//             <div :class="innerClasses">
	//                 <i class="ivu-icon ivu-icon-chevron-up"></i>
	//             </div>
	//         </slot>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-back-top';

	function getScroll(target, top) {
	    var prop = top ? 'pageYOffset' : 'pageXOffset';
	    var method = top ? 'scrollTop' : 'scrollLeft';

	    var ret = target[prop];

	    if (typeof ret !== 'number') {
	        ret = window.document.documentElement[method];
	    }

	    return ret;
	}

	exports.default = {
	    props: {
	        height: {
	            type: Number,
	            default: 400
	        },
	        bottom: {
	            type: Number,
	            default: 30
	        },
	        right: {
	            type: Number,
	            default: 30
	        }
	    },
	    data: function data() {
	        return {
	            backTop: false
	        };
	    },
	    ready: function ready() {
	        window.addEventListener('scroll', this.handleScroll, false);
	        window.addEventListener('resize', this.handleScroll, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener('scroll', this.handleScroll, false);
	        window.removeEventListener('resize', this.handleScroll, false);
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-show', this.backTop)];
	        },
	        styles: function styles() {
	            return {
	                bottom: this.bottom + 'px',
	                right: this.right + 'px'
	            };
	        },
	        innerClasses: function innerClasses() {
	            return prefixCls + '-inner';
	        }
	    },
	    methods: {
	        handleScroll: function handleScroll() {
	            var backTop = this.backTop;
	            var scrollTop = getScroll(window, true);

	            if (this.height <= scrollTop && !backTop) {
	                this.backTop = true;
	            } else if (this.height > scrollTop && backTop) {
	                this.backTop = false;
	            }
	        },
	        back: function back() {
	            window.scrollTo(0, 0);
	            this.$emit('on-click');
	        }
	    }
	};
	// </script>

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\" @click=\"back\">\n    <slot>\n        <div :class=\"innerClasses\">\n            <i class=\"ivu-icon ivu-icon-chevron-up\"></i>\n        </div>\n    </slot>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spin = __webpack_require__(119);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _spin2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/spin/spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-18996e01/spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-spin'; // <template>
	//     <div :class="classes" transition="fade">
	//         <div :class="mainClasses">
	//             <span :class="dotClasses"></span>
	//             <div :class="textClasses" v-el:text><slot></slot></div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        },
	        fix: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            showText: false
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-fix', this.fix), (0, _defineProperty3.default)(_ref, prefixCls + '-show-text', this.showText), _ref)];
	        },
	        mainClasses: function mainClasses() {
	            return prefixCls + '-main';
	        },
	        dotClasses: function dotClasses() {
	            return prefixCls + '-dot';
	        },
	        textClasses: function textClasses() {
	            return prefixCls + '-text';
	        }
	    },
	    compiled: function compiled() {
	        var text = this.$els.text.innerHTML;

	        if (text != '') {
	            this.showText = true;
	        }
	    }
	};
	// </script>

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" transition=\"fade\">\n    <div :class=\"mainClasses\">\n        <span :class=\"dotClasses\"></span>\n        <div :class=\"textClasses\" v-el:text><slot></slot></div>\n    </div>\n</div>\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _steps = __webpack_require__(123);

	var _steps2 = _interopRequireDefault(_steps);

	var _step = __webpack_require__(126);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_steps2.default.Step = _step2.default;
	exports.default = _steps2.default;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/steps/steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b48d105e/steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-steps'; // <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    props: {
	        current: {
	            type: Number,
	            default: 0
	        },
	        status: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['wait', 'process', 'finish', 'error']);
	            },

	            default: 'process'
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small']);
	            }
	        },
	        direction: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['horizontal', 'vertical']);
	            },

	            default: 'horizontal'
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, prefixCls + '-' + this.direction, (0, _defineProperty3.default)({}, prefixCls + '-' + this.size, !!this.size)];
	        }
	    },
	    ready: function ready() {
	        this.updateChildProps(true);
	        this.setNextError();
	        this.updateCurrent(true);
	    },

	    methods: {
	        updateChildProps: function updateChildProps(isInit) {
	            var _this = this;

	            this.$children.forEach(function (child, index) {
	                child.stepNumber = index + 1;

	                // 如果已存在status,且在初始化时,则略过
	                // todo 如果当前是error,在current改变时需要处理
	                if (!(isInit && child.status)) {
	                    if (index == _this.current) {
	                        if (_this.status != 'error') {
	                            child.status = 'process';
	                        }
	                    } else if (index < _this.current) {
	                        child.status = 'finish';
	                    } else {
	                        child.status = 'wait';
	                    }
	                }

	                if (child.status != 'error' && index != 0) {
	                    _this.$children[index - 1].nextError = false;
	                }
	            });
	        },
	        setNextError: function setNextError() {
	            var _this2 = this;

	            this.$children.forEach(function (child, index) {
	                if (child.status == 'error' && index != 0) {
	                    _this2.$children[index - 1].nextError = true;
	                }
	            });
	        },
	        updateCurrent: function updateCurrent(isInit) {
	            if (isInit) {
	                var current_status = this.$children[this.current].status;
	                if (!current_status) {
	                    this.$children[this.current].status = this.status;
	                }
	            } else {
	                this.$children[this.current].status = this.status;
	            }
	        }
	    },
	    watch: {
	        current: function current() {
	            this.updateChildProps();
	        },
	        status: function status() {
	            this.updateCurrent();
	        }
	    }
	};
	// </script>

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/steps/step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9ab4c8dc/step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(19);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-steps'; // <template>
	//     <div :class="wrapClasses">
	//         <div :class="[`${prefixCls}-tail`]"></div>
	//         <div :class="[`${prefixCls}-head`]">
	//             <div :class="[`${prefixCls}-head-inner`]">
	//                 <span v-if="!icon && status != 'finish' && status != 'error'">{{ stepNumber }}</span>
	//                 <span v-else :class="iconClasses"></span>
	//             </div>
	//         </div>
	//         <div :class="[`${prefixCls}-main`]">
	//             <div :class="[`${prefixCls}-title`]">{{ title }}</div>
	//             <div v-if="content" :class="[`${prefixCls}-content`]">{{ content }}</div>
	//         </div>
	//     </div>
	// </template>
	// <script>

	var iconPrefixCls = 'ivu-icon';

	exports.default = {
	    props: {
	        status: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['wait', 'process', 'finish', 'error']);
	            }
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        content: {
	            type: String
	        },
	        icon: {
	            type: String
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            stepNumber: '',
	            nextError: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return [prefixCls + '-item', prefixCls + '-status-' + this.status, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-custom', !!this.icon), (0, _defineProperty3.default)(_ref, prefixCls + '-next-error', this.nextError), _ref)];
	        },
	        iconClasses: function iconClasses() {
	            var icon = '';

	            if (!!this.icon) {
	                icon = this.icon;
	            } else {
	                if (this.status == 'finish') {
	                    icon = 'ios-checkmark-empty';
	                } else if (this.status == 'error') {
	                    icon = 'ios-close-empty';
	                }
	            }

	            return [prefixCls + '-icon', '' + iconPrefixCls, (0, _defineProperty3.default)({}, iconPrefixCls + '-' + icon, icon != '')];
	        }
	    },
	    watch: {
	        status: function status() {
	            if (this.status == 'error') {
	                this.$parent.setNextError();
	            }
	        }
	    }
	};
	// </script>

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"[`${prefixCls}-tail`]\"></div>\n    <div :class=\"[`${prefixCls}-head`]\">\n        <div :class=\"[`${prefixCls}-head-inner`]\">\n            <span v-if=\"!icon && status != 'finish' && status != 'error'\">{{ stepNumber }}</span>\n            <span v-else :class=\"iconClasses\"></span>\n        </div>\n    </div>\n    <div :class=\"[`${prefixCls}-main`]\">\n        <div :class=\"[`${prefixCls}-title`]\">{{ title }}</div>\n        <div v-if=\"content\" :class=\"[`${prefixCls}-content`]\">{{ content }}</div>\n    </div>\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _breadcrumb = __webpack_require__(130);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _breadcrumbItem = __webpack_require__(133);

	var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_breadcrumb2.default.Item = _breadcrumbItem2.default;
	exports.default = _breadcrumb2.default;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/breadcrumb/breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(132)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9ce8e2be/breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div :class="classes">
	//         <slot></slot>
	//     </div>
	// </template>
	// <script>
	var prefixCls = 'ivu-breadcrumb';

	exports.default = {
	    props: {
	        separator: {
	            type: String,
	            default: '/'
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return '' + prefixCls;
	        }
	    },
	    compiled: function compiled() {
	        this.updateChildren();
	    },

	    methods: {
	        updateChildren: function updateChildren() {
	            var _this = this;

	            this.$children.forEach(function (child) {
	                child.separator = _this.separator;
	            });
	        }
	    },
	    watch: {
	        separator: function separator() {
	            this.updateChildren();
	        }
	    }
	};
	// </script>

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components/breadcrumb/breadcrumb-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-32939e22/breadcrumb-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <span>
	//         <a v-if="href" :href="href" :class="linkClasses">
	//             <slot></slot>
	//         </a>
	//         <span v-else :class="linkClasses">
	//             <slot></slot>
	//         </span>
	//         <span :class="separatorClasses">
	//             <slot name="separator">{{{ separator }}}</slot>
	//         </span>
	//     </span>
	// </template>
	// <script>
	var prefixCls = 'ivu-breadcrumb-item';

	exports.default = {
	    props: {
	        href: {
	            type: String
	        },
	        separator: {
	            type: String,
	            default: '/'
	        }
	    },
	    computed: {
	        linkClasses: function linkClasses() {
	            return prefixCls + '-link';
	        },
	        separatorClasses: function separatorClasses() {
	            return prefixCls + '-separator';
	        }
	    }
	};
	// </script>

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<span>\n    <a v-if=\"href\" :href=\"href\" :class=\"linkClasses\">\n        <slot></slot>\n    </a>\n    <span v-else :class=\"linkClasses\">\n        <slot></slot>\n    </span>\n    <span :class=\"separatorClasses\">\n        <slot name=\"separator\">{{{ separator }}}</slot>\n    </span>\n</span>\n";

/***/ },
/* 136 */,
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(138)
	__vue_script__ = __webpack_require__(139)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] local/routers/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(140)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f4c6b23a/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 138 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _iview = __webpack_require__(15);

	exports.default = {
	    components: {
	        Page: _iview.Page
	    },
	    props: {},
	    data: function data() {
	        return {
	            total: 512
	        };
	    },

	    computed: {},
	    methods: {
	        setPage: function setPage(page) {
	            console.log(page);
	        }
	    }
	};
	// </script>
	// <style>
	//     body{
	//         padding: 100px;
	//     }
	//     .ivu-page-item-active{
	//         color: #f60;
	//     }
	// </style>
	// <template>
	//     <Page :current="1" :total="total" show-sizer show-total show-elevator :page-size="10" simple @on-change="setPage"></Page>
	// </template>
	// <script>

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n<Page :current=\"1\" :total=\"total\" show-sizer show-total show-elevator :page-size=\"10\" simple @on-change=\"setPage\"></Page>\n";

/***/ }
]);