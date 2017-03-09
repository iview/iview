<template>
    <div>
        <i-button @click.native="instance('info')">消息</i-button>
        <i-button @click.native="instance('success')">成功</i-button>
        <i-button @click.native="instance('warning')">警告</i-button>
        <i-button @click.native="instance('error')">错误</i-button>
    </div>
</template>
<script>
    export default {
        methods: {
            instance (type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>


<!--<template>-->
    <!--<div>-->
        <!--<i-button @click.native="confirm">标准</i-button>-->
        <!--<i-button @click.native="custom">自定义按钮文字</i-button>-->
        <!--<i-button @click.native="async">异步关闭</i-button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--methods: {-->
            <!--confirm () {-->
                <!--this.$Modal.confirm({-->
                    <!--title: '确认对话框标题',-->
                    <!--content: '<p>一些对话框内容</p><p>一些对话框内容</p>',-->
                    <!--onOk: () => {-->
                        <!--console.log('确定');-->
<!--//                        this.$Message.info('点击了确定');-->
                    <!--},-->
                    <!--onCancel: () => {-->
                        <!--console.log('取消');-->
<!--//                        this.$Message.info('点击了取消');-->
                    <!--}-->
                <!--});-->
            <!--},-->
            <!--custom () {-->
                <!--this.$Modal.confirm({-->
                    <!--title: '确认对话框标题',-->
                    <!--content: '<p>一些对话框内容</p><p>一些对话框内容</p>',-->
                    <!--okText: 'OK',-->
                    <!--cancelText: 'Cancel'-->
                <!--});-->
            <!--},-->
            <!--async () {-->
                <!--this.$Modal.confirm({-->
                    <!--title: '确认对话框标题',-->
                    <!--content: '<p>对话框将在 2秒 后关闭</p>',-->
                    <!--loading: true,-->
                    <!--onOk: () => {-->
                        <!--setTimeout(() => {-->
                            <!--this.$Modal.remove();-->
<!--//                            this.$Message.info('异步关闭了对话框');-->
                        <!--}, 2000);-->
                    <!--}-->
                <!--});-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
