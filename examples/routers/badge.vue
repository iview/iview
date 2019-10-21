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
        <Badge>
            <Icon type="md-time" slot="count" size="16" color="#ff6600" />
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Button @click="setCount">set count</Button>
        <Divider></Divider>
        <Badge :count="count" text="new">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="count">
            <a href="#" class="demo-badge"></a>
            <span slot="text">hhh</span>
        </Badge>
        <br><br>
        <Badge text="hot">
            <Button type="primary" ghost>Hello</Button>
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
            <Badge status="success">
                <strong slot="text">Success</strong>
            </Badge>
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
        <Divider></Divider>
        <Badge status="success" text="Success" />
        <br />
        <Badge status="error" text="Error" />
        <br />
        <Badge status="default" text="Default" />
        <br />
        <Badge status="processing" text="Processing" />
        <br />
        <Badge status="warning" text="Warning" />
        <br />
        <Badge color="blue" text="blue" />
        <Badge color="green" text="green" />
        <Badge color="red" text="red" />
        <Badge color="yellow" text="yellow" />
        <Badge color="pink" text="pink" />
        <Badge color="magenta" text="magenta" />
        <Badge color="volcano" text="volcano" />
        <Badge color="orange" text="orange" />
        <Badge color="gold" text="gold" />
        <Badge color="lime" text="lime" />
        <Badge color="cyan" text="cyan" />
        <Badge color="geekblue" text="geekblue" />
        <Badge color="purple" text="purple" />
        <br />
        <Badge color="#2db7f5" text="#2db7f5" />
        <Badge color="#f50" text="#f50" />
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
