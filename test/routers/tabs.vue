<template>
    <i-button @click="add">add</i-button>{{more}}
    <Tabs active-key="key1" type="card" closable>
        <tab-pane label="标签一" key="key1">标签一的内容</tab-pane>
        <tab-pane label="标签二" key="key2">标签二的内容</tab-pane>
        <tab-pane label="标签三" key="key3">标签三的内容</tab-pane>
        <tab-pane label="标签四" key="key4" v-if="more">标签四的内容</tab-pane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                more: false
            }
        },
        methods: {
            add () {
                this.more = !this.more;
            }
        }
    }
</script>
