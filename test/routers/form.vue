<template>
    <div style="width: 400px">
        <i-form v-ref:form :model="form" :rules="rules" :label-width="50" label-position="right">
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
                    passwd: ''
                },
                rules: {
                    mail: [
                        {
                            required: true, message: '请输入邮箱', trigger: 'blur'
                        },
                        {
                            min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'
                        }
                    ],
                    passwd: [
                        {
                            required: true, message: '请输入密码', trigger: 'blur'
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