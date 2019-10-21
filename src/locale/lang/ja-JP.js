import setLang from '../lang';

const lang = {
    i: {
        locale: 'ja-JP',
        select: {
            placeholder: '選んでください',
            noMatch: 'マッチするデータなし',
            loading: 'ロード中'
        },
        table: {
            noDataText: 'データなし',
            noFilteredDataText: 'スクリーニングしたデータなし',
            confirmFilter: 'スクリーニング',
            resetFilter: 'リセット',
            clearFilter: '全部',
            sumText: '合計'
        },
        datepicker: {
            selectDate: '日時を選んでください',
            selectTime: '時間を選んでください',
            startTime: 'スタート時間',
            endTime: '終了時間',
            clear: 'クリーア',
            ok: '確定',
            datePanelLabel: '[yyyy年] [m月]',
            month: '月',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',
            year: '年',
            weekStartDay: '0',
            weeks: {
                sun: '日',
                mon: '月',
                tue: '火',
                wed: '水',
                thu: '木',
                fri: '金',
                sat: '土'
            },
            months: {
                m1: '1月',
                m2: '2月',
                m3: '3月',
                m4: '4月',
                m5: '5月',
                m6: '6月',
                m7: '7月',
                m8: '8月',
                m9: '9月',
                m10: '10月',
                m11: '11月',
                m12: '12月'
            }
        },
        transfer: {
            titles: {
                source: 'ソースリスト',
                target: 'ターゲットリスト'
            },
            filterPlaceholder: '検索内容を入力ください',
            notFoundText: '内容が見つかってなかった'
        },
        modal: {
            okText: '確定',
            cancelText: 'キャンセル'
        },
        poptip: {
            okText: '確定',
            cancelText: 'キャンセル'
        },
        page: {
            prev: '前へ',
            next: '次へ',
            total: '全部',
            item: '件',
            items: '件',
            prev5: '前の５ページへ',
            next5: '次の５ページへ',
            page: '件/ページ',
            goto: '',
            p: 'ページ目へ'
        },
        rate: {
            star: '点',
            stars: '点'
        },
        time: {
            before: '前',
            after: '後',
            just: 'たった今',
            seconds: '秒',
            minutes: '分',
            hours: '時間',
            days: '日'
        },
        tree: {
            emptyText: 'データなし'
        }
    }
};

setLang(lang);

export default lang;
