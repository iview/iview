<template>
    <div>
        <Avatar icon="person" size="large" style="background-color: #fde3cf;color: #f56a00"></Avatar>
        <Avatar icon="person"></Avatar>
        <Avatar icon="person" size="small"></Avatar>
        <Avatar icon="person" size="large" shape="square"></Avatar>
        <Avatar icon="person" shape="square"></Avatar>
        <Avatar icon="person" size="small" shape="square"></Avatar>
        <br><br>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large"></Avatar>
        <Avatar src="https://avatars2.githubusercontent.com/u/5370542?v=4&s=460"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small"></Avatar>
        <Avatar src="https://avatars2.githubusercontent.com/u/5370542?v=4&s=460" size="large" shape="square"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small" shape="square"></Avatar>
        <br><br>
        <Avatar size="large">Leo</Avatar>
        <Avatar size="large">A</Avatar>
        <Avatar size="default">A</Avatar>
        <Avatar size="small">A</Avatar>
        <Avatar size="large">Tomserm</Avatar>
        <Avatar size="large">{{ name }}</Avatar>
        {{ name }}
        <br><br>
        <Badge dot>
            <Avatar icon="person" shape="square"></Avatar>
        </Badge>
        <Badge :count="3">
            <Avatar icon="person" shape="square"></Avatar>
        </Badge>
        <Button @click="change">change</Button>

        <Menu mode="horizontal" :theme="theme1" active-name="1">
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
            <MenuItem name="4">
                <Icon type="settings"></Icon>
                综合设置
            </MenuItem>
            <div>
                <Avatar icon="person"></Avatar>
            </div>
        </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                name: 'Aresn',
                theme1: 'dark'
            }
        },
        methods: {
            change () {
                this.name = 'Tomserm'
            }
        }
    }
</script>
