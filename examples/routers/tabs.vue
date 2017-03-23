<template>
    <Tabs type="card" closable @on-tab-remove="handleTagRemove">
        <Tab-pane label="标签一" v-if="tab0">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTagRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
