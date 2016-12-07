<template>
    <div>
        <i-button @click="toggleMode">调整方向</i-button>
        <Menu :mode="mode" active-key="1">
            <Menu-item key="1">
                <Icon type="ionic"></Icon>
                <span>导航一</span>
            </Menu-item>
            <Menu-item key="2">导航二</Menu-item>
            <Submenu key="3">
                <span slot="title">导航三</span>
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
                mode: 'horizontal'
            }
        },
        computed: {},
        methods: {
            toggleMode () {
                this.mode = this.mode === 'horizontal' ? 'vertical' : 'horizontal';
            }
        }
    }
</script>