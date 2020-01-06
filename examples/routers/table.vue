<template>
    <div style="margin: 100px;">
        <Table
                border
                highlight-row
                @on-current-change="occ"
                @on-row-click="orc"
                @on-row-dblclick="ordc"
                ref="selection"
                :columns="columns4"
                :data="data1"
                row-key="id">
            <template slot-scope="{ row }" slot="age">
                <strong>{{row.age}}</strong>
            </template>
        </Table>
        <br><br>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    // {
                    //     type: 'index',
                    //     width: 60,
                    //     align: 'center'
                    // },
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
                        // key: 'age',
                        slot: 'age'
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
                        id: '100',
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        id: '101',
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        _showChildren: true,
                        children: [
                            {
                                id: '10100',
                                name: '张三',
                                age: 18,
                                address: '发动机莲富大厦放假了开始的',
                                date: '2016-10-01'
                            },
                            {
                                id: '10101',
                                name: '李四',
                                age: 19,
                                address: '风刀霜剑分离的思路开发',
                                date: '2016-10-02'
                            },
                            {
                                id: '10102',
                                name: '王五',
                                age: 20,
                                address: '分离的付款就说个就是范德萨发生',
                                date: '2016-10-03',
                                _showChildren: true,
                                children: [
                                    {
                                        id: '10102100',
                                        name: '赵六',
                                        age: 21,
                                        address: '梵蒂冈人太热疼我',
                                        date: '2016-10-05'
                                    },
                                    {
                                        id: '10102101',
                                        name: '丁八',
                                        age: 22,
                                        address: '法第三方的范德萨范德萨发送到',
                                        date: '2016-10-06',
                                        _showChildren: true,
                                        children: [
                                            {
                                                id: '10102101100',
                                                name: '第九',
                                                age: 23,
                                                address: '9梵蒂冈人太热疼我',
                                                date: '2016-10-07'
                                            },
                                            {
                                                id: '10102101101',
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
                        id: '102',
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        id: '103',
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
            },
            occ (n, o) {
                // console.log(n);
                // console.log(o);
            },
            orc (data, index) {
                // console.log(data);
                // console.log(index);
            },
            ordc (data, index) {
                console.log(data);
                console.log(index);
            }
        }
    }
</script>
