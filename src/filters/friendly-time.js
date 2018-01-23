export default function (time) {
  let date = (typeof time === 'number') ? new Date(time) : new Date((time || '').replace(/-/g, '/'))
  let diff = (((new Date()).getTime() - date.getTime()) / 1000)
  let dayDiff = Math.floor(diff / 86400)

  let isValidDate = Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())

  if (!isValidDate) {
    console.error('not a valid date')
  }
  const formatDate = function (date) {
    let today = new Date(date)
    let year = today.getFullYear()
    let month = ('0' + (today.getMonth() + 1)).slice(-2)
    let day = ('0' + today.getDate()).slice(-2)
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
    return formatDate(date)
  }

  return dayDiff === 0 && (
      diff < 60 && '刚刚' ||
      diff < 120 && '1分钟前' ||
      diff < 3600 && Math.floor(diff / 60) + '分钟前' ||
      diff < 7200 && '1小时前' ||
      diff < 86400 && Math.floor(diff / 3600) + '小时前') ||
    dayDiff === 1 && '昨天' ||
    dayDiff < 7 && dayDiff + '天前' ||
    dayDiff < 31 && Math.ceil(dayDiff / 7) + '周前'
}
