<template>
    <div>
        <Page :total="total" show-sizer show-elevator show-total :current.sync="current"></Page>
        {{ current }}
        <Button type="primary" @click="subject">- 1</Button>
        <Button type="primary" @click="change">Change</Button>
        <Page :current="2" :total="50" simple></Page>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 1,
                total: 21
            }
        },
        methods: {
            subject() {
                this.total -= 1;
            },
            change() {
                this.current = 1;
            }
        }
    }
</script>
