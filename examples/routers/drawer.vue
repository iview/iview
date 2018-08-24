<template>
    <div>
        <Button @click="visible = true">show1</Button>
        <Button @click="visible2 = true">show2</Button>
        <Button @click="visible3 = true">show3</Button>

        <div style="width: 500px;height:500px;background: green;position: relative;">

        </div>

        <Drawer v-model="visible" width="70" title="抽屉标题" :styles="styles" @on-close="handleClose">
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <Button @click="visible2 = true">show2</Button>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
        </Drawer>


        <Drawer v-model="visible2" title="抽屉标题" placement="right">
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容22</p>
        </Drawer>
        <Drawer v-model="visible3" placement="left">
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容22</p>
        </Drawer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible: false,
                visible2: false,
                visible3: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    paddingBottom: '53px',
                },
                ms: {
                    backgroundColor: 'rgba(255,0,255,0.5)'
                }
            };
        },
        methods: {
            handleClose () {
                this.$Message.info('关闭了');
            }
        }
    };
</script>

<style>
body{
    height: 2000px;
}
</style>
