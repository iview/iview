<template>
    <div>
        <Menu :theme="theme1"  active-name="1" accordion @on-select="handleSelect" @on-open-change="handleOpen" :open-names="openArr">
            <Menu-item name="1">
                <Icon type="ios-paper"></Icon>
                一级1
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                一级2
            </Menu-item>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    一级3
                </template>
                <Menu-item name="3-1">二级1</Menu-item>
                <Menu-item name="3-2">二级2</Menu-item>
                <Submenu name="3-3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        二级3
                    </template>
                    <Menu-item name="3-3-1">三级1</Menu-item>
                    <Menu-item name="3-3-2">三级2</Menu-item>
                    <Submenu name="3-3-3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            三级3
                        </template>
                        <Menu-item name="3-3-3-1">四级1</Menu-item>
                        <Menu-item name="3-3-3-2">四级2</Menu-item>
                        <MenuGroup title="Menu-Group">
                            <MenuItem name="3-3-3-3-1">
                                <Icon type="document-text"></Icon>
                                Group-item1
                            </MenuItem>
                            <MenuItem name="3-3-3-3-2">
                                <Icon type="chatbubbles"></Icon>
                                Group-item2
                            </MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <Submenu name="3-3-4">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            三级4
                        </template>
                        <Menu-item name="3-3-4-1">四级1</Menu-item>
                        <Menu-item name="3-3-4-2">四级2</Menu-item>
                    </Submenu>
                </Submenu>
                <Submenu name="3-4">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        二级4
                    </template>
                    <Menu-item name="3-4-1">三级1</Menu-item>
                    <Menu-item name="3-4-2">三级2</Menu-item>
                </Submenu>
            </Submenu>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                一级4
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
                theme1: 'dark',
                value4: '',
                openArr: ['3', '3-3', '3-3-3']
            };
        },
        methods: {
            handleSelect (name) {
                // console.log(name);
                return name;
            },
            handleOpen (openArr) {
                // console.log(openArr);
                return openArr;
            }
        }
    };
</script>
