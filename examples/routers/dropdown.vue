<template>
    <div>
        <DatePicker :capture="false" size="small" v-model="updatedate" type="datetimerange" placement="bottom-end" placeholder="请输入变更时间" style="width: 150px"></DatePicker>
        <Row><Col>修改transferClassName数据类型:
            <Button @click="changeClassName('string')">String</Button>
            <Button @click="changeClassName('object')">Object</Button>
            <Button @click="changeClassName('array')">Array</Button>
        </Col></Row>
        <Dropdown
            trigger="click"
            transfer
            :capture="false"
            @on-click="handleDropdownClick"
            :transfer-class-name="transferClassName"
            @on-clickoutside="handleClickOutside"
        >
            <Button  size="small" type="primary">
                更多
                <Icon type="md-arrow-dropdown" />
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem @mouseenter.native="()=>{clickedName='驴打滚1'}" name="驴打滚1">驴打滚1</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='炸酱面1'}" name="炸酱面1">炸酱面1</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='豆汁儿1'}" name="豆汁儿1">豆汁儿1</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='冰糖葫芦1'}" name="冰糖葫芦1">冰糖葫芦1</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='北京烤鸭1'}" name="北京烤鸭1">北京烤鸭1</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='驴打滚2'}" name="驴打滚2">驴打滚2</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='炸酱面2'}" name="炸酱面2">炸酱面2</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='豆汁儿2'}" name="豆汁儿2">豆汁儿2</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='冰糖葫芦2'}" name="冰糖葫芦2">冰糖葫芦2</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='北京烤鸭2'}" name="北京烤鸭2">北京烤鸭2</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='驴打滚3'}" name="驴打滚3">驴打滚3</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='炸酱面3'}" name="炸酱面3">炸酱面3</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='豆汁儿3'}" name="豆汁儿3">豆汁儿3</DropdownItem>
                <DropdownItem @mouseenter.native="()=>{clickedName='冰糖葫芦3'}" name="冰糖葫芦3">冰糖葫芦3</DropdownItem>
                <DropdownItem @click.native="()=>{clickedName='北京烤鸭3'}" name="北京烤鸭3">北京烤鸭3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Row><Col>测试click-outside事件:
            <Button @click.native="clickOutSide">测试Click Outside</Button>
        </Col></Row>
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
                clickedName: '',
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
            handleDropdownClick(name){
                this.$Message.info({
                    content: 'dropdown click' +' ' + name,
                    duration: 20,
                });
            },
            handleClickOutside() {
                console.log('click outside:' +this.clickedName);
            },
            clickOutSide() {
                console.log('btn click outside:' +this.clickedName);
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
