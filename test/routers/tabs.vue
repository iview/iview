<template>
    <Tabs :active-key.sync="activeKey" :animated="true">
        <Tab-pane label="标签一" key="key1">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" key="key2">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" key="key3">标签三的内容</Tab-pane>
    </Tabs>
    <i-button @click="change">change</i-button>
</template>
<script>
    export default {
        data () {
            return {
                activeKey: 'key2'
            }
        },
        methods: {
            change () {
                this.activeKey = 'key1';
            }
        }
    }
</script>
