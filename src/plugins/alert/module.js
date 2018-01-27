import Vue from 'vue'
import { createVM, show, hide } from './util'

let $vm

if (!$vm) {
  $vm = createVM(Vue)
}

const manager = {}

export default {
  show (options) {
    return show.call(manager, $vm, options)
  },
  hide () {
    return hide.call(manager, $vm)
  }
}
