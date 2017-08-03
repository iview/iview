<template>
    <Dropdown transfer>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown placement="right-start" transfer>
                <Dropdown-item>
                    北京烤鸭
                    <Icon type="ios-arrow-right"></Icon>
                </Dropdown-item>
                <Dropdown-menu slot="list">
                    <Dropdown-item>挂炉烤鸭</Dropdown-item>
                    <Dropdown-item>焖炉烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {

    }
</script>
