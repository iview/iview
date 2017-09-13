<!--<template>-->
    <!--<Tabs value="name1" :animated="false">-->
        <!--<Tab-pane label="test" name="test">-->
            <!--<Tabs type="card" v-bind:animated="true">-->
                <!--<Tab-pane label="标签2一">标签2一的内容</Tab-pane>-->
                <!--<Tab-pane label="标签2二">标签2二的内容</Tab-pane>-->
                <!--<Tab-pane label="标签2三">标签2三的内容</Tab-pane>-->
            <!--</Tabs>-->
        <!--</Tab-pane>-->
        <!--<Tab-pane :label="label1" name="name1">-->
            <!--<Table :columns="columns1" :data="data1"></Table>-->
        <!--</Tab-pane>-->
        <!--<Tab-pane label="标签二" name="name2">-->
            <!--<Table :columns="columns1" :data="data1"></Table>-->
        <!--</Tab-pane>-->
        <!--<Tab-pane label="标签三" name="name3">-->
            <!--<Table :columns="columns1" :data="data1"></Table>-->
        <!--</Tab-pane>-->
    <!--</Tabs>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--label1: (h) => {-->
                    <!--return h('div', [-->
                        <!--h('span', '标签一'),-->
                        <!--h('Button', 'button')-->
                    <!--]);-->
                <!--},-->
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
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
