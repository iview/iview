<!--<template>-->
<!--    <Tabs :animated="false" value="name1">-->
<!--        <Tab-pane label="标签一" name="name1">-->
<!--            <Table :columns="columns1"></Table>-->
<!--        </Tab-pane>-->
<!--        <Tab-pane label="标签二" name="name2">-->
<!--            <Table :columns="columns1"></Table>-->
<!--        </Tab-pane>-->
<!--        <Tab-pane label="标签三" name="name3">-->
<!--            <Table :columns="columns1"  ></Table>-->
<!--        </Tab-pane>-->
<!--    </Tabs>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                columns1: [-->
<!--                    {-->
<!--                        title: '姓名',-->
<!--                        key: 'name'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '年龄',-->
<!--                        key: 'age'-->
<!--                    },-->
<!--                    {-->
<!--                        title: '地址',-->
<!--                        key: 'address'-->
<!--                    }-->
<!--                ],-->
<!--                data1: [-->
<!--                    {-->
<!--                        name: '王小明',-->
<!--                        age: 18,-->
<!--                        address: '北京市朝阳区芍药居'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '张小刚',-->
<!--                        age: 25,-->
<!--                        address: '北京市海淀区西二旗'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '李小红',-->
<!--                        age: 30,-->
<!--                        address: '上海市浦东新区世纪大道'-->
<!--                    },-->
<!--                    {-->
<!--                        name: '周小伟',-->
<!--                        age: 26,-->
<!--                        address: '深圳市南山区深南大道'-->
<!--                    }-->
<!--                ]-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<!--<template>-->
<!--    <div>-->
<!--        <Button @click="showSecond = !showSecond">change</Button>-->
<!--        <Tabs value="name1">-->
<!--            <TabPane label="标签一" name="name1" :index="1">标签一的内容</TabPane>-->
<!--            <TabPane label="标签二" name="name2" :index="2" v-if="showSecond">标签二的内容</TabPane>-->
<!--            <TabPane label="标签三" name="name3" :index="3">标签三的内容</TabPane>-->
<!--        </Tabs>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                showSecond: false-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<template>
    <Tabs>
        <TabPane label="macOS" icon="logo-apple">
            <Tabs>
                <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
                <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
                <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
            </Tabs>
        </TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {

    }
</script>
