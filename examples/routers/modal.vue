<template>
    <div>
        <Button @click="test">test</Button>
        <p>执行次数{{num}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: 0
            }
        },
        methods: {
            test() {
                this.$Modal.confirm({
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.num++
                            this.$Modal.remove()
                        }, 0)
                    }
                })
            }
        }
    }
</script>

<!--<template>-->
<!--    <div>-->
<!--        <Button type="primary" @click="modal1 = true">Display dialog box</Button>-->
<!--        <Button type="primary" @click="modal2 = true">Display dialog box</Button>-->
<!--        <Modal v-model="modal2" draggable title="Common Modal dialog box title"-->
<!--               @on-ok="ok"-->
<!--               @on-cancel="cancel" :styles="{top: '300px', left: '100px'}">-->
<!--            <p>2123</p>-->
<!--        </Modal>-->
<!--        <Modal-->
<!--                v-model="modal1"-->
<!--                title="Common Modal dialog box title"-->
<!--                @on-ok="ok"-->
<!--                @on-cancel="cancel">-->
<!--            <p>Content of dialog</p>-->
<!--            <p>Content of dialog</p>-->
<!--            <p>Content of dialog</p>-->
<!--            <Button @click="openMessage">Message</Button>-->
<!--            <Select v-model="model1" style="width:200px" :transfer="false">-->
<!--                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--            </Select>-->
<!--            <Select v-model="model1" style="width:200px" :transfer="true">-->
<!--                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--            </Select>-->
<!--            <Dropdown transfer>-->
<!--                <a href="javascript:void(0)">-->
<!--                    下拉菜单-->
<!--                    <Icon type="ios-arrow-down"></Icon>-->
<!--                </a>-->
<!--                <DropdownMenu slot="list">-->
<!--                    <DropdownItem>驴打滚</DropdownItem>-->
<!--                    <DropdownItem>炸酱面</DropdownItem>-->
<!--                    <DropdownItem disabled>豆汁儿</DropdownItem>-->
<!--                    <DropdownItem>冰糖葫芦</DropdownItem>-->
<!--                    <DropdownItem divided>北京烤鸭</DropdownItem>-->
<!--                </DropdownMenu>-->
<!--            </Dropdown>-->
<!--            <DatePicker type="date" placeholder="Select date" style="width: 200px" transfer></DatePicker>-->
<!--            <Cascader :data="data" v-model="value1" transfer></Cascader>-->
<!--            <Tooltip content="Here is the prompt text" transfer>-->
<!--                A balloon appears when the mouse passes over this text-->
<!--            </Tooltip>-->
<!--            <Poptip trigger="hover" title="Title" content="content" transfer>-->
<!--                <Button>Hover</Button>-->
<!--            </Poptip>-->
<!--            <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>-->
<!--        </Modal>-->
<!--        <Select v-model="model1" style="width:200px" :transfer="false">-->
<!--            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--        </Select>-->
<!--        <Select v-model="model1" style="width:200px" :transfer="true">-->
<!--            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--        </Select>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                modal1: false,-->
<!--                modal2: false,-->
<!--                cityList: [-->
<!--                    {-->
<!--                        value: 'New York',-->
<!--                        label: 'New York'-->
<!--                    },-->
<!--                    {-->
<!--                        value: 'London',-->
<!--                        label: 'London'-->
<!--                    },-->
<!--                    {-->
<!--                        value: 'Sydney',-->
<!--                        label: 'Sydney'-->
<!--                    },-->
<!--                    {-->
<!--                        value: 'Ottawa',-->
<!--                        label: 'Ottawa'-->
<!--                    },-->
<!--                    {-->
<!--                        value: 'Paris',-->
<!--                        label: 'Paris'-->
<!--                    },-->
<!--                    {-->
<!--                        value: 'Canberra',-->
<!--                        label: 'Canberra'-->
<!--                    }-->
<!--                ],-->
<!--                model1: '',-->
<!--                value1: [],-->
<!--                data: [{-->
<!--                    value: 'beijing',-->
<!--                    label: '北京',-->
<!--                    children: [-->
<!--                        {-->
<!--                            value: 'gugong',-->
<!--                            label: '故宫'-->
<!--                        },-->
<!--                        {-->
<!--                            value: 'tiantan',-->
<!--                            label: '天坛'-->
<!--                        },-->
<!--                        {-->
<!--                            value: 'wangfujing',-->
<!--                            label: '王府井'-->
<!--                        }-->
<!--                    ]-->
<!--                }, {-->
<!--                    value: 'jiangsu',-->
<!--                    label: '江苏',-->
<!--                    children: [-->
<!--                        {-->
<!--                            value: 'nanjing',-->
<!--                            label: '南京',-->
<!--                            children: [-->
<!--                                {-->
<!--                                    value: 'fuzimiao',-->
<!--                                    label: '夫子庙',-->
<!--                                }-->
<!--                            ]-->
<!--                        },-->
<!--                        {-->
<!--                            value: 'suzhou',-->
<!--                            label: '苏州',-->
<!--                            children: [-->
<!--                                {-->
<!--                                    value: 'zhuozhengyuan',-->
<!--                                    label: '拙政园',-->
<!--                                },-->
<!--                                {-->
<!--                                    value: 'shizilin',-->
<!--                                    label: '狮子林',-->
<!--                                }-->
<!--                            ]-->
<!--                        }-->
<!--                    ],-->
<!--                }]-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            ok () {-->
<!--//                this.$Message.info('Clicked ok');-->
<!--            },-->
<!--            cancel () {-->
<!--//                this.$Message.info('Clicked cancel');-->
<!--            },-->
<!--            openMessage () {-->
<!--                this.$Message.info({-->
<!--                    content: 'hello world',-->
<!--                    duration: 2-->
<!--                });-->
<!--            },-->
<!--            handleSpinShow () {-->
<!--                this.$Spin.show();-->
<!--            },-->
<!--        }-->
<!--    }-->
<!--</script>-->
