<style>
    /*.ivu-col div{*/
        /*background: rgba(0,153,229,.7);*/
    /*}*/
</style>
<template>
    <div>
        <Row :gutter="64">
            <Card>
                <i-col span="6">
                    <div>col-6</div>
                </i-col>
                <i-col span="6">
                    <div>col-6</div>
                </i-col>
                <i-col span="6">
                    <div>col-6</div>
                </i-col>
                <i-col span="6">
                    <div>col-6</div>
                </i-col>
            </Card>
        </Row>
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
