<template>
    <div>
        <Button @click="showSecond = !showSecond">change</Button>
        <Tabs value="name1">
            <TabPane label="标签一" name="name1" :index="1">标签一的内容</TabPane>
            <TabPane label="标签二" name="name2" :index="2" v-if="showSecond">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3" :index="3">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                showSecond: false
            }
        }
    }
</script>
