<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1" @on-open-change="hc">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析2
                </template>
                <MenuGroup title="使用2">
                    <MenuItem name="4-1">新增和启动2</MenuItem>
                    <MenuItem name="4-2">活跃分析2</MenuItem>
                    <MenuItem name="4-3">时段分析2</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存2">
                    <MenuItem name="4-4">用户留存2</MenuItem>
                    <MenuItem name="4-5">流失用户2</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="5">
                <Icon type="settings"></Icon>
                综合设置
            </MenuItem>
        </Menu>
        <br><br><br>
        <Menu :theme="theme1" active-name="1" @on-open-change="hc">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析2
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="4-1">新增和启动</MenuItem>
                    <MenuItem name="4-2">活跃分析</MenuItem>
                    <MenuItem name="4-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="4-4">用户留存</MenuItem>
                    <MenuItem name="4-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="5">
                <Icon type="settings"></Icon>
                综合设置
            </MenuItem>
        </Menu>
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
            hc (data) {
                console.log(data);
            }
        }
    }
</script>