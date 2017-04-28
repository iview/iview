<!--<template>-->
    <!--<Row>-->
        <!--<i-col span="8">-->
            <!--<Card>-->
                <!--<Dropdown @on-click="handleClick">-->
                    <!--<a href="javascript:void(0)">-->
                        <!--下拉菜单-->
                        <!--<Icon type="arrow-down-b"></Icon>-->
                    <!--</a>-->
                    <!--<Dropdown-menu slot="list">-->
                        <!--<Dropdown-item name="1">驴打滚</Dropdown-item>-->
                        <!--<Dropdown-item name="2">炸酱面</Dropdown-item>-->
                        <!--<Dropdown-item name="3" disabled>豆汁儿</Dropdown-item>-->
                        <!--<Dropdown-item name="4">冰糖葫芦</Dropdown-item>-->
                        <!--<Dropdown-item name="5" divided>北京烤鸭</Dropdown-item>-->
                    <!--</Dropdown-menu>-->
                <!--</Dropdown>-->
            <!--</Card>-->
        <!--</i-col>-->
    <!--</Row>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--methods: {-->
            <!--handleClick (val) {-->
                <!--console.log(val)-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <Table border :context="self" :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Dropdown @on-click="change"><a href="javascript:void(0)">下拉菜单<Icon type="arrow-down-b"></Icon></a><Dropdown-menu slot="list"><Dropdown-item name="1">驴打滚</Dropdown-item><Dropdown-item name="2">炸酱面</Dropdown-item><Dropdown-item disabled name="3">豆汁儿</Dropdown-item><Dropdown-item>冰糖葫芦</Dropdown-item><Dropdown-item divided>北京烤鸭</Dropdown-item></Dropdown-menu></Dropdown>`;
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    }
                ]
            }
        },
        methods: {
            change (s) {
                console.log(s)
            }
        }
    }
</script>
