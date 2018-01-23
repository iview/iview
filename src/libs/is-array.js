export default function (value) {
  if (!value) {
    return false
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}
