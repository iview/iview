<template>
    <i-button @click="pop">Pop</i-button>
</template>
<script>
    export default {
        methods: {
            pop () {
                for (let i = 0; i < 6; i++) {
                    setTimeout(() => {
                        this.$Notice.open({
                            title: 'test',
                            duration: 1.5 + i
                        });
                    }, i * 500);
                }
            }
        }
    }
</script>
