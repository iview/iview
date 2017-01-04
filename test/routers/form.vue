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
                    date2: ''
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
            c (s) {
                console.log(this.form.date)
            }
        }
    };
</script>