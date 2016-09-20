<template>
    <Alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Button @click="open">open</Button>
    <Button @click="close">close key = key111</Button>
    <Button @click="destroy">destroy</Button>
</template>
<script>
    import { Notice, Button, Message, Alert } from 'iview';

    export default {
        components: { Notice, Button, Alert },
        props: {
        
        },
        data () {
            return {
                key: 'key111'
            }
        },
        computed: {
        
        },
        methods: {
            open () {
                const title = '这是通知的标题';
                const desc = '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述';

                Notice.open({
                    title: title,
                    desc: desc,
                });
                Notice.info({
                    title: title,
                    desc: desc,
                });
                Notice.success({
                    title: title,
                    desc: desc,
                    key: this.key
                });
                Notice.warning({
                    title: title,
                    desc: desc,
                });
                Notice.error({
                    title: title,
                    desc: desc,
                });
                Message.info('放假海口市', 0);
            },
            close () {
                Notice.close(this.key);
            },
            destroy () {
                Notice.destroy();
            }
        },
        ready () {
//            this.open();
            Notice.config({
                top: 1,
                duration: 0
            })
        }
    }
</script>