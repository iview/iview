<template>
<div>
    <Card :bordered="true" style="width:300px">
        <template slot="title">
            <p>iView2.0</p>
        </template>
        <template slot="extra">
            <Button size="small">More</Button>
        </template>
        <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
    </Card>
    <br><br>
    <Card style="width:300px">
        <p>Hello</p>
        <p>iView2.0</p>
        <h3>Card</h3>
    </Card>
</div>
</template>
<script>
    import { Card } from 'iview';

    export default {
        components: {
            Card
        },
        props: {

        },
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>