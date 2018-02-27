<!--<template>-->
    <!--<div style="margin: 0 400px;">-->
        <!--<Slider v-model="valueSingle" @on-change="updateSingleDisplayValue"></Slider>-->
        <!--<Button @click="randomSingle">change</Button> {{singleDisplayValue}}-->

        <!--<Slider v-model="valueRange" range @on-change="updateRangeDisplayValue"></Slider>-->
        <!--<Button @click="randomRange">change</Button> {{rangeDisplayValue}}-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--valueSingle: 10,-->
                <!--valueRange: [20, 50],-->
                <!--singleDisplayValue: 10,-->
                <!--rangeDisplayValue: [20, 50]-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--updateSingleDisplayValue (val){-->
                <!--console.log('updateSingleDisplayValue', val);-->
                <!--this.singleDisplayValue = val;-->
            <!--},-->
            <!--updateRangeDisplayValue (val){-->
                <!--console.log('updateRangeDisplayValue', val);-->
                <!--this.rangeDisplayValue = val.join(' - ');-->
            <!--},-->
            <!--randomSingle () {-->
                <!--this.valueSingle = this.random(0, 100);-->
            <!--},-->
            <!--randomRange () {-->
                <!--this.valueRange = [this.random(0, 50), this.random(50, 100)];-->
            <!--},-->
            <!--random (min, max){-->
                <!--return Math.round(Math.random() * (max - min)) + min;-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->


<template>
    <div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal v-model="modal1">
            <Slider v-model="value2" range show-tip="always"></Slider>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                value2: [20, 50],
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
