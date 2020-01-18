<template>
   <div>
       {{formValidate}}
       <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
           <FormItem label="Hobby" prop="ainterest">
               <Select
                   multiple
                   :max-tag-count="1"
                   v-model="formValidate.ainterest"
               >
                   <Option value="Eat">Eat</Option>
                   <Option value="Sleep">Sleep</Option>
                   <Option value="Run">Run</Option>
                   <Option value="Movie">Movie</Option>
               </Select>
           </FormItem>
           <FormItem label="Hobby" prop="binterest">
               <CheckboxGroup v-model="formValidate.binterest">
                   <Checkbox label="Eat"></Checkbox>
                   <Checkbox label="Sleep"></Checkbox>
                   <Checkbox label="Run"></Checkbox>
                   <Checkbox label="Movie"></Checkbox>
               </CheckboxGroup>
           </FormItem>
           <FormItem>
               <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
               <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
           </FormItem>
       </Form>
       <h2 style="margin-top:20px">#5327 feature</h2>
       <Select v-model='test' filterable clearable>
            <Option v-for='item in list' :value='item.value' :label="item.name" :key="item.value"></Option>
            <div slot="empty">2222</div>
        </Select>
        <h2 style="margin-top:20px">#5216</h2>
        <Select v-model="model11" filterable clearable>
            <OptionGroup label="分组">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
        </Select>
        <h2 style="margin-top:20px">Demo</h2>
        <Select v-model="model12">
            <OptionGroup label="分组">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
        </Select>
        <h2 style="margin-top:20px">#6399</h2>
        <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value"><span>{{ item.label }}</span></Option>
        </Select> <Button type="primary" @click="onCityListChange">切换cityList</Button>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    ainterest: [],
                    binterest: [],
                },
                ruleValidate: {
                    ainterest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    ],
                    binterest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    ],
                },
                test:'',
                list:[{
                    name: '测试测试2',
                    value:1
                },{
                    name: 'dddddd',
                    value:2
                },{
                    name:'测试测试',
                    value:8
                },{
                    name: '\"年龄\"123',
                    value:9
                }],
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
                model11: '',
                model12: ''
            };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            onCityListChange () {
                this.cityList[0].label = 'New York city';
                this.cityList.splice(this.cityList.length - 1, 1);
                const value = Math.round(Math.random() * 10000);
                this.cityList.push({
                    value,
                    label: 'laebl: ' + value
                })
            }
        }
    };
</script>
