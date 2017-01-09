<template>
  <li class="" @drop="dropHandle" @dragover="dragoverHandle">
    <Icon :class="switcherClasses" @click="toggleOpen"
          type="arrow-right-b" size="12"></Icon>
    <span :class="checkboxClasses">
      <span :class="checkboxInnerClasses" @click="toggleChecked"></span>
    </span>
    <a title="leaf" draggable="true" :class="nodeContentClass">
      <span :class="titleClassed">{{item.title}}</span>
    </a>
    <template v-if="item.children&&item.children.length">
      <ul v-show="open">
        <span></span>
        <Node :item="item" v-for="item in item.children"></Node>
      </ul>
    </template>
  </li>
</template>

<script type="text/ecmascript-6">
  import Icon from '../icon/icon.vue';
  const prefixCls = 'ivu-tree';
  export default{
    name: 'node'
    , props: ['item']
    , computed: {
      switcherClasses () {
        return [
          `${prefixCls}-switcher`,
          {
            [`invisible`]: !(this.item.children && this.item.children.length)
          }
        ];
      },
      checkboxClasses () {
        return [
          `${prefixCls}-checkbox`,
          {
            [`${prefixCls}-checkbox-checked`]: this.checked
          }
        ];
      },
      checkboxInnerClasses () {
        return `${prefixCls}-checkbox-inner`;
      },
      nodeContentClass () {
        return [
          `${prefixCls}-node-content-wrapper`,
          `${prefixCls}-node-content-wrapper-normal`
        ];
      },
      titleClassed () {
        return `${prefixCls}-title`;
      }
    }
    , data(){
      return {
        prefixCls: prefixCls,
        open: false,
        checked: false
      }
    },
    methods: {
      toggleOpen () {
        this.open = !this.open;
      },
      toggleChecked(){
        var children;
        this.checked = !this.checked;
        children = this.item.children;
        if (children && children.length) {
          this.$broadcast('toggleTo', this.checked);
        }
      },
      checkChildren(){
        var children = this.children;
        children.forEach(function (item, index) {
          item.checked = true;
        });
      },
      dropHandle(){
        console.log(arguments);
      },
      dragoverHandle(e){
        e.preventDefault();
        console.log(e);
      }
    },
    events: {
      toggleTo: function (checked) {
        this.checked = checked;
      }
    }
  }
</script>

<style lang="less">
  .invisible {
    visibility: hidden;
  }
</style>