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
                <Icon type="close-circled" slot="dot"></Icon>
                <p class="time">1976年</p>
                <p class="content">Apple I 问世</p>
            </Timeline-item>
            <Timeline-item>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh</p>
            </Timeline-item>
        </Timeline>
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
            Timeline,
            TimelineItem,
            Icon
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