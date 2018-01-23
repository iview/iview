const Format = require('./format')

module.exports = function (start, end, format = 'YYYY-MM-DD') {
  let rs = []
  let startTime = new Date(start).getTime()
  let endTime = new Date(end).getTime()

  while (startTime <= endTime) {
    rs.push(Format(startTime, format))
    startTime += 24 * 60 * 60 * 1000
  }
  return rs
}
