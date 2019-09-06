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
        <!-- <InputNumber :max="1000000000" :min="1" v-model="value1" :formatter="formatter" :parser="parser" @on-change="change" style="width: 200px"></InputNumber>
        <InputNumber :max="1000000000" :min="1" v-model="value2" :formatter="formatter2" :parser="parser2" @on-change="change" style="width: 200px"></InputNumber>
        
        <InputNumber @on-change="change" style="width: 200px"></InputNumber>
        
        <InputNumber v-model="valueNull" @on-change="change" style="width: 200px"></InputNumber>
        <InputNumber v-model="valueNull" @on-change="change" :formatter="formatter" :parser="parser" style="width: 200px"></InputNumber>
                
        <InputNumber v-model="value2" @on-focus="focus" style="width: 200px"></InputNumber>

        <InputNumber v-model="value3" style="width: 200px" placeholder="Enter something..."></InputNumber> -->

        
        <InputNumber v-model="valueNull" style="width: 200px" :min='1' :max='10000'  :precision='2' ></InputNumber>
        <InputNumber v-model="valueNull" style="width: 200px" ></InputNumber>
        <div style="margin:10px 0px">
            <InputNumber :activeChange="false" v-model="valueNull" style="width: 200px" :min='1' :max='10000'  :precision='2' ></InputNumber>
            <InputNumber :activeChange="false" v-model="valueNull" style="width: 200px" ></InputNumber>
        </div>
        <div style="margin:10px 0px">
            <InputNumber
                :max="10000"
                v-model="value9"
                :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/\$s?|(,*)/g, '')"></InputNumber>
            <InputNumber
                :max="100"
                v-model="value10"
                :formatter="value => `${value}%`"
                :parser="value => value.replace('%', '')"></InputNumber>
        </div>
        <div style="margin-top: 10px">
            <InputNumber :min="100" :max="3000" v-model="value4" style="width: 200px" :active-change="false"></InputNumber>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1800000,
                value2: 55,
                value3: 100,
                value4 : null,
                valueNull:null,
                formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                parser: (value) => value.replace(/\$\s?|(,*)/g, ''),
                formatter2: (value) => `${value}%`,
                parser2: (value) => value.replace('%', ''),
                value9: 1000,
                value10: 100
            };
        },
        methods: {
            focus (e) {
                e.target.select();
            },
            change (v) {
                console.log(v);
            }
        }
    };
</script>
