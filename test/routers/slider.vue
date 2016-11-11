<template>
    <div style="width: 400px;margin:100px;">
        {{ value }}
        <Slider @on-change="change" :step="10" show-stops></Slider>
        <Slider :value.sync="value" show-input range @on-change="change" :step="13"></Slider>
        <!--<Slider :max="10"></Slider>-->
        <!--<Slider :step="13"></Slider>-->
        <!--<Slider :step="13" :max="60"></Slider>-->
    </div>
</template>
<script>
    import { Slider } from 'iview';
    export default {
        components: { Slider },
        data () {
            return {
                value: [20, 50]
            }
        },
        methods: {
            format (val) {
                return `进度：${val}%`
            },
            change (data) {
                console.log(data)
            }
        }
    }
</script>
