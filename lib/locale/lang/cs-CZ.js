'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lang = require('../lang');

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = {
    i: {
        locale: 'cs-CZ',
        select: {
            placeholder: 'Vybrat',
            noMatch: 'Nenalezeny žádné položky',
            loading: 'Nahrávám'
        },
        table: {
            noDataText: 'Žádná data',
            noFilteredDataText: 'Nenalezeny žádné položky',
            confirmFilter: 'Potvrdit',
            resetFilter: 'Reset',
            clearFilter: 'Vše'
        },
        datepicker: {
            selectDate: 'Vybrat datum',
            selectTime: 'Vybrat čas',
            startTime: 'Začátek',
            endTime: 'Konec',
            clear: 'Vymazat',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Měsíc',
            month1: 'Leden',
            month2: 'Únor',
            month3: 'Březen',
            month4: 'Duben',
            month5: 'Květen',
            month6: 'Červen',
            month7: 'Červenec',
            month8: 'Srpen',
            month9: 'Září',
            month10: 'Říjen',
            month11: 'Listopad',
            month12: 'Prosinec',
            year: 'Rok',
            weekStartDay: '1',
            weeks: {
                sun: 'Ne',
                mon: 'Po',
                tue: 'Út',
                wed: 'St',
                thu: 'Čt',
                fri: 'Pá',
                sat: 'So'
            },
            months: {
                m1: 'Led',
                m2: 'Úno',
                m3: 'Bře',
                m4: 'Dub',
                m5: 'Kvě',
                m6: 'Čer',
                m7: 'Čnc',
                m8: 'Srp',
                m9: 'Zář',
                m10: 'Říj',
                m11: 'Lis',
                m12: 'Pro'
            }
        },
        transfer: {
            titles: {
                source: 'Zdroj',
                target: 'Cíl'
            },
            filterPlaceholder: 'Hledat',
            notFoundText: 'Nenalezeno'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Zrušit'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Zrušit'
        },
        page: {
            prev: 'Následující',
            next: 'Předchozí',
            total: 'Celkem',
            item: 'položka',

            items: 'položek',
            prev5: 'Předchozích 5 stránek',
            next5: 'Následujících 5 stránek',
            page: 'na stránku',
            goto: 'Jít na',
            p: ''
        },
        rate: {
            star: 'hvězda',
            stars: 'hvězdy' },
        tree: {
            emptyText: 'Žádná data'
        }
    }
};

(0, _lang2.default)(lang);

exports.default = lang;