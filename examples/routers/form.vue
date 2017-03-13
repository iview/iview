<template>
    <div>
        date: {{ formInline.date }}
        <i-form ref="formInline" :model="formInline" :rules="ruleInline">
            <Form-item prop="date">
                <Date-picker type="date" placeholder="选择日期" v-model="formInline.date"></Date-picker>
            </Form-item>
            <Form-item prop="value2">
                <Cascader :data="formInline.data" v-model="formInline.value2" change-on-select></Cascader>
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
                    user: '',
                    value2: [],
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
                    }]
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
                    ],
                    value2: [
                        {
                            required: true,
                            type: 'array',
                            message: '请输入',
                            trigger: 'change'
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
