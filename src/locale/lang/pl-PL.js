import setLang from '../lang';

const lang = {
    i: {
        locale: 'pl-PL',
        select: {
            placeholder: 'Wybierz',
            noMatch: 'Brak pasujących wyników',
            loading: 'Ładowanie'
        },
        table: {
            noDataText: 'Brak danych',
            noFilteredDataText: 'Brak danych',
            confirmFilter: 'Potwierdź',
            resetFilter: 'Resetuj',
            clearFilter: 'Wszystkie'
        },
        datepicker: {
            selectDate: 'Wybierz datę',
            selectTime: 'Wybierz godzinę',
            startTime: 'Godzina początkowa',
            endTime: 'Godzina końcowa',
            clear: 'Wyczyść',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Miesiąc',
            month1: 'Styczeń',
            month2: 'Luty',
            month3: 'Marzec',
            month4: 'Kwiecień',
            month5: 'Maj',
            month6: 'Czerwiec',
            month7: 'Lipiec',
            month8: 'Sierpień',
            month9: 'Wrzesień',
            month10: 'Październik',
            month11: 'Listopad',
            month12: 'Grudzień',
            year: 'Rok',
            weekStartDay: '1',
            weeks: {
                sun: 'Ndz',
                mon: 'Pon',
                tue: 'Wto',
                wed: 'Śro',
                thu: 'Czw',
                fri: 'Pią',
                sat: 'Sob'
            },
            months: {
                m1: 'Sty',
                m2: 'Lut',
                m3: 'Mar',
                m4: 'Kwi',
                m5: 'Maj',
                m6: 'Cze',
                m7: 'Lip',
                m8: 'Sie',
                m9: 'Wrz',
                m10: 'Paź',
                m11: 'Lis',
                m12: 'Gru'
            }
        },
        transfer: {
            titles: {
                source: 'Źródłowy',
                target: 'Docelowy'
            },
            filterPlaceholder: 'Szukaj tutaj',
            notFoundText: 'Nie znaleziono'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Anuluj'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Anuluj'
        },
        page: {
            prev: 'Poprzednia Strona',
            next: 'Następna Strona',
            total: 'Łącznie',
            item: 'element',
            items: 'elementów',
            prev5: 'Poprzednie 5 Stron',
            next5: 'Następne 5 Stron',
            page: '/stronę',
            goto: 'Idź do',
            p: ''
        },
        rate: {
            star: 'Gwiazdka',
            stars: 'Gwiazdek'
        },
        time: {
            before: ' temu',
            after: ' po',
            just: 'dopiero co',
            seconds: ' sekund',
            minutes: ' minut',
            hours: ' godzin',
            days: ' dni'
        },
        tree: {
            emptyText: 'Brak danych'
        }
    }
};

setLang(lang);

export default lang;