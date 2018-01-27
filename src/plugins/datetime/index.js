import Datetime from '../../components/datetime/datetimepicker'
import ObjectAssign from 'object-assign'
/* just for importing style and avoid less-loader issue */
import DatetimeComponent from '../../components/datetime/index.vue' // eslint-disable-line

const libs = {
  show: function (options = {}) {
    options = ObjectAssign({
      destroyOnHide: true,
      isOneInstance: true
    }, options)
    const datetime = libs.datetime = new Datetime(options)
    datetime.show()
  },
  hide: function () {
    libs.datetime && libs.datetime.hide()
  }
}

export default {
  install (Vue) {
    if (!Vue.$vux) {
      Vue.$vux = {
        datetime: libs
      }
    } else {
      Vue.$vux.datetime = libs
    }

    Vue.mixin({
      created: function () {
        this.$vux = Vue.$vux
      }
    })
  }
}

