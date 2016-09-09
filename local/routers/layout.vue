<template>
    <Row>
        <i-col span="4">
            我在左边
        </i-col>
        <i-col span="20">
            我在右边
        </i-col>
    </Row>
</template>
<script>
    import { Row, Col } from 'iview';

    export default {
        components: {
            Row,
            iCol: Col
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