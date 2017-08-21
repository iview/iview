<template>
    <div style="margin: 100px;">
        <Poptip
                confirm
                transfer
                title="您确认删除这条内容吗？"
                @on-ok="ok"
                @on-cancel="cancel">
            <Button>删除</Button>
        </Poptip>
        <Poptip
                confirm
                title="您确认删除这条内容吗？"
                @on-ok="ok"
                @on-cancel="cancel">
            <Button>删除</Button>
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
