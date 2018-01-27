import axios from 'axios'

export default {
  install (Vue) {
    Vue.prototype.$http = axios
    Vue.http = axios
  },
  $http: axios
}

export const $http = axios
