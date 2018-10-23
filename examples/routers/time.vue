<template>
    <div>
        <Time :time="time1" />
        <br>
        <Time :time="time2" />
        <br>
        <Time :time="time3" :interval="1" />
        <br>
        <Time :time="time4" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                time1: (new Date()).getTime() - 60 * 59 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: (new Date()).getTime() - 1 * 1000,
                time4: (new Date()).getTime() - 86400 * 60 * 1000,
            };
        }
    };
</script>
