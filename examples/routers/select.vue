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
        <Select
                v-model="model10"
                filterable :max-tag-count="2"
                style="width:400px"
                prefix="ios-albums"
                remote
                :remote-method="remoteMethod"
                :noFilter="true">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
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
    </div>
</template>
<script>
    import axios from 'axios'
    axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '//www.norchant.com/' : '/API/';

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
                model10: []
            }
        },
        methods: {
            more (num) {
                return 'more' + num;
            },
            async remoteMethod(query) {
                let that = this;
                if (query !== '') {
                    var next = function next() {
                        that.cityList = srcMedOpts;
                    };

                    let srcMedOpts = [];
                    try {
                        const resData = await axios.get(`/data/medicine/list/?medicine=${query}`, {
                            timeout: 500
                        });
                        srcMedOpts = resData.data.info;
                        srcMedOpts = srcMedOpts.map((item)=>{
                            return {
                                value: item.text,
                                label: item.text
                            }
                        })
                        next();
                    } catch (e) {
                        console.log(e);
                        next();
                    }
                }
            }
        }
    }
</script>
