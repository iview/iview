<template>
    <row>
        <i-col span="12">
            <date-picker type="date" placeholder="选择日期" style="width: 200px"></date-picker>
        </i-col>
        <i-col span="12">
            <date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></date-picker>
        </i-col>
        <i-col span="12">
            <time-picker placeholder="选择时间" :disabled-hours="[1,2]" style="width: 200px"></time-picker>
        </i-col>
    </row>
</template>
<script>
    export default {

    }
</script>
