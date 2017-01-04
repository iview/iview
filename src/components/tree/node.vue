<template>
  <li class="">
    <Icon :class="[prefixCls + '-switcher']" type="arrow-right-b" size="12"></Icon>
    <span :class="[prefixCls + '-checkbox',prefixCls + '-checkbox-checked']">
      <span :class="[prefixCls + '-checkbox-inner']"></span>
    </span>
    <a title="leaf" class="ant-tree-node-content-wrapper ant-tree-node-content-wrapper-normal">
      <span class="ant-tree-title">{{item.title}}</span>
    </a>
    <template v-if="item.children&&item.children.length">
      <ul>
        <node :item="item" v-for="item in item.children"></node>
      </ul>
      <i class="fa fa-caret-right icon-has-ul"></i>
    </template>
  </li>
</template>

<script>
  import Icon from '../icon/icon.vue';
  import node from './node.vue';
  const prefixCls = 'ivu-tree';
  export default{
    name: 'node'
    , props: ['item']
    , data(){
      return {
        prefixCls: prefixCls
      }
    }
  }
</script>

<style lang="less">
</style>