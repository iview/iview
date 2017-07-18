<template>
    <Dropdown transfer>
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
</template>
<script>
    export default {

    }
</script>
