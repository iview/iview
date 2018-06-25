<template>
    <Button @click="loading">Display loading...</Button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 103000);
            },
        }
    }
</script>
