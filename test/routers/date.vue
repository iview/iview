<style>
    body{
        height: auto !important;
    }
</style>
<template>
    <row>
        <i-col span="12">
            <date-picker type="date" placeholder="选择日期" style="width: 200px"></date-picker>
        </i-col>
        <i-col span="12">
            <date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date-picker>
        </i-col>
        <i-col span="12">
            <time-picker
                :value="value"
                placeholder="选择时间"
                format="HH:mm:ss"
                :hide-disabled-options="false"
                :disabled-hours="[1,2,5,10,11]"
                style="width: 168px"></time-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                value: '2016-12-12 03:03:03'
            }
        }
    }
</script>
