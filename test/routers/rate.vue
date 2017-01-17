<template>
    <Row>
        <i-col span="12">
            <Rate show-text :value.sync="valueText"></Rate>
        </i-col>
        <i-col span="12">
            <Rate show-text :value.sync="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </i-col>
    </Row>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            };
        },
        computed: {},
        methods: {}
    };
</script>