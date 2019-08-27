<template>
    <div>
        <Page prev-text="上一页" next-text="下一页" :total="total" show-sizer show-elevator show-total  :current.sync="current"></Page>
        {{ current }}
        <Button type="primary" @click="subject">- 1</Button>
        <Button type="primary" @click="change">Change</Button>
        <Page :current="2" :total="50" simple></Page>

        <div style="margin:10px 0px">
            <Page :total="1000"  show-sizer show-elevator show-total  :current="12"></Page>
        </div>
        <div style="margin:10px 0px">
            <Page :total="1000" show-sizer show-elevator show-total  :current="12"></Page>
        </div>
        <div style="margin:100px 0px">
            <Page :total="500" show-sizer show-elevator show-total  ></Page>
        </div>
        <div style="margin:100px 0px">
            <Page :total="500" show-sizer show-elevator  ></Page>
        </div>
        <div style="margin:100px 0px">
            <Page :total="500" show-sizer show-elevator   ></Page>
        </div>
        <div style="margin:10px 0px">
            <Page :total="500" show-sizer  ></Page>
        </div>
        <div style="margin: 10px 0px">
            <Page :total="40" size="small"></Page>
            <br><br>
            <Page :total="40" size="small" show-elevator show-sizer></Page>
            <br><br>
            <Page :total="40" size="small" show-total></Page>
            <br><br>
        </div>
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
