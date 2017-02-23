<template>
    <i-table highlight-row border :content="self" :columns="columns7" :data="data6"></i-table>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true,
                        sortMethod: function (a, b, type) {
                            if (type === 'asc') {
                                return a < b ? 1 : -1;
                            } else if (type === 'desc') {
                                return a > b ? 1 : -1;
                            }
                        }
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
//                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                            return `<Poptip width="250" confirm placement="left" title="您确认删除吗？" @on-ok="deleteProject(${index})">
                <i-button size="small" type="error">删除</i-button>
              </Poptip>`
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        _highlight: true,
                        _checked: true,
                        _disabled: false
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        _checked: false,
                        _disabled: true
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        _checked: true,
                        _disabled: true
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        _checked: false,
                        _disabled: false
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
