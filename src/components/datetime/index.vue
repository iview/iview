<template>
  <a
  class="vux-datetime weui-cell"
  :class="{'weui-cell_access': !readonly}"
  :data-cancel-text="$t('cancel_text')"
  :data-confirm-text="$t('confirm_text')"
  href="javascript:">
    <slot>
      <div>
        <slot name="title">
          <p
          :style="{
            width: $parent.labelWidth,
            textAlign: $parent.labelAlign,
            marginRight: $parent.labelMarginRight
          }"
          :class="labelClass"
          v-html="title"></p>
        </slot>
        <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
      </div>
      <div class="weui-cell__ft vux-cell-primary vux-datetime-value" :style="{textAlign: valueTextAlign}">
        <span class="vux-cell-placeholder" v-if="!currentValue && placeholder">{{ placeholder }}</span>
        <span class="vux-cell-value" v-if="currentValue">{{ displayFormat ? displayFormat(currentValue) : currentValue }}</span>
        <icon class="vux-input-icon" type="warn" v-show="!valid" :title="firstError"></icon>
      </div>
    </slot>
  </a>
</template>

<i18n>
cancel_text:
  en: cancel
  zh-CN: 取消
confirm_text:
  en: done
  zh-CN: 确定
</i18n>

<script>
import Icon from '../icon'
import Picker from './datetimepicker'
import Group from '../group'
import InlineDesc from '../inline-desc'
import Uuid from '../../mixins/uuid'
import format from '../../tools/date/format'

export default {
  name: 'datetime',
  mixins: [Uuid],
  components: {
    Group,
    InlineDesc,
    Icon
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    title: String,
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: String,
    cancelText: String,
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: {
      type: String,
      validator (val) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'development' && val && val.length !== 10) {
          console.error('[VUX] Datetime prop:start-date 必须为 YYYY-MM-DD 格式')
        }
        return val ? val.length === 10 : true
      }
    },
    endDate: {
      type: String,
      validator (val) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'development' && val && val.length !== 10) {
          console.error('[VUX] Datetime prop:end-date 必须为 YYYY-MM-DD 格式')
        }
        return val ? val.length === 10 : true
      }
    },
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean,
    defaultSelectedValue: String,
    computeHoursFunction: Function,
    computeDaysFunction: Function
  },
  created () {
    this.isFirstSetValue = false
    this.currentValue = this.value
  },
  data () {
    return {
      currentShow: false,
      currentValue: null,
      valid: true,
      errors: {}
    }
  },
  mounted () {
    const uuid = this.uuid
    this.$el.setAttribute('id', `vux-datetime-${uuid}`)
    if (!this.readonly) {
      this.$nextTick(() => {
        this.render()

        if (this.show) {
          this.$nextTick(() => {
            this.picker && this.picker.show(this.currentValue)
          })
        }
      })
    }
  },
  computed: {
    pickerOptions () {
      const _this = this
      const options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: _this.getButtonText('confirm'),
        cancelText: _this.getButtonText('cancel'),
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        defaultSelectedValue: this.defaultSelectedValue,
        computeHoursFunction: this.computeHoursFunction,
        computeDaysFunction: this.computeDaysFunction,
        onSelect (type, val, wholeValue) {
          if (_this.picker && _this.picker.config.renderInline) {
            _this.$emit('input', wholeValue)
            _this.$emit('on-change', wholeValue)
          }
        },
        onConfirm (value) {
          _this.currentValue = value
        },
        onClear (value) {
          _this.$emit('on-clear', value)
        },
        onHide (type) {
          _this.currentShow = false
          _this.$emit('update:show', false)
          _this.validate()
          _this.$emit('on-hide', type)
          if (type === 'cancel') {
            _this.$emit('on-cancel')
          }
          if (type === 'confirm') {
            _this.$emit('on-confirm')
          }
        },
        onShow () {
          _this.currentShow = true
          _this.$emit('update:show', true)
          _this.$emit('on-show')
        }
      }
      if (this.minYear) {
        options.minYear = this.minYear
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear
      }
      return options
    },
    firstError () {
      let key = Object.keys(this.errors)[0]
      return this.errors[key]
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    }
  },
  methods: {
    getButtonText (type) {
      if (type === 'cancel' && this.cancelText) {
        return this.cancelText
      } else if (type === 'confirm' && this.confirmText) {
        return this.confirmText
      }
      return this.$el.getAttribute(`data-${type}-text`)
    },
    render () {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(this.pickerOptions)
      })
    },
    validate () {
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填'
        return
      }
      this.valid = true
      this.errors = {}
    }
  },
  watch: {
    readonly (val) {
      if (val) {
        this.picker && this.picker.destroy()
      } else {
        this.render()
      }
    },
    show (val) {
      if (val === this.currentShow) return
      if (val) {
        this.picker && this.picker.show(this.currentValue)
      } else {
        this.picker && this.picker.hide(this.currentValue)
      }
    },
    currentValue (val, oldVal) {
      this.$emit('input', val)
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true
        oldVal && this.$emit('on-change', val)
      } else {
        this.$emit('on-change', val)
      }
      this.validate()
    },
    startDate () {
      this.render()
    },
    endDate () {
      this.render()
    },
    format (val) {
      if (this.currentValue) {
        this.currentValue = format(this.currentValue, val)
      }
      this.render()
    },
    value (val) {
      // do not force render when renderInline is true
      if (this.readonly || (this.picker && this.picker.config.renderInline)) {
        this.currentValue = val
        return
      }
      if (this.currentValue !== val) {
        this.currentValue = val
        this.render()
      }
    }
  },
  beforeDestroy () {
    this.picker && this.picker.destroy()
  }
}
</script>

<style lang="less">
@import './style.less';
</style>
