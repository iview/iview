<template>
    <div>
        <Table ref="currentRowTable" :columns="columns3" :data="data1" @on-row-contextmenu="onRowContextMenu"></Table>
        <Button @click="handleClearCurrentRow">Clear</Button>
        <p v-if="contextMenuEvent">
            Context Menu Event:<br>
            &nbsp;&nbsp;x:{{contextMenuEvent.x}}, y: {{contextMenuEvent.y}}<br>
            &nbsp;&nbsp;pageX: {{contextMenuEvent.pageX}}, pageY: {{contextMenuEvent.pageY}} <br>
            &nbsp;&nbsp;clientX:{{contextMenuEvent.clientX}}, clientY: {{contextMenuEvent.clientY}}<br>
            &nbsp;&nbsp;screenX:{{contextMenuEvent.screenX}}, screenY: {{contextMenuEvent.screenY}}<br>
            &nbsp;&nbsp;offsetX:{{contextMenuEvent.offsetX}}, offsetY: {{contextMenuEvent.offsetY}}<br>
            &nbsp;&nbsp;layerX:{{contextMenuEvent.layerX}}, layerY: {{contextMenuEvent.layerY}}<br>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                        indexMethod (row) {
                            return row._index;
                        }
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
                        key: 'address',
                        tooltip: true
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: '自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park自定义渲染列，使用 Vue 的 Render 函',
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
                contextMenuEvent: null
            }
        },
        methods: {
            handleClearCurrentRow () {
                this.$refs.currentRowTable.clearCurrentRow();
                this.contextMenuEvent = null;
            },
            onRowContextMenu (row, index, event) {
                this.contextMenuEvent = event;
            }
        }
    }
</script>
