<template>
    <Page :total="1000" show-sizer show-elevator show-total></Page>
    <br><br>
    <Page :total="1000" show-sizer show-elevator show-total size="small"></Page>
    <br><br>
    <Page :current="2" :total="50" simple></Page>
</template>
<script>
    import { Page } from 'iview';
    export default {
        components: { Page }
    }
</script>
