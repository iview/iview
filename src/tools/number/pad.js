'use strict'
module.exports = function (source, length = 2) {
  let pre = ""
  const negative = source < 0
  const string = String(Math.abs(source))
  if (string.length < length) {
      pre = (new Array(length - string.length + 1)).join('0')
  }
  return (negative ?  "-" : "") + pre + string
}