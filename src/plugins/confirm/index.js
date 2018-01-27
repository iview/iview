import ConfirmComponent from '../../components/v-confirm'
import { mergeOptions } from '../../libs/plugin_helper'

let $vm

const plugin = {
  install (vue, options = {}) {
    const Confirm = vue.extend(ConfirmComponent)

    if (!$vm) {
      $vm = new Confirm({
        el: document.createElement('div'),
        propsData: {
          title: ''
        }
      })
      document.body.appendChild($vm.$el)
    }

    const confirm = {
      show (options) {
        if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          options.onShow && options.onShow()
        }
        this.$watcher && this.$watcher()
        this.$watcher = $vm.$watch('showValue', (val) => {
          if (!val && options && options.onHide) {
            options.onHide()
          }
        })

        $vm.$off('on-cancel')
        $vm.$off('on-confirm')

        $vm.$on('on-cancel', () => {
          options && options.onCancel && options.onCancel()
        })
        $vm.$on('on-confirm', msg => {
          options && options.onConfirm && options.onConfirm(msg)
        })
        $vm.showValue = true
      },
      setInputValue (val) {
        vue.nextTick(() => {
          setTimeout(() => {
            $vm.setInputValue(val)
          }, 10)
        })
      },
      prompt (placeholder, options) {
        this.show(Object.assign({}, options, {
          placeholder,
          showInput: true
        }))
      },
      hide () {
        $vm.showValue = false
      }
    }

    // all Vux's plugins are included in this.$vux
    if (!vue.$vux) {
      vue.$vux = {
        confirm
      }
    } else {
      vue.$vux.confirm = confirm
    }

    vue.mixin({
      created: function () {
        this.$vux = vue.$vux
      }
    })
  }
}

export default plugin
export const install = plugin.install

