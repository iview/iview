<template>
    <div>
        <Button @click="start">start</Button>
        <Button @click="destroy">destroy</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="update">update</Button>
        <br><br>
        <Progress :percent="25"></Progress>
        <Progress :percent="45" status="success"></Progress>
        <Progress :percent="45" status="active"></Progress>
        <Progress :percent="65" status="wrong"></Progress>
        <Progress :percent="100"></Progress>
        <Progress :percent="25" hide-info></Progress>
        <Progress :percent="percent"></Progress>
        <Button-group size="large">
            <Button icon="ios-plus-empty" @click="add"></Button>
            <Button icon="ios-minus-empty" @click="minus"></Button>
        </Button-group>
        <Progress :percent="25" :stroke-width="5"></Progress>
        <Progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
        </Progress>
    </div>
</template>
<script>
    import { Tag, LoadingBar, Button, Progress, Icon } from 'iview';
    const ButtonGroup = Button.Group;
    export default {
        components: {
            Tag,
            Button,
            Progress,
            ButtonGroup,
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