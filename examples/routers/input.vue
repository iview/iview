<template>
    <div>
        <Input v-model="value" placeholder="请输入..." style="width: 150px" icon="ios-clock-outline"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
