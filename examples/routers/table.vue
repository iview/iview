<template>
    <Table border :columns="columns5" :data="data5" @on-select="onSelect(true)" @on-select-cancel="onSelect(false)"></Table>
</template>
<script>
    import etable from '../components/table.vue';
    import test from '../components/test.vue';
    export default {
        data () {
            return {
                columns5: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        render: (h) => {
                            console.log('______hover______');
                            return h(etable);
                        },
                        width: 50
                    },
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'name',
                        render: (h, params) => {
                            return h(test, {
                                props: {
                                    row: params.row
                                }
                            });
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
                    },
                ]
            }
        },

        methods: {
            onSelect (value) {
                window.alert(value);
            }
        }
    }
</script>
