<style>
    body{
        height: 2000px !important;
    }
</style>
<template>
    <Tabs active-key="key1">
        <Tab-pane label="标签一" key="key1">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Tab-pane>
        <Tab-pane label="标签二" key="key2">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" key="key3">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {

    }
</script>
