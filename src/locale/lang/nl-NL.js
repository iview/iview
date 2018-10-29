import setLang from '../lang';

const lang = {
    i: {
        locale: 'nl-NL',
        select: {
            placeholder: 'Selecteer',
            noMatch: 'Geen overeenkomsten',
            loading: 'Laden'
        },
        table: {
            noDataText: 'Geen data',
            noFilteredDataText: 'Geen gefilterde data',
            confirmFilter: 'Bevestig',
            resetFilter: 'Herstel',
            clearFilter: 'Alles'
        },
        datepicker: {
            selectDate: 'Selecteer datum',
            selectTime: 'Selecteer tijd',
            startTime: 'Begin tijd',
            endTime: 'Eind tijd',
            clear: 'Herstel',
            ok: 'Ok',
            datePanelLabel: '[mm] [yyyy]',
            month: 'Maand',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Maart',
            month4: 'April',
            month5: 'Mei',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Augustus',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'December',
            year: 'Jaar',
            weekStartDay: '1',
            weeks: {
                sun: 'Zon',
                mon: 'Maa',
                tue: 'Din',
                wed: 'Woe',
                thu: 'Don',
                fri: 'Vri',
                sat: 'Zat'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mei',
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
                source: 'Bron',
                target: 'Doel'
            },
            filterPlaceholder: 'Zoeken',
            notFoundText: 'Niet gevonden'
        },
        modal: {
            okText: 'Ok',
            cancelText: 'Annuleren'
        },
        poptip: {
            okText: 'Ok',
            cancelText: 'Annuleren'
        },
        page: {
            prev: 'Vorige pagina',
            next: 'Volgende pagina',
            total: 'Totaal',
            item: 'item',
            items: 'items',
            prev5: 'Vorige 5 pagina\'s',
            next5: 'Volgende 5 pagina\'s',
            page: '/pagina',
            goto: 'Ga',
            p: ''
        },
        rate: {
            star: 'Ster',
            stars: 'Sterren'
        },
        tree: {
            emptyText: 'Geen data'
        }
    }
};

setLang(lang);

export default lang;
