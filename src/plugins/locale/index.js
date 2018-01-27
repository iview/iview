import querystring from '../../tools/querystring'
import cookie from '../../tools/cookie'
import objectAssign from 'object-assign'

const locale = function (options = {}) {
  let defaultOptions = {
    defaultLocale: '', // if not set, use navigator language
    queryField: 'locale',
    cookieField: 'locale',
    cookieMaxAge: 365,
    storageList: ['cookie'],
    get: function () {
      // search query, then cookie, then defaultLocal, then navigator
      const queryRs = querystring.parse()
      if (queryRs.locale) {
        return queryRs.locale
      }

      const cookieRs = cookie.get('locale')
      if (cookieRs) {
        return cookieRs
      }

      if (this.defaultLocal) {
        return this.defaultLocal
      }

      return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
    },
    set: function (locale) {
      if (this.storageList.indexOf('cookie') > -1) {
        cookie.set('locale', locale, {
          expires: this.cookieMaxAge
        })
      }
    }
  }
  return objectAssign(defaultOptions, options)
}

export default {
  install (Vue, options) {
    const _locale = locale(options)
    Vue.locale = _locale
    Vue.mixin({
      created: function () {
        this.$locale = _locale
      }
    })
  }
}

