import setLang from '../lang';

const lang = {
    i: {
        locale: 'mn-MN',
        select: {
            placeholder: 'Сонгох',
            noMatch: 'Таарах өгөгдөл байхгүй байна',
            loading: 'Ачааллаж байна'
        },
        table: {
            noDataText: 'Өгөгдөл алга',
            noFilteredDataText: 'No filter data',
            confirmFilter: 'Батлах',
            resetFilter: 'Шинээр тохируулах',
            clearFilter: 'Бүгд'
        },
        datepicker: {
            selectDate: 'Огноо сонгох',
            selectTime: 'Цаг сонгох',
            startTime: 'Эхлэх Цаг',
            endTime: 'Дуусах Цаг',
            clear: 'Цэвэрлэх',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Сар',
            month1: '1-р сар',
            month2: '2-р сар',
            month3: '3-р сар',
            month4: '4-р сар',
            month5: '5-р сар',
            month6: '6-р сар',
            month7: '7-р сар',
            month8: '8-р сар',
            month9: '9-р сар',
            month10: '10-р сар',
            month11: '11-р сар',
            month12: '12-р сар',
            year: 'Жил',
            weekStartDay: '0',
            weeks: {
                sun: 'Ням',
                mon: 'Дав',
                tue: 'Мяг',
                wed: 'Лха',
                thu: 'Пүр',
                fri: 'Баа',
                sat: 'Бяа'
            },
            months: {
                m1: '1-р сар',
                m2: '2-р сар',
                m3: '3-р сар',
                m4: '4-р сар',
                m5: '5-р сар',
                m6: '6-р сар',
                m7: '7-р сар',
                m8: '8-р сар',
                m9: '9-р сар',
                m10: '10-р сар',
                m11: '11-р сар',
                m12: '12-р сар'
            }
        },
        transfer: {
            titles: {
                source: 'Эх сурвалж',
                target: 'Оноох бай'
            },
            filterPlaceholder: 'Эндээс хайх',
            notFoundText: 'Олдсонгүй'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Болих'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Болих'
        },
        page: {
            prev: 'Өмнөх хуудас',
            next: 'Дараах хуудас',
            total: 'Нийт',
            item: 'зүйл',
            items: 'зүйлүүд',
            prev5: 'Өмнөх 5 хуудас',
            next5: 'Дараагийн 5 хуудас',
            page: '/хуудсанд',
            goto: 'Очих хуудас',
            p: ''
        },
        rate: {
            star: 'Од',
            stars: 'Одууд'
        },
        tree: {
            emptyText: 'Өгөгдөл алга'
        }
    }
};

setLang(lang);

export default lang;
