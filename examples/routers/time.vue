<template>
    <div>
        <Time :time="1526608921" />
        <Time :time="1652839997" />
        <Time :time="ddd" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                ddd: new Date('2018-01-01')
            };
        },
        computed: {},
        methods: {}
    };
</script>