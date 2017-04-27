<template>
    <div>
        <Table :height="height" border :columns="columns1" :data="data2"></Table>
        <Button @click="height=800">change height</Button>


        <Table border :columns="table.head" :data="table.body"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                height: 200,
                columns1: [
                    {
                        type: 'selection',
                        width: 65,
                        align: 'center',
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        filters: [
                            {
                                label: '小学',
                                value: '小学'
                            },
                            {
                                label: '中学',
                                value: '大学'
                            },
                            {
                                label: '中学',
                                value: '中学'
                            }
                        ],
                        filterRemote: function (value, key, column) {
                            var that = this;
                            this.$Notice.open({
                                title: `正在远程过滤${key}`, desc: value, duration: 3, onClose: function () {
                                    that.remoteFilter(value, key, column)
                                }
                            })

                        }
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                table: {
                    head: [
                        {
                            type: 'selection',
                            width: 105,
                            align: 'center',
                        },
                        {
                            title: '测试',
                            key: 'test',
                        }
                    ],
                    body: [
                        {
                            test: '1',
                            _checked: true,
                            _disabled: true

                        },
                        {
                            test: '2',
                            _checked: false,
                            _disabled: true

                        },
                        {
                            test: '3',
                            _checked: false,
                            _disabled: false

                        }
                    ]
                }
            }
        },
        methods: {
            remoteFilter: function (val, age, column) {
                this.data1 = [
                    {
                        name: '模拟1',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {

                        name: '模拟2',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                ]
            }
        }
    }
</script>
