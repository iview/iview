<style lang="less">
    .demo-circle-custom{
    & h1{
          color: #3f414d;
          font-size: 28px;
          font-weight: normal;
      }
    & p{
          color: #657180;
          font-size: 14px;
          margin: 10px 0 15px;
      }
    & span{
          display: block;
          padding-top: 15px;
          color: #657180;
          font-size: 14px;
    &:before{
         content: '';
         display: block;
         width: 50px;
         height: 1px;
         margin: 0 auto;
         background: #e0e3e6;
         position: relative;
         top: -15px;
     };
    }
    & span i{
          font-style: normal;
          color: #3f414d;
      }
    }
</style>
<template>
    <i-circle
            :size="250"
            :trail-width="4"
            :stroke-width="5"
            :percent="75"
            stroke-linecap="square"
            stroke-color="#43a3fb">
        <div class="demo-circle-custom">
            <h1>{{ 42001776 }}</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </i-circle>
</template>
<script>
    export default {

    }
</script>
