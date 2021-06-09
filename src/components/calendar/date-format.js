// get month has days
function getCountDays(date) {
    var curDate = date ? new Date(date) : new Date();
    var curMonth = curDate.getMonth();
    curDate.setMonth(curMonth + 1);
    curDate.setDate(0);
    return curDate.getDate();
}
// get prev months show days
function getPrevDaysList (month,year){
    let startIndex = weekStartIndex(month, year);
    const startToArray = new Array(startIndex).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'prev',
            selected: false,
            disabled: false
        };
    });
    return startToArray;
}
// get next month show some days
function getNextDaysList(prev, now){
    const total = prev + now;
    const floorTotal = Math.ceil( total/7 ) * 7 - total;
    const nextToArray = new Array(floorTotal).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'next',
            selected: false,
            disabled: false
        };
    });
    return nextToArray;
}
// get now month days
function getNowDaysList(days){
    const nowDays = new Array(days).fill("").map((item, index) => {
        item = index + 1;
        return {
            day: item,
            type: 'now',
            selected: false,
            disabled: false
        };
    });
    return nowDays;
}
// get now days show days list
export function getCalendarList(month, year) {
    if( !month || !year ){
        return [];
    }
    const days = getCountDays(year + "-" + month);
    const prevToArray = getPrevDaysList(month, year);
    let prevStartIndex = weekStartIndex(month, year);
    prevStartIndex = prevStartIndex === 0 ? 7 : prevStartIndex;
    const nextToArray = getNextDaysList(prevStartIndex, days);
    const nowToArray = getNowDaysList(days);
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