<template>
    <div style="margin: 200px;">
        <Select
            size="small" style="width:auto; margin-right:100px"
            v-model="privacyKey"
            @on-change="onPrivacySelect"
            :icon="privacy.icon"
            placeholder=" ">
            <Option v-for="(item,key) in privacyList" :value="item.value" :key="item.value">
                <div slot>
                    <Icon :type="item.icon" />
                    <strong>{{ item.name }}</strong>
                    <p style="margin:5px 0 0 16px">{{item.desc}}</p>
                </div>
            </Option>
        </Select>
        <Select size="small" v-model="model10" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model10" multiple style="width:260px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select size="large" v-model="model10" multiple style="width:260px">
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
                        label: 'LondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondonLondon'
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
                model10: ['New York', 'London'],
                privacyList: {
                    "public": {
                        value:"public",
                        name:"Public",
                        desc:"Anyone on or off 'CompanyName'",
                        icon:'md-globe'
                    },
                    "limited":{
                        value:"limited",
                        name:"Friends",
                        desc:"Friends on 'CompanyName'",
                        icon:'md-people'
                    },
                    "private":{
                        value:"private",
                        name:"Only me",
                        desc:"Only me",
                        icon:'md-lock'
                    }
                },
                privacyKey: "public",
                privacy:null
            }
        },
        created() {
            this.privacy = this.privacyList[this.privacyKey]
        },
        methods:{
            onPrivacySelect(key) {
                this.privacy = this.privacyList[key];
            }
        }
    }
</script>
