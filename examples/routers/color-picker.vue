<template>
    <div style="margin: 100px;">
        <div>{{ color1 }}, {{ color2 }}, {{ color3 }}</div>
        <ColorPicker v-model="color1" recommend />
        <ColorPicker v-model="color2" recommend transfer/>
        <ColorPicker v-model="color3" :editable="false"/>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19BE6B',
                color2: '#19BE6B',
                color3: ''
            };
        }
    };
</script>
