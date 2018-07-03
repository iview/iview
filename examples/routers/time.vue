<template>
    <div>
        <Time :time="1526608921" />
        <Time :time="1652839997" />
        <Time :time="ddd" :interval="1" />

        <Time time="2018-06-20T13:09:14.000Z" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                ddd: new Date()
            };
        },
        computed: {},
        methods: {}
    };
</script>