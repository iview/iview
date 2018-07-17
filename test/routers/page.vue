<template>
    <Page :total="1000" show-sizer show-elevator show-total class="classr" :style="{float: 'right'}" @on-page-size-change="pc"></Page>
    <br><br>
    <Page :total="1000" show-sizer show-elevator show-total size="small" class="classr2"></Page>
    <br><br>
    <Page :current="2" :total="50" simple></Page>
</template>
<script>
    import { Page } from 'iview';
    export default {
        components: { Page },
        methods: {
            pc (page) {
                console.log(page)
            }
        }
    }
</script>
