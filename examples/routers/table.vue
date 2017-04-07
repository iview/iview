<template>
    <div>
        <template v-if="expandAllStatus">
            <Button @click="expandAll(true)">展开全部</Button>
        </template>
        <template v-else>
            <Button @click="expandAll(false)">收起全部</Button>
        </template>
        <Table ref="mineTable" :columns="columns1" :data="data1" :expand-template="expandTemplate"
        @on-expand="onExpand" @on-expand-all="onExpandAll">
            <div slot="header">头部</div>
            <div slot="footer">底部</div>
        </Table>
    </div>
</template>
<script>

    import expandExample from './expand-example.vue'

    export default {
        data () {
            return {
                expandTemplate: expandExample,
                expandAllStatus: true,
                columns1: [
                    {
                        type: 'expand',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
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
                ]
            }
        },
        methods: {
            // 行点击事件测试。 单行打开
//            onRowClick (row, index) {
//                this.$refs['mineTable'].showExpand(index)
//            },
            onExpand(expands, row, status, index) {
                console.log('展开一行操作');
                console.log(expands);
                this.expandAllStatus = expands.length === 0
            },
            onExpandAll(expands, rows, status) {
                console.log('全部展开操作');
                console.log(expands);
                this.expandAllStatus = expands.length === 0
            },
            expandAll (status) {
                this.$refs['mineTable'].showExpandAll(status)
            }

        }
    }
</script>
