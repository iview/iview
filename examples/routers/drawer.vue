<template>
    <div>
        <Button @click="visible = true">show1</Button>
        <Button @click="visible2 = true">show2</Button>
        <Button @click="visible3 = true">show3</Button>

        <div style="width: 500px;height:500px;background: green;position: relative;">
            <Drawer name="drawer1" v-model="visible" placement="left" :before-close="handleBeforeClose" draggable inner :transfer="false" width="50" @on-resize-width="hrw" title="抽屉标题" :styles="styles" @on-close="handleClose">
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



        <Drawer name="drawer2" v-model="visible2" draggable title="抽屉标题" placement="right">
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
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
        <Drawer scrollable  name="drawer3" v-model="visible3" draggable placement="left">
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
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
            <Button @click="modal1 = true">嵌套的modal</Button>
        </Drawer>
        <Modal v-model="modal1" title="modal1">modal1</Modal>
        <div v-for="item in 200" :key="item">{{ item }}</div>
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
                },
                modal1: false,
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
