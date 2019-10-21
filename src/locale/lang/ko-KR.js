import setLang from '../lang';

const lang = {
    i: {
        locale: 'ko-KR',
        select: {
            placeholder: '선택',
            noMatch: '일치하는 데이터 없음',
            loading: '로딩'
        },
        table: {
            noDataText: '데이터 없음',
            noFilteredDataText: '필터된 데이터 없음',
            confirmFilter: '확인',
            resetFilter: '초기화',
            clearFilter: '전부',
            sumText: '합'
        },
        datepicker: {
            selectDate: '날짜 선택',
            selectTime: '시간 선택',
            startTime: '시작 시간',
            endTime: '종료 시간',
            clear: '삭제',
            ok: '예',
            datePanelLabel: '[yyyy년] [m월]',
            month: '월',
            month1: '1월',
            month2: '2월',
            month3: '3월',
            month4: '4월',
            month5: '5월',
            month6: '6월',
            month7: '7월',
            month8: '8월',
            month9: '9월',
            month10: '10월',
            month11: '11월',
            month12: '12월',
            year: '년',
            weekStartDay: '0',
            weeks: {
                sun: '일',
                mon: '월',
                tue: '화',
                wed: '수',
                thu: '목',
                fri: '금',
                sat: '토'
            },
            months: {
                m1: '1월',
                m2: '2월',
                m3: '3월',
                m4: '4월',
                m5: '5월',
                m6: '6월',
                m7: '7월',
                m8: '8월',
                m9: '9월',
                m10: '10월',
                m11: '11월',
                m12: '12월'
            }
        },
        transfer: {
            titles: {
                source: '소스',
                target: '타겟'
            },
            filterPlaceholder: '여기서 찾기',
            notFoundText: '아무 것도 찾을 수 없음'
        },
        modal: {
            okText: '예',
            cancelText: '취소'
        },
        poptip: {
            okText: '예',
            cancelText: '취소'
        },
        page: {
            prev: '이전 페이지',
            next: '다음 페이지',
            total: '전체',
            item: '항목',
            items: '항목',
            prev5: '이전 5 페이지',
            next5: '다음 5 페이지',
            page: '/페이지',
            goto: '이동',
            p: ''
        },
        rate: {
            star: '중요',
            stars: '중요'
        },
        time: {
            before: ' 전',
            after: ' 후',
            just: '방금',
            seconds: ' 초',
            minutes: ' 분',
            hours: ' 시간',
            days: ' 일'
        },
        tree: {
            emptyText: '데이터 없음'
        }
    }
};

setLang(lang);

export default lang;
