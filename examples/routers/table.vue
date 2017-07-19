<!--<template>-->
    <!--<div>-->
        <!--<Table-->
                <!--width="500"-->
                <!--border-->
                <!--highlight-row-->
                <!--:columns="columns2"-->
                <!--@on-selection-change="change2"-->
                <!--:data="data3"></Table>-->
        <!--<Button @click="addData">添加数据</Button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import test from '../components/test.vue';-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--columns2: [-->
<!--//                    {-->
<!--//                        type: 'selection',-->
<!--//                        width: 60,-->
<!--//                        align: 'center'-->
<!--//                    },-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name',-->
                        <!--width: 100,-->
<!--//                        sortable: true,-->
                        <!--fixed: 'right',-->
                        <!--render: (h, params) => {-->
                            <!--return h('div', [-->
                                <!--h('Button', {-->
                                    <!--props: {-->
                                        <!--type: 'primary',-->
                                        <!--size: 'small'-->
                                    <!--},-->
                                    <!--on: {-->
                                        <!--click: this.edit-->
                                    <!--},-->
                                <!--}, '修改')-->
                            <!--]);-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age',-->
                        <!--sortable: true,-->
<!--//                        width: 100-->
                    <!--},-->
                    <!--{-->
                        <!--title: '省份',-->
                        <!--key: 'province',-->
                        <!--sortable: true,-->
<!--//                        fixed: 'right',-->
<!--//                        width: 100-->
                    <!--},-->
<!--//                    {-->
<!--//                        title: '市区',-->
<!--//                        key: 'city',-->
<!--//                        width: 100-->
<!--//                    },-->
<!--//                    {-->
<!--//                        title: '地址',-->
<!--//                        key: 'address',-->
<!--//                        width: 200-->
<!--//                    },-->
<!--//                    {-->
<!--//                        title: '邮编',-->
<!--//                        key: 'zip',-->
<!--//                        width: 100-->
<!--//                    },-->
<!--//                    {-->
<!--//                        title: '操作',-->
<!--//                        key: 'action',-->
<!--//                        fixed: 'right',-->
<!--//                        width: 120,-->
<!--//                        render: (h, params) => {-->
<!--//                            return h(test);-->
<!--//                        }-->
<!--//                    }-->
                <!--],-->
                <!--data3: [-->
<!--//                    {-->
<!--//                        name: '王小明',-->
<!--//                        age: 18,-->
<!--//                        address: '北京市朝阳区芍药居',-->
<!--//                        province: '北京市',-->
<!--//                        city: '朝阳区',-->
<!--//                        zip: 100000-->
<!--//                    },-->
<!--//                    {-->
<!--//                        name: '张小刚',-->
<!--//                        age: 25,-->
<!--//                        address: '北京市海淀区西二旗',-->
<!--//                        province: '北京市',-->
<!--//                        city: '海淀区',-->
<!--//                        zip: 100000-->
<!--//                    },-->
<!--//                    {-->
<!--//                        name: '李小红',-->
<!--//                        age: 30,-->
<!--//                        address: '上海市浦东新区世纪大道',-->
<!--//                        province: '上海市',-->
<!--//                        city: '浦东新区',-->
<!--//                        zip: 100000-->
<!--//                    },-->
<!--//                    {-->
<!--//                        name: '周小伟',-->
<!--//                        age: 26,-->
<!--//                        address: '深圳市南山区深南大道',-->
<!--//                        province: '广东',-->
<!--//                        city: '南山区',-->
<!--//                        zip: 100000-->
<!--//                    }-->
                <!--]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--change1 (d, l) {-->
<!--//                console.log(d)-->
<!--//                console.log(l)-->
            <!--},-->
            <!--change2 (d, l) {-->
                <!--console.log(d);-->
                <!--console.log(l);-->
            <!--},-->
            <!--addData () {-->
                <!--this.data3.push({-->
                    <!--name: '周小伟',-->
                    <!--age: 26,-->
                    <!--address: '深圳市南山区深南大道',-->
                    <!--province: '广东',-->
                    <!--city: '南山区',-->
                    <!--zip: 100000-->
                <!--})-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <div>
        <i-table :data="dtData" :height="400" :columns="dtCols" border highlight-row></i-table>
        <Button type="ghost" @click="addData"> add data</Button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                dtData:[],
                dtCols:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '分类名称',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: '操作',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: this.edit
                                    },
                                }, '修改')
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            addData () {
                this.dtData.push({
                    name: '发送到附件是'
                })
            }
        }
    }
</script>