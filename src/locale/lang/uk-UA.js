import setLang from '../lang';

const lang = {
    i: {
        locale: 'uk-UA',
        select: {
            placeholder: 'Обрати',
            noMatch: 'Немає відповідних даних',
            loading: 'Завантаження'
        },
        table: {
            noDataText: 'Немає даних',
            noFilteredDataText: 'Немає даних по фільтру',
            confirmFilter: 'Підтвердити',
            resetFilter: 'Скинути',
            clearFilter: 'Усе'
        },
        datepicker: {
            selectDate: 'Обрати дату',
            selectTime: 'Обрати час',
            startTime: 'Початковий час',
            endTime: 'Кінцевий час',
            clear: 'Очистити',
            ok: 'OK',
            datePanelLabel: '[Mmmm] [yyyy]',
            month: '',
            month1: 'Січень',
            month2: 'Лютий',
            month3: 'Березень',
            month4: 'Квітень',
            month5: 'Травень',
            month6: 'Червень',
            month7: 'Липень',
            month8: 'Серпень',
            month9: 'Вересень',
            month10: 'Жовтень',
            month11: 'Листопад',
            month12: 'Грудень',
            year: '',
            weekStartDay: '1',
            weeks: {
                sun: 'Нд',
                mon: 'Пн',
                tue: 'Вт',
                wed: 'Ср',
                thu: 'Чт',
                fri: 'Пт',
                sat: 'Сб'
            },
            months: {
                m1: 'Січ',
                m2: 'Лют',
                m3: 'Бер',
                m4: 'Кві',
                m5: 'Тра',
                m6: 'Чер',
                m7: 'Лип',
                m8: 'Сер',
                m9: 'Вер',
                m10: 'Жов',
                m11: 'Лис',
                m12: 'Гру'
            }
        },
        transfer: {
            titles: {
                source: 'Джерело',
                target: 'Ціль'
            },
            filterPlaceholder: 'Шукати тут',
            notFoundText: 'Не знайдено'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Скасувати'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Скасувати'
        },
        page: {
            prev: 'Попер. сторінка',
            next: 'Наст. сторінка',
            total: 'Всього',
            item: 'пункт',
            items: 'пункти',
            prev5: 'Попер. 5 сторінок',
            next5: 'Наст. 5 сторінок',
            page: '/page',
            goto: 'Йти до',
            p: ''
        },
        rate: {
            star: 'Зірка',
            stars: 'Зірки'
        },
        tree: {
            emptyText: 'Немає даних'
        }
    }
};

setLang(lang);

export default lang;