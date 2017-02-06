<style>
    body{
        height: 2000px !important;
    }
</style>
<template>
    <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
    <i-button @click="scrollable = !scrollable">Toggle scrollable</i-button>
    scrollable:{{scrollable}}
    <Modal
            :visible.sync="modal1"
            title="普通的Modal对话框标题"
            :scrollable="scrollable"
            @on-ok="ok"
            @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
        <i-button @click="scrollable = !scrollable">Toggle scrollable</i-button>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                scrollable: false
            }
        },
        methods: {
            ok () {
                this.$nextTick(() => this.modal1 = true);
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
