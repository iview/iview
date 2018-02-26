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


<!--<template>-->
<!--<Row>-->
<!--<Col span="12" style="padding-right:10px">-->
<!--<Select-->
<!--v-model="model13"-->
<!--filterable-->
<!--remote-->
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

<template>
    <div id="app">
        <input><br>
        <i-select
            v-model="model1"
            style="width:200px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <br>
        <i-select
            v-model="model2"
            size="small"
            style="width:100px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <i-select
            v-model="model3"
            style="width:100px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <i-select
            v-model="model4"
            size="large"
            style="width:100px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <br>
        <i-select
            v-model="model5"
            disabled
            style="width:200px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <i-select
            v-model="model6"
            style="width:200px"
        >
            <i-option value="beijing">New York</i-option>
            <i-option value="shanghai" disabled>London</i-option>
            <i-option value="shenzhen">Sydney</i-option>
        </i-select>
        <br>
        <i-select
            v-model="model8"
            clearable
            style="width:200px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <br>
        <i-select
            v-model="model7"
            style="width:200px"
        >
            <option-group label="Hot Cities">
                <i-option
                    v-for="item in cityList1"
                    :value="item.value"
                    :key="item.value"
                >{{item.label}}</i-option>
            </option-group>
            <option-group label="Other Cities">
                <i-option
                    v-for="item in cityList2"
                    :value="item.value"
                    :key="item.value"
                >{{item.label}}</i-option>
            </option-group>
        </i-select>
        <br>
        <i-select
            v-model="model9"
            style="width:200px"
        >
            <i-option value="New York" label="New York">
                <span>New York</span>
                <span style="float:right;color:#ccc">America</span>
            </i-option>
            <i-option value="London" label="London">
                <span>London</span>
                <span style="float:right;color:#ccc">U.K.</span>
            </i-option>
            <i-option value="Sydney" label="Sydney">
                <span>Sydney</span>
                <span style="float:right;color:#ccc">Australian</span>
            </i-option>
        </i-select>
        <br>
        <div>here</div>
        <i-select
            v-model="model10"
            multiple
            style="width:260px"
        >
            <i-option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</i-option>
        </i-select>
        <br>
        <row>
            <i-col
                span="12"
                style="padding-right:10px"
            >
                <i-select
                    v-model="model11"
                    filterable
                >
                    <i-option
                        v-for="item in cityList"
                        :value="item.value"
                        :key="item.value"
                    >{{item.label}}</i-option>
                </i-select>
            </i-col>
            <i-col span="12">
                <i-select
                    v-model="model12"
                    filterable
                    multiple
                >
                    <i-option
                        v-for="item in cityList"
                        :value="item.value"
                        :key="item.value"
                    >{{item.label}}</i-option>
                </i-select>
            </i-col>
        </row>
        <br>
        <row>
            <i-col
                span="12"
                style="padding-right:10px"
            >
                <i-select
                    v-model="model13"
                    filterable
                    remote
                    clearable
                    :remote-method="remoteMethod1"
                    :loading="loading1"
                >
                    <i-option
                        v-for="(option, index) in options1"
                        :value="option.value"
                        :key="index"
                    >{{option.label}}</i-option>
                </i-select>
            </i-col>
            <i-col span="12">
                <i-select
                    v-model="model14"
                    multiple
                    filterable
                    remote
                    clearable
                    :remote-method="remoteMethod2"
                    :loading="loading2">
                    <i-option
                        v-for="(option, index) in options2"
                        :value="option.value"
                        :key="index"
                    >{{option.label}}</i-option>
                </i-select>
            </i-col>
        </row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York',
                    },
                    {
                        value: 'London',
                        label: 'London',
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney',
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa',
                    },
                    {
                        value: 'Paris',
                        label: 'Paris',
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra',
                    },
                ],
                cityList1: [
                    {
                        value: 'New York',
                        label: 'New York',
                    },
                    {
                        value: 'London',
                        label: 'London',
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney',
                    },
                ],
                cityList2: [
                    {
                        value: 'Ottawa',
                        label: 'Ottawa',
                    },
                    {
                        value: 'Paris',
                        label: 'Paris',
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra',
                    },
                ],
                model1: '',
                model2: '',
                model3: '',
                model4: '',
                model5: '',
                model6: '',
                model7: '',
                model8: '',
                model9: '',
                model10: [],
                model11: '',
                model12: [],
                model13: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: [],
                list: [
                    'Alabama',
                    'Alaska',
                    'Arizona',
                    'Arkansas',
                    'California',
                    'Colorado',
                    'Connecticut',
                    'Delaware',
                    'Florida',
                    'Georgia',
                    'Hawaii',
                    'Idaho',
                    'Illinois',
                    'Indiana',
                    'Iowa',
                    'Kansas',
                    'Kentucky',
                    'Louisiana',
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                    'Nebraska',
                    'Nevada',
                    'New hampshire',
                    'New jersey',
                    'New mexico',
                    'New york',
                    'North carolina',
                    'North dakota',
                    'Ohio',
                    'Oklahoma',
                    'Oregon',
                    'Pennsylvania',
                    'Rhode island',
                    'South carolina',
                    'South dakota',
                    'Tennessee',
                    'Texas',
                    'Utah',
                    'Vermont',
                    'Virginia',
                    'Washington',
                    'West virginia',
                    'Wisconsin',
                    'Wyoming',
                ],
            };
        },

        methods: {
            remoteMethod1(query){
                if (query !== '') {
                    this.loading1 = true;

                    setTimeout(() => {
                        this.loading1 = false;

                        const list = this.list.map(item => ({
                            value: item,
                            label: item,
                        }));

                        this.options1 = list
                            .filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
                    }, 1500);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2(query){
                if (query !== '') {
                    this.loading2 = true;

                    setTimeout(() => {
                        this.loading2 = false;

                        const list = this.list.map(item => ({
                            value: item,
                            label: item,
                        }));

                        this.options2 = list
                            .filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
                    }, 200);
                } else {
                    this.options2 = [];
                }
            },
        },
    };
</script>
