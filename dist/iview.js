(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("iview", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["iview"] = factory(require("Vue"));
	else
		root["iview"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_117__) {
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

	var _inputNumber = __webpack_require__(108);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _loadingBar = __webpack_require__(112);

	var _loadingBar2 = _interopRequireDefault(_loadingBar);

	var _message = __webpack_require__(118);

	var _message2 = _interopRequireDefault(_message);

	var _modal = __webpack_require__(126);

	var _modal2 = _interopRequireDefault(_modal);

	var _notice = __webpack_require__(131);

	var _notice2 = _interopRequireDefault(_notice);

	var _page = __webpack_require__(132);

	var _page2 = _interopRequireDefault(_page);

	var _poptip = __webpack_require__(185);

	var _poptip2 = _interopRequireDefault(_poptip);

	var _progress = __webpack_require__(190);

	var _progress2 = _interopRequireDefault(_progress);

	var _radio = __webpack_require__(194);

	var _radio2 = _interopRequireDefault(_radio);

	var _slider = __webpack_require__(201);

	var _slider2 = _interopRequireDefault(_slider);

	var _spin = __webpack_require__(218);

	var _spin2 = _interopRequireDefault(_spin);

	var _steps = __webpack_require__(222);

	var _steps2 = _interopRequireDefault(_steps);

	var _switch = __webpack_require__(229);

	var _switch2 = _interopRequireDefault(_switch);

	var _tag = __webpack_require__(233);

	var _tag2 = _interopRequireDefault(_tag);

	var _timeline = __webpack_require__(237);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _tooltip = __webpack_require__(244);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _layout = __webpack_require__(245);

	var _select = __webpack_require__(252);

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

	    Vue.prototype.$Loading = _loadingBar2.default;
	    Vue.prototype.$Message = _message2.default;
	    Vue.prototype.$Modal = _modal2.default;
	    Vue.prototype.$Notice = _notice2.default;
	};

	if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	}

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
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/affix/affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-04fb6224/affix.vue"
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
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/alert/alert.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-d53bcdf4/alert.vue"
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
	__vue_script__ = __webpack_require__(55)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/icon/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-18ae04ac/icon.vue"
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
	        size: [Number, String],
	        color: String
	    },
	    computed: {
	        classes: function classes() {
	            return prefixCls + ' ' + prefixCls + '-' + this.type;
	        },
	        styles: function styles() {
	            var style = {};

	            if (!!this.size) {
	                style['font-size'] = this.size + 'px';
	            }

	            if (!!this.color) {
	                style.color = this.color;
	            }

	            return style;
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
	exports.getStyle = getStyle;
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
	__vue_script__ = __webpack_require__(61)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/back-top/back-top.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b6f296c/back-top.vue"
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
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/badge/badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1342d554/badge.vue"
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
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/breadcrumb/breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6650326c/breadcrumb.vue"
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
	__vue_script__ = __webpack_require__(72)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/breadcrumb/breadcrumb-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0cc73404/breadcrumb-item.vue"
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
	__vue_script__ = __webpack_require__(76)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2aa43a8c/button.vue"
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
	__vue_script__ = __webpack_require__(79)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/button/button-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8c201604/button-group.vue"
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
	__vue_script__ = __webpack_require__(83)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/card/card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5cf349e8/card.vue"
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
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkbox/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(88)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-bd92f028/checkbox.vue"
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
	            group: false,
	            showSlot: true
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
	            if (this.$els.slot && this.$els.slot.innerHTML === '') {
	                this.showSlot = false;
	            }
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

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"checkboxClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            v-if=\"group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :value=\"value\"\n            v-model=\"model\"\n            @change=\"change\">\n        <input\n            v-if=\"!group\"\n            type=\"checkbox\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            v-model=\"checked\"\n            @change=\"change\">\n    </span>\n    <slot v-if=\"showSlot\"><span v-el:slot>{{ value }}</span></slot>\n</label>\n";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkbox/checkbox-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ddaa8b44/checkbox-group.vue"
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
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/circle/circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66ada668/circle.vue"
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
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/collapse/collapse.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-24fa2f2c/collapse.vue"
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
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/collapse/panel.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-67fcb495/panel.vue"
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
	__vue_script__ = __webpack_require__(105)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/input/input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b981d62/input.vue"
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

	var _calcTextareaHeight = __webpack_require__(106);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-input';

	exports.default = {
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['text', 'textarea', 'password']);
	            },

	            default: 'text'
	        },
	        value: {
	            type: [String, Number],
	            default: '',
	            twoWay: true
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
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
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            prepend: true,
	            append: true,
	            textareaStyles: {}
	        };
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            return [prefixCls + '-wrapper', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-wrapper-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref, prefixCls + '-type', this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-group', this.prepend || this.append), (0, _defineProperty3.default)(_ref, prefixCls + '-group-' + this.size, (this.prepend || this.append) && !!this.size), _ref)];
	        },
	        inputClasses: function inputClasses() {
	            var _ref2;

	            return ['' + prefixCls, (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-' + this.size, !!this.size), (0, _defineProperty3.default)(_ref2, prefixCls + '-disabled', this.disabled), _ref2)];
	        },
	        textareaClasses: function textareaClasses() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-disabled', this.disabled)];
	        }
	    },
	    methods: {
	        handleEnter: function handleEnter() {
	            this.$emit('on-enter');
	        },
	        handleIconClick: function handleIconClick() {
	            this.$emit('on-click');
	        },
	        resizeTextarea: function resizeTextarea() {
	            var autosize = this.autosize;
	            if (!autosize || this.type !== 'textarea') {
	                return false;
	            }

	            var minRows = autosize.minRows;
	            var maxRows = autosize.maxRows;

	            this.textareaStyles = (0, _calcTextareaHeight2.default)(this.$els.textarea, minRows, maxRows);
	        }
	    },
	    watch: {
	        value: function value(val) {
	            var _this = this;

	            this.$nextTick(function () {
	                _this.resizeTextarea();
	            });
	            this.$emit('on-change', val);
	        }
	    },
	    ready: function ready() {
	        if (this.type === 'text') {
	            this.prepend = this.$els.prepend.innerHTML !== '';
	            this.append = this.$els.append.innerHTML !== '';
	        } else {
	            this.prepend = false;
	            this.append = false;
	        }
	        this.resizeTextarea();
	    }
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = calcTextareaHeight;


	var hiddenTextarea = void 0;

	var HIDDEN_STYLE = '\n    height:0 !important;\n    min-height:0 !important;\n    max-height:none !important;\n    visibility:hidden !important;\n    overflow:hidden !important;\n    position:absolute !important;\n    z-index:-1000 !important;\n    top:0 !important;\n    right:0 !important\n';

	var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	function calculateNodeStyling(node) {
	    var style = window.getComputedStyle(node);

	    var boxSizing = style.getPropertyValue('box-sizing');

	    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	    var contextStyle = CONTEXT_STYLE.map(function (name) {
	        return name + ':' + style.getPropertyValue(name);
	    }).join(';');

	    return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
	}

	function calcTextareaHeight(targetNode) {
	    var minRows = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var maxRows = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    if (!hiddenTextarea) {
	        hiddenTextarea = document.createElement('textarea');
	        document.body.appendChild(hiddenTextarea);
	    }

	    var _calculateNodeStyling = calculateNodeStyling(targetNode);

	    var paddingSize = _calculateNodeStyling.paddingSize;
	    var borderSize = _calculateNodeStyling.borderSize;
	    var boxSizing = _calculateNodeStyling.boxSizing;
	    var contextStyle = _calculateNodeStyling.contextStyle;


	    hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
	    hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

	    var height = hiddenTextarea.scrollHeight;
	    var minHeight = -Infinity;
	    var maxHeight = Infinity;

	    if (boxSizing === 'border-box') {
	        height = height + borderSize;
	    } else if (boxSizing === 'content-box') {
	        height = height - paddingSize;
	    }

	    hiddenTextarea.value = '';
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
	        height = Math.min(maxHeight, height);
	    }

	    return {
	        height: height + 'px',
	        minHeight: minHeight + 'px',
	        maxHeight: maxHeight + 'px'
	    };
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <template v-if=\"type !== 'textarea'\">\n        <div :class=\"[prefixCls + '-group-prepend']\" v-if=\"prepend\" v-el:prepend><slot name=\"prepend\"></slot></div>\n        <i class=\"ivu-icon\" :class=\"['ivu-icon-' + icon, prefixCls + '-icon']\" v-if=\"icon\" @click=\"handleIconClick\"></i>\n        <input\n            :type=\"type\"\n            :class=\"inputClasses\"\n            :placeholder=\"placeholder\"\n            :disabled=\"disabled\"\n            :maxlength=\"maxlength\"\n            v-model=\"value\"\n            @keyup.enter=\"handleEnter\">\n        <div :class=\"[prefixCls + '-group-append']\" v-if=\"append\" v-el:append><slot name=\"append\"></slot></div>\n    </template>\n    <textarea\n        v-else\n        v-el:textarea\n        :class=\"textareaClasses\"\n        :style=\"textareaStyles\"\n        :placeholder=\"placeholder\"\n        :disabled=\"disabled\"\n        :rows=\"rows\"\n        :maxlength=\"maxlength\"\n        v-model=\"value\"\n        @keyup.enter=\"handleEnter\">\n    </textarea>\n</div>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputNumber = __webpack_require__(109);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _inputNumber2.default;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(110)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/input-number/input-number.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2dbac0e8/input-number.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 110 */
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
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"handlerClasses\">\n        <a\n            @click=\"up\"\n            @mouse.down=\"preventDefault\"\n            :class=\"upClasses\">\n            <span :class=\"innerUpClasses\" @click=\"preventDefault\"></span>\n        </a>\n        <a\n            @click=\"down\"\n            @mouse.down=\"preventDefault\"\n            :class=\"downClasses\">\n            <span :class=\"innerDownClasses\" @click=\"preventDefault\"></span>\n        </a>\n    </div>\n    <div :class=\"inputWrapClasses\">\n        <input\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            autocomplete=\"off\"\n            @focus=\"focus\"\n            @blur=\"blur\"\n            @keydown.stop=\"keyDown\"\n            @change=\"change\"\n            :value=\"value\">\n    </div>\n</div>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loadingBar = __webpack_require__(113);

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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _loadingBar = __webpack_require__(114);

	var _loadingBar2 = _interopRequireDefault(_loadingBar);

	var _vue = __webpack_require__(117);

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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(115)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/loading-bar/loading-bar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(116)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f1a7bdc/loading-bar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 115 */
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
/* 116 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"outerStyles\" v-show=\"show\" transition=\"fade\">\n    <div :class=\"innerClasses\" :style=\"styles\"></div>\n</div>\n";

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_117__;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _notification = __webpack_require__(119);

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
	    var duration = arguments.length <= 1 || arguments[1] === undefined ? defaultDuration : arguments[1];
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _notification = __webpack_require__(120);

	var _notification2 = _interopRequireDefault(_notification);

	var _vue = __webpack_require__(117);

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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(121)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/base/notification/notification.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-79e1afc4/notification.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _notice2 = __webpack_require__(122);

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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(123)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/base/notification/notice.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(124)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ce4a3f1/notice.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 123 */
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
	    data: function data() {
	        return {
	            withDesc: false
	        };
	    },

	    computed: {
	        baseClass: function baseClass() {
	            return this.prefixCls + '-notice';
	        },
	        classes: function classes() {
	            var _ref;

	            return [this.baseClass, (_ref = {}, (0, _defineProperty3.default)(_ref, '' + this.className, !!this.className), (0, _defineProperty3.default)(_ref, this.baseClass + '-closable', this.closable), (0, _defineProperty3.default)(_ref, this.baseClass + '-with-desc', this.withDesc), _ref)];
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

	        if (this.prefixCls === 'ivu-notice') {
	            this.withDesc = this.$els.content.querySelectorAll('.' + this.prefixCls + '-desc')[0].innerHTML !== '';
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        this.clearCloseTimer();
	    }
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"style\" :transition=\"transitionName\">\n    <div :class=\"[baseClass + '-content']\" v-el:content>{{{ content }}}</div>\n    <a :class=\"[baseClass + '-close']\" @click=\"close\" v-if=\"closable\">\n        <i class=\"ivu-icon ivu-icon-ios-close-empty\"></i>\n    </a>\n</div>\n";

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"style\">\n    <Notice v-for=\"notice in notices\"\n        :prefix-cls=\"prefixCls\"\n        :style=\"notice.style\"\n        :content=\"notice.content\"\n        :duration=\"notice.duration\"\n        :closable=\"notice.closable\"\n        :key=\"notice.key\"\n        :transition-name=\"notice.transitionName\"\n        :on-close=\"notice.onClose\">\n    </Notice>\n</div>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _confirm = __webpack_require__(127);

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
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    props.icon = 'info';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.success = function () {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    props.icon = 'success';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.warning = function () {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    props.icon = 'warning';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.error = function () {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    props.icon = 'error';
	    props.showCancel = false;
	    return confirm(props);
	};

	_confirm2.default.confirm = function () {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _vue = __webpack_require__(117);

	var _vue2 = _interopRequireDefault(_vue);

	var _modal = __webpack_require__(128);

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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(129)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/modal/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(130)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-314f39e8/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
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

	        if (this.$els.head.innerHTML == '<div class="' + prefixCls + '-header-inner"></div>' && !this.title) {
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
	        },
	        loading: function loading(val) {
	            if (!val) {
	                this.buttonLoading = false;
	            }
	        }
	    }
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"maskClasses\" v-show=\"visible\" @click=\"mask\" transition=\"fade\"></div>\n    <div :class=\"classes\" :style=\"styles\" v-show=\"visible\" transition=\"ease\">\n        <div :class=\"[prefixCls + '-content']\">\n            <a :class=\"[prefixCls + '-close']\" v-if=\"closable\" @click=\"close\">\n                <slot name=\"close\">\n                    <Icon type=\"ios-close-empty\"></Icon>\n                </slot>\n            </a>\n            <div :class=\"[prefixCls + '-header']\" v-if=\"showHead\" v-el:head><slot name=\"header\"><div :class=\"[prefixCls + '-header-inner']\">{{ title }}</div></slot></div>\n            <div :class=\"[prefixCls + '-body']\"><slot></slot></div>\n            <div :class=\"[prefixCls + '-footer']\" v-if=\"!footerHide\">\n                <slot name=\"footer\">\n                    <i-button type=\"ghost\" size=\"large\" @click=\"cancel\">{{ cancelText }}</i-button>\n                    <i-button type=\"primary\" size=\"large\" :loading=\"buttonLoading\" @click=\"ok\">{{ okText }}</i-button>\n                </slot>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _notification = __webpack_require__(119);

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

	    var with_desc = desc === '' ? '' : ' ' + prefixCls + '-with-desc';

	    if (type == 'normal') {
	        content = '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-normal' + with_desc + '">\n                <div class="' + prefixCls + '-title">' + title + '</div>\n                <div class="' + prefixCls + '-desc">' + desc + '</div>\n            </div>\n        ';
	    } else {
	        var iconType = iconTypes[type];
	        content = '\n            <div class="' + prefixCls + '-custom-content ' + prefixCls + '-with-icon ' + prefixCls + '-with-' + type + with_desc + '">\n                <span class="' + prefixCls + '-icon ' + prefixCls + '-icon-' + type + '">\n                    <i class="' + iconPrefixCls + ' ' + iconPrefixCls + '-' + iconType + '"></i>\n                </span>\n                <div class="' + prefixCls + '-title">' + title + '</div>\n                <div class="' + prefixCls + '-desc">' + desc + '</div>\n            </div>\n        ';
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _page = __webpack_require__(133);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _page2.default;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/page/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9f48fb28/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(57);

	var _options = __webpack_require__(135);

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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/page/options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c107b51/options.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _select = __webpack_require__(137);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(180);

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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(138)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/select/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(179)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c32b968/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(139);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(53);

	var _icon2 = _interopRequireDefault(_icon);

	var _dropdown = __webpack_require__(174);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _clickoutside = __webpack_require__(178);

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

	            var slot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
	            var init = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	            var slot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
	            var init = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	            var slot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
	            var init = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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

	            var init = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(140);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(160);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	__webpack_require__(155);
	module.exports = __webpack_require__(159).f('iterator');

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(143)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(144)(String, 'String', function(iterated){
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
/* 143 */
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(145)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(146)
	  , hide           = __webpack_require__(9)
	  , has            = __webpack_require__(22)
	  , Iterators      = __webpack_require__(147)
	  , $iterCreate    = __webpack_require__(148)
	  , setToStringTag = __webpack_require__(152)
	  , getPrototypeOf = __webpack_require__(154)
	  , ITERATOR       = __webpack_require__(153)('iterator')
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
/* 145 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(149)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(152)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(153)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(11)
	  , dPs         = __webpack_require__(150)
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
	  __webpack_require__(151).appendChild(iframe);
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
/* 150 */
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f
	  , has = __webpack_require__(22)
	  , TAG = __webpack_require__(153)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 153 */
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
/* 154 */
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(156);
	var global        = __webpack_require__(5)
	  , hide          = __webpack_require__(9)
	  , Iterators     = __webpack_require__(147)
	  , TO_STRING_TAG = __webpack_require__(153)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(157)
	  , step             = __webpack_require__(158)
	  , Iterators        = __webpack_require__(147)
	  , toIObject        = __webpack_require__(23);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(144)(Array, 'Array', function(iterated, kind){
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
/* 157 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(153);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(22)
	  , DESCRIPTORS    = __webpack_require__(14)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(146)
	  , META           = __webpack_require__(163).KEY
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(152)
	  , uid            = __webpack_require__(33)
	  , wks            = __webpack_require__(153)
	  , wksExt         = __webpack_require__(159)
	  , wksDefine      = __webpack_require__(164)
	  , keyOf          = __webpack_require__(165)
	  , enumKeys       = __webpack_require__(166)
	  , isArray        = __webpack_require__(167)
	  , anObject       = __webpack_require__(11)
	  , toIObject      = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(149)
	  , gOPNExt        = __webpack_require__(168)
	  , $GOPD          = __webpack_require__(170)
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
	  __webpack_require__(169).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(36).f  = $propertyIsEnumerable;
	  __webpack_require__(35).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(145)){
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
/* 163 */
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(145)
	  , wksExt         = __webpack_require__(159)
	  , defineProperty = __webpack_require__(10).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 165 */
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
/* 166 */
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(23)
	  , gOPN      = __webpack_require__(169).f
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(21)
	  , hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 170 */
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
/* 171 */
/***/ function(module, exports) {

	

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(164)('asyncIterator');

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(164)('observable');

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(175)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/select/dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e2f91e1/dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(176);

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
/* 176 */
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
/* 177 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ivu-select-dropdown\"><slot></slot></div>\n";

/***/ },
/* 178 */
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
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" v-clickoutside=\"handleClose\">\n    <div\n        :class=\"[prefixCls + '-selection']\"\n        v-el:reference\n        @click=\"toggleMenu\">\n        <div class=\"ivu-tag\" v-for=\"item in selectedMultiple\">\n            <span class=\"ivu-tag-text\">{{ item.label }}</span>\n            <Icon type=\"ios-close-empty\" @click.stop=\"removeTag($index)\"></Icon>\n        </div>\n        <span :class=\"[prefixCls + '-placeholder']\" v-show=\"showPlaceholder && !filterable\">{{ placeholder }}</span>\n        <span :class=\"[prefixCls + '-selected-value']\" v-show=\"!showPlaceholder && !multiple && !filterable\">{{ selectedSingle }}</span>\n        <input\n            type=\"text\"\n            v-if=\"filterable\"\n            v-model=\"query\"\n            :class=\"[prefixCls + '-input']\"\n            :placeholder=\"showPlaceholder ? placeholder : ''\"\n            :style=\"inputStyle\"\n            @blur=\"handleBlur\"\n            @keydown=\"resetInputState\"\n            @keydown.delete=\"handleInputDelete\"\n            v-el:input>\n        <Icon type=\"ios-close\" :class=\"[prefixCls + '-arrow']\" v-show=\"showCloseIcon\" @click.stop=\"clearSingleSelect\"></Icon>\n        <Icon type=\"arrow-down-b\" :class=\"[prefixCls + '-arrow']\"></Icon>\n    </div>\n    <Dropdown v-show=\"visible\" transition=\"slide-up\" v-ref:dropdown>\n        <ul v-show=\"notFound\" :class=\"[prefixCls + '-not-found']\"><li>{{ notFoundText }}</li></ul>\n        <ul v-else :class=\"[prefixCls + '-dropdown-list']\" v-el:options><slot></slot></ul>\n    </Dropdown>\n</div>\n";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/select/option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(182)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c30cdb76/option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 181 */
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
/* 182 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"classes\" @click.stop=\"select\" @mouseout.stop=\"blur\" v-show=\"!hidden\"><slot>{{ showLabel }}</slot></li>\n";

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizer || showElevator\" :class=\"optsClasses\">\n    <div v-if=\"showSizer\" :class=\"sizerClasses\">\n        <i-select :model.sync=\"pageSize\" :size=\"size\" @on-change=\"changeSize\">\n            <i-option v-for=\"item in pageSizeOpts\" :value=\"item\" style=\"text-align:center;\">{{ item }} 条/页</i-option>\n        </i-select>\n    </div>\n    <div v-if=\"showElevator\" :class=\"ElevatorClasses\">\n        跳至\n        <input type=\"text\" :value=\"_current\" @keyup.enter=\"changePage\">\n        页\n    </div>\n</div>\n";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"simpleWrapClasses\" v-if=\"simple\">\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a>\n    </li>\n    <div :class=\"simplePagerClasses\" :title=\"current + '/' + allPages\">\n        <input\n            type=\"text\"\n            :value=\"current\"\n            @keydown=\"keyDown\"\n            @keyup=\"keyUp\"\n            @change=\"keyUp\">\n        <span>/</span>\n        {{ allPages }}\n    </div>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a>\n    </li>\n</ul>\n<ul :class=\"wrapClasses\" v-else>\n    <span :class=\"[prefixCls + '-total']\" v-if=\"showTotal\">\n        <slot>共 {{ total }} 条</slot>\n    </span>\n    <li\n        title=\"上一页\"\n        :class=\"prevClasses\"\n        @click=\"prev\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a>\n    </li>\n    <li title=\"第一页\" :class=\"firstPageClasses\" @click=\"changePage(1)\"><a>1</a></li>\n    <li title=\"向前 5 页\" v-if=\"current - 3 > 1\" :class=\"[prefixCls + '-item-jump-prev']\" @click=\"fastPrev\"><a><i class=\"ivu-icon ivu-icon-ios-arrow-left\"></i></a></li>\n    <li :title=\"current - 2\" v-if=\"current - 2 > 1\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current - 2)\"><a>{{ current - 2 }}</a></li>\n    <li :title=\"current - 1\" v-if=\"current - 1 > 1\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current - 1)\"><a>{{ current - 1 }}</a></li>\n    <li :title=\"current\" v-if=\"current != 1 && current != allPages\" :class=\"[prefixCls + '-item',prefixCls + '-item-active']\"><a>{{ current }}</a></li>\n    <li :title=\"current + 1\" v-if=\"current + 1 < allPages\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current + 1)\"><a>{{ current + 1 }}</a></li>\n    <li :title=\"current + 2\" v-if=\"current + 2 < allPages\" :class=\"[prefixCls + '-item']\" @click=\"changePage(current + 2)\"><a>{{ current + 2 }}</a></li>\n    <li title=\"向后 5 页\" v-if=\"current + 3 < allPages\" :class=\"[prefixCls + '-item-jump-next']\" @click=\"fastNext\"><a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a></li>\n    <li :title=\"'最后一页:' + allPages\" v-if=\"allPages > 1\" :class=\"lastPageClasses\" @click=\"changePage(allPages)\"><a>{{ allPages }}</a></li>\n    <li\n        title=\"下一页\"\n        :class=\"nextClasses\"\n        @click=\"next\">\n        <a><i class=\"ivu-icon ivu-icon-ios-arrow-right\"></i></a>\n    </li>\n    <Options\n        :show-sizer=\"showSizer\"\n        :page-size=\"pageSize\"\n        :page-size-opts=\"pageSizeOpts\"\n        :show-elevator=\"showElevator\"\n        :_current.once=\"current\"\n        :current.sync=\"current\"\n        :all-pages=\"allPages\"\n        :is-small=\"isSmall\"\n        @on-size=\"onSize\"\n        @on-page=\"onPage\">\n    </Options>\n</ul>\n";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _poptip = __webpack_require__(186);

	var _poptip2 = _interopRequireDefault(_poptip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _poptip2.default;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(187)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/poptip/poptip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d7aab8e8/poptip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _popper = __webpack_require__(188);

	var _popper2 = _interopRequireDefault(_popper);

	var _button = __webpack_require__(75);

	var _button2 = _interopRequireDefault(_button);

	var _clickoutside = __webpack_require__(178);

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
	            this.showTitle = this.$els.title.innerHTML != '<div class="' + prefixCls + '-title-inner"></div>';
	        }
	    }
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(176);

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
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div\n    :class=\"classes\"\n    @mouseenter=\"handleMouseenter\"\n    @mouseleave=\"handleMouseleave\"\n    v-clickoutside=\"handleClose\">\n    <div\n        :class=\"[prefixCls + '-rel']\"\n        v-el:reference\n        @click=\"handleClick\"\n        @mousedown=\"handleFocus\"\n        @mouseup=\"handleBlur\">\n        <slot></slot>\n    </div>\n    <div :class=\"[prefixCls + '-popper']\" :style=\"styles\" transition=\"fade\" v-el:popper v-show=\"visible\">\n        <div :class=\"[prefixCls + '-content']\">\n            <div :class=\"[prefixCls + '-arrow']\"></div>\n            <div :class=\"[prefixCls + '-inner']\" v-if=\"confirm\">\n                <div :class=\"[prefixCls + '-body']\">\n                    <i class=\"ivu-icon ivu-icon-help-circled\"></i>\n                    <div :class=\"[prefixCls + '-body-message']\"><slot name=\"title\">{{ title }}</slot></div>\n                </div>\n                <div :class=\"[prefixCls + '-footer']\">\n                    <i-button type=\"ghost\" size=\"small\" @click=\"cancel\">{{ cancelText }}</i-button>\n                    <i-button type=\"primary\" size=\"small\" @click=\"ok\">{{ okText }}</i-button>\n                </div>\n            </div>\n            <div :class=\"[prefixCls + '-inner']\" v-if=\"!confirm\">\n                <div :class=\"[prefixCls + '-title']\" v-if=\"showTitle\" v-el:title><slot name=\"title\"><div :class=\"[prefixCls + '-title-inner']\">{{ title }}</div></slot></div>\n                <div :class=\"[prefixCls + '-body']\">\n                    <div :class=\"[prefixCls + '-body-content']\"><slot name=\"content\"><div :class=\"[prefixCls + '-body-content-inner']\">{{ content }}</div></slot></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(191);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _progress2.default;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/progress/progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5e0701a8/progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 192 */
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
/* 193 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"outerClasses\">\n        <div :class=\"innerClasses\">\n            <div :class=\"bgClasses\" :style=\"bgStyle\"></div>\n        </div>\n    </div>\n    <span v-if=\"!hideInfo\" :class=\"textClasses\">\n        <slot>\n            <span v-if=\"isStatus\" :class=\"textInnerClasses\">\n                <Icon :type=\"statusIcon\"></Icon>\n            </span>\n            <span v-else :class=\"textInnerClasses\">\n                {{ percent }}%\n            </span>\n        </slot>\n    </span>\n</div>\n";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(195);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioGroup = __webpack_require__(198);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Group = _radioGroup2.default;
	exports.default = _radio2.default;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(196)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radio/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(197)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ced67f8/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
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
/* 197 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n    <span :class=\"radioClasses\">\n        <span :class=\"innerClasses\"></span>\n        <input\n            type=\"radio\"\n            :class=\"inputClasses\"\n            :disabled=\"disabled\"\n            :checked=\"selected\"\n            @change=\"change\">\n    </span><slot>{{ value }}</slot>\n</label>\n";

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(199)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radio/radio-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(200)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-021fe714/radio-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 199 */
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
/* 200 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(202);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _slider2.default;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/slider/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d08d90a8/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(204);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _inputNumber = __webpack_require__(109);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _tooltip = __webpack_require__(214);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _assist = __webpack_require__(57);

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
	            prefixCls: prefixCls,
	            dragging: false,
	            firstDragging: false,
	            secondDragging: false,
	            startX: 0,
	            currentX: 0,
	            startPos: 0,
	            newPos: null,
	            oldSingleValue: this.value,
	            oldFirstValue: this.value[0],
	            oldSecondValue: this.value[1],
	            singlePosition: (this.value - this.min) / (this.max - this.min) * 100,
	            firstPosition: (this.value[0] - this.min) / (this.max - this.min) * 100,
	            secondPosition: (this.value[1] - this.min) / (this.max - this.min) * 100
	        };
	    },

	    computed: {
	        classes: function classes() {
	            var _ref;

	            return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-input', this.showInput && !this.range), (0, _defineProperty3.default)(_ref, prefixCls + '-range', this.range), (0, _defineProperty3.default)(_ref, prefixCls + '-disabled', this.disabled), _ref)];
	        },
	        buttonClasses: function buttonClasses() {
	            return [prefixCls + '-button', (0, _defineProperty3.default)({}, prefixCls + '-button-dragging', this.dragging)];
	        },
	        button1Classes: function button1Classes() {
	            return [prefixCls + '-button', (0, _defineProperty3.default)({}, prefixCls + '-button-dragging', this.firstDragging)];
	        },
	        button2Classes: function button2Classes() {
	            return [prefixCls + '-button', (0, _defineProperty3.default)({}, prefixCls + '-button-dragging', this.secondDragging)];
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
	            var stopCount = (this.max - this.min) / this.step;
	            var result = [];
	            var stepWidth = 100 * this.step / (this.max - this.min);
	            for (var i = 1; i < stopCount; i++) {
	                result.push(i * stepWidth);
	            }
	            return result;
	        },
	        sliderWidth: function sliderWidth() {
	            return parseInt((0, _assist.getStyle)(this.$els.slider, 'width'), 10);
	        }
	    },
	    watch: {
	        value: function value(val) {
	            var _this = this;

	            this.$nextTick(function () {
	                _this.$refs.tooltip.updatePopper();
	                if (_this.range) {
	                    _this.$refs.tooltip2.updatePopper();
	                }
	            });
	            this.updateValue(val);
	        }
	    },
	    methods: {
	        updateValue: function updateValue(val) {
	            var init = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	            if (this.range) {
	                var value = [].concat((0, _toConsumableArray3.default)(val));
	                if (init) {
	                    if (value[0] > value[1]) {
	                        value = [this.min, this.max];
	                    }
	                } else {
	                    if (value[0] > value[1]) {
	                        value[0] = value[1];
	                    }
	                }
	                if (value[0] < this.min) {
	                    value[0] = this.min;
	                }
	                if (value[0] > this.max) {
	                    value[0] = this.max;
	                }
	                if (value[1] < this.min) {
	                    value[1] = this.min;
	                }
	                if (value[1] > this.max) {
	                    value[1] = this.max;
	                }
	                if (this.value[0] === value[0] && this.value[1] === value[1]) return;

	                this.value = value;
	                this.setFirstPosition(this.value[0]);
	                this.setSecondPosition(this.value[1]);
	            } else {
	                if (val < this.min) {
	                    this.value = this.min;
	                }
	                if (val > this.max) {
	                    this.value = this.max;
	                }
	                this.setSinglePosition(this.value);
	            }
	        },
	        sliderClick: function sliderClick(event) {
	            if (this.disabled) return;
	            var currentX = event.clientX;
	            var sliderOffsetLeft = this.$els.slider.getBoundingClientRect().left;
	            var newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;

	            if (this.range) {
	                var type = '';
	                if (newPos <= this.firstPosition) {
	                    type = 'First';
	                } else if (newPos >= this.secondPosition) {
	                    type = 'Second';
	                } else {
	                    if (newPos - this.firstPosition <= this.secondPosition - newPos) {
	                        type = 'First';
	                    } else {
	                        type = 'Second';
	                    }
	                }
	                this['change' + type + 'Position'](newPos);
	            } else {
	                this.changeSinglePosition(newPos);
	            }
	        },
	        onSingleButtonDown: function onSingleButtonDown(event) {
	            if (this.disabled) return;
	            event.preventDefault();
	            this.onSingleDragStart(event);
	            window.addEventListener('mousemove', this.onSingleDragging);
	            window.addEventListener('mouseup', this.onSingleDragEnd);
	        },
	        onSingleDragStart: function onSingleDragStart(event) {
	            this.dragging = true;
	            this.startX = event.clientX;
	            this.startPos = parseInt(this.singlePosition, 10);
	        },
	        onSingleDragging: function onSingleDragging(event) {
	            if (this.dragging) {
	                this.$refs.tooltip.visible = true;
	                this.currentX = event.clientX;
	                var diff = (this.currentX - this.startX) / this.sliderWidth * 100;
	                this.newPos = this.startPos + diff;
	                this.changeSinglePosition(this.newPos);
	            }
	        },
	        onSingleDragEnd: function onSingleDragEnd() {
	            if (this.dragging) {
	                this.dragging = false;
	                this.$refs.tooltip.visible = false;
	                this.changeSinglePosition(this.newPos);
	                window.removeEventListener('mousemove', this.onSingleDragging);
	                window.removeEventListener('mouseup', this.onSingleDragEnd);
	            }
	        },
	        changeSinglePosition: function changeSinglePosition(newPos) {
	            if (newPos >= 0 && newPos <= 100) {
	                var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	                var steps = Math.round(newPos / lengthPerStep);

	                this.value = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
	                this.setSinglePosition(this.value);
	                if (!this.dragging) {
	                    if (this.value !== this.oldSingleValue) {
	                        this.$emit('on-change', this.value);
	                        this.oldSingleValue = this.value;
	                    }
	                }
	            }
	        },
	        setSinglePosition: function setSinglePosition(val) {
	            this.singlePosition = (val - this.min) / (this.max - this.min) * 100;
	        },
	        handleInputChange: function handleInputChange(val) {
	            this.value = val;
	            this.setSinglePosition(val);
	            this.$emit('on-change', this.value);
	        },
	        onFirstButtonDown: function onFirstButtonDown(event) {
	            if (this.disabled) return;
	            event.preventDefault();
	            this.onFirstDragStart(event);
	            window.addEventListener('mousemove', this.onFirstDragging);
	            window.addEventListener('mouseup', this.onFirstDragEnd);
	        },
	        onFirstDragStart: function onFirstDragStart(event) {
	            this.firstDragging = true;
	            this.startX = event.clientX;
	            this.startPos = parseInt(this.firstPosition, 10);
	        },
	        onFirstDragging: function onFirstDragging(event) {
	            if (this.firstDragging) {
	                this.$refs.tooltip.visible = true;
	                this.currentX = event.clientX;
	                var diff = (this.currentX - this.startX) / this.sliderWidth * 100;
	                this.newPos = this.startPos + diff;
	                this.changeFirstPosition(this.newPos);
	            }
	        },
	        onFirstDragEnd: function onFirstDragEnd() {
	            if (this.firstDragging) {
	                this.firstDragging = false;
	                this.$refs.tooltip.visible = false;
	                this.changeFirstPosition(this.newPos);
	                window.removeEventListener('mousemove', this.onFirstDragging);
	                window.removeEventListener('mouseup', this.onFirstDragEnd);
	            }
	        },
	        changeFirstPosition: function changeFirstPosition(newPos) {
	            if (newPos >= 0 && newPos <= this.secondPosition) {
	                var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	                var steps = Math.round(newPos / lengthPerStep);

	                this.value = [Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min), this.value[1]];
	                this.setFirstPosition(this.value[0]);
	                if (!this.firstDragging) {
	                    if (this.value[0] !== this.oldFirstValue) {
	                        this.$emit('on-change', this.value);
	                        this.oldFirstValue = this.value[0];
	                    }
	                }
	            }
	        },
	        setFirstPosition: function setFirstPosition(val) {
	            this.firstPosition = (val - this.min) / (this.max - this.min) * 100;
	        },
	        onSecondButtonDown: function onSecondButtonDown(event) {
	            if (this.disabled) return;
	            event.preventDefault();
	            this.onSecondDragStart(event);
	            window.addEventListener('mousemove', this.onSecondDragging);
	            window.addEventListener('mouseup', this.onSecondDragEnd);
	        },
	        onSecondDragStart: function onSecondDragStart(event) {
	            this.secondDragging = true;
	            this.startX = event.clientX;
	            this.startPos = parseInt(this.secondPosition, 10);
	        },
	        onSecondDragging: function onSecondDragging(event) {
	            if (this.secondDragging) {
	                this.$refs.tooltip2.visible = true;
	                this.currentX = event.clientX;
	                var diff = (this.currentX - this.startX) / this.sliderWidth * 100;
	                this.newPos = this.startPos + diff;
	                this.changeSecondPosition(this.newPos);
	            }
	        },
	        onSecondDragEnd: function onSecondDragEnd() {
	            if (this.secondDragging) {
	                this.secondDragging = false;
	                this.$refs.tooltip2.visible = false;
	                this.changeSecondPosition(this.newPos);
	                window.removeEventListener('mousemove', this.onSecondDragging);
	                window.removeEventListener('mouseup', this.onSecondDragEnd);
	            }
	        },
	        changeSecondPosition: function changeSecondPosition(newPos) {
	            if (newPos >= this.firstPosition && newPos <= 100) {
	                var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	                var steps = Math.round(newPos / lengthPerStep);

	                this.value = [this.value[0], Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min)];
	                this.setSecondPosition(this.value[1]);
	                if (!this.secondDragging) {
	                    if (this.value[1] !== this.oldSecondValue) {
	                        this.$emit('on-change', this.value);
	                        this.oldSecondValue = this.value[1];
	                    }
	                }
	            }
	        },
	        setSecondPosition: function setSecondPosition(val) {
	            this.secondPosition = (val - this.min) / (this.max - this.min) * 100;
	        }
	    },
	    ready: function ready() {
	        if (this.range) {
	            var isArray = Array.isArray(this.value);
	            if (!isArray || isArray && this.value.length != 2 || isArray && (isNaN(this.value[0]) || isNaN(this.value[1]))) {
	                this.value = [this.min, this.max];
	            } else {
	                this.updateValue(this.value, true);
	            }
	        } else {
	            if (typeof this.value !== 'number') {
	                this.value = this.min;
	            }
	            this.updateValue(this.value);
	        }
	    }
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(205);

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

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(206), __esModule: true };

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	__webpack_require__(207);
	module.exports = __webpack_require__(6).Array.from;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(7)
	  , $export        = __webpack_require__(4)
	  , toObject       = __webpack_require__(37)
	  , call           = __webpack_require__(208)
	  , isArrayIter    = __webpack_require__(209)
	  , toLength       = __webpack_require__(28)
	  , createProperty = __webpack_require__(210)
	  , getIterFn      = __webpack_require__(211);

	$export($export.S + $export.F * !__webpack_require__(213)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(11);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(147)
	  , ITERATOR   = __webpack_require__(153)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(10)
	  , createDesc      = __webpack_require__(18);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(212)
	  , ITERATOR  = __webpack_require__(153)('iterator')
	  , Iterators = __webpack_require__(147);
	module.exports = __webpack_require__(6).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(153)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(153)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(215)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tooltip/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(216)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5355c2d8/tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _popper = __webpack_require__(188);

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
	        },
	        controlled: {
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
	            if (!this.controlled) {
	                this.visible = false;
	            }
	        }
	    }
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls]\" @mouseenter=\"handleShowPopper\" @mouseleave=\"handleClosePopper\">\n    <div :class=\"[prefixCls + '-rel']\" v-el:reference>\n        <slot></slot>\n    </div>\n    <div :class=\"[prefixCls + '-popper']\" transition=\"fade\" v-el:popper v-show=\"!disabled && visible\">\n        <div :class=\"[prefixCls + '-content']\">\n            <div :class=\"[prefixCls + '-arrow']\"></div>\n            <div :class=\"[prefixCls + '-inner']\"><slot name=\"content\">{{ content }}</slot></div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <Input-number\n        v-if=\"!range && showInput\"\n        :min=\"min\"\n        :max=\"max\"\n        :step=\"step\"\n        :value=\"value\"\n        :disabled=\"disabled\"\n        @on-change=\"handleInputChange\"></Input-number>\n    <div :class=\"[prefixCls + '-wrap']\" v-el:slider @click.self=\"sliderClick\">\n        <template v-if=\"showStops\">\n            <div :class=\"[prefixCls + '-stop']\" v-for=\"item in stops\" :style=\"{ 'left': item + '%' }\" @click.self=\"sliderClick\"></div>\n        </template>\n        <div :class=\"[prefixCls + '-bar']\" :style=\"barStyle\" @click.self=\"sliderClick\"></div>\n        <template v-if=\"range\">\n            <div\n                :class=\"[prefixCls + '-button-wrap']\"\n                :style=\"{left: firstPosition + '%'}\"\n                @mousedown=\"onFirstButtonDown\">\n                <Tooltip :controlled=\"firstDragging\" placement=\"top\" :content=\"tipFormat(value[0])\" :disabled=\"tipFormat(value[0]) === null\" v-ref:tooltip>\n                    <div :class=\"button1Classes\"></div>\n                </Tooltip>\n            </div>\n            <div\n                :class=\"[prefixCls + '-button-wrap']\"\n                :style=\"{left: secondPosition + '%'}\"\n                @mousedown=\"onSecondButtonDown\">\n                <Tooltip :controlled=\"secondDragging\" placement=\"top\" :content=\"tipFormat(value[1])\" :disabled=\"tipFormat(value[1]) === null\" v-ref:tooltip2>\n                    <div :class=\"button2Classes\"></div>\n                </Tooltip>\n            </div>\n        </template>\n        <template v-else>\n            <div\n                :class=\"[prefixCls + '-button-wrap']\"\n                :style=\"{left: singlePosition + '%'}\"\n                @mousedown=\"onSingleButtonDown\">\n                <Tooltip :controlled=\"dragging\" placement=\"top\" :content=\"tipFormat(value)\" :disabled=\"tipFormat(value) === null\" v-ref:tooltip>\n                    <div :class=\"buttonClasses\"></div>\n                </Tooltip>\n            </div>\n        </template>\n    </div>\n</div>\n";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spin = __webpack_require__(219);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _spin2.default;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/spin/spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-04b52a4c/spin.vue"
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
/* 221 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" transition=\"fade\">\n    <div :class=\"mainClasses\">\n        <span :class=\"dotClasses\"></span>\n        <div :class=\"textClasses\" v-el:text><slot></slot></div>\n    </div>\n</div>\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _steps = __webpack_require__(223);

	var _steps2 = _interopRequireDefault(_steps);

	var _step = __webpack_require__(226);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_steps2.default.Step = _step2.default;
	exports.default = _steps2.default;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/steps/steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(225)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0c516548/steps.vue"
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
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(227)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/steps/step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(228)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4a0168a7/step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 227 */
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
/* 228 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" :style=\"styles\">\n    <div :class=\"[prefixCls + '-tail']\"><i></i></div>\n    <div :class=\"[prefixCls + '-head']\">\n        <div :class=\"[prefixCls + '-head-inner']\">\n            <span v-if=\"!icon && status != 'finish' && status != 'error'\">{{ stepNumber }}</span>\n            <span v-else :class=\"iconClasses\"></span>\n        </div>\n    </div>\n    <div :class=\"[prefixCls + '-main']\">\n        <div :class=\"[prefixCls + '-title']\">{{ title }}</div>\n        <div v-if=\"content\" :class=\"[prefixCls + '-content']\">{{ content }}</div>\n    </div>\n</div>\n";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _switch = __webpack_require__(230);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _switch2.default;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(231)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/switch/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(232)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-337c9768/switch.vue"
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
/* 232 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\" @click=\"toggle\">\n    <span :class=\"innerClasses\">\n        <slot name=\"open\" v-if=\"checked\"></slot>\n        <slot name=\"close\" v-if=\"!checked\"></slot>\n    </span>\n</span>\n";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(234);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tag2.default;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(235)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/tag/tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0fe24242/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 235 */
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
/* 236 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"classes\" transition=\"fade\">\n    <span :class=\"dotClasses\" v-if=\"showDot\"></span><span :class=\"textClasses\"><slot></slot></span><Icon v-if=\"closable\" type=\"ios-close-empty\" @click=\"close\"></Icon>\n</div>\n";

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timeline = __webpack_require__(238);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _timelineItem = __webpack_require__(241);

	var _timelineItem2 = _interopRequireDefault(_timelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_timeline2.default.Item = _timelineItem2.default;
	exports.default = _timeline2.default;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/timeline/timeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6dbe55ac/timeline.vue"
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
/* 240 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"classes\">\n    <slot></slot>\n</ul>\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(242)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/timeline/timeline-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-be25ce78/timeline-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 242 */
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
/* 243 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"itemClasses\">\n    <div :class=\"tailClasses\"></div>\n    <div :class=\"headClasses\" :style=\"customColor\" v-el:dot><slot name=\"dot\"></slot></div>\n    <div :class=\"contentClasses\">\n        <slot></slot>\n    </div>\n</li>\n";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(214);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tooltip2.default;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _row = __webpack_require__(246);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(249);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Row = _row2.default;
	exports.Col = _col2.default;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/layout/row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d0f28e8/row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
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
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(250)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/layout/col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-42f6ad8e/col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
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
/* 251 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\" :style=\"styles\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OptionGroup = exports.Option = exports.Select = undefined;

	var _select = __webpack_require__(137);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(180);

	var _option2 = _interopRequireDefault(_option);

	var _optionGroup = __webpack_require__(253);

	var _optionGroup2 = _interopRequireDefault(_optionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Select = _select2.default;
	exports.Option = _option2.default;
	exports.OptionGroup = _optionGroup2.default;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(254)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/select/option-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(255)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9aee4412/option-group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 254 */
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
/* 255 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-wrap']\">\n    <div :class=\"[prefixCls + '-title']\">{{ label }}</div>\n    <ul>\n        <li :class=\"[prefixCls]\"><slot></slot></li>\n    </ul>\n</li>\n";

/***/ }
/******/ ])
});
;