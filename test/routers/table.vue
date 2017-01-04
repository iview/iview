<template>
    <i-button @click="changeFilter">改变filter</i-button>
    <span v-if="currentRow !== null">Current Row: {{currentRow.name}}</span>
    <Switch size="small" @on-change="switchCellEllipsis"></Switch> Ellipsis
    <i-table
      border
      :columns="columns6"
      width="500"
      :data="[]"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>

    <br/>

    <i-table
      border
      :columns="columns7"
      :data="[]"
      no-data-text="No Data"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>

    <br/>

    <i-table
      border
      :columns="columns7"
      :data="[]"
      size="small"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>

    <br/>

    <i-table
      border
      :columns="columns7"
      :data="[]"
      size="large"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>

    <br/>

    <i-table
      border
      :columns="columns7"
      :data="data5"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>

    <br/>

    <i-table
      border
      :columns="columns6"
      width="500"
      :data="data5"
      :highlight-row="true"
      @on-current-change="onCurrentChange"
      @on-dblclick="onDblclick">
    </i-table>
</template>
<script>
    export default {
        data () {
            return {
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
