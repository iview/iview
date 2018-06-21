<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <div>
        <Badge :count="count">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="0" showZero>
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Button @click="setCount">set count</Button>
        <br><br>
        <Badge text="hot">
            <Button type="ghost">Hello</Button>
        </Badge>
        <br><br>
        <div>
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />
            <br />
            <Badge status="success" text="Success" />
            <br />
            <Badge status="error" text="Error" />
            <br />
            <Badge status="default" text="Default" />
            <br />
            <Badge status="processing" text="Processing" />
            <br />
            <Badge status="warning" text="Warning" />
        </div>
        <div style="margin: 50px">
            <Badge dot>
                <a href="//iviewui.com">我是一个链接</a>
            </Badge>
            <br><br>
            <Badge :count="10" :offset="[-5, -5]">
                <a href="//iviewui.com">我是一个链接</a>
            </Badge>
        </div>
        <div>
            <Badge :count="count" type="primary">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count" type="success">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count" type="normal">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count" type="info">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count" type="error">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count" type="warning">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="count">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </div>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                count: 5
            };
        },
        methods: {
            setCount () {
                this.count = 10;
            }
        }
    };
</script>