<template>
    <i-button @click="mInfo">m信息</i-button>
    <i-button @click="open">打开</i-button>
    <i-button @click="info2">消息2</i-button>
    <i-button @click="info">消息</i-button>
    <i-button @click="success">成功</i-button>
    <i-button @click="warning">警告</i-button>
    <i-button @click="error">错误</i-button>
</template>
<script>
    import { Message, Button, Alert, Card, Notice, iButton } from 'iview';

    export default {
        components: {
            Message,
            Button,
            Alert,
            Card,
            Notice,
            iButton
        },
        props: {
        
        },
        data () {
            return {
            
            }
        },
        computed: {

        },
        methods: {
            open () {
                Notice.open({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                })
            },
            info () {
                Notice.info({
                    duration: 1000,
                    title: '这是通知标题',
//                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            info2 () {
                Notice.open({
                    duration: 1000,
                    title: '这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题'
                });
                Notice.info({
                    duration: 1000,
                    title: '这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题'
                });
                Notice.open({
                    duration: 1000,
                    title: '这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
                Notice.info({
                    duration: 1000,
                    title: '这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
                Notice.success({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
                Notice.warning({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
                Notice.error({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
            },
            success () {
                Notice.success({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
            },
            warning () {
                Notice.warning({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
            },
            error () {
                Notice.error({
                    duration: 1000,
                    title: '这是通知标题',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描'
                });
            },
            mInfo () {
                Message.info('飞机飞士大夫', 1000);
            }
        },
        ready () {
//            Message.config({
//                top: 50,
//                duration: 8
//            });
        }
    }
</script>