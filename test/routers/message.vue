<template>
    <Button @click="info">info</Button>
    <Button @click="success">success</Button>
    <Button @click="error">error</Button>
    <Button @click="warning">warning</Button>
    <Button @click="loading">手动消失</Button>
    <Button @click="destroy">destroy</Button>
    <Alert closable>消息提示文案</Alert>
    <Alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Card :bordered="false">
        <p slot="title">无边框标题</p>
        <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
    </Card>
</template>
<script>
    import { Message, Button, Alert, Card } from 'iview';

    export default {
        components: {
            Message,
            Button,
            Alert,
            Card
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
            info () {
                Message.info('欢迎来到iView', 1000, () => {
                    console.log('close info');
                });
            },
            success () {
                Message.success('成功啦', 5, () => {
                    console.log('close successs');
                });
            },
            error () {
                Message.error('错误啦');
            },
            warning () {
                Message.warning('来个警告');
            },
            loading () {
                const hide = Message.loading('我是loading', 0);

                setTimeout(hide, 5000);
            },
            destroy () {
                Message.destroy();
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