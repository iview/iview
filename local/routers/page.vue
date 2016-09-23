<style>
    body{
        padding: 100px;
    }
</style>
<template>
    <Page :current="1" :total="total" show-sizer show-total show-elevator :page-size="10" simple @on-change="setPage"></Page>
</template>
<script>
    import { Page } from 'iview';

    export default {
        components: {
            Page
        },
        props: {
        
        },
        data () {
            return {
                total: 512
            }
        },
        computed: {
        
        },
        methods: {
            setPage (page) {
                console.log(page)
            }
        }
    }
</script>