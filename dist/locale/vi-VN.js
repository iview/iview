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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'vi-VN',
        select: {
            placeholder: 'Chọn',
            noMatch: 'Không tìm thấy',
            loading: 'Đang tải'
        },
        table: {
            noDataText: 'Không có dữ liệu',
            noFilteredDataText: 'Không có dữ liệu lọc',
            confirmFilter: 'Xác nhận',
            resetFilter: 'Làm lại',
            clearFilter: 'Xóa hết'
        },
        datepicker: {
            selectDate: 'Chọn ngày',
            selectTime: 'Chọn giờ',
            startTime: 'Ngày bắt đầu',
            endTime: 'Ngày kết thúc',
            clear: 'Xóa',
            ok: 'Đồng ý',
            datePanelLabel: '[Tháng mm]/[yyyy]',
            month: '',
            month1: 'Tháng 1',
            month2: 'Tháng 2',
            month3: 'Tháng 3',
            month4: 'Tháng 4',
            month5: 'Tháng 5',
            month6: 'Tháng 6',
            month7: 'Tháng 7',
            month8: 'Tháng 8',
            month9: 'Tháng 9',
            month10: 'Tháng 10',
            month11: 'Tháng 11',
            month12: 'Tháng 12',
            year: '',
            weekStartDay: '1',
            weeks: {
                sun: 'CN',
                mon: 'T2',
                tue: 'T3',
                wed: 'T4',
                thu: 'T5',
                fri: 'T6',
                sat: 'T7'
            },
            months: {
                m1: 'Th.1',
                m2: 'Th.2',
                m3: 'Th.3',
                m4: 'Th.4',
                m5: 'Th.5',
                m6: 'Th.6',
                m7: 'Th.7',
                m8: 'Th.8',
                m9: 'Th.9',
                m10: 'Th.10',
                m11: 'Th.11',
                m12: 'Th.12'
            }
        },
        transfer: {
            titles: {
                source: 'Nguồn',
                target: 'Đích'
            },
            filterPlaceholder: 'Nhập từ khóa',
            notFoundText: 'Không tìm thấy'
        },
        modal: {
            okText: 'Đồng ý',
            cancelText: 'Hủy bỏ'
        },
        poptip: {
            okText: 'Đồng ý',
            cancelText: 'Hủy bỏ'
        },
        page: {
            prev: 'Trang trước',
            next: 'Trang kế',
            total: 'Tổng',
            item: 'kết quả',
            items: 'kết quả',
            prev5: '5 trang trước',
            next5: '5 trang kế',
            page: '/trang',
            goto: 'Tới trang',
            p: ''
        },
        rate: {
            star: 'Sao',
            stars: 'Sao'
        },
        tree: {
            emptyText: 'Không có dữ liệu'
        }
    }
};

/***/ })

/******/ });
});