<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

    .ivu-modal{
        top: 0;
    }
    }

    .placeholder {
        min-height: 2000px;
        width: 1px;
    }
</style>
<template>
    <i-button @click="modal9 = true">距离顶部 20px</i-button>
    <Modal
            title="对话框标题"
            :visible.sync="modal9"
            :style="{top: '20px'}">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="modal10 = true">垂直居中</i-button>
    <Modal
            title="对话框标题"
            :visible.sync="modal10"
            class-name="vertical-center-modal">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="instance(true)">Create Instance Scrollable</i-button>
    <i-button @click="instance(false)">Create Instance Non-scrollable</i-button>
    <div class="placeholder"></div>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
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
            },
            instance (scrollable) {
                this.$Modal.info({
                    title: 'test',
                    content: 'test',
                    scrollable: scrollable
                });
            }
        }
    }
</script>
