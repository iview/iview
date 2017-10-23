<template>
    <div>
        <Tag v-for="item in count" :key="item" :name="item" type="border" color="yellow" @on-close="close" @on-check="check" closable>标签{{ item + 1 }}</Tag>
        <div><Tag v-for="item in count" :key="item" :name="item" color="yellow" @on-close="close" @on-check="check" checkable>可选标签{{ item + 1 }}</Tag></div>
        <div><Tag v-for="item in count" :key="item" :name="item" type="dot" color="blue" @on-close="close" @on-check="check" closable checkable>可选可关闭标签{{ item + 1 }}</Tag></div>
        <br />
        <Button icon="ios-plus-empty" type="dashed" size="small" @click="count += 1">添加标签</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                count: 3
            };
        },
        methods: {
            close (e, name) {
                console.log(e);
                console.log(name);
            },
            check (e, name) {
                console.log(e);
                console.log(name);
            }
        }
    };
</script>
