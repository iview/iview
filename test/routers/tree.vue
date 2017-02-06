<template>
  <Tree :items="items"></Tree>
</template>

<script>
  import Tree from 'iview';
  export default{
    data(){
      return {
        items: [
          {
            title: '管理控制台'
            , children: []
          }
          , {
            title: '公众号管理'
            , children: [
              {
                title: '公众号设置'
                , children: [
                {
                  title: '哇哦'
                }
              ]
              }
              , {
                title: '菜单管理'
              }
            ]
          }
          , {
            title: '自动回复'
            , children: [
              {
                title: '文字回复'
              }
              , {
                title: '图文回复'
              }
              , {
                title: '音乐回复'
              }
              , {
                title: '图片回复'
              }
              , {
                title: '语音回复'
              }
              , {
                title: '视频回复'
              }
              , {
                title: '特殊回复'
              }
            ]
          }
          , {
            title: '公众号运营'
            , children: [
              {
                title: '文章助手'
              }
              , {
                title: '裂变红包'
              }
              , {
                title: '流量红包'
              }
            ]
          }
          , {
            title: '微店铺'
            , children: [
              {
                title: '微店信息'
              }
              , {
                title: '微店设置'
              }
              , {
                title: '活动管理'
              }
              , {
                title: '产品管理'
              }
              , {
                title: '订单管理'
              }
            ]
          }
          , {
            title: '微官网'
            , children: [
              {
                title: '微官网模板'
              }
              , {
                title: '微官网设置'
              }
            ]
          }
          , {
            title: '业务管理'
            , children: [
              {
                title: '课程管理'
              }
              , {
                title: '学员管理'
              }
              , {
                title: '教师管理'
              }
              , {
                title: '科目管理'
              }
            ]
          }
        ]
      }
    }
    , components: {}
    , methods: {}
  }
</script>

<style lang="less">
</style>