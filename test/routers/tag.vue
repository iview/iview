<template>
    <div>
        <Tag>标签一</Tag>
        <Tag>标签二</Tag>
        <Tag closable>标签三</Tag>
        <Tag closable color="blue">标签一</Tag>
        <Tag closable color="green">标签二</Tag>
        <Tag closable color="red">标签三</Tag>
        <Tag closable color="yellow">标签四</Tag>
        <br><br>
        <Tag type="dot">标签一</Tag>
        <Tag type="dot" closable>标签一</Tag>
        <Tag type="dot" color="blue">标签一</Tag>
        <Tag type="dot" color="blue" closable>标签一</Tag>
        <Tag type="dot" color="green">标签一</Tag>
        <Tag type="dot" color="green" closable>标签一</Tag>
        <Tag type="dot" color="red">标签一</Tag>
        <Tag type="dot" color="red" closable>标签一</Tag>
        <Tag type="dot" color="yellow">标签一</Tag>
        <Tag type="dot" color="yellow" closable>标签一</Tag>
        <br><br>
        <Tag type="border">标签一</Tag>
        <Tag type="border" closable>标签一</Tag>
        <Tag type="border" color="blue">标签一</Tag>
        <Tag type="border" color="blue" closable>标签一</Tag>
        <Tag type="border" color="green">标签一</Tag>
        <Tag type="border" color="green" closable>标签一</Tag>
        <Tag type="border" color="red">标签一</Tag>
        <Tag type="border" color="red" closable>标签一</Tag>
        <Tag type="border" color="yellow">标签一</Tag>
        <Tag type="border" color="yellow" closable>标签一</Tag>
        <Button type="primary" @click="modal1 = true">显示对话框</Button>
        <br><br>
        <Tag v-if="ccc" closable @on-close="clickTagClose">标签一</Tag>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                loading: true,
                ccc: true
            }
        },
        methods: {
            ok () {
                setTimeout(() => {
                    this.modal1 = false;
                }, 2000);
            },
            clickTag() {
                console.log('click tag');
            },
            clickTagClose() {
                this.ccc = false;
                console.log('click tag close-icon');
            }
        }
    }
</script>
