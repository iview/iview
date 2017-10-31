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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'es-ES',
        select: {
            placeholder: 'Seleccionar',
            noMatch: 'Sin coincidencias',
            loading: 'Cargando'
        },
        table: {
            noDataText: 'Sin Datos',
            noFilteredDataText: 'Sin Datos para el filtro',
            confirmFilter: 'Aceptar',
            resetFilter: 'Quitar filtro',
            clearFilter: 'Todos'
        },
        datepicker: {
            selectDate: 'Seleccionar fecha',
            selectTime: 'Seleccionar hora',
            startTime: 'Hora de inicio',
            endTime: 'Hora de fin',
            clear: 'Limpiar',
            ok: 'Aceptar',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Mes',
            month1: 'Enero',
            month2: 'Febrero',
            month3: 'Marzo',
            month4: 'Abril',
            month5: 'Mayo',
            month6: 'Junio',
            month7: 'Julio',
            month8: 'Augosto',
            month9: 'Septiembre',
            month10: 'Octubre',
            month11: 'Noviembre',
            month12: 'Deciembre',
            year: 'Año',
            weekStartDay: '1',
            weeks: {
                sun: 'Domingo',
                mon: 'Lunes',
                tue: 'Martes',
                wed: 'Miércoles',
                thu: 'Jueves',
                fri: 'Viernes',
                sat: 'Sábado'
            },
            months: {
                m1: 'Ene',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'May',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Dic'
            }
        },
        transfer: {
            titles: {
                source: 'Origen',
                target: 'Destino'
            },
            filterPlaceholder: 'Buscar aquí',
            notFoundText: 'Sin resultados'
        },
        modal: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        poptip: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        page: {
            prev: 'Página Anterior',
            next: 'Página Siguiente',
            total: 'Total',
            item: 'Elemento',
            items: 'Elementos',
            prev5: '5 Páginas Anteriores',
            next5: '5 Páginas Siguientes',
            page: '/page',
            goto: 'Ir a',
            p: ''
        },
        rate: {
            star: 'Estrella',
            stars: 'Estrellas'
        },
        tree: {
            emptyText: 'Sin Datos'
        }
    }
};

/***/ })

/******/ });
});