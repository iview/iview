<template>
    <div>
        <Cascader v-model="value3" :data="data" filterable style="width: 400px"></Cascader>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <Cascader v-model="value3" :data="data" filterable style="width: 400px"></Cascader>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <Cascader v-model="value3" :data="data" filterable style="width: 400px"></Cascader>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 1,
                    label: '北京',
                    children: [
                        {
                            value: 11,
                            label: '故宫'
                        },
                        {
                            value: 12,
                            label: '天坛'
                        },
                        {
                            value: 13,
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 2,
                    label: '江苏',
                    children: [
                        {
                            value: 21,
                            label: '南京',
                            children: [
                                {
                                    value: 211,
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 22,
                            label: '苏州',
                            children: [
                                {
                                    value: 221,
                                    label: '拙政园',
                                },
                                {
                                    value: 222,
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                value3: []
            }
        }
    }
</script>
