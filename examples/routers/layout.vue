<template>
    <div class="layout-demo-con">
        <Button @click="change">修改Sider绑定的变量来控制收缩</Button>
        <Layout :style="{minHeight: '100vh'}">
            <Sider 
                v-model="isCollapsed"
                collapsed-width="0" 
                hide-trigger
                breakpoint="sm"
                @on-collapse="changed"
                collapsible
                ref="side"
                width="200">
                <Menu width="auto" theme="dark" active-name="1">
                    <MenuGroup title="内容管理">
                        <MenuItem name="1">
                            <Icon type="document-text"></Icon>
                            文章管理
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="chatbubbles"></Icon>
                            评论管理
                        </MenuItem>
                    </MenuGroup>
                    <MenuGroup title="统计分析">
                        <MenuItem name="3">
                            <Icon type="heart"></Icon>
                            用户留存
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="heart-broken"></Icon>
                            流失用户
                        </MenuItem>
                    </MenuGroup>
                </Menu>
                <!-- <div slot="trigger"><Icon type="document-text"></Icon></div> -->
            </Sider>
            <Layout class-name="test-class">
                <Header :style="{background: '#eee'}"><Button @click="toggleCollapse">菜单</Button></Header>
                <Content :style="{background:'#FFCF9E'}">
                    <p v-for="i in 100" :key="i">{{ i }}</p>
                </Content>
                <Footer>sdfsdsdfsdfs</Footer>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse () {
            this.$refs.side.toggleCollapse();
        },
        change () {
            this.isCollapsed = !this.isCollapsed;
        },
        changed (res) {
            console.log(res)
        }
    },
    watch: {
        isCollapsed (val) {
            // console.log(val)
        }
    }
};
</script>
<style lang="less" scoped>
    .layout-demo-con{
        height: 100%;
    }
</style>