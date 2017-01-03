<template>
    <row>
        <i-col span="12">
            <Time-picker :value="val" type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                val: new Date
            }
        }
    }
</script>
