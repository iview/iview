export default {
  hasClass (el, token) {
    return new RegExp('(\\s|^)' + token + '(\\s|$)').test(el.className)
  },
  addClass (el, token) {
    if (!el) {
      return
    }
    if (el.classList) {
      el.classList.add(token)
    } else if (!this.hasClass(el, token)) {
      el.className += '' + token
    }
  },
  removeClass (el, token) {
    if (!el) {
      return
    }
    if (el.classList) {
      el.classList.remove(token)
    } else if (this.hasClass(el, token)) {
      el.className = el.className.replace(new RegExp('(\\s|^)' + token + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '')
    }
  }
}
