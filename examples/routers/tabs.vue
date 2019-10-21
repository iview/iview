<template>
    <div style="height: 5000px">
        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 20
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>
