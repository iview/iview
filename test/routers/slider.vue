<template>
    <div style="margin: 100px;">
        <Slider v-model="value1" :step="5" show-input></Slider>
        <Slider v-model="value2" range></Slider>
        <Slider v-model="value3" range disabled></Slider>
        {{ value1 }}{{value2}}
        <div @click="value1 = 13">change value1</div>
        <br>
        <Slider :value="value9" :tip-format="format"></Slider>
        <Slider :value="value10" :tip-format="hideFormat"></Slider>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50],
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return '进度' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
