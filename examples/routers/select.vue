<template>
    <Row>
        <i-col span="4">{{model}}</i-col>
        <i-col span="8">
            <i-select v-model="model" multiple @input="handleInput" filterable remote :remote-method="remoteMethod" :loading="loading" clearable>
                <i-option v-for="option in options" :value="option.value" :key="new Date()">{{option.label}}</i-option>
            </i-select>
        </i-col>
    </Row>
</template>

<script>
    export default {
        data () {
            return {
//                model: 'Alabama',
                model: ['Alabama', 'Hawaii'],
                options: [

                ],
                list: [],
                loading: false,
                states: ["Al", "Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
            }
        },
        mounted () {
            this.options = [
//                {
//                    label: '全部',
//                    value: 0
//                },{
//                    label: '苹果',
//                    value: 1
//                },{
//                    label: '香蕉',
//                    value: 2
//                },{
//                    label: '西瓜',
//                    value: 3
//                }
            ];
        },
        methods: {
            handleAdd () {
                this.options = [
                    {
                        label: '全部',
                        value: 0
                    },{
                        label: '苹果',
                        value: 1
                    },{
                        label: '香蕉',
                        value: 2
                    },{
                        label: '西瓜',
                        value: 3
                    }
                ]
            },
            remoteMethod (query) {
                console.log(13)
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                    .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 500);
                } else {
                    this.options = [];
                }
            },
            handleInput () {
//                console.log(1)
            }
        },
        mounted () {
            this.list = this.states.map(item => {
                return {
                    value: item,
                    label: 'L ' + item
                };
            });
        }
    }
</script>


<!--<template>-->
    <!--<div>-->
        <!--<Row style="width: 400px;">-->
            <!--<i-col span="12" style="padding-right:10px">-->
                <!--<Select v-model="model11" filterable>-->
                    <!--<Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>-->
                <!--</Select>-->
            <!--</i-col>-->
            <!--<i-col span="12">-->
                <!--<Select v-model="model12" filterable multiple>-->
                    <!--<Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>-->
                <!--</Select>-->
            <!--</i-col>-->
        <!--</Row>-->
        <!--<Button @click="handleSet">set</Button>-->
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
                <!--model11: '',-->
                <!--model12: []-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleSet () {-->
                <!--this.model11 = 'shanghai';-->
<!--//                this.model12 = ['beijing'];-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
