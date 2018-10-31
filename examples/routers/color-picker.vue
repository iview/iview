<template>
    <ColorPicker v-model="color1" transfer />
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>
