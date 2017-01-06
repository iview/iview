<template>
    <div style="width: 600px">
        <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80">
            <Form-item label="密码" prop="passwd">
                <i-input type="password" :value.sync="formCustom.passwd"></i-input>
            </Form-item>
            <Form-item label="确认密码" prop="passwdCheck">
                <i-input type="password" :value.sync="formCustom.passwdCheck"></i-input>
            </Form-item>
            <Form-item label="年龄" prop="age">
                <i-input type="text" :value.sync="formCustom.age"></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" @click="handleSubmit('formCustom')">提交</i-button>
                <i-button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</i-button>
            </Form-item>
        </i-form>



        <i-form v-ref:form :model="form" :rules="rules" :label-width="100" label-position="right">
            <form-item label="邮箱" prop="mail">
                <i-input :value.sync="form.mail" placeholder="请输入邮箱">
                    <Icon type="ios-email-outline" slot="prepend"></Icon>
                </i-input>
            </form-item>
            <form-item label="密码" prop="passwd">
                <i-input :value.sync="form.passwd">
                    <i-select slot="prepend" style="width: 80px">
                        <i-option value="http">http://</i-option>
                        <i-option value="https">https://</i-option>
                    </i-select>
                    <i-select slot="append" style="width: 70px">
                        <i-option value="com">.com</i-option>
                        <i-option value="org">.org</i-option>
                        <i-option value="io">.io</i-option>
                    </i-select>
                </i-input>
            </form-item>
            <form-item label="textarea" prop="textarea">
                <i-input :value.sync="form.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
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
            <form-item label="checkbox-g" prop="checkboxgroup">
                <Checkbox-group :model.sync="form.checkboxgroup">
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                    <Checkbox value="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                </Checkbox-group>
            </form-item>
            <form-item label="select" prop="select">
                <i-select :model.sync="form.select" style="width:200px" clearable>
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </i-select>
                <i-select :model.sync="model11" filterable>
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </i-select>
                <i-select :model.sync="model12" filterable multiple>
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </i-select>
            </form-item>
            <form-item label="select多选" prop="selectm">
                <i-select :model.sync="form.selectm" multiple style="width:260px">
                    <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
                </i-select>
            </form-item>
            <form-item label="多选滑块" prop="slider">
                <Slider :value.sync="form.slider" range></Slider>
            </form-item>
            <form-item label="日期" prop="date">
                <Time-picker :value.sync="form.date" type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
            </form-item>
            <form-item label="两个日期" prop="date2">
                <Date-picker :value.sync="form.date2" type="daterange" placement="bottom-start" placeholder="选择日期" @on-change="c"></Date-picker>
            </form-item>
            <form-item label="级联" prop="cascader">
                <Cascader :data="data" :value.sync="form.cascader"></Cascader>
            </form-item>
            <form-item label="穿梭框" prop="targetKeys1">
                <Transfer
                    :data="form.transfer"
                    :target-keys="form.targetKeys1"
                    :render-format="render1"
                    @on-change="handleChange1"></Transfer>
            </form-item>
            <form-item label="数字输入框" prop="input">
                <Input-number :max="10" :min="1" :value.sync="form.input"></Input-number>
            </form-item>
            <form-item>
                <i-button type="primary" @click="onSubmit('form')">提交</i-button>
                <i-button type="ghost" @click="resetForm('form')">重置</i-button>
            </form-item>
        </i-form>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                form: {
                    mail: '',
                    passwd: '',
                    single: false,
                    group: '',
                    checkboxgroup: [],
                    select: '',
                    selectm: [],
                    slider: [40, 50],
                    date: '',
                    date2: '',
                    cascader: [],
                    transfer: this.getMockData(),
                    targetKeys1: this.getTargetKeys(),
                    input: 1,
                    textarea: ''
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
                    ],
                    checkboxgroup: [
                        {
                            required: true, message: '至少选择2个', min: 2, type: 'array',
                        },
                        {
                            required: true, message: '至多选择3个', max: 3, type: 'array'
                        }
                    ],
                    select: [
                        {
                            required: true
                        }
                    ],
                    slider: [
                        {
                            type: 'array', len: 2,
                            fields: {
                                0: {
                                    type: 'number', min: 30, 'message': '不能小于30'
                                },
                                1: {
                                    type: 'number', max: 90, 'message': '不能大于90'
                                }
                            }
                        }
                    ],
                    date: [
                        {
                            required: true
                        },
                        {
                            type: 'date'
                        }
                    ],
                    date2: [
                        {
                            type: 'array', len: 2,
                            fields: {
                                0: {
                                    type: 'date', required: true
                                },
                                1: {
                                    type: 'date', required: true
                                }
                            }
                        }
                    ],
                    cascader: [
                        {
                            type: 'array', required: true
                        }
                    ],
                    targetKeys1: [
                        {
                            type: 'array', min: 8, max: 10
                        }
                    ],
                    input: [
                        {
                            type: 'number', min: 1, max: 4
                        }
                    ],
                    textarea: [
                        {
                            required: true, trigger: 'blur'
                        },
                        {
                            type: 'string', min: 10
                        }
                    ]
                },
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
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
            },
            resetForm (formName) {
                this.$refs[formName].resetFields();
            },
            c (s) {
                console.log(this.form.date)
            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容' + i,
                        description: '内容' + i + '的描述信息',
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.form.targetKeys1 = newTargetKeys;
            },
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
    };
</script>