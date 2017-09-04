<template>
    <div>
        <Rate v-model="value"></Rate>
        <Rate allow-half v-model="valueHalf"></Rate>
        <!--<Rate show-text v-model="valueText"></Rate>-->
        <!--<Rate show-text allow-half v-model="valueCustomText">-->
            <!--<span style="color: #f5a623">{{ valueCustomText }}</span>-->
        <!--</Rate>-->
        <!--<Rate disabled  allow-half v-model="valueDisabled"></Rate>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 4.0,
                valueDisabled: 2.4
            }
        }
    }
</script>
