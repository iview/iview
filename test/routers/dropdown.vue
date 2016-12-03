<style>
    body{
        padding: 50px;
    }
</style>
<template>
    <Dropdown trigger="click" align="right" @on-click="click">
        <i-button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </i-button>
        <Dropdown-menu slot="list">
            <Dropdown-item>张三</Dropdown-item>
            <Dropdown-item disabled>李四</Dropdown-item>
            <Dropdown-item>王五</Dropdown-item>
            <Dropdown-item divided>周六</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {
            click (key) {
                console.log(key)
            }
        }
    }
</script>