<template>
    <div>
        <Row>
            <i-col span="18">
                <i-button v-on:click="setValue">setValue</i-button>
            </i-col>
            <i-col span="4">
                <Cascader :data="data" v-model="value1" transfer></Cascader>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                data: [{
                    value: '9ecec83c-cf6b-4cfe-aa75-eb3510875331',
                    label: '北京',
                    children: [{
                        value: 'a873a9bd-7d75-4f46-9369-4d25a1feb13c',
                        label: '故宫'
                    }, {
                        value: 'tiantan',
                        label: '天坛'
                    }, {
                        value: 'wangfujing',
                        label: '王府井'
                    }]
                }, {
                    value: 'ca7c0fbc-728d-42e8-b111-f5f73cf9171b',
                    label: '江苏',
                    children: [{
                        value: 'a89d891b-5c50-44c0-87b4-d4f934edc921',
                        label: '南京',
                        children: [{
                            value: '44736384-0ede-41ba-bf7a-59c84241851a',
                            label: '夫子庙中国第一庙来自南京',
                            children:[{
                                value: '44736384-0ede-41ba-bf7a-59c84241851c',
                                label:'自定义产品系统来自黑龙江地区'
                            }]
                        }]
                    }, {
                        value: 'suzhou',
                        label: '苏州',
                        children: [{
                            value: 'zhuozhengyuan',
                            label: '拙政园',
                        }, {
                            value: 'shizilin',
                            label: '狮子林',
                        }]
                    }],
                }]
            }
        },
        methods: {
            setValue() {
                var v = "ca7c0fbc-728d-42e8-b111-f5f73cf9171b,a89d891b-5c50-44c0-87b4-d4f934edc921,44736384-0ede-41ba-bf7a-59c84241851a";
                var x = v.split(',')
                var x1 = x[0].toString();
                var x2 = x[1].toString();
                var x3 = x[2].toString();

                this.value1 = x;
            }
        },
        mounted () {

        }
    }
</script>
<style>

</style>