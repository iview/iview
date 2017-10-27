<template>
    <div>
        <!--<Input-number :max="max" name="he" :min="-1" v-model="v1" :autofocus="autofocus"></Input-number>-->
        <!--{{ v1 }}-->
        <!--<div @click="c">change v1</div>-->
        <!--<div @click="changeMax">change max</div>-->
        <!--<Input-number disabled :max="10" :min="1" :step="1.2" v-model="v2"></Input-number>-->
        <!--<Input-number :max="10" :min="1" v-model="obj.v"></Input-number>-->
        <InputNumber :editable="false" :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
        <InputNumber :precision="1" :max="10" :min="1" :step="0.1" v-model="value1"></InputNumber>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                v1: 1,
                v2: 1,
                max: 10,
                autofocus: true,
                obj: {

                },
                value1: 1.0,
                value2: 1
            };
        },
        computed: {},
        methods: {
            c () {
                this.v1 = 5;
            },
            changeMax () {
                this.max++;
            }
        }
    };
</script>