<template>
    <div>
        <i-button @click.native="modal2 = true">自定义页头和页脚</i-button>
        <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>删除确认</span>
            </p>
            <div style="text-align:center">
                <p>此任务删除后，下游 10 个任务将无法执行。</p>
                <p>是否继续删除？</p>
            </div>
            <div slot="footer">
                <i-button type="error" size="large" long :loading="modal_loading" @click.native="del">删除</i-button>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            }
        }
    }
</script>
