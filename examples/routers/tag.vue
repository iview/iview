<template>
    <div>
        <Tag checkable>标签一</Tag>
        <Tag>标签二</Tag>
        <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
        <br><br>
        <Tag type="border" checkable>标签三</Tag>
        <Tag type="border" closable>标签四</Tag>
        <Tag type="dot">标签一</Tag>
        <Tag type="dot" closable>标签二</Tag>
        <br><br>
        <Tag closable color="blue" checkable>标签一</Tag>
        <Tag closable color="green" checkable>标签二</Tag>
        <Tag closable color="red" checkable>标签三</Tag>
        <Tag closable color="yellow" checkable>标签四</Tag>
        <br><br>
        <Tag color="blue" checkable>标签一</Tag>
        <Tag color="green" checkable>标签二</Tag>
        <Tag color="red" checkable>标签三</Tag>
        <Tag color="yellow" checkable>标签四</Tag>
        <br><br>
        <Tag closable color="#EF6AFF" checkable>标签一</Tag>
        <Tag color="#EF6AFF" checkable>标签一</Tag>
        <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>
        <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>
        <Tag closable color="default" checkable>标签四</Tag>
        <br><br>
        <Tag closable color="#EF6AFF">标签一</Tag>
        <Tag type="border" closable color="#EF6AFF">标签二</Tag>
        <Tag type="dot" closable color="#EF6AFF">标签三</Tag>
        <Tag closable color="default">标签四</Tag>
        <br><br>
        <Tag type="border" closable color="blue" checkable>标签一</Tag>
        <Tag type="border" closable color="green">标签二</Tag>
        <Tag type="border" closable color="red">标签三</Tag>
        <Tag type="border" closable color="yellow">标签四</Tag>
        <br><br>
        <Tag type="dot" closable color="blue" checkable>标签一</Tag>
        <Tag type="dot" closable color="green">标签二</Tag>
        <Tag type="dot" closable color="red">标签三</Tag>
        <Tag type="dot" closable color="yellow">标签四</Tag>
        <br><br>
        <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
        <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true,
                count: [0, 1, 2]
            };
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    };
</script>
