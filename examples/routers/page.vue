<template>
    <div>
        <Page :total="total" show-sizer show-elevator show-total></Page>
        <Button type="primary" @click="subject">- 1</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                total: 21
            }
        },
        methods: {
            subject() {
                this.total -= 1;
            }
        }
    }
</script>
