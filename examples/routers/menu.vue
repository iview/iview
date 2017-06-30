<template>
    <div>
        <Menu :theme="theme3" active-name="1">
            <Menu-group title="内容管理">
                <Menu-item name="1">
                    <Icon type="document-text"></Icon>
                    文章管理
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="chatbubbles"></Icon>
                    评论管理
                </Menu-item>
            </Menu-group>
            <Menu-group title="统计分析">
                <Menu-item name="3">
                    <Icon type="heart"></Icon>
                    用户留存
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="heart-broken"></Icon>
                    流失用户
                </Menu-item>
            </Menu-group>
        </Menu>
        <br>
        <p>切换主题</p>
        <Radio-group v-model="theme3">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
        </Radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
