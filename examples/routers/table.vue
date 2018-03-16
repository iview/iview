<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <Button @click="handleSetData">Set Data</Button>
        <Button @click="handleClearData">Clear Data</Button>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
        <div style="margin:20px 0px;">
            <Table :data="tableData1" :columns="tableColumns1"  style="width: 100%;" stripe></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" show-sizer :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </div>
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
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [

                ],
                
                tableData1: [],
                tableColumns1: [
                    {
                        title: 'Data1',
                        key: 'data1'
                    },
                    {
                        title: 'Data2',
                        key: 'data2'
                    },
                    {
                        title: 'Data3',
                        key: 'data3'
                    },
                    {
                        title: 'Data4',
                        key: 'data4'
                    },
                    {
                        title: 'Data5',
                        key: 'data5'
                    },
                    {
                        title: 'Data6',
                        key: 'data6'
                    },
                ]
            }
        },
        mounted(){
            this.refreshData();
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            handleSetData () {
                this.data1 = [
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
                        date: '2016-10-01'
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
                ];
            },
            handleClearData () {
                this.data1 = [];
            },
            refreshData(){
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        data1: Math.floor(Math.random () * 10000),
                        data2: Math.floor(Math.random () * 1000000),
                        data3: Math.floor(Math.random () * 100000000),
                        data4: Math.floor(Math.random () * Math.random () * 10000),
                        data5: Math.floor(Math.random () * Math.random () * 1000000),
                        data6: Math.floor(Math.random () * Math.random () * 100000000),
                    });
                }
                this.tableData1 = data;
            },
            changePage(){
                this.refreshData();
            }
        }
    }
</script>
