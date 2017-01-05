<template>
  <ul :class="[prefixCls]">
    <Node v-for="item in items" :item="item"></Node>
  </ul>
</template>

<script>

  import Node from './node.vue';
  const prefixCls = 'ivu-tree';
  export default{
    props: ['items'],
    data(){
      return {
        prefixCls: prefixCls
      }
    }
    , components: {
      Node
    }
    , methods: {
    }
  }

</script>

<style lang="less">
</style></style>