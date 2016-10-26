<style>
    .tooltip_out{
        border: 1px solid #ccc;
        padding: 20px;
    }
    body{
        height: 1000px;
        padding: 10px;
    }
</style>
<template>
    <div class="tooltip_out">
        123
    </div>
    <div class="tooltip_out">

    </div>
    <Row>
        <i-col span="12">
            <Tooltip content="Top Left 提示文字" placement="top-start">
                <Button>上面的左面</Button>
            </Tooltip>
        </i-col>
        <i-col span="12">
            <Tooltip content="Top Left 提示文字" placement="top-start">
                <Button>上面的左面</Button>
            </Tooltip>
        </i-col>
    </Row>
</template>
<script>
    import { Tooltip, Button, Row, iCol } from 'iview';

    export default {
        components: { Tooltip, Button, Row, iCol },
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