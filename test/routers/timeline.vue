<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
<div>
    <Timeline>
        <Timeline-item>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </Timeline-item>
    </Timeline>
    <Timeline>
        <Timeline-item color="green">发布1.0版本</Timeline-item>
        <Timeline-item color="green">发布2.0版本</Timeline-item>
        <Timeline-item color="red">严重故障</Timeline-item>
        <Timeline-item color="blue">发布3.0版本</Timeline-item>
    </Timeline>
    <Timeline pending>
        <Timeline-item>发布1.0版本</Timeline-item>
        <Timeline-item>发布2.0版本</Timeline-item>
        <Timeline-item>发布3.0版本</Timeline-item>
        <Timeline-item><a href="#">查看更多</a></Timeline-item>
    </Timeline>
    <Timeline>
        <Timeline-item color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </Timeline-item>
        <Timeline-item>发布1.0版本</Timeline-item>
        <Timeline-item>发布2.0版本</Timeline-item>
        <Timeline-item>发布3.0版本</Timeline-item>
    </Timeline>
</div>
</template>
<script>
    export default {

    }
</script>
