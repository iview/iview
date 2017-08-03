<template>
    <div style="margin: 0 400px;">
        <Slider v-model="value" range></Slider>
        <Button @click="change">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        },
        methods: {
            change () {
                this.value = [30, 80];
            }
        }
    }
</script>
