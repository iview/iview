import setLang from '../lang';

const lang = {
    i: {
        locale: 'es-ES',
        select: {
            placeholder: 'Seleccionar',
            noMatch: 'Sin coincidencias',
            loading: 'Cargando'
        },
        table: {
            noDataText: 'Sin Datos',
            noFilteredDataText: 'Sin Datos para el filtro',
            confirmFilter: 'Aceptar',
            resetFilter: 'Quitar filtro',
            clearFilter: 'Todos'
        },
        datepicker: {
            selectDate: 'Seleccionar fecha',
            selectTime: 'Seleccionar hora',
            startTime: 'Hora de inicio',
            endTime: 'Hora de fin',
            clear: 'Limpiar',
            ok: 'Aceptar',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'Mes',
            month1: 'Enero',
            month2: 'Febrero',
            month3: 'Marzo',
            month4: 'Abril',
            month5: 'Mayo',
            month6: 'Junio',
            month7: 'Julio',
            month8: 'Augosto',
            month9: 'Septiembre',
            month10: 'Octubre',
            month11: 'Noviembre',
            month12: 'Deciembre',
            year: 'Año',
            weekStartDay: '1',
            weeks: {
                sun: 'Dom',
                mon: 'Lun',
                tue: 'Mar',
                wed: 'Mié',
                thu: 'Jue',
                fri: 'Vie',
                sat: 'Sáb'
            },
            months: {
                m1: 'Ene',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'May',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Dic'
            }
        },
        transfer: {
            titles: {
                source: 'Origen',
                target: 'Destino'
            },
            filterPlaceholder: 'Buscar aquí',
            notFoundText: 'Sin resultados'
        },
        modal: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        poptip: {
            okText: 'Aceptar',
            cancelText: 'Cancelar'
        },
        page: {
            prev: 'Página Anterior',
            next: 'Página Siguiente',
            total: 'Total',
            item: 'Elemento',
            items: 'Elementos',
            prev5: '5 Páginas Anteriores',
            next5: '5 Páginas Siguientes',
            page: '/page',
            goto: 'Ir a',
            p: ''
        },
        rate: {
            star: 'Estrella',
            stars: 'Estrellas'
        },
        tree: {
            emptyText: 'Sin Datos'
        }
    }
};

setLang(lang);

export default lang;
