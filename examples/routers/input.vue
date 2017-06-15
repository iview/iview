<template>
    <div style="width: 100px;">
        <Input v-model="value1" size="large" placeholder="large size"></Input>
        <br>
        <Input v-model="value2" placeholder="default size"></Input>
        <br>
        <Input v-model="value3" size="small" placeholder="small size"></Input>
        <br>
        <Input v-model="value1" size="large" placeholder="large size" icon="ios-clock-outline"></Input>
        <br>
        <Input v-model="value2" placeholder="default size" icon="ios-clock-outline"></Input>
        <br>
        <Input v-model="value3" size="small" placeholder="small size" icon="ios-clock-outline"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
