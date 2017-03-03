<template>
    <Row>
        <i-col span="12">
            <Rate show-text :value="valueText"></Rate>
        </i-col>
        <i-col span="12">
            <Rate show-text v-model="valueCustomText" >
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </i-col>
        <i-col span="12">
            <Rate disabled :value="valueDisabled"></Rate>
        </i-col>
        <i-col span="12">
            <Rate allow-half :value="valueHalf" v-on:on-change="changeValue"></Rate>
        </i-col>
    </Row>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2,
                valueHalf: 2.5
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