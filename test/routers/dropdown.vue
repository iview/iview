<template>
    <Dropdown @on-visible-change="v">
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <i-button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </i-button>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        methods: {
            v (data) {
                console.log(data)
            }
        }
    }
</script>
