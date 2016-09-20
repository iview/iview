<template>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <br><br>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br><br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br><br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br><br>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">搜索</Button>
    <br><br>
    <Button type="ghost" shape="circle">
        <Icon type="search"></Icon>
    </Button>
    <Button type="ghost">
        <Icon type="search"></Icon>
        搜索
    </Button>
    <Button type="ghost" shape="circle" size="large">
        <Icon type="search"></Icon>
    </Button>
    <Button type="ghost" shape="circle" size="small">
        <Icon type="search"></Icon>
    </Button>
    <br><br><br>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" loading size="large">Loading...</Button>
    <Button type="primary" loading size="small">Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <h4>基本</h4>
    <Button-group size="large">
        <Button>取消</Button>
        <Button type="primary">确定</Button>
    </Button-group>
    <Button-group>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">R</Button>
    </Button-group>
    <h4>配合图标</h4>
    <Button-group>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </Button>
        <Button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </Button>
    </Button-group>
    <Button-group>
        <Button type="primary" icon="cloud"></Button>
        <Button type="primary" icon="upload"></Button>
    </Button-group>
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
                loading: false,
                loading2: false
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
