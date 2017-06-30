<template>
    <div style="margin: 100px;">
        <Page :total="100" :current="val" show-sizer placement="top"></Page>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                val: 2
            }
        }
    }
</script>
