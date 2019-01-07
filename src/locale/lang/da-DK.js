import setLang from '../lang';

const lang = {
    i: {
        locale: 'da-DK',
        select: {
            placeholder: 'Vælg',
            noMatch: 'Ingen resultater fundet',
            loading: 'Indlæser'
        },
        table: {
            noDataText: 'Ingen resultater fundet',
            noFilteredDataText: 'No filter data',
            confirmFilter: 'Bekræft',
            resetFilter: 'Nulstil',
            clearFilter: 'Alle'
        },
        datepicker: {
            selectDate: 'Vælg dato',
            selectTime: 'Vælg tid',
            startTime: 'Starttid',
            endTime: 'Sluttid',
            clear: 'Ryd',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Måned',
            month1: 'Januar',
            month2: 'Februar',
            month3: 'Marts',
            month4: 'April',
            month5: 'Maj',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'August',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'December',
            year: 'År',
            weekStartDay: '0',
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
                m5: 'Maj',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'Kilde',
                target: 'Mål'
            },
            filterPlaceholder: 'Søg her',
            notFoundText: 'Ikke fundet'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Annuller'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Annuller'
        },
        page: {
            prev: 'Forrige side',
            next: 'Næste side',
            total: 'I alt',
            item: 'emne',
            items: 'emner',
            prev5: 'Forrige 5 sider',
            next5: 'Næste 5 sider',
            page: '/page',
            goto: 'Gå til',
            p: ''
        },
        rate: {
            star: 'Stjerne',
            stars: 'Stjerner'
        },
        time: {
            before: ' siden',
            after: ' efter',
            just: 'lige nu',
            seconds: ' sekunder',
            minutes: ' minutter',
            hours: ' timer',
            days: ' dage'
        },
        tree: {
            emptyText: 'Intet indhold'
        }
    }
};

setLang(lang);

export default lang;
