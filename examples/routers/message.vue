<template>
    <i-button @click.native="time">显示一个10秒的提示</i-button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Message.info('我将在10秒后消失', 3, () => {
                    console.log(1111)
                });
            }
        },
        mounted () {
            this.$Message.config({
                top: 50,
                duration: 3
            });
        }
    }
</script>
