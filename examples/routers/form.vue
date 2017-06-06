<template>
    <div style="width: 300px;">
        <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="爱好" prop="interest">
                <Input v-model="formValidate.interest" number></Input>
            </Form-item>
            <Form-item>
                <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
                <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    interest: ''
                },
                ruleValidate: {
                    interest: [
                        {
                            required: true,
                            type: 'number',
                            trigger: 'change'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
