<template>
    <Menu active-name="1-2" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">我是菜单一</MenuItem>
                <MenuItem name="1-2">我是菜单二</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">我是菜单三</MenuItem>
                <MenuItem name="1-4">我是菜单四</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing"></Icon>
                Navigation Two
            </template>
            <MenuItem name="2-1">我是菜单五</MenuItem>
            <MenuItem name="2-2">我是菜单六</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">我是菜单七</MenuItem>
                <MenuItem name="3-2">我是菜单八</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-gear"></Icon>
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
    export default {

    }
</script>
