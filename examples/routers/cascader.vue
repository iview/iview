<template>
    <Row>
        <i-col span="4">
            <Button @click="handleLoad">load</Button>
            {{ v1 }}
        </i-col>
        <i-col span="4">
            <Cascader :data="data3" filterable v-model="v1"></Cascader>
            <!--<Cascader :data="data2" filterable v-model="v1" :loadData="loadData"></Cascader>-->
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                v1: [],
                data2: [
                    {
                        value: 'zhejiang',
                        label: '浙江',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [{
                            value: 'nanjing',
                            label: '南京',
                            children: [{
                                value: 'zhonghuamen',
                                label: '中华门'
                            }]
                        }]
                    }
                ],
                data3: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    disabled: true,
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
            handleLoad () {
                this.data2[0].loading = !this.data2[0].loading;
            },
            loadData (item, cb) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'zhejiang') {
                        item.children = [
                            {
                                value: 'hangzhou',
                                label: '杭州',
                                loading: false,
                                children: []
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [
                            {
                                value: 'ali',
                                label: '阿里巴巴'
                            }
                        ];
                    }
                    item.loading = false;
                    cb();
                }, 1000);
            }
        }
    }
</script>
