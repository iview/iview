<template>
  <li :class="nodeClasses" @drop="dropHandle" @dragover="dragoverHandle">
    <div :class="nodeContainerClasses">
      <Icon :class="switcherClasses" @click="toggleOpen"
            type="arrow-right-b" size="12"></Icon>
      <span :class="checkboxClasses">
        <span :class="checkboxInnerClasses" @click="toggleChecked"></span>
      </span>
      <a title="leaf" draggable="true" :class="nodeContentClass" @dragstart="dragstartHandle">
        <span :class="titleClasses">{{item.title}}</span>
      </a>
    </div>
    <template v-if="hasChildren">
      <ul v-if="item.__append" :class="childrenClasses">
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
            [`invisible`]: !(this.item.children && this.item.children.length),
            [`${prefixCls}-noline_close`]: this.item.__open
          }
        ];
      }
      , checkboxClasses () {
        return [
          `${prefixCls}-checkbox`,
          {
            [`${prefixCls}-checkbox-checked`]: this.item.__checked
          }
        ];
      }
      , checkboxInnerClasses () {
        return `${prefixCls}-checkbox-inner`;
      }
      , nodeContentClass () {
        return [
          `${prefixCls}-node-content-wrapper`,
          `${prefixCls}-node-content-wrapper-normal`
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
    },
    methods: {
      /**
       * todo 强制触发item的更新
       * @param key
       * @param fuc
       */
      refresh(key, fuc){
        let temp = this[key];
        this[key] = {};
        this.$nextTick(function () {
          this[key] = temp;
          fuc && fuc();
        });
      },
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
      },
      /**
       * todo 点击时参数为$event,处理事件时参数为state,应该分开处理
       * @param parentTargetState
       */
      toggleChecked(parentTargetState){
        let targetState;
        if (typeof parentTargetState === 'boolean') {
          targetState = parentTargetState;
        } else {
          targetState = !this.item.__checked;
        }
        this.item.__checked = targetState;
        this.$broadcast('parent-toggle-checked', targetState);
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
    events: {
      'parent-toggle-checked'(parentTargetState){
        this.toggleChecked(parentTargetState);
      }
      , 'child-toggle-open'(parentTargetState){
        this.toggleOpen(parentTargetState);
      }
    }
  }
</script>

<style lang="less" scoped>
  .invisible {
    visibility: hidden;
  }
</style>