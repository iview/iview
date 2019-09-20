import setLang from '../lang';

const lang = {
    i: {
        locale: 'id-ID',
        select: {
            placeholder: 'Pilih',
            noMatch: 'Tidak ada data yang cocok',
            loading: 'Memuat'
        },
        table: {
            noDataText: 'Tidak ada data',
            noFilteredDataText: 'Tidak ada data filter',
            confirmFilter: 'Konfirmasi',
            resetFilter: 'Tata ulang',
            clearFilter: 'Semua',
            sumText: 'Jml'
        },
        datepicker: {
            selectDate: 'Pilih tanggal',
            selectTime: 'Pilih waktu',
            startTime: 'Waktu Mulai',
            endTime: 'Waktu Selesai',
            clear: 'Bersihkan',
            ok: 'OK',
            datePanelLabel: '[mmmm] [yyyy]',
            month: '',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Maret',
            month4: 'April',
            month5: 'Mei',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Agustus',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Desember',
            year: '',
            weekStartDay: '1',
            weeks: {
                sun: 'Min',
                mon: 'Sen',
                tue: 'Sel',
                wed: 'Rab',
                thu: 'Kam',
                fri: 'Jum',
                sat: 'Sab'
            },
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mei',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Agu',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dec'
            }
        },
        transfer: {
            titles: {
                source: 'Sumber',
                target: 'Tujuan'
            },
            filterPlaceholder: 'Cari disini',
            notFoundText: 'Tidak ditemukan'
        },
        modal: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        poptip: {
            okText: 'OK',
            cancelText: 'Batal'
        },
        page: {
            prev: 'Halaman Sebelumnya',
            next: 'Halaman Selanjutnya',
            total: 'Total',
            item: 'butir',
            items: 'butir',
            prev5: '5 Halaman Sebelumnya',
            next5: '5 Halaman Selanjutnya',
            page: '/page',
            goto: 'Pergi ke',
            p: ''
        },
        rate: {
            star: 'Star',
            stars: 'Stars'
        },
        tree: {
            emptyText: 'Tidak ada data'
        }
    }
};

setLang(lang);

export default lang;
