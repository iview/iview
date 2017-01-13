<template>
    <Row style="width: 400px">
        <i-col span="12" style="padding-right:10px">
            <i-select :model.sync="model11" filterable>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
        <i-col span="12">
            <i-select :model.sync="model12" filterable multiple>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
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
