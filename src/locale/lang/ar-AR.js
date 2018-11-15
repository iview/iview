import setLang from '../lang';

const lang = {
    i: {
        locale: 'ar-AR',
        select: {
            placeholder: 'اختار',
            noMatch: 'لا توجد بيانات متطابقة',
            loading: 'جار التحميل'
        },
        table: {
            noDataText: 'لايوجد بيانات',
            noFilteredDataText: '`لا توجد بيانات مفلترة',
            confirmFilter: 'تأكيد',
            resetFilter: 'إعادة تعيين',
            clearFilter: 'كل'
        },
        datepicker: {
            selectDate: 'حدد تاريخ',
            selectTime: 'حدد الوقت',
            startTime: 'وقت البداية',
            endTime: 'وقت النهاية',
            clear: 'نظف',
            ok: 'تم',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'شهر',
            month1: 'يناير',
            month2: 'فبراير',
            month3: 'مارس',
            month4: 'أبريل',
            month5: 'مايو',
            month6: 'يونيو',
            month7: 'يوليو',
            month8: 'أغسطس',
            month9: 'سبتمبر',
            month10: 'اكتوبر',
            month11: 'نوفمبر',
            month12: 'ديسمبر',
            year: 'عام',
            weekStartDay: '0',
            weeks: {
                sun: 'الاحد',
                mon: 'الاثنين',
                tue: 'الثلاثاء',
                wed: 'الاربعاء',
                thu: 'الخميس',
                fri: 'الجمعه',
                sat: 'السبت'
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
                source: 'مصدر',
                target: 'الهدف'
            },
            filterPlaceholder: 'ابحث هنا',
            notFoundText: 'غير موجود'
        },
        modal: {
            okText: 'تم',
            cancelText: 'الغاء'
        },
        poptip: {
            okText: 'تم',
            cancelText: 'الغاء'
        },
        page: {
            prev: 'الصفحة السابقة',
            next: 'الصفحة التالية',
            total: 'الكل',
            item: 'عنصر',
            items: 'عناصر',
            prev5: '5 صفحات السابقة',
            next5: '٥ صفحات التالية',
            page: '/صفحة',
            goto: 'اذهب إلى',
            p: ''
        },
        rate: {
            star: 'نجمة',
            stars: 'نجوم'
        },
        time: {
            before: ' منذ',
            after: ' بعد',
            just: 'في هذة اللحظة',
            seconds: ' ثواني',
            minutes: ' الدقائق',
            hours: ' ساعات',
            days: ' أيام'
        },
        tree: {
            emptyText: 'لايوجد بيانات'
        }
    }
};

setLang(lang);

export default lang;