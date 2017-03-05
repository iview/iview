<template>
    <div>
        <Rate v-model="v1" allow-half show-text disabled>
            <span style="color: #f5a623">{{ v1 }}</span>
        </Rate>
        {{ v1 }}
        <div @click="v1 = 3">change v1</div>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                v1: 2
            };
        },
        computed: {},
        methods: {
            changeValue (val) {
                console.log(val);
            }
        }
    };
</script>