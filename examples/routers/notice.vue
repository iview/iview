<template>
    <div>
        <p>带描述信息</p>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
        <p>仅标题</p>
        <Button @click="info(true)">消息</Button>
        <Button @click="success(true)">成功</Button>
        <Button @click="warning(true)">警告</Button>
        <Button @click="error(true)">错误</Button>
        <Button @click="destroy()">销毁</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            destroy () {
                this.$Notice.destroy();
            }
        }
    }
</script>
