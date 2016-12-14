<template>
    <div style="margin: 50px">
        <date-picker style="width:200px" placeholder="请选择日期" :value.sync="value" :options="options"></date-picker>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '2016-12-18',
//                value: '',
                options: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
//                        return time && time.valueOf() < Date.now();
                    }
                }
            }
        },
        computed: {},
        methods: {}
    }
</script>