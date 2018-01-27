export default {
  install (Vue, store) {
    store.registerModule('app', {
      state: {
        deviceready: false
      },
      mutations: {
        updateDiviceReadyStatus (state, payload) {
          state.deviceready = payload.isReady
        }
      }
    })

    const fns = []
    Vue.prototype.$api = {}
    window.apiready = function () {
      store.commit('updateDiviceReadyStatus', {
        isReady: true
      })
      Vue.prototype.$api = window.api
      while (fns.length) {
        let fn = fns.shift()
        fn()
      }
    }

    Vue.prototype.$deviceready = function (fn) {
      if (!fn || typeof fn !== 'function') {
        return
      }
      if (!store.state.app.deviceready) {
        fns.push(fn)
      } else {
        fn()
      }
    }

    /** for reloading page **/
    let count = 0
    document.addEventListener('click', () => {
      count++
      if (count === 3) {
        document.location.reload()
      }
      setTimeout(() => {
        count = 0
      }, 500)
    })
  }
}
