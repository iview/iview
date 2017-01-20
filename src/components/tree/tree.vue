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
       * todo
       * 能用其他方式更新items吗,我试过computed,但是我只希望计算一次
       * 也就是说computed中也需要额外的判断,似乎并没有更加优雅
       * @param key
       * @param fuc
       */
      refresh(key, fuc){

//        setTimeout(function(){
//          this[key]=temp;
//          fuc&&fuc();
//        }.bind(this),0);

        var temp = this[key];
        this[key] = null;
        this.$nextTick(function () {
          this[key] = temp;
          fuc && fuc();
        });

      },
      checkChildren(list, checked){
        list.forEach(function (item) {
          item.__checked = checked;
          if (item.children && item.children.length) {
            this.checkChildren(item.children, checked);
          }
        }.bind(this));
      },
      openParent(item){
        var hash = this.indexHash;
        var parent = item.__parentIndex && hash[item.__parentIndex];
        if (parent) {
          parent.__open = parent.__append = true;
          console.log(parent.__index);
          this.openParent(parent);
        }
      },
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
        this.refresh('items');
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

        this.refresh('items');
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

          this.refresh('items', function () {
            this.openParent(dragItem);
            this.refresh('items', function () {
              console.log(this.items);
            }.bind(this));
          }.bind(this));

          this.draggingNode = null;
        }

      }
    }
  }

</script>

<style lang="less">
</style></style>