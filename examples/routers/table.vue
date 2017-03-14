<!--<template>-->
    <!--<Card>-->
        <!--<Table border :content="self" :columns="columns7" :data="data6"></Table>-->
    <!--</Card>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--self: this,-->
                <!--columns7: [-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name',-->
                        <!--render (row, column, index) {-->
                            <!--return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '操作',-->
                        <!--key: 'action',-->
                        <!--width: 150,-->
                        <!--align: 'center',-->
                        <!--render (row, column, index) {-->
                            <!--return `<i-button type="primary" size="small" @click.native="show(${index})">查看</i-button> <i-button type="error" size="small" @click.native="remove(${index})">删除</i-button>`;-->
                        <!--}-->
                    <!--}-->
                <!--],-->
                <!--data6: [-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--}-->
                <!--]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--show (index) {-->
                <!--console.log(`姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`)-->
            <!--},-->
            <!--remove (index) {-->
                <!--this.data6.splice(index, 1);-->
            <!--}-->
        <!--},-->
        <!--mounted () {-->
            <!--setTimeout(() => {-->
<!--//                this.data6.splice(2, 1);-->
            <!--}, 3000)-->
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <div>
        <i-table border :columns="columns6" :data="data5"></i-table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns6: [
                    {
                        title: '日期',
                        key: 'date'
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
                                label: '大于25岁',
                                value: 1
                            },
                            {
                                label: '小于25岁',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        filters: [
                            {
                                label: '北京',
                                value: '北京'
                            },
                            {
                                label: '上海',
                                value: '上海'
                            },
                            {
                                label: '深圳',
                                value: '深圳'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
