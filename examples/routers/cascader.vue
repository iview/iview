<template>
    <div style="margin: 100px;width: 200px;">
        {{ value }}
        <Cascader v-model="value" :data="data" change-on-select></Cascader>
        <Button @click="change">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: [],
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
            change () {
                this.data = [{
                    value: 'beijing2',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong2',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan2',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing2',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu2',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing2',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao2',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou2',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan2',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin2',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }];

                this.$nextTick(() => {
                    this.value = ['beijing2', 'tiantan2'];
                });
            }
        }
    }
</script>
