const ua = navigator.userAgent

const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua)
const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua)
const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua)
const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
const isWechat = /micromessenger/i.test(ua)
const isAlipay = /alipayclient/i.test(ua)

const plugin = function (Vue) {
  // Vue.$device will be removed
  if (!Vue.$device || !Vue.device) {
    Vue.$device = Vue.device = {
      isAndroid,
      isIpad,
      isIpod,
      isIphone,
      isWechat,
      isAlipay
    }
  }
  Vue.mixin({
    created: function () {
      this.$device = {
        isAndroid,
        isIpad,
        isIpod,
        isIphone,
        isWechat,
        isAlipay
      }
    }
  })
}

export default plugin
