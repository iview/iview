<template>
    <div>
        date: {{ formInline.date }}
        <i-form ref="formInline" :model="formInline" :rules="ruleInline">
            <Form-item prop="date">
                <Date-picker type="date" placeholder="选择日期" v-model="formInline.date"></Date-picker>
            </Form-item>
            <Form-item prop="user">
                <Input v-model="formInline.user">
            </Form-item>
            <Form-item>
                <i-button type="primary" @click.native="handleSubmit('formInline')">登录</i-button>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    date: new Date(),
                    user: ''
                },
                ruleInline: {
                    date: [
                        {
                            required: true,
                            type: 'date',
                            message: '请选择日期',
                            trigger: 'change'
                        }
                    ],
                    user: [
                        {
                            required: true,
                            message: '请输入',
                            trigger: 'change',
                            min: 10
                        },
                        {
                            required: true,
                            message: '请输入2',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleInput (val) {
                console.log(val)
            }
        }
    }
</script>
