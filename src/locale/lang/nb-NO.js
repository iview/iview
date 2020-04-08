import setLang from '../lang';

const lang = {
    i: {
        locale: 'nb-NO',
        select: {
            placeholder: 'Velg',
            noMatch: 'Ingen treff',
            loading: 'Laster'
        },
        table: {
            noDataText: 'Ingen data',
            noFilteredDataText: 'Filtreringen gir ingen treff',
            confirmFilter: 'Bekreft',
            resetFilter: 'Nullstill',
            clearFilter: 'Alle',
            sumText: 'Sum'
        },
        datepicker: {
            selectDate: 'Velg dato',
            selectTime: 'Velg klokkeslett',
            startTime: 'Start klokken',
            endTime: 'Slutt klokken',
            clear: 'Nullstill',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Måned',
            month1: 'Januar',
            month2: 'Februar',
            month3: 'Mars',
            month4: 'April',
            month5: 'Mai',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'August',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Desember',
            year: 'År',
            weekStartDay: '1',
            weeks: {
                sun: 'Søn',
                mon: 'Man',
                tue: 'Tir',
                wed: 'Ons',
                thu: 'Tor',
                fri: 'Fre',
                sat: 'Lør'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Des'
            }
        },
        transfer: {
            titles: {
                source: 'Kilde',
                target: 'Mål'
            },
            filterPlaceholder: 'Søkeord her',
            notFoundText: 'Ikke funnet'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Avbryt'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Avbryt'
        },
        page: {
            prev: 'Forrige side',
            next: 'Neste side',
            total: 'Total',
            item: 'element',
            items: 'elementer',
            prev5: 'Forrige 5 sider',
            next5: 'Neste 5 sider',
            page: '/side',
            goto: 'Gå til',
            p: ''
        },
        rate: {
            star: 'Stjerne',
            stars: 'Stjerner'
        },
        time: {
            before: ' siden',
            after: ' etter',
            just: 'akkurat nå',
            seconds: ' sekunder',
            minutes: ' minutter',
            hours: ' timer',
            days: ' dager'
        },
        tree: {
            emptyText: 'Ingen data'
        }
    }
};

setLang(lang);

export default lang;
