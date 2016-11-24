<style>
    body{
        height: auto;
    }
</style>
<template>
    <div>
        <!--<i-table size="large" border stripe :columns="columns" :data="data"></i-table>-->
        <br>
        <i-table
                border
                :height="height"
                highlight-row
                :columns="columns"
                :data="data"
                :row-class-name="rowClsName"
                @on-current-change="current"
                @on-select="select"
                @on-selection-change="schange"
                @on-select-all="sall">
            <!--<div slot="header">表格标题</div>-->
            <!--<div slot="footer">表格标题</div>-->
        </i-table>
        <br>
        <!--<i-table size="small" border stripe :columns="columns" :data="data"></i-table>-->
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
                        type: 'selection',
                        width: 50
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'left',
//                        width: 100
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        align: 'right',
//                        width: 100
//                        render (row) {
//                            return `<i-button>${row.age}</i-button>`
//                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        align: 'center',
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
                        edit: false
                    },
                    {
                        name: '胡国伟',
                        age: 28,
                        address: '北京市西城区',
                        edit: false
                    }
                ],
                height: 200
            }
        },
        computed: {
        
        },
        methods: {
            show (name) {
                this.$Message.info(name);
            },
            edit (index) {
//                this.data[index].edit = true;
                this.$Message.info(this.data[index].name);
            },
            current (newData, oldData) {
                console.log(newData);
                console.log(oldData);
            },
            select (a,b){
                console.log(a);
                console.log(b);
            },
            schange (a) {
                console.log(a)
            },
            sall (a) {
                console.log(a)
            },
            rowClsName (row, index) {
                if (index == 1) {
                    return 'row-success';
                } else {
                    return '';
                }
            }
        },
        ready () {
            setTimeout(() => {
//                this.height = 150;
                return
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