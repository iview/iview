<template>
    <div>{{ name }}</div>
</template>
<script>
    export default {
        props: {
            name: String
        },
        created () {
            console.log(this.name + ': 被创建');
        },
        destroyed () {
            console.log(this.name + ': 被销毁');
        }
    }
</script>