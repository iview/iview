import setLang from '../lang';

const lang = {
    i: {
        locale: 'ro-RO',
        select: {
            placeholder: 'Selectează',
            noMatch: 'Niciun rezultat',
            loading: 'Încărcare'
        },
        table: {
            noDataText: 'Fără date',
            noFilteredDataText: 'Filtru fără rezultate',
            confirmFilter: 'Confirmă',
            resetFilter: 'Resetează',
            clearFilter: 'Tot',
            sumText: 'Suma'
        },
        datepicker: {
            selectDate: 'Selectează data',
            selectTime: 'Selectează timpul',
            startTime: 'Ora inițială',
            endTime: 'Ora finală',
            clear: 'Anulează',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Lună',
            month1: 'Ianuarie',
            month2: 'Februarie',
            month3: 'Martie',
            month4: 'Aprilia',
            month5: 'Mai',
            month6: 'Iunie',
            month7: 'Iulie',
            month8: 'August',
            month9: 'Septembrie',
            month10: 'Octombrie',
            month11: 'Noiembrie',
            month12: 'Decembrie',
            year: 'An',
            weekStartDay: '1',
            weeks: {
                sun: 'Dum',
                mon: 'Lun',
                tue: 'Mar',
                wed: 'Mie',
                thu: 'Joi',
                fri: 'Vin',
                sat: 'Sâm'
            },
            months: {
                m1: 'Ian',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mai',
                m6: 'Iun',
                m7: 'Iul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Noi',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'Origine',
                target: 'Destinație'
            },
            filterPlaceholder: 'Caută',
            notFoundText: 'Niciun rezultat'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Renunță'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Renunță'
        },
        page: {
            prev: 'Pagina precedentă',
            next: 'Pagina urmatoare',
            total: 'Total',
            item: 'element',
            items: 'elemente',
            prev5: '5 Pagini precedente',
            next5: 'Urmatoarele 5 Pagini',
            page: '/pagina',
            goto: 'Du-te la',
            p: ''
        },
        rate: {
            star: 'Stea',
            stars: 'Stele'
        },
        tree: {
            emptyText: 'Fără date'
        }
    }
};

setLang(lang);

export default lang;
