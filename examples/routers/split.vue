<template>
  <div class="split-pane-page-wrapper">
    <Split v-model="offset" @on-moving="handleMoving">
      <div slot="left" class="pane left-pane">
        <Split v-model="offsetVertical" mode="vertical" @on-moving="handleMoving">
          <div slot="top" class="pane top-pane"></div>
          <div slot="bottom" class="pane bottom-pane"></div>
          <div slot="trigger" class="custom-trigger">
            <Icon class="trigger-icon" :size="22" type="android-more-vertical" color="#000000"/>
          </div>
        </Split>
      </div>
      <div slot="right" class="pane right-pane"></div>
    </Split>
  </div>
</template>

<script>
export default {
  name: 'split_pane_page',
  data () {
    return {
      offset: 0.6,
      offsetVertical: '250px'
    }
  },
  methods: {
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    }
  }
}
</script>

<style lang="less">
.center-middle{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.split-pane-page-wrapper{
  height: 600px;
  .pane{
    width: 100%;
    height: 100%;
    &.left-pane{
      background: sandybrown;
    }
    &.right-pane{
      background: palevioletred;
    }
    &.top-pane{
      background: sandybrown;
    }
    &.bottom-pane{
      background: palevioletred;
    }
  }
  .custom-trigger{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    .center-middle;
    box-shadow: 0 0 6px 0 rgba(28, 36, 56, 0.4);
    cursor: row-resize;
    i.trigger-icon{
      .center-middle;
    }
  }
}
</style>
