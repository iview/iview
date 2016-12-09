<style>
    .ivu-col div.aaaaa{
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        background: rgba(0, 153, 229, .9);
    }
    .ivu-col:nth-child(odd) div.aaaaa{
        background: rgba(0, 153, 229, .7);
    }
</style>
<template>
    <Row>
        <i-col :xs="2" :sm="4" :md="6" :lg="8"><div class="aaaaa">Col 1</div></i-col>
        <i-col :xs="20" :sm="16" :md="12" :lg="8"><div class="aaaaa">Col 2</div></i-col>
        <i-col :xs="2" :sm="4" :md="6" :lg="8"><div class="aaaaa">Col 3</div></i-col>
    </Row>
    <br><br>
    <Row>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="aaaaa">Col 1</div></i-col>
        <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="aaaaa">Col 2</div></i-col>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="aaaaa">Col 3</div></i-col>
    </Row>
</template>
<script>
    export default {

    }
</script>
