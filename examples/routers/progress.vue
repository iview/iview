<template>
    <div style="height: 300px;">
        <Progress vertical :percent="25"></Progress>
        <Progress vertical :percent="45" status="active"></Progress>
        <Progress vertical :percent="65" status="wrong"></Progress>
        <Progress vertical :percent="100"></Progress>
        <Progress vertical :percent="25" hide-info></Progress>

        <Progress  :percent="25"></Progress>
        <Progress  :percent="45" status="active"></Progress>
        <Progress  :percent="65" status="wrong"></Progress>
        <Progress  :percent="100"></Progress>
        <Progress  :percent="25" hide-info></Progress>
        <Progress :percent="10" :stroke-width="20" text-inside></Progress>
        <Progress :percent="90" :stroke-color="color1"></Progress>
        <Progress :percent="90" :stroke-color="color2" status="active"></Progress>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#ff6600',
                color2: ['#108ee9', '#87d068']
            }
        }
    }
</script>
