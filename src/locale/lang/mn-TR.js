import setLang from '../lang';

const lang = {
    i: {
        locale: 'mn-TR',
        select: {
            placeholder: 'ᠰᠣᠩᠭᠣᠬᠤ',
            noMatch: 'ᠣᠯᠳᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ',
            loading: 'ᠠᠴᠢᠶᠠᠯᠠᠵᠤ ᠪᠠᠶᠢᠨ᠎ᠠ'
        },
        table: {
            noDataText: 'ᠲᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠦᠭᠡᠶ',
            noFilteredDataText: 'ᠨᠦᠬᠦᠴᠡᠯ ᠳᠦ ᠨᠡᠶᠢᠴᠡᠭᠰᠡᠨ ᠲᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠣᠯᠳᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ',
            confirmFilter: 'ᠰᠢᠯᠢᠬᠦ',
            resetFilter: 'ᠪᠣᠴᠠᠭᠠᠬᠤ',
            clearFilter: 'ᠪᠦᠬᠦ'
        },
        datepicker: {
            selectDate: 'ᠡᠳᠦᠷ ᠰᠠᠷ᠎ᠠ ᠰᠣᠩᠭᠣᠬᠤ',
            selectTime: 'ᠴᠠᠭ ᠢ ᠰᠣᠩᠭᠣᠬᠤ',
            startTime: 'ᠡᠬᠢᠯᠡᠬᠦ ᠴᠠᠭ',
            endTime: 'ᠲᠡᠭᠦᠰᠬᠦ ᠴᠠᠭ',
            clear: 'ᠬᠣᠭᠤᠰᠤᠯᠠᠬᠤ',
            ok: 'ᠲᠡᠭᠡᠶ᠎ᠡ',
            datePanelLabel: '[yyyy ᠣᠨ] [m ᠰᠠᠷ᠎ᠠ]',
            month: 'ᠰᠠᠷ᠎ᠠ',
            month1: '1 ᠰᠠᠷ᠎ᠠ',
            month2: '2 ᠰᠠᠷ᠎ᠠ',
            month3: '3 ᠰᠠᠷ᠎ᠠ',
            month4: '4 ᠰᠠᠷ᠎ᠠ',
            month5: '5 ᠰᠠᠷ᠎ᠠ',
            month6: '6 ᠰᠠᠷ᠎ᠠ',
            month7: '7 ᠰᠠᠷ᠎ᠠ',
            month8: '8 ᠰᠠᠷ᠎ᠠ',
            month9: '9 ᠰᠠᠷ᠎ᠠ',
            month10: '10 ᠰᠠᠷ᠎ᠠ',
            month11: '11 ᠰᠠᠷ᠎ᠠ',
            month12: '12 ᠰᠠᠷ᠎ᠠ',
            year: 'ᠵᠢᠯ',
            weekStartDay: '0',
            weeks: {
                sun: 'ᠡᠳᠦᠷ',
                mon: 'ᠨᠢᠭᠡ',
                tue: 'ᠬᠣᠶᠠᠷ',
                wed: 'ᠭᠤᠷᠪᠠ',
                thu: 'ᠳᠦᠷᠪᠡ',
                fri: 'ᠲᠠᠪᠤ',
                sat: 'ᠵᠢᠷᠭᠤᠭ᠎ᠠ'
            },
            months: {
                m1: '1 ᠰᠠᠷ᠎ᠠ',
                m2: '2 ᠰᠠᠷ᠎ᠠ',
                m3: '3 ᠰᠠᠷ᠎ᠠ',
                m4: '4 ᠰᠠᠷ᠎ᠠ',
                m5: '5 ᠰᠠᠷ᠎ᠠ',
                m6: '6 ᠰᠠᠷ᠎ᠠ',
                m7: '7 ᠰᠠᠷ᠎ᠠ',
                m8: '8 ᠰᠠᠷ᠎ᠠ',
                m9: '9 ᠰᠠᠷ᠎ᠠ',
                m10: '10 ᠰᠠᠷ᠎ᠠ',
                m11: '11 ᠰᠠᠷ᠎ᠠ',
                m12: '12 ᠰᠠᠷ᠎ᠠ'
            }
        },
        transfer: {
            titles: {
                source: 'ᠡᠬᠢ ᠬᠦᠰᠦᠨᠦᠭ ',
                target: 'ᠵᠣᠷᠢᠯᠭ᠎ᠠ ᠬᠦᠰᠦᠨᠦᠭ'
            },
            filterPlaceholder: 'ᠬᠠᠶᠢᠬᠤ ᠠᠭᠤᠯᠭ᠎ᠠ ᠪᠠᠨ ᠣᠷᠤᠭᠤᠯ',
            notFoundText: 'ᠬᠦᠰᠦᠨᠦᠭ ᠬᠣᠭᠣᠰᠣᠨ'
        },
        modal: {
            okText: 'ᠲᠡᠭᠡᠶ᠎ᠡ',
            cancelText: 'ᠦᠭᠡᠶᠢᠰᠭᠡᠬᠦ'
        },
        poptip: {
            okText: 'ᠲᠡᠭᠡᠶ᠎ᠡ',
            cancelText: 'ᠦᠭᠡᠶᠢᠰᠭᠡᠬᠦ'
        },
        page: {
            prev: 'ᠡᠮᠤᠨ᠎ᠠ ᠨᠢᠭᠤᠷ',
            next: 'ᠳᠠᠷᠠᠭ᠎ᠠ ᠨᠢᠭᠤᠷ',
            total: 'ᠨᠡᠶᠢᠲᠡ',
            item: 'ᠵᠣᠷᠪᠤᠰ',
            items: 'ᠵᠣᠷᠪᠤᠰ',
            prev5: 'ᠡᠮᠦᠨᠡᠬᠢ 5 ᠨᠢᠭᠤᠷ',
            next5: 'ᠬᠣᠶᠢᠨᠠᠬᠢ 5 ᠨᠢᠭᠤᠷ',
            page: 'ᠵᠣᠷᠪᠤᠰ/ᠨᠢᠭᠤᠷ',
            goto: 'ᠬᠦᠷᠬᠦ',
            p: 'ᠨᠢᠭᠤᠷ'
        },
        rate: {
            star: 'ᠣᠳᠤ',
            stars: 'ᠣᠳᠤ'
        },
        tree: {
            emptyText: 'ᠲᠣᠭ᠎ᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠦᠭᠡᠶ'
        }
    }
};

setLang(lang);

export default lang;
