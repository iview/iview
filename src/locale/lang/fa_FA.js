(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iview/locale", [], factory);
	else if(typeof exports === 'object')
		exports["iview/locale"] = factory();
	else
		root["iview/locale"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/locale/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        select: {
            placeholder: 'انتخاب کنید',
            noMatch: 'داده ای مطابق نیست',
            loading: 'در حال بارگیری'
        },
        table: {
            noDataText: 'بدون اطلاعات',
            noFilteredDataText: 'بدون اطلاعات فیلتر',
            confirmFilter: 'تایید',
            resetFilter: 'بازنشانی',
            clearFilter: 'All'
        },
        datepicker: {
            selectDate: 'انتخاب تاریخ',
            selectTime: 'انتخاب زمان',
            startTime: 'زمان شروع',
            endTime: 'زمان پایان',
            clear: 'پاک کردن',
            ok: 'خوب',
            month: '',
            month1: 'ژانویه',
            month2: 'فوریه',
            month3: 'مارس',
            month4: 'آوریل',
            month5: 'مه',
            month6: 'ژوئن',
            month7: 'جولای',
            month8: 'آگوست',
            month9: 'سپتامبر',
            month10: 'اکتبر',
            month11: 'نوامبر',
            month12: 'دسامبر',
            year: '',
            weeks: {
                sun: 'یکشنبه',
                mon: 'دوشنبه',
                tue: 'سهشنبه',
                wed: 'چهارشنبه',
                thu: 'پنج شنبه',
                fri: 'جمعه',
                sat: 'شنبه'
            },
            months: {
                m1: 'ژانویه',
                m2: 'فوریه',
                m3: 'مارس',
                m4: 'آوریل',
                m5: 'مه',
                m6: 'ژوئن',
                m7: 'جولای',
                m8: 'آگوست',
                m9: 'سپتامبر',
                m10: 'اکتبر',
                m11: 'نوامبر',
                m12: 'دسامبر'
            }
        },
        transfer: {
            titles: {
                source: 'منبع',
                target: 'هدف'
            },
            filterPlaceholder: 'جستجو',
            notFoundText: 'پیدا نشد'
        },
        modal: {
            okText: 'خوب',
            cancelText: 'لغو'
        },
        poptip: {
            okText: 'خوب',
            cancelText: 'لغو'
        },
        page: {
            prev: 'صفحه قبلی',
            next: 'صفحه بعد',
            total: 'مجموع',
            item: 'آیتم',
            items: 'اقلام',
            prev5: '۵ صفحه قبلی ',
            next5: 'بعد صفحه ۵ ',
            page: '/صفحه',
            goto: 'برو به',
            p: ''
        },
        rate: {
            star: 'ستاره',
            stars: 'ستاره ها'
        },
        tree: {
            emptyText: 'بدون اطلاعات'
        }
    }
};

/***/ })
/******/ ]);
});
