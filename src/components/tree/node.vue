<template>
  <li :class="nodeClasses" @drop="dropHandle" @dragover="dragoverHandle">
    <div :class="nodeContainerClasses">
      <Icon :class="switcherClasses" @click="toggleOpen"
            type="arrow-right-b" size="12"></Icon>
      <span v-if="checkbox" :class="checkboxClasses">
        <span :class="checkboxInnerClasses" @click="toggleChecked"></span>
      </span>
      <a v-if="draggable" draggable title="leaf" :class="nodeContentClass" @dragstart="dragstartHandle">
        <span :class="titleClasses">{{item.title}}</span>
      </a>
      <a v-else title="leaf" :class="nodeContentClass">
        <span :class="titleClasses">{{item.title}}</span>
      </a>
    </div>
    <template v-if="hasChildren">
      <ul v-if="item.__append" :class="childrenClasses">
        <Node v-for="cItem in item.children"
              :item="cItem"
              :checkbox="checkbox"
              :draggable="draggable"
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
      , 'draggable'
      , 'checkbox'
    ]
    , computed: {
      hasChildren(){
        return !!(this.item.children && this.item.children.length);
      }
      , nodeClasses(){
        return [`${prefixCls}-node`,
          {
            [`${prefixCls}-node_open`]: this.item.__open
          }]
      }
      , nodeContainerClasses(){
        return [`${prefixCls}-node-container`]
      }
      , switcherClasses () {
        return [
          `${prefixCls}-switcher`,
          {
            [`invisible`]: !(this.item.children && this.item.children.length)
            , [`${prefixCls}-noline_close`]: this.item.__open
          }
        ];
      }
      , checkboxClasses () {
        return [
          `${prefixCls}-checkbox`
          , {
            [`${prefixCls}-checkbox-checked`]: this.item.__checked
          }
        ];
      }
      , checkboxInnerClasses () {
        return `${prefixCls}-checkbox-inner`;
      }
      , nodeContentClass () {
        return [
          `${prefixCls}-node-content-wrapper`
          , `${prefixCls}-node-content-wrapper-normal`
        ];
      }
      , titleClasses () {
        return `${prefixCls}-title`;
      }
      , childrenClasses(){
        return [`${prefixCls}-children`
          , {
            [`${prefixCls}-children_display`]: this.item.__display
          }
        ];
      }
    }
    , data(){
      return {
        prefixCls: prefixCls
      }
    }
    , methods: {

      toggleOpen () {
        let targetState;
        targetState = !this.item.__open;
        this.item.__append = true;//todo 应该用__append控制渲染,__open控制开闭,以避免不必要的渲染,但是目前使用node.$parent完成父子组件通信,暂时必须全部渲染
        if (targetState) {
          this.item.__display = targetState;
          this.$nextTick(function () {
            this.item.__open = targetState;
          }.bind(this));
        } else {
          this.item.__open = targetState;
          this.item.__display = targetState;
        }
      }
      /**
       * todo 点击时参数为$event,处理事件时参数为state,应该分开处理
       * @param parentCheckedState
       */
      , toggleChecked(parentCheckedState){
        let targetState;
        if (typeof parentCheckedState === 'boolean') {
          targetState = parentCheckedState;
        } else {
          targetState = !this.item.__checked;
        }
        this.item.__checked = targetState;
        this.$broadcast('parent-toggle-checked', targetState);
        if (this.item.children.length === 0) {
          this.$parent.$emit('child-toggle-checked', targetState);
        }
      }
      , dropHandle(){
        this.$dispatch('child-drop', this);
      }
      , dragoverHandle(e){
        e.preventDefault();
      }
      , dragstartHandle(){
        this.$dispatch('child-dragstart', this);
      }
    }
    , events: {
      'parent-toggle-checked'(parentCheckedState){
        this.toggleChecked(parentCheckedState);
      }
      , 'child-toggle-checked'(childCheckedState){
        let targetState;
        if (childCheckedState) {
          let isAllChecked = true;
          this.item.children.forEach(function (cItem) {
            if (!cItem.__checked) {
              isAllChecked = false;
            }
            return false;
          });
          targetState = isAllChecked;

        } else {
          targetState = false;
        }
        this.item.__checked = targetState;
        this.$parent.$emit('child-toggle-checked', targetState);
      }
    }
  }
</script>

<style lang="less">
  .invisible {
    visibility: hidden;
  }
</style>