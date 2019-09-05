<template>
    <div>
        <i-switch v-model="m1" :loading="loading" @on-change="change" :before-change="beforeChange">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        {{ m1 }}
        <div @click="m1 = !m1">toggle</div>
        <div @click="loading = !loading">loading</div>
        <br><br>
        <i-switch size="large" loading></i-switch>
        <i-switch></i-switch>
        <i-switch size="small" v-model="m1" :loading="loading"></i-switch>
        <br><br>
        <i-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch>
            <Icon type="md-checkmark" slot="open"></Icon>
            <Icon type="md-close" slot="close"></Icon>
        </i-switch>
        <br><br>
        <i-switch size="large">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </i-switch>
        <i-switch size="large" v-model="m1" :loading="loading">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
        </i-switch>
        <br><br>
        <i-switch :disabled="disabled"></i-switch>
        <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
        <Divider></Divider>
        <i-switch v-model="switch1" true-color="#13ce66" false-color="#ff4949" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: true,
                disabled: true,
                loading: false,
                switch1: true
            }
        },
        methods: {
            change (status) {
                console.log(status)
            },
            beforeChange () {
                return new Promise((resolve, reject) => {
                    this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
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
    }
</script>
