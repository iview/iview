<template>
    <div>{{ row.name }}</div>
</template>
<script>
    export default {
        props: {
            row: Object
        },
        mounted () {
//            console.log(1);
        },
        beforeDestroy () {
//            console.log(2);
        }
    }
</script>