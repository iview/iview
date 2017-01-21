<template>
  <li :class="nodeClasses" @drop="dropHandle" @dragover="dragoverHandle">
    <div :class="nodeContainerClasses">
      <Icon :class="switcherClasses" @click="toggleOpen"
            type="arrow-right-b" size="12"></Icon>
      <span :class="checkboxClasses">
        <span :class="checkboxInnerClasses" @click="toggleChecked"></span>
      </span>
      <a title="leaf" draggable="true" :class="nodeContentClass" @dragstart="dragstartHandle">
        <span :class="titleClassed">{{item.title}}</span>
      </a>
    </div>
    <template v-if="hasChildren">
      <ul v-if="item.__append">
        <span></span>
        <Node :item="cItem" v-for="cItem in item.children"
        ></Node>
      </ul>
    </template>
  </li>
</template>

<script type="text/ecmascript-6">
  import Icon from '../icon/icon.vue';
  const prefixCls = 'ivu-tree';
  export default{
    name: 'node'
    , props: [
      'item'
    ]
    , computed: {
      hasChildren(){
        return !!(this.item.children && this.item.children.length);
      },
      nodeClasses(){
        return [`${prefixCls}-node`,
          {
            [`${prefixCls}-node_open`]: this.item.__open
          }]
      },
      nodeContainerClasses(){
        return [`${prefixCls}-node-container`]
      },
      switcherClasses () {
        return [
          `${prefixCls}-switcher`,
          {
            [`invisible`]: !(this.item.children && this.item.children.length),
            [`${prefixCls}-noline_close`]: this.item.__open
          }
        ];
      },
      checkboxClasses () {
        return [
          `${prefixCls}-checkbox`,
          {
            [`${prefixCls}-checkbox-checked`]: this.item.__checked
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
        prefixCls: prefixCls
      }
    },
    methods: {
      /**
       * todo 强制触发item的更新
       * @param key
       * @param fuc
       */
      refresh(key, fuc){
        var temp = this[key];
        this[key] = {};
        this.$nextTick(function () {
          this[key] = temp;
          fuc && fuc();
        });
      },
      toggleOpen () {
        this.$dispatch('child-toggleOpen', this);
      },
      toggleChecked(){
        this.$dispatch('child-toggleChecked', this);
      },
      dropHandle(){
        this.$dispatch('child-drop', this);
      },
      dragoverHandle(e){
        e.preventDefault();
      },
      dragstartHandle(){
        this.$dispatch('child-dragstart', this);
      }
    },
    events: {}
  }
</script>

<style lang="less">
  .invisible {
    visibility: hidden;
  }
</style>