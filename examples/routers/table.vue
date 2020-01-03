<template>
    <div style="margin: 100px;">
        <Table disabled-hover border ref="selection" :columns="columns4" :data="data1" row-key></Table>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
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
                        title: 'Name',
                        key: 'name',
                        tree: true
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        _showChildren: false,
                        children: [
                            {
                                name: '张三',
                                age: 18,
                                address: '发动机莲富大厦放假了开始的',
                                date: '2016-10-01'
                            },
                            {
                                name: '李四',
                                age: 19,
                                address: '风刀霜剑分离的思路开发',
                                date: '2016-10-02'
                            },
                            {
                                name: '王五',
                                age: 20,
                                address: '分离的付款就说个就是范德萨发生',
                                date: '2016-10-03',
                                children: [
                                    {
                                        name: '赵六',
                                        age: 21,
                                        address: '梵蒂冈人太热疼我',
                                        date: '2016-10-05'
                                    },
                                    {
                                        name: '丁八',
                                        age: 22,
                                        address: '法第三方的范德萨范德萨发送到',
                                        date: '2016-10-06',
                                        children: [
                                            {
                                                name: '第九',
                                                age: 23,
                                                address: '9梵蒂冈人太热疼我',
                                                date: '2016-10-07'
                                            },
                                            {
                                                name: '第十',
                                                age: 24,
                                                address: '10法第三方的范德萨范德萨发送到',
                                                date: '2016-10-08'
                                            },
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
