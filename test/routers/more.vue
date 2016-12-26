<style scoped>
    .demo-row{
        margin-bottom: 5px;
        background-image: -webkit-linear-gradient(0deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
        background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    }
    .demo-col{
        color: #fff;
        padding: 30px 0;
        text-align: center;
        font-size: 18px;
        background: rgba(0, 153, 229, .7);
    }
    .demo-col.light{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col.light{
        background: rgba(0, 153, 229, .3);
    }

    .ivu-col, .ivu-col div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .gutter .ivu-col{
        background: transparent !important;
    }
     .ivu-col:nth-child(odd), .ivu-col:nth-child(odd) div{
        background: rgba(0, 153, 229, .7);
    }

    .code-row-bg{
        background: rgba(0,0,0,.05);
    }
</style>
<template>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
</template>
<script>
    export default {

    }
</script>
