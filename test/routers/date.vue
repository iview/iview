<template>
    <div style="margin: 50px">
        <i-button @click="type = 'year'">year</i-button>
        <i-button @click="type = 'month'">month</i-button>
        <br>
        <row>
            <i-col span="8">
                <!--<i-button @click="setDate">set date</i-button>-->
                <date-picker
                        :type="type"
                        style="width:200px"
                        placeholder="请选择日期"
                        :value.sync="value"
                        @on-change="change"
                        :confirm="true"
                        :options="options"
                        open
                        @on-open-change="change2">
                    <p>123</p>
                </date-picker>
            </i-col>
            <i-col span="8">
                <date-picker
                        type="daterange"
                        style="width:300px"
                        placeholder="请选择日期"
                        :value.sync="value2"
                        align="right"
                        :editable="true"
                        @on-change="change"
                        :confirm="true"
                        :options="options2"></date-picker>
            </i-col>
        </row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
//                value: new Date(),
                type: 'date',
                value: '2016-12-25',
                value2: ['2016-12-17', '2017-01-05'],
                options2: {
//                    disabledDate(time) {
////                        console.log(time)
////                        return time.getFullYear() < 2016;
////                        return time.getTime() < Date.now() - 8.64e7;
////                        return time && time.valueOf() < Date.now();
//                        if (time.getDate() === 22 || time.getDate() === 23) {
//                            return true;
//                        } else {
//                            return false;
//                        }
//                    },
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            },
                            onClick (picker) {
                                console.log('点击了最近一周');
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            },
                            onClick () {
                                console.log('点击了最近一个月');
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            },
                            onClick () {
                                console.log('点击了最近三个月');
                            }
                        }
                    ]
                },
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
                            text: '最近三个月',
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
                format: 'yyyy-MM',
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
//                this.value = '2016-12-24'
                this.value2 = ['2016-9-1', '2016-9-20']
            }
        }
    }
</script>