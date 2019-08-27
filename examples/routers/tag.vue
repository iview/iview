<template>
    <div>
        <div>
            <Tag color="default">default</Tag>
            <Tag color="primary">primary</Tag>
            <Tag color="success">success</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="gold">不错</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="white">purple</Tag>
        </div>
        <Tag checkable>标签一</Tag>
        <Tag>标签二</Tag>
        <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
        <br><br>
        <Tag type="border" checkable>标签三</Tag>
        <Tag type="border" closable>标签四</Tag>
        <Tag type="dot">标签一</Tag>
        <Tag type="dot" closable>标签二</Tag>
        <br><br>
        <Tag closable color="primary" checkable>标签一</Tag>
        <Tag closable color="success" checkable>标签二</Tag>
        <Tag closable color="error" checkable>标签三</Tag>
        <Tag closable color="warning" checkable>标签四</Tag>
        <br><br>
        <Tag color="primary" checkable>标签一</Tag>
        <Tag color="success" checkable>标签二</Tag>
        <Tag color="error" checkable>标签三</Tag>
        <Tag color="warning" checkable>标签四</Tag>
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
        <Tag type="border" closable color="primary" checkable>标签一</Tag>
        <Tag type="border" closable color="success">标签二</Tag>
        <Tag type="border" closable color="error">标签三</Tag>
        <Tag type="border" closable color="warning">标签四</Tag>
        <br><br>
        <Tag type="dot" closable color="primary" checkable>标签一</Tag>
        <Tag type="dot" closable color="success">标签二</Tag>
        <Tag type="dot" closable color="error">标签三</Tag>
        <Tag type="dot" closable color="warning">标签四</Tag>
        <br><br>
        <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
        <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>

        <br><br><hr><br>
        <Tag :checked="checked" checkable>test</Tag>
        <Button @click="toggle">
            Toggle
          </Button>
        <span>{{ checked }}</span>
        <br><br>
        <Tag type="dot" color="gold">标签四</Tag>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true,
                count: [0, 1, 2],
                checked: true
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
            },
            toggle() {
                this.checked = !this.checked;
            }
        }
    };
</script>
