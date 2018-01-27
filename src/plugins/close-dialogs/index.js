/**
* import { CloseDialogsPlugin } from 'vux'
* Vue.use(CloseDialogsPlugin, router)
*/
export default {
  install (Vue, router) {
    router.beforeEach((to, from, next) => {
      const list = ['alert', 'confirm', 'toast', 'loading', 'datetime']
      list.forEach(one => {
        if (Vue.$vux[one]) {
          Vue.$vux[one].hide && Vue.$vux[one].hide()
        }
      })
      next()
    })
  }
}
