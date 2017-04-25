<template>
    <div>
        <Button type="primary" @click="modal1 = true">显示对话框</Button>
        
        <Modal
                v-model="modal1"
                :title="title"
                @on-ok="ok"
                :mask-closable="false"
                @on-cancel="cancel">
            <p><Button type="ghost" @click="title = '这是标题'">设置标题</Button> {{title}}</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: true,
                title:''
            }
        },
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
