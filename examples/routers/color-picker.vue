<template>
    <div style="margin: 100px;">
        {{ color }}
        <!--<Input placeholder="请输入..." size="large" style="width: 50px;"></Input>-->
        <color-picker @on-change="c1" @on-active-change="c2" v-model="color" placement="bottom-start" size="large"></color-picker>
        <Date-picker transfer type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        <color-picker :transfer="true" ref="xxx" v-model="color" format="rgb" alpha :recommend="true"></color-picker>
        <color-picker v-model="color2" format="hsv" :alpha="true" :recommend="false"></color-picker>
        <!--<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <color-picker v-model="color" placement="bottom-start" size="small"></color-picker>
        <Date-picker type="date" placeholder="选择日期" size="small" style="width: 200px"></Date-picker>
        <Button @click="setColor">set color</Button>

        <br><br><br><br>
        <ColorPicker v-model="color7" :hue="false"></ColorPicker>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                color: 'rgba(12,34,255,.85)',
                color2: '',
                color7: '#19be6b'
            };
        },
        computed: {},
        methods: {
            setColor () {
                this.color = '#26bc77';
            },
            c1 (d) {
                console.log(d);
            },
            c2 (d) {
                console.log(d);
            }
        }
    };
</script>