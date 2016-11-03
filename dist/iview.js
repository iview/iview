(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iview", [], factory);
	else if(typeof exports === 'object')
		exports["iview"] = factory();
	else
		root["iview"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _affix = __webpack_require__(42);

	var _affix2 = _interopRequireDefault(_affix);

	var _alert = __webpack_require__(50);

	var _alert2 = _interopRequireDefault(_alert);

	var _backTop = __webpack_require__(59);

	var _backTop2 = _interopRequireDefault(_backTop);

	var _badge = __webpack_require__(63);

	var _badge2 = _interopRequireDefault(_badge);

	var _breadcrumb = __webpack_require__(67);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _button = __webpack_require__(74);

	var _button2 = _interopRequireDefault(_button);

	var _card = __webpack_require__(81);

	var _card2 = _interopRequireDefault(_card);

	var _checkbox = __webpack_require__(85);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _circle = __webpack_require__(92);

	var _circle2 = _interopRequireDefault(_circle);

	var _collapse = __webpack_require__(96);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(103);

	var _input2 = _interopRequireDefault(_input);

	var _inputNumber = __webpack_require__(107);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _loadingBar = __webpack_require__(111);

	var _loadingBar2 = _interopRequireDefault(_loadingBar);

	var _message = __webpack_require__(117);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(125);

	var _modal2 = _interopRequireDefault(_modal);

	var _notice = __webpack_require__(130);

	var _notice2 = _interopRequireDefault(_notice);

	var _page = __webpack_require__(131);

	var _page2 = _interopRequireDefault(_page);

	var _poptip = __webpack_require__(184);

	var _poptip2 = _interopRequireDefault(_poptip);

	var _progress = __webpack_require__(189);

	var _progress2 = _interopRequireDefault(_progress);

	var _radio = __webpack_require__(193);

	var _radio2 = _interopRequireDefault(_radio);

	var _slider = __webpack_require__(200);

	var _slider2 = _interopRequireDefault(_slider);

	var _spin = __webpack_require__(207);

	var _spin2 = _interopRequireDefault(_spin);

	var _steps = __webpack_require__(211);

	var _steps2 = _interopRequireDefault(_steps);

	var _switch = __webpack_require__(218);

	var _switch2 = _interopRequireDefault(_switch);

	var _tag = __webpack_require__(222);

	var _tag2 = _interopRequireDefault(_tag);

	var _timeline = __webpack_require__(226);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tooltip = __webpack_require__(233);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _layout = __webpack_require__(234);

	var _select = __webpack_require__(241);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var iview = {
	    Affix: _affix2.default,
	    Alert: _alert2.default,
	    BackTop: _backTop2.default,
	    Badge: _badge2.default,
	    Breadcrumb: _breadcrumb2.default,
	    BreadcrumbItem: _breadcrumb2.default.Item,
	    iButton: _button2.default,
	    ButtonGroup: _button2.default.Group,
	    Card: _card2.default,
	    Checkbox: _checkbox2.default,
	    CheckboxGroup: _checkbox2.default.Group,
	    Circle: _circle2.default,
	    iCol: _layout.Col,
	    Collapse: _collapse2.default,
	    Icon: _icon2.default,
	    iInput: _input2.default,
	    InputNumber: _inputNumber2.default,
	    LoadingBar: _loadingBar2.default,
	    Message: _message2.default,
	    Modal: _modal2.default,
	    Notice: _notice2.default,
	    iOption: _select.Option,
	    OptionGroup: _select.OptionGroup,
	    Page: _page2.default,
	    Panel: _collapse2.default.Panel,
	    Poptip: _poptip2.default,
	    Progress: _progress2.default,
	    Radio: _radio2.default,
	    RadioGroup: _radio2.default.Group,
	    Row: _layout.Row,
	    iSelect: _select.Select,
	    Slider: _slider2.default,
	    Spin: _spin2.default,
	    Step: _steps2.default.Step,
	    Steps: _steps2.default,
	    Switch: _switch2.default,
	    Tag: _tag2.default,
	    Timeline: _timeline2.default,
	    TimelineItem: _timeline2.default.Item,
	    Tooltip: _tooltip2.default
	};

	var install = function install(Vue) {
	    (0, _keys2.default)(iview).forEach(function (key) {
	        Vue.component(key, iview[key]);
	    });
	};

	if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	};

	module.exports = (0, _assign2.default)(iview, { install: install });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(19)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , hide      = __webpack_require__(9)
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
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
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
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(10)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(14) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(11)
	  , IE8_DOM_DEFINE = __webpack_require__(13)
	  , toPrimitive    = __webpack_require__(17)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(20)
	  , gOPS     = __webpack_require__(35)
	  , pIE      = __webpack_require__(36)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(24)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(15)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(21)
	  , enumBugKeys = __webpack_require__(34);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(22)
	  , toIObject    = __webpack_require__(23)
	  , arrayIndexOf = __webpack_require__(27)(false)
	  , IE_PROTO     = __webpack_require__(31)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(24)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(23)
	  , toLength  = __webpack_require__(28)
	  , toIndex   = __webpack_require__(30);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(32)('keys')
	  , uid    = __webpack_require__(33);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(6).Object.keys;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(37)
	  , $keys    = __webpack_require__(20);

	__webpack_require__(41)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(6)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _affix = __webpack_require__(43);

	var _affix2 = _interopRequireDefault(_affix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _affix2.default;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\affix\\affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e45ea8a6/affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(46);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	var $Object = __webpack_require__(6).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <div :class=\"classes\" :style=\"styles\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alert = __webpack_require__(51);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _alert2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\alert\\alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-25b075c5/alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-alert';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['success', 'info', 'warning', 'error']);
	            },

	            default: 'info'
	        },
	        closable: {
	            type: Boolean,
	            default: false
	        },
	        showIcon: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            closed: false,
	            desc: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return ['' + prefixCls, prefixCls + '-' + this.type, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-with-icon', this.showIcon), (0, _defineProperty3.default)(_ref, prefixCls + '-with-desc', this.desc), _ref)];
	        },
	        messageClasses: function messageClasses() {
	            return prefixCls + '-message';
	        },
	        descClasses: function descClasses() {
	            return prefixCls + '-desc';
	        },
	        closeClasses: function closeClasses() {
	            return prefixCls + '-close';
	        },
	        iconClasses: function iconClasses() {
	            return prefixCls + '-icon';
	        },
	        iconType: function iconType() {
	            var type = '';

	            switch (this.type) {
	                case 'success':
	                    type = 'checkmark-circled';
	                    break;
	                case 'info':
	                    type = 'information-circled';
	                    break;
	                case 'warning':
	                    type = 'android-alert';
	                    break;
	                case 'error':
	                    type = 'close-circled';
	                    break;
	            }

	            return type;
	        }
	    },
	    methods: {
	        close: function close(e) {
	            this.closed = true;
	            this.$emit('on-close', e);
	        }
	    },
	    compiled: function compiled() {
	        this.desc = this.$els.desc.innerHTML != '';
	    }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(54);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _icon2.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(55)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\icon\\icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f8d2525/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"classes\" :style=\"styles\"></i>\n";

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.oneOf = oneOf;
	exports.camelcaseToHyphen = camelcaseToHyphen;
	exports.getScrollBarSize = getScrollBarSize;
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

	var MutationObserver = exports.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"wrapClasses\" transition=\"fade\">\n    <span :class=\"iconClasses\" v-if=\"showIcon\">\n        <slot name=\"icon\">\n            <Icon :type=\"iconType\"></Icon>\n        </slot>\n    </span>\n    <span :class=\"messageClasses\"><slot></slot></span>\n    <span :class=\"descClasses\" v-el:desc><slot name=\"desc\"></slot></span>\n    <a :class=\"closeClasses\" v-if=\"closable\" @click=\"close\">\n        <slot name=\"close\">\n            <Icon type=\"ios-close-empty\"></Icon>\n        </slot>\n    </a>\n</div>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _backTop = __webpack_require__(60);

	var _backTop2 = _interopRequireDefault(_backTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _backTop2.default;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(61)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\back-top\\back-top.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-54b2df65/back-top.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\" @click=\"back\">\n    <slot>\n        <div :class=\"innerClasses\">\n            <i class=\"ivu-icon ivu-icon-chevron-up\"></i>\n        </div>\n    </slot>\n</div>\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _badge = __webpack_require__(64);

	var _badge2 = _interopRequireDefault(_badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _badge2.default;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\badge\\badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b8dd9bda/badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<span v-if=\"dot\" :class=\"classes\" v-el:badge>\n    <slot></slot>\n    <sup :class=\"dotClasses\" v-show=\"badge\"></sup>\n</span>\n<span v-else :class=\"classes\" v-el:badge>\n    <slot></slot>\n    <sup v-if=\"count\" :class=\"countClasses\" v-show=\"badge\">{{ finalCount }}</sup>\n</span>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _breadcrumb = __webpack_require__(68);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _breadcrumbItem = __webpack_require__(71);

	var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_breadcrumb2.default.Item = _breadcrumbItem2.default;
	exports.default = _breadcrumb2.default;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\breadcrumb\\breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6fc829b6/breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(72)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\breadcrumb\\breadcrumb-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-493f06eb/breadcrumb-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<span>\n    <a v-if=\"href\" :href=\"href\" :class=\"linkClasses\">\n        <slot></slot>\n    </a>\n    <span v-else :class=\"linkClasses\">\n        <slot></slot>\n    </span>\n    <span :class=\"separatorClasses\">\n        <slot name=\"separator\">{{{ separator }}}</slot>\n    </span>\n</span>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(75);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(78);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.Group = _buttonGroup2.default;
	exports.default = _button2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(76)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\button\\button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9a708476/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-btn';
	var iconPrefixCls = 'ivu-icon';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['primary', 'ghost', 'dashed', 'text']);
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
	    data: function data() {
	        return {
	            showSlot: true
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.shape, !!this.shape), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-loading', this.loading != null && this.loading), (0, _defineProperty3.default)(_ref, prefixCls + '-icon-only', !this.showSlot && (!!this.icon || this.loading)), _ref)];
	        },
	        loadingIconClasses: function loadingIconClasses() {
	            return iconPrefixCls + ' ivu-load-loop ' + iconPrefixCls + '-load-c';
	        },
	        typeIconClasses: function typeIconClasses() {
	            return ['' + iconPrefixCls, (0, _defineProperty3.default)({}, iconPrefixCls + '-' + this.icon, !!this.icon)];
	        }
	    },
	    ready: function ready() {
	        this.showSlot = this.$els.slot.innerHTML !== '';
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n<button :type=\"htmlType\" :class=\"classes\" :disabled=\"disabled\">\n    <i :class=\"loadingIconClasses\" v-if=\"loading\"></i>\n    <i :class=\"typeIconClasses\" v-if=\"icon && !loading\"></i>\n    <span v-if=\"showSlot\" v-el:slot><slot></slot></span>\n</button>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\button\\button-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-192f2d12/button-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-btn-group';

	exports.default = {
	    props: {
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        },
	        shape: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['circle', 'circle-outline']);
	            }
	        }
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.shape, !!this.shape), _ref)];
	        }
	    }
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _card = __webpack_require__(82);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _card2.default;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(83)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\card\\card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4f3508f6/card.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-card';

	exports.default = {
	    props: {
	        bordered: {
	            type: Boolean,
	            default: true
	        },
	        disHover: {
	            type: Boolean,
	            default: false
	        },
	        shadow: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            showHead: true,
	            showExtra: true
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-bordered', this.bordered && !this.shadow), (0, _defineProperty3.default)(_ref, prefixCls + '-dis-hover', this.disHover || this.shadow), (0, _defineProperty3.default)(_ref, prefixCls + '-shadow', this.shadow), _ref)];
	        },
	        headClasses: function headClasses() {
	            return prefixCls + '-head';
	        },
	        extraClasses: function extraClasses() {
	            return prefixCls + '-extra';
	        },
	        bodyClasses: function bodyClasses() {
	            return prefixCls + '-body';
	        }
	    },
	    compiled: function compiled() {
	        this.showHead = this.$els.head.innerHTML != '';
	        this.showExtra = this.$els.extra.innerHTML != '';
	    }
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <div :class=\"headClasses\" v-if=\"showHead\" v-el:head><slot name=\"title\"></slot></div>\n    <div :class=\"extraClasses\" v-if=\"showExtra\" v-el:extra><slot name=\"extra\"></slot></div>\n    <div :class=\"bodyClasses\"><slot></slot></div>\n</div>\n";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(86);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(89);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_checkbox2.default.Group = _checkboxGroup2.default;
	exports.default = _checkbox2.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\checkbox\\checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(88)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8b0b8436/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"checkboxClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            v-if=\"group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :value=\"value\"\n            v-model=\"model\"\n            @change=\"change\">\n        <input\n            v-if=\"!group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            v-model=\"checked\"\n            @change=\"change\">\n    </span>\n    <slot><span>{{ value }}</span></slot>\n</label>\n";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\checkbox\\checkbox-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-affb5cd2/checkbox-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	            this.model = data;
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

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _circle = __webpack_require__(93);

	var _circle2 = _interopRequireDefault(_circle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _circle2.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\circle\\circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-54ccb005/circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assist = __webpack_require__(57);

	var prefixCls = 'ivu-chart-circle';

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

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "\n<div :style=\"circleSize\" :class=\"wrapClasses\">\n    <svg viewBox=\"0 0 100 100\">\n        <path :d=\"pathString\" :stroke=\"trailColor\" :stroke-width=\"trailWidth\" :fill-opacity=\"0\"/>\n        <path :d=\"pathString\" :stroke-linecap=\"strokeLinecap\" :stroke=\"strokeColor\" :stroke-width=\"strokeWidth\" fill-opacity=\"0\" :style=\"pathStyle\"/>\n    </svg>\n    <div :class=\"innerClasses\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _collapse = __webpack_require__(97);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _panel = __webpack_require__(100);

	var _panel2 = _interopRequireDefault(_panel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_collapse2.default.Panel = _panel2.default;
	exports.default = _collapse2.default;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\collapse\\collapse.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e3de525/collapse.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var prefixCls = 'ivu-collapse';

	exports.default = {
	    props: {
	        accordion: {
	            type: Boolean,
	            default: false
	        },
	        activeKey: {
	            type: [Array, String]
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return '' + prefixCls;
	        }
	    },
	    compiled: function compiled() {
	        this.setActive();
	    },

	    methods: {
	        setActive: function setActive() {
	            var activeKey = this.getActiveKey();

	            this.$children.forEach(function (child, index) {
	                var key = child.key || index.toString();
	                var isActive = false;

	                if (self.accordion) {
	                    isActive = activeKey === key;
	                } else {
	                    isActive = activeKey.indexOf(key) > -1;
	                }

	                child.isActive = isActive;
	                child.index = index;
	            });
	        },
	        getActiveKey: function getActiveKey() {
	            var activeKey = this.activeKey || [];
	            var accordion = this.accordion;

	            if (!Array.isArray(activeKey)) {
	                activeKey = [activeKey];
	            }

	            if (accordion && activeKey.length > 1) {
	                activeKey = [activeKey[0]];
	            }

	            for (var i = 0; i < activeKey.length; i++) {
	                activeKey[i] = activeKey[i].toString();
	            }

	            return activeKey;
	        },
	        toggle: function toggle(data) {
	            var key = data.key.toString();
	            var newActiveKey = [];

	            if (this.accordion) {
	                if (!data.isActive) {
	                    newActiveKey.push(key);
	                }
	            } else {
	                var activeKey = this.getActiveKey();
	                var keyIndex = activeKey.indexOf(key);

	                if (data.isActive) {
	                    if (keyIndex > -1) {
	                        activeKey.splice(keyIndex, 1);
	                    }
	                } else {
	                    if (keyIndex < 0) {
	                        activeKey.push(key);
	                    }
	                }

	                newActiveKey = activeKey;
	            }

	            this.activeKey = newActiveKey;
	            this.$emit('on-change', newActiveKey);
	        }
	    },
	    watch: {
	        activeKey: function activeKey() {
	            this.setActive();
	        }
	    }
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\collapse\\panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7af8693c/panel.vue"
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

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-collapse';

	exports.default = {
	    components: { Icon: _icon2.default },
	    props: {
	        key: {
	            type: String
	        }
	    },
	    data: function data() {
	        return {
	            index: 0,
	            isActive: false
	        };
	    },

	    computed: {
	        itemClasses: function itemClasses() {
	            return [prefixCls + '-item', (0, _defineProperty3.default)({}, prefixCls + '-item-active', this.isActive)];
	        },
	        headerClasses: function headerClasses() {
	            return prefixCls + '-header';
	        },
	        concentClasses: function concentClasses() {
	            return prefixCls + '-content';
	        },
	        boxClasses: function boxClasses() {
	            return prefixCls + '-content-box';
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            this.$parent.toggle({
	                key: this.key || this.index,
	                isActive: this.isActive
	            });
	        }
	    }
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"itemClasses\">\n    <div :class=\"headerClasses\" @click=\"toggle\">\n        <Icon type=\"arrow-right-b\"></Icon>\n        <slot></slot>\n    </div>\n    <div :class=\"concentClasses\" v-show=\"isActive\">\n        <div :class=\"boxClasses\"><slot name=\"content\"></slot></div>\n    </div>\n</div>\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(104);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _input2.default;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\input\\input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-68330bbe/input.vue"
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

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-input';

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

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<input\n    :class=\"classes\"\n    :type=\"type\"\n    :placeholder=\"placeholder\"\n    :name=\"name\"\n    v-model=\"value\">\n";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputNumber = __webpack_require__(108);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _inputNumber2.default;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(109)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\input-number\\input-number.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c12ba9f6/input-number.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-input-number';
	var iconPrefixCls = 'ivu-icon';

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
	            return prefixCls + '-handler-up-inner ' + iconPrefixCls + ' ' + iconPrefixCls + '-ios-arrow-up';
	        },
	        downClasses: function downClasses() {
	            return [prefixCls + '-handler', prefixCls + '-handler-down', (0, _defineProperty3.default)({}, prefixCls + '-handler-down-disabled', this.downDisabled)];
	        },
	        innerDownClasses: function innerDownClasses() {
	            return prefixCls + '-handler-down-inner ' + iconPrefixCls + ' ' + iconPrefixCls + '-ios-arrow-down';
	        },
	        inputWrapClasses: function inputWrapClasses() {
	            return prefixCls + '-input-wrap';
	        },
	        inputClasses: function inputClasses() {
	            return prefixCls + '-input';
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
	            var _this = this;

	            this.$nextTick(function () {
	                _this.value = val;
	            });

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
	                this.value = val;

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
	        },
	        changeVal: function changeVal(val) {
	            if (isValueNumber(val) || val === 0) {
	                val = Number(val);
	                var step = this.step;

	                this.upDisabled = val + step > this.max;
	                this.downDisabled = val - step < this.min;
	            } else {
	                this.upDisabled = true;
	                this.downDisabled = true;
	            }
	        }
	    },
	    ready: function ready() {
	        this.changeVal(this.value);
	    },

	    watch: {
	        value: function value(val) {
	            this.changeVal(val);
	        }
	    }
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"handlerClasses\">\n        <a\n            @click=\"up\"\n            @mouse.down=\"preventDefault\"\n            :class=\"upClasses\">\n            <span :class=\"innerUpClasses\" @click=\"preventDefault\"></span>\n        </a>\n        <a\n            @click=\"down\"\n            @mouse.down=\"preventDefault\"\n            :class=\"downClasses\">\n            <span :class=\"innerDownClasses\" @click=\"preventDefault\"></span>\n        </a>\n    </div>\n    <div :class=\"inputWrapClasses\">\n        <input\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            autoComplete=\"off\"\n            @focus=\"focus\"\n            @blur=\"blur\"\n            @keydown.stop=\"keyDown\"\n            @change=\"change\"\n            :value=\"value\">\n    </div>\n</div>\n";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loadingBar = __webpack_require__(112);

	var _loadingBar2 = _interopRequireDefault(_loadingBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loadingBarInstance = void 0;
	var color = 'primary';
	var failedColor = 'error';
	var height = 2;
	var timer = void 0;

	function getLoadingBarInstance() {
	    loadingBarInstance = loadingBarInstance || _loadingBar2.default.newInstance({
	        color: color,
	        failedColor: failedColor,
	        height: height
	    });

	    return loadingBarInstance;
	}

	function _update(options) {
	    var instance = getLoadingBarInstance();

	    instance.update(options);
	}

	function hide() {
	    setTimeout(function () {
	        _update({
	            show: false
	        });
	        setTimeout(function () {
	            _update({
	                percent: 0
	            });
	        }, 200);
	    }, 800);
	}

	function clearTimer() {
	    if (timer) {
	        clearInterval(timer);
	        timer = null;
	    }
	}

	exports.default = {
	    start: function start() {
	        var percent = 0;

	        _update({
	            percent: percent,
	            status: 'success',
	            show: true
	        });

	        timer = setInterval(function () {
	            percent += Math.floor(Math.random() * 3 + 5);
	            if (percent > 95) {
	                clearTimer();
	            }
	            _update({
	                percent: percent,
	                status: 'success',
	                show: true
	            });
	        }, 200);
	    },
	    update: function update(percent) {
	        clearTimer();
	        _update({
	            percent: percent,
	            status: 'success',
	            show: true
	        });
	    },
	    finish: function finish() {
	        clearTimer();
	        _update({
	            percent: 100,
	            status: 'success',
	            show: true
	        });
	        hide();
	    },
	    error: function error() {
	        clearTimer();
	        _update({
	            percent: 100,
	            status: 'error',
	            show: true
	        });
	        hide();
	    },
	    config: function config(options) {
	        if (options.color) {
	            color = options.color;
	        }
	        if (options.failedColor) {
	            failedColor = options.failedColor;
	        }
	        if (options.height) {
	            height = options.height;
	        }
	    },
	    destroy: function destroy() {
	        clearTimer();
	        var instance = getLoadingBarInstance();
	        loadingBarInstance = null;
	        instance.destroy();
	    }
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _loadingBar = __webpack_require__(113);

	var _loadingBar2 = _interopRequireDefault(_loadingBar);

	var _vue = __webpack_require__(116);

	var _vue2 = _interopRequireDefault(_vue);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_loadingBar2.default.newInstance = function (properties) {
	    var _props = properties || {};

	    var props = '';
	    (0, _keys2.default)(_props).forEach(function (prop) {
	        props += ' :' + (0, _assist.camelcaseToHyphen)(prop) + '=' + prop;
	    });

	    var div = document.createElement('div');
	    div.innerHTML = '<loading-bar' + props + '></loading-bar>';
	    document.body.appendChild(div);

	    var loading_bar = new _vue2.default({
	        el: div,
	        data: _props,
	        components: { LoadingBar: _loadingBar2.default }
	    }).$children[0];

	    return {
	        update: function update(options) {
	            if ('percent' in options) {
	                loading_bar.percent = options.percent;
	            }
	            if (options.status) {
	                loading_bar.status = options.status;
	            }
	            if ('show' in options) {
	                loading_bar.show = options.show;
	            }
	        },

	        component: loading_bar,
	        destroy: function destroy() {
	            document.body.removeChild(div);
	        }
	    };
	};

	exports.default = _loadingBar2.default;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(114)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\loading-bar\\loading-bar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f209aade/loading-bar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-loading-bar';

	exports.default = {
	    props: {
	        percent: {
	            type: Number,
	            default: 0
	        },
	        color: {
	            type: String,
	            default: 'primary'
	        },
	        failedColor: {
	            type: String,
	            default: 'error'
	        },
	        height: {
	            type: Number,
	            default: 2
	        },
	        status: {
	            type: String,
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['success', 'error']);
	            },

	            default: 'success'
	        },
	        show: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return '' + prefixCls;
	        },
	        innerClasses: function innerClasses() {
	            var _ref;

	            return [prefixCls + '-inner', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-inner-color-primary', this.color === 'primary' && this.status === 'success'), (0, _defineProperty3.default)(_ref, prefixCls + '-inner-failed-color-error', this.failedColor === 'error' && this.status === 'error'), _ref)];
	        },
	        outerStyles: function outerStyles() {
	            return {
	                height: this.height + 'px'
	            };
	        },
	        styles: function styles() {
	            var style = {
	                width: this.percent + '%',
	                height: this.height + 'px'
	            };

	            if (this.color !== 'primary' && this.status === 'success') {
	                style.backgroundColor = this.color;
	            }

	            if (this.failedColor !== 'error' && this.status === 'error') {
	                style.backgroundColor = this.failedColor;
	            }

	            return style;
	        }
	    }
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"outerStyles\" v-show=\"show\" transition=\"fade\">\n    <div :class=\"innerClasses\" :style=\"styles\"></div>\n</div>\n";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: ("development") !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (true) {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      ("development") !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (true) {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (true) {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      ("development") !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    ("development") !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (true) {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        ("development") !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (true) {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        ("development") !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (true) {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (("development") !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (true) {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (("development") !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (("development") !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    ("development") !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (true) {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    ("development") !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (("development") !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (("development") !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (("development") !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      ("development") !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (("development") !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (("development") !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (("development") !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      ("development") !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        ("development") !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          ("development") !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (true) {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      ("development") !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (true) {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      ("development") !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      ("development") !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      ("development") !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      ("development") !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (true) {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        ("development") !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (true) {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    ("development") !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      ("development") !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (("development") !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (("development") !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      ("development") !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (("development") !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (("development") !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (true) {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    ("development") !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (true) {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      ("development") !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    ("development") !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (true) {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (false) {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (("development") !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (("development") !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (true) {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        ("development") !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    ("development") !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (("development") !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      ("development") !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      ("development") !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (true) {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        ("development") !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (("development") !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (true) {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (("development") !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          ("development") !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      ("development") !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (true) {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (true) {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (("development") !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _notification = __webpack_require__(118);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-message';
	var iconPrefixCls = 'ivu-icon';
	var prefixKey = 'ivu_message_key_';

	var defaultDuration = 1.5;
	var top = void 0;
	var messageInstance = void 0;
	var key = 1;

	var iconTypes = {
	    'info': 'information-circled',
	    'success': 'checkmark-circled',
	    'warning': 'android-alert',
	    'error': 'close-circled',
	    'loading': 'load-c'
	};

	function getMessageInstance() {
	    messageInstance = messageInstance || _notification2.default.newInstance({
	        prefixCls: prefixCls,
	        style: {
	            top: top + 'px'
	        }
	    });

	    return messageInstance;
	}

	function notice(content) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	    var type = arguments[2];
	    var onClose = arguments[3];

	    if (!onClose) {
	        onClose = function onClose() {};
	    }
	    var iconType = iconTypes[type];

	    var loadCls = type === 'loading' ? ' ivu-load-loop' : '';

	    var instance = getMessageInstance();

	    instance.notice({
	        key: '' + prefixKey + key,
	        duration: duration,
	        style: {},
	        transitionName: 'move-up',
	        content: '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-' + type + '">\n                <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + iconType + loadCls + '"></i>\n                <span>' + content + '</span>\n            </div>\n        ',
	        onClose: onClose
	    });

	    return function () {
	        var target = key++;

	        return function () {
	            instance.remove('' + prefixKey + target);
	        };
	    }();
	}

	exports.default = {
	    info: function info(content, duration, onClose) {
	        return notice(content, duration, 'info', onClose);
	    },
	    success: function success(content, duration, onClose) {
	        return notice(content, duration, 'success', onClose);
	    },
	    warning: function warning(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    error: function error(content, duration, onClose) {
	        return notice(content, duration, 'error', onClose);
	    },
	    loading: function loading(content, duration, onClose) {
	        return notice(content, duration, 'loading', onClose);
	    },
	    config: function config(options) {
	        if (options.top) {
	            top = options.top;
	        }
	        if (options.duration) {
	            defaultDuration = options.duration;
	        }
	    },
	    destroy: function destroy() {
	        var instance = getMessageInstance();
	        messageInstance = null;
	        instance.destroy();
	    }
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _notification = __webpack_require__(119);

	var _notification2 = _interopRequireDefault(_notification);

	var _vue = __webpack_require__(116);

	var _vue2 = _interopRequireDefault(_vue);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_notification2.default.newInstance = function (properties) {
	    var _props = properties || {};

	    var props = '';
	    (0, _keys2.default)(_props).forEach(function (prop) {
	        props += ' :' + (0, _assist.camelcaseToHyphen)(prop) + '=' + prop;
	    });

	    var div = document.createElement('div');
	    div.innerHTML = '<notification' + props + '></notification>';
	    document.body.appendChild(div);

	    var notification = new _vue2.default({
	        el: div,
	        data: _props,
	        components: { Notification: _notification2.default }
	    }).$children[0];

	    return {
	        notice: function notice(noticeProps) {
	            notification.add(noticeProps);
	        },
	        remove: function remove(key) {
	            notification.close(key);
	        },

	        component: notification,
	        destroy: function destroy() {
	            document.body.removeChild(div);
	        }
	    };
	};

	exports.default = _notification2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\base\\notification\\notification.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(124)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3ec7cb18/notification.vue"
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

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _notice2 = __webpack_require__(121);

	var _notice3 = _interopRequireDefault(_notice2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-notification';
	var seed = 0;
	var now = Date.now();

	function getUuid() {
	    return 'ivuNotification_' + now + '_' + seed++;
	}

	exports.default = {
	    components: { Notice: _notice3.default },
	    props: {
	        prefixCls: {
	            type: String,
	            default: prefixCls
	        },
	        style: {
	            type: Object,
	            default: function _default() {
	                return {
	                    top: '65px',
	                    left: '50%'
	                };
	            }
	        },
	        content: {
	            type: String
	        },
	        className: {
	            type: String
	        }
	    },
	    data: function data() {
	        return {
	            notices: []
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + this.prefixCls, (0, _defineProperty3.default)({}, '' + this.className, !!this.className)];
	        }
	    },
	    methods: {
	        add: function add(notice) {
	            var key = notice.key || getUuid();

	            var _notice = (0, _assign2.default)({
	                style: {
	                    right: '50%'
	                },
	                content: '',
	                duration: 1.5,
	                closable: false,
	                key: key
	            }, notice);

	            this.notices.push(_notice);
	        },
	        close: function close(key) {
	            var notices = this.notices;

	            for (var i = 0; i < notices.length; i++) {
	                if (notices[i].key === key) {
	                    this.notices.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    }
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\base\\notification\\notice.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5bf26376/notice.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        prefixCls: {
	            type: String,
	            default: ''
	        },
	        duration: {
	            type: Number,
	            default: 1.5
	        },
	        content: {
	            type: String,
	            default: ''
	        },
	        style: {
	            type: Object,
	            default: function _default() {
	                return {
	                    right: '50%'
	                };
	            }
	        },
	        closable: {
	            type: Boolean,
	            default: false
	        },
	        className: {
	            type: String
	        },
	        key: {
	            type: String,
	            required: true
	        },
	        onClose: {
	            type: Function
	        },
	        transitionName: {
	            type: String
	        }
	    },
	    computed: {
	        baseClass: function baseClass() {
	            return this.prefixCls + '-notice';
	        },
	        classes: function classes() {
	            var _ref;

	            return [this.baseClass, (_ref = {}, (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), (0, _defineProperty3.default)(_ref, this.baseClass + '-closable', this.closable), _ref)];
	        },
	        contentClasses: function contentClasses() {
	            return this.baseClass + '-content';
	        }
	    },
	    methods: {
	        clearCloseTimer: function clearCloseTimer() {
	            if (this.closeTimer) {
	                clearTimeout(this.closeTimer);
	                this.closeTimer = null;
	            }
	        },
	        close: function close() {
	            this.clearCloseTimer();
	            this.onClose();
	            this.$parent.close(this.key);
	        }
	    },
	    compiled: function compiled() {
	        var _this = this;

	        this.clearCloseTimer();

	        if (this.duration !== 0) {
	            this.closeTimer = setTimeout(function () {
	                _this.close();
	            }, this.duration * 1000);
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        this.clearCloseTimer();
	    }
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"style\" :transition=\"transitionName\">\n    <div :class=\"[baseClass + '-content']\" v-el:content>{{{ content }}}</div>\n    <a :class=\"[baseClass + '-close']\" @click=\"close\" v-if=\"closable\">\n        <i class=\"ivu-icon ivu-icon-ios-close-empty\"></i>\n    </a>\n</div>\n";

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"style\">\n    <Notice v-for=\"notice in notices\"\n        :prefix-cls=\"prefixCls\"\n        :style=\"notice.style\"\n        :content=\"notice.content\"\n        :duration=\"notice.duration\"\n        :closable=\"notice.closable\"\n        :key=\"notice.key\"\n        :transition-name=\"notice.transitionName\"\n        :on-close=\"notice.onClose\">\n    </Notice>\n</div>\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _confirm = __webpack_require__(126);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modalInstance = void 0;

	function getModalInstance() {
	    modalInstance = modalInstance || _confirm2.default.newInstance({
	        closable: false,
	        maskClosable: false,
	        footerHide: true
	    });

	    return modalInstance;
	}

	function confirm(options) {
	    var instance = getModalInstance();

	    options.onRemove = function () {
	        modalInstance = null;
	    };

	    instance.show(options);
	}

	_confirm2.default.info = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    props.icon = 'info';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.success = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    props.icon = 'success';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.warning = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    props.icon = 'warning';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.error = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    props.icon = 'error';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.confirm = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    props.icon = 'confirm';
	    props.showCancel = true;
	    return confirm(props);
	};

	_confirm2.default.remove = function () {
	    if (!modalInstance) {
	        return false;
	    }

	    var instance = getModalInstance();

	    instance.remove();
	};

	exports.default = _confirm2.default;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _vue = __webpack_require__(116);

	var _vue2 = _interopRequireDefault(_vue);

	var _modal = __webpack_require__(127);

	var _modal2 = _interopRequireDefault(_modal);

	var _icon = __webpack_require__(54);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(75);

	var _button2 = _interopRequireDefault(_button);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-modal-confirm';

	_modal2.default.newInstance = function (properties) {
	    var _props = properties || {};

	    var props = '';
	    (0, _keys2.default)(_props).forEach(function (prop) {
	        props += ' :' + (0, _assist.camelcaseToHyphen)(prop) + '=' + prop;
	    });

	    var div = document.createElement('div');
	    div.innerHTML = '\n        <Modal' + props + ' :visible.sync="visible" :width="width">\n            <div class="' + prefixCls + '">\n                <div class="' + prefixCls + '-head">\n                    <div :class="iconTypeCls"><i :class="iconNameCls"></i></div>\n                    <div class="' + prefixCls + '-head-title">{{{ title }}}</div>\n                </div>\n                <div class="' + prefixCls + '-body">\n                    {{{ body }}}\n                </div>\n                <div class="' + prefixCls + '-footer">\n                    <i-button type="ghost" size="large" v-if="showCancel" @click="cancel">{{ cancelText }}</i-button>\n                    <i-button type="primary" size="large" :loading="buttonLoading" @click="ok">{{ okText }}</i-button>\n                </div>\n            </div>\n        </Modal>\n    ';
	    document.body.appendChild(div);

	    var modal = new _vue2.default({
	        el: div,
	        components: { Modal: _modal2.default, iButton: _button2.default, Icon: _icon2.default },
	        data: (0, _assign2.default)(_props, {
	            visible: false,
	            width: 416,
	            title: '',
	            body: '',
	            iconType: '',
	            iconName: '',
	            okText: '确定',
	            cancelText: '取消',
	            showCancel: false,
	            loading: false,
	            buttonLoading: false
	        }),
	        computed: {
	            iconTypeCls: function iconTypeCls() {
	                return [prefixCls + '-head-icon', prefixCls + '-head-icon-' + this.iconType];
	            },
	            iconNameCls: function iconNameCls() {
	                return ['ivu-icon', 'ivu-icon-' + this.iconName];
	            }
	        },
	        methods: {
	            cancel: function cancel() {
	                this.visible = false;
	                this.buttonLoading = false;
	                this.onCancel();
	                this.remove();
	            },
	            ok: function ok() {
	                if (this.loading) {
	                    this.buttonLoading = true;
	                } else {
	                    this.visible = false;
	                    this.remove();
	                }
	                this.onOk();
	            },
	            remove: function remove() {
	                var _this = this;

	                setTimeout(function () {
	                    _this.destroy();
	                }, 300);
	            },
	            destroy: function destroy() {
	                this.$destroy();
	                document.body.removeChild(div);
	                this.onRemove();
	            },
	            onOk: function onOk() {},
	            onCancel: function onCancel() {},
	            onRemove: function onRemove() {}
	        }
	    }).$children[0];

	    return {
	        show: function show(props) {
	            modal.$parent.showCancel = props.showCancel;
	            modal.$parent.iconType = props.icon;

	            switch (props.icon) {
	                case 'info':
	                    modal.$parent.iconName = 'information-circled';
	                    break;
	                case 'success':
	                    modal.$parent.iconName = 'checkmark-circled';
	                    break;
	                case 'warning':
	                    modal.$parent.iconName = 'android-alert';
	                    break;
	                case 'error':
	                    modal.$parent.iconName = 'close-circled';
	                    break;
	                case 'confirm':
	                    modal.$parent.iconName = 'help-circled';
	                    break;
	            }

	            if ('width' in props) {
	                modal.$parent.width = props.width;
	            }

	            if ('title' in props) {
	                modal.$parent.title = props.title;
	            }

	            if ('content' in props) {
	                modal.$parent.body = props.content;
	            }

	            if ('okText' in props) {
	                modal.$parent.okText = props.okText;
	            }

	            if ('cancelText' in props) {
	                modal.$parent.cancelText = props.cancelText;
	            }

	            if ('onCancel' in props) {
	                modal.$parent.onCancel = props.onCancel;
	            }

	            if ('onOk' in props) {
	                modal.$parent.onOk = props.onOk;
	            }

	            if ('loading' in props) {
	                modal.$parent.loading = props.loading;
	            }

	            modal.$parent.onRemove = props.onRemove;

	            modal.visible = true;
	        },
	        remove: function remove() {
	            modal.visible = false;
	            modal.$parent.buttonLoading = false;
	            modal.$parent.remove();
	        },

	        component: modal
	    };
	};

	exports.default = _modal2.default;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(128)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\modal\\modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(129)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7cc4d2b2/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(75);

	var _button2 = _interopRequireDefault(_button);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-modal';

	exports.default = {
	    components: { Icon: _icon2.default, iButton: _button2.default },
	    props: {
	        visible: {
	            type: Boolean,
	            default: false
	        },
	        closable: {
	            type: Boolean,
	            default: true
	        },
	        maskClosable: {
	            type: Boolean,
	            default: true
	        },
	        title: {
	            type: String
	        },
	        width: {
	            type: [Number, String],
	            default: 520
	        },
	        okText: {
	            type: String,
	            default: '确定'
	        },
	        cancelText: {
	            type: String,
	            default: '取消'
	        },
	        loading: {
	            type: Boolean,
	            default: false
	        },
	        style: {
	            type: Object
	        },
	        className: {
	            type: String
	        },

	        footerHide: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            wrapShow: false,
	            showHead: true,
	            buttonLoading: false
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return [prefixCls + '-wrap', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-hidden', !this.wrapShow), (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), _ref)];
	        },
	        maskClasses: function maskClasses() {
	            return prefixCls + '-mask';
	        },
	        classes: function classes() {
	            return '' + prefixCls;
	        },
	        styles: function styles() {
	            var style = {};

	            var styleWidth = {
	                width: this.width + 'px'
	            };

	            var customStyle = !!this.style ? this.style : {};

	            (0, _assign2.default)(style, styleWidth, customStyle);

	            return style;
	        }
	    },
	    methods: {
	        close: function close() {
	            this.visible = false;
	            this.$emit('on-cancel');
	        },
	        mask: function mask() {
	            if (this.maskClosable) {
	                this.close();
	            }
	        },
	        cancel: function cancel() {
	            this.close();
	        },
	        ok: function ok() {
	            if (this.loading) {
	                this.buttonLoading = true;
	            } else {
	                this.visible = false;
	            }
	            this.$emit('on-ok');
	        },
	        EscClose: function EscClose(e) {
	            if (this.visible && this.closable) {
	                if (e.keyCode === 27) {
	                    this.close();
	                }
	            }
	        },
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
	        setScrollBar: function setScrollBar() {
	            if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
	                document.body.style.paddingRight = this.scrollBarWidth + 'px';
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
	            document.body.style.overflow = '';
	            this.resetScrollBar();
	        }
	    },
	    ready: function ready() {
	        if (this.visible) {
	            this.wrapShow = true;
	        }

	        var showHead = true;

	        if (this.$els.head.innerHTML == '<p></p>' && !this.title) {
	            showHead = false;
	        }

	        this.showHead = showHead;

	        document.addEventListener('keydown', this.EscClose);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('keydown', this.EscClose);
	    },

	    watch: {
	        visible: function visible(val) {
	            var _this = this;

	            if (val === false) {
	                this.buttonLoading = false;
	                setTimeout(function () {
	                    _this.wrapShow = false;
	                }, 300);
	                this.removeScrollEffect();
	            } else {
	                this.wrapShow = true;
	                this.addScrollEffect();
	            }
	        }
	    }
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"maskClasses\" v-show=\"visible\" @click=\"mask\" transition=\"fade\"></div>\n    <div :class=\"classes\" :style=\"styles\" v-show=\"visible\" transition=\"ease\">\n        <div :class=\"[prefixCls + '-content']\">\n            <a :class=\"[prefixCls + '-close']\" v-if=\"closable\" @click=\"close\">\n                <slot name=\"close\">\n                    <Icon type=\"ios-close-empty\"></Icon>\n                </slot>\n            </a>\n            <div :class=\"[prefixCls + '-header']\" v-if=\"showHead\" v-el:head><slot name=\"header\"><p>{{ title }}</p></slot></div>\n            <div :class=\"[prefixCls + '-body']\"><slot></slot></div>\n            <div :class=\"[prefixCls + '-footer']\" v-if=\"!footerHide\">\n                <slot name=\"footer\">\n                    <i-button type=\"ghost\" size=\"large\" @click=\"cancel\">{{ cancelText }}</i-button>\n                    <i-button type=\"primary\" size=\"large\" :loading=\"buttonLoading\" @click=\"ok\">{{ okText }}</i-button>\n                </slot>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _notification = __webpack_require__(118);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-notice';
	var iconPrefixCls = 'ivu-icon';
	var prefixKey = 'ivu_notice_key_';

	var top = 24;
	var defaultDuration = 4.5;
	var noticeInstance = void 0;
	var key = 1;

	var iconTypes = {
	    'info': 'information-circled',
	    'success': 'checkmark-circled',
	    'warning': 'android-alert',
	    'error': 'close-circled'
	};

	function getNoticeInstance() {
	    noticeInstance = noticeInstance || _notification2.default.newInstance({
	        prefixCls: prefixCls,
	        style: {
	            top: top + 'px',
	            right: 0
	        }
	    });

	    return noticeInstance;
	}

	function notice(type, options) {
	    var title = options.title || '';
	    var desc = options.desc || '';
	    var noticeKey = options.key || '' + prefixKey + key;
	    var onClose = options.onClose || function () {};

	    var duration = options.duration === 0 ? 0 : options.duration || defaultDuration;

	    key++;

	    var instance = getNoticeInstance();

	    var content = void 0;

	    if (type == 'normal') {
	        content = '\n            <div class="' + prefixCls + '-custom-content">\n                <div class="' + prefixCls + '-title">' + title + '</div>\n                <div class="' + prefixCls + '-desc">' + desc + '</div>\n            </div>\n        ';
	    } else {
	        var iconType = iconTypes[type];
	        content = '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-icon">\n                <span class="' + prefixCls + '-icon ' + prefixCls + '-icon-' + type + '">\n                    <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + iconType + '"></i>\n                </span>\n                <div class="' + prefixCls + '-title">' + title + '</div>\n                <div class="' + prefixCls + '-desc">' + desc + '</div>\n            </div>\n        ';
	    }

	    instance.notice({
	        key: noticeKey.toString(),
	        duration: duration,
	        style: {},
	        transitionName: 'move-right',
	        content: content,
	        onClose: onClose,
	        closable: true
	    });
	}

	exports.default = {
	    open: function open(options) {
	        return notice('normal', options);
	    },
	    info: function info(options) {
	        return notice('info', options);
	    },
	    success: function success(options) {
	        return notice('success', options);
	    },
	    warning: function warning(options) {
	        return notice('warning', options);
	    },
	    error: function error(options) {
	        return notice('error', options);
	    },
	    config: function config(options) {
	        if (options.top) {
	            top = options.top;
	        }
	        if (options.duration || options.duration === 0) {
	            defaultDuration = options.duration;
	        }
	    },
	    close: function close(key) {
	        if (key) {
	            key = key.toString();
	            if (noticeInstance) {
	                noticeInstance.remove(key);
	            }
	        } else {
	            return false;
	        }
	    },
	    destroy: function destroy() {
	        var instance = getNoticeInstance();
	        noticeInstance = null;
	        instance.destroy();
	    }
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _page = __webpack_require__(132);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _page2.default;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\page\\page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-918aba36/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	var _options = __webpack_require__(134);

	var _options2 = _interopRequireDefault(_options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        isSmall: function isSmall() {
	            return !!this.size;
	        },
	        allPages: function allPages() {
	            var allPage = Math.ceil(this.total / this.pageSize);
	            return allPage === 0 ? 1 : allPage;
	        },
	        simpleWrapClasses: function simpleWrapClasses() {
	            return ['' + prefixCls, prefixCls + '-simple'];
	        },
	        simplePagerClasses: function simplePagerClasses() {
	            return prefixCls + '-simple-pager';
	        },
	        wrapClasses: function wrapClasses() {
	            return ['' + prefixCls, {
	                'mini': !!this.size
	            }];
	        },
	        prevClasses: function prevClasses() {
	            return [prefixCls + '-prev', (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.current === 1)];
	        },
	        nextClasses: function nextClasses() {
	            return [prefixCls + '-next', (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.current === this.allPages)];
	        },
	        firstPageClasses: function firstPageClasses() {
	            return [prefixCls + '-item', (0, _defineProperty3.default)({}, prefixCls + '-item-active', this.current === 1)];
	        },
	        lastPageClasses: function lastPageClasses() {
	            return [prefixCls + '-item', (0, _defineProperty3.default)({}, prefixCls + '-item-active', this.current === this.allPages)];
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

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(135)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\page\\options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(182)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-58d74790/options.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _select = __webpack_require__(136);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(179);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-page';

	function isValueNumber(value) {
	    return (/^[1-9][0-9]*$/.test(value + '')
	    );
	}

	exports.default = {
	    components: { iSelect: _select2.default, iOption: _option2.default },
	    props: {
	        pageSizeOpts: Array,
	        showSizer: Boolean,
	        showElevator: Boolean,
	        current: Number,
	        _current: Number,
	        pageSize: Number,
	        allPages: Number,
	        isSmall: Boolean
	    },
	    computed: {
	        size: function size() {
	            return this.isSmall ? 'small' : 'default';
	        },
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

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(137)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(178)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-720a2685/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(138);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _dropdown = __webpack_require__(173);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _clickoutside = __webpack_require__(177);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-select';

	exports.default = {
	    components: { Icon: _icon2.default, Dropdown: _dropdown2.default },
	    directives: { clickoutside: _clickoutside2.default },
	    props: {
	        model: {
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
	            type: String,
	            default: '请选择'
	        },
	        filterable: {
	            type: Boolean,
	            default: false
	        },
	        filterMethod: {
	            type: Function
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large', 'default']);
	            }
	        },
	        labelInValue: {
	            type: Boolean,
	            default: false
	        },
	        notFoundText: {
	            type: String,
	            default: '无匹配数据'
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            visible: false,
	            options: [],
	            optionInstances: [],
	            selectedSingle: '',
	            selectedMultiple: [],
	            focusIndex: 0,
	            query: '',
	            inputLength: 20,
	            notFound: false,
	            slotChangeDuration: false };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-visible', this.visible), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-multiple', this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-single', !this.multiple), (0, _defineProperty3.default)(_ref, prefixCls + '-show-clear', this.showCloseIcon), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.size, !!this.size), _ref)];
	        },
	        showPlaceholder: function showPlaceholder() {
	            var status = false;

	            if (typeof this.model === 'string') {
	                if (this.model === '') {
	                    status = true;
	                }
	            } else if (Array.isArray(this.model)) {
	                if (!this.model.length) {
	                    status = true;
	                }
	            }

	            return status;
	        },
	        showCloseIcon: function showCloseIcon() {
	            return !this.multiple && this.clearable && !this.showPlaceholder;
	        },
	        inputStyle: function inputStyle() {
	            var style = {};

	            if (this.multiple) {
	                if (this.showPlaceholder) {
	                    style.width = '100%';
	                } else {
	                    style.width = this.inputLength + 'px';
	                }
	            }

	            return style;
	        }
	    },
	    methods: {
	        toggleMenu: function toggleMenu() {
	            if (this.disabled) {
	                return false;
	            }

	            this.visible = !this.visible;
	        },
	        hideMenu: function hideMenu() {
	            this.visible = false;
	            this.focusIndex = 0;
	            this.$broadcast('on-select-close');
	        },
	        findChild: function findChild(cb) {
	            var find = function find(child) {
	                var name = child.$options.componentName;

	                if (name) {
	                    cb(child);
	                } else if (child.$children.length) {
	                    child.$children.forEach(function (innerChild) {
	                        find(innerChild, cb);
	                    });
	                }
	            };

	            if (this.optionInstances.length) {
	                this.optionInstances.forEach(function (child) {
	                    find(child);
	                });
	            } else {
	                this.$children.forEach(function (child) {
	                    find(child);
	                });
	            }
	        },
	        updateOptions: function updateOptions(init) {
	            var _this = this;

	            var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var options = [];
	            var index = 1;

	            this.findChild(function (child) {
	                options.push({
	                    value: child.value,
	                    label: child.label === undefined ? child.$el.innerHTML : child.label
	                });
	                child.index = index++;

	                if (init) {
	                    _this.optionInstances.push(child);
	                }
	            });

	            this.options = options;

	            if (init) {
	                this.updateSingleSelected(true, slot);
	                this.updateMultipleSelected(true, slot);
	            }
	        },
	        updateSingleSelected: function updateSingleSelected() {
	            var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	            var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var type = (0, _typeof3.default)(this.model);

	            if (type === 'string' || type === 'number') {
	                var findModel = false;

	                for (var i = 0; i < this.options.length; i++) {
	                    if (this.model === this.options[i].value) {
	                        this.selectedSingle = this.options[i].label;
	                        findModel = true;
	                        break;
	                    }
	                }

	                if (slot && !findModel) {
	                    this.model = '';
	                    this.query = '';
	                }
	            }

	            this.toggleSingleSelected(this.model, init);
	        },
	        clearSingleSelect: function clearSingleSelect() {
	            if (this.showCloseIcon) {
	                this.findChild(function (child) {
	                    child.selected = false;
	                });
	                this.model = '';

	                if (this.filterable) {
	                    this.query = '';
	                }
	            }
	        },
	        updateMultipleSelected: function updateMultipleSelected() {
	            var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	            var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (this.multiple && Array.isArray(this.model)) {
	                var selected = [];

	                for (var i = 0; i < this.model.length; i++) {
	                    var model = this.model[i];

	                    for (var j = 0; j < this.options.length; j++) {
	                        var option = this.options[j];

	                        if (model === option.value) {
	                            selected.push({
	                                value: option.value,
	                                label: option.label
	                            });
	                        }
	                    }
	                }

	                this.selectedMultiple = selected;

	                if (slot) {
	                    var selectedModel = [];

	                    for (var _i = 0; _i < selected.length; _i++) {
	                        selectedModel.push(selected[_i].value);
	                    }

	                    if (this.model.length === selectedModel.length) {
	                        this.slotChangeDuration = true;
	                    }

	                    this.model = selectedModel;
	                }
	            }
	            this.toggleMultipleSelected(this.model, init);
	        },
	        removeTag: function removeTag(index) {
	            if (this.disabled) {
	                return false;
	            }
	            this.model.splice(index, 1);

	            if (this.filterable && this.visible) {
	                this.$els.input.focus();
	            }

	            this.$broadcast('on-update-popper');
	        },
	        toggleSingleSelected: function toggleSingleSelected(value) {
	            var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (!this.multiple) {
	                var label = '';

	                this.findChild(function (child) {
	                    if (child.value === value) {
	                        child.selected = true;
	                        label = child.label === undefined ? child.$el.innerHTML : child.label;
	                    } else {
	                        child.selected = false;
	                    }
	                });

	                this.hideMenu();

	                if (!init) {
	                    if (this.labelInValue) {
	                        this.$emit('on-change', {
	                            value: value,
	                            label: label
	                        });
	                    } else {
	                        this.$emit('on-change', value);
	                    }
	                }
	            }
	        },
	        toggleMultipleSelected: function toggleMultipleSelected(value) {
	            var _this2 = this;

	            var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (this.multiple) {
	                (function () {
	                    var hybridValue = [];
	                    for (var i = 0; i < value.length; i++) {
	                        hybridValue.push({
	                            value: value[i]
	                        });
	                    }

	                    _this2.findChild(function (child) {
	                        var index = value.indexOf(child.value);

	                        if (index >= 0) {
	                            child.selected = true;
	                            hybridValue[index].label = child.label === undefined ? child.$el.innerHTML : child.label;
	                        } else {
	                            child.selected = false;
	                        }
	                    });

	                    if (!init) {
	                        if (_this2.labelInValue) {
	                            _this2.$emit('on-change', hybridValue);
	                        } else {
	                            _this2.$emit('on-change', value);
	                        }
	                    }
	                })();
	            }
	        },
	        handleClose: function handleClose() {
	            this.hideMenu();
	        },
	        handleKeydown: function handleKeydown(e) {
	            if (this.visible) {
	                var keyCode = e.keyCode;

	                if (keyCode === 27) {
	                    e.preventDefault();
	                    this.hideMenu();
	                }

	                if (keyCode === 40) {
	                    e.preventDefault();
	                    this.navigateOptions('next');
	                }

	                if (keyCode === 38) {
	                    e.preventDefault();
	                    this.navigateOptions('prev');
	                }

	                if (keyCode === 13) {
	                    e.preventDefault();

	                    this.findChild(function (child) {
	                        if (child.isFocus) {
	                            child.select();
	                        }
	                    });
	                }
	            }
	        },
	        navigateOptions: function navigateOptions(direction) {
	            var _this3 = this;

	            if (direction === 'next') {
	                var next = this.focusIndex + 1;
	                this.focusIndex = this.focusIndex === this.options.length ? 1 : next;
	            } else if (direction === 'prev') {
	                var prev = this.focusIndex - 1;
	                this.focusIndex = this.focusIndex <= 1 ? this.options.length : prev;
	            }

	            var child_status = {
	                disabled: false,
	                hidden: false
	            };

	            var find_deep = false;

	            this.findChild(function (child) {
	                if (child.index === _this3.focusIndex) {
	                    child_status.disabled = child.disabled;
	                    child_status.hidden = child.hidden;

	                    if (!child.disabled && !child.hidden) {
	                        child.isFocus = true;
	                    }
	                } else {
	                    child.isFocus = false;
	                }

	                if (!child.hidden && !child.disabled) {
	                    find_deep = true;
	                }
	            });

	            this.resetScrollTop();

	            if ((child_status.disabled || child_status.hidden) && find_deep) {
	                this.navigateOptions(direction);
	            }
	        },
	        resetScrollTop: function resetScrollTop() {
	            var index = this.focusIndex - 1;
	            var bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
	            var topOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;

	            if (bottomOverflowDistance > 0) {
	                this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
	            }
	            if (topOverflowDistance < 0) {
	                this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
	            }
	        },
	        handleBlur: function handleBlur() {
	            var _this4 = this;

	            setTimeout(function () {
	                var model = _this4.model;

	                if (_this4.multiple) {} else {
	                    if (model !== '') {
	                        _this4.findChild(function (child) {
	                            if (child.value === model) {
	                                _this4.query = child.searchLabel;
	                            }
	                        });
	                    }
	                }
	            }, 300);
	        },
	        resetInputState: function resetInputState() {
	            this.inputLength = this.$els.input.value.length * 12 + 20;
	        },
	        handleInputDelete: function handleInputDelete() {
	            if (this.multiple && this.model.length && this.query === '') {
	                this.removeTag(this.model.length - 1);
	            }
	        },
	        slotChange: function slotChange() {
	            this.options = [];
	            this.optionInstances = [];
	        }
	    },
	    ready: function ready() {
	        var _this5 = this;

	        this.updateOptions(true);
	        document.addEventListener('keydown', this.handleKeydown);

	        if (_assist.MutationObserver) {
	            this.observer = new _assist.MutationObserver(function () {
	                _this5.slotChange();
	                _this5.updateOptions(true, true);
	            });

	            this.observer.observe(this.$els.options, {
	                childList: true,
	                characterData: true,
	                subtree: true
	            });
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('keydown', this.handleKeydown);
	        if (this.observer) {
	            this.observer.disconnect();
	        }
	    },

	    watch: {
	        model: function model() {
	            if (this.multiple) {
	                if (this.slotChangeDuration) {
	                    this.slotChangeDuration = false;
	                } else {
	                    this.updateMultipleSelected();
	                }
	            } else {
	                this.updateSingleSelected();
	            }
	        },
	        visible: function visible(val) {
	            if (val) {
	                if (this.multiple && this.filterable) {
	                    this.$els.input.focus();
	                }
	                this.$broadcast('on-update-popper');
	            } else {
	                if (this.filterable) {
	                    this.$els.input.blur();
	                }
	                this.$broadcast('on-destroy-popper');
	            }
	        },
	        query: function query(val) {
	            var _this6 = this;

	            this.$broadcast('on-query-change', val);
	            var is_hidden = true;

	            this.$nextTick(function () {
	                _this6.findChild(function (child) {
	                    if (!child.hidden) {
	                        is_hidden = false;
	                    }
	                });
	                _this6.notFound = is_hidden;
	            });
	        }
	    },
	    events: {
	        'on-select-selected': function onSelectSelected(value) {
	            var _this7 = this;

	            if (this.model === value) {
	                this.hideMenu();
	            } else {
	                if (this.multiple) {
	                    var index = this.model.indexOf(value);
	                    if (index >= 0) {
	                        this.removeTag(index);
	                    } else {
	                        this.model.push(value);
	                        this.$broadcast('on-update-popper');
	                    }

	                    if (this.filterable) {
	                        this.query = '';
	                        this.$els.input.focus();
	                    }
	                } else {
	                    this.model = value;

	                    if (this.filterable) {
	                        this.findChild(function (child) {
	                            if (child.value === value) {
	                                _this7.query = child.searchLabel;
	                            }
	                        });
	                    }
	                }
	            }
	        }
	    }
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(139);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(159);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	__webpack_require__(154);
	module.exports = __webpack_require__(158).f('iterator');

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(142)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(143)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(144)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(145)
	  , hide           = __webpack_require__(9)
	  , has            = __webpack_require__(22)
	  , Iterators      = __webpack_require__(146)
	  , $iterCreate    = __webpack_require__(147)
	  , setToStringTag = __webpack_require__(151)
	  , getPrototypeOf = __webpack_require__(153)
	  , ITERATOR       = __webpack_require__(152)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(148)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(151)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(152)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(11)
	  , dPs         = __webpack_require__(149)
	  , enumBugKeys = __webpack_require__(34)
	  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(150).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(10)
	  , anObject = __webpack_require__(11)
	  , getKeys  = __webpack_require__(20);

	module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f
	  , has = __webpack_require__(22)
	  , TAG = __webpack_require__(152)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(32)('wks')
	  , uid        = __webpack_require__(33)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(22)
	  , toObject    = __webpack_require__(37)
	  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(155);
	var global        = __webpack_require__(5)
	  , hide          = __webpack_require__(9)
	  , Iterators     = __webpack_require__(146)
	  , TO_STRING_TAG = __webpack_require__(152)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(156)
	  , step             = __webpack_require__(157)
	  , Iterators        = __webpack_require__(146)
	  , toIObject        = __webpack_require__(23);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(143)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(152);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(22)
	  , DESCRIPTORS    = __webpack_require__(14)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(145)
	  , META           = __webpack_require__(162).KEY
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(151)
	  , uid            = __webpack_require__(33)
	  , wks            = __webpack_require__(152)
	  , wksExt         = __webpack_require__(158)
	  , wksDefine      = __webpack_require__(163)
	  , keyOf          = __webpack_require__(164)
	  , enumKeys       = __webpack_require__(165)
	  , isArray        = __webpack_require__(166)
	  , anObject       = __webpack_require__(11)
	  , toIObject      = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(148)
	  , gOPNExt        = __webpack_require__(167)
	  , $GOPD          = __webpack_require__(169)
	  , $DP            = __webpack_require__(10)
	  , $keys          = __webpack_require__(20)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(168).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(36).f  = $propertyIsEnumerable;
	  __webpack_require__(35).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(144)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(33)('meta')
	  , isObject = __webpack_require__(12)
	  , has      = __webpack_require__(22)
	  , setDesc  = __webpack_require__(10).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(15)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(144)
	  , wksExt         = __webpack_require__(158)
	  , defineProperty = __webpack_require__(10).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(20)
	  , toIObject = __webpack_require__(23);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(20)
	  , gOPS    = __webpack_require__(35)
	  , pIE     = __webpack_require__(36);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(23)
	  , gOPN      = __webpack_require__(168).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(21)
	  , hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(36)
	  , createDesc     = __webpack_require__(18)
	  , toIObject      = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(17)
	  , has            = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(13)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(163)('asyncIterator');

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(163)('observable');

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(176)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4b7f2ada/dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(175);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            popper: null
	        };
	    },

	    methods: {
	        update: function update() {
	            var _this = this;

	            if (this.popper) {
	                this.$nextTick(function () {
	                    _this.popper.update();
	                });
	            } else {
	                this.$nextTick(function () {
	                    _this.popper = new _popper2.default(_this.$parent.$els.reference, _this.$el, {
	                        gpuAcceleration: false,
	                        placement: 'bottom-start',
	                        boundariesPadding: 0,
	                        forceAbsolute: true,
	                        boundariesElement: 'body'
	                    });
	                    _this.popper.onCreate(function (popper) {
	                        _this.resetTransformOrigin(popper);
	                    });
	                });
	            }
	        },
	        destroy: function destroy() {
	            var _this2 = this;

	            if (this.popper) {
	                this.resetTransformOrigin(this.popper);
	                setTimeout(function () {
	                    _this2.popper.destroy();
	                    _this2.popper = null;
	                }, 300);
	            }
	        },
	        resetTransformOrigin: function resetTransformOrigin(popper) {
	            var placementMap = { top: 'bottom', bottom: 'top' };
	            var placement = popper._popper.getAttribute('x-placement').split('-')[0];
	            var origin = placementMap[placement];
	            popper._popper.style.transformOrigin = 'center ' + origin;
	        }
	    },
	    ready: function ready() {
	        this.$on('on-update-popper', this.update);
	        this.$on('on-destroy-popper', this.destroy);
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.popper) {
	            this.popper.destroy();
	        }
	    }
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
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

	//
	// Cross module loader
	// Supported: Node, AMD, Browser globals
	//
	;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.Popper = factory();
	    }
	}(this, function () {

	    'use strict';

	    var root = window;

	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',

	        gpuAcceleration: true,

	        // shift popper from its origin by the given amount of pixels (can be negative)
	        offset: 0,

	        // the element which will act as boundary of the popper
	        boundariesElement: 'viewport',

	        // amount of pixel used to define a minimum distance between the boundaries and the popper
	        boundariesPadding: 5,

	        // popper will try to prevent overflow following this order,
	        // by default, then, it could overflow on the left and on top of the boundariesElement
	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	        // the behavior used by flip to change the placement of the popper
	        flipBehavior: 'flip',

	        arrowElement: '[x-arrow]',

	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: [ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	        modifiersIgnored: [],
	    };

	    /**
	     * Create a new Popper.js instance
	     * @constructor Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement|Object} popper
	     *      The HTML element used as popper, or a configuration used to generate the popper.
	     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
	     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
	     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
	     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
	     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
	     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
	     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
	     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
	     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
	     * @param {Object} options
	     * @param {String} [options.placement=bottom]
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	     *      left(-start, -end)`
	     *
	     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Boolean} [options.gpuAcceleration=true]
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Number} [options.offset=0]
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {String|Element} [options.boundariesElement='viewport']
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Number} [options.boundariesPadding=5]
	     *      Additional padding for the boundaries
	     *
	     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
	     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last ones will never overflow
	     *
	     * @param {String|Array} [options.flipBehavior='flip']
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     *
	     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
	     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
	     *      to this array to edit the offsets and placement.
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Array} [options.modifiersIgnored=[]]
	     *      Put here any built-in modifier name you want to exclude from the modifiers list
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Boolean} [options.removeOnDestroy=false]
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     */
	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = { onCreateCalled: false };

	        // if the popper variable is a configuration object, parse it to generate an HTMLElement
	        // generate a default popper if is not defined
	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        }
	        // otherwise, use the given HTMLElement as popper
	        else {
	            this._popper = popper.jquery ? popper[0] : popper;
	        }

	        // with {} we create a new object with the options inside it
	        this._options = Object.assign({}, DEFAULTS, options);

	        // refactoring modifiers' list
	        this._options.modifiers = this._options.modifiers.map(function(modifier){
	            // remove ignored modifiers
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

	            // set the x-placement attribute before everything else because it could be used to add margins to the popper
	            // margins needs to be calculated to get the correct popper offsets
	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }

	            // return predefined modifier identified by string or keep the custom one
	            return this.modifiers[modifier] || modifier;
	        }.bind(this));

	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position});

	        // determine how we should set the origin of offsets
	        this.state.isParentTransformed = this._getIsParentTransformed(this._popper);

	        // fire the first update to position the popper in the right place
	        this.update();

	        // setup event listeners, they will take care of update the position in specific situations
	        this._setupEventListeners();
	        return this;
	    }


	    //
	    // Methods
	    //
	    /**
	     * Destroy the popper
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.destroy = function() {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();

	        // remove the popper if user explicity asked for the deletion on destroy
	        if (this._options.removeOnDestroy) {
	            this._popper.parentNode.removeChild(this._popper);
	        }
	        return this;
	    };

	    /**
	     * Updates the position of the popper, computing the new offsets and applying the new style
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.update = function() {
	        var data = { instance: this, styles: {} };

	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position});

	        // to avoid useless computations we throttle the popper position refresh to 60fps
	        root.requestAnimationFrame(function() {
	            var now = root.performance.now();
	            if(now - this.state.lastFrame <= 16) {
	                // this update fired to early! drop it
	                return;
	            }
	            this.state.lastFrame = now;

	            // store placement inside the data object, modifiers will be able to edit `placement` if needed
	            // and refer to _originalPlacement to know the original value
	            data.placement = this._options.placement;
	            data._originalPlacement = this._options.placement;

	            // compute the popper and trigger offsets and put them inside data.offsets
	            data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	            // get boundaries
	            data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	            data = this.runModifiers(data, this._options.modifiers);

	            if (!isFunction(this.state.createCalback)) {
	                this.state.onCreateCalled = true;
	            }
	            if (!this.state.onCreateCalled) {
	                this.state.onCreateCalled = true;
	                if (isFunction(this.state.createCalback)) {
	                    this.state.createCalback(this);
	                }
	            } else if (isFunction(this.state.updateCallback)) {
	                this.state.updateCallback(data);
	            }
	        }.bind(this));
	    };

	    /**
	     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onCreate = function(callback) {
	        // the createCallbacks return as first argument the popper instance
	        this.state.createCalback = callback;
	        return this;
	    };

	    /**
	     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	     * used to style popper and its arrow.
	     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onUpdate = function(callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };

	    /**
	     * Helper used to generate poppers from a configuration file
	     * @method
	     * @memberof Popper
	     * @param config {Object} configuration
	     * @returns {HTMLElement} popper
	     */
	    Popper.prototype.parse = function(config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: [ 'popper' ],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: [ 'popper__arrow' ],
	            arrowAttributes: [ 'x-arrow']
	        };
	        config = Object.assign({}, defaultConfig, config);

	        var d = root.document;

	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        }else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }

	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }

	        var parent = config.parent.jquery ? config.parent[0] : config.parent;

	        // if the given parent is a string, use it to match an element
	        // if more than one element is matched, the first one will be used as parent
	        // if no elements are matched, the script will throw an error
	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }
	        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
	        // the first one will be used as parent
	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }

	        // append the generated popper to its parent
	        parent.appendChild(popper);

	        return popper;

	        /**
	         * Adds class names to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} classes
	         */
	        function addClassNames(element, classNames) {
	            classNames.forEach(function(className) {
	                element.classList.add(className);
	            });
	        }

	        /**
	         * Adds attributes to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} attributes
	         * @example
	         * addAttributes(element, [ 'data-info:foobar' ]);
	         */
	        function addAttributes(element, attributes) {
	            attributes.forEach(function(attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }

	    };

	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper
	     * @param config {HTMLElement} popper element
	     * @returns {HTMLElement} reference element
	     */
	    Popper.prototype._getPosition = function(popper, reference) {
	        var container = getOffsetParent(reference);

	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };

	    /**
	     * Helper used to determine if the popper's parent is transformed.
	     * @param  {[type]} popper [description]
	     * @return {[type]}        [description]
	     */
	    Popper.prototype._getIsParentTransformed = function(popper) {
	      return isTransformed(popper.parentNode);
	    };

	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    Popper.prototype._getOffsets = function(popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};

	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';

	        var isParentTransformed = this.state.isParentTransformed;

	        //
	        // Get reference element position
	        //
	        var offsetParent = (isParentFixed && isParentTransformed) ? getOffsetParent(reference) : getOffsetParent(popper);
	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, offsetParent, isParentFixed, isParentTransformed);

	        //
	        // Get popper sizes
	        //
	        var popperRect = getOuterSizes(popper);

	        //
	        // Compute offsets of popper
	        //

	        // depending by the popper placement we have to compute its offsets slightly differently
	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }

	        // Add width and height to our offsets object
	        popperOffsets.width   = popperRect.width;
	        popperOffsets.height  = popperRect.height;


	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };


	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._setupEventListeners = function() {
	        // NOTE: 1 DOM access here
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);
	        // if the boundariesElement is window we don't need to listen for the scroll event
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };

	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._removeEventListeners = function() {
	        // NOTE: 1 DOM access here
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };

	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    Popper.prototype._getBoundaries = function(data, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;

	            height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	            width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);

	            // if the popper is fixed we don't have to substract scrolling from the boundaries
	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };


	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper
	     * @access public
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    Popper.prototype.runModifiers = function(data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }

	        modifiersToRun.forEach(function(modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));

	        return data;
	    };

	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * @method
	     * @memberof Popper
	     * @returns {Boolean}
	     */

	    Popper.prototype.isModifierRequired = function(requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function(modifier) {
	            return modifier === requested;
	        }).length;
	    };

	    //
	    // Modifiers
	    //

	    /**
	     * Modifiers list
	     * @namespace Popper.modifiers
	     * @memberof Popper
	     * @type {Object}
	     */
	    Popper.prototype.modifiers = {};

	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The same data object
	     */
	    Popper.prototype.modifiers.applyStyle = function(data) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	        // we automatically use the supported prefixed version if needed
	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	            styles.left =left;
	            styles.top = top;
	        }

	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        Object.assign(styles, data.styles);

	        setStyle(this._popper, styles);

	        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	        // NOTE: 1 DOM access here
	        this._popper.setAttribute('x-placement', data.placement);

	        // if the arrow style has been computed, apply the arrow style
	        if (data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow);
	        }

	        // return the data object to allow chaining of other modifiers
	        return data;
	    };

	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.shift = function(data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];

	        // if shift shiftVariation is specified, run the modifier
	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);

	            var shiftOffsets = {
	                y: {
	                    start:  { top: reference.top },
	                    end:    { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start:  { left: reference.left },
	                    end:    { left: reference.left + reference.width - popper.width }
	                }
	            };

	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
	        }

	        return data;
	    };


	    /**
	     * Modifier used to make sure the popper does not overflows from it's boundaries
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.preventOverflow = function(data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);

	        var check = {
	            left: function() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };

	        order.forEach(function(direction) {
	            data.offsets.popper = Object.assign(popper, check[direction]());
	        });

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper is always near its reference
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.keepTogether = function(data) {
	        var popper  = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;

	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.flip = function(data) {
	        // check if preventOverflow is in the list of modifiers before the flip modifier.
	        // otherwise flip would not work as expected.
	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }

	        if (data.flipped && data.placement === data._originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];
	        if(this._options.flipBehavior === 'flip') {
	            flipOrder = [
	                placement,
	                placementOpposite
	            ];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }

	        flipOrder.forEach(function(step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getPopperClientRect(data.offsets.popper);

	            // this boolean is used to distinguish right and bottom from top and left
	            // they need different computations to get flipped
	            var a = ['right', 'bottom'].indexOf(placement) !== -1;

	            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	            if (
	                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
	                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
	            ) {
	                // we'll use this boolean to detect any flip loop
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };

	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.offset = function(data) {
	        var offset = this._options.offset;
	        var popper  = data.offsets.popper;

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        }
	        else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        }
	        else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        }
	        else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        return data;
	    };

	    /**
	     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.arrow = function(data) {
	        var arrow  = this._options.arrowElement;

	        // if the arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }

	        // if arrow element is not found, don't run the modifier
	        if (!arrow) {
	            return data;
	        }

	        // the arrow element must be child of its popper
	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }

	        // arrow depends on keepTogether in order to work
	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }

	        var arrowStyle  = {};
	        var placement   = data.placement.split('-')[0];
	        var popper      = getPopperClientRect(data.offsets.popper);
	        var reference   = data.offsets.reference;
	        var isVertical  = ['left', 'right'].indexOf(placement) !== -1;

	        var len         = isVertical ? 'height' : 'width';
	        var side        = isVertical ? 'top' : 'left';
	        var altSide     = isVertical ? 'left' : 'top';
	        var opSide      = isVertical ? 'bottom' : 'right';
	        var arrowSize   = getOuterSizes(arrow)[len];

	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //

	        // top/left side
	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
	        }

	        // compute center of the popper
	        var center = reference[side] + (reference[len] / 2) - (arrowSize / 2);

	        // Compute the sideValue using the updated popper offsets
	        var sideValue = center - getPopperClientRect(data.offsets.popper)[side];

	        // prevent arrow from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;

	        return data;
	    };


	    //
	    // Helpers
	    //

	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        // NOTE: 1 DOM access here
	        var _display = element.style.display, _visibility = element.style.visibility;
	        element.style.display = 'block'; element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;

	        // original method
	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	        // reset element styles
	        element.style.display = _display; element.style.visibility = _visibility;
	        return result;
	    }

	    /**
	     * Get the opposite placement of the given one/
	     * @function
	     * @ignore
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function(matched){
	            return hash[matched];
	        });
	    }

	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @function
	     * @ignore
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getPopperClientRect(popperOffsets) {
	        var offsets = Object.assign({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }

	    /**
	     * Given an array and the key to find, returns its index
	     * @function
	     * @ignore
	     * @argument {Array} arr
	     * @argument keyToFind
	     * @returns index or null
	     */
	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0, key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }

	    /**
	     * Get CSS computed property of the given element
	     * @function
	     * @ignore
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        // NOTE: 1 DOM access here
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }

	    /**
	     * Returns the offset parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }

	    /**
	     * Returns the scrolling parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getScrollParent(element) {
	        if (element === root.document) {
	            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	            // greater than 0 and return the proper element
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }

	        // Firefox want us to check `-x` and `-y` variations as well
	        if (
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1
	        ) {
	            // If the detected scrollParent is body, we perform an additional check on its parentNode
	            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
	            // fixes issue #65
	            return element === root.document.body ? getScrollParent(element.parentNode) : element;
	        }
	        return element.parentNode ? getScrollParent(element.parentNode) : element;
	    }

	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        if (element === root.document.body || element.nodeName === 'HTML') {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }

	    /**
	     * Check if the given element has transforms applied to itself or a parent
	     * @param  {Element} element
	     * @return {Boolean} answer to "isTransformed?"
	     */
	    function isTransformed(element) {
	      if (element === root.document.body) {
	          return false;
	      }
	      if (getStyleComputedProperty(element, 'transform') !== 'none') {
	          return true;
	      }
	      return element.parentNode ? isTransformed(element.parentNode) : element;
	    }

	    /**
	     * Set the style to the given popper
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyle(element, styles) {
	        function is_numeric(n) {
	            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
	        }
	        Object.keys(styles).forEach(function(prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    /**
	     * Check if the given variable is a function
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @function
	     * @ignore
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        // position
	        return elementRect;
	    }

	    /**
	     * Get bounding client rect of given element
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();
	        return {
	            left: rect.left,
	            top: rect.top,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rect.top
	        };
	    }

	    /**
	     * Given an element and one of its parents, return the offset
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent, fixed, transformed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        if (fixed && !transformed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }

	        var rect = {
	            top: elementRect.top - parentRect.top ,
	            left: elementRect.left - parentRect.left ,
	            bottom: (elementRect.top - parentRect.top) + elementRect.height,
	            right: (elementRect.left - parentRect.left) + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }

	    /**
	     * Get the prefixed supported property name
	     * @function
	     * @ignore
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    /**
	     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	     * objects to a target object. It will return the target object.
	     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	     * @function
	     * @ignore
	     */
	    if (!Object.assign) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }

	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);

	                    var keysArray = Object.keys(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }

	    if (!root.requestAnimationFrame) {
	        /* jshint ignore:start */
	        var lastTime = 0;
	        var vendors = ['ms', 'moz', 'webkit', 'o'];
	        for(var x = 0; x < vendors.length && !root.requestAnimationFrame; ++x) {
	            root.requestAnimationFrame = root[vendors[x]+'RequestAnimationFrame'];
	            root.cancelAnimationFrame = root[vendors[x]+'CancelAnimationFrame'] || root[vendors[x]+'CancelRequestAnimationFrame'];
	        }

	        if (!root.requestAnimationFrame) {
	            root.requestAnimationFrame = function(callback, element) {
	                var currTime = new Date().getTime();
	                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	                var id = root.setTimeout(function() { callback(currTime + timeToCall); },
	                                           timeToCall);
	                lastTime = currTime + timeToCall;
	                return id;
	            };
	        }

	        if (!root.cancelAnimationFrame) {
	            root.cancelAnimationFrame = function(id) {
	                clearTimeout(id);
	            };
	        }
	        /* jshint ignore:end */
	    }

	    return Popper;
	}));


/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ivu-select-dropdown\"><slot></slot></div>\n";

/***/ },
/* 177 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    bind: function bind() {
	        var _this = this;

	        this.documentHandler = function (e) {
	            if (_this.el.contains(e.target)) {
	                return false;
	            }
	            if (_this.expression) {
	                _this.vm[_this.expression]();
	            }
	        };
	        document.addEventListener('click', this.documentHandler);
	    },
	    update: function update() {},
	    unbind: function unbind() {
	        document.removeEventListener('click', this.documentHandler);
	    }
	};

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" v-clickoutside=\"handleClose\">\n    <div\n        :class=\"[prefixCls + '-selection']\"\n        v-el:reference\n        @click=\"toggleMenu\">\n        <div class=\"ivu-tag\" v-for=\"item in selectedMultiple\">\n            <span class=\"ivu-tag-text\">{{ item.label }}</span>\n            <Icon type=\"ios-close-empty\" @click.stop=\"removeTag($index)\"></Icon>\n        </div>\n        <span :class=\"[prefixCls + '-placeholder']\" v-show=\"showPlaceholder && !filterable\">{{ placeholder }}</span>\n        <span :class=\"[prefixCls + '-selected-value']\" v-show=\"!showPlaceholder && !multiple && !filterable\">{{ selectedSingle }}</span>\n        <input\n            type=\"text\"\n            v-if=\"filterable\"\n            v-model=\"query\"\n            :class=\"[prefixCls + '-input']\"\n            :placeholder=\"showPlaceholder ? placeholder : ''\"\n            :style=\"inputStyle\"\n            @blur=\"handleBlur\"\n            @keydown=\"resetInputState\"\n            @keydown.delete=\"handleInputDelete\"\n            v-el:input>\n        <Icon type=\"ios-close\" :class=\"[prefixCls + '-arrow']\" v-show=\"showCloseIcon\" @click.stop=\"clearSingleSelect\"></Icon>\n        <Icon type=\"arrow-down-b\" :class=\"[prefixCls + '-arrow']\"></Icon>\n    </div>\n    <Dropdown v-show=\"visible\" transition=\"slide-up\" v-ref:dropdown>\n        <ul v-show=\"notFound\" :class=\"[prefixCls + '-not-found']\"><li>{{ notFoundText }}</li></ul>\n        <ul v-else :class=\"[prefixCls + '-dropdown-list']\" v-el:options><slot></slot></ul>\n    </Dropdown>\n</div>\n";

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(180)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(181)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-269d157e/option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-select-item';

	exports.default = {
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
	        }
	    },
	    componentName: 'select-item',
	    data: function data() {
	        return {
	            selected: false,
	            index: 0,
	            isFocus: false,
	            hidden: false,
	            searchLabel: '' };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-selected', this.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-focus', this.isFocus), _ref)];
	        },
	        showLabel: function showLabel() {
	            return !!this.label ? this.label : this.value;
	        }
	    },
	    methods: {
	        select: function select() {
	            if (this.disabled) {
	                return false;
	            }

	            this.$dispatch('on-select-selected', this.value);
	        },
	        blur: function blur() {
	            this.isFocus = false;
	        },
	        queryChange: function queryChange(val) {
	            this.hidden = !new RegExp(val, 'i').test(this.searchLabel);
	        }
	    },
	    ready: function ready() {
	        this.searchLabel = this.$el.innerHTML;
	    },

	    events: {
	        'on-select-close': function onSelectClose() {
	            this.isFocus = false;
	        },
	        'on-query-change': function onQueryChange(val) {
	            this.queryChange(val);
	        }
	    }
	};

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"classes\" @click.stop=\"select\" @mouseout.stop=\"blur\" v-show=\"!hidden\"><slot>{{ showLabel }}</slot></li>\n";

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizer || showElevator\" :class=\"optsClasses\">\n    <div v-if=\"showSizer\" :class=\"sizerClasses\">\n        <i-select :model.sync=\"pageSize\" :size=\"size\" @on-change=\"changeSize\">\n            <i-option v-for=\"item in pageSizeOpts\" :value=\"item\" style=\"text-align:center;\">{{ item }} 条/页</i-option>\n        </i-select>\n    </div>\n    <div v-if=\"showElevator\" :class=\"ElevatorClasses\">\n        跳至\n        <input type=\"text\" :value=\"_current\" @keyup.enter=\"changePage\">\n        页\n    </div>\n</div>\n";

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"simpleWrapClasses\" v-if=\"simple\">\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a>\n    </li>\n    <div :class=\"simplePagerClasses\" :title=\"current + '/' + allPages\">\n        <input\n            type=\"text\"\n            :value=\"current\"\n            @keydown=\"keyDown\"\n            @keyup=\"keyUp\"\n            @change=\"keyUp\">\n        <span>/</span>\n        {{ allPages }}\n    </div>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a>\n    </li>\n</ul>\n<ul :class=\"wrapClasses\" v-else>\n    <span :class=\"[prefixCls + '-total']\" v-if=\"showTotal\">\n        <slot>共 {{ total }} 条</slot>\n    </span>\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a>\n    </li>\n    <li title=\"第一页\" :class=\"firstPageClasses\" @click=\"changePage(1)\"><a>1</a></li>\n    <li title=\"向前 5 页\" v-if=\"current - 3 > 1\" :class=\"[prefixCls + '-item-jump-prev']\" @click=\"fastPrev\"><a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a></li>\n    <li :title=\"current - 2\" v-if=\"current - 2 > 1\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current - 2)\"><a>{{ current - 2 }}</a></li>\n    <li :title=\"current - 1\" v-if=\"current - 1 > 1\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current - 1)\"><a>{{ current - 1 }}</a></li>\n    <li :title=\"current\" v-if=\"current != 1 && current != allPages\" :class=\"[prefixCls + '-item',prefixCls + '-item-active']\"><a>{{ current }}</a></li>\n    <li :title=\"current + 1\" v-if=\"current + 1 < allPages\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current + 1)\"><a>{{ current + 1 }}</a></li>\n    <li :title=\"current + 2\" v-if=\"current + 2 < allPages\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current + 2)\"><a>{{ current + 2 }}</a></li>\n    <li title=\"向后 5 页\" v-if=\"current + 3 < allPages\" :class=\"[prefixCls + '-item-jump-next']\" @click=\"fastNext\"><a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a></li>\n    <li :title=\"'最后一页:' + allPages\" v-if=\"allPages > 1\" :class=\"lastPageClasses\" @click=\"changePage(allPages)\"><a>{{ allPages }}</a></li>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a>\n    </li>\n    <Options\n        :show-sizer=\"showSizer\"\n        :page-size=\"pageSize\"\n        :page-size-opts=\"pageSizeOpts\"\n        :show-elevator=\"showElevator\"\n        :_current.once=\"current\"\n        :current.sync=\"current\"\n        :all-pages=\"allPages\"\n        :is-small=\"isSmall\"\n        @on-size=\"onSize\"\n        @on-page=\"onPage\">\n    </Options>\n</ul>\n";

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _poptip = __webpack_require__(185);

	var _poptip2 = _interopRequireDefault(_poptip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _poptip2.default;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\poptip\\poptip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1c4e26c5/poptip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _popper = __webpack_require__(187);

	var _popper2 = _interopRequireDefault(_popper);

	var _button = __webpack_require__(75);

	var _button2 = _interopRequireDefault(_button);

	var _clickoutside = __webpack_require__(177);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-poptip';

	exports.default = {
	    mixins: [_popper2.default],
	    directives: { clickoutside: _clickoutside2.default },
	    components: { iButton: _button2.default },
	    props: {
	        trigger: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['click', 'focus', 'hover']);
	            },

	            default: 'click'
	        },
	        placement: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
	            },

	            default: 'top'
	        },
	        title: {
	            type: [String, Number]
	        },
	        content: {
	            type: [String, Number],
	            default: ''
	        },
	        width: {
	            type: [String, Number]
	        },
	        confirm: {
	            type: Boolean,
	            default: false
	        },
	        okText: {
	            type: String,
	            default: '确定'
	        },
	        cancelText: {
	            type: String,
	            default: '取消'
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            showTitle: true
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-confirm', this.confirm)];
	        },
	        styles: function styles() {
	            var style = {};

	            if (!!this.width) {
	                style.width = this.width + 'px';
	            }
	            return style;
	        }
	    },
	    methods: {
	        handleClick: function handleClick() {
	            if (this.confirm) {
	                this.visible = !this.visible;
	                return true;
	            }
	            if (this.trigger !== 'click') {
	                return false;
	            }
	            this.visible = !this.visible;
	        },
	        handleClose: function handleClose() {
	            if (this.confirm) {
	                this.visible = false;
	                return true;
	            }
	            if (this.trigger !== 'click') {
	                return false;
	            }
	            this.visible = false;
	        },
	        handleFocus: function handleFocus() {
	            if (this.trigger !== 'focus' || this.confirm) {
	                return false;
	            }
	            this.visible = true;
	        },
	        handleBlur: function handleBlur() {
	            if (this.trigger !== 'focus' || this.confirm) {
	                return false;
	            }
	            this.visible = false;
	        },
	        handleMouseenter: function handleMouseenter() {
	            if (this.trigger !== 'hover' || this.confirm) {
	                return false;
	            }
	            this.visible = true;
	        },
	        handleMouseleave: function handleMouseleave() {
	            if (this.trigger !== 'hover' || this.confirm) {
	                return false;
	            }
	            this.visible = false;
	        },
	        cancel: function cancel() {
	            this.visible = false;
	            this.$emit('on-cancel');
	        },
	        ok: function ok() {
	            this.visible = false;
	            this.$emit('on-ok');
	        }
	    },
	    ready: function ready() {
	        if (!this.confirm) {
	            this.showTitle = this.$els.title.innerHTML != '';
	        }
	    }
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(175);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        placement: {
	            type: String,
	            default: 'bottom'
	        },
	        boundariesPadding: {
	            type: Number,
	            default: 5
	        },
	        reference: Object,
	        popper: Object,
	        offset: {
	            default: 0
	        },
	        value: Boolean,
	        transition: String,
	        options: {
	            type: Object,
	            default: function _default() {
	                return {
	                    gpuAcceleration: false,
	                    boundariesElement: 'body'
	                };
	            }
	        },
	        visible: {
	            type: Boolean,
	            default: false
	        }
	    },
	    watch: {
	        value: {
	            immediate: true,
	            handler: function handler(val) {
	                this.visible = val;
	                this.$emit('input', val);
	            }
	        },
	        visible: function visible(val) {
	            val ? this.updatePopper() : this.destroyPopper();
	            this.$emit('input', val);
	        }
	    },
	    methods: {
	        createPopper: function createPopper() {
	            var _this = this;

	            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
	                return;
	            }

	            var options = this.options;
	            var popper = this.popper || this.$els.popper;
	            var reference = this.reference || this.$els.reference;

	            if (!popper || !reference) return;

	            if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
	                this.popperJS.destroy();
	            }

	            options.placement = this.placement;
	            options.offset = this.offset;

	            this.popperJS = new _popper2.default(reference, popper, options);
	            this.popperJS.onCreate(function (popper) {
	                _this.resetTransformOrigin(popper);
	                _this.$nextTick(_this.updatePopper);
	                _this.$emit('created', _this);
	            });
	        },
	        updatePopper: function updatePopper() {
	            this.popperJS ? this.popperJS.update() : this.createPopper();
	        },
	        doDestroy: function doDestroy() {
	            if (this.visible) return;
	            this.popperJS.destroy();
	            this.popperJS = null;
	        },
	        destroyPopper: function destroyPopper() {
	            if (this.popperJS) {
	                this.resetTransformOrigin(this.popperJS);
	            }
	        },
	        resetTransformOrigin: function resetTransformOrigin(popper) {
	            var placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
	            var placement = popper._popper.getAttribute('x-placement').split('-')[0];
	            var origin = placementMap[placement];
	            popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.popperJS) {
	            this.popperJS.destroy();
	        }
	    }
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    :class=\"classes\"\n    @mouseenter=\"handleMouseenter\"\n    @mouseleave=\"handleMouseleave\"\n    v-clickoutside=\"handleClose\">\n    <div\n        :class=\"[prefixCls + '-rel']\"\n        v-el:reference\n        @click=\"handleClick\"\n        @mousedown=\"handleFocus\"\n        @mouseup=\"handleBlur\">\n        <slot></slot>\n    </div>\n    <div :class=\"[prefixCls + '-popper']\" :style=\"styles\" transition=\"fade\" v-el:popper v-show=\"visible\">\n        <div :class=\"[prefixCls + '-content']\">\n            <div :class=\"[prefixCls + '-arrow']\"></div>\n            <div :class=\"[prefixCls + '-inner']\" v-if=\"confirm\">\n                <div :class=\"[prefixCls + '-body']\">\n                    <i class=\"ivu-icon ivu-icon-help-circled\"></i>\n                    <div :class=\"[prefixCls + '-body-message']\"><slot name=\"title\">{{ title }}</slot></div>\n                </div>\n                <div :class=\"[prefixCls + '-footer']\">\n                    <i-button type=\"ghost\" size=\"small\" @click=\"cancel\">{{ cancelText }}</i-button>\n                    <i-button type=\"primary\" size=\"small\" @click=\"ok\">{{ okText }}</i-button>\n                </div>\n            </div>\n            <div :class=\"[prefixCls + '-inner']\" v-if=\"!confirm\">\n                <div :class=\"[prefixCls + '-title']\" v-if=\"showTitle\" v-el:title><slot name=\"title\">{{ title }}</slot></div>\n                <div :class=\"[prefixCls + '-body']\">\n                    <div :class=\"[prefixCls + '-body-content']\"><slot name=\"content\">{{ content }}</slot></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(190);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _progress2.default;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(191)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\progress\\progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(192)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2b7f95b6/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	                    type = 'ios-close';
	                    break;
	                case 'success':
	                    type = 'ios-checkmark';
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

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"outerClasses\">\n        <div :class=\"innerClasses\">\n            <div :class=\"bgClasses\" :style=\"bgStyle\"></div>\n        </div>\n    </div>\n    <span v-if=\"!hideInfo\" :class=\"textClasses\">\n        <slot>\n            <span v-if=\"isStatus\" :class=\"textInnerClasses\">\n                <Icon :type=\"statusIcon\"></Icon>\n            </span>\n            <span v-else :class=\"textInnerClasses\">\n                {{ percent }}%\n            </span>\n        </slot>\n    </span>\n</div>\n";

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(194);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioGroup = __webpack_require__(197);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Group = _radioGroup2.default;
	exports.default = _radio2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(195)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\radio\\radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(196)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69d7a8c3/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"radioClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            type=\"radio\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :checked=\"selected\"\n            @change=\"change\">\n    </span>\n    <slot>{{ value }}</slot>\n</label>\n";

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\radio\\radio-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5c60c416/radio-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-radio-group';

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

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(201);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _slider2.default;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(202)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\slider\\slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(206)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1fdcbae5/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _inputNumber = __webpack_require__(108);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _tooltip = __webpack_require__(203);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-slider';

	exports.default = {
	    components: { InputNumber: _inputNumber2.default, Tooltip: _tooltip2.default },
	    props: {
	        min: {
	            type: Number,
	            default: 0
	        },
	        max: {
	            type: Number,
	            default: 100
	        },
	        step: {
	            type: Number,
	            default: 1
	        },
	        range: {
	            type: Boolean,
	            default: false
	        },
	        value: {
	            type: [Number, Array],
	            default: 0
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        showInput: {
	            type: Boolean,
	            default: false
	        },
	        showStops: {
	            type: Boolean,
	            default: false
	        },
	        tipFormat: {
	            type: Function,
	            default: function _default(val) {
	                return val;
	            }
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-input', this.showInput), (0, _defineProperty3.default)(_ref, prefixCls + '-range', this.range), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), _ref)];
	        },
	        barStyle: function barStyle() {
	            var style = void 0;

	            if (this.range) {
	                style = {
	                    width: (this.value[1] - this.value[0]) / (this.max - this.min) * 100 + '%',
	                    left: (this.value[0] - this.min) / (this.max - this.min) * 100 + '%'
	                };
	            } else {
	                style = {
	                    width: (this.value - this.min) / (this.max - this.min) * 100 + '%'
	                };
	            }

	            return style;
	        },
	        stops: function stops() {
	            return this.max / this.step;
	        }
	    },
	    methods: {
	        sliderClick: function sliderClick() {}
	    },
	    ready: function ready() {
	        if (this.range) {
	            var isArray = Array.isArray(this.value);
	            if (!isArray || isArray && this.value.length != 2 || isArray && (!isNaN(this.value[0]) || !isNaN(this.value[1]))) {
	                this.value = [0, 0];
	            }
	        }
	    }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(204)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tooltip\\tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(205)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-50d6a493/tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(187);

	var _popper2 = _interopRequireDefault(_popper);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-tooltip';

	exports.default = {
	    mixins: [_popper2.default],
	    props: {
	        placement: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
	            },

	            default: 'bottom'
	        },
	        content: {
	            type: [String, Number],
	            default: ''
	        },
	        delay: {
	            type: Number,
	            default: 0
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls
	        };
	    },

	    methods: {
	        handleShowPopper: function handleShowPopper() {
	            var _this = this;

	            this.timeout = setTimeout(function () {
	                _this.visible = true;
	            }, this.delay);
	        },
	        handleClosePopper: function handleClosePopper() {
	            clearTimeout(this.timeout);
	            this.visible = false;
	        }
	    }
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls]\" @mouseenter=\"handleShowPopper\" @mouseleave=\"handleClosePopper\">\n    <div :class=\"[prefixCls + '-rel']\" v-el:reference>\n        <slot></slot>\n    </div>\n    <div :class=\"[prefixCls + '-popper']\" transition=\"fade\" v-el:popper v-show=\"!disabled && visible\">\n        <div :class=\"[prefixCls + '-content']\">\n            <div :class=\"[prefixCls + '-arrow']\"></div>\n            <div :class=\"[prefixCls + '-inner']\"><slot name=\"content\">{{ content }}</slot></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <Input-number v-if=\"!range && showInput\" :min=\"min\" :max=\"max\" :step=\"step\" :value.sync=\"value\" :disabled=\"disabled\"></Input-number>\n    <div :class=\"[prefixCls + '-wrap']\" @click=\"sliderClick\">\n        <template v-if=\"showStops\">\n            <div :class=\"[prefixCls + '-stop']\" v-for=\"item in stops\" :style=\"{ 'left': item + '%' }\"></div>\n        </template>\n        <div :class=\"[prefixCls + '-bar']\" :style=\"barStyle\"></div>\n        <div :class=\"[prefixCls + '-button-wrap']\" v-if=\"!range\">\n            <Tooltip placement=\"top\" :content=\"tipFormat(value)\">\n                <div :class=\"[prefixCls + '-button']\"></div>\n            </Tooltip>\n        </div>\n\n    </div>\n</div>\n";

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spin = __webpack_require__(208);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _spin2.default;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(209)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\spin\\spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(210)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0b944ac5/spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-spin';

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

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" transition=\"fade\">\n    <div :class=\"mainClasses\">\n        <span :class=\"dotClasses\"></span>\n        <div :class=\"textClasses\" v-el:text><slot></slot></div>\n    </div>\n</div>\n";

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _steps = __webpack_require__(212);

	var _steps2 = _interopRequireDefault(_steps);

	var _step = __webpack_require__(215);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_steps2.default.Step = _step2.default;
	exports.default = _steps2.default;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\steps\\steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ebb4abca/steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-steps';

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

	            var total = this.$children.length;
	            this.$children.forEach(function (child, index) {
	                child.stepNumber = index + 1;

	                if (_this.direction === 'horizontal') {
	                    child.total = total;
	                }

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

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(216)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\steps\\step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e24f808/step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-steps';
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
	            nextError: false,
	            total: 1
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
	        },
	        styles: function styles() {
	            return {
	                width: 1 / this.total * 100 + '%'
	            };
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

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" :style=\"styles\">\n    <div :class=\"[prefixCls + '-tail']\"><i></i></div>\n    <div :class=\"[prefixCls + '-head']\">\n        <div :class=\"[prefixCls + '-head-inner']\">\n            <span v-if=\"!icon && status != 'finish' && status != 'error'\">{{ stepNumber }}</span>\n            <span v-else :class=\"iconClasses\"></span>\n        </div>\n    </div>\n    <div :class=\"[prefixCls + '-main']\">\n        <div :class=\"[prefixCls + '-title']\">{{ title }}</div>\n        <div v-if=\"content\" :class=\"[prefixCls + '-content']\">{{ content }}</div>\n    </div>\n</div>\n";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _switch = __webpack_require__(219);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _switch2.default;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\switch\\switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6e653785/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-switch';

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
	                return (0, _assist.oneOf)(value, ['large', 'small']);
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

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\" @click=\"toggle\">\n    <span :class=\"innerClasses\">\n        <slot name=\"open\" v-if=\"checked\"></slot>\n        <slot name=\"close\" v-if=\"!checked\"></slot>\n    </span>\n</span>\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(223);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tag2.default;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\tag\\tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(225)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0ceda5c1/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        },
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['border', 'dot']);
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
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.color, !!this.color), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-closable', this.closable), _ref)];
	        },
	        textClasses: function textClasses() {
	            return prefixCls + '-text';
	        },
	        dotClasses: function dotClasses() {
	            return prefixCls + '-dot-inner';
	        },
	        showDot: function showDot() {
	            return !!this.type && this.type === 'dot';
	        }
	    },
	    methods: {
	        close: function close(e) {
	            this.closed = true;
	            this.$emit('on-close', e);
	        }
	    }
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"classes\" transition=\"fade\">\n    <span :class=\"dotClasses\" v-if=\"showDot\"></span><span :class=\"textClasses\"><slot></slot></span><Icon v-if=\"closable\" type=\"ios-close-empty\" @click=\"close\"></Icon>\n</div>\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timeline = __webpack_require__(227);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _timelineItem = __webpack_require__(230);

	var _timelineItem2 = _interopRequireDefault(_timelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_timeline2.default.Item = _timelineItem2.default;
	exports.default = _timeline2.default;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(228)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\timeline\\timeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(229)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f1fbe8b6/timeline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"classes\">\n    <slot></slot>\n</ul>\n";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(231)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\timeline\\timeline-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(232)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5f99366b/timeline-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	        this.dot = this.$els.dot.innerHTML.length ? true : false;
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

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"itemClasses\">\n    <div :class=\"tailClasses\"></div>\n    <div :class=\"headClasses\" :style=\"customColor\" v-el:dot><slot name=\"dot\"></slot></div>\n    <div :class=\"contentClasses\">\n        <slot></slot>\n    </div>\n</li>\n";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(203);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tooltip2.default;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(235);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(238);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(236)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\layout\\row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(237)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f87fcf62/row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-row';

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
	        gutter: {
	            type: Number,
	            default: 0
	        },
	        className: String
	    },
	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.align, !!this.align), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.justify, !!this.justify), (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), _ref)];
	        },
	        styles: function styles() {
	            var style = {};
	            if (this.gutter !== 0) {
	                style = {
	                    marginLeft: this.gutter / -2 + 'px',
	                    marginRight: this.gutter / -2 + 'px'
	                };
	            }

	            return style;
	        }
	    },
	    methods: {
	        updateGutter: function updateGutter(val) {
	            this.$children.forEach(function (child) {
	                if (val !== 0) {
	                    child.gutter = val;
	                }
	            });
	        }
	    },
	    watch: {
	        gutter: function gutter(val) {
	            this.updateGutter(val);
	        }
	    },
	    ready: function ready() {
	        this.updateGutter(this.gutter);
	    }
	};

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\layout\\col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69a79cf5/col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-col';

	exports.default = {
	    props: {
	        span: [Number, String],
	        order: [Number, String],
	        offset: [Number, String],
	        push: [Number, String],
	        pull: [Number, String],
	        className: String
	    },
	    data: function data() {
	        return {
	            gutter: 0
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-span-' + this.span, this.span), (0, _defineProperty3.default)(_ref, prefixCls + '-order-' + this.order, this.order), (0, _defineProperty3.default)(_ref, prefixCls + '-offset-' + this.offset, this.offset), (0, _defineProperty3.default)(_ref, prefixCls + '-push-' + this.push, this.push), (0, _defineProperty3.default)(_ref, prefixCls + '-pull-' + this.pull, this.pull), (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), _ref)];
	        },
	        styles: function styles() {
	            var style = {};
	            if (this.gutter !== 0) {
	                style = {
	                    paddingLeft: this.gutter / 2 + 'px',
	                    paddingRight: this.gutter / 2 + 'px'
	                };
	            }

	            return style;
	        }
	    }
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OptionGroup = exports.Option = exports.Select = undefined;

	var _select = __webpack_require__(136);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(179);

	var _option2 = _interopRequireDefault(_option);

	var _optionGroup = __webpack_require__(242);

	var _optionGroup2 = _interopRequireDefault(_optionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Select = _select2.default;
	exports.Option = _option2.default;
	exports.OptionGroup = _optionGroup2.default;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(243)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\option-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(244)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-27fd5b20/option-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 243 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var prefixCls = 'ivu-select-group';

	exports.default = {
	    props: {
	        label: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls
	        };
	    }
	};

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-wrap']\">\n    <div :class=\"[prefixCls + '-title']\">{{ label }}</div>\n    <ul>\n        <li :class=\"[prefixCls]\"><slot></slot></li>\n    </ul>\n</li>\n";

/***/ }
/******/ ])
});
;