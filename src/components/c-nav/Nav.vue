<template>
    <div ref="nav" class="nav">
        <div class="nav-left">
            <div class="back-area" id="back" @click="back()">
                <Button type="text" icon="fanhui" style="color:#22d8d6;font-size:16px"></Button>
            </div>
            <span class="click-size size" id="btn2click" @click="btn2click">{{btn2}}</span>
        </div>
        <div class="nav-middle">
            <span class="title">{{title}}</span>
        </div>
        <div class="nav-right">
            <slot>
                <div class="nav-right-content" id="btn3click" @click="btn3clcik">
                    <span class="click-size size" id="btn3">{{btn3}}</span>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CJCNav',
    props: ['title', 'btn2', 'btn3'],
    methods: {
        /**
         * 触发btn2按钮自定义函数
         */
        btn2click() {
            this.$emit('btn2click')
        },
        /**
         * 触发btn3按钮自定义函数
         */
        btn3clcik() {
            this.$emit('btn3click')
        },
        /**
         * 触发返回按钮自定义函数
         */
        back() {
            this.$emit('customRouter')
        }
    }
}
</script>

<style lang="less">
@import "../../styles/custom.less";
@navColor: #ffffff;//nav背景颜色
@navTextColor: #232323;// nav字体颜色
@navHeight: 50px; // nav高度
.nav{
  width: 100%;
  height: 50px;
  background-color: @navColor;
  color: @navTextColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  z-index: 9;
  border-bottom: 1px solid #E4E4E4;
  // box-shadow: 0 2px 3px #eaeaea;
  .click-size.size{
    color: @primary-color;
    font-weight: bolder;
    font-size: 15px;
  }
  .title{
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 2px;
  }
}
.nav-left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 31%;
  span{
    margin-right: 5px;
  }
}
.nav-right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 31%;
  height: @navHeight;
  .nav-right-text{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 65px;
    height: @navHeight;
    &:active{
      background-color: @navColor;
    }
  }
  .nav-right-content{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    width: 100%;
    height: @navHeight;
    margin-right: 10px;
    img{
      width: 25px;
    }
  }
}
.back-area{
  height: @navHeight;
  width: 69%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: @navHeight;
    margin-right: 5px;
  }
  &:active{
    background-color: @navColor;
  }
  .text{
    color: #0093dd;
    font-size: 15px;
  }
}
.back-img{
  overflow: hidden;
  img{
    height: 18px !important;
  }
}
.information-img{
  height: 18px !important;
  margin-right: 2px;
}

</style>
