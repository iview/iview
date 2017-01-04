<template>
    {{value1}} -- {{ value2 }}
    <row>
        <i-col span="12">
            <Date-picker :value.sync="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker :value.sync="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15']
            }
        }
    }
</script>
