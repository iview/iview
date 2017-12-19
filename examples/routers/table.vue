<!--<template>-->
    <!--<div>-->
        <!--<Table width="550" height="200" highlight-row :loading="loading" :columns="columns3" :data="data1" ref="table" @on-current-change="handleChange" @on-row-click="rc">-->
            <!--<div slot="loading">-->
                <!--<Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>-->
                <!--<div>Loading</div>-->
            <!--</div>-->
        <!--</Table>-->
        <!--<br><br>-->
        <!--<Button @click="handleClear">clear</Button>-->
        <!--<Button @click="loading = !loading">Loading</Button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--loading: false,-->
                <!--columns3: [-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name',-->
                        <!--width: 100,-->
                        <!--fixed: 'left'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age',-->
                        <!--width: 100-->
                    <!--},-->
                    <!--{-->
                        <!--title: '省份',-->
                        <!--key: 'province',-->
                        <!--width: 100-->
                    <!--},-->
                    <!--{-->
                        <!--title: '市区',-->
                        <!--key: 'city',-->
                        <!--width: 100-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address',-->
                        <!--width: 200-->
                    <!--},-->
                    <!--{-->
                        <!--title: '邮编',-->
                        <!--key: 'zip',-->
                        <!--width: 100-->
                    <!--},-->
                    <!--{-->
                        <!--title: '操作',-->
                        <!--key: 'action',-->
                        <!--fixed: 'right',-->
                        <!--width: 120,-->
                        <!--render: (h, params) => {-->
                            <!--return h('div', [-->
                                <!--h('Button', {-->
                                    <!--props: {-->
                                        <!--type: 'text',-->
                                        <!--size: 'small'-->
                                    <!--}-->
                                <!--}, '查看'),-->
                                <!--h('Button', {-->
                                    <!--props: {-->
                                        <!--type: 'text',-->
                                        <!--size: 'small'-->
                                    <!--}-->
                                <!--}, '编辑')-->
                            <!--]);-->
                        <!--}-->
                    <!--}-->
                <!--],-->
                <!--data1: [-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--}-->
                <!--]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleClear () {-->
                <!--this.$refs.table.clearCurrentRow();-->
            <!--},-->
            <!--handleChange (newData, oldData) {-->
<!--//                console.log(newData, oldData)-->
            <!--},-->
            <!--rc (data, index) {-->
                <!--console.log(data, index);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
    <!--.layout{-->
        <!--border: 1px solid #d7dde4;-->
        <!--background: #f5f7f9;-->
        <!--position: relative;-->
        <!--border-radius: 4px;-->
        <!--overflow: hidden;-->
    <!--}-->
    <!--.layout-breadcrumb{-->
        <!--padding: 10px 15px 0;-->
    <!--}-->
    <!--.layout-content{-->
        <!--min-height: 200px;-->
        <!--margin: 15px;-->
        <!--overflow: hidden;-->
        <!--background: #fff;-->
        <!--border-radius: 4px;-->
    <!--}-->
    <!--.layout-content-main{-->
        <!--padding: 10px;-->
    <!--}-->
    <!--.layout-copy{-->
        <!--text-align: center;-->
        <!--padding: 10px 0 20px;-->
        <!--color: #9ea7b4;-->
    <!--}-->
    <!--.layout-menu-left{-->
        <!--background: #464c5b;-->
    <!--}-->
    <!--.layout-header{-->
        <!--height: 60px;-->
        <!--background: #fff;-->
        <!--box-shadow: 0 1px 1px rgba(0,0,0,.1);-->
    <!--}-->
    <!--.layout-logo-left{-->
        <!--width: 90%;-->
        <!--height: 30px;-->
        <!--background: #5b6270;-->
        <!--border-radius: 3px;-->
        <!--margin: 15px auto;-->
    <!--}-->
    <!--.layout-ceiling-main a{-->
        <!--color: #9ba7b5;-->
    <!--}-->
    <!--.layout-hide-text .layout-text{-->
        <!--display: none;-->
    <!--}-->
    <!--.ivu-col{-->
        <!--/*transition: width .2s ease-in-out;*/-->
    <!--}-->
<!--</style>-->
<!--<template>-->
    <!--<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">-->
        <!--<Row type="flex">-->
            <!--<Col :span="spanLeft" class="layout-menu-left">-->
                <!--<Menu active-name="1" theme="dark" width="auto">-->
                    <!--<div class="layout-logo-left"></div>-->
                    <!--<MenuItem name="1">-->
                        <!--<Icon type="ios-navigate" :size="iconSize"></Icon>-->
                        <!--<span class="layout-text">选项 1</span>-->
                    <!--</MenuItem>-->
                    <!--<MenuItem name="2">-->
                        <!--<Icon type="ios-keypad" :size="iconSize"></Icon>-->
                        <!--<span class="layout-text">选项 2</span>-->
                    <!--</MenuItem>-->
                    <!--<MenuItem name="3">-->
                        <!--<Icon type="ios-analytics" :size="iconSize"></Icon>-->
                        <!--<span class="layout-text">选项 3</span>-->
                    <!--</MenuItem>-->
                <!--</Menu>-->
            <!--</Col>-->
            <!--<Col :span="spanRight">-->
                <!--<div class="layout-header">-->
                    <!--<Button type="text" @click="toggleClick">-->
                        <!--<Icon type="navicon" size="32"></Icon>-->
                    <!--</Button>-->
                <!--</div>-->
                <!--<div class="layout-breadcrumb">-->
                    <!--<Breadcrumb>-->
                        <!--<BreadcrumbItem href="#">首页</BreadcrumbItem>-->
                        <!--<BreadcrumbItem href="#">应用中心</BreadcrumbItem>-->
                        <!--<BreadcrumbItem>某应用</BreadcrumbItem>-->
                    <!--</Breadcrumb>-->
                <!--</div>-->
                <!--<div class="layout-content">-->
                    <!--<div class="layout-content-main">-->
                        <!--<Table stripe :columns="columns1" :data="data1"></Table>-->
                    <!--</div>-->
                    <!--<hr style="margin: 10px 0;" />-->
                    <!--<div class="layout-content-main">-->
                        <!--<Table stripe :columns="columns2" :data="data2" ref="csvTable" @on-row-click="cc" />-->
                        <!--<i-button type="primary" size="large" @click="exportCSV">-->
                            <!--<icon type="ios-download-outline"></icon> Export to CSV-->
                        <!--</i-button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</Col>-->
        <!--</Row>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--spanLeft: 5,-->
                <!--spanRight: 19,-->
                <!--columns1: [-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address'-->
                    <!--}-->
                <!--],-->
                <!--data1: [-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--}-->
                <!--],-->
                <!--columns2: [-->
                    <!--{-->
                        <!--title: '姓名',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '年龄',-->
                        <!--key: 'age'-->
                    <!--},-->
                    <!--{-->
                        <!--title: '地址',-->
                        <!--key: 'address',-->
                        <!--render: (h) => {-->
                            <!--return h('Button', {-->
                                <!--nativeOn: {-->
                                    <!--click: (event) => {-->
                                        <!--console.log(2)-->
                                        <!--event.stopPropagation();-->
                                    <!--}-->
                                <!--}-->
                            <!--}, 'click')-->
                        <!--}-->
                    <!--}-->
                <!--],-->
                <!--data2: [-->
                    <!--{-->
                        <!--name: '王小明',-->
                        <!--age: 18,-->
                        <!--address: '北京市朝\n阳区芍药居'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '张小刚',-->
                        <!--age: 25,-->
                        <!--address: '北京市海,淀区西二旗'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '李小红',-->
                        <!--age: 30,-->
                        <!--address: '上海市浦东\r新区世纪大道'-->
                    <!--},-->
                    <!--{-->
                        <!--name: '周小伟',-->
                        <!--age: 26,-->
                        <!--address: '深圳市南山区深南大道'-->
                    <!--}-->
                <!--]-->
            <!--};-->
        <!--},-->
        <!--computed: {-->
            <!--iconSize () {-->
                <!--return this.spanLeft === 5 ? 14 : 24;-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--toggleClick () {-->
                <!--if (this.spanLeft === 5) {-->
                    <!--this.spanLeft = 2;-->
                    <!--this.spanRight = 22;-->
                <!--} else {-->
                    <!--this.spanLeft = 5;-->
                    <!--this.spanRight = 19;-->
                <!--}-->
            <!--},-->
            <!--exportCSV () {-->
                <!--this.$refs.csvTable.exportCsv({-->
                    <!--filename: '原始数据',-->
                    <!--separator: ';',-->
                    <!--quoted: true-->
                <!--});-->
            <!--},-->
            <!--cc () {-->
                <!--console.log(1)-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->

<!--<template>-->
    <!--<div>-->
        <!--<Table :columns="columns8" :data="data7" size="small" ref="table"></Table>-->
        <!--<br>-->
        <!--<Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>-->
        <!--<Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</Button>-->
        <!--<Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</Button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--columns8: [-->
                    <!--{-->
                        <!--"title": "名称",-->
                        <!--"key": "name",-->
                        <!--"fixed": "left",-->
                        <!--"width": 200-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "展示",-->
                        <!--"key": "show",-->
                        <!--"width": 150,-->
                        <!--"sortable": true,-->
                        <!--filters: [-->
                            <!--{-->
                                <!--label: '大于4000',-->
                                <!--value: 1-->
                            <!--},-->
                            <!--{-->
                                <!--label: '小于4000',-->
                                <!--value: 2-->
                            <!--}-->
                        <!--],-->
                        <!--filterMultiple: false,-->
                        <!--filterMethod (value, row) {-->
                            <!--if (value === 1) {-->
                                <!--return row.show > 4000;-->
                            <!--} else if (value === 2) {-->
                                <!--return row.show < 4000;-->
                            <!--}-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "唤醒",-->
                        <!--"key": "weak",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "登录",-->
                        <!--"key": "signin",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "点击",-->
                        <!--"key": "click",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "激活",-->
                        <!--"key": "active",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "7日留存",-->
                        <!--"key": "day7",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "30日留存",-->
                        <!--"key": "day30",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "次日留存",-->
                        <!--"key": "tomorrow",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "日活跃",-->
                        <!--"key": "day",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "周活跃",-->
                        <!--"key": "week",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--},-->
                    <!--{-->
                        <!--"title": "月活跃",-->
                        <!--"key": "month",-->
                        <!--"width": 150,-->
                        <!--"sortable": true-->
                    <!--}-->
                <!--],-->
                <!--data7: [-->
                    <!--{-->
                        <!--"name": "推广名称1",-->
                        <!--"fav": 0,-->
                        <!--"show": 7302,-->
                        <!--"weak": 5627,-->
                        <!--"signin": 1563,-->
                        <!--"click": 4254,-->
                        <!--"active": 1438,-->
                        <!--"day7": 274,-->
                        <!--"day30": 285,-->
                        <!--"tomorrow": 1727,-->
                        <!--"day": 558,-->
                        <!--"week": 4440,-->
                        <!--"month": 5610-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称2",-->
                        <!--"fav": 0,-->
                        <!--"show": 4720,-->
                        <!--"weak": 4086,-->
                        <!--"signin": 3792,-->
                        <!--"click": 8690,-->
                        <!--"active": 8470,-->
                        <!--"day7": 8172,-->
                        <!--"day30": 5197,-->
                        <!--"tomorrow": 1684,-->
                        <!--"day": 2593,-->
                        <!--"week": 2507,-->
                        <!--"month": 1537-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称3",-->
                        <!--"fav": 0,-->
                        <!--"show": 7181,-->
                        <!--"weak": 8007,-->
                        <!--"signin": 8477,-->
                        <!--"click": 1879,-->
                        <!--"active": 16,-->
                        <!--"day7": 2249,-->
                        <!--"day30": 3450,-->
                        <!--"tomorrow": 377,-->
                        <!--"day": 1561,-->
                        <!--"week": 3219,-->
                        <!--"month": 1588-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称4",-->
                        <!--"fav": 0,-->
                        <!--"show": 9911,-->
                        <!--"weak": 8976,-->
                        <!--"signin": 8807,-->
                        <!--"click": 8050,-->
                        <!--"active": 7668,-->
                        <!--"day7": 1547,-->
                        <!--"day30": 2357,-->
                        <!--"tomorrow": 7278,-->
                        <!--"day": 5309,-->
                        <!--"week": 1655,-->
                        <!--"month": 9043-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称5",-->
                        <!--"fav": 0,-->
                        <!--"show": 934,-->
                        <!--"weak": 1394,-->
                        <!--"signin": 6463,-->
                        <!--"click": 5278,-->
                        <!--"active": 9256,-->
                        <!--"day7": 209,-->
                        <!--"day30": 3563,-->
                        <!--"tomorrow": 8285,-->
                        <!--"day": 1230,-->
                        <!--"week": 4840,-->
                        <!--"month": 9908-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称6",-->
                        <!--"fav": 0,-->
                        <!--"show": 6856,-->
                        <!--"weak": 1608,-->
                        <!--"signin": 457,-->
                        <!--"click": 4949,-->
                        <!--"active": 2909,-->
                        <!--"day7": 4525,-->
                        <!--"day30": 6171,-->
                        <!--"tomorrow": 1920,-->
                        <!--"day": 1966,-->
                        <!--"week": 904,-->
                        <!--"month": 6851-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称7",-->
                        <!--"fav": 0,-->
                        <!--"show": 5107,-->
                        <!--"weak": 6407,-->
                        <!--"signin": 4166,-->
                        <!--"click": 7970,-->
                        <!--"active": 1002,-->
                        <!--"day7": 8701,-->
                        <!--"day30": 9040,-->
                        <!--"tomorrow": 7632,-->
                        <!--"day": 4061,-->
                        <!--"week": 4359,-->
                        <!--"month": 3676-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称8",-->
                        <!--"fav": 0,-->
                        <!--"show": 862,-->
                        <!--"weak": 6520,-->
                        <!--"signin": 6696,-->
                        <!--"click": 3209,-->
                        <!--"active": 6801,-->
                        <!--"day7": 6364,-->
                        <!--"day30": 6850,-->
                        <!--"tomorrow": 9408,-->
                        <!--"day": 2481,-->
                        <!--"week": 1479,-->
                        <!--"month": 2346-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称9",-->
                        <!--"fav": 0,-->
                        <!--"show": 567,-->
                        <!--"weak": 5859,-->
                        <!--"signin": 128,-->
                        <!--"click": 6593,-->
                        <!--"active": 1971,-->
                        <!--"day7": 7596,-->
                        <!--"day30": 3546,-->
                        <!--"tomorrow": 6641,-->
                        <!--"day": 1611,-->
                        <!--"week": 5534,-->
                        <!--"month": 3190-->
                    <!--},-->
                    <!--{-->
                        <!--"name": "推广名称10",-->
                        <!--"fav": 0,-->
                        <!--"show": 3651,-->
                        <!--"weak": 1819,-->
                        <!--"signin": 4595,-->
                        <!--"click": 7499,-->
                        <!--"active": 7405,-->
                        <!--"day7": 8710,-->
                        <!--"day30": 5518,-->
                        <!--"tomorrow": 428,-->
                        <!--"day": 9768,-->
                        <!--"week": 2864,-->
                        <!--"month": 5811-->
                    <!--}-->
                <!--]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--exportData (type) {-->
                <!--if (type === 1) {-->
                    <!--this.$refs.table.exportCsv({-->
                        <!--filename: '原始数据',-->
                        <!--separator: ';',-->
                        <!--quoted: true,-->
                        <!--callback (data) {-->
                            <!--console.log(data);-->
                        <!--}-->
                    <!--});-->
                <!--} else if (type === 2) {-->
                    <!--this.$refs.table.exportCsv({-->
                        <!--filename: '排序和过滤后的数据',-->
                        <!--original: false-->
                    <!--});-->
                <!--} else if (type === 3) {-->
                    <!--this.$refs.table.exportCsv({-->
                        <!--filename: '自定义数据',-->
                        <!--columns: this.columns8.filter((col, index) => index < 4),-->
                        <!--data: this.data7.filter((data, index) => index < 4)-->
                    <!--});-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<Table :columns="columns10" :data="data9"></Table>-->
<!--</template>-->
<!--<script>-->
    <!--import expandRow from '../components/tableExpand.vue';-->
    <!--export default {-->
        <!--components: { expandRow },-->
        <!--data () {-->
            <!--return {-->
                <!--columns10: [-->
                    <!--{-->
                        <!--type: 'expand',-->
                        <!--width: 50,-->
                        <!--render: (h, params) => {-->
                            <!--return h(expandRow, {-->
                                <!--props: {-->
                                    <!--row: params.row-->
                                <!--}-->
                            <!--})-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Name',-->
                        <!--key: 'name'-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Age',-->
                        <!--key: 'age',-->
                        <!--fixed: 'right'-->
                    <!--},-->
                    <!--{-->
                        <!--title: 'Address',-->
                        <!--key: 'address',-->
                        <!--fixed: 'right'-->
                    <!--}-->
                <!--],-->
                <!--data9: [-->
                    <!--{-->
                        <!--name: 'John Brown',-->
                        <!--age: 18,-->
                        <!--address: 'New York No. 1 Lake Park',-->
                        <!--job: 'Data engineer',-->
                        <!--interest: 'badminton',-->
                        <!--birthday: '1991-05-14',-->
                        <!--book: 'Steve Jobs',-->
                        <!--movie: 'The Prestige',-->
                        <!--music: 'I Cry'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Jim Green',-->
                        <!--age: 25,-->
                        <!--address: 'London No. 1 Lake Park',-->
                        <!--job: 'Data Scientist',-->
                        <!--interest: 'volleyball',-->
                        <!--birthday: '1989-03-18',-->
                        <!--book: 'My Struggle',-->
                        <!--movie: 'Roman Holiday',-->
                        <!--music: 'My Heart Will Go On'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Joe Black',-->
                        <!--age: 30,-->
                        <!--address: 'Sydney No. 1 Lake Park',-->
                        <!--job: 'Data Product Manager',-->
                        <!--interest: 'tennis',-->
                        <!--birthday: '1992-01-31',-->
                        <!--book: 'Win',-->
                        <!--movie: 'Jobs',-->
                        <!--music: 'Don’t Cry'-->
                    <!--},-->
                    <!--{-->
                        <!--name: 'Jon Snow',-->
                        <!--age: 26,-->
                        <!--address: 'Ottawa No. 2 Lake Park',-->
                        <!--job: 'Data Analyst',-->
                        <!--interest: 'snooker',-->
                        <!--birthday: '1988-7-25',-->
                        <!--book: 'A Dream in Red Mansions',-->
                        <!--movie: 'A Chinese Ghost Story',-->
                        <!--music: 'actor'-->
                    <!--}-->
                <!--]-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <div>
        <div style="width: 550px;">
            <Table height="200" border :columns="columns2" :data="data4"></Table>
        </div>
        <br><br><br>
        <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
//                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>

