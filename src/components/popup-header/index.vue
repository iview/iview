<template>
  <div class="vux-popup-header" :class="showBottomBorder ? 'vux-1px-b' : ''">
    <div class="vux-popup-header-left" @click="$emit('on-click-left')">
      <slot name="left-text">{{ leftText }}</slot>
    </div>
    <div class="vux-popup-header-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="vux-popup-header-right" @click="$emit('on-click-right')">
      <slot name="right-text">{{ rightText }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-header',
  props: {
    leftText: String,
    rightText: String,
    title: String,
    showBottomBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
@import '../../styles/1px.less';
@import '../../styles/variable.less';

.vux-popup-header {
  display: flex;
  height: @popup-header-height;
  line-height: @popup-header-height;
  font-size: @popup-header-font-size;
  background-color: @popup-header-bg-color;
}
.vux-popup-header-title {
  flex: 1;
  text-align: center;
  color: @popup-header-title-text-color;
}
.vux-popup-header-left {
  padding-left: @popup-header-left-text-padding;
  color: @popup-header-left-text-color;
}
.vux-popup-header-right {
  padding-right: @popup-header-right-text-padding;
  color: @popup-header-right-text-color;
}
.vux-popup-header.vux-1px-b:after {
  border-color: #D9D9D9;
}
</style>
