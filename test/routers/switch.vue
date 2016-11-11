<template>
    <Switch @on-change="change"></Switch>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <Switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </Switch>
    <Switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </Switch>
    <Switch :disabled="disabled"></Switch>
    <i-button type="primary" @click="disabled = !disabled">Toggle Disabled</i-button>
    <Switch size="small"></Switch>
</template>
<script>
    import { Switch, Message, iButton, Icon } from 'iview';
    export default {
        components: { Switch, Message, iButton, Icon },
        data () {
            return {
                disabled: true
            }
        },
        methods: {
            change (status) {
                Message.info('开关状态：' + status);
            }
        }
    }
</script>
