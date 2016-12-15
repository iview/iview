<template>
    <div style="margin: 50px">
        <br>
        <row>
            <i-col span="4">
                <date-picker style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options" @on-change="change" @on-open-change="change2" :format="format"></date-picker>
            </i-col>
            <i-col span="4">
                <date-picker type="year" style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options"></date-picker>
            </i-col>
            <i-col span="4">
                <date-picker type="month" style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options"></date-picker>
            </i-col>
        </row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: new Date(),
//                value: '',
                options: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
//                        return time && time.valueOf() < Date.now();
                    }
                },
                format: 'yyyy/MM/dd'
            }
        },
        computed: {},
        methods: {
            change (date) {
//                console.log(date)
            },
            change2 (s) {
//                console.log(s)
            }
        }
    }
</script>