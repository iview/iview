<template>
    <div style="margin: 100px;">
        {{ color.rgba }}
        <!--<Input placeholder="请输入..." size="large" style="width: 50px;"></Input>-->
        <!--<color-picker placement="bottom-start" size="large"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="large" style="width: 200px"></Date-picker>-->
        <color-picker v-model="color" alpha :recommend="true" placement="bottom" size="default"></color-picker>
        <color-picker v-model="color" :alpha="false" :recommend="false" placement="bottom" size="default"></color-picker>
        <!--<Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>-->
        <!--<color-picker placement="bottom-start" size="small"></color-picker>-->
        <!--<Date-picker type="date" placeholder="选择日期" size="small" style="width: 200px"></Date-picker>-->
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                color: {
                    hex: '#194d33',
                    hsl: {
                        h: 150,
                        s: 0.5,
                        l: 0.2,
                        a: 1
                    },
                    hsv: {
                        h: 150,
                        s: 0.66,
                        v: 0.30,
                        a: 1
                    },
                    rgba: {
                        r: 25,
                        g: 77,
                        b: 51,
                        a: 1
                    },
                    a: 1
                }
            };
        },
        computed: {},
        methods: {}
    };
</script>