<template>
    <div>
        <Progress :percent="percent"></Progress>
        <Button-group size="large">
            <Button icon="ios-plus-empty" @click.native="add"></Button>
            <Button icon="ios-minus-empty" @click.native="minus"></Button>
        </Button-group>
        <Progress :percent="25" :stroke-width="5"></Progress>
        <Progress :percent="100">
            <Icon type="checkmark-circled"></Icon>
            <span>成功</span>
        </Progress>
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
