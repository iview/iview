<template>
    <div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Button type="primary" @click="modal2 = true">Display dialog box</Button>
        <Button @click="hc">Click Me</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                dragable
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Modal
                v-model="modal2"
                title="Common Modal dialog box title2"
                dragable
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                modal2: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            hc () {
                this.$Message.info('Hello');
            }
        }
    }
</script>
