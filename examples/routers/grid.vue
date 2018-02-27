<style>
    .view {
        height: 100px;
        width: 100px;
        background: yellow;
    }
</style>
<template>
    <div>
        <Row type='flex' justify='center'>
            <i-col span='21' class="offset-header">
                <Row type='flex' :gutter='16' justify='space-between'>
                    <i-col :order='25'>
                        <div class="view">
                            <label>245</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='1'>
                        <div class="view" >
                            <label>1</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='2'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='3'>
                        <div class="view"   >
                            <label>3</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='4'>
                        <div class="view"   >
                            <label>4</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='5'>
                        <div class="view"   >
                            <label>5</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='6'>
                        <div class="view"   >
                            <label>6</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='7'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='8'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='9'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='10'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='11'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='12'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='13'>
                        <div class="view"   >
                            <label>12</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='14'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='15'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='16'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='17'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='18'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='19'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='20'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='21'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='22'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='23'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='24'>
                        <div class="view"   >
                            <label>2</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='25'>
                        <div class="view"   >
                            <label>25-------</label>
                        </div>
                    </i-col>
                    <i-col :xs='12' :sm='12' :md='8' :lg='8' :order='26'>
                        <div class="view"   >
                            <label>26------</label>
                        </div>
                    </i-col>
                </Row>
            </i-col>
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
