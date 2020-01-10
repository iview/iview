<template>
    <div style="margin: 100px;">
<!--        <Table border ref="selection" :columns="columns5" :data="data2"></Table>-->
        <Divider></Divider>
        <Table
                border
                highlight-row
                @on-current-change="occ"
                @on-row-click="orc"
                @on-row-dblclick="ordc"
                @on-select="os"
                @on-select-cancel="osc"
                @on-select-all="osa"
                @on-select-all-cancel="osac"
                ref="selection"
                :columns="columns4"
                :data="data1"
                row-key="id"
                :load-data="loadData"
        >
            <template slot-scope="{ row }" slot="age">
                <strong>{{row.age}}</strong>
            </template>
        </Table>
        <br><br>
        <Button @click="addData">添加数据</Button>
        <Button @click="addData2">添加数据2</Button>
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
                        key: 'age',
                        sortable: true,
                        filters: [
                            {
                                label: 'Greater than 180',
                                value: 1
                            },
                            {
                                label: 'Less than 180',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 180;
                            } else if (value === 2) {
                                return row.age < 180;
                            }
                        }
                    },
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data1: [
                    {
                        id: '100',
                        name: 'John Brown',
                        age: 118,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        _disabled: true,
                        level: 0,
                        // _loading: false,
                        // children: []
                    },
                    {
                        id: '101',
                        name: 'Jim Green',
                        age: 224,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        _showChildren: true,
                        _disabled: false,
                        level: 0,
                        children: [
                            {
                                id: '10100',
                                name: '张三',
                                age: 235,
                                address: '发动机莲富大厦放假了开始的',
                                date: '2016-10-01',
                                level: 1
                            },
                            {
                                id: '10101',
                                name: '李四',
                                age: 129,
                                address: '风刀霜剑分离的思路开发',
                                date: '2016-10-02',
                                level: 1
                            },
                            {
                                id: '10102',
                                name: '王五',
                                age: 290,
                                address: '分离的付款就说个就是范德萨发生',
                                date: '2016-10-03',
                                _showChildren: true,
                                level: 1,
                                children: [
                                    {
                                        id: '10102100',
                                        name: '赵六',
                                        age: 111,
                                        address: '梵蒂冈人太热疼我',
                                        date: '2016-10-05',
                                        level: 2
                                    },
                                    {
                                        id: '10102101',
                                        name: '丁八',
                                        age: 272,
                                        address: '法第三方的范德萨范德萨发送到',
                                        date: '2016-10-06',
                                        _showChildren: true,
                                        level: 2,
                                        children: [
                                            {
                                                id: '10102101100',
                                                name: '第九',
                                                age: 123,
                                                address: '9梵蒂冈人太热疼我',
                                                date: '2016-10-07',
                                                _disabled: true,
                                                level: 3
                                            },
                                            {
                                                id: '10102101101',
                                                name: '第十',
                                                age: 254,
                                                address: '10法第三方的范德萨范德萨发送到',
                                                date: '2016-10-08',
                                                level: 3
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
                        age: 130,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        _disabled: false,
                        level: 0,
                        _showChildren: true,
                        children: [
                            {
                                id: '10200',
                                name: '张三3',
                                age: 235,
                                address: '发动机莲富大厦放假了开始的',
                                date: '2016-10-01',
                                level: 1
                            },
                            {
                                id: '10201',
                                name: '张三4',
                                age: 235,
                                address: '发动机莲富大厦放假了开始的',
                                date: '2016-10-01',
                                level: 1
                            },
                        ]
                    },
                    // {
                    //     id: '103',
                    //     name: 'Jon Snow',
                    //     age: 126,
                    //     address: 'Ottawa No. 2 Lake Park',
                    //     date: '2016-10-04',
                    //     _disabled: true,
                    //     level: 0
                    // }
                ],
                columns5: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true,
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
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
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        _disabled: true,
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        _disabled: true
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        _disabled: true
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04',
                        _disabled: true
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
                // console.log(data);
                // console.log(index);
            },
            os (s, r) {
                // console.log(s);
                // console.log(r);
            },
            osc (s, r) {
                console.log(s);
                console.log(r);
            },
            osa (s) {
                console.log(s);
            },
            osac (s) {
                console.log(s);
            },
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            id: '10000',
                            name: '张三1',
                            age: 123,
                            address: '1发动机莲富大厦放假了开始的',
                            date: '2016-10-01'
                        },
                        {
                            id: '10001',
                            name: '张三2',
                            age: 124,
                            address: '2发动机莲富大厦放假了开始的',
                            date: '2016-10-02'
                        },
                    ];
                    callback(data);
                }, 100);
            },
            addData () {
                const d = this.data1[3];
                d.children = [
                    {
                        id: '10000',
                        name: '张三1',
                        age: 123,
                        address: '1发动机莲富大厦放假了开始的',
                        date: '2016-10-01'
                    },
                    {
                        id: '10001',
                        name: '张三2',
                        age: 124,
                        address: '2发动机莲富大厦放假了开始的',
                        date: '2016-10-02'
                    }
                ];
                this.$set(this.data1, 3, d);
            },
            addData2 () {
                this.data1.push({
                    id: '104',
                    name: 'Jon Snow4',
                    age: 124,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                    _disabled: true,
                    level: 0
                })
            }
        }
    }
</script>
