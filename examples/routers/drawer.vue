<template>
    <div>
        <Button @click="visible = true">show1</Button>
        <Button @click="visible2 = true">show2</Button>
        <Button @click="visible3 = true">show3</Button>

        <div style="width: 500px;height:500px;background: green;position: relative;">
            <Drawer v-model="visible" placement="left" :before-close="handleBeforeClose" draggable inner :transfer="false" width="50" @on-resize-width="hrw" title="抽屉标题" :styles="styles" @on-close="handleClose">
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
        </div>



        <Drawer v-model="visible2" draggable title="抽屉标题" placement="right">
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
        <Drawer v-model="visible3" draggable placement="left">
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
            },
            hrw (w) {
                console.log(w);
            },
            handleBeforeClose () {
                return new Promise((resolve, reject) => {
                    this.$Modal.confirm({
                        title: '关闭确认',
                        content: '您确认要关闭抽屉吗？',
                        onOk: () => {
                            resolve();
                        },
                        onCancel: () => {
                            reject();
                        }
                    });
                });
            }
        }
    };
</script>

<style>
body{
    height: 2000px;
}
</style>
