/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
// const isMillisecond = timeStamp => {
//     const timeStr = String(timeStamp)
//     return timeStr.length > 10
// }

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
const isEarly = (timeStamp, currentTime) => {
    return timeStamp <= currentTime;
};

/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
    return num < 10 ? '0' + num : num;
};

/**
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (timeStamp, startType) => {
    const d = new Date(timeStamp);
    const year = d.getFullYear();
    const month = getHandledValue(d.getMonth() + 1);
    const date = getHandledValue(d.getDate());
    const hours = getHandledValue(d.getHours());
    const minutes = getHandledValue(d.getMinutes());
    const second = getHandledValue(d.getSeconds());
    let resStr = '';
    if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second;
    else resStr = month + '-' + date + ' ' + hours + ':' + minutes;
    return resStr;
};

/**
 * @param {String|Number} timeStamp 时间戳
 * @returns {String} 相对时间字符串
 */
export const getRelativeTime = (timeStamp, locale) => {
    // 判断当前传入的时间戳是秒格式还是毫秒
    // const IS_MILLISECOND = true;
    // 如果是毫秒格式则转为秒格式
    // if (IS_MILLISECOND) Math.floor(timeStamp /= 1000);
    // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型
    // timeStamp = Number(timeStamp);
    // 获取当前时间时间戳
    // const currentTime = Math.floor(Date.parse(new Date()) / 1000);
    const currentTime = (new Date()).getTime();

    // 判断传入时间戳是否早于当前时间戳
    const IS_EARLY = isEarly(timeStamp, currentTime);
    // 获取两个时间戳差值
    let diff = currentTime - timeStamp;
    // 如果IS_EARLY为false则差值取反
    if (!IS_EARLY) diff = -diff;
    let resStr = '';
    let dirStr = IS_EARLY ? (locale('i.time.before') || '前') : (locale('i.time.after') || '后');

    if (diff < 1000) resStr = locale('i.time.just') || '刚刚';
    // 少于等于59秒
    else if (diff < 60000) resStr = parseInt(diff / 1000) + (locale('i.time.seconds') || '秒') + dirStr;
    // 多于59秒，少于等于59分钟59秒
    else if (diff >= 60000 && diff < 3600000) resStr = Math.floor(diff / 60000) + (locale('i.time.minutes') || '分钟') + dirStr;
    // 多于59分钟59秒，少于等于23小时59分钟59秒
    else if (diff >= 3600000 && diff < 86400000) resStr = Math.floor(diff / 3600000) + (locale('i.time.hours') || '小时') + dirStr;
    // 多于23小时59分钟59秒，少于等于29天59分钟59秒
    else if (diff >= 86400000 && diff < 2623860000) resStr = Math.floor(diff / 86400000) + (locale('i.time.days') || '天') + dirStr;
    // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
    else if (diff >= 2623860000 && diff <= 31567860000 && IS_EARLY) resStr = getDate(timeStamp);
    else resStr = getDate(timeStamp, 'year');
    return resStr;
};

export default function (timestamp, locale) {
    return getRelativeTime(timestamp, locale);
}
