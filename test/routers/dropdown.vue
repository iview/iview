<template>
    <Dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {

    }
</script>
