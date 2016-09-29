<style>

</style>
<template>
    <Button @click="info">info</Button>
    <Button @click="success">success</Button>
    <Button @click="warning">warning</Button>
    <Button @click="error">error</Button>
    <Button @click="confirm">confirm</Button>

</template>
<script>
    import { Modal, Button, Message } from 'iview';

    export default {
        components: { Modal, Button },
        props: {
        
        },
        data () {
            return {

            }        
        },
        methods: {
            info () {
                Modal.info({
                    title: '这是对话框标题',
                    content: `<p>这是对话框内容</p><p>这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容这是对话框内容</p>`
                });
            },
            success () {
                Modal.success();
            },
            warning () {
                Modal.warning();
            },
            error () {
                Modal.error();
            },
            confirm () {
                Modal.confirm({
//                    okText: 'OK',
//                    cancelText: 'Cancel',
                    title: '删除提示',
                    content: '删除后将不可找回，您确定要删除吗？',
                    onCancel () {
                        Message.info('cancel it');
                    },
                    onOk () {
                        setTimeout(() => {
                            Modal.remove();
                            Message.success('OK!');
                        }, 2000);
                    },
                    loading: true
                });
            }
        }
    }
</script>
