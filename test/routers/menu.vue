<template>
    <Row>
        <i-col span="8">
            <Menu :theme="theme2">
                <Submenu key="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item key="1-1">文章管理</Menu-item>
                    <Menu-item key="1-2">评论管理</Menu-item>
                    <Menu-item key="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item key="2-1">新增用户</Menu-item>
                    <Menu-item key="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item key="3-1">新增和启动</Menu-item>
                        <Menu-item key="3-2">活跃分析</Menu-item>
                        <Menu-item key="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item key="3-4">用户留存</Menu-item>
                        <Menu-item key="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </i-col>

    </Row>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme2">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'light'
            }
        }
    }
</script>
