<template>
    <Menu mode="horizontal" theme="primary" active-key="1">
        <Submenu key="1">
            <template slot="title">
                <Icon type="soup-can-outline"></Icon>
                数据管理
            </template>
            <Menu-group title="使用">
                <Menu-item key="1-1">新增和启动新增和启动</Menu-item>
                <Menu-item key="1-2">活跃分析</Menu-item>
                <Menu-item key="1-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item key="1-4">用户留存</Menu-item>
                <Menu-item key="1-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
    </Menu>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme1">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
        <Radio value="primary"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
