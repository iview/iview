<template>
    <div>
        <Rate v-model="value"></Rate>
        <Rate allow-half v-model="valueHalf"></Rate>
        <Rate clearable v-model="valueClear"></Rate>
        <Rate clearable allow-half  v-model="valueClearHalf"></Rate>
        <Rate 
            allow-half 
            show-text
            v-model="characterValue"
            character="好"/>
        <Rate allow-half v-model="cv" icon="ios-heart" />
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
                valueDisabled: 2.4,
                valueClear: 1,
                valueClearHalf: 1.5,
                characterValue: 2.5,
                cv: 3.5
            }
        }
    }
</script>
