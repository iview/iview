<template>
    <div style="margin: 100px;">
        <row :gutter="64">
            <i-col span="12">
                <Form ref="formValidate1" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="Name" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                    </FormItem>
                    <FormItem label="E-mail" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                    </FormItem>
                    <FormItem label="City" prop="city">
                        <Select v-model="formValidate.city" placeholder="Select your city">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Date">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="Gender" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="Switch" prop="switch">
                        <i-switch v-model="formValidate.switch"></i-switch>
                    </FormItem>
                    <FormItem label="Slider" prop="slider">
                        <Slider v-model="formValidate.slider"></Slider>
                    </FormItem>
                    <FormItem label="AutoComplete" prop="autoComplete">
                        <AutoComplete
                                v-model="formValidate.autoComplete"
                                :data="data1"
                                @on-search="handleSearch1"
                                placeholder="input here"
                                style="width:200px"></AutoComplete>
                    </FormItem>
                    <FormItem label="cascader" prop="cascader">
                        <Cascader v-model="formValidate.cascader" :data="data2"></Cascader>
                    </FormItem>
                    <FormItem label="inputNumber" prop="inputNumber">
                        <InputNumber :max="10" :min="1" v-model="formValidate.inputNumber"></InputNumber>
                    </FormItem>
                    <FormItem label="rate" prop="rate">
                        <Rate v-model="formValidate.rate" />
                    </FormItem>
                    <FormItem label="colorPicker" prop="colorPicker">
                        <ColorPicker v-model="formValidate.colorPicker" />
                    </FormItem>
                    <FormItem label="upload" prop="upload">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button icon="ios-cloud-upload-outline">Upload files</Button>
                        </Upload>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate1')">Submit</Button>
                        <Button @click="handleReset('formValidate1')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
            </i-col>
            <i-col span="12">
                <Form disabled ref="formValidate2" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="Name" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                    </FormItem>
                    <FormItem label="E-mail" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                    </FormItem>
                    <FormItem label="City" prop="city">
                        <Select v-model="formValidate.city" placeholder="Select your city">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Date">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="Gender" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="Switch" prop="switch">
                        <i-switch v-model="formValidate.switch"></i-switch>
                    </FormItem>
                    <FormItem label="Slider" prop="slider">
                        <Slider v-model="formValidate.slider"></Slider>
                    </FormItem>
                    <FormItem label="AutoComplete" prop="autoComplete">
                        <AutoComplete
                                v-model="formValidate.autoComplete"
                                :data="data1"
                                @on-search="handleSearch1"
                                placeholder="input here"
                                style="width:200px"></AutoComplete>
                    </FormItem>
                    <FormItem label="cascader" prop="cascader">
                        <Cascader v-model="formValidate.cascader" :data="data2"></Cascader>
                    </FormItem>
                    <FormItem label="inputNumber" prop="inputNumber">
                        <InputNumber :max="10" :min="1" v-model="formValidate.inputNumber"></InputNumber>
                    </FormItem>
                    <FormItem label="rate" prop="rate">
                        <Rate v-model="formValidate.rate" />
                    </FormItem>
                    <FormItem label="colorPicker" prop="colorPicker">
                        <ColorPicker v-model="formValidate.colorPicker" />
                    </FormItem>
                    <FormItem label="upload" prop="upload">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button icon="ios-cloud-upload-outline">Upload files</Button>
                        </Upload>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate2')">Submit</Button>
                        <Button @click="handleReset('formValidate2')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
            </i-col>
        </row>
        <div style="margin: 100px;width: 200px;">
            <Divider>普通组件</Divider>
            <Button>123</Button>
            <Button disabled>123</Button>
            <br>
            <Input value="" />
            <Input value="" disabled />
            <br>
            <Radio :value="false">Radio</Radio>
            <Radio :value="false" disabled>Radio</Radio>
            <RadioGroup value="爪哇犀牛">
                <Radio label="金斑蝶"></Radio>
                <Radio label="爪哇犀牛"></Radio>
                <Radio label="印度黑羚"></Radio>
            </RadioGroup>
            <RadioGroup value="爪哇犀牛">
                <Radio label="金斑蝶" disabled></Radio>
                <Radio label="爪哇犀牛"></Radio>
                <Radio label="印度黑羚"></Radio>
            </RadioGroup>
            <br>
            <Checkbox :value="false">Checkbox</Checkbox>
            <Checkbox :value="false" disabled>Checkbox</Checkbox>
            <CheckboxGroup :value="['香蕉']">
                <Checkbox label="香蕉"></Checkbox>
                <Checkbox label="苹果" disabled></Checkbox>
                <Checkbox label="西瓜"></Checkbox>
            </CheckboxGroup>
            <br>
            <i-switch :value="false" />
            <i-switch :value="false" disabled />
            <br>
            <Select value="London" disabled style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select value="London" style="width:200px">
                <Option value="beijing">New York</Option>
                <Option value="shanghai" disabled>London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
            <Select value="" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select value="" filterable disabled>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <br>
            <Slider :value="20"></Slider>
            <Slider :value="20" disabled></Slider>
            <br>
            <AutoComplete
                    v-model="value1"
                    :data="data1"
                    @on-search="handleSearch1"
                    placeholder="input here"
                    style="width:200px"></AutoComplete>
            <AutoComplete
                    v-model="value1"
                    :data="data1"
                    @on-search="handleSearch1"
                    placeholder="input here"
                    disabled
                    style="width:200px"></AutoComplete>
            <br>
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            <DatePicker type="date" placeholder="Select date" style="width: 200px" disabled></DatePicker>
            <br>
            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
            <TimePicker type="time" placeholder="Select time" style="width: 168px" disabled></TimePicker>
            <br>
            <Cascader :data="data2"></Cascader>
            <Cascader :data="data2" disabled></Cascader>
            <br>
            <InputNumber :max="10" :min="1" :value="2"></InputNumber>
            <InputNumber :max="10" :min="1" :value="2" disabled></InputNumber>
            <br>
            <Rate :value="3" />
            <Rate :value="3" disabled />
            <br>
            <ColorPicker value="#19be6b" />
            <ColorPicker value="#19be6b" disabled />
            <br>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
            <Upload action="//jsonplaceholder.typicode.com/posts/" disabled>
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                data1: [],
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: '',
                    switch: false,
                    slider: 20,
                    autoComplete: '',
                    cascader: [],
                    inputNumber: 2,
                    rate: 3,
                    colorPicker: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    slider: [
                        { required: true, type: 'number', message: 'Slider', trigger: 'change' }
                    ],
                    switch: [
                        { required: true, type: 'boolean', message: 'Switch...', trigger: 'change' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
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
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
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
