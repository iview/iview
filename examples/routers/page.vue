<template>
    <div>
        <Page :total="100" :current="current"></Page>
        {{ current }}
        <Button @click="current = 1">set current</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 2
            }
        }
    }
</script>
