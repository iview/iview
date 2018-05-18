const time = {
    getUnix (place) {
        const date = new Date();
        const timestamp = date.getTime();	// 得到的是毫秒

        if (place === 's') {	// 秒
            return Math.floor(timestamp / 1000);
        } else {	// 毫秒
            return timestamp;
        }
    },
    getToday (place) {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const hours = 0;
        const mins = 0;
        const secs = 0;
        const datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
        let tmp_datetime = datetime.replace(/:/g,'-');
        tmp_datetime = tmp_datetime.replace(/ /g,'-');
        const arr = tmp_datetime.split('-');
        const now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));

        if (place === 's') {
            return parseInt(now.getTime() / 1000);
        } else {
            return parseInt(now.getTime());
        }
    },
    getYear (place) {
        const today = new Date();
        const year = today.getFullYear();
        const month = 0;
        const day = 1;
        const hours = 0;
        const mins = 0;
        const secs = 0;
        const datetime = year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
        let tmp_datetime = datetime.replace(/:/g,'-');
        tmp_datetime = tmp_datetime.replace(/ /g,'-');
        const arr = tmp_datetime.split('-');
        const now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
        if (place === 's') {
            return parseInt(now.getTime() / 1000);
        } else {
            return parseInt(now.getTime());
        }
    },
    getLastDate (time, type) {
        const unixtime = time * 1000;
        const date = new Date(unixtime);
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        // const ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

        if (type === 'month') {
            return month + '-' + currentDate + ' ' + hh + ':' + mm;
            //return month + "-" + currentDate;
        } else {
            return date.getFullYear() + '-' + month + '-' + currentDate + ' ' + hh + ':' + mm;
        }
    },
    // 时间戳转详细时间，比如5分钟前
    getMagic (timestamp) {
        const now = this.getUnix('s');    //当前时间戳
        const today = this.getToday('s'); //今天0点时间戳
        const year = this.getYear('s');   //今年0点时间戳
        const timer = now - timestamp;

        let tip = '';

        if (timer <= 0) {
            tip = '刚刚';
        } else if (Math.floor(timer/60) <= 0) {
            tip = '刚刚';
        } else if (timer < 3600) {
            tip = Math.floor(timer/60) + '分钟前';
        } else if (timer >= 3600 && (timestamp - today >= 0) ) {
            tip = Math.floor(timer/3600) + '小时前';
        } else if (timer/86400 <= 31) {
            tip = Math.ceil(timer/86400) + '天前';
        } else if (timestamp - today < 0 && (timestamp - year >= 0)) {
            tip = this.getLastDate(timestamp, 'month');
        } else {
            tip = this.getLastDate(timestamp, 'year');
        }
        return tip;
    }
};

export default function (timestamp) {
    return time.getMagic(timestamp / 1000);
}