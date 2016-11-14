<template>
    <i-select :model.sync="model1" style="width:200px" clearable>
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    {{ model1 | json }}
    <i-button @click="change">修改数据</i-button>
    <i-select :model.sync="model10" multiple style="width:240px" @on-change="datachange">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    {{ model10 | json }}
    <i-select :model.sync="model11" filterable style="width:200px" @on-change="datachange">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    {{ model11 | json }}
    <i-select :model.sync="model12" filterable multiple style="width:240px" @on-change="datachange">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    {{ model12 | json }}
    <br><br>
    <i-select :model.sync="model2" size="small" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model3" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model4" size="large" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model7" style="width:200px">
        <Option-group label="热门城市">
            <i-option v-for="item in cityList | limitBy 3" :value="item.value">{{ item.label }}</i-option>
        </Option-group>
        <Option-group label="其它城市">
            <i-option v-for="item in cityList | limitBy 3 3" :value="item.value">{{ item.label }}</i-option>
        </Option-group>
    </i-select>
</template>
<script>
    import { iSelect, iOption, iButton, OptionGroup } from 'iview';
    export default {
        components: { iSelect, iOption, iButton, OptionGroup },
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
//                    {
//                        value: 'hangzhou',
//                        label: '杭州市'
//                    },
//                    {
//                        value: 'nanjing',
//                        label: '南京市'
//                    },
//                    {
//                        value: 'chongqing',
//                        label: '重庆市'
//                    }
                ],
                model1: '',
                model10: [],
                model11: '',
                model12: [],
                model2: '',
                model3: '',
                model4: '',
                model7: ''
            }
        },
        methods: {
            change () {
                this.cityList.splice(2, 1);
            },
            datachange (data) {
                console.log(data);
            }
        }
    }
</script>
