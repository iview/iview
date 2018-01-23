<template>
    <div>
        {{ value1 }}
        <Input v-model="value1" clearable icon="ios-clock-outline" size="large" placeholder="large size"></Input>
        <br>
        <Input v-model="value2" clearable placeholder="default size"></Input>
        <br>
        <Input v-model="value3" clearable size="small" placeholder="small size"></Input>
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
