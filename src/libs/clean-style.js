module.exports = (styles = {}) => {
  for (let i in styles) {
    if (typeof styles[i] === 'undefined') {
      delete styles[i]
    }
  }
  return styles
}
