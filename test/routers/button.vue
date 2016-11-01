<template>
    <i-button>Default</i-button>
    <i-button type="primary">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <br><br>
    <i-button type="primary" size="large">Large</i-button>
    <i-button type="primary">Default</i-button>
    <i-button type="primary" size="small">Small</i-button>
    <br><br>
    <i-button>Default</i-button>
    <i-button disabled>Default(Disabled)</i-button>
    <br><br>
    <i-button type="primary">Primary</i-button>
    <i-button type="primary" disabled>Primary(Disabled)</i-button>
    <br><br>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
    <br><br>
    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
    <i-button type="primary" icon="ios-search">搜索</i-button>
    <br><br>
    <i-button type="ghost" shape="circle">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost">
        <Icon type="search"></Icon>
        搜索
    </i-button>
    <i-button type="ghost" shape="circle" size="large">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost" shape="circle" size="small">
        <Icon type="search"></Icon>
    </i-button>
    <br><br><br>
    <i-button type="primary" loading>Loading...</i-button>
    <i-button type="primary" loading size="large">Loading...</i-button>
    <i-button type="primary" loading size="small">Loading...</i-button>
    <i-button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <i-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <h4>基本</h4>
    <Button-group size="large">
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">R</i-button>
    </Button-group>
    <h4>配合图标</h4>
    <Button-group>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary" icon="cloud"></i-button>
        <i-button type="primary" icon="upload"></i-button>
    </Button-group>
    <Modal
            :visible="true"
            title="普通的Modal对话框标题">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
        <div style="width: 200px">
            <i-select :model.sync="model6" >
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai" disabled>上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </div>

    </Modal>
    <i-select :model.sync="model6" >
        <i-option value="beijing">北京市</i-option>
        <i-option value="shanghai" disabled>上海市</i-option>
        <i-option value="shenzhen">深圳市</i-option>
    </i-select>
</template>
<script>
    import { Button, Icon, Input, Switch, Radio, Checkbox, InputNumber, Row, Col, Page, Modal, iSelect, iOption } from 'iview';
    const ButtonGroup = Button.Group;
    const RadioGroup = Radio.Group;
    const CheckboxGroup = Checkbox.Group;

    export default {
        components: {
            iButton: Button,
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
            Page,
            Modal,
            iSelect,
            iOption
        },
        props: {

        },
        data () {
            return {
                loading: false,
                loading2: false,
                model6: ''
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
