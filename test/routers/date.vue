<template>
    <div style="margin: 150px">
        <br>
        <row>
            <i-col span="8">
                <!--<i-button @click="setDate">set date</i-button>-->
                <date-picker
                        style="width:200px"
                        placeholder="请选择日期"
                        :value.sync="value"
                        :options="options"
                        @on-change="change"
                        :format="format"
                        :editable="false"
                        @on-open-change="change2"></date-picker>
            </i-col>
            <i-col span="8">
                <date-picker type="year" style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options"></date-picker>
            </i-col>
            <i-col span="8">
                <date-picker type="month" style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options"></date-picker>
            </i-col>
        </row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
//                value: new Date(),
                value: '2016-12-25',
                options: {
                    disabledDate(time) {
//                        console.log(time)
//                        return time.getFullYear() < 2016;
                        return time.getTime() < Date.now() - 8.64e7;
//                        return time && time.valueOf() < Date.now();
                    },
                    shortcuts: [
                        {
                            text: '今天',
                            value () {
//                                return new Date();
                                return '1/2/19'
                            },
                            onClick (picker) {
                                console.log('点击了今天');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick () {
                                console.log('点击了昨天');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick () {
                                console.log('点击了一周前');
                            }
                        }
                    ]
                },
                format: 'yyyy-MM-dd'
            }
        },
        computed: {},
        methods: {
            change (date) {
                console.log(date)
            },
            change2 (s) {
//                console.log(s)
            },
            setDate () {
                this.value = '2016-12-24'
            }
        }
    }
</script>