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
    </div>
</template>
<script>
    export default {

    }
</script>
