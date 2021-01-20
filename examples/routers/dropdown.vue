<template>
    <div>
        <DatePicker :capture="false" size="small" v-model="updatedate" type="datetimerange" placement="bottom-end" placeholder="请输入变更时间" style="width: 150px"></DatePicker>
        <Row><Col>修改transferClassName数据类型:
            <Button @click="changeClassName('string')">String</Button>
            <Button @click="changeClassName('object')">Object</Button>
            <Button @click="changeClassName('array')">Array</Button>
        </Col></Row>
        <Dropdown trigger="click" transfer @on-click="aaaa(111)" :transfer-class-name="transferClassName">
            <Button  size="small" type="primary">
                更多
                <Icon type="md-arrow-dropdown" />
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Cascader :data="data" v-model="value1" transfer style="width: 200px"></Cascader>
        <Select v-model="model1" multiple transfer style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Poptip trigger="click" transfer title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <ColorPicker v-model="color1" transfer />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                updatedate:null,
                color1: '#19be6b',
                value1: [],
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
                model1: [],
                transferClassName: '',
            };
        },
        methods: {
            aaaa(){
                this.$Message.info('aaaaa');
            },
            changeClassName(type) {
                switch (type) {
                    case 'string':
                        this.transferClassName = 'string-transfer-class';
                        break;
                    case 'object':
                        this.transferClassName = 'object-transfer-class';
                        break;
                    default:
                        this.transferClassName = 'array-transfer-class';
                }
            }
        },
        mounted () {

        }
    };
</script>
<style type="text/css">
    .string-transfer-class{
        background-color: yellow;
    }
    .object-transfer-class{
        background-color: red;
    }
    .array-transfer-class{
        background-color: blue;
    }
</style>
