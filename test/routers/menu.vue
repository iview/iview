<template>
    <div style="margin: 50px;position:relative;top: 0;left: 0;">
        <Menu mode="horizontal" :theme="theme1" active-key="1">
            <Menu-item key="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </Menu-item>
            <Menu-item key="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
            <Menu-item key="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </Menu-item>
            <Menu-item key="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
            <Menu-item key="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </Menu-item>
            <Menu-item key="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
            <Submenu key="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <Menu-group title="使用">
                    <Menu-item key="3-1">新增和新</Menu-item>
                    <Menu-item key="3-2">活跃分析</Menu-item>
                    <Menu-item key="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item key="3-4">用户留存</Menu-item>
                    <Menu-item key="3-5">流失用户</Menu-item>
                </Menu-group>
            </Submenu>
            <Menu-item key="4">
                <Icon type="settings"></Icon>
                综合设置
            </Menu-item>
        </Menu>
    </div>
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
