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

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        /*transition: width .2s ease-in-out;*/
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto">
                <div class="layout-logo-left"></div>
                <MenuItem name="1">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">选项 1</span>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">选项 2</span>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">选项 3</span>
                </MenuItem>
            </Menu>
            </Col>
            <Col :span="spanRight">
            <div class="layout-header">
                <Button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="#">首页</BreadcrumbItem>
                    <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                    <BreadcrumbItem>某应用</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <Table stripe :columns="columns1" :data="data1"></Table>
                </div>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; TalkingData
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
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
                ]
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
