<template>
    <div>
        <i-switch v-model="m1" true-value="yes" false-value="no">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        {{ m1 }}
        <div @click="m1 = 'no'">toggle</div>
        <br><br>
        <i-switch size="large"></i-switch>
        <i-switch></i-switch>
        <i-switch size="small"></i-switch>
        <br><br>
        <i-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch>
            <Icon type="android-done" slot="open"></Icon>
            <Icon type="android-close" slot="close"></Icon>
        </i-switch>
        <br><br>
        <i-switch size="large">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </i-switch>
        <i-switch size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
        </i-switch>
        <br><br>
        <i-switch :disabled="disabled"></i-switch>
        <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: 'yes',
                disabled: true
            }
        },
        methods: {
            change (status) {
                console.log(status)
            }
        }
    }
</script>
