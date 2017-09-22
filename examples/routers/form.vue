<template>
    <div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label-for="autocomplete" prop="name">
                <span slot="label"><Icon type="ionic"></Icon></span>
                <AutoComplete element-id="autocomplete" v-model="formValidate.name" :data="['Li','Liang','Zhang']" placeholder="请输入姓名"></AutoComplete>
            </Form-item>
            <Form-item label="邮箱" prop="mail">
                <!--<Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>-->
                <ColorPicker v-model="formValidate.mail"></ColorPicker>
            </Form-item>
            <Form-item label-for="select"  label="城市" prop="city">
                <Select element-id="select" filterable v-model="formValidate.city" placeholder="请选择所在地">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </Form-item>
            <Form-item label-for="date" label="选择日期" prop="date">
                <Date-picker element-id="date" type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
            </Form-item>
            <Form-item label-for="cascader" label="级联选择" prop="cascader">
                <Cascader elementId="cascader" :data="dataCascader" v-model="formValidate.cascader"></Cascader>
            </Form-item>

            <Form-item label-for="inputnumber" label="数字框" prop="inputnumber">
                <InputNumber elementId="inputnumber" :max="10" :min="1" v-model="formValidate.inputnumber"></InputNumber>
            </Form-item>

            <Form-item label="选择日期">
                <Row>
                    <Col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                    </Form-item>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <Form-item prop="time">
                        <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                    </Form-item>
                    </Col>
                </Row>
            </Form-item>
            <Form-item label="性别" prop="gender">
                <Radio-group v-model="formValidate.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </Radio-group>
            </Form-item>
            <Form-item label="爱好" prop="interest">
                <Checkbox-group v-model="formValidate.interest">
                    <Checkbox label="吃饭"></Checkbox>
                    <Checkbox label="睡觉"></Checkbox>
                    <Checkbox label="跑步"></Checkbox>
                    <Checkbox label="看电影"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label-for="input" label="介绍" prop="desc">
                <Input element-id="input" v-model="formValidate.desc" type="text" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </Form-item>
        </Form>

        <div style="margin: 100px">
            <form action="/">
                <Input name="f1"></Input>
                <i-switch name="f2" :true-value="1" :false-value="2"></i-switch>
                <Select v-model="model1" multiple style="width:200px" name="f3">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <AutoComplete
                        v-model="value1"
                        :data="data1"
                        @on-search="handleSearch1"
                        placeholder="input here"
                        name="f4"
                        style="width:200px"></AutoComplete>
                <Slider v-model="value11" name="f5"></Slider>
                <DatePicker type="date" placeholder="选择日期" style="width: 200px" name="f6"></DatePicker>
                <TimePicker type="time" placeholder="选择时间" style="width: 168px" name="f7"></TimePicker>
                <Cascader :data="datac" v-model="valuec" name="f8"></Cascader>
                <Rate v-model="valuer" name="f9"></Rate>
                <ColorPicker v-model="color" name="f10" />
                <button type="submit">test</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                dataCascader: [{
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
                color: '#19be6b',
                valuer: 3,
                valuec: [],
                datac: [{
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
                value1: '',
                value11: 25,
                data1: [],
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
                model1: [],
                name: '',
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: '',
                    cascader: [],
                    inputnumber: 1
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'change' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'change' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
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
            },
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>
