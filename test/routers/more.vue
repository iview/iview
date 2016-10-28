<style scoped>
    /*body{*/
        /*padding: 50px;*/
        /*height: 2000px;*/
    /*}*/
    .example-badge{
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>
<template>

    <Badge count="10">
        <a class="example-badge"></a>
    </Badge>

    <Tag color="green" closable @on-close="closed">管理员</Tag>
    <Progress :percent="50" status="active" :stroke-width="20">

    </Progress>

    <Circle :percent="p">
        {{p}}%
    </Circle>
    <br><br>
    <Timeline pending>
        <Timeline-item color="red">发布3.0版本</Timeline-item>
        <Timeline-item color="green">
            <Icon type="time" slot="dot"></Icon>
            发布2.0版本
        </Timeline-item>
        <Timeline-item color="#ff6600">发布1.0版本</Timeline-item>
        <Timeline-item>发布里程碑版本</Timeline-item>
    </Timeline>
    <br><br>
    <Affix :offset-top="50" @on-change="affixChange">
        <Button>固定的图钉</Button>
    </Affix>
    <Back-top @on-click="backtop">

    </Back-top>

    <div style="width: 200px;height: 100px;border:1px solid #b2b2b2;position:relative">
        <!--<Spin size="large" fix>加载中...</Spin>-->
        <Spin size="large" fix v-if="spinShow">加载中...</Spin>
    </div>
    <div @click="spinShow = !spinShow">消失</div>
    <br><br>

    <Button @click="nextStep">下一步</Button>
    <Button @click="step_status = 'error'">步骤3切换为错误</Button>
    <Button @click="step_process = 'error'">切换steps状态为error</Button>
    <Breadcrumb separator="<b>=></b>">
        <Breadcrumb-item href="/index">首页</Breadcrumb-item>
        <Breadcrumb-item href="/my">我的</Breadcrumb-item>
        <Breadcrumb-item>
            <Icon type="photo"></Icon>照片
        </Breadcrumb-item>
    </Breadcrumb>
    <br>
    <Steps :current="1" status="error">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <Button @click="testStatus = 'process'">change Status</Button>
</template>
<script>
    import { Badge, Tag, Progress, Circle, Timeline, Icon, Affix, Button, BackTop, Spin, Steps, Breadcrumb} from 'iview';
    const TimelineItem = Timeline.Item;
    const Step = Steps.Step;
    const BreadcrumbItem = Breadcrumb.Item;

    export default {
        components: {
            Badge,
            Tag,
            Progress,
            Circle,
            Timeline,
            TimelineItem,
            Icon,
            Affix,
            Button,
            BackTop,
            Spin,
            Steps,
            Step,
            Breadcrumb,
            BreadcrumbItem
        },
        props: {
        
        },
        data () {
            return {
                total: 512,
                p: 50,
                step_current: 0,
                step_status: 'wait',
                step_process: 'process',
                spinShow: true,
                testStatus: 'wait'
            }
        },
        computed: {
        
        },
        methods: {
            closed (e) {
                console.log(e)
            },
            affixChange (status) {
                console.log(status)
            },
            backtop () {
                console.log('toppp')
            },
            nextStep () {
                this.step_current += 1;
            }
        },
        ready () {
            setTimeout(() => {
                this.p = 60;
            }, 1000)
        }
    }
</script>