<template>
    <Card :bordered="true" style="width:300px">
        <template slot="title">
            <p>放寒假的发货会计师</p>
        </template>
        <a href="#" slot="extra">More</a>
    </Card>
    <Card style="width:300px">
        <p>hello</p>
        <p>hndshf</p>
        <h3>jfds</h3>
    </Card>
</template>
<script>
    import { Row, Col, Card } from 'iview';

    export default {
        components: {
            Row,
            iCol: Col,
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