'use strict'
module.exports = function (string) {
  const reg = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g')
  return string.replace(reg, '')
}
