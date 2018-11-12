import setLang from '../lang';

const lang = {
    i: {
        locale: 'fi-FI',
        select: {
            placeholder: 'Valitse',
            noMatch: 'Ei tuloksia',
            loading: 'Ladataan'
        },
        table: {
            noDataText: 'Ei tietoja',
            noFilteredDataText: 'Ei suodatettua dataa',
            confirmFilter: 'Hyväksy',
            resetFilter: 'Nollaa',
            clearFilter: 'Kaikki'
        },
        datepicker: {
            selectDate: 'Valitse päivämäärä',
            selectTime: 'Valitse aika',
            startTime: 'Aloitusaika',
            endTime: 'Päättymisaika',
            clear: 'Tyhjennä',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Kuukausi',
            month1: 'Tammikuu',
            month2: 'Helmikuu',
            month3: 'Maaliskuu',
            month4: 'Huhtikuu',
            month5: 'Toukokuu',
            month6: 'Kesäkuu',
            month7: 'Heinäkuu',
            month8: 'Elokuu',
            month9: 'Syyskuu',
            month10: 'Lokakuu',
            month11: 'Marraskuu',
            month12: 'Joulukuu',
            year: 'Vuosi',
            weekStartDay: '1',
            weeks: {
                sun: 'Su',
                mon: 'Ma',
                tue: 'Ti',
                wed: 'Ke',
                thu: 'To',
                fri: 'Pe',
                sat: 'La'
            },
            months: {
                m1: 'Tam',
                m2: 'Hel',
                m3: 'Maa',
                m4: 'Huh',
                m5: 'Tou',
                m6: 'Kes',
                m7: 'Hei',
                m8: 'Elo',
                m9: 'Syy',
                m10: 'Lok',
                m11: 'Mar',
                m12: 'Jou'
            }
        },
        transfer: {
            titles: {
                source: 'Lähde',
                target: 'Kohde'
            },
            filterPlaceholder: 'Hae täältä',
            notFoundText: 'Ei tuloksia'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Peruuta'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Peruuta'
        },
        page: {
            prev: 'Edellinen sivu',
            next: 'Seuraava sivu',
            total: 'Yhteensä',
            item: 'kohde',
            items: 'kohdetta',
            prev5: 'Edelliset 5 sivua',
            next5: 'Seuraavat 5 sivua',
            page: '/page',
            goto: 'Siirry',
            p: ''
        },
        rate: {
            star: 'Tähti',
            stars: 'Tähteä'
        },
        time: {
            before: ' sitten',
            after: ' jälkeen',
            just: 'juuri nyt',
            seconds: ' sekuntia',
            minutes: ' minuuttia',
            hours: ' tuntia',
            days: ' päivää'
        },
        tree: {
            emptyText: 'Ei tietoja'
        }
    }
};

setLang(lang);

export default lang;
