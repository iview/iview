<!--<template>-->
    <!--<div>-->
        <!--&lt;!&ndash;<Input-number :max="max" name="he" :min="-1" v-model="v1" :autofocus="autofocus"></Input-number>&ndash;&gt;-->
        <!--&lt;!&ndash;{{ v1 }}&ndash;&gt;-->
        <!--&lt;!&ndash;<div @click="c">change v1</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div @click="changeMax">change max</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<Input-number disabled :max="10" :min="1" :step="1.2" v-model="v2"></Input-number>&ndash;&gt;-->
        <!--&lt;!&ndash;<Input-number :max="10" :min="1" v-model="obj.v"></Input-number>&ndash;&gt;-->
        <!--<InputNumber :editable="false" :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>-->
        <!--<InputNumber :precision="1" :max="10" :min="1" :step="0.1" v-model="value1"></InputNumber>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--props: {},-->
        <!--data () {-->
            <!--return {-->
                <!--v1: 1,-->
                <!--v2: 1,-->
                <!--max: 10,-->
                <!--autofocus: true,-->
                <!--obj: {-->

                <!--},-->
                <!--value1: 1.0,-->
                <!--value2: 1-->
            <!--};-->
        <!--},-->
        <!--computed: {},-->
        <!--methods: {-->
            <!--c () {-->
                <!--this.v1 = 5;-->
            <!--},-->
            <!--changeMax () {-->
                <!--this.max++;-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->


<template>
    <div>
        <InputNumber :max="1000000000" :min="1" v-model="value1" :formatter="formatter" :parser="parser" @on-change="change" style="width: 200px"></InputNumber>
        <InputNumber :max="1000000000" :min="1" v-model="value2" :formatter="formatter2" :parser="parser2" @on-change="change" style="width: 200px"></InputNumber>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1800000,
                value2: 55,
                formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                parser: (value) => value.replace(/\$\s?|(,*)/g, ''),
                formatter2: (value) => `${value}%`,
                parser2: (value) => value.replace('%', '')
            }
        },
        methods: {
            change (v) {
                console.log(v)
            }
        }
    }
</script>
