<template>
  <div class="vux-picker">
    <flexbox :gutter="0">
      <flexbox-item :span="columnWidth && columnWidth[index]" v-for="(one, index) in currentData" :key="index" style="margin-left:0;">
        <div class="vux-picker-item" :id="`vux-picker-${uuid}-${index}`"></div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import Scroller from './scroller'
import { Flexbox, FlexboxItem } from '../flexbox'
import Manager from './chain'
import value2name from '../../filters/value2name'
import isArray from '../../libs/is-array'

export default {
  name: 'picker',
  components: {
    Flexbox,
    FlexboxItem
  },
  created () {
    if (this.columns !== 0) {
      const length = this.columns
      this.store = new Manager(this.data, length, this.fixedColumns)
      this.currentData = this.store.getColumns(this.value)
    }
  },
  mounted () {
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.$nextTick(() => {
      this.render(this.currentData, this.currentValue)
    })
  },
  props: {
    data: Array,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: Array,
    itemClass: {
      type: String,
      default: 'scroller-item'
    },
    columnWidth: Array
  },
  methods: {
    getNameValues () {
      return value2name(this.currentValue, this.data)
    },
    getId (i) {
      return `#vux-picker-${this.uuid}-${i}`
    },
    render (data, value) {
      this.count = this.currentData.length
      const _this = this
      if (!data || !data.length) {
        return
      }
      let count = this.currentData.length
      // set first item as value
      if (value.length < count) {
        for (let i = 0; i < count; i++) {
          if (process.env.NODE_ENV === 'development' &&
            typeof data[i][0] === 'undefined' &&
            isArray(this.data) &&
            this.data[0] &&
            typeof this.data[0].value !== 'undefined' &&
            !this.columns) {
            console.error('[VUX error] 渲染出错，如果为联动模式，需要指定 columns(列数)')
          }
          this.$set(_this.currentValue, i, data[i][0].value || data[i][0])
        }
      }

      for (let i = 0; i < data.length; i++) {
        /**
        * Still don't know why this happens
        */
        if (!document.querySelector(_this.getId(i))) {
          return
        }

        _this.scroller[i] && _this.scroller[i].destroy()
        _this.scroller[i] = new Scroller(_this.getId(i), {
          data: data[i],
          defaultValue: value[i] || data[i][0].value,
          itemClass: _this.item_class,
          onSelect (value) {
            _this.$set(_this.currentValue, i, value)
            if (!this.columns || (this.columns && _this.getValue().length === _this.store.count)) {
              _this.$nextTick(() => {
                _this.$emit('on-change', _this.getValue())
              })
            }
            if (_this.columns !== 0) {
              _this.renderChain(i + 1)
            }
          }
        })
        if (_this.currentValue) {
          _this.scroller[i].select(value[i])
        }
      }
    },
    renderChain (i) {
      if (!this.columns) {
        return
      }

      // do not render for last scroller
      if (i > this.count - 1) {
        return
      }

      const _this = this
      let ID = this.getId(i)
      // destroy old one
      this.scroller[i].destroy()
      let list = this.store.getChildren(_this.getValue()[i - 1])
      this.scroller[i] = new Scroller(ID, {
        data: list,
        itemClass: _this.item_class,
        onSelect (value) {
          _this.$set(_this.currentValue, i, value)
          _this.$nextTick(() => {
            _this.$emit('on-change', _this.getValue())
          })
          _this.renderChain(i + 1)
        }
      })
      // list is Array(empty) as maybe
      if (list.length) {
        this.$set(this.currentValue, i, list[0].value)
        this.renderChain(i + 1)
      } else {
        this.$set(this.currentValue, i, null)
      }
    },
    getValue () {
      let data = []
      for (let i = 0; i < this.currentData.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value)
        } else {
          return []
        }
      }
      return data
    },
    emitValueChange (val) {
      if (!this.columns || (this.columns && val.length === this.store.count)) {
        this.$emit('on-change', val)
      }
    }
  },
  data () {
    return {
      scroller: [],
      count: 0,
      uuid: '',
      currentData: this.data,
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.currentValue)) {
        this.currentValue = val
      }
    },
    currentValue (val, oldVal) {
      this.$emit('input', val)
      // render all the scroller for chain datas
      if (this.columns !== 0) {
        if (val.length > 0) {
          if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
            this.currentData = this.store.getColumns(val)
            this.$nextTick(function () {
              this.render(this.currentData, val)
            })
          }
        }
      } else {
        if (val.length) {
          for (let i = 0; i < val.length; i++) {
            if (this.scroller[i] && this.scroller[i].value !== val[i]) {
              this.scroller[i].select(val[i])
            }
          }
        } else {
          this.render(this.currentData, [])
        }
      }
    },
    data (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.currentData)) {
        this.currentData = val
      }
    },
    currentData (newData) {
      if (Object.prototype.toString.call(newData[0]) === '[object Array]') {
        this.$nextTick(() => {
          this.render(newData, this.currentValue)
          // emit on-change after rerender
          this.$nextTick(() => {
            this.emitValueChange(this.getValue())

            if (JSON.stringify(this.getValue()) !== JSON.stringify(this.currentValue)) {
              if (!this.columns || (this.columns && this.getValue().length === this.store.count)) {
                this.currentValue = this.getValue()
              }
            }
          })
        })
      } else {
        if (this.columns !== 0) {
          if (!newData.length) {
            return
          }
          const length = this.columns
          this.store = new Manager(newData, length, this.fixedColumns)
          this.currentData = this.store.getColumns(this.currentValue)
        }
      }
    }
  },
  beforeDestroy () {
    for (let i = 0; i < this.count; i++) {
      this.scroller[i] && this.scroller[i].destroy()
      this.scroller[i] = null
    }
  }
}
</script>

<style>
@import './scroller.css';
</style>

