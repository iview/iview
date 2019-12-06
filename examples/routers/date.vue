<!--
<template>
    <div>
        {{ value1 }}
        <Date-picker v-model="value1" type="datetimerange" placeholder="选择日期" style="width: 200px" @on-change="hc"></Date-picker>
        <Button @click="setDate">set date</Button>
        <Button @click="getDate">get date</Button>
        &lt;!&ndash;<Date-picker v-model="value2" type="daterange" placeholder="选择日期" style="width: 200px"></Date-picker>&ndash;&gt;
        &lt;!&ndash;<Date-picker transfer type="datetimerange" placeholder="选择日期" style="width: 200px" @on-change="changeDate"></Date-picker>&ndash;&gt;
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: ['2014-10-10 10:00:01', '2017-10-10 10:00:00'],
                value2: []
            }
        },
        methods: {
            changeDate(date){
                console.log(date);
            },
            setDate () {
                this.value1 = ['2016-10-10', '2017-10-10'];
            },
            getDate () {
                const date = new Date(this.value1);
                console.log(date.getMonth()+1)
            },
            hc (d) {
                console.log(d);
            }
        }
    }
</script>
<style>
    body{
        width: 100%;
    }
</style>
-->


<!--<template>-->
    <!--<row>-->
        <!--<i-col span="12">-->
            <!--<Date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--</i-col>-->
        <!--<i-col span="12">-->
            <!--<Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--</i-col>-->
    <!--</row>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--options1: {-->
                    <!--shortcuts: [-->
                        <!--{-->
                            <!--text: '今天',-->
                            <!--value () {-->
                                <!--return new Date();-->
                            <!--},-->
                            <!--onClick: (picker) => {-->
                                <!--this.$Message.info('点击了今天');-->
                            <!--}-->
                        <!--},-->
                        <!--{-->
                            <!--text: '昨天',-->
                            <!--value () {-->
                                <!--const date = new Date();-->
                                <!--date.setTime(date.getTime() - 3600 * 1000 * 24);-->
                                <!--return date;-->
                            <!--},-->
                            <!--onClick: (picker) => {-->
                                <!--this.$Message.info('点击了昨天');-->
                            <!--}-->
                        <!--},-->
                        <!--{-->
                            <!--text: '一周前',-->
                            <!--value () {-->
                                <!--const date = new Date();-->
                                <!--date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);-->
                                <!--return date;-->
                            <!--},-->
                            <!--onClick: (picker) => {-->
                                <!--this.$Message.info('点击了一周前');-->
                            <!--}-->
                        <!--}-->
                    <!--]-->
                <!--},-->
                <!--options2: {-->
                    <!--shortcuts: [-->
                        <!--{-->
                            <!--text: '最近一周',-->
                            <!--value () {-->
                                <!--const end = new Date();-->
                                <!--const start = new Date();-->
                                <!--start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);-->
                                <!--return [start, end];-->
                            <!--}-->
                        <!--},-->
                        <!--{-->
                            <!--text: '最近一个月',-->
                            <!--value () {-->
                                <!--const end = new Date();-->
                                <!--const start = new Date();-->
                                <!--start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);-->
                                <!--return [start, end];-->
                            <!--}-->
                        <!--},-->
                        <!--{-->
                            <!--text: '最近三个月',-->
                            <!--value () {-->
                                <!--const end = new Date();-->
                                <!--const start = new Date();-->
                                <!--start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);-->
                                <!--return [start, end];-->
                            <!--}-->
                        <!--}-->
                    <!--]-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<row>-->
        <!--<i-col span="12">-->
            <!--<Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--</i-col>-->
        <!--<i-col span="12">-->
            <!--<Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--</i-col>-->
    <!--</row>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--value1: '2016-01-01',-->
                <!--value2: ['2016-01-01', '2016-02-15']-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<div>-->
        <!--<div style="width: 50%; float: left;">-->
            <!--<Date-picker type="date" placeholder="选择日期和时间" style="width: 200px"></Date-picker> | Single date, no date-->
            <!--<br>-->
            <!--<Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker> | Single datetime, no date-->
            <!--<br>-->
            <!--<Date-picker type="datetime" v-model="dateString" placeholder="选择日期和时间" style="width: 200px"></Date-picker> | Single datetime, string date-->
            <!--<br>-->
            <!--<Date-picker type="datetime" v-model="singleDate" placeholder="选择日期和时间" style="width: 200px"></Date-picker> | Single datetime, date object-->
            <!--<br>-->
            <!--<Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker> | Single datetime, format yyyy-MM-dd HH:mm-->
            <!--<br>-->
            <!--<Date-picker type="date" multiple style="width: 200px"></Date-picker> | Single date, multiple-->
            <!--<br>-->
            <!--<Date-picker type="date" multiple style="width: 200px" show-week-numbers></Date-picker> | Single date, multiple, show week numbers-->
            <!--<br>-->
            <!--<Date-picker type="date" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker> | Single date, format MM-dd HH:mm-->
            <!--<br>-->
            <!--<Date-picker type="datetime" :start-date="minDate" v-model="singleDate" placeholder="选择日期和时间" style="width: 200px"></Date-picker> | Single datetime, date object, start date-->
            <!--<br>-->

        <!--</div>-->
        <!--<div style="width: 50%; float: right;">-->
            <!--<Date-picker type="datetimerange" :value="dateRange" placeholder="选择日期和时间" style="width: 300px"></Date-picker> | DateTimeRange, date objects-->
            <!--<br>-->
            <!--<Date-picker type="daterange" placeholder="选择日期和时间" style="width: 300px"></Date-picker> | Range, no dates-->
            <!--<br>-->
            <!--<Date-picker type="daterange" split-panels placeholder="选择日期和时间" style="width: 300px"></Date-picker> | Range, no dates, split panels-->
            <!--<br>-->
            <!--<Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></Date-picker> | DateTimeRange, format yyyy-MM-dd HH:mm-->
        <!--</div>-->
        <!--<div style="width: 50%; float: right;">-->
            <!--<TimePicker type="timerange" placeholder="Select time" style="width: 168px"></TimePicker>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data(){-->
            <!--const now = new Date().getTime();-->
            <!--const oneMonth = 2592e6;-->
            <!--return {-->
                <!--dateString: '2018-01-03 20:52:59',-->
                <!--singleDate: new Date(1978, 4, 10),-->
                <!--dateRange: [new Date(2010, 4, 1), new Date()],-->
                <!--minDate: new Date(2010, 4, 1),-->
                <!--maxDate: new Date(now + oneMonth)-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<row>-->
        <!--<i-col span="12">-->
            <!--<Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>-->
        <!--</i-col>-->
        <!--<i-col span="12">-->
            <!--<Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>-->
        <!--</i-col>-->
    <!--</row>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--t1: ''-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->




<!--<template>-->
    <!--<div>-->
        <!--<DatePicker v-model="value" @on-change="handleChange" type="daterange" placeholder="Select date" style="width: 200px"></DatePicker>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--value: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleChange (v) {-->
                <!--console.log(v);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <div style="width: 500px;margin: 100px;">
        <p><input type="text"></p>

        <DatePicker type="month" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        <DatePicker type="year" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>

        <DatePicker type="date" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker type="datetime" show-week-numbers confirm placeholder="Select date" style="width: 400px"></DatePicker>

        <DatePicker type="daterange" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker type="datetimerange" transfer show-week-numbers placeholder="Select date" style="width: 400px"></DatePicker>
        <Time-Picker :steps="[1, 1, 15]" :value="new Date()"></Time-Picker>
    </div>
</template>
<script>
    export default {

    };
</script>
