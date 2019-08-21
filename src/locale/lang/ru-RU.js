import setLang from '../lang';

const lang = {
    i: {
        locale: 'ru-RU',
        select: {
            placeholder: 'Выбрать',
            noMatch: 'Нет соответствующих данных',
            loading: 'Загрузка'
        },
        table: {
            noDataText: 'Нет данных',
            noFilteredDataText: 'Нет данных по фильтру',
            confirmFilter: 'Подтвердить',
            resetFilter: 'Сброс',
            clearFilter: 'Все'
        },
        datepicker: {
            selectDate: 'Выбрать дату',
            selectTime: 'Выбрать время',
            startTime: 'Начальное время',
            endTime: 'Конечное время',
            clear: 'Очистить',
            ok: 'OK',
            datePanelLabel: '[Mmmm] [yyyy]',
            month: '',
            month1: 'Январь',
            month2: 'Февраль',
            month3: 'Март',
            month4: 'Апрель',
            month5: 'Май',
            month6: 'Июнь',
            month7: 'Июль',
            month8: 'Август',
            month9: 'Сентябрь',
            month10: 'Октябрь',
            month11: 'Ноябрь',
            month12: 'Декабрь',
            year: '',
            weekStartDay: '1',
            weeks: {
                sun: 'Вс',
                mon: 'Пн',
                tue: 'Вт',
                wed: 'Ср',
                thu: 'Чт',
                fri: 'Пт',
                sat: 'Сб'
            },
            months: {
                m1: 'Янв',
                m2: 'Фев',
                m3: 'Мар',
                m4: 'Апр',
                m5: 'Май',
                m6: 'Июн',
                m7: 'Июл',
                m8: 'Авг',
                m9: 'Сен',
                m10: 'Окт',
                m11: 'Ноя',
                m12: 'Дек'
            }
        },
        transfer: {
            titles: {
                source: 'Источник',
                target: 'Цель'
            },
            filterPlaceholder: 'Искать здесь',
            notFoundText: 'Не найдено'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Отменить'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Отменить'
        },
        page: {
            prev: 'Пред. страница',
            next: 'След. страница',
            total: 'Всего',
            item: 'пункт',
            items: 'пункты',
            prev5: 'Пред. 5 страниц',
            next5: 'След. 5 страниц',
            page: ' на странице',
            goto: 'Перейти к',
            p: ''
        },
        rate: {
            star: 'Звезда',
            stars: 'Звезды'
        },
        tree: {
            emptyText: 'Нет данных'
        }
    }
};

setLang(lang);

export default lang;
