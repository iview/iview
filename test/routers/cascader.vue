<template>
    {{ text }}
    <Cascader :data="data" @on-change="handleChange">
        <a href="javascript:void(0)">选择</a>
    </Cascader>

    <Row>
        <i-col span="4">
            Disabled <Switch :checked.sync="disabled"></Switch>
        </i-col>
        <i-col span="4">
            <Cascader :data="data" :value.sync="value1" :disabled="disabled"></Cascader>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false,
                text: '未选择',
                data: [{
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
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
        }
    }
</script>
