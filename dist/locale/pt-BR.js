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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'pt-BR',
        select: {
            placeholder: 'Selecionar',
            noMatch: 'Não encontrado',
            loading: 'Carregando'
        },
        table: {
            noDataText: 'Sem dados',
            noFilteredDataText: 'Sem dados filtrados',
            confirmFilter: 'Confirmar',
            resetFilter: 'Limpar',
            clearFilter: 'Todos'
        },
        datepicker: {
            selectDate: 'Selecione a data',
            selectTime: 'Selecione a hora',
            startTime: 'Hora inicial',
            endTime: 'Hora final',
            clear: 'Limpar',
            ok: 'Confirmar',
            datePanelLabel: '[mmmm] de [yyyy]',
            month: 'Mês',
            month1: 'Janeiro',
            month2: 'Fevereiro',
            month3: 'Março',
            month4: 'Abril',
            month5: 'Maio',
            month6: 'Junho',
            month7: 'Julho',
            month8: 'Agosto',
            month9: 'Setembro',
            month10: 'Outubro',
            month11: 'Novembro',
            month12: 'Dezembro',
            year: 'Ano',
            weekStartDay: '0',
            weeks: {
                sun: 'Dom',
                mon: 'Seg',
                tue: 'Ter',
                wed: 'Qua',
                thu: 'Qui',
                fri: 'Sex',
                sat: 'Sáb'
            },
            months: {
                m1: 'Jan',
                m2: 'Fev',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Set',
                m10: 'Out',
                m11: 'Nov',
                m12: 'Dez'
            }
        },
        transfer: {
            titles: {
                source: 'Origem',
                target: 'Destino'
            },
            filterPlaceholder: 'Pesquise aqui',
            notFoundText: 'Não encontrado'
        },
        modal: {
            okText: 'Confirmar',
            cancelText: 'Cancelar'
        },
        poptip: {
            okText: 'Confirmar',
            cancelText: 'Cancelar'
        },
        page: {
            prev: 'Página Anterior',
            next: 'Próxima Página',
            total: 'Total',
            item: 'item',
            items: 'itens',
            prev5: 'Voltar 5 Páginas',
            next5: 'Avançar 5 Páginas',
            page: '/page',
            goto: 'Ir para',
            p: ''
        },
        rate: {
            star: 'Estrela',
            stars: 'Estrelas'
        },
        tree: {
            emptyText: 'Sem dados'
        }
    }
};

/***/ })

/******/ });
});