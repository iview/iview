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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'id-ID',
        select: {
            placeholder: 'Pilih',
            noMatch: 'Tidak ada data yang cocok',
            loading: 'Memuat'
        },
        table: {
            noDataText: 'Tidak ada data',
            noFilteredDataText: 'Tidak ada data filter',
            confirmFilter: 'Konfirmasi',
            resetFilter: 'Tata ulang',
            clearFilter: 'Semua'
        },
        datepicker: {
            selectDate: 'Pilih tanggal',
            selectTime: 'Pilih waktu',
            startTime: 'Waktu Mulai',
            endTime: 'Waktu Selesai',
            clear: 'Bersihkan',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: '',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Maret',
            month4: 'April',
            month5: 'Mei',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Agustus',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Desember',
            year: '',
            weekStartDay: '1',
            weeks: {
                sun: 'Min',
                mon: 'Sen',
                tue: 'Sel',
                wed: 'Rab',
                thu: 'Kam',
                fri: 'Jum',
                sat: 'Sab'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mei',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Agu',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'Sumber',
                target: 'Tujuan'
            },
            filterPlaceholder: 'Cari disini',
            notFoundText: 'Tidak ditemukan'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        page: {
            prev: 'Halaman Sebelumnya',
            next: 'Halaman Selanjutnya',
            total: 'Total',
            item: 'butir',
            items: 'butir',
            prev5: '5 Halaman Sebelumnya',
            next5: '5 Halaman Selanjutnya',
            page: '/page',
            goto: 'Pergi ke',
            p: ''
        },
        rate: {
            star: 'Star',
            stars: 'Stars'
        },
        tree: {
            emptyText: 'Tidak ada data'
        }
    }
};

/***/ })

/******/ });
});