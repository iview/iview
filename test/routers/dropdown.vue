<template>
    <Dropdown trigger="hover" @on-click="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown placement="right-start">
                <Dropdown-item>
                    炸酱面
                    <Icon type="arrow-right-b"></Icon>
                </Dropdown-item>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                    <Dropdown-item>炸酱面</Dropdown-item>
                    <Dropdown-item>豆汁儿</Dropdown-item>
                    <Dropdown placement="right-start">
                        <Dropdown-item>
                            冰糖葫芦
                            <Icon type="arrow-right-b"></Icon>
                        </Dropdown-item>
                        <Dropdown-menu slot="list">
                            <Dropdown-item>驴打滚</Dropdown-item>
                            <Dropdown-item key="123">炸酱面</Dropdown-item>
                            <Dropdown-item>豆汁儿</Dropdown-item>
                            <Dropdown-item>冰糖葫芦</Dropdown-item>
                            <Dropdown-item>北京烤鸭</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                    <Dropdown-item>北京烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        methods: {
            click (data) {
                console.log(data)
            }
        }
    }
</script>
