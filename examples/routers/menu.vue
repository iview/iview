<template>
    <div>
        <Menu ref="menu" active-name="1-2" :open-names="openNames" theme="dark" accordion @on-open-change="handleOpenChange">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Navigation One
                </template>
                <MenuGroup title="Item 1">
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                </MenuGroup>
                <MenuGroup title="Item 2">
                    <MenuItem name="1-3">Option 3</MenuItem>
                    <MenuItem name="1-4">Option 4</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing"></Icon>
                    Navigation Two
                </template>
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
                <Submenu name="3">
                    <template slot="title">Submenu</template>
                    <MenuItem name="3-1">Option 7</MenuItem>
                    <MenuItem name="3-2">Option 8</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">Submenu</template>
                    <MenuItem name="4-1">Option 7</MenuItem>
                    <MenuItem name="4-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="ios-gear"></Icon>
                    Navigation Three
                </template>
                <MenuItem name="5-1">Option 9</MenuItem>
                <MenuItem name="5-2">Option 10</MenuItem>
                <MenuItem name="5-3">Option 11</MenuItem>
                <MenuItem name="5-4">Option 12</MenuItem>
            </Submenu>
        </Menu>
        <br/>
        <Menu ref="menu2" theme="dark" accordion :open-names="openNames2" @on-open-change="handleOpenChange">
            <template v-for="item in menuList">
                <custem-menu-item v-if="item.children" :key="`menu-${item.name}`" :parent-item="item"></custem-menu-item>
                <menu-item v-else :name="`${item.name}`" :key="`menu-${item.name}`">{{ item.name }}</menu-item>
            </template>
        </Menu>
        <Button @click="addNewItem">添加菜单项</Button>
        <Button @click="changeActive">修改激活项</Button>
        <Button @click="setOpenNames">修改展开数组</Button>
        <Menu mode="horizontal" theme="light" :active-name="activeName" @on-open-change="hc">
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
    </div>
</template>
<script>
import custemMenuItem from './custem-menu-item.vue'
    export default {
        components: {
            custemMenuItem
        },
        data () {
            return {
                openNames: ['1'],
                openNames2: [],
                menuList: [
                    {
                        name: '111',
                        children: [
                            {
                                name: '111-111'
                            },
                            {
                                name: '111-222'
                            }
                        ]
                    },
                    {
                        name: '222',
                        children: [
                            {
                                name: '222-111'
                            },
                            {
                                name: '222-222',
                                children: [
                                    {
                                        name: '222-222-111'
                                    },
                                    {
                                        name: '222-222-222',
                                        children: [
                                            {
                                                name: '222-222-222-111'
                                            },
                                            {
                                                name: '222-222-222-222'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: '222-333',
                                children: [
                                    {
                                        name: '222-333-111',
                                        children: [
                                            {
                                                name: '222-333-111-111'
                                            },
                                            {
                                                name: '222-333-111-222'
                                            }
                                        ]
                                    },
                                    {
                                        name: '222-333-222',
                                        children: [
                                            {
                                                name: '222-333-222-111'
                                            },
                                            {
                                                name: '222-333-222-222'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                activeName: '1'
            };
        },
        methods: {
            handleOpenChange (name) {
                console.log(name)
            },
            setOpenNames () {
                this.openNames = ['2', '3'];
                this.openNames2 = ['222', '222-222', '222-222-222', '222-222-222-111']
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened();
                    this.$refs.menu2.updateOpened();
                })
            },
            addNewItem () {
                this.menuList[1].children[1].children.push({
                    name: '222-222-333',
                    children: [
                        {
                            name: '222-222-333-111'
                        }
                    ]
                })
            },
            changeActive () {
                this.activeName = String(Number(this.activeName) + 1)
            },
            hc (data) {
                console.log(data);
            }
        }
    }
</script>
