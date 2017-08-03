<style>
    .demo-col div{
        background: #f50;
    }
</style>
<template>
    <div>
        <Row :gutter="16">
            <i-col class-name="demo-col" span="4" v-for="i in n" key="i">
                <div>col-8</div>
            </i-col>
        </Row>
        <Button @click="add">add</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>
