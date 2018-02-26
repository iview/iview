import setLang from '../lang';

const lang = {
    i: {
        locale: 'el-GR',
        select: {
            placeholder: 'Επιλογή',
            noMatch: 'Δεν βρέθηκαν αποτελέσματα',
            loading: 'Φόρτωση'
        },
        table: {
            noDataText: 'Χωρίς δεδομένα',
            noFilteredDataText: 'Χωρίς φίλτρο',
            confirmFilter: 'Επιβεβαίωση',
            resetFilter: 'Επαναφορά',
            clearFilter: 'Όλα'
        },
        datepicker: {
            selectDate: 'Επιλέξτε ημέρα',
            selectTime: 'Επιλέξτε ώρα',
            startTime: 'Ωρα Έναρξης',
            endTime: 'Ωρα Λήξης',
            clear: 'Καθαρισμός',
            ok: 'Εντάξει',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Μήνας',
            month1: 'Ιανουάριος',
            month2: 'Φεβρουάριος',
            month3: 'Μάρτιος',
            month4: 'Απρίλιος',
            month5: 'Μάιος',
            month6: 'Ιούνιος',
            month7: 'Ιούλιος',
            month8: 'Αύγουστος',
            month9: 'Σεπτέμβριος',
            month10: 'Οκτώβριος',
            month11: 'Νοέμβριος',
            month12: 'Δεκέμβριος',
            year: 'Έτος',
            weekStartDay: '1',
            weeks: {
                sun: 'Κυρ',
                mon: 'Δευ',
                tue: 'Τρι',
                wed: 'Τετ',
                thu: 'Πεμ',
                fri: 'Παρ',
                sat: 'Σαβ'
            },
            months: {
                m1: 'Ιαν',
                m2: 'Φεβ',
                m3: 'Μαρ',
                m4: 'Απρ',
                m5: 'Μαϊ',
                m6: 'Ιουν',
                m7: 'Ιουλ',
                m8: 'Αυγ',
                m9: 'Σεπ',
                m10: 'Οκτ',
                m11: 'Νοε',
                m12: 'Δεκ'
            }
        },
        transfer: {
            titles: {
                source: 'Πηγή',
                target: 'Στόχος'
            },
            filterPlaceholder: 'Αναζήτηση',
            notFoundText: 'Δεν βρέθηκαν αποτελέσματα'
        },
        modal: {
            okText: 'Εντάξει',
            cancelText: 'Ακύρωση'
        },
        poptip: {
            okText: 'Εντάξει',
            cancelText: 'Ακύρωση'
        },
        page: {
            prev: 'Προηγούμενη Σελίδα',
            next: 'Επόμενη Σελίδα',
            total: 'Σύνολο',
            item: 'Αντικείμενο',
            items: 'Αντικείμενα',
            prev5: 'Προηγούμενες 5 Σελίδες',
            next5: 'Επόμενες 5 Σελίδες',
            page: '/Σελίδα',
            goto: 'Μετάβαση σε',
            p: ''
        },
        rate: {
            star: 'Αστέρι',
            stars: 'Αστέρια'
        },
        tree: {
            emptyText: 'Χωρίς Δεδομένα'
        }
    }
};

setLang(lang);

export default lang;
