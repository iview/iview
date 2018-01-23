<template>
  <div class="vux-cell-box">
    <div class="weui-cell vux-tap-active weui-cell_access" @click="onClick" v-show="showCell">
      <div class="weui-cell__hd">
        <slot name="title" label-class="weui-label" :label-style="labelStyles" :label-title="title">
          <label class="weui-label" :class="labelClass" :style="labelStyles" v-if="title" v-html="title"></label>
        </slot>
        <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
      </div>
      <div class="vux-cell-primary vux-popup-picker-select-box">
        <div class="vux-popup-picker-select" :style="{textAlign: valueTextAlign}">
          <span class="vux-popup-picker-value vux-cell-value" v-if="!displayFormat && !showName && value.length">{{value | array2string}}</span>
          <span class="vux-popup-picker-value vux-cell-value" v-if="!displayFormat && showName && value.length">{{value | value2name(data)}}</span>
          <span class="vux-popup-picker-value vux-cell-value" v-if="displayFormat && value.length">{{ displayFormat(value, value2name(value, data)) }}</span>
          <span v-if="!value.length && placeholder" v-text="placeholder" class="vux-popup-picker-placeholder vux-cell-placeholder"></span>
        </div>
      </div>
      <div class="weui-cell__ft">
      </div>
    </div>

    <div v-transfer-dom="isTransferDom">
      <popup
      v-model="showValue"
      class="vux-popup-picker"
      :id="`vux-popup-picker-${uuid}`"
      @on-hide="onPopupHide"
      @on-show="onPopupShow"
      :popup-style="popupStyle">
        <div class="vux-popup-picker-container">
          <popup-header
          :left-text="cancelText"
          :right-text="confirmText"
          @on-click-left="onHide(false)"
          @on-click-right="onHide(true)"
          :title="popupTitle"></popup-header>
          <picker
          :data="data"
          v-model="tempValue"
          @on-change="onPickerChange"
          :columns="columns"
          :fixed-columns="fixedColumns"
          :container="'#vux-popup-picker-'+uuid"
          :column-width="columnWidth"></picker>
        </div>
      </popup>
    </div>

  </div>
</template>

<script>
import Picker from '../picker'
import Cell from '../cell'
import Popup from '../popup'
import PopupHeader from '../popup-header'
import InlineDesc from '../inline-desc'
import { Flexbox, FlexboxItem } from '../flexbox'
import array2string from '../../filters/array2String'
import value2name from '../../filters/value2name'
import uuidMixin from '../../libs/mixin_uuid'
import TransferDom from '../../directives/transfer-dom'

const getObject = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export default {
  name: 'popup-picker',
  directives: {
    TransferDom
  },
  created () {
    if (typeof this.show !== 'undefined') {
      this.showValue = this.show
    }
  },
  mixins: [uuidMixin],
  components: {
    Picker,
    Cell,
    Popup,
    PopupHeader,
    Flexbox,
    FlexboxItem,
    InlineDesc
  },
  filters: {
    array2string,
    value2name
  },
  props: {
    valueTextAlign: {
      type: String,
      default: 'right'
    },
    title: String,
    cancelText: String,
    confirmText: String,
    data: {
      type: Array,
      default () {
        return []
      }
    },
    placeholder: String,
    columns: {
      type: Number,
      default: 0
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    showName: Boolean,
    inlineDesc: [String, Number, Array, Object, Boolean],
    showCell: {
      type: Boolean,
      default: true
    },
    show: Boolean,
    displayFormat: Function,
    isTransferDom: {
      type: Boolean,
      default: true
    },
    columnWidth: Array,
    popupStyle: Object,
    popupTitle: String
  },
  computed: {
    labelStyles () {
      return {
        display: 'block',
        width: this.$parent.labelWidth || this.$parent.$parent.labelWidth || 'auto',
        textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
      }
    },
    labelClass () {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      }
    }
  },
  methods: {
    value2name,
    getNameValues () {
      return value2name(this.currentValue, this.data)
    },
    onClick () {
      this.showValue = true
    },
    onHide (type) {
      this.showValue = false
      if (type) {
        this.closeType = true
        this.currentValue = getObject(this.tempValue)
      }
      if (!type) {
        this.closeType = false
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue)
        }
      }
    },
    onPopupShow () {
      // reset close type to false
      this.closeType = false
      this.$emit('on-show')
    },
    onPopupHide (val) {
      if (this.value.length > 0) {
        this.tempValue = getObject(this.currentValue)
      }
      this.$emit('on-hide', this.closeType)
    },
    onPickerChange (val) {
      if (JSON.stringify(this.currentValue) !== JSON.stringify(val)) {
        // if has value, replace it
        if (this.value.length) {
          const nowData = JSON.stringify(this.data)
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val)
          }
          this.currentData = nowData
        } else { // if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      const _val = getObject(val)
      this.$emit('on-shadow-change', _val, value2name(_val, this.data).split(' '))
    }
  },
  watch: {
    value (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.tempValue)) {
        this.tempValue = getObject(val)
        this.currentValue = getObject(val)
      }
    },
    currentValue (val) {
      this.$emit('input', getObject(val))
      this.$emit('on-change', getObject(val))
    },
    show (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('update:show', val)
    }
  },
  data () {
    return {
      onShowProcess: false,
      tempValue: getObject(this.value),
      closeType: false,
      currentData: JSON.stringify(this.data), // used for detecting if it is after data change
      showValue: false,
      currentValue: this.value
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/1px.less';

.vux-cell-primary {
  flex: 1;
}
.vux-cell-box {
  position: relative;
}
.vux-cell-box:not(:first-child):before {
  content: " ";
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  transform-origin: 0 0;
  transform: scaleY(0.5);
  left: 15px;
}
.vux-popup-picker-header {
  height: 44px;
  color: @popup-picker-header-text-color;
  background-color: @popup-picker-header-bg-color;
  font-size: @popup-picker-header-font-size;
  position: relative;
  &:after {
    .setBottomLine(#e5e5e5);
  }
}
.vux-popup-picker-value {
  /* display: inline-block; */
}
.vux-popup-picker-header-menu {
  text-align: left;
  padding-left: 15px;
  line-height: 44px;
}
.vux-popup-picker-header-menu-right {
  text-align: right;
  padding-right: 15px;
}
.vux-popup-picker-select {
  width: 100%;
  position: relative;
}
.vux-popup-picker-select-box.weui-cell__bd:after {
  content: " ";
  display: inline-block;
  transform: rotate(45deg);
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #C8C8CD;
  border-style: solid;
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -3px;
}
.vux-popup-picker-cancel {
  color: @popup-picker-header-cancel-text-color;
}
.vux-popup-picker-placeholder {
  color: #999;
}
</style>
