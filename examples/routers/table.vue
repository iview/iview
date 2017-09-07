<template>
    <Table border :columns="columns4" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        _disabled: false,
                        _checked: true
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        _disabled: true
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        _disabled: true
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        _disabled: true
                    }
                ]
            }
        }
    }
</script>
