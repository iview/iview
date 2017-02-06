<template>
    <Tabs active-key="key1">
        <Tab-pane label="标签一" key="key1">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" key="key2">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" key="key3">标签三的内容</Tab-pane>
    </Tabs>
    <Tabs type="card" >
        <Tab-pane label="标签一">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" :closable="true">标签二的内容</Tab-pane>
        <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {

    }
</script>
