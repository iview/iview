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
            resetFilter: 'पुनः तैयार करना',
            clearFilter: 'सब कुछ'
        },
        datepicker: {
            selectDate: 'दिनांक चुनें',
            selectTime: 'समय चुनें',
            startTime: 'प्रारंभ समय',
            endTime: 'समाप्ति समय',
            clear: 'साफ़ करें',
            ok: 'ठीक',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'महीना',
            month1: 'जनवरी',
            month2: 'फरवरी',
            month3: 'मार्च',
            month4: 'अप्रैल',
            month5: 'मई',
            month6: 'जून',
            month7: 'जुलाई',
            month8: 'अगस्त',
            month9: 'सितंबर',
            month10: 'अक्टूबर',
            month11: 'नवंबर',
            month12: 'दिसंबर',
            year: 'साल',
            weekStartDay: '0',
            weeks: {
                sun: 'रविवार',
                mon: 'सोमवार',
                tue: 'मंगलवार',
                wed: 'बुधवार',
                thu: 'गुरुवार',
                fri: 'शुक्रवार',
                sat: 'शनिवार'
            },
            months: {
            m1: 'जनवरी',
            m2: 'फरवरी',
            m3: 'मार्च',
            m4: 'अप्रैल',
            m5: 'मई',
            m6: 'जून',
            m7: 'जुलाई',
            m8: 'अगस्त',
            m9: 'सितंबर',
            m10: 'अक्टूबर',
            m11: 'नवंबर',
            m12: 'दिसंबर'
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
