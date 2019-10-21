<template>
    <div style="margin: 100px;">
        <Select v-model="model1" filterable style="width:200px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model10" filterable :max-tag-count="2" multiple style="width:400px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model10" filterable :max-tag-count="2" multiple style="width:400px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <br><br>

        <Select v-model="model1" style="width:200px">
            <Icon type="ios-alarm" slot="prefix" color="red" />
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model1" style="width:200px">
            <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model10" :max-tag-count="3" :max-tag-placeholder="more" multiple style="width:400px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <br><br>

        <Select size="small" v-model="model1" style="width:200px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select size="small" v-model="model10" multiple style="width:400px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <br><br>

        <Select size="large" v-model="model1" style="width:200px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select size="large" v-model="model10" multiple style="width:400px" prefix="ios-albums">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider></Divider>
        <Select v-model="model13" filterable allow-create @on-create="handleCreate" style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model12" multiple filterable allow-create @on-create="handleCreate" style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider></Divider>
        <Select v-model="model31" size="small" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model31" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model31" size="large" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider></Divider>
        <Select v-model="model31" filterable size="small" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model31" filterable style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model31" filterable size="large" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider></Divider>
        <Select v-model="model34" multiple size="small" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model34" multiple style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model34" multiple size="large" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Divider></Divider>
        <Select v-model="model34" filterable multiple size="small" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model34" filterable multiple style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model34" filterable allow-create multiple size="large" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                model10: [],
                model12: [],
                model13: '',
                model31: '',
                model32: '',
                model33: '',
                model34: [],
                model35: [],
                model36: []
            }
        },
        methods: {
            more (num) {
                return 'more' + num;
            },
            handleCreate (val) {
                console.log(111,val);
                this.cityList.push({
                    value: val,
                    label: val
                });
            }
        }
    }
</script>
