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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'ko-KR',
        select: {
            placeholder: '선택',
            noMatch: '일치하는 데이터 없음',
            loading: '로딩'
        },
        table: {
            noDataText: '데이터 없음',
            noFilteredDataText: '필터된 데이터 없음',
            confirmFilter: '확인',
            resetFilter: '초기화',
            clearFilter: '전부'
        },
        datepicker: {
            selectDate: '날짜 선택',
            selectTime: '시간 선택',
            startTime: '시작 시간',
            endTime: '종료 시간',
            clear: '삭제',
            ok: '예',
            datePanelLabel: '[yyyy년] [m월]',
            month: '월',
            month1: '1월',
            month2: '2월',
            month3: '3월',
            month4: '4월',
            month5: '5월',
            month6: '6월',
            month7: '7월',
            month8: '8월',
            month9: '9월',
            month10: '10월',
            month11: '11월',
            month12: '12월',
            year: '년',
            weekStartDay: '0',
            weeks: {
                sun: '일',
                mon: '월',
                tue: '화',
                wed: '수',
                thu: '목',
                fri: '금',
                sat: '토'
            },
            months: {
                m1: '1월',
                m2: '2월',
                m3: '3월',
                m4: '4월',
                m5: '5월',
                m6: '6월',
                m7: '7월',
                m8: '8월',
                m9: '9월',
                m10: '10월',
                m11: '11월',
                m12: '12월'
            }
        },
        transfer: {
            titles: {
                source: '소스',
                target: '타겟'
            },
            filterPlaceholder: '여기서 찾기',
            notFoundText: '아무 것도 찾을 수 없음'
        },
        modal: {
            okText: '예',
            cancelText: '취소'
        },
        poptip: {
            okText: '예',
            cancelText: '취소'
        },
        page: {
            prev: '이전 페이지',
            next: '다음 페이지',
            total: '전체',
            item: '항목',
            items: '항목',
            prev5: '이전 5 페이지',
            next5: '다음 5 페이지',
            page: '/페이지',
            goto: '이동',
            p: ''
        },
        rate: {
            star: '중요',
            stars: '중요'
        },
        tree: {
            emptyText: '데이터 없음'
        }
    }
};

/***/ })

/******/ });
});