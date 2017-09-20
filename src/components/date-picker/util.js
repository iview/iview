import dateUtil from '../../utils/date';

export const toDate = function(date) {
    date = new Date(date);
    if (isNaN(date.getTime())) return null;
    return date;
};

export const formatDate = function(date, format) {
    date = toDate(date);
    if (!date) return '';
    return dateUtil.format(date, format || 'yyyy-MM-dd');
};

export const parseDate = function(string, format) {
    return dateUtil.parse(string, format || 'yyyy-MM-dd');
};

export const getDayCountOfMonth = function(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    return 31;
};

export const getFirstDayOfMonth = function(date) {
    const temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getDay();
};

export const prevMonth = function(src) {
    const year = src.getFullYear();
    const month = src.getMonth();
    const date = src.getDate();

    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;

    const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

export const nextMonth = function(src) {
    const year = src.getFullYear();
    const month = src.getMonth();
    const date = src.getDate();

    const newYear = month === 11 ? year + 1 : year;
    const newMonth = month === 11 ? 0 : month + 1;

    const newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
    if (newMonthDayCount < date) {
        src.setDate(newMonthDayCount);
    }

    src.setMonth(newMonth);
    src.setFullYear(newYear);

    return new Date(src.getTime());
};

export const initTimeDate = function () {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
};

export const getWeek = function(date){
    //求周数 用历史上的周数相减得到是这一年的第几周
    //同时关注临界值1月的前几天是否属于上一年
    //返回值如果小于0 =-1 就说明是上一年的
    var start = new Date(0,0,7);
    var yearStart = new Date(date.getFullYear(),0,1).getTime();
    var dateTime = date.getTime();
    var history = Math.floor((yearStart - start)/24/3600/7/1000);
    var history2 = Math.floor((dateTime - start)/24/3600/7/1000);
    var day = new Date(date.getFullYear(),0,1).getDay();
    var res = 0;
    if(day>=4){
        res = (history2-history-1);
    }else{
        res = (history2-history);
    }
    if(res<0){
        return date.getFullYear()-1+' '+' 第 52 周';
    }else if(res<10){
        return date.getFullYear()+' '+'第 0'+(res+1)+' 周';
    }else{
        return date.getFullYear()+' '+'第 '+(res+1)+' 周';
    }
};
export const weekStart = function(date){
    var day = date.getDay();
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-day);
};
export const  transWeek = function(date){
    var reg = /[0-9]+\s?第\s?[0-9]+\s?周/g;
    var num = /[0-9]+/g;
    if(reg.test(date)){
        var numbers = date.match(num);
        if(numbers.length==2){
            var year = parseInt(numbers[0]);
            var week = parseInt(numbers[1]);
            if(isNaN(year)||isNaN(week)){
                return false;
            }else{
                if(week>52||week<1){
                    return false;
                }
                if(year<1900){
                    return false;
                }
                //把周数转为时间戳
                var yearStart = new Date(year,0,1);
                var day = yearStart.getDay();
                var start = yearStart.getTime();
                if(day!=0){
                    if(day>=4){
                        start = new Date(year,0,8-day).getTime();
                    }else{
                        start = new Date(year,0,1-day).getTime();
                    }
                }
                var endTime = parseInt(week-1)*7*24*3600*1000+start;
                return endTime;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
};