<!--<template>-->
    <!--<div>-->
        <!--<i-select v-model="model1" style="width:200px" clearable>-->
            <!--<i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>-->
        <!--</i-select>-->
        <!--{{ model1 }}-->
        <!--<div @click="c">change</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--cityList: [-->
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
                <!--],-->
                <!--model1: ''-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--c () {-->
                <!--this.model1 = 'hangzhou'-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<div>-->
        <!--<i-select v-model="model5" disabled style="width:200px">-->
            <!--<i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>-->
        <!--</i-select>-->
        <!--<i-select v-model="model6" style="width:200px">-->
            <!--<i-option value="beijing">北京市</i-option>-->
            <!--<i-option value="shanghai" disabled>上海市</i-option>-->
            <!--<i-option value="shenzhen">深圳市</i-option>-->
        <!--</i-select>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--cityList: [-->
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
                <!--],-->
                <!--model5: '',-->
                <!--model6: ''-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->



<!--<template>-->
    <!--<div>-->
        <!--<i-select v-model="model7" style="width:200px">-->
            <!--<Option-group label="热门城市">-->
                <!--<i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>-->
            <!--</Option-group>-->
            <!--<Option-group label="其它城市">-->
                <!--<i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>-->
            <!--</Option-group>-->
        <!--</i-select>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--cityList: [-->
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
                <!--],-->
                <!--model7: ''-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<div>-->
        <!--<i-select v-model="model10" multiple style="width:260px">-->
            <!--<i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>-->
        <!--</i-select>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--cityList: [-->
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
                <!--],-->
                <!--model10: []-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <div>
        <Row>
            <i-col span="12" style="padding-right:10px">
                <Select v-model="model11" filterable>
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </Select>
            </i-col>
            <i-col span="12">
                <Select v-model="model12" filterable multiple>
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </Select>
            </i-col>
        </Row>
        <div @click="model11 = 'shanghai'">change</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>
