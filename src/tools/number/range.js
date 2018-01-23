'use strict'
const pad = require('./pad')

module.exports = function (start, end, padWidth = 2) {
  const rs = []
  while (start <= end) {
    rs.push(padWidth ? pad(start, padWidth) : start)
    start++
  }
  return rs
}