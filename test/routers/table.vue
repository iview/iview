<template>
    <div>
        <i-table :columns="columns" :data="data"></i-table>
    </div>
</template>
<script>
    export default {
        props: {
        
        },
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        fixed: 'left',
//                        width: 100
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        fixed: 'right',
//                        width: 100
//                        render (row) {
//                            return `<i-button>${row.age}</i-button>`
//                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        fixed: 'center',
//                        width: 100
//                        render (row, column, index) {
//                            if (row.edit) {
//                                return `<i-input :value.sync="data[${index}].name"></i-input>`;
//                            } else {
//                                return `<Tooltip content="${row.address}"><i-button @click="show(${index})">${row.name}</i-button></Tooltip>`;
//                            }
//                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
//                        width: 200,
                        render (row, column, index) {
                            return `<i-button @click="edit(${index})">编辑</i-button>`
                        }
                    }
                ],
                data: [
                    {
                        name: '梁灏',
                        age: 25,
                        address: '北京市朝阳区',
                        edit: false
                    },
                    {
                        name: '段模',
                        age: 26,
                        address: '北京市海淀区',
                        edit: false
                    },
                    {
                        name: '刘天娇',
                        age: 27,
                        address: '北京市东城区',
                        edit: true
                    }
                ]
            }
        },
        computed: {
        
        },
        methods: {
            show (name) {
                this.$Message.info(name);
            },
            edit (index) {
                this.data[index].edit = true;
            }
        },
        ready () {
            setTimeout(() => {
                return;
                this.data.push({
                    name: '刘天娇2',
                    age: 272,
                    address: '北京市东城区2',
                    edit: false
                });
            }, 1000);
        }
    }
</script>