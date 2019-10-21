import setLang from '../lang';

const lang = {
    i: {
        locale: 'it-IT',
        select: {
            placeholder: 'Seleziona',
            noMatch: 'Nessun Risultato',
            loading: 'Caricamento'
        },
        table: {
            noDataText: 'Nessun Risultato',
            noFilteredDataText: 'Filtro senza risultati',
            confirmFilter: 'Conferma',
            resetFilter: 'Reset',
            clearFilter: 'Tutto',
            sumText: 'Somma'
        },
        datepicker: {
            selectDate: 'Seleziona data',
            selectTime: 'Seleziona orario',
            startTime: 'Orario inizio',
            endTime: 'Orario fine',
            clear: 'Annulla',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Mese',
            month1: 'Gennaio',
            month2: 'Febbraio',
            month3: 'Marzo',
            month4: 'Aprile',
            month5: 'Maggio',
            month6: 'Giugno',
            month7: 'Luglio',
            month8: 'Agosto',
            month9: 'Settembre',
            month10: 'Ottobre',
            month11: 'Novembre',
            month12: 'Dicembre',
            year: 'Anno',
            weekStartDay: '1',
            weeks: {
                sun: 'Dom',
                mon: 'Lun',
                tue: 'Mar',
                wed: 'Mer',
                thu: 'Gio',
                fri: 'Ven',
                sat: 'Sab'
            },
            months: {
                m1: 'Gen',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mag',
                m6: 'Giu',
                m7: 'Lug',
                m8: 'Ago',
                m9: 'Set',
                m10: 'Ott',
                m11: 'Nov',
                m12: 'Dic'
            }
        },
        transfer: {
            titles: {
                source: 'Origine',
                target: 'Destinazione'
            },
            filterPlaceholder: 'Cerca',
            notFoundText: 'Nessun Risultato'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Annulla'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Annulla'
        },
        page: {
            prev: 'Pagina Precedente',
            next: 'Pagina Successiva',
            total: 'Totale',
            item: 'elemento',
            items: 'elementi',
            prev5: '5 Pagine Precedenti',
            next5: '5 Pagine Successive',
            page: '/pagina',
            goto: 'Vai a',
            p: ''
        },
        rate: {
            star: 'Stella',
            stars: 'Stelle'
        },
        time: {
            before: 'fa',
            after: ' dopo',
            just: 'adesso',
            seconds: ' secondi',
            minutes: ' minuti',
            hours: ' ore',
            days: ' giorni'
        },
        tree: {
            emptyText: 'Nessun Risultato'
        }
    }
};

setLang(lang);

export default lang;
