<template>
    <div style="margin: 100px">
        {{value}}
        <br><br><br>
        <Rate :value.sync="value" :count="5" allow-half></Rate>
        <br><br><br>
        <i-button @click="value++">add</i-button>
        <i-button @click="value--">remove</i-button>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                value: 3.8
            };
        },
        computed: {},
        methods: {}
    };
</script>