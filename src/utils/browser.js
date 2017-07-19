/**
 * 判断是否是IE浏览器
 *
 * @param  {String|Number}  version IE版本
 * @return {Boolean}        是/否
 */
export function isIE(version) {
  let b = document.createElement('b');
  b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->';
  return b.getElementsByTagName('i').length === 1;
}