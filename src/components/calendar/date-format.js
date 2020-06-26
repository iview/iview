// 判断平闰年
export function isRunYear(fullYear) {
    return fullYear % 4 == 0 && (fullYear % 100 != 0 || fullYear % 400 == 0);
}
// 获取一个月有多少天
function getCountDays(date) {
    var curDate = date ? new Date(date) : new Date();
    var curMonth = curDate.getMonth();
    curDate.setMonth(curMonth + 1);
    curDate.setDate(0);
    return curDate.getDate();
}
function getPrevDaysList (month,year){
    let startIndex = weekStartIndex(month, year);
    const startToArray = new Array(startIndex).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'prev',
            selected: false
        };
    });
    return startToArray;
}
function getNextDaysList(prev, now){
    const total = prev + now;
    const floorTotal = Math.ceil( total/7 ) * 7 - total;
    const nextToArray = new Array(floorTotal).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'next',
            selected: false
        };
    });
    return nextToArray;
}
// 获取列表显示日历时间
export function getCalendarList(month, year) {
    if( !month || !year ){
        return [];
    }
    const days = getCountDays(year + "-" + month);
    
    const prevToArray = getPrevDaysList(month, year);
    let prevStartIndex = weekStartIndex(month, year);
    prevStartIndex = prevStartIndex === 0 ? 7 : prevStartIndex;
    const nextToArray = getNextDaysList(prevStartIndex, days);
    const nowToArray = new Array(days).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'now',
            selected: false
        };
    });
    return prevToArray.concat(nowToArray, nextToArray);
}

export function weekStartIndex(month, year) {
    const day = "01";
    month = month < 10 ? "0" + month : month;
    const time = year + "-" + month + "-" + day;
    return new Date(time).getDay();
}

export function getNowTime(){
    const date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}