<template>
  <div :class="classes">
    <span v-if="hasSlot" :class="slotClasses">
      <slot></slot>
    </span>
   </div>
</template>

<script>
import { oneOf } from '../../utils/assist';

const prefixCls = 'ivu-divider';

export default {
  name:'Divider',
  props: {
    type: {
      type: String,
      default() { return 'horizontal'; },
      validator (value) {
          return oneOf(value, ['horizontal', 'vertical']);
      }
    },
    orientation: {
      type: String,
      default() { return 'left'; },
      validator (value) {
          return oneOf(value, ['left', 'right']);
      }
    },
    dashed:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    hasSlot() {
      if(this.$slots.default) return true;
      else return false;
    },
    classes() {
      return [
        `${prefixCls}`, 
        `${prefixCls}-${this.type}`, 
        { 
          [`${prefixCls}-with-text-${this.orientation}`]: this.hasSlot,
          [`${prefixCls}-dashed`]: !!this.dashed
        }
      ];
    },
    slotClasses() {
      return [
        `${prefixCls}-inner-text`,
      ]
    }
  }
}
</script>

<style>

</style>
