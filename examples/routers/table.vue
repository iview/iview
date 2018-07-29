<template>
    <div>
        <Table ref="currentRowTable" :columns="columns3" :data="data1" :context-menu="contextMenu"></Table>
        <Button @click="handleClearCurrentRow">Clear</Button>
        <p v-if="contextMenuEvent">
            Context Menu Event: {{contextMenuEvent}}
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
            }
        },
        computed: {
            contextMenu () {
                return {
                    render (h, {row, index}) {
                        return h('DropdownMenu', [
                            h('DropdownItem', {props: {name: `${index} - Some Title`}}, 'Some Title'),
                            h('DropdownItem', {props: {name: `${index} - Yo, ${row.name}`}}, `Yo, ${row.name}`),
                            h('DropdownItem', {props: {name: `${index} - Yo, No.${index}`}}, `Yo, No.${index}`)
                        ]);
                    },
                    onClick: (name) => {
                        this.contextMenuEvent = name;
                    }
                };
            }
        }
    }
</script>
