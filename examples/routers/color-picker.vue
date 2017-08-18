<template>
    <div style="margin: 100px;">
        {{ color.rgba }}
        <!--<Input placeholder="请输入..." size="large" style="width: 50px;"></Input>-->
        <!--<color-picker placement="bottom-start" size="large"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="large" style="width: 200px"></Date-picker>-->
        <color-picker ref="xxx" v-model="color" alpha :recommend="true" placement="bottom" size="default"></color-picker>
        <color-picker v-model="color" :alpha="false" :recommend="false" placement="bottom" size="default"></color-picker>
        <!--<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--<color-picker placement="bottom-start" size="small"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="small" style="width: 200px"></Date-picker>-->
        <Button @click="do2">do2</Button>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                color: '#ff4290'
            };
        },
        computed: {},
        methods: {
            do2 () {
                this.$refs.xxx.do2();
            }
        }
    };
</script>