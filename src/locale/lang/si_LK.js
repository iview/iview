import setLang from '../lang';

const lang = {
    i: {
        locale: 'si-LK',
        select: {
            placeholder: 'තෝරන්න',
            noMatch: 'ගැළපෙන දත්ත නැත',
            loading: 'පූරණය වෙමින්'
        },
        table: {
            noDataText: 'දත්ත නැත',
            noFilteredDataText: 'පෙරහන් දත්ත නොමැත',
            confirmFilter: 'තහවුරු කරන්න',
            resetFilter: 'යළි පිහිටුවන්න',
            clearFilter: 'සියල්ල',
            sumText: 'එකතුව'
        },
        datepicker: {
            selectDate: 'දිනය තෝරන්න',
            selectTime: 'වේලාව තෝරන්න',
            startTime: 'ආරම්භක වේලාව',
            endTime: 'අවසන් වේලාව',
            clear: 'හිස් කරන්න',
            ok: 'හරි',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'මාසය',
            month1: 'දුරුතු',
            month2: 'නවම්',
            month3: 'මැදින්',
            month4: 'බක්',
            month5: 'වෙසක්',
            month6: 'පොසොන්',
            month7: 'ඇසළ',
            month8: 'නිකිණි',
            month9: 'බිනර',
            month10: 'වප්',
            month11: 'ඉල්',
            month12: 'උඳුවප්',
            year: 'වර්ෂය',
            weekStartDay: '0',
            weeks: {
                sun: 'ඉරිදා',
                mon: 'සඳුදා',
                tue: 'අඟහ',
                wed: 'බදාදා',
                thu: 'බ්‍රහස්',
                fri: 'සිකු',
                sat: 'සෙන'
            },
            months: {
                m1: 'දුරුතු',
                m2: 'නවම්',
                m3: 'මැදින්',
                m4: 'බක්',
                m5: 'වෙසක්',
                m6: 'පෙසොන්',
                m7: 'ඇසළ',
                m8: 'නිකිණි',
                m9: 'බිනර',
                m10: 'වප්',
                m11: 'ඉල්',
                m12: 'උඳුව'
            }
        },
        transfer: {
            titles: {
                source: 'ප්‍රභවය',
                target: 'ඉලක්කය'
            },
            filterPlaceholder: 'මෙතැන සොයන්න',
            notFoundText: 'සොයා ගත  නොහැක'
        },
        modal: {
            okText: 'හරි',
            cancelText: 'අවලංගු කරන්න'
        },
        poptip: {
            okText: 'හරි',
            cancelText: 'අවලංගු කරන්න'
        },
        page: {
            prev: 'පෙර පිටුව',
            next: 'ඊළඟ පිටුව',
            total: 'මුළු එකතුව',
            item: 'අථකය',
            items: 'අථක',
            prev5: 'පෙර පිටු 5',
            next5: 'ඊළඟ පිටු 5',
            page: '/පිටුව',
            goto: 'ට යන්න',
            p: ''
        },
        rate: {
            star: 'තරුව',
            stars: 'තරු'
        },
        time: {
            before: ' පෙර',
            after: ' පසු',
            just: 'මේ දැන්',
            seconds: ' තත්පර',
            minutes: ' විනාඩි',
            hours: ' පැය',
            days: ' දින'
        },
        tree: {
            emptyText: 'දත්ත නැත'
        }
    }
};

setLang(lang);

export default lang;
