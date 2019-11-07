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
       <!-- fix #6349 -->
       <Select v-model='test' filterable clearable>
            <Option v-for='item in list' :value='item.value' :label="item.name"></Option>
        </Select>
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
                    name:"测试测试",
                    value:8
                },{
                    name:"\"年龄\"123",
                    value:9
                }]
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
