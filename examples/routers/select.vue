<!--<template>-->
    <!--<div>-->
        <!--{{ model10 }} - -->
        <!--{{ model11 }}-->
        <!--<Select v-model="model10" style="width:260px">-->
            <!--<Option v-for="(item, index) in cityList" :value="item.value" :key="index">{{ item.label }}</Option>-->
        <!--</Select>-->
        <!--<Select v-model="model11" style="width:260px">-->
            <!--<Option v-for="(item, index) in cityList" :value="item.value" :key="index">{{ item.label }}</Option>-->
        <!--</Select>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--cityList: [],-->
                <!--model10: '',-->
                <!--model11: '',-->
                <!--model12: ''-->
            <!--}-->
        <!--},-->
        <!--mounted () {-->
            <!--setTimeout(() => {-->
                <!--this.cityList = [-->
                    <!--{-->
                        <!--value: 'beijing',-->
                        <!--label: '北京市'-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'shanghai',-->
                        <!--label: '上海市'-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'shenzhen',-->
                        <!--label: '深圳市'-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'hangzhou',-->
                        <!--label: '杭州市'-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'nanjing',-->
                        <!--label: '南京市'-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'chongqing',-->
                        <!--label: '重庆市'-->
                    <!--}-->
                <!--];-->
            <!--}, 1000);-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <div>
        <Select v-model="value">
            <Option v-for="item in list" :value="item.value" :label="item.label" :key="item.value"></Option>
        </Select>
        <Button @click="setList">set list</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                list: []
            }
        },
        methods: {
            setList () {
                let list = [];
                for (let i = 0; i < 400; i++) {
                    list.push({
                        value: 'value' + i,
                        label: 'label' + i
                    });
                }
                this.list = list;
            }
        }
    }
</script>