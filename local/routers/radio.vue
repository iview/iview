<template>
    <div>
        <Collapse active-key="2">
            <Panel key="1">
                Header1
                <Collapse active-key="2" slot="content">
                    <Panel key="1">
                        inHeader1
                        <p slot="content">inContent1</p>
                    </Panel>
                    <Panel key="2">
                        inHeader2
                        <p slot="content">inContent2</p>
                    </Panel>
                    <Panel key="3">
                        inHeader3
                        <p slot="content">inContent3</p>
                    </Panel>
                </Collapse>
            </Panel>
            <Panel key="2">
                Header2
                <p slot="content">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </Panel>
            <Panel key="3">
                Header3
                <p slot="content">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </Panel>
        </Collapse>
        <Button @click="activeKey = '2'">换</Button>
    </div>
    <Radio :checked.sync="radio">Radio</Radio>
    <Button @click="radio = !radio">change radio</Button>
    <br>
    <br>
    <Radio-group :model.sync="phone" type="button">
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
    <Radio-group :model.sync="animal" type="button">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>

    <Radio-group :model.sync="animal" type="button">
        <Radio value="金斑蝶" disabled></Radio>
        <Radio value="爪哇犀牛" disabled></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <br><br>
    <Radio-group :model.sync="animal" type="button" size="large">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <Radio-group :model.sync="animal" type="button">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <Radio-group :model.sync="animal" type="button" size="small">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <br><br><br><br>
    <Checkbox :checked.sync="radio">Checkbox</Checkbox>
    <br><br>
    <Checkbox-group :model="social">
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
    <br><br>
    <Checkbox :checked.sync="disabledSingle" disabled>Checkbox</Checkbox>
    <Checkbox-group :model="disabledGroup">
        <Checkbox value="香蕉" disabled></Checkbox>
        <Checkbox value="苹果" disabled></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
    <br><br>
    <Switch @on-change="change"></Switch>
    <br><br>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <br><br>
    <Switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </Switch>
    <Switch disabled></Switch>
    <Switch size="small"></Switch>
    <br><br>
    <Input-number :max="10" :min="1" :step="1.2" :value="1"></Input-number>
    <Input-number :value="2" size="small"></Input-number>
    <Input-number :value="2"></Input-number>
    <Input-number :value="2" size="large"></Input-number>
</template>
<script>
    import { Radio, Alert, Icon, Collapse, Button, Checkbox, Switch, InputNumber } from 'iview';

    const RadioGroup = Radio.Group;
    const Panel = Collapse.Panel;
    const CheckboxGroup = Checkbox.Group;

    export default {
        components: {
            Radio,
            RadioGroup,
            Alert,
            Icon,
            Collapse,
            Panel,
            Button,
            Checkbox,
            CheckboxGroup,
            Switch,
            InputNumber
        },
        props: {
        
        },
        data () {
            return {
                radio: false,
                radioGroup: '段模',
                activeKey: [1,2],
                phone: 'apple',
                animal: '爪哇犀牛',
                social: ['facebook', 'github'],
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        },
        computed: {
        
        },
        methods: {
            changeGroup (data) {
                console.log(data);
            },
            closed (data) {
                console.log(data)
            },
            change (status) {
                console.log(status);
            }
        }
    }
</script>