import setLang from '../lang';

const lang = {
    i: {
        locale: 'fa-IR',
        select: {
            placeholder: 'انتخاب‌ کنید',
            noMatch: 'یافت نشد',
            loading: 'در‌حال بارگذاری'
        },
        table: {
            noDataText: 'اطلاعاتی موجود نیست',
            noFilteredDataText: 'بدون اطلاعات فیلترشده',
            confirmFilter: 'تایید',
            resetFilter: 'بازنشانی',
            clearFilter: 'همه',
            sumText: 'جمع'
        },
        datepicker: {
            selectDate: 'انتخاب تاریخ',
            selectTime: 'انتخاب زمان',
            startTime: 'تاریخ شروع',
            endTime: 'تاریخ پایان',
            clear: 'پاکسازی',
            ok: 'تایید',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'ماه',
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
            year: 'سال',
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
                source: 'منبع',
                target: 'هدف'
            },
            filterPlaceholder: 'اینجا جستجو کنید',
            notFoundText: 'پیدا نشد'
        },
        modal: {
            okText: 'تایید',
            cancelText: 'لغو'
        },
        poptip: {
            okText: 'تایید',
            cancelText: 'لغو'
        },
        page: {
            prev: 'صفحه قبلی',
            next: 'صفحه بعدی',
            total: 'مجموع',
            item: 'داده',
            items: 'داده‌ها',
            prev5: '۵ صفحه قبلی',
            next5: '۵ صفحه بعدی',
            page: '/صفحه',
            goto: 'برو‌به',
            p: ''
        },
        rate: {
            star: 'ستاره',
            stars: 'ستاره‌ها'
        },
        tree: {
            emptyText: 'بدون اطلاعات'
        }
    }
};

setLang(lang);

export default lang;
