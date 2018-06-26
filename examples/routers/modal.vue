<template>
    <div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                :fullscreen="true"
                footerHide
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog1111</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>

            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog</p>-->
            <!--<p>Content of dialog2222</p>-->
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
