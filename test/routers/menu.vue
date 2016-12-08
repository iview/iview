<template>
    <div>
        <Menu mode="horizontal" active-key="1">
            <Menu-item key="1">
                <Icon type="ionic"></Icon><span>导航一</span>
            </Menu-item>
            <Menu-item key="2">导航二</Menu-item>
            <Submenu key="3">
                <template slot="title"><Icon type="ionic"></Icon>导航三</template>
                <Menu-group title="集合1">
                    <Menu-item key="3-1">导航三 - 一</Menu-item>
                    <Menu-item key="3-2">导航三 - 二</Menu-item>
                </Menu-group>
                <Menu-group title="集合2">
                    <Menu-item key="3-3">导航三 - 三</Menu-item>
                    <Menu-item key="3-4">导航三 - 四</Menu-item>
                </Menu-group>
            </Submenu>
            <Menu-item key="4">导航四</Menu-item>
        </Menu>
        <br><br>
        <Menu :mode="mode" active-key="1" @on-open-change="change">
            <Menu-item key="1">
                <Icon type="ionic"></Icon>
                <span>导航一</span>
            </Menu-item>
            <Menu-group title="集合1">
                <Menu-item key="2">
                    <Icon type="ionic"></Icon>
                    导航二
                </Menu-item>
                <Menu-item key="3">导航三</Menu-item>
            </Menu-group>
            <Menu-group title="集合2">
                <Menu-item key="4">导航四</Menu-item>
                <Menu-item key="5">导航五</Menu-item>
            </Menu-group>
            <Submenu key="6">
                <template slot="title"><Icon type="ionic"></Icon>导航六</template>
                <Menu-group title="集合1">
                    <Menu-item key="3-1">导航三 - 一</Menu-item>
                    <Menu-item key="3-2">导航三 - 二</Menu-item>
                </Menu-group>
                <Menu-group title="集合2">
                    <Menu-item key="3-3">导航三 - 三</Menu-item>
                    <Menu-item key="3-4">导航三 - 四</Menu-item>
                </Menu-group>
            </Submenu>
            <Submenu key="7">
                <template slot="title"><Icon type="ionic"></Icon>导航七</template>
                <Menu-group title="集合1">
                    <Menu-item key="7-1">导航三 - 一</Menu-item>
                    <Menu-item key="7-2">导航三 - 二</Menu-item>
                </Menu-group>
                <Menu-group title="集合2">
                    <Menu-item key="7-3">导航三 - 三</Menu-item>
                    <Menu-item key="7-4">导航三 - 四</Menu-item>
                </Menu-group>
            </Submenu>
        </Menu>
        <!--<Menu :mode="mode" active-key="1">-->
            <!--<Menu-item key="1">-->
                <!--<Icon type="ionic"></Icon>-->
                <!--<span>导航一</span>-->
            <!--</Menu-item>-->
            <!--<Menu-item key="2">导航二</Menu-item>-->
            <!--<Submenu key="3">-->
                <!--<template slot="title"><Icon type="ionic"></Icon><span>导航三</span></template>-->
                <!--<Menu-group title="集合1">-->
                    <!--<Menu-item key="3-1">导航三 - 一</Menu-item>-->
                    <!--<Menu-item key="3-2">导航三 - 二</Menu-item>-->
                <!--</Menu-group>-->
                <!--<Menu-group title="集合2">-->
                    <!--<Menu-item key="3-3">导航三 - 三</Menu-item>-->
                    <!--<Menu-item key="3-4">导航三 - 四</Menu-item>-->
                <!--</Menu-group>-->
            <!--</Submenu>-->
            <!--<Menu-item key="4">导航四</Menu-item>-->
        <!--</Menu>-->
        <!--<br><br>-->
        <!--<Menu mode="horizontal" theme="dark" active-key="1">-->
            <!--<Menu-item key="1">-->
                <!--<Icon type="ionic"></Icon>-->
                <!--<span>导航一</span>-->
            <!--</Menu-item>-->
            <!--<Menu-item key="2">导航二</Menu-item>-->
            <!--<Submenu key="3">-->
            <!--<span slot="title">导航三</span>-->
            <!--<Menu-item key="3-1">导航三 - 一</Menu-item>-->
            <!--<Menu-item key="3-2">导航三 - 二</Menu-item>-->
            <!--<Menu-item key="3-3">导航三 - 三</Menu-item>-->
            <!--</Submenu>-->
            <!--<Menu-item key="4">导航四</Menu-item>-->
        <!--</Menu>-->
        <!--<br><br>-->
        <!--<Menu mode="horizontal" theme="primary" active-key="1">-->
            <!--<Menu-item key="1">-->
                <!--<Icon type="ionic"></Icon>-->
                <!--<span>导航一</span>-->
            <!--</Menu-item>-->
            <!--<Menu-item key="2">导航二</Menu-item>-->
            <!--<Submenu key="3">-->
            <!--<span slot="title">导航三</span>-->
            <!--<Menu-item key="3-1">导航三 - 一</Menu-item>-->
            <!--<Menu-item key="3-2">导航三 - 二</Menu-item>-->
            <!--<Menu-item key="3-3">导航三 - 三</Menu-item>-->
            <!--</Submenu>-->
            <!--<Menu-item key="4">导航四</Menu-item>-->
        <!--</Menu>-->
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                mode: 'vertical'
            }
        },
        computed: {},
        methods: {
            toggleMode () {
                this.mode = this.mode === 'horizontal' ? 'vertical' : 'horizontal';
            },
            change (d) {
                console.log(d)
            }
        }
    }
</script>