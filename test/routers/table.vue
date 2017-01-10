<style>
    /*.ivu-table .demo-table-info-row td{*/
        /*background-color: #2db7f5;*/
        /*color: #fff;*/
    /*}*/
    /*.ivu-table .demo-table-error-row td{*/
        /*background-color: #ff6600;*/
        /*color: #fff;*/
    /*}*/
    .ivu-table .table-age-col{
        background: #ff6600;
    }
    .ivu-table .table-name-col{
        background: #2db7f5;
    }
    .ivu-table .table-address-col{
        background: #187;
    }
</style>
<template>
    <i-table :row-class-name="rowClassName" :columns="columns1" :data="data1"></i-table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        fixed: 'right',
                        className: 'table-name-col'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        fixed: 'right',
                        className: 'table-age-col'
                    },
                    {
                        title: '地址',
                        key: 'address',
                        className: 'table-address-col'
                    }
                ],
                data1: [
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
                ]
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
