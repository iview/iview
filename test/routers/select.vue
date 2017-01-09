<template>
    <Row>
        <i-col span="12" style="padding-right:10px">
            <i-select :model.sync="model11" filterable>
                <i-option v-for="item in cityList" :value="item.value" :label="item.label"><span>{{ item.label }}</span><span>{{ item.des }}</span></i-option>
            </i-select>
        </i-col>
        <i-col span="12">
            <i-select :model.sync="model12" filterable multiple>
                <i-option v-for="item in cityList" :value="item.value" :label="item.label"><span>{{ item.label }}</span><span>{{ item.des }}</span></i-option>
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
                        label: '北京市',
                        des: '帝都'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市',
                        des: '魔都'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市',
                        des: '渔村'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市',
                        des: '山城'
                    }
                ],
                model11: '',
                model12: ['beijing', 'shanghai']
            }
        }
    }
</script>
