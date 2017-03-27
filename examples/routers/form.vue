<!--<template>-->
    <!--<div>-->
        <!--date: {{ formInline.date }}-->
        <!--<i-form ref="formInline" :model="formInline" :rules="ruleInline">-->
            <!--<Form-item prop="date" label="日期">-->
                <!--<Date-picker type="date" placeholder="选择日期" v-model="formInline.date"></Date-picker>-->
            <!--</Form-item>-->
            <!--<Form-item prop="value2" label="级联选择">-->
                <!--<Cascader :data="formInline.data" v-model="formInline.value2" change-on-select></Cascader>-->
            <!--</Form-item>-->
            <!--<Form-item prop="user" label="输入框">-->
                <!--<Input v-model="formInline.user"></Input>-->
            <!--</Form-item>-->
            <!--<Form-item prop="targetKeys1" label="穿梭框">-->
                <!--<Transfer-->
                    <!--filterable-->
                    <!--:data="formInline.data1"-->
                    <!--:target-keys="formInline.targetKeys1"-->
                    <!--:render-format="render1"-->
                    <!--@on-change="handleChange1"></Transfer>-->
            <!--</Form-item>-->
            <!--<Form-item>-->
                <!--<i-button type="primary" @click.native="handleSubmit('formInline')">登录</i-button>-->
            <!--</Form-item>-->
        <!--</i-form>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--formInline: {-->
                    <!--data1: this.getMockData(),-->
                    <!--targetKeys1: this.getTargetKeys(),-->
                    <!--date: new Date(),-->
                    <!--user: '',-->
                    <!--value2: [],-->
                    <!--data: [{-->
                        <!--value: 'beijing',-->
                        <!--label: '北京',-->
                        <!--children: [-->
                            <!--{-->
                                <!--value: 'gugong',-->
                                <!--label: '故宫'-->
                            <!--},-->
                            <!--{-->
                                <!--value: 'tiantan',-->
                                <!--label: '天坛'-->
                            <!--},-->
                            <!--{-->
                                <!--value: 'wangfujing',-->
                                <!--label: '王府井'-->
                            <!--}-->
                        <!--]-->
                    <!--}, {-->
                        <!--value: 'jiangsu',-->
                        <!--label: '江苏',-->
                        <!--children: [-->
                            <!--{-->
                                <!--value: 'nanjing',-->
                                <!--label: '南京',-->
                                <!--children: [-->
                                    <!--{-->
                                        <!--value: 'fuzimiao',-->
                                        <!--label: '夫子庙',-->
                                    <!--}-->
                                <!--]-->
                            <!--},-->
                            <!--{-->
                                <!--value: 'suzhou',-->
                                <!--label: '苏州',-->
                                <!--children: [-->
                                    <!--{-->
                                        <!--value: 'zhuozhengyuan',-->
                                        <!--label: '拙政园',-->
                                    <!--},-->
                                    <!--{-->
                                        <!--value: 'shizilin',-->
                                        <!--label: '狮子林',-->
                                    <!--}-->
                                <!--]-->
                            <!--}-->
                        <!--],-->
                    <!--}]-->
                <!--},-->
                <!--ruleInline: {-->
                    <!--date: [-->
                        <!--{-->
                            <!--required: true,-->
                            <!--type: 'date',-->
                            <!--message: '请选择日期',-->
                            <!--trigger: 'change'-->
                        <!--}-->
                    <!--],-->
                    <!--user: [-->
                        <!--{-->
                            <!--required: true,-->
                            <!--message: '请输入',-->
                            <!--trigger: 'change',-->
                            <!--min: 10-->
                        <!--},-->
                        <!--{-->
                            <!--required: true,-->
                            <!--message: '请输入2',-->
                            <!--trigger: 'blur'-->
                        <!--}-->
                    <!--],-->
                    <!--value2: [-->
                        <!--{-->
                            <!--required: true,-->
                            <!--type: 'array',-->
                            <!--message: '请输入',-->
                            <!--trigger: 'change'-->
                        <!--}-->
                    <!--],-->
                    <!--targetKeys1: [-->
                        <!--{-->
                            <!--required: true,-->
                            <!--type: 'array',-->
                            <!--max: 2,-->
                            <!--message: '太多了',-->
                            <!--trigger: 'change'-->
                        <!--}-->
                    <!--]-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleSubmit(name) {-->
                <!--this.$refs[name].validate((valid) => {-->
                    <!--if (valid) {-->
                        <!--this.$Message.success('提交成功!');-->
                    <!--} else {-->
                        <!--this.$Message.error('表单验证失败!');-->
                    <!--}-->
                <!--})-->
            <!--},-->
            <!--handleInput (val) {-->
                <!--console.log(val)-->
            <!--},-->
            <!--getMockData () {-->
                <!--let mockData = [];-->
                <!--for (let i = 1; i <= 20; i++) {-->
                    <!--mockData.push({-->
                        <!--key: i.toString(),-->
                        <!--label: '内容' + i,-->
                        <!--description: '内容' + i + '的描述信息',-->
                        <!--disabled: Math.random() * 3 < 1-->
                    <!--});-->
                <!--}-->
                <!--return mockData;-->
            <!--},-->
            <!--getTargetKeys () {-->
                <!--return this.getMockData()-->
                    <!--.filter(() => Math.random() * 2 > 1)-->
                    <!--.map(item => item.key);-->
            <!--},-->
            <!--render1 (item) {-->
                <!--return item.label;-->
            <!--},-->
            <!--handleChange1 (newTargetKeys, direction, moveKeys) {-->
                <!--console.log(newTargetKeys);-->
                <!--console.log(direction);-->
                <!--console.log(moveKeys);-->
                <!--this.formInline.targetKeys1 = newTargetKeys;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">-->
        <!--<Form-item label="密码" prop="passwd">-->
            <!--<Input type="password" v-model="formCustom.passwd"></Input>-->
        <!--</Form-item>-->
        <!--<Form-item label="确认密码" prop="passwdCheck">-->
            <!--<Input type="password" v-model="formCustom.passwdCheck"></Input>-->
        <!--</Form-item>-->
        <!--<Form-item label="年龄" prop="age">-->
            <!--<Input type="text" v-model="formCustom.age" number></Input>-->
        <!--</Form-item>-->
        <!--<Form-item>-->
            <!--<Button type="primary" @click="handleSubmit('formCustom')">提交</Button>-->
            <!--<Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>-->
        <!--</Form-item>-->
    <!--</Form>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--const validatePass = (rule, value, callback) => {-->
                <!--if (value === '') {-->
                    <!--callback(new Error('请输入密码'));-->
                <!--} else {-->
                    <!--if (this.formCustom.passwdCheck !== '') {-->
                        <!--// 对第二个密码框单独验证-->
                        <!--this.$refs.formCustom.validateField('passwdCheck');-->
                    <!--}-->
                    <!--callback();-->
                <!--}-->
            <!--};-->
            <!--const validatePassCheck = (rule, value, callback) => {-->
                <!--if (value === '') {-->
                    <!--callback(new Error('请再次输入密码'));-->
                <!--} else if (value !== this.formCustom.passwd) {-->
                    <!--callback(new Error('两次输入密码不一致!'));-->
                <!--} else {-->
                    <!--callback();-->
                <!--}-->
            <!--};-->
            <!--const validateAge = (rule, value, callback) => {-->
                <!--if (!value) {-->
                    <!--return callback(new Error('年龄不能为空'));-->
                <!--}-->
                <!--// 模拟异步验证效果-->
                <!--setTimeout(() => {-->
                    <!--if (!Number.isInteger(value)) {-->
                        <!--callback(new Error('请输入数字值'));-->
                    <!--} else {-->
                        <!--if (value < 18) {-->
                            <!--callback(new Error('必须年满18岁'));-->
                        <!--} else {-->
                            <!--callback();-->
                        <!--}-->
                    <!--}-->
                <!--}, 1000);-->
            <!--};-->

            <!--return {-->
                <!--formCustom: {-->
                    <!--passwd: '',-->
                    <!--passwdCheck: '',-->
                    <!--age: ''-->
                <!--},-->
                <!--ruleCustom: {-->
                    <!--passwd: [-->
                        <!--{ validator: validatePass, trigger: 'blur' }-->
                    <!--],-->
                    <!--passwdCheck: [-->
                        <!--{ validator: validatePassCheck, trigger: 'blur' }-->
                    <!--],-->
                    <!--age: [-->
                        <!--{ validator: validateAge, trigger: 'blur' }-->
                    <!--]-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleSubmit (name) {-->
                <!--this.$refs[name].validate((valid) => {-->
                    <!--if (valid) {-->
                        <!--this.$Message.success('提交成功!');-->
                    <!--} else {-->
                        <!--this.$Message.error('表单验证失败!');-->
                    <!--}-->
                <!--})-->
            <!--},-->
            <!--handleReset (name) {-->
                <!--this.$refs[name].resetFields();-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<template>
    <div>
        <Form ref="DateForm" :model="form" :rules="rules" :label-width="80" style="width: 400px;">
            <Form-item label="选择日期" prop="date">
                <Date-picker v-model="form.date" type="datetime"></Date-picker>
            </Form-item>
            <Form-item>
                <Button type="primary" @click.native="handleClick">确定</Button>
            </Form-item>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                form: {
                    date: ''
                },
                rules: {
                    date: [
                        { required: true, type: 'date', message: '不能为空', trigger: 'change' },
                        { type: 'date', message: '日期格式不正确', trigger: 'change'}
                    ]
                }
            }
        },
        methods: {
            handleClick() {
                this.$refs.DateForm.validate();
            }
        },
        watch: {
            'form.date' (val) {
                console.log(val);
            }
        }
    }
</script>