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
        <Badge dot :count="count">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Button @click="setCount">set count</Button>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                count: 50
            };
        },
        methods: {
            setCount () {
                this.count = 10;
            }
        }
    };
</script>