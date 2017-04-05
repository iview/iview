<template>
<div>
    <Row>
        <Col span=24>
        <Table :context="self" :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
        </col>
    </Row>

    <Row>
        <Col span="11">
        <Table :columns="columns1" :data="data1">
            <div slot="header">头部</div>
            <div slot="footer">底部</div>
        </Table>
        </col>
        <Col span="11" offset="2">
        <Table :columns="columns2" :data="data1">
            <div slot="footer">底部</div>
        </Table>
        </col>
    </Row>
    <Row>
        <Col span="11">
        <Table :columns="columns1" :data="data1" width="550" >
            <div slot="header">头部</div>
            <div slot="footer">底部</div>
        </Table>
        </col>
        <Col span="11" offset="2" >
        <Table :columns="columns2" :data="data1"  width="550" height="200">
            <div slot="footer">底部</div>
        </Table>
        </col>
    </Row>
</div>
</template>
<script>
export default {
    data() {
        return {
            self: this,
            columns1: [{
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
            columns2: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    fixed: 'left'

                },
                {
                    title: '姓名',
                    width: 120,
                    key: 'name'
                },
                {
                    title: '年龄',
                    width: 60,
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address',
                    width: 220
                },
                {
                    title: '地址2',
                    key: 'address',
                    width: 220
                },
                {
                    title: '操作',
                    key: 'action',
                    fixed:'right',
                    width: 120,
                    render() {
                        return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
                    }
                }
            ],
            data1: [{
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道',
                    address: '北京市朝阳区芍药居'
                }
            ],
            tableData1: this.mockTableData1(),
            tableColumns1: [{
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '状态',
                    key: 'status',
                    render(row) {
                        const color = row.status == 1 ? 'blue' : row.status == 2 ? 'green' : 'red';
                        const text = row.status == 1 ? '构建中' : row.status == 2 ? '构建完成' : '构建失败';
                        return `<tag type="dot" color="${color}">${text}</tag>`;
                    }
                },
                {
                    title: '画像内容',
                    key: 'portrayal',
                    render(row, column, index) {
                        return `<Poptip trigger="hover" title="${row.portrayal.length}个画像" placement="bottom">
                                        <tag>${row.portrayal.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in tableData1[${index}].portrayal" style="text-align: center;padding: 4px">{{ item }}</li></ul>
                                        </div>
                                    </Poptip>`;
                    }
                },
                {
                    title: '选定人群数',
                    key: 'people',
                    render(row, column, index) {
                        return `<Poptip trigger="hover" title="${row.people.length}个客群" placement="bottom">
                                        <tag>${row.people.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in tableData1[${index}].people" style="text-align: center;padding: 4px">{{ item.n }}：{{ item.c }}人</li></ul>
                                        </div>
                                    </Poptip>`;
                    }
                },
                {
                    title: '取样时段',
                    key: 'time',
                    render(row) {
                        return `近${row.time}天`
                    }
                },
                {
                    title: '更新时间',
                    key: 'update',
                    render(row, column, index) {
                        return `{{ formatDate(tableData1[${index}].update) }}`;
                    }
                }
            ]
        }
    },
    methods: {
        mockTableData1() {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: '商圈' + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                    people: [{
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                })
            }
            return data;
        },
        formatDate(date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage() {
            // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
            this.tableData1 = this.mockTableData1();
        }
    }
}
</script>
