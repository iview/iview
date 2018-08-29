<template>
    <div>
        <Button @click="modal12 = true">Open the first modal</Button>
        <Button @click="modal13 = true">Open the second modal</Button>
        <Modal v-model="modal12" draggable scrollable title="Modal 1">
            <div>This is the first modal</div>
        </Modal>
        <Modal v-model="modal13" draggable scrollable title="Modal 2">
            <div>This is the second modal</div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal12: false,
                modal13: false
            }
        }
    }
</script>
