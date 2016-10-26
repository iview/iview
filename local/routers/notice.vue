<style>
    .tooltip_out{
        border: 1px solid #ccc;
        padding: 20px;
    }
    body{
        padding: 10px;
    }
</style>
<template>
    <div class="tooltip_out">
        <Tooltip content="Top Left 提示文字" placement="top-start">
            <Button>上面的左面</Button>
        </Tooltip>
    </div>
</template>
<script>
    import { Tooltip, Button } from 'iview';

    export default {
        components: { Tooltip, Button },
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