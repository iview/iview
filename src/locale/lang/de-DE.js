import setLang from '../lang';

const lang = {
    i: {
        locale: 'de-DE',
        select: {
            placeholder: 'Auswählen',
            noMatch: 'Keine Übereinstimmungen',
            loading: 'Lädt'
        },
        table: {
            noDataText: 'Keine Daten',
            noFilteredDataText: 'Keine gefilterten Daten',
            confirmFilter: 'Bestätigen',
            resetFilter: 'Zurücksetzen',
            clearFilter: 'Alle',
            sumText: 'Summe'
        },
        datepicker: {
            selectDate: 'Datum auswählen',
            selectTime: 'Zeit auswählen',
            startTime: 'Beginn',
            endTime: 'Ende',
            clear: 'Leeren',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Monat',
            month1: 'Januar',
            month2: 'Februar',
            month3: 'März',
            month4: 'April',
            month5: 'Mai',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'August',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Dezember',
            year: 'Jahr',
            weekStartDay: '1',
            weeks: {
                sun: 'So',
                mon: 'Mo',
                tue: 'Di',
                wed: 'Mi',
                thu: 'Do',
                fri: 'Fr',
                sat: 'Sa'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mär',
                m4: 'Apr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dez'
            }
        },
        transfer: {
            titles: {
                source: 'Quelle',
                target: 'Ziel'
            },
            filterPlaceholder: 'Suchen',
            notFoundText: 'Nicht gefunden'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Abbrechen'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Abbrechen'
        },
        page: {
            prev: 'Vorherige Seite',
            next: 'Nächste Seite',
            total: 'Total',
            item: 'Eintrag',
            items: 'Einträge',
            prev5: 'vorherigen fünf Seiten',
            next5: 'nächste fünf Seiten',
            page: '/seite',
            goto: 'Gehe zu',
            p: ''
        },
        rate: {
            star: 'Stern',
            stars: 'Sterne'
        },
        tree: {
            emptyText: 'Keine Daten'
        }
    }
};

setLang(lang);

export default lang;
