<template>
    <div>
        <!-- <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model2" multiple style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select> -->
        
        <div style="margin:5px 0px">
            <Select v-model="city" style="width:200px" placeholder='选择市'>
                <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="region" style="width:200px" placeholder='选择区' multiple>
                <Option v-for="item in regionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
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
                model2: [],

                city:null,
                region:null,
                cityList2:[
                    {
                        value: '1',
                        label: '北京'
                    },
                    {
                        value: '2',
                        label: '上海'
                    },
                ],
                regionList:[],
            }
        },
        watch:{
            city(val){
                this.loadRegion(val)
            }
        },
        methods:{
            loadRegion(val){
                let list = [];
                if(val){
                    if(val==="1"){
                        list.push({value:'11',label:'东城区'});
                        list.push({value:'12',label:'西城区'});
                        list.push({value:'13',label:'朝阳区'});
                        list.push({value:'14',label:'丰台区'});
                        list.push({value:'15',label:'石景山区'});
                        list.push({value:'16',label:'海淀区'});
                        list.push({value:'17',label:'门头沟区'});
                        list.push({value:'18',label:'房山区'});
                    }
                    else if(val==="2"){
                        list.push({value:'21',label:'黄浦区'});
                        list.push({value:'22',label:'徐汇区'});
                        list.push({value:'23',label:'长宁区'});
                        list.push({value:'24',label:'静安区'});
                        list.push({value:'25',label:'普陀区'});
                        list.push({value:'26',label:'虹口区'});
                        list.push({value:'27',label:'杨浦区'});
                        list.push({value:'28',label:'闵行区'});
                    }
                }
                this.regionList = list;
            }
        }
    }
</script>
