<template>
    <i-select :model.sync="model7" style="width:200px"
              filterable>
        <i-option v-for="item in cityList | limitBy 3" :value="item.value">{{ item.label }}</i-option>
        <i-option v-for="item in cityList | limitBy 3 3" :value="item.value">{{ item.label }}</i-option>
    </i-select>
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
                model7: ''
            }
        }
    }
</script>
