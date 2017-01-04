<template>
    <div style="width: 400px">
        <i-form v-ref:form :model="form" :rules="rules" :label-width="100" label-position="right">
            <form-item label="邮箱" prop="mail">
                <i-input :value.sync="form.mail" placeholder="请输入邮箱">
                    <Icon type="ios-email-outline" slot="prepend"></Icon>
                </i-input>
            </form-item>
            <form-item label="密码" prop="passwd">
                <i-input type="password" :value.sync="form.passwd" placeholder="请输入密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </form-item>
            <form-item label="radio" prop="single">
                <radio :checked.sync="form.single">Single</radio>
            </form-item>
            <form-item label="radioGroup" prop="group">
                <Radio-group :model.sync="form.group">
                    <Radio value="apple">
                        <Icon type="social-apple"></Icon>
                        <span>Apple</span>
                    </Radio>
                    <Radio value="android">
                        <Icon type="social-android"></Icon>
                        <span>Android</span>
                    </Radio>
                    <Radio value="windows">
                        <Icon type="social-windows"></Icon>
                        <span>Windows</span>
                    </Radio>
                </Radio-group>
            </form-item>
            <form-item>
                <i-button type="primary" @click="onSubmit('form')">提交</i-button>
            </form-item>
        </i-form>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                form: {
                    mail: '',
                    passwd: '',
                    single: false,
                    group: ''
                },
                rules: {
                    mail: [
                        {
                            required: true, message: '请输入正确的邮箱', trigger: 'blur', type: 'email'
                        },
                        {
                            min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'
                        },
                        {
                            min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'change'
                        }
                    ],
                    passwd: [
                        {
                            required: true, message: '请输入密码', trigger: 'blur'
                        }
                    ],
                    group: [
                        {
                            required: true, message: '请单选组'
                        }
                    ]
                }
            }
        },
        computed: {},
        methods: {
            onSubmit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$Message.success('submit!');
                    } else {
                        this.$Message.error('error submit!');
                        return false;
                    }
                });
            }
        }
    };
</script>