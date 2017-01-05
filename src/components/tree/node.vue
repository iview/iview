<template>
  <li class="">
    <Icon :class="[prefixCls + '-switcher',{invisible:!(item.children&&item.children.length)}]" @click="toggleOpen"
          type="arrow-right-b" size="12"></Icon>
    <span :class="[prefixCls + '-checkbox',prefixCls + '-checkbox-checked']">
      <span :class="[prefixCls + '-checkbox-inner']"></span>
    </span>
    <a title="leaf" :class="[prefixCls + '-node-content-wrapper',prefixCls + '-node-content-wrapper-normal']">
      <span class="[prefixCls-'title']">{{item.title}}</span>
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
    , data(){
      return {
        prefixCls: prefixCls,
        open: (()=> {
          return false;
        })(),
        toggleOpen: ()=> {
          this.open = !this.open;
        }
      }
    }
  }
</script>

<style lang="less">
  .invisible {
    visibility: hidden;
  }
</style>