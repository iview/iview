<template>
    <div style="margin: 200px;height: 2000px;">
        <Tabs v-model="name" type="card" @on-click="handleClick">
            <TabPane name="a" label="标签一">标签一的内容</TabPane>
            <TabPane name="b" label="标签二">标签二的内容</TabPane>
            <TabPane name="c" label="标签三">标签三的内容</TabPane>
            <TabPane name="d" label="标签四">标签四的内容</TabPane>
            <TabPane name="e" label="标签五">标签五的内容</TabPane>
            <TabPane name="f" label="标签六">标签六的内容</TabPane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                name: 'b'
            };
        },
        methods: {
            handleClick (name) {
                console.log(name);
            }
        }
    };
</script>
