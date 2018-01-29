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

<!--<template>-->
    <!--<div>-->
        <!--<Select v-model="value">-->
            <!--<Option v-for="item in list" :value="item.value" :label="item.label" :key="item.value"></Option>-->
        <!--</Select>-->
        <!--<Button @click="setList">set list</Button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--value: '',-->
                <!--list: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--setList () {-->
                <!--let list = [];-->
                <!--for (let i = 0; i < 400; i++) {-->
                    <!--list.push({-->
                        <!--value: 'value' + i,-->
                        <!--label: 'label' + i-->
                    <!--});-->
                <!--}-->
                <!--this.list = list;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<div style="width: 400px;margin: 50px;">-->
        <!--<div>data: {{ model13 }}</div>-->
        <!--<Row>-->
            <!--<Col span="12" style="padding-right:10px">-->
            <!--<Select-->
                    <!--size="small"-->
                    <!--placeholder="提示提示"-->
                    <!--v-model="model13"-->
                    <!--filterable-->
                    <!--remote-->
                    <!--transfer-->
                    <!--:remote-method="remoteMethod1"-->
                    <!--:loading="loading1">-->
                <!--<Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>-->
            <!--</Select>-->
            <!--</Col>-->
            <!--<Col span="12">-->
            <!--<Select-->
                    <!--v-model="model14"-->
                    <!--multiple-->
                    <!--filterable-->
                    <!--remote-->
                    <!--:remote-method="remoteMethod2"-->
                    <!--:loading="loading2">-->
                <!--<Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>-->
            <!--</Select>-->
            <!--</Col>-->
        <!--</Row>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--model13: '',-->
                <!--loading1: false,-->
                <!--options1: [],-->
                <!--model14: [],-->
                <!--loading2: false,-->
                <!--options2: [],-->
                <!--list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--remoteMethod1 (query) {-->
                <!--if (query !== '') {-->
                    <!--this.loading1 = true;-->
                    <!--setTimeout(() => {-->
                        <!--this.loading1 = false;-->
                        <!--const list = this.list.map(item => {-->
                            <!--return {-->
                                <!--value: item,-->
                                <!--label: item-->
                            <!--};-->
                        <!--});-->
                        <!--this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);-->
                    <!--}, 200);-->
                <!--} else {-->
                    <!--this.options1 = [];-->
                <!--}-->
            <!--},-->
            <!--remoteMethod2 (query) {-->
                <!--if (query !== '') {-->
                    <!--this.loading2 = true;-->
                    <!--setTimeout(() => {-->
                        <!--this.loading2 = false;-->
                        <!--const list = this.list.map(item => {-->
                            <!--return {-->
                                <!--value: item,-->
                                <!--label: item-->
                            <!--};-->
                        <!--});-->
                        <!--this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);-->
                    <!--}, 200);-->
                <!--} else {-->
                    <!--this.options2 = [];-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<div style="width: 300px">-->
        <!--<Select-->
                <!--v-model="model14"-->
                <!--multiple-->
                <!--filterable-->
                <!--remote-->
                <!--:remote-method="remoteMethod2"-->
                <!--:loading="loading2">-->
            <!--<Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>-->
        <!--</Select>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--model13: '',-->
                <!--loading1: false,-->
                <!--options1: [],-->
                <!--model14: [],-->
                <!--loading2: false,-->
                <!--options2: [],-->
                <!--list: ['a', 'b', 'c']-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--remoteMethod2 (query) {-->
                <!--if (query !== '') {-->
                    <!--this.loading2 = true;-->
                    <!--setTimeout(() => {-->
                        <!--this.loading2 = false;-->
                        <!--const list = this.list.map(item => {-->
                            <!--return {-->
                                <!--value: item,-->
                                <!--label: item-->
                            <!--};-->
                        <!--});-->
                        <!--this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);-->
                    <!--}, 200);-->
                <!--} else {-->
                    <!--this.options2 = [];-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <Row>
        <Col span="12" style="padding-right:10px">
        <Select v-model="model11" disabled filterable>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="12">
        <!--<Select v-model="model12" filterable multiple>-->
            <!--<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
        <!--</Select>-->
            <Input v-model="model13" disabled="" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: 'New York',
                model12: [],
                model13: 'New York'
            }
        }
    }
</script>

