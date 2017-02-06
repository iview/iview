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
        this.items = JSON.parse(JSON.stringify(this.items));//todo hack 强制更新items
      },

      /**
       * 暂时废弃,使用JSON stringify parse方式
       * 强制触发item的更新
       * todo 考虑使用其他方式更新items
       * @param key
       * @param fuc
       */
//      refresh(key, fuc){
//        let temp = this[key];
//        this[key] = null;
//        this.$nextTick(function () {
//          this[key] = temp;
//          fuc && fuc();
//        });
//      },
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
        let hash = this.indexHash;
        let parent = item.__parentIndex && hash[item.__parentIndex];
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
        let hash = this.indexHash;
        let parent = __parentIndex && hash[__parentIndex];
        let nestedDepth = (function () {
          let result = 0;
          if (parent) {
            if (parent.nestedDepth) {
              result = parent.nestedDepth + 1;
            } else {
              result = 1;
            }
          }
          return result;
        })();
        let self = this;

        array.forEach(function (item) {
          item.__index = self.index++;
          hash[item.__index] = item;
          item.children = item.children || [];

          item.__nestedDepth = nestedDepth;
          item.__parentIndex = __parentIndex || '';
          item.__checked = !!item.__checked;
          item.__open = !!item.__open;
          item.__append = true;//todo 渲染控制
          item.__display = !!item.__display;

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
        let item = this.indexHash[node.item.__index];
        item.__open = item.__append = !item.__open;
        node.refresh('item');
      }

      , 'child-toggleChecked'(node, checked){
        let item = this.indexHash[node.item.__index];
        let children = item.children;
        let state;
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

      }

      , 'child-dragstart'(node){
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
          this.draggingNode = null;
        }

      }
    }
  }

</script>

<style lang="less">
</style></style>