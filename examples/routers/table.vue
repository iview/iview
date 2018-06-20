<style>
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>

<template>
    <div>
        <!-- <br><br><br><br><br> -->
        <!-- <Table border  :show-header='false' :columns="columns1" height="500" :data="data1"></Table> -->
        <!-- <Table border :columns="columns1" height='300'></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table width="550" height="200" border :columns="columns2" :data="data4"></Table> -->
        <!--<br><br><br><br><br>-->
        <!-- <Table border :columns="columns5" height="240" :data="data5"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border :columns="columns6" :data="data5"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border  :show-header='false' :columns="columns7"  height="200" :data="data7"></Table> -->
        <!-- <Table border :columns="columns7"  height="240" :data="data7"></Table> -->
        <!-- <br><br><br><br><br> -->
        <!-- <Table border :columns="columns8"  :data="data7" height="200"></Table> -->
        <!-- <Table border :columns="columns8" height="200"></Table> -->
        <!-- <br><br><br><br><br> -->

        <div class="layout-demo-con">
            <Button @click="change">修改Sider绑定的变量来控制收缩</Button>
            <Layout :style="{minHeight: '80vh'}">
                <Sider 
                    v-model="isCollapsed"
                    collapsed-width="0" 
                    hide-trigger
                    breakpoint="sm"
                    @on-collapse="changed"
                    collapsible
                    ref="side"
                    width="200">
                    <Menu width="auto" theme="dark" active-name="1">
                        <MenuGroup title="内容管理">
                            <MenuItem name="1">
                                <Icon type="document-text"></Icon>
                                文章管理
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="chatbubbles"></Icon>
                                评论管理
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="统计分析">
                            <MenuItem name="3">
                                <Icon type="heart"></Icon>
                                用户留存
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="heart-broken"></Icon>
                                流失用户
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                    <!-- <div slot="trigger"><Icon type="document-text"></Icon></div> -->
                </Sider>
                <Layout class-name="test-class">
                    <Header :style="{background: '#eee'}"><Button @click="toggleCollapse">菜单</Button></Header>
                    <Content :style="{background:'#FFCF9E'}">
                        <!-- <Table border  :columns="columns1" height="500" :data="data1"></Table> -->
                        <!-- <br> -->
                        <!-- <Table border :columns="columns5" :data="data5"></Table> -->
                        <Table border :columns="columns8"  height="240" :data="data7"></Table>
                    </Content>
                    <Footer>sdfsdsdfsdfs</Footer>
                </Layout>
            </Layout>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                columns1: [
                    {
                        title: 'Name',
                        key: 'name',
                        align: 'center',
                        minWidth: 100,
                        maxWidth: 200,
                        fixed: 'left',
                        filters: [
                            {
                                label: 'Joe',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name === 'Joe';
                            } else if (value === 2) {
                                return row.name === 'John Brown';
                            }
                        }
                    },
                    {
                        title: 'Other',
                        align: 'center',
                        children: [
                            {
                                title: 'Age',
                                key: 'age',
                                align: 'center',
                                minWidth: 100,
                                maxWidth: 200,
                                sortable: true
                            },
                            {
                                title: 'Address',
                                align: 'center',
                                children: [
                                    {
                                        title: 'Street',
                                        key: 'street',
                                        align: 'center',
                                        minWidth: 100,
                                        maxWidth: 200,
                                    },
                                    {
                                        title: 'Block',
                                        align: 'center',
                                        children: [
                                            {
                                                title: 'Building',
                                                key: 'building',
                                                align: 'center',
                                                minWidth: 100,
                                                maxWidth: 200,
                                                sortable: true
                                            },
                                            {
                                                title: 'Door No.',
                                                key: 'door',
                                                align: 'center',
                                                minWidth: 100,
                                                maxWidth: 200,
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Company',
                        align: 'center',
                        children: [
                            {
                                title: 'Company Address',
                                key: 'caddress',
                                align: 'center',
                                minWidth: 100,
                                maxWidth: 200,
                            },
                            {
                                title: 'Company Name',
                                key: 'cname',
                                align: 'center',
                                minWidth: 100,
                                maxWidth: 200,
                            }
                        ]
                    },
                    // {
                    //     title: 'Gender',
                    //     key: 'gender',
                    //     align: 'center',
                    //     width: 200,
                    //     fixed: 'right'
                    // },
                    {
                        title: 'Gender',
                        key: 'gender',
                        align: 'center',
                        minWidth: 100,
                        maxWidth: 200,
                        fixed: 'right'
                    }
                ],
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100,
                        fixed: 'right',
                        sortable: true
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data1: [],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                columns5: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data5: [
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
                ],
                columns6: [
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
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
                        fixed: 'right',
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
                
                columns7: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true,
                        width:200,
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        width:200,
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width:200,
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:200,
                    }
                ],
                data7: [
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
                        address: 'Sydney No. 1 Lake Park Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park Ottawa No. 2 Lake Park Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                
                columns8: [
                    {
                        title: 'Address',
                        key: 'address',
                        minWidth:200,
                        //maxWidth:300,
                    },
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true,
                        minWidth:100,
                        maxWidth:150,
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        minWidth:100,
                        maxWidth:200,
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        minWidth:60,
                        maxWidth:100,
                    },
                ],
            }
        },
        mounted () {
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    key: i,
                    name: 'John Brown',
                    age: i + 1,
                    street: 'Lake Park',
                    building: 'C',
                    door: 2035,
                    caddress: 'Lake Street 42',
                    cname: 'SoftLake Co',
                    gender: 'M',
                });
            }
            this.data1 = data;
        },
        methods: {
            toggleCollapse () {
                this.$refs.side.toggleCollapse();
            },
            change () {
                this.isCollapsed = !this.isCollapsed;
            },
            changed (res) {
                console.log(res)
            }
        },
        watch: {
            isCollapsed (val) {
                // console.log(val)
            }
        }
    }
</script>