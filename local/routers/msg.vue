<template>
    <Button @click="info">info</Button>
    <Button @click="success">success</Button>
    <Button @click="error">error</Button>
    <Button @click="warning">warning</Button>
    <Button @click="loading">手动消失</Button>
    <Button @click="destroy">destroy</Button>
</template>
<script>
    import { Message, Button } from 'iview';

    export default {
        components: {
            Message,
            Button
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
                Message.info('欢迎来到iView', 3, () => {
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