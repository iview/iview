<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="222-1">

                <Submenu name="222">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="222-1"> <Icon type="ios-people"></Icon>新增用户</MenuItem>
                    <MenuItem name="222-2">活跃用户</MenuItem>
                </Submenu>
            <Menu-item name="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </Menu-item>

            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                
                    <Menu-item name="3-1">
                     <Icon type="ios-people"></Icon>新增和启动</Menu-item>
                    <Menu-item name="3-2"> <Icon type="ios-people"></Icon>活跃分析</Menu-item>
                    <Menu-item name="3-3"> <Icon type="ios-people"></Icon>时段分析</Menu-item>
             
              
                    <Menu-item name="3-4"> <Icon type="ios-people"></Icon>用户留存</Menu-item>
                    <Menu-item name="3-5"> <Icon type="ios-people"></Icon>流失用户</Menu-item>
              
                <Submenu name="22">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="22-1"> <Icon type="ios-people"></Icon>新增用户</MenuItem>
                    <MenuItem name="22-2">活跃用户</MenuItem>
                </Submenu>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                用户管理11111111111
            </Menu-item>
     
            </Submenu>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                综合设置
            </Menu-item>
        </Menu>
        <br>
        <p>切换主题</p>
        <Radio-group v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </Radio-group>
        <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                value4: ''
            }
        }
    }
</script>
