<style>
    .example-demo .ivu-col div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .example-demo  .ivu-col:nth-child(odd) div{
        background: rgba(0, 153, 229, .7);
    }
</style>
<template>
    <div class="example-demo">
        <Row :gutter="16">
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
        </Row>

        <Row>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
            <i-col span="6">
                <div>1 | order-4</div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import { Row, iCol, Card } from 'iview';

    export default {
        components: {
            Row,
            iCol,
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