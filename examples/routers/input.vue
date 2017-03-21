<template>
    <div>
        <Input v-model="value" placeholder="请输入..." style="width: 300px" icon="ios-clock-outline"></Input>
        <input type="text" v-model="value">
        {{ value }}
        <!--<Input v-model="value">-->
            <!--<span slot="prepend">http://</span>-->
            <!--<span slot="append">.com</span>-->
        <!--</Input>-->
        <br>
        <Input type="textarea" v-model="value" placeholder="请输入..."></Input>
        <Input type="textarea" v-model="value" :rows="4" placeholder="请输入..."></Input>
        <br>
        <br>
        <Input type="textarea" v-model="value" :autosize="true" placeholder="请输入..."></Input>
        <Input type="textarea" v-model="value" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
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
