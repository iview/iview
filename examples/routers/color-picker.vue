<template>
    <div style="margin: 100px;">
        {{ color }}
        <!--<Input placeholder="请输入..." size="large" style="width: 50px;"></Input>-->
        <!--<color-picker placement="bottom-start" size="large"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="large" style="width: 200px"></Date-picker>-->
        <color-picker ref="xxx" v-model="color" :recommend="true"></color-picker>
        <color-picker v-model="color2" :alpha="false" :recommend="false"></color-picker>
        <!--<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--<color-picker placement="bottom-start" size="small"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="small" style="width: 200px"></Date-picker>-->
        <Button @click="setColor">set color</Button>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                color: '',
                color2: ''
            };
        },
        computed: {},
        methods: {
            setColor () {
                this.color = '#26bc77';
            }
        }
    };
</script>