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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    i: {
        locale: 'fr-FR',
        select: {
            placeholder: 'Sélectionnez',
            noMatch: 'Aucun résultat',
            loading: 'Chargement'
        },
        table: {
            noDataText: 'Aucune donnée',
            noFilteredDataText: 'No filter data',
            confirmFilter: 'Confirmez',
            resetFilter: 'Reset',
            clearFilter: 'Tout'
        },
        datepicker: {
            selectDate: 'Sélectionnez une date',
            selectTime: 'Sélectionnez une heure',
            startTime: 'Heure de début',
            endTime: 'Heure de fin',
            clear: 'Annuler',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Mois',
            month1: 'Janvier',
            month2: 'Février',
            month3: 'Mars',
            month4: 'Avril',
            month5: 'Mai',
            month6: 'Juin',
            month7: 'Juillet',
            month8: 'Août',
            month9: 'Septembre',
            month10: 'Octobre',
            month11: 'Novembre',
            month12: 'Decembre',
            year: 'An',
            weekStartDay: '1',
            weeks: {
                sun: 'Dim',
                mon: 'Lun',
                tue: 'Mar',
                wed: 'Mer',
                thu: 'Jeu',
                fri: 'Ven',
                sat: 'Sam'
            },
            months: {
                m1: 'Jan',
                m2: 'Fev',
                m3: 'Mar',
                m4: 'Avr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aoû',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Déc'
            }
        },
        transfer: {
            titles: {
                source: 'Source',
                target: 'Cible'
            },
            filterPlaceholder: 'Recherche',
            notFoundText: 'Pas de résultat'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Annuler'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Annuler'
        },
        page: {
            prev: 'Page Précédente',
            next: 'Page Suivante',
            total: 'Total',
            item: 'élément',
            items: 'éléments',
            prev5: '5 Pages en Avant',
            next5: '5 Pages en Arrière',
            page: '/page',
            goto: 'Aller à',
            p: ''
        },
        rate: {
            star: 'Étoile',
            stars: 'Étoiles'
        },
        tree: {
            emptyText: 'Aucune donnée'
        }
    }
};

/***/ })

/******/ });
});