<template>
    <div>
        <Dropdown @on-click="handleClick">
            <a href="javascript:void(0)">
                下拉菜单
                <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
                <Dropdown-item name="1">驴打滚</Dropdown-item>
                <Dropdown-item name="2">炸酱面</Dropdown-item>
                <Dropdown-item name="3" disabled>豆汁儿</Dropdown-item>
                <Dropdown-item name="4">冰糖葫芦</Dropdown-item>
                <Dropdown-item name="5" divided>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
    </div>
</template>
<script>
    export default {
        methods: {
            handleClick (val) {
                console.log(val)
            }
        }
    }
</script>
