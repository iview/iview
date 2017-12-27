import setLang from '../lang';

const lang = {
    i: {
        locale: 'hi-IN',
        select: {
            placeholder: 'कृपया चुने|',
            noMatch: 'कोई आकड़ा उपलब्ध नहीं है|',
            loading: 'लोड हो रहा है'
        },
        table: {
            noDataText: 'कोई आकड़ा उपलब्ध नहीं है',
            noFilteredDataText: 'कोई आकड़ा उपलब्ध नहीं है',
            confirmFilter: 'पुष्टि करें',
            resetFilter: 'Reset',
            clearFilter: 'All'
        },
        datepicker: {
            selectDate: 'Select date',
            selectTime: 'Select time',
            startTime: 'Start Time',
            endTime: 'End Time',
            clear: 'Clear',
            ok: 'ठीक',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Month',
            month1: 'January',
            month2: 'February',
            month3: 'March',
            month4: 'April',
            month5: 'May',
            month6: 'June',
            month7: 'July',
            month8: 'August',
            month9: 'September',
            month10: 'October',
            month11: 'November',
            month12: 'December',
            year: 'Year',
            weekStartDay: '0',
            weeks: {
                sun: 'Sun',
                mon: 'Mon',
                tue: 'Tue',
                wed: 'Wed',
                thu: 'Thu',
                fri: 'Fri',
                sat: 'Sat'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'May',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'Source',
                target: 'Target'
            },
            filterPlaceholder: 'Search here',
            notFoundText: 'कोई आकड़ा उपलब्ध नहीं है'
        },
        modal: {
            okText: 'ठीक',
            cancelText: 'Cancel'
        },
        poptip: {
            okText: 'ठीक',
            cancelText: 'Cancel'
        },
        page: {
            prev: 'Previous Page',
            next: 'Next Page',
            total: 'Total',
            item: 'item',
            items: 'items',
            prev5: 'Previous 5 Pages',
            next5: 'Next 5 Pages',
            page: '/page',
            goto: 'Goto',
            p: ''
        },
        rate: {
            star: 'Star',
            stars: 'Stars'
        },
        tree: {
            emptyText: 'कोई आकड़ा उपलब्ध नहीं है'
        }
    }
};

setLang(lang);

export default lang;
