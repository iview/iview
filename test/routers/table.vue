<style>
    body{
        overflow: hidden;
    }
</style>
<template>
    <i-table border :columns="columns1" :data="data1"></i-table>
    <i-table border height="200" :columns="columns1" :data="data2"></i-table>
    <!--<i-table width="550" height="200" border :columns="columns2" :data="data4"></i-table>-->
    <!--<i-button @click="changeFilter">改变filter</i-button>-->
    <!--<span v-if="currentRow !== null">Current Row: {{currentRow.name}}</span>-->
    <!--<Switch size="small" @on-change="switchCellEllipsis"></Switch> Ellipsis-->
    <!--<i-table-->
      <!--border-->
      <!--:columns="columns6"-->
      <!--width="500"-->
      <!--:data="[]"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->

    <!--<br/>-->

    <!--<i-table-->
      <!--border-->
      <!--:columns="columns7"-->
      <!--:data="[]"-->
      <!--no-data-text="No Data"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->

    <!--<br/>-->

    <!--<i-table-->
      <!--border-->
      <!--:columns="columns7"-->
      <!--:data="[]"-->
      <!--size="small"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->

    <!--<br/>-->

    <!--<i-table-->
      <!--border-->
      <!--:columns="columns7"-->
      <!--:data="[]"-->
      <!--size="large"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->

    <!--<br/>-->

    <!--<i-table-->
      <!--border-->
      <!--:columns="columns7"-->
      <!--:data="data5"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->

    <!--<br/>-->

    <!--<i-table-->
      <!--border-->
      <!--:columns="columns6"-->
      <!--width="500"-->
      <!--:data="data5"-->
      <!--:highlight-row="true"-->
      <!--@on-current-change="onCurrentChange"-->
      <!--@on-dblclick="onDblclick">-->
    <!--</i-table>-->
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '地址',
                        key: 'address',
                        fixed: 'right',
                        width: 200
                    },
                    {
                        title: '邮编',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
//                        fixed: 'right',
                        width: 120,
                        render () {
                            return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
                        }
                    }
                ],
                data4: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    }
                ],
                columns1: [
                    {
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
                ],
                data2: [
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
                    },
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
                ],
                columns6: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '日期',
                        key: 'date',
                        fixed: 'left',
                        width: 100
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100,
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
                        width: 100,
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
                    },
                    {
                      title: '长文本',
                      key: 'longText',
                      width: 100,
                      ellipsis: false
                    }
                ],
                columns7: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '姓名',
                        key: 'name'
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
                    },
                    {
                      title: '长文本',
                      key: 'longText',
                      ellipsis: false
                    }
                ],
                data5: [
                   {
                       name: '王小明',
                       age: 18,
                       address: '北京市朝阳区芍药居',
                       date: '2016-10-03',
                       longText: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                   },
                   {
                       name: '张小刚',
                       age: 25,
                       address: '北京市海淀区西二旗',
                       date: '2016-10-01',
                       longText: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                   },
                   {
                       name: '李小红',
                       age: 30,
                       address: '上海市浦东新区世纪大道',
                       date: '2016-10-02',
                       longText: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                   }
                ],
                currentRow: null
            }
        },
        methods: {
            changeFilter () {
                this.columns6[2].filters = [
                    {
                        label: '小于25岁',
                        value: 2
                    }
                ]
            },
            switchCellEllipsis (status) {
                this.columns6[5].ellipsis = status
            },
            onClick (data) {
                window.alert('Click ' + data.name)
            },
            onCurrentChange (data) {
                this.currentRow = data
            },
            onDblclick (data) {
                window.alert('Double Click ' + data.name)
            }
        }
    }
</script>
