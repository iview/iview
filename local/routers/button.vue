<style>

</style>
<template>
    <Button size="small" shape="circle" type="primary" icon="add" @click="abc">
        <Icon type="link"></Icon>
        链接
    </Button>

    <Button-group>
        <Button>上一页</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>下一页</Button>
    </Button-group>
    {{ msg }}
    <i-input placeholder="请输入邮箱" size="large" :value.sync="msg" @keyup.enter="abc"></i-input>

    <Switch size="large" @on-change="changeSwitch">
        <span slot="checkedItem">开</span>
        <span slot="unCheckedItem">关</span>
    </Switch>

    <br>

    <Radio @on-change="changeRadio">梁灏</Radio>
    <Radio checked>谦翔</Radio>

    <br><br><br>
    <Radio value="谦翔">
        谦翔
    </Radio>
    <Radio value="梁灏">
        梁灏
    </Radio>
    <Radio value="倪斌">
        倪斌
    </Radio>
    <Radio value="段模">
        段模
    </Radio>
    <br><br><br>
    <Radio-group>
        <Radio value="谦翔">
            谦翔
        </Radio>
        <Radio value="梁灏">
            梁灏
        </Radio>
        <Radio value="倪斌">
            倪斌
        </Radio>
        <Radio value="段模">
            段模
        </Radio>
    </Radio-group>
    <br><br><br>
    <Checkbox-group :model="checkbox" @on-change="groupChange">
        <Checkbox value="梁灏">梁灏</Checkbox>
        <Checkbox value="段模">段模</Checkbox>
        <Checkbox value="倪斌">倪斌</Checkbox>
    </Checkbox-group>
    <br><br><br>
    <div @click="changeCB">切换名称数据</div>
    {{ checkbox | json }}
    <br><br><br>
    <Checkbox :checked.sync="singleRadio" @on-change="singleChange">梁灏</Checkbox>
    <br>
    {{ singleRadio }}
    <div @click="singleRadio = !singleRadio">切换单个名称数据</div>
    <br><br><br>
    ------------------------------
    <Input-number :step="1.2" :value="1"></Input-number>
    {{ inumber }}
    <br><br><br>
    <Row type="flex" align="top" justify="end" class="hello world">
        <i-col span="8" offset="2" class="nihao shijie">1</i-col>
        <i-col span="8" push="3">2</i-col>
        <i-col span="8" order="2">3</i-col>
    </Row>

    <br><br><br>

    <Page :current="1" :total="100" simple></Page>
</template>
<script>
    import { Button, Icon, Input, Switch, Radio, Checkbox, InputNumber, Row, Col, Page } from 'iview';
    const ButtonGroup = Button.Group;
    const RadioGroup = Radio.Group;
    const CheckboxGroup = Checkbox.Group;

    export default {
        components: {
            Button,
            ButtonGroup,
            Icon,
            iInput: Input,
            Switch,
            Radio,
            RadioGroup,
            Checkbox,
            CheckboxGroup,
            InputNumber,
            Row,
            iCol: Col,
            Page
        },
        props: {
        
        },
        data () {
            return {
                msg: 123,
                radio: '梁灏',
                checkbox: ['倪斌'],
                inumber: 5,
                singleRadio: true
            }        
        },
        ready () {
            setTimeout(() => {
//                this.checkbox = ['倪斌', '梁灏'];
            }, 2000);
        },
        methods: {
            abc() {
                console.log(123);
            },
            changeSwitch (data) {
                console.log(data);
            },
            changeRadio (data) {
                console.log(data);
            },
            changeCB () {
                this.checkbox = ['梁灏', '段模'];
            },
            groupChange (data) {
//                console.log(data);
            },
            singleChange (data) {
//                console.log(data);
            }
        }
    }
</script>
