import setLang from '../lang';

const lang = {
    i: {
        locale: 'th-TH',
        select: {
            placeholder: 'ตัวเลือก',
            noMatch: 'ข้อมูลไม่ตรงกัน',
            loading: 'ดาวน์โหลด'
        },
        table: {
            noDataText: 'ไม่พบข้อมูล',
            noFilteredDataText: 'ไม่พบตัวกรองข้อมูล',
            confirmFilter: 'ยืนยัน',
            resetFilter: 'รีเซ็ต',
            clearFilter: 'ทั้งหมด',
            sumText: 'Sum'
        },
        datepicker: {
            selectDate: 'เลือกวัน',
            selectTime: 'เลือกเวลา',
            startTime: 'เริ่มเวลา',
            endTime: 'สิ้นสุดเวลา',
            clear: 'ล้างข้อมูล',
            ok: 'ตกลง',
            datePanelLabel: '[mmmm] [yyyy]',
            month: 'เดือน',
            month1: 'มกราตม',
            month2: 'กุมภาพันธ์',
            month3: 'มีนาคม',
            month4: 'เมษายน',
            month5: 'พฤษภาคม',
            month6: 'มิถุนายน',
            month7: 'กรกฎาคม',
            month8: 'สิงหาคม',
            month9: 'กันยายน',
            month10: 'ตุลาคม',
            month11: 'พฤศจิกายน',
            month12: 'ธันวาคม',
            year: 'ปี',
            weekStartDay: '0',
            weeks: {
                sun: 'อาทิตย์',
                mon: 'จันทร์',
                tue: 'อังคาร',
                wed: 'พุธ',
                thu: 'พฤหัสบดี',
                fri: 'ศุกร์',
                sat: 'เสาร์'
            },
            months: {
                m1: 'ม.ค.',
                m2: 'ก.พ.',
                m3: 'มี.ค.',
                m4: 'เม.ย.',
                m5: 'พ.ค.',
                m6: 'มิ.ย.',
                m7: 'ก.ค.',
                m8: 'ส.ค.',
                m9: 'ก.ย.',
                m10: 'ต.ค.',
                m11: 'พ.ย.',
                m12: 'ธ.ค.'
            }
        },
        transfer: {
            titles: {
                source: 'แหล่งข้อมูล',
                target: 'เป้าหมาย'
            },
            filterPlaceholder: 'ค้นหาที่นี้',
            notFoundText: 'ค้นหาไม่พบ'
        },
        modal: {
            okText: 'ตกลง',
            cancelText: 'ยกเลิก'
        },
        poptip: {
            okText: 'ตกลง',
            cancelText: 'ยกเลิก'
        },
        page: {
            prev: 'หน้าก่อน',
            next: 'หน้าถัดไป',
            total: 'ทั้งหมด',
            item: 'ไอเทม',
            items: 'ไอเทม',
            prev5: 'ก่อน 5 หน้า',
            next5: 'ถัดไป 5 หน้า',
            page: '/หน้า',
            goto: 'ไปยัง',
            p: 'หน้า'
        },
        rate: {
            star: 'ดวง',
            stars: 'ดวง'
        },
        tree: {
            emptyText: 'ไม่พบข้อมูล'
        }
    }
};

setLang(lang);

export default lang;
