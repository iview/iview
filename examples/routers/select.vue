<template>
    <div>
        <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model2" multiple style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button type="primary" @click="changeData">changeData</Button>

        <br><br><br><br>

        <Select v-model="model3" style="width:200px" clearable filterable multiple>
            <Option v-for="item in cityListForToggling" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button type="primary" @click="toggleData">toggleData</Button>

        <br><br><br><br>

        <Select 
            v-model="model4"
            style="width: 200px;" filterable clearable remote
            :remote-method="remoteMethod"
            :loading="remoteLoading"
        >
            <Option
                v-for="item in remoteOptions"
                :value="item.value"
                :key="item.value"
            >{{item.label}}</Option>
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
                cityList2: [
                    {
                        value: 'Beijing',
                        label: 'Beijing',
                    },
                    {
                        value: 'Guangzhou',
                        label: 'Guangzhou',
                    },
                    {
                        value: 'Shenzhen',
                        label: 'Shenzhen',
                    },
                    {
                        value: 'Zhuhai',
                        label: 'Zhuhai',
                    }
                ],
                cityListForToggling: [],
                model1: '',
                model2: [],
                model3: [],
                model4: '',
                toggleBtnStatus: true,
                remoteOptions: [],
                remoteLoading: false,
            }
        },
        created() {
            this.toggleData();
        },
        methods: {
            changeData() {
                this.model2 = ['Canberra'];
            },
            toggleData() {
                this.$set(this, 'cityListForToggling', this.toggleBtnStatus ? this.cityList : this.cityList2);
                this.$set(this, 'model3', this.toggleBtnStatus ? ['New York'] : ['Beijing', 'Shenzhen']);
                // this.$set(this, 'model3', this.toggleBtnStatus ? 'New York' : 'Beijing');
                this.toggleBtnStatus = !this.toggleBtnStatus;
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.remoteLoading = true;
                    setTimeout(() => {
                        this.remoteLoading = false;
                        query = query.trim();
                        this.remoteOptions = this.cityList.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.remoteOptions = [];
                }
            },
        }
    }
</script>
