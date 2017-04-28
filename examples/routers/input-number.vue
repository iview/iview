<template>
    <div>
        <Input-number :max="10" :min="-1" v-model="v1" :autofocus="autofocus"></Input-number>
        {{ v1 }}
        <div @click="c">change v1</div>
        <Input-number disabled :max="10" :min="1" :step="1.2" v-model="v2"></Input-number>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                v1: 1,
                v2: 1,
                autofocus: true
            };
        },
        computed: {},
        methods: {
            c () {
                this.v1 = 5;
            }
        }
    };
</script>