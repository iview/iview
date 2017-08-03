<template>
    <div>
        <i-progress :percent="percent"></i-progress>
        <Button-group size="large">
            <Button icon="ios-plus-empty" @click.native="add"></Button>
            <Button icon="ios-minus-empty" @click.native="minus"></Button>
        </Button-group>
        <i-progress :percent="25" :stroke-width="5"></i-progress>
        <i-progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
        </i-progress>
        <i-progress :percent="percent"></i-progress>
        <div style="height: 150px">
            <i-progress vertical :percent="percent" :stroke-width="20" hide-info></i-progress>
            <i-progress vertical :percent="percent"></i-progress>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
