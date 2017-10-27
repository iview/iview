<template>
    <div style="margin: 200px;">
        <Poptip title="提示标题" transfer>
            <div slot="content" style="padding: 50px">
                <Button>click me</Button>
            </div>
            <Button>click 激活</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
