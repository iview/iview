<template>
    <Row>
        <i-col span="12" style="padding-right:10px">
        <Select v-model="model11" filterable>
            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
        </i-col>
        <i-col span="12">
        <Select v-model="model12" filterable multiple>
            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
        </i-col>
    </Row>
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
