import setLang from '../lang';

const lang = {
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
            clearFilter: 'Tout',
            sumText: 'Somme'
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

setLang(lang);

export default lang;
