<template>
    <Row>
        <i-col span="12" style="padding-right:10px">
            <i-select :model.sync="model111" filterable>
                <i-option v-for="item in cityList1" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
    </Row>
    <Row>
        <i-col span="12" style="padding-right:10px">
            <i-select :model.sync="model112" filterable>
                <i-option v-for="item in cityList2" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
    </Row>
    <Row>
        <i-col span="12">
            <i-select :model.sync="model12" filterable multiple>
                <i-option v-for="item in cityList1" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
    </Row>
</template>
<script>
const cityList = [
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
]
    export default {
        data () {
            return {
                cityList1: cityList,
                model111: '',

                cityList2: [],
                model112: 'beijing',

                model12: []
            }
        },
        ready() {
          this.model111 = 'hangzhou'
          setTimeout(()=>{
            this.cityList2 = cityList
          }, 500)
        }
    }
</script>
