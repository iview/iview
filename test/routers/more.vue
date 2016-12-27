<style>
    body{
        height: 2000px !important;
    }
</style>
<template>
    {{properties|json}}<br>
    {{units|json}}
    <Checkbox-group :model.sync="properties">
        <Checkbox v-for="unit in units" :value="unit.UnitName"></Checkbox>
    </Checkbox-group>
    <Back-top></Back-top>
</template>
<script>
    export default {
        data () {
            return {
                properties: [],
                units: []
            }
        },
        ready () {
            setTimeout(() => {
                this.units = [{UnitName:"件"},{UnitName:"箱"},{UnitName:"双"}];
            }, 1000);
        }
    }
</script>
