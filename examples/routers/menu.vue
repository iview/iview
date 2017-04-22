<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" @on-select="s">
            <Row type="flex" justify="center" align="middle">
                <i-col span="12">
                    <Menu-item name="1">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </Menu-item>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Menu-item name="4">
                        <Icon type="settings"></Icon>
                        综合设置
                    </Menu-item>
                </i-col>
            </Row>
        </Menu>
        <br>
        <p>切换主题</p>
        <Radio-group v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </Radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        methods: {
            s (s) {
                console.log(s)
            }
        }
    }
</script>


<!--<template>-->
    <!--<div>-->
        <!--<Row>-->
            <!--<i-col span="8">-->
                <!--<Menu :theme="theme2" @on-select="s">-->
                    <!--<Submenu name="1">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-paper"></Icon>-->
                            <!--内容管理-->
                        <!--</template>-->
                        <!--<Menu-item name="1-1">文章管理</Menu-item>-->
                        <!--<Menu-item name="1-2">评论管理</Menu-item>-->
                        <!--<Menu-item name="1-3">举报管理</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="2">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-people"></Icon>-->
                            <!--用户管理-->
                        <!--</template>-->
                        <!--<Menu-item name="2-1">新增用户</Menu-item>-->
                        <!--<Menu-item name="2-2">活跃用户</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="3">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="stats-bars"></Icon>-->
                            <!--统计分析-->
                        <!--</template>-->
                        <!--<Menu-group title="使用">-->
                            <!--<Menu-item name="3-1">新增和启动</Menu-item>-->
                            <!--<Menu-item name="3-2">活跃分析</Menu-item>-->
                            <!--<Menu-item name="3-3">时段分析</Menu-item>-->
                        <!--</Menu-group>-->
                        <!--<Menu-group title="留存">-->
                            <!--<Menu-item name="3-4">用户留存</Menu-item>-->
                            <!--<Menu-item name="3-5">流失用户</Menu-item>-->
                        <!--</Menu-group>-->
                    <!--</Submenu>-->
                <!--</Menu>-->
            <!--</i-col>-->
            <!--<i-col span="8">-->
                <!--<Menu :theme="theme2" active-name="1-2" :open-names="['1']" @on-select="s">-->
                    <!--<Submenu name="1">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-paper"></Icon>-->
                            <!--内容管理-->
                        <!--</template>-->
                        <!--<Menu-item name="1-1">文章管理</Menu-item>-->
                        <!--<Menu-item name="1-2">评论管理</Menu-item>-->
                        <!--<Menu-item name="1-3">举报管理</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="2">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-people"></Icon>-->
                            <!--用户管理-->
                        <!--</template>-->
                        <!--<Menu-item name="2-1">新增用户</Menu-item>-->
                        <!--<Menu-item name="2-2">活跃用户</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="3">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="stats-bars"></Icon>-->
                            <!--统计分析-->
                        <!--</template>-->
                        <!--<Menu-group title="使用">-->
                            <!--<Menu-item name="3-1">新增和启动</Menu-item>-->
                            <!--<Menu-item name="3-2">活跃分析</Menu-item>-->
                            <!--<Menu-item name="3-3">时段分析</Menu-item>-->
                        <!--</Menu-group>-->
                        <!--<Menu-group title="留存">-->
                            <!--<Menu-item name="3-4">用户留存</Menu-item>-->
                            <!--<Menu-item name="3-5">流失用户</Menu-item>-->
                        <!--</Menu-group>-->
                    <!--</Submenu>-->
                <!--</Menu>-->
            <!--</i-col>-->
            <!--<i-col span="8">-->
                <!--<Menu :theme="theme2" :open-names="['1']" accordion @on-select="s">-->
                    <!--<Submenu name="1">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-paper"></Icon>-->
                            <!--内容管理-->
                        <!--</template>-->
                        <!--<Menu-item name="1-1">文章管理</Menu-item>-->
                        <!--<Menu-item name="1-2">评论管理</Menu-item>-->
                        <!--<Menu-item name="1-3">举报管理</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="2">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-people"></Icon>-->
                            <!--用户管理-->
                        <!--</template>-->
                        <!--<Menu-item name="2-1">新增用户</Menu-item>-->
                        <!--<Menu-item name="2-2">活跃用户</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="3">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="stats-bars"></Icon>-->
                            <!--统计分析-->
                        <!--</template>-->
                        <!--<Menu-group title="使用">-->
                            <!--<Menu-item name="3-1">新增和启动</Menu-item>-->
                            <!--<Menu-item name="3-2">活跃分析</Menu-item>-->
                            <!--<Menu-item name="3-3">时段分析</Menu-item>-->
                        <!--</Menu-group>-->
                        <!--<Menu-group title="留存">-->
                            <!--<Menu-item name="3-4">用户留存</Menu-item>-->
                            <!--<Menu-item name="3-5">流失用户</Menu-item>-->
                        <!--</Menu-group>-->
                    <!--</Submenu>-->
                <!--</Menu>-->
            <!--</i-col>-->
        <!--</Row>-->
        <!--<br>-->
        <!--<p>切换主题</p>-->
        <!--<Radio-group v-model="theme2">-->
            <!--<Radio label="light"></Radio>-->
            <!--<Radio label="dark"></Radio>-->
        <!--</Radio-group>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--theme2: 'light'-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--s (s) {-->
                <!--console.log(s);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
