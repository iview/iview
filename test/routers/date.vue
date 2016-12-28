<style>
    body{
        height: auto !important;
    }
</style>
<template>
    <row>
        <i-col span="12">
            <!--<date-picker type="date" placeholder="选择日期" style="width: 200px" @on-ok="ok" confirm @on-clear="clear"></date-picker>-->
        </i-col>
        <i-col span="12">
            <date-picker :value="value3" type="daterange" placement="bottom-start" placeholder="选择日期" style="width: 200px"></date-picker>
        </i-col>
        <i-col span="12">
            <time-picker
                :value="value"
                placeholder="选择时间"
                format="HH:mm:ss"
                :hide-disabled-options="false"
                :disabled-hours="[1,2,10,11]"
                @on-change="c"
                @on-ok="ok"
                @on-clear="clear"
                style="width: 168px"></time-picker>
        </i-col>
        <i-col span="12">
            <time-picker
                :value="value2"
                type="timerange"
                placeholder="选择时间"
                :hide-disabled-options="false"
                @on-change="c"
                @on-ok="ok"
                @on-clear="clear"
                style="width: 168px"></time-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
//                value: '2016-12-12 03:03:03'
                value: '15:12:01',
                value2: ['08:40:00', '09:40:00'],
//                value2: [new Date(), new Date()],
                value3: ['2016-12-01', '2016-12-25']
            }
        },
        methods: {
            c (s) {
                console.log(1,s);
                this.value = s;
            },
            ok () {
                console.log('ok');
            },
            clear () {
                console.log('clear');
            }
        }
    }
</script>
