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

        <Badge :count="1" type="primary">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot type="primary">
            <a href="#" class="demo-badge"></a>
        </Badge>

        <Badge :count="2" type="info">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot type="info">
            <a href="#" class="demo-badge"></a>
        </Badge>

        <Badge :count="3" type="success">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot type="success">
            <a href="#" class="demo-badge"></a>
        </Badge>

        <Badge :count="4" type="warning">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot type="warning">
            <a href="#" class="demo-badge"></a>
        </Badge>

        
        <Badge :count="5" type="error">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot type="error">
            <a href="#" class="demo-badge"></a>
        </Badge>

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