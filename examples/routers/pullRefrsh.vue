<template>
<div>
    <div>需要手机模式预览</div>
    <br>
    <br>
    <br>
    <br>
    <div style="height: 200px;overflow: hidden;position: relative;">
        <pullRefresh :downRefresh="true" @fetchData="fetchData">
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
            <div>123123123</div>
        </pullRefresh>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        fetchData() {
            alert('滑动到了底部')
        }
    }
}
</script>

<style>

</style>
