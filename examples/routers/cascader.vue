<!--<template>-->
    <!--<Row>-->
        <!--<i-col span="4">-->
            <!--<Button @click="handleLoad">load</Button>-->
            <!--{{ v1 }}-->
        <!--</i-col>-->
        <!--<i-col span="4">-->
            <!--<Cascader :data="data2" filterable v-model="v1" style="width: 200px;"></Cascader>-->
            <!--&lt;!&ndash;<Cascader :data="data2" filterable v-model="v1" :loadData="loadData"></Cascader>&ndash;&gt;-->
        <!--</i-col>-->
    <!--</Row>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--v1: [],-->
                <!--data2: [-->
                    <!--{-->
                        <!--value: 'zhejiang',-->
                        <!--label: '浙江',-->
                        <!--children: [],-->
                        <!--loading: false-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'jiangsu',-->
                        <!--label: '江苏',-->
                        <!--children: [{-->
                            <!--value: 'nanjing',-->
                            <!--label: '南京',-->
                            <!--children: [-->
                                <!--{-->
                                    <!--value: 'zhonghuamen',-->
                                    <!--label: '中华门'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v1',-->
                                    <!--label: 'v111'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v2',-->
                                    <!--label: 'v2222'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v3',-->
                                    <!--label: 'v333'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v4',-->
                                    <!--label: 'v4444'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v5',-->
                                    <!--label: 'v555'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v6',-->
                                    <!--label: 'v666'-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'v7',-->
                                    <!--label: 'v777'-->
                                <!--}-->
                            <!--]-->
                        <!--}]-->
                    <!--}-->
                <!--],-->
                <!--data3: [{-->
                    <!--value: 'beijing',-->
                    <!--label: '北京',-->
                    <!--children: [-->
                        <!--{-->
                            <!--value: 'gugong',-->
                            <!--label: '故宫'-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'tiantan',-->
                            <!--label: '天坛'-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'wangfujing',-->
                            <!--label: '王府井'-->
                        <!--}-->
                    <!--]-->
                <!--}, {-->
                    <!--value: 'jiangsu',-->
                    <!--label: '江苏',-->
                    <!--children: [-->
                        <!--{-->
                            <!--value: 'nanjing',-->
                            <!--label: '南京',-->
                            <!--children: [-->
                                <!--{-->
                                    <!--value: 'fuzimiao',-->
                                    <!--label: '夫子庙',-->
                                <!--}-->
                            <!--]-->
                        <!--},-->
                        <!--{-->
                            <!--value: 'suzhou',-->
                            <!--label: '苏州',-->
                            <!--children: [-->
                                <!--{-->
                                    <!--disabled: true,-->
                                    <!--value: 'zhuozhengyuan',-->
                                    <!--label: '拙政园',-->
                                <!--},-->
                                <!--{-->
                                    <!--value: 'shizilin',-->
                                    <!--label: '狮子林',-->
                                <!--}-->
                            <!--]-->
                        <!--}-->
                    <!--],-->
                <!--}]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleLoad () {-->
                <!--this.data2[0].loading = !this.data2[0].loading;-->
            <!--},-->
            <!--loadData (item, cb) {-->
                <!--item.loading = true;-->
                <!--setTimeout(() => {-->
                    <!--if (item.value === 'zhejiang') {-->
                        <!--item.children = [-->
                            <!--{-->
                                <!--value: 'hangzhou',-->
                                <!--label: '杭州',-->
                                <!--loading: false,-->
                                <!--children: []-->
                            <!--}-->
                        <!--];-->
                    <!--} else if (item.value === 'hangzhou') {-->
                        <!--item.children = [-->
                            <!--{-->
                                <!--value: 'ali',-->
                                <!--label: '阿里巴巴'-->
                            <!--}-->
                        <!--];-->
                    <!--}-->
                    <!--item.loading = false;-->
                    <!--cb();-->
                <!--}, 1000);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<Cascader :data="data4" :load-data="loadData"></Cascader>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--data4: [-->
                    <!--{-->
                        <!--value: 'beijing',-->
                        <!--label: '北京',-->
                        <!--children: [],-->
                        <!--loading: false-->
                    <!--},-->
                    <!--{-->
                        <!--value: 'hangzhou',-->
                        <!--label: '杭州',-->
                        <!--children: [],-->
                        <!--loading:false-->
                    <!--}-->
                <!--]-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--loadData (item, callback) {-->
                <!--item.loading = true;-->
                <!--setTimeout(() => {-->
                    <!--if (item.value === 'beijing') {-->
                        <!--item.children = [-->
                            <!--{-->
                                <!--value: 'talkingdata',-->
                                <!--label: 'TalkingData'-->
                            <!--},-->
                            <!--{-->
                                <!--value: 'baidu',-->
                                <!--label: '百度'-->
                            <!--},-->
                            <!--{-->
                                <!--value: 'sina',-->
                                <!--label: '新浪'-->
                            <!--}-->
                        <!--];-->
                    <!--} else if (item.value === 'hangzhou') {-->
                        <!--item.children = [-->
                            <!--{-->
                                <!--value: 'ali',-->
                                <!--label: '阿里巴巴'-->
                            <!--},-->
                            <!--{-->
                                <!--value: '163',-->
                                <!--label: '网易'-->
                            <!--}-->
                        <!--];-->
                    <!--}-->
                    <!--item.loading = false;-->
                    <!--callback();-->
                <!--}, 1000);-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->



<template>
    <!--<Cascader :data="data4" :load-data="loadData" style="width: 200px;"></Cascader>-->
    <div>
        <Cascader :data="data" v-model="model" :load-data="loadData"></Cascader>
        <ul>
            <li v-for="(log, idx) in logs" :key="idx">{{log}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading:false
                    }
                ],
                data: [],
                model: [340000, 340100, 340104],
                count: 1,
                logs: []
            }
        },
        methods: {
            loadData (item, callback) {
                this.logs.push(`第${this.count}次请求: ${item.value}`)
                this.count++
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 340000) {
                        item.children = [
                            {value: 340100, label: "合肥市", children: [], loading: false}
                        ];
                    } else if (item.value === 340100) {
                        item.children = [
                            {value: 340104, label: "蜀山区"},
                            {value: 340111, label: "包河区"}
                        ];
                    }
                    item.loading = false;
                    callback();
                }, 1000);
            }
        },
        mounted() {
            this.data = [{value: 340000, label: "安徽省", children: [], loading: false}];
        }
    }
</script>

