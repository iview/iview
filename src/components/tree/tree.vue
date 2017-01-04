<template>
  <ul :class="[prefixCls]" style="overflow: hidden; width: auto; height: 100%;">
    <node v-for="item in items" :item="item"></node>
  </ul>
</template>

<script>

  import node from './node.vue';
  const prefixCls = 'ivu-tree';
  export default{
    data(){
      return {
        items: [
          {
            title: '管理控制台'
            , link: {path: '/old/dashboard', activeClass: 'active'}
            , icon: 'dashboard'
            , bg: 'danger'
            , children: []
          }
          , {
            title: '公众号管理'
            , link: {path: '/old/weixin', activeClass: 'active', replace: true}
            , icon: 'weixin'
            , bg: 'orange'
            , children: [
              {
                title: '公众号设置'
                , link: {path: '/old/weixin/setting', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '菜单管理'
                , link: {path: '/old/weixin/management', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
          , {
            title: '自动回复'
            , link: {path: '/old/reply', activeClass: 'active', replace: true}
            , icon: 'commenting'
            , bg: 'warning'
            , children: [
              {
                title: '文字回复'
                , link: {path: '/old/reply/text', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '图文回复'
                , link: {path: '/old/reply/textAndImage', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '音乐回复'
                , link: {path: '/old/reply/music', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '图片回复'
                , link: {path: '/old/reply/picture', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '语音回复'
                , link: {path: '/old/reply/voice', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '视频回复'
                , link: {path: '/old/reply/video', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '特殊回复'
                , link: {path: '/old/reply/special', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
          , {
            title: '公众号运营'
            , link: {path: '/old/operation', activeClass: 'active', replace: true}
            , icon: 'line-chart'
            , bg: 'success'
            , children: [
              {
                title: '文章助手'
                , link: {path: '/old/operation/acticle', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '裂变红包'
                , link: {path: '/old/operation/groupRedpack', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '流量红包'
                , link: {path: '/old/operation/flowRedpack', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
          , {
            title: '微店铺'
            , link: {path: '/old/store', activeClass: 'active', replace: true}
            , icon: 'university'
            , bg: 'primary-light'
            , children: [
              {
                title: '微店信息'
                , link: {path: '/old/store/info', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '微店设置'
                , link: {path: '/old/store/setting', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '活动管理'
                , link: {path: '/old/store/activity', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '产品管理'
                , link: {path: '/old/store/product', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '订单管理'
                , link: {path: '/old/store/order', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
          , {
            title: '微官网'
            , link: {path: '/old/site', activeClass: 'active', replace: true}
            , icon: 'mobile'
            , bg: 'primary'
            , children: [
              {
                title: '微官网模板'
                , link: {path: '/old/site/template', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '微官网设置'
                , link: {path: '/old/site/setting', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
          , {
            title: '业务管理'
            , link: {path: '/old/service', activeClass: 'active', replace: true}
            , icon: 'users'
            , bg: 'violet'
            , children: [
              {
                title: '课程管理'
                , link: {path: '/old/service/course', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '学员管理'
                , link: {path: '/old/service/student', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '教师管理'
                , link: {path: '/old/service/teacher', activeClass: 'active'}
                , icon: 'caret-right'
              }
              , {
                title: '科目管理'
                , link: {path: '/old/service/subject', activeClass: 'active'}
                , icon: 'caret-right'
              }
            ]
          }
        ],
        prefixCls: prefixCls
      }
    }
    , components: {
      node
    }
    , methods: {
      lll: function () {
        alert(0);
      }
    }
  }

</script>

<style lang="less">
  .nav {
    overflow: hidden;
    width: auto;
    height: 100%;
  }
</style>