<template>
    <div>
        <Button @click="start">start</Button>
        <Button @click="destroy">destroy</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="update">update</Button>
        <br><br>
        <Page :total="100"></Page>
        <Page :total="100" show-sizer></Page>
        <Page :total="100" show-elevator></Page>
        <Page :total="100" show-total></Page>
        <br><br>
        <Page :current="2" :total="50" simple></Page>
        <br>
        <Page :total="400" size="small"></Page>
        <br>
        <Page :total="400" size="small" show-elevator show-sizer></Page>
        <br>
        <Page :total="400" size="small" show-total></Page>
    </div>
</template>
<script>
    import { Tag, LoadingBar, Button, Progress, Icon, Timeline, Page } from 'iview';
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
            Icon,
            Page
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