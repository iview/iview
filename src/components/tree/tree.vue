<template>
  <ul :class="[prefixCls]">
    <Node v-for="item in items"
          :item="item"
          :draggable="draggable"
          :checkbox="checkbox"
    >

    </Node>
  </ul>
</template>

<script>

  import Node from './node.vue';
  const prefixCls = 'ivu-tree';
  export default{
    props: ['items', 'draggable', 'checkbox'],
    data(){
      return {
        prefixCls: prefixCls
        , draggingNode: null
        , index: 0
        , indexHash: {}
      }
    }
    , computed: {}
    , ready(){
      this.initDragableItem();
    }
    , components: {
      Node
    }
    , methods: {
      initDragableItem(){
        this.setIdHash(this.items);
        this.items = JSON.parse(JSON.stringify(this.items));//todo hack 强制更新items
      }


      /**
       * 展开嵌套的元素并设置
       * __index  唯一索引
       * __parentIndex  父索引
       * __checked  选中
       * __open  展开子元素
       * __append  todo 是否添加子元素DOM
       * @param array
       * @param __parentIndex
       */
      , setIdHash(array, __parentIndex) {
        let hash = this.indexHash;
        let self = this;

        array.forEach(function (item) {
          item.__index = self.index++;
          hash[item.__index] = item;
          item.children = item.children || [];

          item.__parentIndex = __parentIndex || '';
          item.__checked = !!item.__checked;
          item.__open = !!item.__open;
          item.__append = true;//todo 渲染控制
          item.__display = !!item.__display;

          if (item.children && item.children.length) {
            self.setIdHash(item.children, item.__index);
          }
        });

      }
    }
    , events: {

      'child-dragstart'(node){
        this.draggingNode = node;
      }

      , 'child-drop'(node){
        if (this.draggingNode) {
          let list;
          let dragNode = this.draggingNode;
          let dropNode = node;
          let dragItem = dragNode.item;
          let dropItem = dropNode.item;
          if (dragNode.$parent.item) {
            list = dragNode.$parent.item.children;
          } else {
            list = this.items;
          }
          list.forEach(function (item, index) {
            if (item.__index == dragItem.__index) {
              list.splice(index, 1);
            }
          }.bind(this));

          dropItem.children.push(dragItem);
          dropItem.__open = false;
          dropNode.toggleOpen();
          dropNode.$emit('child-toggle-checked', dragItem.__checked);
          this.draggingNode = null;
        }
      }

    }
  }

</script>

<style lang="less">

</style>