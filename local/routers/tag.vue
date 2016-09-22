<template>
    <div>
        <Button @click="start">start</Button>
        <Button @click="destroy">destroy</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="update">update</Button>
        <br><br>
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
        <br><br><br>
        <Timeline>
            <Timeline-item color="green">发布1.0版本</Timeline-item>
            <Timeline-item color="green">发布2.0版本</Timeline-item>
            <Timeline-item color="red">严重故障</Timeline-item>
            <Timeline-item color="blue">发布3.0版本</Timeline-item>
        </Timeline>
        <br><br><br>
        <Timeline pending>
            <Timeline-item>发布1.0版本</Timeline-item>
            <Timeline-item>发布2.0版本</Timeline-item>
            <Timeline-item>发布3.0版本</Timeline-item>
            <Timeline-item><a href="#">查看更多</a></Timeline-item>
        </Timeline>
        <br><br><br>
        <Timeline>
            <Timeline-item color="green">
                <Icon type="trophy" slot="dot"></Icon>
                <span>发布里程碑版本</span>
            </Timeline-item>
            <Timeline-item>发布1.0版本</Timeline-item>
            <Timeline-item>发布2.0版本</Timeline-item>
            <Timeline-item>发布3.0版本</Timeline-item>
        </Timeline>
        <br><br><br>
        <Timeline pending>
            <Timeline-item>发布1.0版本</Timeline-item>
            <Timeline-item>发布2.0版本</Timeline-item>
        </Timeline>
        <br><br><br>
    </div>
</template>
<script>
    import { Tag, LoadingBar, Button, Progress, Icon, Timeline } from 'iview';
    const ButtonGroup = Button.Group;
    const TimelineItem = Timeline.Item;
    export default {
        components: {
            Tag,
            Button,
            Progress,
            ButtonGroup,
            Icon,
            Timeline,
            TimelineItem
        },
        props: {
        
        },
        data () {
            return {
                percent: 0
            }
        },
        computed: {
        
        },
        methods: {
            start () {
                LoadingBar.start();
            },
            destroy () {
                LoadingBar.destroy();
            },
            finish () {
                LoadingBar.finish();
            },
            error () {
                LoadingBar.error();
            },
            update () {
                LoadingBar.update(50);
            },
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>