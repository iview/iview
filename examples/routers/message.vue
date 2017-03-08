<template>
    <div>
        <i-button @click.native="confirm">标准</i-button>
        <i-button @click.native="custom">自定义按钮文字</i-button>
        <i-button @click.native="async">异步关闭</i-button>

        <div>
             <i-button @click.native="success">显示成功提示</i-button>
             <i-button @click.native="warning">显示警告提示</i-button>
             <i-button @click.native="error">显示错误提示</i-button>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>对话框将在 2秒 后关闭</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            },
            success () {
                this.$Message.success('这是一条成功的提示');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            }
        }
    }
</script>
