<template>
  <div
    class="weui-cell"
    :class="{
      'vux-tap-active': isLink || !!link,
      'weui-cell_access': isLink || !!link,
      'vux-cell-no-border-intent': !borderIntent,
      'vux-cell-disabled': disabled
    }"
    :style="style"
    @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="vux-cell-bd" :class="{'vux-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="vux-label" :style="labelStyles" :class="labelClass" v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </inline-desc>
    </div>
    <div class="weui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{ value }}</slot>
      <v-no-ssr>
        <i class="weui-loading" v-if="isLoading"></i>
      </v-no-ssr>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc'
import { go } from '../../libs/router'
import props from './props'
import cleanStyle from '../../libs/clean-style'
import getParentProp from '../../libs/get-parent-prop'

export default {
  name: 'cell',
  components: {
    InlineDesc
  },
  props: props(),
  created () {
    /* istanbul ignore if */
    if (typeof SUPPORT_SSR_TAG === 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest')
    }
  },
  beforeMount () {
    this.hasTitleSlot = !!this.$slots.title
    /* istanbul ignore if */
    if (this.$slots.value && process.env.NODE_ENV === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代')
    }
  },
  computed: {
    labelStyles () {
      return cleanStyle({
        width: getParentProp(this, 'labelWidth'),
        textAlign: getParentProp(this, 'labelAlign'),
        marginRight: getParentProp(this, 'labelMarginRight')
      })
    },
    valueClass () {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      }
    },
    labelClass () {
      return {
        'vux-cell-justify': getParentProp(this, 'justify') === 'justify'
      }
    },
    style () {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        }
      }
    }
  },
  methods: {
    onClick () {
      /* istanbul ignore next */
      !this.disabled && go(this.link, this.$router)
    }
  },
  data () {
    return {
      hasTitleSlot: true,
      hasMounted: false
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/tap.less';
@import '../../styles/weui/base/mixin/setArrow.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui-loading/weui-loading.less';

.vux-cell-primary {
  flex: 1;
}
.vux-label {
  display: block;
  word-wrap: break-word;
  word-break: break-all;
}
.weui-cell__ft .weui-loading {
  display: block;
}
.weui-cell__ft.vux-cell-align-left {
  text-align: left;
}
.weui-cell.vux-cell-no-border-intent:before {
  left: 0;
}
.weui-cell_access .weui-cell__ft.vux-cell-arrow-down:after {
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
}
.weui-cell_access .weui-cell__ft.vux-cell-arrow-up:after {
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
}
.vux-cell-arrow-transition:after {
  transition: transform 300ms;
}
.vux-cell-disabled {
  .vux-label {
    color: #b2b2b2;
  }
  &.weui-cell_access .weui-cell__ft:after {
    border-color: @cell-disabled-arrow-color;
  }
}
</style>
