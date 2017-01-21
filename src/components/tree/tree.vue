<template>
  <ul :class="[prefixCls]">
    <Node v-for="item in items"
          :item="item"
    >

    </Node>
  </ul>
</template>

<script>

  import Node from './node.vue';
  const prefixCls = 'ivu-tree';
  export default{
    props: ['items'],
    data(){
      return {
        prefixCls: prefixCls,
        draggingNode: null,
        nestedDepthHash: {},
        index: 0,
        indexHash: {}
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
        this.refresh('items');
      },

      /**
       * 强制触发item的更新
       * todo 考虑使用其他方式更新items
       * @param key
       * @param fuc
       */
      refresh(key, fuc){
        var temp = this[key];
        this[key] = null;
        this.$nextTick(function () {
          this[key] = temp;
          fuc && fuc();
        });
      },
      /**
       * 当父级被选中时全选子元素
       * @param list
       * @param checked
       */
      checkChildren(list, checked){
        list.forEach(function (item) {
          item.__checked = checked;
          if (item.children && item.children.length) {
            this.checkChildren(item.children, checked);
          }
        }.bind(this));
      },
      /**
       * 展开所有父元素
       * @param item
       */
      openParent(item){
        var hash = this.indexHash;
        var parent = item.__parentIndex && hash[item.__parentIndex];
        if (parent) {
          parent.__open = parent.__append = true;
          this.openParent(parent);
        }
      },
      /**
       * 展开嵌套的元素并设置
       * __index  唯一索引
       * __parentIndex  父索引
       * __nestedDepth  嵌套深度
       * __checked  选中
       * __open  展开子元素
       * __append  todo 是否添加子元素DOM
       * @param array
       * @param __parentIndex
       */
      setIdHash(array, __parentIndex) {
        var hash = this.indexHash;
        var parent = __parentIndex && hash[__parentIndex];
        var nestedDepth = (function () {
          var result = 0;
          if (parent) {
            if (parent.nestedDepth) {
              result = parent.nestedDepth + 1;
            } else {
              result = 1;
            }
          }
          return result;
        })();
        var self = this;

        array.forEach(function (item) {
          item.__index = self.index++;
          hash[item.__index] = item;
          item.children = item.children || [];

          item.__nestedDepth = nestedDepth;
          item.__parentIndex = __parentIndex || '';
          item.__checked = !!item.__checked;
          item.__open = !!item.__open;
          item.__append = !!item.__append;

          if (item.children && item.children.length) {
            self.setIdHash(item.children, item.__index);
          }
        });

        this.nestedDepthHash[nestedDepth] = this.nestedDepthHash[nestedDepth] || [];

        this.nestedDepthHash[nestedDepth] = this.nestedDepthHash[nestedDepth].concat(array);

      }
    }
    , events: {
      'child-toggleOpen'(node){
        var item = this.indexHash[node.item.__index];
        item.__open = item.__append = !item.__open;
        node.refresh('item');
      },

      'child-toggleChecked'(node, checked){
        var item = this.indexHash[node.item.__index];
        var children = item.children;
        var state;
        if (typeof checked === 'undefined') {
          state = !item.__checked;
        } else {
          state = checked;
        }
        item.__checked = state;


        if (children && children.length) {
          this.checkChildren(children, state);
        }

        node.refresh('item');

      },

      'child-dragstart'(node){
        this.draggingNode = node;
      },

      'child-drop'(node){
        if (this.draggingNode) {
          var list;
          var dragNode = this.draggingNode;
          var dropNode = node;
          var dragItem = this.indexHash[dragNode.item.__index];
          var dropItem = this.indexHash[dropNode.item.__index];

          if (dragItem.__nestedDepth) {
            list = this.indexHash[dragItem.__parentIndex].children;
          } else {
            list = this.items;
          }

          list.forEach(function (item, index) {
            if (item.__index == dragItem.__index) {
              list.splice(index, 1);
            }
          }.bind(this));

          dragItem.__nestedDepth = dropItem.__nestedDepth + 1;
          dragItem.__parentIndex = dropItem.__index;
          dropItem.children.push(dragItem);
          this.openParent(dragItem);

          dropNode.refresh('item');

          this.draggingNode = null;
        }

      }
    }
  }

</script>

<style lang="less">
</style></style>