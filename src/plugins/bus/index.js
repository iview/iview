export default {
  install (Vue) {
    const bus = new Vue({})
    if (!Vue.$vux) {
      Vue.$vux = {
        bus
      }
    } else {
      Vue.$vux.bus = bus
    }
  }
}
