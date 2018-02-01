import setLang from '../lang';

const lang = {
    i: {
        locale: 'pt-PT',
        select: {
            placeholder: 'Selecionar',
            noMatch: 'Não encontrado',
            loading: 'A carregar'
        },
        table: {
            noDataText: 'Sem dados',
            noFilteredDataText: 'Sem dados filtrados',
            confirmFilter: 'Confirmar',
            resetFilter: 'Limpar',
            clearFilter: 'Todos'
        },
        datepicker: {
            selectDate: 'Selecione a data',
            selectTime: 'Selecione a hora',
            startTime: 'Hora inicial',
            endTime: 'Hora final',
            clear: 'Limpar',
            ok: 'Confirmar',
            datePanelLabel: '[mmmm] de [yyyy]',
            month: 'Mês',
            month1: 'Janeiro',
            month2: 'Fevereiro',
            month3: 'Março',
            month4: 'Abril',
            month5: 'Maio',
            month6: 'Junho',
            month7: 'Julho',
            month8: 'Agosto',
            month9: 'Setembro',
            month10: 'Outubro',
            month11: 'Novembro',
            month12: 'Dezembro',
            year: 'Ano',
            weekStartDay: '1',
            weeks: {
                sun: 'Dom',
                mon: 'Seg',
                tue: 'Ter',
                wed: 'Qua',
                thu: 'Qui',
                fri: 'Sex',
                sat: 'Sáb'
            },
            months: {
                m1: 'Jan',
                m2: 'Fev',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Set',
                m10: 'Out',
                m11: 'Nov',
                m12: 'Dez'
            }
        },
        transfer: {
            titles: {
                source: 'Origem',
                target: 'Destino'
            },
            filterPlaceholder: 'Pesquise aqui',
            notFoundText: 'Não encontrado'
        },
        modal: {
            okText: 'Confirmar',
            cancelText: 'Cancelar'
        },
        poptip: {
            okText: 'Confirmar',
            cancelText: 'Cancelar'
        },
        page: {
            prev: 'Página anterior',
            next: 'Próxima página',
            total: 'Total',
            item: 'item',
            items: 'itens',
            prev5: 'Voltar 5 páginas',
            next5: 'Avançar 5 páginas',
            page: '/page',
            goto: 'Ir para',
            p: ''
        },
        rate: {
            star: 'Estrela',
            stars: 'Estrelas'
        },
        tree: {
            emptyText: 'Sem dados'
        }
    }
};

setLang(lang);

export default lang;