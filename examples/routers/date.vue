<!--<template>-->
    <!--<div>-->
        <!--{{ value1 }}-->
        <!--<Date-picker v-model="value1" type="datetimerange" placeholder="选择日期" style="width: 200px" @on-change="hc"></Date-picker>-->
        <!--<Button @click="setDate">set date</Button>-->
        <!--<Button @click="getDate">get date</Button>-->
        <!--&lt;!&ndash;<Date-picker v-model="value2" type="daterange" placeholder="选择日期" style="width: 200px"></Date-picker>&ndash;&gt;-->
        <!--&lt;!&ndash;<Date-picker transfer type="datetimerange" placeholder="选择日期" style="width: 200px" @on-change="changeDate"></Date-picker>&ndash;&gt;-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--value1: ['2014-10-10 10:00:01', '2017-10-10 10:00:00'],-->
                <!--value2: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--changeDate(date){-->
                <!--console.log(date);-->
            <!--},-->
            <!--setDate () {-->
                <!--this.value1 = ['2016-10-10', '2017-10-10'];-->
            <!--},-->
            <!--getDate () {-->
                <!--const date = new Date(this.value1);-->
                <!--console.log(date.getMonth()+1)-->
            <!--},-->
            <!--hc (d) {-->
                <!--console.log(d);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->
    <!--body{-->
        <!--width: 100%;-->
    <!--}-->
<!--</style>-->


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
        <!--<Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>-->
        <!--<br>-->
        <!--<Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker>-->
        <!--<br>-->
        <!--<Date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></Date-picker>-->
        <!--<br>-->
        <!--<Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></Date-picker>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->

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




<template>
    <div>
        <DatePicker v-model="value" @on-change="handleChange" type="datetimerange" placeholder="Select date" style="width: 400px"></DatePicker>
        <DatePicker v-model="value2" type="datetime" @on-change="handleChange" style="width: 200px"></DatePicker>
        <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        {{ value }}
        <br>
        {{ value2 }}
        <br><br>
        <DatePicker type="year" v-model="value3" placeholder="Select year" style="width: 200px"></DatePicker>
        <DatePicker type="month" v-model="value4" placeholder="Select month" style="width: 200px"></DatePicker>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ['2018-03-05 10:00:00', '2018-05-15 10:01:00'],
                value2: '2018-02-05 10:09:00',
                value3: '1978',
                value4: '1978-05'
            }
        },
        methods: {
            handleChange (v) {
                console.log(v);
            }
        }
    }
</script>
